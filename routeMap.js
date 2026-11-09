// YOUR BRAND NAME - Cinematic Aeronautical Route Map Engine (Indian Corridors)

export class RouteMapEngine {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.currentDestinationIndex = 0;
    this.options = options;
    
    // Indian Flight Corridors (ViewBox 0 0 1000 600)
    this.routes = [
      {
        id: 'kashmir',
        name: 'Kashmir',
        origin: { label: 'New Delhi (DEL)', x: 480, y: 310 },
        destination: { label: 'Srinagar (SXR)', x: 420, y: 140 },
        controlPoint: { x: 440, y: 220 },
        coordinates: '34.0837° N, 74.7973° E',
        sector: 'CAPITAL ➔ PIR PANJAL HIMALAYAS',
        distance: '640 KM • 1H 15M DIRECT',
        aircraft: 'PILATUS PC-24 / HELI SHUTTLE'
      },
      {
        id: 'kerala',
        name: 'Kerala',
        origin: { label: 'Mumbai (BOM)', x: 390, y: 370 },
        destination: { label: 'Cochin (COK)', x: 430, y: 530 },
        controlPoint: { x: 395, y: 460 },
        coordinates: '9.4981° N, 76.3388° E',
        sector: 'ARABIAN SEA ➔ MALABAR BACKWATERS',
        distance: '1,065 KM • 1H 45M CHARTER',
        aircraft: 'EMBRAER PHENOM 300'
      },
      {
        id: 'rajasthan',
        name: 'Rajasthan',
        origin: { label: 'New Delhi (DEL)', x: 480, y: 310 },
        destination: { label: 'Udaipur (UDR)', x: 370, y: 350 },
        controlPoint: { x: 410, y: 315 },
        coordinates: '24.5854° N, 73.7125° E',
        sector: 'DELHI ➔ LAKE PICHOLA SANCTUARY',
        distance: '570 KM • 1H 10M CHARTER',
        aircraft: 'DASSAULT FALCON 2000'
      },
      {
        id: 'andaman',
        name: 'Andaman',
        origin: { label: 'Chennai (MAA)', x: 500, y: 480 },
        destination: { label: 'Port Blair (IXZ)', x: 740, y: 510 },
        controlPoint: { x: 620, y: 470 },
        coordinates: '11.9761° N, 92.9876° E',
        sector: 'COROMANDEL ➔ BAY OF BENGAL ATOLLS',
        distance: '1,370 KM • 2H 15M CHARTER',
        aircraft: 'BOMBARDIER CHALLENGER 350'
      }
    ];

    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setDestination(index) {
    if (index >= 0 && index < this.routes.length) {
      this.currentDestinationIndex = index;
      this.render();
    }
  }

  render() {
    const r = this.routes[this.currentDestinationIndex];
    const pathD = `M ${r.origin.x} ${r.origin.y} Q ${r.controlPoint.x} ${r.controlPoint.y} ${r.destination.x} ${r.destination.y}`;

    this.container.innerHTML = `
      <div class="relative w-full h-full pointer-events-none select-none">
        <!-- SVG Navigation Map Canvas -->
        <svg class="w-full h-full object-cover" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            <radialGradient id="beaconGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#2ee6c8" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#2ee6c8" stop-opacity="0"/>
            </radialGradient>

            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
              <stop offset="60%" stop-color="#2ee6c8" stop-opacity="0.85" />
              <stop offset="100%" stop-color="#2ee6c8" stop-opacity="1" />
            </linearGradient>
          </defs>

          <!-- Ambient Latitude / Longitude Subtle Aeronautical Grid Lines -->
          <g opacity="0.12" stroke="#2ee6c8" stroke-width="0.75" stroke-dasharray="4 8">
            <line x1="50" y1="120" x2="950" y2="120" />
            <line x1="50" y1="240" x2="950" y2="240" />
            <line x1="50" y1="360" x2="950" y2="360" />
            <line x1="50" y1="480" x2="950" y2="480" />
            
            <line x1="200" y1="40" x2="200" y2="560" />
            <line x1="400" y1="40" x2="400" y2="560" />
            <line x1="600" y1="40" x2="600" y2="560" />
            <line x1="800" y1="40" x2="800" y2="560" />
          </g>

          <!-- Rotating Compass Rose Accent (Top Right) -->
          <g transform="translate(880, 100) scale(0.65)" opacity="0.25">
            <circle cx="0" cy="0" r="45" stroke="#2ee6c8" stroke-width="1" stroke-dasharray="2 3" class="animate-spin-slow origin-center"/>
            <circle cx="0" cy="0" r="30" stroke="#ffffff" stroke-width="0.75" />
            <line x1="0" y1="-50" x2="0" y2="50" stroke="#2ee6c8" stroke-width="1.2" />
            <line x1="-50" y1="0" x2="50" y2="0" stroke="#2ee6c8" stroke-width="1.2" />
            <text x="0" y="-55" fill="#2ee6c8" font-size="10" font-family="Montserrat" text-anchor="middle" font-weight="600">N</text>
          </g>

          <!-- Flight Path Shadow / Glow -->
          <path d="${pathD}" stroke="#2ee6c8" stroke-width="4" stroke-linecap="round" opacity="0.25" filter="url(#neon-glow)" />

          <!-- Main Dynamic Flight Path (Animated Stroke Dash) -->
          <path id="active-flight-path" d="${pathD}" stroke="url(#routeGradient)" stroke-width="2" stroke-linecap="round" stroke-dasharray="8 6" class="animate-dash-flow" />

          <!-- Origin Hub Waypoint Marker -->
          <g transform="translate(${r.origin.x}, ${r.origin.y})">
            <circle cx="0" cy="0" r="4" fill="#ffffff" opacity="0.8" />
            <circle cx="0" cy="0" r="10" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 2" opacity="0.4" />
            <text x="-12" y="-12" fill="#ffffff" opacity="0.6" font-size="9" font-family="Montserrat" letter-spacing="1.5" text-anchor="end" font-weight="500">
              ORIGIN: ${r.origin.label}
            </text>
          </g>

          <!-- Destination Target Pulse Rings -->
          <g transform="translate(${r.destination.x}, ${r.destination.y})">
            <circle cx="0" cy="0" r="32" fill="url(#beaconGradient)" class="animate-ping opacity-25" style="animation-duration: 3s;" />
            <circle cx="0" cy="0" r="20" stroke="#2ee6c8" stroke-width="1" opacity="0.4" class="animate-pulse" />
            <circle cx="0" cy="0" r="11" stroke="#2ee6c8" stroke-width="1.5" />
            <circle cx="0" cy="0" r="4.5" fill="#2ee6c8" filter="url(#neon-glow)" />
            
            <line x1="-16" y1="0" x2="-7" y2="0" stroke="#2ee6c8" stroke-width="1.2" />
            <line x1="7" y1="0" x2="16" y2="0" stroke="#2ee6c8" stroke-width="1.2" />
            <line x1="0" y1="-16" x2="0" y2="-7" stroke="#2ee6c8" stroke-width="1.2" />
            <line x1="0" y1="7" x2="0" y2="16" stroke="#2ee6c8" stroke-width="1.2" />

            <g transform="translate(18, 5)">
              <rect x="-4" y="-12" width="145" height="26" fill="#041013" fill-opacity="0.75" stroke="#2ee6c8" stroke-width="0.6" rx="4" />
              <text x="6" y="-1" fill="#2ee6c8" font-size="9" font-family="Montserrat" font-weight="600" letter-spacing="1">
                WAYPOINT: ${r.destination.label}
              </text>
              <text x="6" y="9" fill="#ffffff" opacity="0.65" font-size="7.5" font-family="Montserrat" letter-spacing="0.5">
                ${r.coordinates}
              </text>
            </g>
          </g>

          <!-- Aircraft Silhouette Marker Traveling Along Flight Path -->
          <g id="aircraft-glyph">
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path="${pathD}" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
            <g transform="scale(0.8) translate(-12, -12)">
              <circle cx="12" cy="12" r="14" fill="#2ee6c8" fill-opacity="0.15" />
              <path d="M12 2L15 9L22 11L15 14L15 19L12 17L9 19L9 14L2 11L9 9L12 2Z" fill="#2ee6c8" stroke="#041013" stroke-width="1" />
            </g>
          </g>
        </svg>

        <!-- Glassmorphism Telemetry HUD Overlay (Desktop) -->
        <div class="absolute bottom-28 right-6 md:right-14 lg:right-20 pointer-events-auto hidden sm:block">
          <div class="ocean-glass p-3.5 md:p-4 rounded-xl border border-brand-cyan/25 backdrop-blur-md text-left shadow-2xl transition-all duration-300 hover:border-brand-cyan/50">
            <div class="flex items-center justify-between gap-6 mb-2 border-b border-white/10 pb-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                <span class="text-[9px] font-semibold tracking-widest text-brand-cyan uppercase">FLIGHT TELEMETRY</span>
              </div>
              <span class="text-[9px] font-mono tracking-wider text-white/50">PRIVATE CHARTER</span>
            </div>
            
            <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] font-mono">
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Sector</span>
                <span class="text-white font-medium">${r.sector}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Coordinates</span>
                <span class="text-brand-cyan font-medium">${r.coordinates}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Cruising Airframe</span>
                <span class="text-white/80">${r.aircraft}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Transit Vector</span>
                <span class="text-white/80">${r.distance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
