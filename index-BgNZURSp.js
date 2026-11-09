(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`kashmir`,index:`01`,name:`Kashmir`,region:`Northern Himalayas`,badge:`01 • Northern Himalayas`,subtitle:`Dal Lake & Gulmarg Sanctuary`,tagline:`HEAVEN ON EARTH`,description:`Kashmir has been celebrated for centuries as paradise on earth – its tranquil Dal Lake shikaras, cedar pine valleys, and snow-crowned Gulmarg summits.`,longDescription:`Drift across the mirror-calm waters of Dal Lake aboard handcrafted royal cedar houseboats, take private charter helicopters to the untouched powder slopes of Gulmarg, and stroll through Mughal pleasure gardens blooming with saffron and chinar trees.`,bestSeason:`Apr – Oct (Snow: Dec – Mar)`,startingPriceEUR:520,flightTime:`1h 15m Private Charter from Delhi`,coordinates:`34.0837° N, 74.7973° E`,originHub:`New Delhi (DEL) / Mumbai (BOM)`,airportCode:`SXR (Sheikh ul-Alam Srinagar)`,heroImage:`/images/hero-kashmir-4k.jpg`,cardImage:`/images/dest-kashmir.jpg`,highlights:[`Private cedar wood royal houseboat with personal wazwan chef`,`Exclusive sunrise Shikara flotilla through the floating lotus gardens`,`Helicopter charter over the Pir Panjal range to Apharwat peak`,`Curated Pashmina spinning and saffron atelier experiences`],itinerarySample:[{day:`Day 1–3`,title:`Srinagar & Dal Lake Royal Living`,desc:`VIP tarmac greeting at Srinagar airport; private shikara escort to presidential cedar houseboat; evening wazwan banquet under starlight.`},{day:`Day 4–6`,title:`Gulmarg Meadows & Apharwat Heli-Skiing`,desc:`Private helicopter transfer to Gulmarg; high-altitude gondola solitude; fireside single-malt tastings.`},{day:`Day 7–9`,title:`Pahalgam Betaab Valley & Saffron Trails`,desc:`Chinar forest walks, Lidder river private trout angling, and Mughal garden dawn photography.`}]},{id:`kerala`,index:`02`,name:`Kerala`,region:`Malabar Coast`,badge:`02 • Malabar Coast`,subtitle:`Backwaters & Munnar Hills`,tagline:`MALABAR WATERWAYS & CLOUD FORESTS`,description:`Verdant rolling tea estates draped in morning mist, tranquil backwater lagoons navigated by royal houseboats, and ancestral Ayurvedic rejuvenation.`,longDescription:`Glide in absolute silence through the palm-fringed backwaters of Alleppey aboard a private solar-hybrid Kettuvallam. Ascend into the emerald folds of Munnar’s high-altitude tea sanctuaries where private planters’ bungalows overlook cascading mountain waterfalls.`,bestSeason:`Sep – Mar`,startingPriceEUR:440,flightTime:`1h 45m Charter from Mumbai`,coordinates:`9.4981° N, 76.3388° E`,originHub:`Bengaluru (BLR) / Mumbai (BOM)`,airportCode:`COK (Cochin International Private Apron)`,heroImage:`/images/hero-kerala-4k.jpg`,cardImage:`/images/dest-kerala.jpg`,highlights:[`Bespoke luxury Kettuvallam houseboat cruising Vembanad Lake`,`Munnar private tea estate colonial bungalow residency`,`Ancestral master-physician Ayurvedic wellness consultations`,`Private Kathakali and Kalaripayattu salon performances`],itinerarySample:[{day:`Day 1–3`,title:`Kochi Heritage & Fort Solitude`,desc:`Private colonial mansion stay; private harbor yacht cruise observing Chinese fishing nets.`},{day:`Day 4–6`,title:`Alleppey & Kumarakom Backwater Navigation`,desc:`Board dedicated presidential Kettuvallam with private chef; sunset dhow cruises and bird reserve walks.`},{day:`Day 7–9`,title:`Munnar High-Altitude Tea Estates`,desc:`Helicopter transfer to cloud-covered tea plantations; private tea master blending session.`}]},{id:`rajasthan`,index:`03`,name:`Rajasthan`,region:`Thar & Mewar`,badge:`03 • Thar & Mewar`,subtitle:`Udaipur & Golden Thar Sands`,tagline:`PALATIAL DESERT SPLENDOR`,description:`Shimmering marble palaces floating on Lake Pichola, golden sandstone citadels rising from Thar dunes, and royal polo estates.`,longDescription:`Step into royal heritage at Udaipur’s white marble island palaces floating serenely upon Lake Pichola. Journey into the golden Thar desert of Jaisalmer, staying in ultra-luxe silk tented encampments with vintage open-top desert safaris and royal polo exhibitions.`,bestSeason:`Oct – Mar`,startingPriceEUR:600,flightTime:`1h 10m Charter from Delhi`,coordinates:`24.5854° N, 73.7125° E`,originHub:`New Delhi (DEL) / Jaipur (JAI)`,airportCode:`UDR (Maharana Pratap Airport)`,heroImage:`/images/hero-rajasthan-4k.jpg`,cardImage:`/images/dest-rajasthan.jpg`,highlights:[`Private boat arrival at floating Lake Pichola palace sanctuaries`,`Helicopter transfer into secluded Thar golden dune royal tented camp`,`Private museum & royal armory viewing with family custodians`,`Desert stargazing accompanied by master Manganiyar folk musicians`],itinerarySample:[{day:`Day 1–3`,title:`Udaipur City of Lakes & Royal Mewar`,desc:`Private palace suite overlooking Pichola; royal royal solar-boat cruise; private dinner on Jagmandir Island.`},{day:`Day 4–6`,title:`Jodhpur Blue Citadel & Rohet Estancias`,desc:`Private after-hours Mehrangarh Fort entry; equestrian safaris on Marwari royal horses.`},{day:`Day 7–9`,title:`Jaisalmer & The Golden Dunes`,desc:`Luxury desert oasis tenting; dune dinners under unpolluted desert skies with live sufi performances.`}]},{id:`andaman`,index:`04`,name:`Andaman`,region:`Bay of Bengal`,badge:`04 • Bay of Bengal`,subtitle:`Havelock & Radhanagar Atolls`,tagline:`PRISTINE CORAL SANCTUARY`,description:`Powder-white beaches at Radhanagar, private superyacht sailing across untouched coral atolls, and bioluminescent night lagoons.`,longDescription:`Surrounded by crystalline turquoise waters of the Bay of Bengal, the Andaman archipelago offers unmatched tropical seclusion. Anchor off Radhanagar Beach, dive undisturbed barrier reefs with marine naturalists, and enjoy beachfront villas shaded by ancient rainforest canopies.`,bestSeason:`Oct – May`,startingPriceEUR:550,flightTime:`2h 15m Charter from Chennai`,coordinates:`11.9761° N, 92.9876° E`,originHub:`Chennai (MAA) / Kolkata (CCU)`,airportCode:`IXZ (Veer Savarkar International)`,heroImage:`/images/hero-andaman-4k.jpg`,cardImage:`/images/dest-andaman.jpg`,highlights:[`Private luxury catamaran charter across Havelock & Neil Islands`,`Exclusive night-kayaking in bioluminescent mangrove lagoons`,`PADI Master diver-led exploration of intact coral reefs`,`Secluded beachfront villa pavilion on private coastal cove`],itinerarySample:[{day:`Day 1–3`,title:`Port Blair & Seaplane to Havelock`,desc:`VIP tarmac greeting; direct seaplane link to Havelock Island; beachfront plunge pool check-in.`},{day:`Day 4–6`,title:`Radhanagar Sands & Elephant Beach Reefs`,desc:`Private yacht cruise to outer reefs; sea turtle sightings and sandbank champagne lunch.`},{day:`Day 7–9`,title:`Neil Island & Mangrove Night Kayaking`,desc:`Bioluminescence exploration; starlit private seafood banquet on private sands.`}]}],t=[{id:`royal-rajputana-grandeur`,title:`The Royal Rajputana Grandeur`,destination:`Rajasthan • Udaipur • Jodhpur • Jaisalmer`,duration:`12 Days / 11 Nights`,priceEUR:8500,priceNote:`/ couple`,description:`Experience the regal splendor of India’s grandest dynasties. From floating marble palaces in Udaipur to private helicopter links into golden Thar desert dunes and private royal polo matches.`,features:[`Private Charter Aviation Between Palaces`,`Lake Pichola Presidential Island Suite`,`After-Hours Private Access to Royal Forts`,`Dedicated Royal Khansama & Chauffeur`],badge:`All-Inclusive Royal Expedition`},{id:`himalayan-valley-of-gods`,title:`The Himalayan & Valley of Gods Sanctuary`,destination:`Kashmir & Himachal • Gulmarg • Manali • Spiti`,duration:`10 Days / 9 Nights`,priceEUR:7800,priceNote:`/ couple`,description:`Ascend into the divine roof of India. Drift on private Dal Lake cedar houseboats before taking private helicopter shuttles across Rohtang and the high-altitude moonscapes of Spiti Valley.`,features:[`Private Helicopter Transfers Over High Passes`,`Exclusive Cedar Wood Presidential Houseboat`,`Monastery Blessings with High Lamas`,`Oxygen-Calibrated Luxury Mountain Chalets`],badge:`All-Inclusive Mountain Expedition`},{id:`malabar-backwater-haven`,title:`The Malabar & Backwater Haven`,destination:`Kerala • Alleppey • Munnar • Wayanad`,duration:`8 Days / 7 Nights`,priceEUR:6200,priceNote:`/ couple`,description:`Immerse yourself in lush tropical serenity. Cruise private palm-fringed lagoons aboard a dedicated presidential Kettuvallam, accompanied by Ayurvedic wellness doctors and colonial tea estate residencies.`,features:[`Dedicated Presidential Kettuvallam Houseboat`,`Munnar Cloud-Forest Private Bungalow`,`Daily Tailored Ayurvedic Spa Therapies`,`Private Backwater Naturalist & Butler`],badge:`All-Inclusive Wellness Expedition`},{id:`emerald-andaman-expedition`,title:`The Emerald Andaman & Nicobar Expedition`,destination:`Andaman • Havelock • Neil • Barren Island`,duration:`10 Days / 9 Nights`,priceEUR:8900,priceNote:`/ couple`,description:`Sail through crystal turquoise waters aboard a chartered luxury catamaran. Snorkel pristine barrier reefs, witness bioluminescent night waters, and retreat to private coastal pavilions on Radhanagar Beach.`,features:[`Private Yacht Charter Across Archipelagos`,`Direct Seaplane Inter-Island Transfers`,`Marine Biologist Escort for Deep Reef Diving`,`Private Sandbank Dinners Under the Stars`],badge:`All-Inclusive Marine Expedition`}],n={INR:{symbol:`₹`,rate:90,label:`INR (₹)`},EUR:{symbol:`€`,rate:1,label:`EUR (€)`},USD:{symbol:`$`,rate:1.08,label:`USD ($)`},GBP:{symbol:`£`,rate:.85,label:`GBP (£)`}},r=class{constructor(e,t={}){this.container=document.getElementById(e),this.currentDestinationIndex=0,this.options=t,this.routes=[{id:`kashmir`,name:`Kashmir`,origin:{label:`New Delhi (DEL)`,x:480,y:310},destination:{label:`Srinagar (SXR)`,x:420,y:140},controlPoint:{x:440,y:220},coordinates:`34.0837° N, 74.7973° E`,sector:`CAPITAL ➔ PIR PANJAL HIMALAYAS`,distance:`640 KM • 1H 15M DIRECT`,aircraft:`PILATUS PC-24 / HELI SHUTTLE`},{id:`kerala`,name:`Kerala`,origin:{label:`Mumbai (BOM)`,x:390,y:370},destination:{label:`Cochin (COK)`,x:430,y:530},controlPoint:{x:395,y:460},coordinates:`9.4981° N, 76.3388° E`,sector:`ARABIAN SEA ➔ MALABAR BACKWATERS`,distance:`1,065 KM • 1H 45M CHARTER`,aircraft:`EMBRAER PHENOM 300`},{id:`rajasthan`,name:`Rajasthan`,origin:{label:`New Delhi (DEL)`,x:480,y:310},destination:{label:`Udaipur (UDR)`,x:370,y:350},controlPoint:{x:410,y:315},coordinates:`24.5854° N, 73.7125° E`,sector:`DELHI ➔ LAKE PICHOLA SANCTUARY`,distance:`570 KM • 1H 10M CHARTER`,aircraft:`DASSAULT FALCON 2000`},{id:`andaman`,name:`Andaman`,origin:{label:`Chennai (MAA)`,x:500,y:480},destination:{label:`Port Blair (IXZ)`,x:740,y:510},controlPoint:{x:620,y:470},coordinates:`11.9761° N, 92.9876° E`,sector:`COROMANDEL ➔ BAY OF BENGAL ATOLLS`,distance:`1,370 KM • 2H 15M CHARTER`,aircraft:`BOMBARDIER CHALLENGER 350`}],this.init()}init(){this.container&&this.render()}setDestination(e){e>=0&&e<this.routes.length&&(this.currentDestinationIndex=e,this.render())}render(){let e=this.routes[this.currentDestinationIndex],t=`M ${e.origin.x} ${e.origin.y} Q ${e.controlPoint.x} ${e.controlPoint.y} ${e.destination.x} ${e.destination.y}`;this.container.innerHTML=`
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
          <path d="${t}" stroke="#2ee6c8" stroke-width="4" stroke-linecap="round" opacity="0.25" filter="url(#neon-glow)" />

          <!-- Main Dynamic Flight Path (Animated Stroke Dash) -->
          <path id="active-flight-path" d="${t}" stroke="url(#routeGradient)" stroke-width="2" stroke-linecap="round" stroke-dasharray="8 6" class="animate-dash-flow" />

          <!-- Origin Hub Waypoint Marker -->
          <g transform="translate(${e.origin.x}, ${e.origin.y})">
            <circle cx="0" cy="0" r="4" fill="#ffffff" opacity="0.8" />
            <circle cx="0" cy="0" r="10" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 2" opacity="0.4" />
            <text x="-12" y="-12" fill="#ffffff" opacity="0.6" font-size="9" font-family="Montserrat" letter-spacing="1.5" text-anchor="end" font-weight="500">
              ORIGIN: ${e.origin.label}
            </text>
          </g>

          <!-- Destination Target Pulse Rings -->
          <g transform="translate(${e.destination.x}, ${e.destination.y})">
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
                WAYPOINT: ${e.destination.label}
              </text>
              <text x="6" y="9" fill="#ffffff" opacity="0.65" font-size="7.5" font-family="Montserrat" letter-spacing="0.5">
                ${e.coordinates}
              </text>
            </g>
          </g>

          <!-- Aircraft Silhouette Marker Traveling Along Flight Path -->
          <g id="aircraft-glyph">
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path="${t}" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
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
                <span class="text-white font-medium">${e.sector}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Coordinates</span>
                <span class="text-brand-cyan font-medium">${e.coordinates}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Cruising Airframe</span>
                <span class="text-white/80">${e.aircraft}</span>
              </div>
              <div>
                <span class="text-white/40 block text-[8px] uppercase tracking-wider">Transit Vector</span>
                <span class="text-white/80">${e.distance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}},i={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),i,!1);var a=i.exports;i.exports.create;var o=class{constructor(e){this.currencyState=e,this.activeModal=null,this.initElements(),this.bindGlobalEvents()}initElements(){this.overlay=document.getElementById(`global-modal-overlay`),this.modalContent=document.getElementById(`modal-inner-container`)}bindGlobalEvents(){document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.activeModal&&this.closeModal()}),this.overlay&&this.overlay.addEventListener(`click`,e=>{e.target===this.overlay&&this.closeModal()})}formatPrice(e){let t=n[this.currencyState.current]||n.INR,r=Math.round(e*t.rate);return`${t.symbol}${r.toLocaleString()}`}openModal(e,t=`standard`){if(!this.overlay||!this.modalContent)return;this.modalContent.innerHTML=e,this.overlay.classList.remove(`hidden`),requestAnimationFrame(()=>{this.overlay.classList.remove(`opacity-0`),this.modalContent.classList.remove(`scale-95`,`opacity-0`),this.modalContent.classList.add(`scale-100`,`opacity-100`)}),document.body.style.overflow=`hidden`,this.activeModal=t;let n=this.modalContent.querySelector(`[data-close-modal]`);n&&n.addEventListener(`click`,()=>this.closeModal())}closeModal(){this.overlay&&this.modalContent&&(this.modalContent.classList.remove(`scale-100`,`opacity-100`),this.modalContent.classList.add(`scale-95`,`opacity-0`),this.overlay.classList.add(`opacity-0`),setTimeout(()=>{this.overlay.classList.add(`hidden`),this.modalContent.innerHTML=``,document.body.style.overflow=``,this.activeModal=null},280))}showDestinationDetails(t){let n=e.find(e=>e.id===t)||e[0],r=this.formatPrice(n.startingPriceEUR),i=`
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-4xl w-full mx-auto rounded-2xl border border-brand-cyan/30 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <!-- Close Button -->
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Header -->
        <div class="mb-6 pb-4 border-b border-white/10 pr-10">
          <span class="text-[10px] font-semibold tracking-mega text-brand-cyan uppercase">${n.badge}</span>
          <h2 class="text-3xl md:text-4xl font-light tracking-superwide uppercase text-white mt-1">${n.name}</h2>
          <p class="text-xs text-brand-cyan/90 tracking-widest uppercase mt-1">${n.subtitle}</p>
        </div>

        <!-- Hero Preview Image -->
        <div class="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8 border border-white/10">
          <img src="${n.cardImage}" alt="${n.name}" class="w-full h-full object-cover filter brightness-95" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#041013] via-transparent to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs tracking-wider flex-wrap gap-2">
            <span class="bg-[#041013]/90 px-3.5 py-1.5 rounded-full border border-brand-cyan/30 text-brand-cyan uppercase font-mono text-[11px]">
              GPS: ${n.coordinates}
            </span>
            <span class="bg-[#041013]/90 px-3.5 py-1.5 rounded-full border border-white/20 text-white/80 text-[11px]">
              Optimal Window: ${n.bestSeason}
            </span>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="md:col-span-2">
            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Expedition Philosophy</h3>
            <p class="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
              ${n.longDescription}
            </p>

            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Signature Curations</h3>
            <ul class="space-y-2 mb-6">
              ${n.highlights.map(e=>`
                <li class="flex items-start gap-2.5 text-xs text-white/75 font-light">
                  <span class="text-brand-cyan mt-0.5">✦</span>
                  <span>${e}</span>
                </li>
              `).join(``)}
            </ul>

            <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-3">Bespoke Progression</h3>
            <div class="space-y-3">
              ${n.itinerarySample.map(e=>`
                <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span class="text-[10px] text-brand-cyan font-mono tracking-widest block uppercase">${e.day}</span>
                  <h4 class="text-xs font-semibold text-white tracking-wider uppercase mt-0.5">${e.title}</h4>
                  <p class="text-[11px] text-white/60 font-light mt-1">${e.desc}</p>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Sidebar Booking Card -->
          <div class="ocean-glass p-6 rounded-2xl border border-white/15 flex flex-col justify-between">
            <div>
              <span class="text-[9px] uppercase tracking-widest text-white/40 block">Tailored Charter Rate</span>
              <div class="text-2xl font-light tracking-wide text-white mt-1">
                From ${r} <span class="text-xs text-white/50 font-normal">/ night</span>
              </div>
              
              <div class="space-y-3 text-xs font-light text-white/70 py-6 border-y border-white/10 my-6">
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Aviation Hub</span>
                  <span class="text-white">${n.originHub}</span>
                </div>
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Transit Vector</span>
                  <span class="text-white">${n.flightTime}</span>
                </div>
                <div>
                  <span class="text-white/40 block text-[9px] uppercase tracking-wider">Private Terminal</span>
                  <span class="text-white">${n.airportCode}</span>
                </div>
              </div>
            </div>

            <button id="modal-prefill-booking" data-dest-id="${n.name}" class="w-full bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-full transition-all text-center transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(46,230,200,0.3)] cursor-pointer">
              Customize This Escape
            </button>
          </div>
        </div>
      </div>
    `;this.openModal(i,`expedition`);let a=document.getElementById(`modal-prefill-booking`);a&&a.addEventListener(`click`,()=>{this.closeModal();let e=document.getElementById(`booking-destination-select`);if(e){for(let t=0;t<e.options.length;t++)if(e.options[t].text.toLowerCase().includes(n.name.toLowerCase())){e.selectedIndex=t;break}}let t=document.getElementById(`journey-architect`);t&&t.scrollIntoView({behavior:`smooth`})})}showJourneyDetails(e){let n=t.find(t=>t.id===e)||t[0],r=this.formatPrice(n.priceEUR),i=`
      <div class="relative ocean-glass-card p-6 md:p-10 max-w-3xl w-full mx-auto rounded-2xl border border-brand-cyan/30 text-white max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        <button data-close-modal aria-label="Close dialog" class="absolute top-5 right-5 text-white/60 hover:text-brand-cyan transition-colors p-2 focus:outline-none rounded-full hover:bg-white/5">
          <svg class="w-6 h-6 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-6 pb-4 border-b border-white/10 pr-10">
          <div class="flex items-center justify-between text-xs text-brand-cyan uppercase tracking-widest mb-1 flex-wrap gap-2">
            <span>${n.destination}</span>
            <span>${n.duration}</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-white mt-1">${n.title}</h2>
        </div>

        <p class="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
          ${n.description}
        </p>

        <div class="ocean-glass p-6 rounded-2xl border border-white/10 mb-8">
          <h3 class="text-xs uppercase tracking-widest text-brand-cyan font-semibold mb-4">Expedition Inclusions & Privileges</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-white/80">
            ${n.features.map(e=>`
              <div class="flex items-center gap-2.5">
                <span class="w-2 h-2 rounded-full bg-brand-cyan"></span>
                <span>${e}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div>
            <span class="text-[9px] uppercase tracking-widest text-white/40 block">${n.badge}</span>
            <div class="text-xl font-semibold tracking-wider text-white">
              ${r} <span class="text-xs font-normal text-white/60">${n.priceNote}</span>
            </div>
          </div>
          <button id="request-journey-dossier-btn" class="w-full sm:w-auto bg-[#2ee6c8] hover:bg-[#25c7ad] text-[#072428] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all text-center transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(46,230,200,0.3)] cursor-pointer">
            Request Private Dossier
          </button>
        </div>
      </div>
    `;this.openModal(i,`journey`);let a=document.getElementById(`request-journey-dossier-btn`);a&&a.addEventListener(`click`,()=>{this.showConsultationModal({subject:`Dossier Request: ${n.title}`,notes:`Interested in ${n.title} (${n.duration}). Please dispatch the confidential dossier.`})})}showBookingConfirmation(e){let t=e.destination||`Kashmir (Dal Lake & Gulmarg)`,n=e.travelWindow||`Nov 2025 - Mar 2026`,r=e.travelers||`2 Guests (Private Villa)`,i=e.atmosphere||`Himalayan Alpine Sanctuary`,o=6200;t.includes(`Kashmir`)?o=7800:t.includes(`Kerala`)?o=6200:t.includes(`Rajasthan`)?o=8500:t.includes(`Andaman`)?o=8900:t.includes(`Himachal`)&&(o=7200);let s=`
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
              <span class="text-brand-cyan font-medium">${t}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Travel Window</span>
              <span class="text-white">${n}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Travel Party</span>
              <span class="text-white">${r}</span>
            </div>
            <div>
              <span class="text-white/40 block text-[9px] uppercase tracking-wider">Atmosphere Profile</span>
              <span class="text-white">${i}</span>
            </div>
            <div class="col-span-2 pt-3 border-t border-white/10 flex items-center justify-between">
              <span class="text-white/50 text-[10px] uppercase tracking-widest">Indicative Charter & Sanctuary Reserve:</span>
              <span class="text-sm font-semibold tracking-wider text-brand-cyan">Approx. ${this.formatPrice(o)}</span>
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
    `;this.openModal(s,`booking`);let c=document.getElementById(`booking-confirmation-form`);c&&c.addEventListener(`submit`,e=>{e.preventDefault();let t=`AV-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`;a({particleCount:75,spread:60,origin:{y:.6},colors:[`#2ee6c8`,`#ffffff`,`#072428`,`#25c7ad`]});let n=document.getElementById(`booking-modal-form-step`),r=document.getElementById(`booking-modal-success-step`),i=document.getElementById(`booking-ref-id`);i&&(i.textContent=t),n&&r&&(n.classList.add(`hidden`),r.classList.remove(`hidden`))})}showConsultationModal(e={}){let t=`
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
              <textarea rows="3" class="w-full bg-[#041013]/90 border border-white/20 text-white text-xs py-3 px-4 rounded-xl focus:border-brand-cyan focus:ring-0 placeholder-white/30">${e.notes||``}</textarea>
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
    `;this.openModal(t,`consultation`);let n=document.getElementById(`consultation-form`);n&&n.addEventListener(`submit`,e=>{e.preventDefault(),a({particleCount:50,spread:50,origin:{y:.6},colors:[`#2ee6c8`,`#ffffff`]}),document.getElementById(`consultation-form-wrapper`)?.classList.add(`hidden`),document.getElementById(`consultation-success`)?.classList.remove(`hidden`)})}showSearchModal(){let n=`
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
          ${[`Kashmir`,`Kerala`,`Rajasthan`,`Andaman`,`Himachal`,`Meghalaya`,`Goa`].map(e=>`
            <button class="search-tag-btn px-3 py-1 bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan text-white/80 hover:text-white transition-colors rounded-full cursor-pointer" data-tag="${e}">
              ${e}
            </button>
          `).join(``)}
        </div>

        <!-- Results List -->
        <div id="search-results-container" class="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2"></div>
      </div>
    `;this.openModal(n,`search`);let r=document.getElementById(`live-search-input`),i=document.getElementById(`search-results-container`),a=this.modalContent.querySelectorAll(`.search-tag-btn`),o=n=>{let r=n.toLowerCase().trim();if(!i)return;let a=e.filter(e=>e.name.toLowerCase().includes(r)||e.region.toLowerCase().includes(r)||e.description.toLowerCase().includes(r)||e.highlights.some(e=>e.toLowerCase().includes(r))),o=t.filter(e=>e.title.toLowerCase().includes(r)||e.destination.toLowerCase().includes(r)||e.description.toLowerCase().includes(r));if(a.length===0&&o.length===0){i.innerHTML=`
          <div class="text-center py-8 text-white/50 text-xs">
            No confidential itineraries matching "${n}". Try searching "Kashmir", "Rajasthan", or "Kerala".
          </div>
        `;return}let s=``;a.length>0&&(s+=`<div class="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase pb-1 border-b border-white/10">Destinations</div>`,a.forEach(e=>{s+=`
            <div class="search-item-card flex items-center justify-between p-3 ocean-glass border border-white/10 hover:border-brand-cyan/40 transition-colors cursor-pointer rounded-xl" data-type="dest" data-id="${e.id}">
              <div class="flex items-center gap-3">
                <img src="${e.cardImage}" alt="${e.name}" class="w-12 h-12 object-cover rounded-lg" />
                <div>
                  <h4 class="text-xs font-semibold uppercase text-white tracking-wider">${e.name}</h4>
                  <p class="text-[10px] text-brand-cyan/80 uppercase">${e.subtitle}</p>
                </div>
              </div>
              <span class="text-xs text-brand-cyan uppercase tracking-wider font-semibold">View →</span>
            </div>
          `})),o.length>0&&(s+=`<div class="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase pt-3 pb-1 border-b border-white/10">Signature Expeditions</div>`,o.forEach(e=>{s+=`
            <div class="search-item-card flex items-center justify-between p-3 ocean-glass border border-white/10 hover:border-brand-cyan/40 transition-colors cursor-pointer rounded-xl" data-type="journey" data-id="${e.id}">
              <div>
                <h4 class="text-xs font-semibold uppercase text-white tracking-wider">${e.title}</h4>
                <p class="text-[10px] text-white/50 uppercase">${e.destination} • ${e.duration}</p>
              </div>
              <span class="text-xs text-brand-cyan uppercase tracking-wider font-semibold">View →</span>
            </div>
          `})),i.innerHTML=s,i.querySelectorAll(`.search-item-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.type,n=e.dataset.id;this.closeModal(),setTimeout(()=>{t===`dest`?this.showDestinationDetails(n):t===`journey`&&this.showJourneyDetails(n)},300)})})};r&&(r.addEventListener(`input`,e=>{o(e.target.value)}),o(``)),a.forEach(e=>{e.addEventListener(`click`,()=>{r&&(r.value=e.dataset.tag,o(e.dataset.tag))})})}showLookbookModal(){let e=[{img:`/images/hero-kashmir-4k.jpg`,title:`Dal Lake & Mughal Waterways at Dawn`,location:`Srinagar, Kashmir`},{img:`/images/dest-kerala.jpg`,title:`Misty Cloud Forests & Tea Planters’ Estates`,location:`Munnar, Kerala`},{img:`/images/dest-rajasthan.jpg`,title:`Lake Pichola Floating Palace Sanctuary`,location:`Udaipur, Rajasthan`},{img:`/images/dest-andaman.jpg`,title:`Radhanagar Turquoise Beach & Coral Atolls`,location:`Havelock, Andaman`},{img:`/images/format-houseboat.jpg`,title:`Presidential Solar Kettuvallam Houseboats`,location:`Alleppey Backwaters`},{img:`/images/format-himalayas.jpg`,title:`Glacial Passes & High Altitude Moonscapes`,location:`Spiti Valley & Manali`}],t=0,n=`
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
          <img id="lookbook-slide-img" src="${e[0].img}" alt="${e[0].title}" class="w-full h-full object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#041013] via-transparent to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <span id="lookbook-slide-loc" class="text-brand-cyan text-[10px] tracking-mega uppercase font-mono block">${e[0].location}</span>
              <h3 id="lookbook-slide-title" class="text-lg md:text-xl font-light tracking-wider text-white uppercase mt-0.5">${e[0].title}</h3>
            </div>
            <span id="lookbook-slide-counter" class="text-xs font-mono tracking-widest text-white/70 bg-[#041013]/80 px-3 py-1 rounded-full border border-white/15">
              1 / ${e.length}
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
    `;this.openModal(n,`lookbook`);let r=document.getElementById(`lookbook-slide-img`),i=document.getElementById(`lookbook-slide-title`),a=document.getElementById(`lookbook-slide-loc`),o=document.getElementById(`lookbook-slide-counter`),s=()=>{let n=e[t];r&&(r.src=n.img),i&&(i.textContent=n.title),a&&(a.textContent=n.location),o&&(o.textContent=`${t+1} / ${e.length}`)};document.getElementById(`lookbook-prev-btn`)?.addEventListener(`click`,()=>{t=(t-1+e.length)%e.length,s()}),document.getElementById(`lookbook-next-btn`)?.addEventListener(`click`,()=>{t=(t+1)%e.length,s()}),document.getElementById(`download-lookbook-pdf-btn`)?.addEventListener(`click`,()=>{this.closeModal(),this.showConsultationModal({notes:`Please transmit the official 2026 YOUR BRAND NAME Indian Lookbook PDF dossier.`})})}},s=class{constructor(e,t){this.currencyState=e,this.onCurrencyChange=t,this.isDrawerOpen=!1,this.audioContext=null,this.isAudioPlaying=!1,this.noiseNode=null,this.gainNode=null,this.initElements(),this.bindEvents(),this.initScrollSpy()}initElements(){this.hamburgerBtn=document.getElementById(`hamburger-menu-btn`),this.mobileDrawer=document.getElementById(`mobile-drawer-nav`),this.drawerBackdrop=document.getElementById(`drawer-backdrop`),this.drawerCloseBtn=document.getElementById(`drawer-close-btn`),this.currencySelectors=document.querySelectorAll(`[data-currency-select]`),this.audioToggleBtn=document.getElementById(`ambient-audio-toggle`)}bindEvents(){this.hamburgerBtn&&this.hamburgerBtn.addEventListener(`click`,()=>this.toggleDrawer(!0)),this.drawerCloseBtn&&this.drawerCloseBtn.addEventListener(`click`,()=>this.toggleDrawer(!1)),this.drawerBackdrop&&this.drawerBackdrop.addEventListener(`click`,()=>this.toggleDrawer(!1)),document.querySelectorAll(`.drawer-nav-link`).forEach(e=>{e.addEventListener(`click`,()=>this.toggleDrawer(!1))}),this.currencySelectors.forEach(e=>{e.value=this.currencyState.current,e.addEventListener(`change`,e=>{let t=e.target.value;this.currencyState.current=t,this.currencySelectors.forEach(e=>e.value=t),typeof this.onCurrencyChange==`function`&&this.onCurrencyChange(t)})}),this.audioToggleBtn&&this.audioToggleBtn.addEventListener(`click`,()=>this.toggleAudio())}toggleDrawer(e){this.isDrawerOpen=e,this.mobileDrawer&&this.drawerBackdrop&&(e?(this.drawerBackdrop.classList.remove(`hidden`),this.mobileDrawer.classList.remove(`hidden`),requestAnimationFrame(()=>{this.drawerBackdrop.classList.remove(`opacity-0`),this.mobileDrawer.classList.remove(`-translate-x-full`)}),document.body.style.overflow=`hidden`):(this.drawerBackdrop.classList.add(`opacity-0`),this.mobileDrawer.classList.add(`-translate-x-full`),setTimeout(()=>{this.drawerBackdrop.classList.add(`hidden`),this.mobileDrawer.classList.add(`hidden`),document.body.style.overflow=``},300)))}initScrollSpy(){let e=document.querySelectorAll(`section[id], div[id="hero-section"]`),t=document.querySelectorAll(`a[href^="#"]`),n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let n=e.target.getAttribute(`id`);t.forEach(e=>{e.getAttribute(`href`)===`#${n}`?e.classList.add(`text-brand-cyan`):e.getAttribute(`href`)?.startsWith(`#`)&&e.classList.remove(`text-brand-cyan`)})}})},{rootMargin:`-30% 0px -60% 0px`});e.forEach(e=>n.observe(e))}toggleAudio(){this.isAudioPlaying?this.stopAudio():this.startAudio()}startAudio(){try{let e=window.AudioContext||window.webkitAudioContext;this.audioContext||=new e,this.audioContext.state===`suspended`&&this.audioContext.resume();let t=this.audioContext.sampleRate*2,n=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<t;e++){let t=Math.random()*2-1;r[e]=(i+.02*t)/1.02,i=r[e],r[e]*=3.5}this.noiseNode=this.audioContext.createBufferSource(),this.noiseNode.buffer=n,this.noiseNode.loop=!0;let a=this.audioContext.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(320,this.audioContext.currentTime);let o=this.audioContext.createOscillator();o.frequency.setValueAtTime(.12,this.audioContext.currentTime);let s=this.audioContext.createGain();s.gain.setValueAtTime(200,this.audioContext.currentTime),o.connect(s),s.connect(a.frequency),o.start(),this.gainNode=this.audioContext.createGain(),this.gainNode.gain.setValueAtTime(.01,this.audioContext.currentTime),this.gainNode.gain.exponentialRampToValueAtTime(.15,this.audioContext.currentTime+3),this.noiseNode.connect(a),a.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.noiseNode.start(),this.isAudioPlaying=!0,this.updateAudioButtonState(!0)}catch(e){console.warn(`Audio synthesis not supported or blocked by user gesture:`,e)}}stopAudio(){this.gainNode&&this.audioContext&&(this.gainNode.gain.setValueAtTime(this.gainNode.gain.value,this.audioContext.currentTime),this.gainNode.gain.exponentialRampToValueAtTime(1e-4,this.audioContext.currentTime+1.5),setTimeout(()=>{try{this.noiseNode?.stop(),this.noiseNode?.disconnect()}catch{}this.isAudioPlaying=!1,this.updateAudioButtonState(!1)},1500))}updateAudioButtonState(e){if(!this.audioToggleBtn)return;let t=this.audioToggleBtn.querySelector(`.audio-bars`),n=this.audioToggleBtn.querySelector(`.audio-label`);e?(this.audioToggleBtn.classList.add(`text-brand-cyan`),this.audioToggleBtn.setAttribute(`title`,`Mute Ocean Ambiance`),t?.classList.add(`animate-pulse`),n&&(n.textContent=`SOUND: ON`)):(this.audioToggleBtn.classList.remove(`text-brand-cyan`),this.audioToggleBtn.setAttribute(`title`,`Play Ocean Soundscape`),t?.classList.remove(`animate-pulse`),n&&(n.textContent=`SOUND: OFF`))}},c=class{constructor(){this.currencyState={current:`INR`},this.currentHeroIndex=0,this.autoAdvanceTimer=null,this.isHeroHovered=!1,this.init()}init(){this.routeMapEngine=new r(`hero-route-map-container`),this.modalController=new o(this.currencyState),this.navigationController=new s(this.currencyState,e=>{this.updateAllPrices(e)}),this.updateAllPrices(`INR`),this.setupHeroInteractions(),this.setupHeroParallax(),this.setupBookingArchitect(),this.setupCardInteractions(),this.setupActionTriggers(),this.setupNewsletter(),this.setupKeyboardShortcuts(),this.startTimelineAutoAdvance()}updateAllPrices(e){let t=n[e]||n.EUR;document.querySelectorAll(`[data-base-price]`).forEach(e=>{let n=parseFloat(e.dataset.basePrice);if(!isNaN(n)){let r=Math.round(n*t.rate),i=e.querySelector(`span`)?.outerHTML||``;e.innerHTML=`${t.symbol}${r.toLocaleString()} ${i}`}})}setupHeroInteractions(){document.querySelectorAll(`.timeline-waypoint`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.destIndex,10);isNaN(t)||(this.switchHeroDestination(t),this.resetTimelineAutoAdvance())})});let t=document.getElementById(`hero-explore-details-btn`);t&&t.addEventListener(`click`,()=>{let t=e[this.currentHeroIndex];this.modalController.showDestinationDetails(t.id)});let n=document.getElementById(`hero-section`);n&&(n.addEventListener(`mouseenter`,()=>this.isHeroHovered=!0),n.addEventListener(`mouseleave`,()=>this.isHeroHovered=!1))}switchHeroDestination(t){if(t<0||t>=e.length)return;this.currentHeroIndex=t;let n=e[t],r=document.getElementById(`hero-bg-img`);r&&(r.style.opacity=`0.3`,setTimeout(()=>{r.src=n.heroImage,r.style.opacity=`1`},200)),this.routeMapEngine.setDestination(t);let i=document.getElementById(`hero-destination-title`),a=document.getElementById(`hero-destination-tagline`),o=document.getElementById(`hero-destination-description`),s=document.getElementById(`hero-text-container`);s&&(s.classList.remove(`animate-hero-entrance`),s.offsetWidth,s.classList.add(`animate-hero-entrance`)),i&&(i.textContent=n.name.toUpperCase()),a&&(a.textContent=n.tagline),o&&(o.textContent=n.description),document.querySelectorAll(`.timeline-waypoint`).forEach((e,n)=>{let r=e.querySelector(`.waypoint-num`),i=e.querySelector(`.waypoint-bar`),a=e.querySelector(`.waypoint-label`);n===t?(e.setAttribute(`aria-current`,`step`),r?.classList.remove(`text-white/50`),r?.classList.add(`text-brand-cyan`,`font-semibold`),a?.classList.remove(`text-white/60`,`font-light`),a?.classList.add(`text-white`,`font-medium`),i&&(i.classList.remove(`w-0`),i.classList.add(`w-full`,`bg-brand-cyan`))):(e.removeAttribute(`aria-current`),r?.classList.remove(`text-brand-cyan`,`font-semibold`),r?.classList.add(`text-white/50`),a?.classList.remove(`text-white`,`font-medium`),a?.classList.add(`text-white/60`,`font-light`),i&&(i.classList.remove(`w-full`),i.classList.add(`w-0`)))})}startTimelineAutoAdvance(){this.autoAdvanceTimer=setInterval(()=>{if(!this.isHeroHovered){let t=(this.currentHeroIndex+1)%e.length;this.switchHeroDestination(t)}},9e3)}resetTimelineAutoAdvance(){this.autoAdvanceTimer&&clearInterval(this.autoAdvanceTimer),this.startTimelineAutoAdvance()}setupHeroParallax(){let e=document.getElementById(`hero-section`),t=document.getElementById(`hero-bg-img`),n=document.getElementById(`hero-route-map-container`),r=document.getElementById(`hero-text-container`);if(!e||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let i=!1;e.addEventListener(`mousemove`,a=>{i||(i=!0,requestAnimationFrame(()=>{let o=e.getBoundingClientRect(),s=(a.clientX-o.left)/o.width-.5,c=(a.clientY-o.top)/o.height-.5;t&&(t.style.transform=`scale(1.08) translate(${s*-16}px, ${c*-16}px)`),n&&(n.style.transform=`translate(${s*-8}px, ${c*-8}px)`),r&&(r.style.transform=`translate(${s*6}px, ${c*6}px)`),i=!1}))}),e.addEventListener(`mouseleave`,()=>{t&&(t.style.transform=`scale(1.05) translate(0px, 0px)`),n&&(n.style.transform=`translate(0px, 0px)`),r&&(r.style.transform=`translate(0px, 0px)`)})}setupBookingArchitect(){let e=document.getElementById(`journey-architect-form`),t=document.getElementById(`booking-check-avail-btn`);e&&e.addEventListener(`submit`,e=>{e.preventDefault();let n=document.getElementById(`booking-destination-select`)?.value,r=document.getElementById(`booking-dates-input`)?.value,i=document.getElementById(`booking-travelers-select`)?.value,a=document.getElementById(`booking-style-select`)?.value;if(t){let e=t.innerHTML;t.disabled=!0,t.innerHTML=`
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-[#072428]" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Querying Corridors...</span>
          `,setTimeout(()=>{t.disabled=!1,t.innerHTML=e,this.modalController.showBookingConfirmation({destination:n,travelWindow:r,travelers:i,atmosphere:a})},650)}})}setupCardInteractions(){document.querySelectorAll(`.discover-dest-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.destId;this.modalController.showDestinationDetails(n)})}),document.querySelectorAll(`.request-journey-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.journeyId;this.modalController.showJourneyDetails(n)})}),document.querySelectorAll(`.format-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.format;this.modalController.showConsultationModal({notes:`Interested in private curation for: ${t.toUpperCase()} format.`})})})}setupActionTriggers(){let e=document.getElementById(`cta-schedule-consult-btn`),t=document.getElementById(`drawer-consult-btn`);e&&e.addEventListener(`click`,()=>this.modalController.showConsultationModal()),t&&t.addEventListener(`click`,()=>{this.navigationController.toggleDrawer(!1),this.modalController.showConsultationModal()});let n=document.getElementById(`cta-view-lookbook-btn`);n&&n.addEventListener(`click`,()=>this.modalController.showLookbookModal());let r=document.getElementById(`search-open-btn`);r&&r.addEventListener(`click`,()=>this.modalController.showSearchModal())}setupNewsletter(){let e=document.getElementById(`newsletter-form`),t=document.getElementById(`newsletter-toast`);e&&e.addEventListener(`submit`,e=>{e.preventDefault();let n=document.getElementById(`newsletter-email`);n&&n.value&&(n.value=``,t&&(t.classList.remove(`hidden`),setTimeout(()=>t.classList.add(`hidden`),5e3)))})}setupKeyboardShortcuts(){document.addEventListener(`keydown`,e=>{((e.metaKey||e.ctrlKey)&&e.key===`k`||e.key===`/`&&![`INPUT`,`TEXTAREA`,`SELECT`].includes(document.activeElement.tagName))&&(e.preventDefault(),this.modalController.showSearchModal())})}};document.addEventListener(`DOMContentLoaded`,()=>{new c});