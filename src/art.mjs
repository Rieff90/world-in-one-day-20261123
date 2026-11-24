// Hand-written flat vector pictograms, one per hero band and tile band.
// Each takes the card's background colour and returns inline SVG that fills
// the card's art strip. Simple shapes, 2-4 colours each, drawn so the object
// still reads when the image is shrunk to about 300 pixels across.

const W = 200, H = 80;
const ink = '#12131a';

const svg = (inner) =>
  `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const ART = {
  // Collapsing COP31: dome hall, a big NO DEAL stamp falling off the text.
  cop31: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M60 62 L60 34 Q100 12 140 34 L140 62 Z" fill="#e8e2d2"/>
    <path d="M60 34 Q100 12 140 34" fill="none" stroke="${ink}" stroke-width="3"/>
    <rect x="56" y="62" width="88" height="6" fill="${ink}"/>
    <rect x="78" y="44" width="44" height="18" fill="#f2ead8" stroke="${ink}" stroke-width="1.6"/>
    <text x="100" y="57" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="11" fill="${ink}">COP31</text>
    <g transform="rotate(-14 148 26)">
      <rect x="112" y="16" width="72" height="22" fill="none" stroke="#c8102e" stroke-width="3.4"/>
      <text x="148" y="32" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="13" fill="#c8102e">NO DEAL</text>
    </g>
    <circle cx="24" cy="22" r="9" fill="#f2b134"/>
    <path d="M18 60 L30 44 L26 60 L36 50" stroke="#f2b134" stroke-width="2.4" fill="none"/>`),

  // Sinking warship: bow going under, sea drone racing in.
  ship: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M28 52 L96 52 L88 66 L30 66 Z" fill="#5b6b78"/>
    <path d="M52 52 L52 34 L84 34 L96 52 Z" fill="#8494a1"/>
    <rect x="60" y="22" width="4" height="14" fill="${ink}"/>
    <path d="M64 24 L80 20 L64 30 Z" fill="#c8102e"/>
    <path d="M0 70 Q25 62 50 70 T100 70 T150 70 T200 70" stroke="#9fd4d4" stroke-width="3" fill="none"/>
    <path d="M0 76 Q25 70 50 76 T100 76 T150 76 T200 76" stroke="#7db8b8" stroke-width="2.4" fill="none"/>
    <path d="M118 62 L168 62 L160 70 L124 70 Z" fill="#1a1a1a"/>
    <path d="M118 62 L108 56 L116 60 Z" fill="#c8102e"/>
    <circle cx="166" cy="66" r="2.6" fill="#f2b134"/>
    <path d="M170 66 L190 66" stroke="#f2b134" stroke-width="1.6" stroke-dasharray="3 3"/>`),

  // A GPU die: green board, chip package, heatsink fins, and a rising arrow.
  nvda: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="16" y="22" width="104" height="46" rx="3" fill="#1b2a1b" stroke="#7ee08a" stroke-width="2.2"/>
    <rect x="30" y="32" width="46" height="26" rx="2" fill="#2f4a2f" stroke="#7ee08a" stroke-width="1.6"/>
    <rect x="40" y="39" width="26" height="12" rx="1" fill="#7ee08a"/>
    ${[0,1,2,3,4,5,6].map(i => `<rect x="${24 + i * 6}" y="62" width="3" height="6" fill="#7ee08a"/>`).join('')}
    ${[0,1,2,3,4,5,6].map(i => `<rect x="${24 + i * 6}" y="22" width="3" height="6" fill="#7ee08a"/>`).join('')}
    ${[0,1,2,3,4].map(i => `<rect x="110" y="${28 + i * 8}" width="6" height="4" fill="#7ee08a"/>`).join('')}
    <path d="M132 60 L162 30 L156 30 M162 30 L162 36" stroke="#7ee08a" stroke-width="4.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="132" y="72" font-family="Arial" font-weight="bold" font-size="15" fill="#e8e2d2">+33%</text>`),

  // NATO compass rose over a missile silhouette.
  nato: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g transform="translate(56 40)">
      <circle r="24" fill="none" stroke="#e8e2d2" stroke-width="2.6"/>
      <path d="M0 -24 L5 0 L0 24 L-5 0 Z" fill="#e8e2d2"/>
      <path d="M-24 0 L0 -5 L24 0 L0 5 Z" fill="#f2b134"/>
      <circle r="5" fill="${ink}"/>
    </g>
    <path d="M118 66 L128 26 L134 26 L140 66 Z" fill="#c8102e"/>
    <path d="M128 26 L131 14 L134 26 Z" fill="#e8e2d2"/>
    <path d="M150 40 L190 40" stroke="#e8e2d2" stroke-width="2.4" stroke-dasharray="6 4"/>
    <text x="148" y="62" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">3×Kh-101</text>`),

  // Burning tanker on open water.
  tanker: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M30 46 L150 46 L142 62 L34 62 Z" fill="#3d3d3d"/>
    <rect x="52" y="28" width="66" height="18" fill="#6b6b6b"/>
    <rect x="120" y="30" width="8" height="16" fill="#c8102e"/>
    <path d="M62 28 Q60 16 68 12 Q66 20 74 24 Q76 12 82 10 Q80 20 84 28 Z" fill="#f2762e"/>
    <path d="M72 28 Q70 20 76 16 Q74 22 80 26 Z" fill="#f2b134"/>
    <path d="M0 70 Q25 63 50 70 T100 70 T150 70 T200 70" stroke="#9fd4d4" stroke-width="3" fill="none"/>
    <path d="M160 20 L172 26 L160 30 Z" fill="#e8e2d2"/>
    <text x="24" y="24" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">3 HIT</text>`),

  // Rubble pile with a rescued child's hand.
  rubble: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M20 66 L60 30 L86 52 L108 22 L150 66 Z" fill="#8a8175"/>
    <rect x="40" y="40" width="30" height="26" fill="#6b6257" transform="rotate(8 55 53)"/>
    <rect x="92" y="34" width="34" height="30" fill="#75706a" transform="rotate(-7 109 49)"/>
    <path d="M158 66 L158 46 Q166 38 172 48 L176 66" fill="#e8c49a"/>
    <path d="M162 50 Q168 44 172 50" fill="none" stroke="${ink}" stroke-width="1.6"/>
    <circle cx="24" cy="24" r="3" fill="#f2b134"/><circle cx="36" cy="16" r="2.4" fill="#f2b134"/>
    <circle cx="170" cy="20" r="3" fill="#f2b134"/><circle cx="182" cy="30" r="2.2" fill="#f2b134"/>
    <text x="24" y="44" font-family="Arial" font-weight="bold" font-size="12" fill="#e8e2d2">11</text>`),

  // Refinery with flames and a drone overhead.
  refinery: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="30" y="34" width="52" height="32" fill="#3d3d3d"/>
    <rect x="46" y="16" width="8" height="26" fill="#5a5a5a"/>
    <rect x="66" y="22" width="6" height="20" fill="#5a5a5a"/>
    <path d="M50 16 Q46 6 54 4 Q52 10 58 14 Q56 4 62 2 Q60 10 58 16 Z" fill="#f2762e"/>
    <path d="M112 24 Q130 14 148 24" fill="none" stroke="#e8e2d2" stroke-width="2" stroke-dasharray="3 3"/>
    <path d="M148 20 L162 24 L148 30 Z" fill="#c8102e"/>
    <rect x="120" y="36" width="40" height="30" fill="#2b2b2b"/>
    <rect x="126" y="30" width="6" height="14" fill="#5a5a5a"/>
    <path d="M129 30 Q126 22 132 20 Q130 26 134 28 Z" fill="#f2b134"/>
    <text x="24" y="60" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">3 REFINERIES</text>`),

  // Handshake with two flags.
  handshake: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M40 44 L76 44 L76 58 L40 58 Z" fill="#f2a134"/>
    <circle cx="52" cy="50" r="5" fill="#fff"/>
    <path d="M124 44 L160 44 L160 58 L124 58 Z" fill="#4caf6e"/>
    <circle cx="142" cy="50" r="5" fill="#fff"/>
    <path d="M60 54 L84 48 L96 54 L108 48 L124 52" fill="none" stroke="#e8c49a" stroke-width="7" stroke-linecap="round"/>
    <path d="M60 54 L84 48 L96 54 L108 48 L124 52" fill="none" stroke="${ink}" stroke-width="1.4" stroke-linecap="round"/>
    <text x="100" y="26" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="11" fill="#e8e2d2">$1.6BN</text>
    <path d="M84 30 L92 26 L100 30 L108 26 L116 30" stroke="#f2b134" stroke-width="2" fill="none"/>`),

  // Tennis racket over a ball.
  racket: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g transform="rotate(24 84 40)">
      <ellipse cx="84" cy="34" rx="22" ry="28" fill="none" stroke="#e8e2d2" stroke-width="4"/>
      <ellipse cx="84" cy="34" rx="16" ry="21" fill="none" stroke="#e8e2d2" stroke-width="1.2"/>
      <line x1="68" y1="26" x2="100" y2="26" stroke="#e8e2d2" stroke-width="1"/>
      <line x1="66" y1="34" x2="102" y2="34" stroke="#e8e2d2" stroke-width="1"/>
      <line x1="68" y1="42" x2="100" y2="42" stroke="#e8e2d2" stroke-width="1"/>
      <rect x="80" y="62" width="8" height="16" rx="3" fill="#c8102e"/>
    </g>
    <circle cx="140" cy="52" r="11" fill="#c8e02e"/>
    <path d="M132 48 Q140 44 148 50" stroke="#fff" stroke-width="2" fill="none"/>
    <text x="132" y="24" font-family="Arial" font-weight="bold" font-size="11" fill="#e8e2d2">6-2 7-6</text>`),

  // F1 car under the Vegas checkers.
  car: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M8 8 h14 v6 h-14 Z M36 8 h14 v6 h-14 Z M64 8 h14 v6 h-14 Z M92 8 h14 v6 h-14 Z M120 8 h14 v6 h-14 Z M148 8 h14 v6 h-14 Z M176 8 h14 v6 h-14 Z" fill="#e8e2d2"/>
    <path d="M8 16 h14 v6 h-14 Z M36 16 h14 v6 h-14 Z M64 16 h14 v6 h-14 Z M92 16 h14 v6 h-14 Z M120 16 h14 v6 h-14 Z M148 16 h14 v6 h-14 Z M176 16 h14 v6 h-14 Z" fill="#e8e2d2" opacity=".4"/>
    <path d="M36 58 L44 46 L96 46 L120 34 L152 40 L168 48 L172 58 Z" fill="#c8102e"/>
    <path d="M96 46 L120 36 L142 42" fill="none" stroke="#12131a" stroke-width="2"/>
    <circle cx="60" cy="60" r="10" fill="#1a1a1a" stroke="#e8e2d2" stroke-width="2"/>
    <circle cx="150" cy="60" r="10" fill="#1a1a1a" stroke="#e8e2d2" stroke-width="2"/>
    <circle cx="60" cy="60" r="3.6" fill="#e8e2d2"/><circle cx="150" cy="60" r="3.6" fill="#e8e2d2"/>
    <rect x="118" y="30" width="4" height="8" fill="#e8e2d2"/>
    <text x="24" y="36" font-family="Arial" font-weight="bold" font-size="12" fill="#f2b134">P1</text>`),

  // Cricket bat and ball over stumps.
  cricket: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g transform="rotate(-30 80 44)">
      <rect x="70" y="16" width="20" height="46" rx="6" fill="#d9a05b"/>
      <rect x="76" y="60" width="8" height="20" rx="3" fill="#b98544"/>
    </g>
    <circle cx="128" cy="46" r="9" fill="#c8102e"/>
    <path d="M121 42 Q128 38 135 43" stroke="#fff" stroke-width="1.8" fill="none"/>
    <path d="M121 50 Q128 54 135 49" stroke="#fff" stroke-width="1.8" fill="none"/>
    <g stroke="#e8e2d2" stroke-width="3">
      <line x1="164" y1="24" x2="164" y2="64"/><line x1="172" y1="24" x2="172" y2="64"/><line x1="180" y1="24" x2="180" y2="64"/>
    </g>
    <rect x="158" y="22" width="28" height="5" fill="#e8e2d2"/>
    <text x="20" y="26" font-family="Arial" font-weight="bold" font-size="12" fill="#e8e2d2">720/9</text>`),

  // Fire over a Star-of-David graffiti tag.
  flame: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="24" y="20" width="66" height="46" fill="#e8e2d2"/>
    <path d="M40 32 L48 32 L44 38 Z M48 44 L40 44 L44 38 Z M40 44 L40 56 L44 50 L48 56 L48 44 Z" fill="#4a6ea9" transform="translate(2 -2)"/>
    <path d="M58 34 Q56 26 62 22 Q60 28 66 30 Q64 22 70 20 Q68 28 70 34 Z" fill="#f2762e"/>
    <path d="M104 62 Q100 40 112 30 Q108 46 122 40 Q120 28 132 24 Q128 40 136 44 Q148 50 144 62 Z" fill="#f2762e"/>
    <path d="M116 62 Q114 50 122 44 Q120 54 128 52 Z" fill="#f2b134"/>
    <text x="98" y="18" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">ARSON</text>`),

  // Contamination skull over a hazard grid.
  skull: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g stroke="#75706a" stroke-width="1" opacity=".55">
      ${[0,1,2,3,4,5,6].map(r => `<line x1="8" y1="${12+r*9}" x2="192" y2="${12+r*9}"/>`).join('')}
      ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(c => `<line x1="${8+c*10}" y1="12" x2="${8+c*10}" y2="66"/>`).join('')}
    </g>
    <path d="M76 52 L76 38 Q76 22 96 22 Q116 22 116 38 L116 52 L108 52 L108 58 L100 58 L100 52 L92 52 L92 58 L84 58 L84 52 Z" fill="#e8e2d2"/>
    <circle cx="88" cy="38" r="5" fill="${bg}"/><circle cx="104" cy="38" r="5" fill="${bg}"/>
    <path d="M92 44 L100 44 L96 49 Z" fill="${bg}"/>
    <circle cx="150" cy="30" r="9" fill="none" stroke="#f2b134" stroke-width="2.6"/>
    <path d="M150 22 L150 34 M145 27 L155 27" stroke="#f2b134" stroke-width="2.6"/>
    <text x="20" y="26" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">99%</text>`),

  // Cracked UN building.
  un: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="52" y="16" width="60" height="48" fill="#d8e4ec"/>
    ${[0,1,2,3,4,5].map(r => `<line x1="56" y1="${22+r*7}" x2="108" y2="${22+r*7}" stroke="${bg}" stroke-width="2"/>`).join('')}
    ${[0,1,2,3].map(c => `<line x1="${62+c*12}" y1="16" x2="${62+c*12}" y2="64" stroke="${bg}" stroke-width="2"/>`).join('')}
    <path d="M92 16 L98 28 L92 38 L100 52" stroke="#c8102e" stroke-width="3" fill="none"/>
    <rect x="44" y="64" width="76" height="5" fill="${ink}"/>
    <circle cx="140" cy="34" r="13" fill="none" stroke="#e8e2d2" stroke-width="2.4"/>
    <path d="M140 21 L140 47 M129 27 L151 27 M129 41 L151 41" stroke="#e8e2d2" stroke-width="1.8"/>
    <text x="128" y="62" font-family="Arial" font-weight="bold" font-size="9" fill="#e8e2d2">HIT</text>`),

  // Capsized boat with mourners' candles on shore.
  boat: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g transform="rotate(146 70 48)">
      <path d="M40 44 L100 44 L92 56 L44 56 Z" fill="#5b6b78"/>
      <rect x="56" y="32" width="20" height="12" fill="#8494a1"/>
    </g>
    <path d="M20 40 L120 40" stroke="#f2762e" stroke-width="3" stroke-dasharray="5 4" opacity=".8"/>
    <path d="M0 72 Q25 66 50 72 T100 72 T150 72 T200 72" stroke="#9fd4d4" stroke-width="3" fill="none"/>
    <g fill="#f2b134">
      <circle cx="146" cy="60" r="2.6"/><circle cx="156" cy="58" r="2.6"/><circle cx="166" cy="60" r="2.6"/><circle cx="176" cy="58" r="2.6"/>
    </g>
    <g stroke="#e8e2d2" stroke-width="1.4">
      <line x1="146" y1="56" x2="146" y2="50"/><line x1="156" y1="54" x2="156" y2="48"/><line x1="166" y1="56" x2="166" y2="50"/><line x1="176" y1="54" x2="176" y2="48"/>
    </g>
    <text x="20" y="26" font-family="Arial" font-weight="bold" font-size="12" fill="#e8e2d2">24+</text>`),

  // Drone with a grenade - the Haiti story.
  icu: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="66" y="18" width="52" height="14" rx="7" fill="#3d3d3d"/>
    <circle cx="78" cy="34" r="6" fill="#5a5a5a"/><circle cx="106" cy="34" r="6" fill="#5a5a5a"/>
    <circle cx="78" cy="34" r="2.4" fill="#c8102e"/><circle cx="106" cy="34" r="2.4" fill="#c8102e"/>
    <path d="M96 32 L96 44" stroke="${ink}" stroke-width="2"/>
    <circle cx="96" cy="50" r="6" fill="#f2762e"/>
    <path d="M93 47 L99 53 M99 47 L93 53" stroke="#fff" stroke-width="1.8"/>
    <path d="M120 24 L138 24 M120 30 L138 30 M120 36 L132 36" stroke="#e8e2d2" stroke-width="2" opacity=".7"/>
    <text x="140" y="58" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">3 FELL</text>
    <text x="20" y="26" font-family="Arial" font-weight="bold" font-size="10" fill="#e8e2d2">MARTISSANT</text>`),

  // Ballot box with a rising bar.
  ballot: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="56" y="36" width="64" height="28" fill="#e8e2d2"/>
    <rect x="78" y="28" width="20" height="8" fill="${bg}" stroke="${ink}" stroke-width="1.6"/>
    <rect x="80" y="14" width="16" height="16" fill="#f2f2f2" stroke="${ink}" stroke-width="1.4" transform="rotate(-8 88 22)"/>
    <path d="M140 58 L152 58 L152 44 L164 44 L164 34 L176 34 L176 24 L188 24" stroke="#7ee08a" stroke-width="4" fill="none"/>
    <text x="24" y="26" font-family="Arial" font-weight="bold" font-size="12" fill="#f2b134">258</text>
    <text x="24" y="40" font-family="Arial" font-size="8" fill="#e8e2d2">HOUSE</text>`),

  // Marching figures with placards.
  protest: (bg) => svg(`
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g fill="${ink}">
      <circle cx="52" cy="26" r="6"/><rect x="46" y="34" width="12" height="22" rx="4"/>
      <circle cx="92" cy="22" r="6"/><rect x="86" y="30" width="12" height="26" rx="4"/>
      <circle cx="132" cy="28" r="6"/><rect x="126" y="36" width="12" height="20" rx="4"/>
    </g>
    <rect x="58" y="8" width="26" height="16" fill="#e8e2d2" transform="rotate(-6 71 16)"/>
    <rect x="100" y="4" width="26" height="14" fill="#f2b134" transform="rotate(5 113 11)"/>
    <line x1="98" y1="18" x2="94" y2="34" stroke="#c8102e" stroke-width="2"/>
    <line x1="118" y1="18" x2="124" y2="32" stroke="#c8102e" stroke-width="2"/>
    <text x="146" y="30" font-family="Arial" font-weight="bold" font-size="9" fill="#e8e2d2">PARIS</text>`),
};

export default ART;
