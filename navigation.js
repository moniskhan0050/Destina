// YOUR BRAND NAME - Navigation, Currency & Ambient Soundscape Controller
import { CURRENCIES } from '../data/destinations.js';

export class NavigationController {
  constructor(currencyState, onCurrencyChange) {
    this.currencyState = currencyState;
    this.onCurrencyChange = onCurrencyChange;
    this.isDrawerOpen = false;
    this.audioContext = null;
    this.isAudioPlaying = false;
    this.noiseNode = null;
    this.gainNode = null;

    this.initElements();
    this.bindEvents();
    this.initScrollSpy();
  }

  initElements() {
    this.hamburgerBtn = document.getElementById('hamburger-menu-btn');
    this.mobileDrawer = document.getElementById('mobile-drawer-nav');
    this.drawerBackdrop = document.getElementById('drawer-backdrop');
    this.drawerCloseBtn = document.getElementById('drawer-close-btn');
    this.currencySelectors = document.querySelectorAll('[data-currency-select]');
    this.audioToggleBtn = document.getElementById('ambient-audio-toggle');
  }

  bindEvents() {
    // Hamburger Menu Drawer
    if (this.hamburgerBtn) {
      this.hamburgerBtn.addEventListener('click', () => this.toggleDrawer(true));
    }
    if (this.drawerCloseBtn) {
      this.drawerCloseBtn.addEventListener('click', () => this.toggleDrawer(false));
    }
    if (this.drawerBackdrop) {
      this.drawerBackdrop.addEventListener('click', () => this.toggleDrawer(false));
    }

    // Close drawer when any nav link is clicked
    document.querySelectorAll('.drawer-nav-link').forEach(link => {
      link.addEventListener('click', () => this.toggleDrawer(false));
    });

    // Currency Switcher
    this.currencySelectors.forEach(select => {
      select.value = this.currencyState.current;
      select.addEventListener('change', (e) => {
        const newCur = e.target.value;
        this.currencyState.current = newCur;
        // Sync all currency dropdowns
        this.currencySelectors.forEach(s => s.value = newCur);
        if (typeof this.onCurrencyChange === 'function') {
          this.onCurrencyChange(newCur);
        }
      });
    });

    // Ambient Ocean Audio Toggle (Web Audio API synthesis)
    if (this.audioToggleBtn) {
      this.audioToggleBtn.addEventListener('click', () => this.toggleAudio());
    }
  }

  toggleDrawer(open) {
    this.isDrawerOpen = open;
    if (!this.mobileDrawer || !this.drawerBackdrop) return;

    if (open) {
      this.drawerBackdrop.classList.remove('hidden');
      this.mobileDrawer.classList.remove('hidden');
      requestAnimationFrame(() => {
        this.drawerBackdrop.classList.remove('opacity-0');
        this.mobileDrawer.classList.remove('-translate-x-full');
      });
      document.body.style.overflow = 'hidden';
    } else {
      this.drawerBackdrop.classList.add('opacity-0');
      this.mobileDrawer.classList.add('-translate-x-full');
      setTimeout(() => {
        this.drawerBackdrop.classList.add('hidden');
        this.mobileDrawer.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  initScrollSpy() {
    const sections = document.querySelectorAll('section[id], div[id="hero-section"]');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-brand-cyan');
            } else if (link.getAttribute('href')?.startsWith('#')) {
              link.classList.remove('text-brand-cyan');
            }
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* Procedural Soft Ocean Waves Generator using Web Audio API */
  toggleAudio() {
    if (this.isAudioPlaying) {
      this.stopAudio();
    } else {
      this.startAudio();
    }
  }

  startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
      }

      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      // Generate pink/brown soothing noise buffer
      const bufferSize = this.audioContext.sampleRate * 2;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      this.noiseNode = this.audioContext.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Filter to simulate muffled deep ocean surf
      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.audioContext.currentTime);

      // Low frequency oscillator for wave swells
      const lfo = this.audioContext.createOscillator();
      lfo.frequency.setValueAtTime(0.12, this.audioContext.currentTime);
      const lfoGain = this.audioContext.createGain();
      lfoGain.gain.setValueAtTime(200, this.audioContext.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.audioContext.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.15, this.audioContext.currentTime + 3);

      this.noiseNode.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);

      this.noiseNode.start();
      this.isAudioPlaying = true;
      this.updateAudioButtonState(true);
    } catch (err) {
      console.warn('Audio synthesis not supported or blocked by user gesture:', err);
    }
  }

  stopAudio() {
    if (this.gainNode && this.audioContext) {
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 1.5);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.noiseNode?.disconnect();
        } catch (e) {}
        this.isAudioPlaying = false;
        this.updateAudioButtonState(false);
      }, 1500);
    }
  }

  updateAudioButtonState(playing) {
    if (!this.audioToggleBtn) return;
    const wavesIcon = this.audioToggleBtn.querySelector('.audio-bars');
    const label = this.audioToggleBtn.querySelector('.audio-label');
    if (playing) {
      this.audioToggleBtn.classList.add('text-brand-cyan');
      this.audioToggleBtn.setAttribute('title', 'Mute Ocean Ambiance');
      wavesIcon?.classList.add('animate-pulse');
      if (label) label.textContent = 'SOUND: ON';
    } else {
      this.audioToggleBtn.classList.remove('text-brand-cyan');
      this.audioToggleBtn.setAttribute('title', 'Play Ocean Soundscape');
      wavesIcon?.classList.remove('animate-pulse');
      if (label) label.textContent = 'SOUND: OFF';
    }
  }
}
