// YOUR BRAND NAME - Interactive Modals & Dialog Controllers (Indian Expeditions & Rounded Luxury Elements)
import confetti from 'canvas-confetti';
import { DESTINATIONS, SIGNATURE_JOURNEYS, TRAVEL_FORMATS, CURRENCIES } from '../data/destinations.js';

export class ModalController {
  constructor(currencyState) {
    this.currencyState = currencyState;
    this.activeModal = null;
    this.initElements();
    this.bindGlobalEvents();
  }

  initElements() {
    this.overlay = document.getElementById('global-modal-overlay');
    this.modalContent = document.getElementById('modal-inner-container');
  }

  bindGlobalEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeModal();
        }
      });
    }
  }

  formatPrice(amountEUR) {
    const cur = CURRENCIES[this.currencyState.current] || CURRENCIES.INR;
    const converted = Math.round(amountEUR * cur.rate);
    return `${cur.symbol}${converted.toLocaleString()}`;
  }

  openModal(htmlContent, modalType = 'standard') {
    if (!this.overlay || !this.modalContent) return;
    this.modalContent.innerHTML = htmlContent;
    this.overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      this.overlay.classList.remove('opacity-0');
      this.modalContent.classList.remove('scale-95', 'opacity-0');
      this.modalContent.classList.add('scale-100', 'opacity-100');
    });
    document.body.style.overflow = 'hidden';
    this.activeModal = modalType;

    const closeBtn = this.modalContent.querySelector('[data-close-modal]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }
  }

  closeModal() {
    if (!this.overlay || !this.modalContent) return;
    this.modalContent.classList.remove('scale-100', 'opacity-100');
    this.modalContent.classList.add('scale-95', 'opacity-0');
    this.overlay.classList.add('opacity-0');
    setTimeout(() => {
      this.overlay.classList.add('hidden');
      this.modalContent.innerHTML = '';
      document.body.style.overflow = '';
      this.activeModal = null;
    }, 280);
  }

  /* 1. Destination Discovery Modal */
  showDestinationDetails(destinationId) {
    const dest = DESTINATIONS.find(d => d.id === destinationId) || DESTINATIONS[0];
    const priceFormatted = this.formatPrice(dest.startingPriceEUR);

    const html = `
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-4xl w-full mx-auto rounded-2xl border border-brand-cyan/30 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <!-- Close Button -->
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Header -->
        <div class="mb-6 pb-4 border-b border-white/10 pr-10">
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">${dest.badge}</span>
          <h2 class="text-3xl md:text-4xl font-light tracking-superwide uppercase text-white mt-1">${dest.name}</h2>
          <p class="text-xs text-brand-cyan/90 tracking-widest uppercase mt-1">${dest.subtitle}</p>
        </div>

        <!-- Hero Preview Image -->
        <div class="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8 border border-white/10">
          <img src="${dest.cardImage}" alt="${dest.name}" class="w-full h-full object-cover filter brightness-95" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#041013] via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs tracking-wider flex-wrap gap-2">
            <span class="bg-[#041013]/90 px-3.5 py-1.5 rounded-full border border-brand-cyan/30 text-brand-cyan uppercase font-mono text-[11px]">
              GPS: ${dest.coordinates}
            </span>
            <span class="bg-[#041013]/90 px-3.5 py-1.5 rounded-full border border-white/20 text-white/80 text-[11px]">
              Optimal Window: ${dest.bestSeason}
            </span>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="md:col-span-2">
            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Expedition Philosophy</h3>
            <p class="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
              ${dest.longDescription}
            </p>

            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Signature Curations</h3>
            <ul class="space-y-2 mb-6">
              ${dest.highlights.map(h => `
                <li class="flex items-start gap-2.5 text-xs text-white/75 font-light">
                  <span class="text-brand-cyan mt-0.5">✦</span>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>

            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Bespoke Progression</h3>
            <div class="space-y-3">
              ${dest.itinerarySample.map(item => `
                <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span class="text-[10px] text-brand-cyan font-mono tracking-widest block uppercase">${item.day}</span>
                  <h4 class="text-xs font-semibold text-white tracking-wider uppercase mt-0.5">${item.title}</h4>
                  <p class="text-[11px] text-white/60 font-light mt-1">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Sidebar Booking Card -->
          <div class="ocean-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between">
            <div>
              <span class="text-[9px] uppercase tracking-widest text-white/40 block">Tailored Charter Rate</span>
              <div class="text-2xl font-light tracking-wide text-white mt-1">
                From ${priceFormatted} <span class="text-xs text-white/50 font-normal">/ night</span>
              </div>
              
              <div class="space-y-3 text-xs font-light text-white/70 py-6 border-y border-white/10 my-6">
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Aviation Hub</span>
                  <span class="text-white">${dest.originHub}</span>
                </div>
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Transit Vector</span>
                  <span class="text-white">${dest.flightTime}</span>
                </div>
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Private Terminal</span>
                  <span class="text-white">${dest.airportCode}</span>
                </div>
              </div>
            </div>

            <button id="modal-prefill-booking" data-dest-id="${dest.name}" class="w-full bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-full transition-all text-center transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(46,230,200,0.3)] cursor-pointer">
              Customize This Escape
            </button>
          </div>
        </div>
      </div>
    `;

    this.openModal(html, 'expedition');

    const prefillBtn = document.getElementById('modal-prefill-booking');
    if (prefillBtn) {
      prefillBtn.addEventListener('click', () => {
        this.closeModal();
        const destSelect = document.getElementById('booking-destination-select');
        if (destSelect) {
          for (let i = 0; i < destSelect.options.length; i++) {
            if (destSelect.options[i].text.toLowerCase().includes(dest.name.toLowerCase())) {
              destSelect.selectedIndex = i;
              break;
            }
          }
        }
        const architect = document.getElementById('journey-architect');
        if (architect) {
          architect.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /* 2. Signature Journey Itinerary Modal */
  showJourneyDetails(journeyId) {
    const journey = SIGNATURE_JOURNEYS.find(j => j.id === journeyId) || SIGNATURE_JOURNEYS[0];
    const priceFormatted = this.formatPrice(journey.priceEUR);

    const html = `
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-3xl w-full mx-auto rounded-2xl border border-brand-cyan/30 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-6 pb-4 border-b border-white/10 pr-10">
          <div class="flex items-center justify-between text-xs text-brand-cyan uppercase tracking-widest mb-1 flex-wrap gap-2">
            <span>${journey.destination}</span>
            <span>${journey.duration}</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-white mt-1">${journey.title}</h2>
        </div>

        <p class="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
          ${journey.description}
        </p>

        <div class="ocean-glass p-6 rounded-2xl border border-white/10 mb-8">
          <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-4">Expedition Inclusions & Privileges</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-white/80">
            ${journey.features.map(f => `
              <div class="flex items-center gap-2.5">
                <span class="w-2 h-2 rounded-full bg-brand-cyan"></span>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div>
            <span class="text-[9px] uppercase tracking-widest text-white/40 block">${journey.badge}</span>
            <div class="text-xl font-semibold tracking-wider text-white">
              ${priceFormatted} <span class="text-xs font-normal text-white/60">${journey.priceNote}</span>
            </div>
          </div>
          <button id="request-journey-dossier-btn" class="w-full sm:w-auto bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all text-center transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(46,230,200,0.3)] cursor-pointer">
            Request Private Dossier
          </button>
        </div>
      </div>
    `;

    this.openModal(html, 'journey');

    const reqBtn = document.getElementById('request-journey-dossier-btn');
    if (reqBtn) {
      reqBtn.addEventListener('click', () => {
        this.showConsultationModal({
          subject: `Dossier Request: ${journey.title}`,
          notes: `Interested in ${journey.title} (${journey.duration}). Please dispatch the confidential dossier.`
        });
      });
    }
  }

  /* 3. Availability & Booking Engine Modal */
  showBookingConfirmation(formData) {
    const destName = formData.destination || 'Kashmir (Dal Lake & Gulmarg)';
    const travelWindow = formData.travelWindow || 'Nov 2025 - Mar 2026';
    const travelers = formData.travelers || '2 Guests (Private Villa)';
    const atmosphere = formData.atmosphere || 'Himalayan Alpine Sanctuary';

    let basePriceEUR = 6200;
    if (destName.includes('Kashmir')) basePriceEUR = 7800;
    else if (destName.includes('Kerala')) basePriceEUR = 6200;
    else if (destName.includes('Rajasthan')) basePriceEUR = 8500;
    else if (destName.includes('Andaman')) basePriceEUR = 8900;
    else if (destName.includes('Himachal')) basePriceEUR = 7200;

    const priceFormatted = this.formatPrice(basePriceEUR);

    const html = `
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-2xl w-full mx-auto rounded-2xl border border-brand-cyan/40 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div id="booking-modal-form-step">
          <div class="mb-6 pb-4 border-b border-white/10 pr-10">
            <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">EXPEDITION ARCHITECT</span>
            <h2 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-white mt-1">Confirm Availability Request</h2>
            <p class="text-xs text-white/60 font-light mt-1">Our private aviation desk and regional directors will review aircraft corridors and private estate availability.</p>
          </div>

          <!-- Summary -->
          <div class="ocean-glass p-5 rounded-xl border border-brand-cyan/20 mb-6 grid grid-cols-2 gap-4 text-xs font-light">
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Destination</span>
              <span class="text-brand-cyan font-medium">${destName}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Travel Window</span>
              <span class="text-white">${travelWindow}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Travel Party</span>
              <span class="text-white">${travelers}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Atmosphere Profile</span>
              <span class="text-white">${atmosphere}</span>
            </div>
            <div class="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between">
              <span class="text-white/50 text-[10px] uppercase tracking-widest">Indicative Charter & Sanctuary Reserve:</span>
              <span class="text-sm font-semibold tracking-wider text-brand-cyan">Approx. ${priceFormatted}</span>
            </div>
          </div>

          <!-- Form -->
          <form id="booking-confirmation-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Primary Traveler Name *</label>
                <input required type="text" id="traveler-name" placeholder="Full Name" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Confidential Email *</label>
                <input required type="email" id="traveler-email" placeholder="voyager@domain.com" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Direct Phone / WhatsApp</label>
                <input type="tel" id="traveler-phone" placeholder="+91 98765 43210" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Departure City / Hub</label>
                <input type="text" id="traveler-city" placeholder="New Delhi / Mumbai / Bengaluru" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
            </div>

            <div>
              <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Bespoke Requirements / Dietary / Aviation Preferences</label>
              <textarea rows="3" id="traveler-notes" placeholder="Private security protocol, dedicated khansama, helicopter mountain landings..." class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30"></textarea>
            </div>

            <p class="text-[10px] text-white/40 leading-relaxed italic">
              All communications are strictly covered under luxury travel confidentiality protocols.
            </p>

            <button type="submit" class="w-full bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(46,230,200,0.35)] cursor-pointer">
              Submit Bespoke Reservation Inquiry
            </button>
          </form>
        </div>

        <!-- Success Feedback -->
        <div id="booking-modal-success-step" class="hidden text-center py-8">
          <div class="w-16 h-16 mx-auto rounded-full bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center mb-6">
            <svg class="w-8 h-8 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">RESERVATION DOSSIER INITIATED</span>
          <h3 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-white mt-2 mb-3">Transmission Received</h3>
          <p class="text-xs sm:text-sm text-white/70 font-light max-w-md mx-auto leading-relaxed mb-6">
            Reference Identifier: <strong id="booking-ref-id" class="text-brand-cyan font-mono tracking-widest">AV-2026-8942</strong>. Our Regional Managing Director is orchestrating your itinerary and will reach out via confidential channel within two hours.
          </p>
          <button data-close-modal class="inline-block border border-white/30 hover:border-brand-cyan text-white hover:text-brand-cyan text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-colors cursor-pointer">
            Return to Exploration
          </button>
        </div>
      </div>
    `;

    this.openModal(html, 'booking');

    const form = document.getElementById('booking-confirmation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const randRef = `AV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#2ee6c8', '#ffffff', '#072428', '#25c7ad']
        });

        const stepForm = document.getElementById('booking-modal-form-step');
        const stepSuccess = document.getElementById('booking-modal-success-step');
        const refElem = document.getElementById('booking-ref-id');
        if (refElem) refElem.textContent = randRef;
        if (stepForm && stepSuccess) {
          stepForm.classList.add('hidden');
          stepSuccess.classList.remove('hidden');
        }
      });
    }
  }

  /* 4. Private Consultation Scheduler */
  showConsultationModal(initialData = {}) {
    const html = `
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-xl w-full mx-auto rounded-2xl border border-brand-cyan/40 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div id="consultation-form-wrapper">
          <div class="mb-6 pb-4 border-b border-white/10 pr-10">
            <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">ATELIER DIRECTORS</span>
            <h2 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-white mt-1">Schedule Consultation</h2>
            <p class="text-xs text-white/60 font-light mt-1">Speak directly with our senior journey architects to curate an unprecedented Indian voyage.</p>
          </div>

          <form id="consultation-form" class="space-y-4">
            <div>
              <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Your Name *</label>
              <input required type="text" id="consult-name" placeholder="Full Name" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Confidential Email *</label>
                <input required type="email" id="consult-email" placeholder="voyager@domain.com" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Telephone / WhatsApp</label>
                <input type="tel" id="consult-phone" placeholder="+91 98765 43210" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Consultation Medium</label>
                <select class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-3.5 rounded-xl focus:border-brand-cyan focus:ring-0 uppercase tracking-wider">
                  <option>Encrypted Video Conference</option>
                  <option>Private Phone Briefing</option>
                  <option>In-Person: New Delhi Atelier</option>
                  <option>In-Person: Mumbai Nariman Point</option>
                  <option>In-Person: Bengaluru Suite</option>
                  <option>In-Person: Jaipur Royal Palace</option>
                </select>
              </div>
              <div>
                <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Preferred Time Zone</label>
                <select class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-3.5 rounded-xl focus:border-brand-cyan focus:ring-0 uppercase tracking-wider">
                  <option>IST / GMT+5:30 (India Standard Time)</option>
                  <option>CET / GMT+1 (Geneva / Paris)</option>
                  <option>GMT (London)</option>
                  <option>EST (New York)</option>
                  <option>SGT (Singapore / Dubai)</option>
                </select>
              </div>
            </div>

            <div>
              <label class="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Voyage Intent / Specific Destinations</label>
              <textarea rows="3" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30">${initialData.notes || ''}</textarea>
            </div>

            <button type="submit" class="w-full bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(46,230,200,0.3)] cursor-pointer">
              Confirm Consultation Request
            </button>
          </form>
        </div>

        <div id="consultation-success" class="hidden text-center py-8">
          <div class="w-16 h-16 mx-auto rounded-full bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center mb-6">
            <svg class="w-8 h-8 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">APPOINTMENT SECURED</span>
          <h3 class="text-2xl font-light tracking-wide uppercase text-white mt-2 mb-3">Consultation Registered</h3>
          <p class="text-xs text-white/70 font-light max-w-sm mx-auto leading-relaxed mb-6">
            Our Managing Director's office will dispatch your secure conference access codes and calendar briefing file.
          </p>
          <button data-close-modal class="border border-white/30 hover:border-brand-cyan text-white hover:text-brand-cyan text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-colors cursor-pointer">
            Close Window
          </button>
        </div>
      </div>
    `;

    this.openModal(html, 'consultation');

    const form = document.getElementById('consultation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#2ee6c8', '#ffffff']
        });
        document.getElementById('consultation-form-wrapper')?.classList.add('hidden');
        document.getElementById('consultation-success')?.classList.remove('hidden');
      });
    }
  }

  /* 5. Live Search Modal */
  showSearchModal() {
    const html = `
      <div class="relative ocean-glass-card p-6 md:p-8 max-w-3xl w-full mx-auto rounded-2xl border border-brand-cyan/40 text-white max-h-[85vh] flex flex-col shadow-2xl">
        <button data-close-modal aria-label="Close search" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-4 pr-10">
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">INDIAN EXPEDITION INDEX</span>
          <h2 class="text-xl md:text-2xl font-light tracking-wide uppercase text-white mt-1">Search Destinations & Sanctuaries</h2>
        </div>

        <div class="relative mb-6">
          <input type="text" id="live-search-input" autofocus placeholder="Search Kashmir, Kerala, Rajasthan, Andaman, Spiti, Dawki..." class="w-full bg-[#041013]/90 border border-brand-cyan/40 text-white text-sm py-3.5 pl-11 pr-4 rounded-full focus:border-brand-cyan focus:ring-0 placeholder-white/30" />
          <svg class="w-5 h-5 absolute left-4 top-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <!-- Quick Filters -->
        <div class="flex flex-wrap gap-2 mb-6 text-[10px] tracking-wider uppercase items-center">
          <span class="text-white/40 py-1">Quick Select:</span>
          ${['Kashmir', 'Kerala', 'Rajasthan', 'Andaman', 'Himachal', 'Meghalaya', 'Goa'].map(t => `
            <button class="search-tag-btn px-3 py-1 bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan text-white/80 hover:text-white transition-colors rounded-full cursor-pointer" data-tag="${t}">
              ${t}
            </button>
          `).join('')}
        </div>

        <!-- Results List -->
        <div id="search-results-container" class="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2"></div>
      </div>
    `;

    this.openModal(html, 'search');

    const searchInput = document.getElementById('live-search-input');
    const resultsContainer = document.getElementById('search-results-container');
    const tagBtns = this.modalContent.querySelectorAll('.search-tag-btn');

    const performSearch = (query) => {
      const q = query.toLowerCase().trim();
      if (!resultsContainer) return;

      const matchingDests = DESTINATIONS.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.region.toLowerCase().includes(q) || 
        d.description.toLowerCase().includes(q) ||
        d.highlights.some(h => h.toLowerCase().includes(q))
      );

      const matchingJourneys = SIGNATURE_JOURNEYS.filter(j => 
        j.title.toLowerCase().includes(q) || 
        j.destination.toLowerCase().includes(q) || 
        j.description.toLowerCase().includes(q)
      );

      if (matchingDests.length === 0 && matchingJourneys.length === 0) {
        resultsContainer.innerHTML = `
          <div class="text-center py-8 text-white/50 text-xs">
            No confidential itineraries matching "${query}". Try searching "Kashmir", "Rajasthan", or "Kerala".
          </div>
        `;
        return;
      }

      let resHTML = '';

      if (matchingDests.length > 0) {
        resHTML += `<div class="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase pb-1 border-b border-white/10">Destinations</div>`;
        matchingDests.forEach(d => {
          resHTML += `
            <div class="search-item-card flex items-center justify-between p-3 ocean-glass border border-white/10 hover:border-brand-cyan/40 transition-colors cursor-pointer rounded-xl" data-type="dest" data-id="${d.id}">
              <div class="flex items-center gap-3">
                <img src="${d.cardImage}" alt="${d.name}" class="w-12 h-12 object-cover rounded-lg" />
                <div>
                  <h4 class="text-xs font-semibold uppercase text-white tracking-wider">${d.name}</h4>
                  <p class="text-[10px] text-brand-cyan/80 uppercase">${d.subtitle}</p>
                </div>
              </div>
              <span class="text-xs text-brand-cyan uppercase tracking-wider font-semibold">View →</span>
            </div>
          `;
        });
      }

      if (matchingJourneys.length > 0) {
        resHTML += `<div class="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase pt-3 pb-1 border-b border-white/10">Signature Expeditions</div>`;
        matchingJourneys.forEach(j => {
          resHTML += `
            <div class="search-item-card flex items-center justify-between p-3 ocean-glass border border-white/10 hover:border-brand-cyan/40 transition-colors cursor-pointer rounded-xl" data-type="journey" data-id="${j.id}">
              <div>
                <h4 class="text-xs font-semibold uppercase text-white tracking-wider">${j.title}</h4>
                <p class="text-[10px] text-white/50 uppercase">${j.destination} • ${j.duration}</p>
              </div>
              <span class="text-xs text-brand-cyan uppercase tracking-wider font-semibold">View →</span>
            </div>
          `;
        });
      }

      resultsContainer.innerHTML = resHTML;

      resultsContainer.querySelectorAll('.search-item-card').forEach(card => {
        card.addEventListener('click', () => {
          const type = card.dataset.type;
          const id = card.dataset.id;
          this.closeModal();
          setTimeout(() => {
            if (type === 'dest') this.showDestinationDetails(id);
            else if (type === 'journey') this.showJourneyDetails(id);
          }, 300);
        });
      });
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
      });
      performSearch('');
    }

    tagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = btn.dataset.tag;
          performSearch(btn.dataset.tag);
        }
      });
    });
  }

  /* 6. Lookbook Viewer Modal */
  showLookbookModal() {
    const slides = [
      { img: '/images/hero-kashmir-4k.jpg', title: 'Dal Lake & Mughal Waterways at Dawn', location: 'Srinagar, Kashmir' },
      { img: '/images/dest-kerala.jpg', title: 'Misty Cloud Forests & Tea Planters’ Estates', location: 'Munnar, Kerala' },
      { img: '/images/dest-rajasthan.jpg', title: 'Lake Pichola Floating Palace Sanctuary', location: 'Udaipur, Rajasthan' },
      { img: '/images/dest-andaman.jpg', title: 'Radhanagar Turquoise Beach & Coral Atolls', location: 'Havelock, Andaman' },
      { img: '/images/format-houseboat.jpg', title: 'Presidential Solar Kettuvallam Houseboats', location: 'Alleppey Backwaters' },
      { img: '/images/format-himalayas.jpg', title: 'Glacial Passes & High Altitude Moonscapes', location: 'Spiti Valley & Manali' }
    ];

    let currentSlide = 0;

    const html = `
      <div class="relative ocean-glass-card p-6 md:p-8 max-w-4xl w-full mx-auto rounded-2xl border border-brand-cyan/40 text-white max-h-[90vh] flex flex-col shadow-2xl">
        <button data-close-modal aria-label="Close lookbook" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none z-20 rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-4 pr-10">
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">YOUR BRAND NAME • INDIAN ARCHIVES</span>
          <h2 class="text-xl md:text-2xl font-light tracking-wide uppercase text-white mt-1">2026 Indian Lookbook Portfolio</h2>
        </div>

        <!-- Carousel Slide Window -->
        <div class="relative h-72 sm:h-96 md:h-[420px] w-full overflow-hidden rounded-xl border border-white/10 mb-4 bg-black">
          <img id="lookbook-slide-img" src="${slides[0].img}" alt="${slides[0].title}" class="w-full h-full object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#041013] via-transparent to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span id="lookbook-slide-loc" class="text-brand-cyan text-[10px] tracking-mega uppercase font-mono block">${slides[0].location}</span>
              <h3 id="lookbook-slide-title" class="text-lg md:text-xl font-light tracking-wider text-white uppercase mt-0.5">${slides[0].title}</h3>
            </div>
            <span id="lookbook-slide-counter" class="text-xs font-mono tracking-widest text-white/70 bg-[#041013]/80 px-3 py-1 rounded-full border border-white/15">
              1 / ${slides.length}
            </span>
          </div>

          <!-- Controls -->
          <button id="lookbook-prev-btn" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 ocean-glass rounded-full flex items-center justify-center text-white hover:text-brand-cyan transition-colors cursor-pointer">
            ←
          </button>
          <button id="lookbook-next-btn" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 ocean-glass rounded-full flex items-center justify-center text-white hover:text-brand-cyan transition-colors cursor-pointer">
            →
          </button>
        </div>

        <div class="flex items-center justify-between text-xs text-white/60">
          <span>Private edition strictly compiled for registered patrons.</span>
          <button id="download-lookbook-pdf-btn" class="text-brand-cyan uppercase tracking-wider font-semibold hover:underline cursor-pointer">
            Request High-Res Dossier PDF ↓
          </button>
        </div>
      </div>
    `;

    this.openModal(html, 'lookbook');

    const img = document.getElementById('lookbook-slide-img');
    const title = document.getElementById('lookbook-slide-title');
    const loc = document.getElementById('lookbook-slide-loc');
    const counter = document.getElementById('lookbook-slide-counter');

    const updateSlide = () => {
      const s = slides[currentSlide];
      if (img) img.src = s.img;
      if (title) title.textContent = s.title;
      if (loc) loc.textContent = s.location;
      if (counter) counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    };

    document.getElementById('lookbook-prev-btn')?.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    });

    document.getElementById('lookbook-next-btn')?.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    });

    document.getElementById('download-lookbook-pdf-btn')?.addEventListener('click', () => {
      this.closeModal();
      this.showConsultationModal({
        notes: 'Please transmit the official 2026 YOUR BRAND NAME Indian Lookbook PDF dossier.'
      });
    });
  }
}
