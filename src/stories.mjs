// The day's verified stories, Monday 23 November 2026.
//
// Every figure here was checked against news reports of the day saved in
// entries/_top_news-image-20261122/nov23-digest-1.txt and nov23-digest-2.txt
// (Brave LLM-context digests of Democracy Now, Reuters, AP, BBC, DW, France 24,
// The Hindu, Al Jazeera, NPR, Open Chronicle, Unspun Wire, Just Security and
// others, all published 23 Nov 2026). Only items dated 23 Nov — or Sunday items
// confirmed Monday, as a Monday paper rounds up the weekend — are kept, and the
// weekend ones carry SUN/SAT badges. Unverified items are left out entirely.

export const DAY = {
  weekday: 'Monday',
  date: '23 November 2026',
  lede: 'The climate talks died in Antalya, the war stepped into a Libyan port, and one man’s return lifted Wall Street off the floor.',
};

export const LEADS = [
  {
    no: 1,
    band: 'cop31',
    colour: '#37506d',
    badge: 'NO DEAL',
    tag: 'CLIMATE · ANTALYA',
    place: 'Türkiye',
    topic: 'COP31 climate summit',
    title: 'COP31 collapses with no deal as oil bloc strips out fossil fuels',
    body: 'Ended Sunday after 44 hours of overtime — the longest COP ever, and the first to fail since Copenhagen 2009: the EU and vulnerable states rejected a text that no longer said “fossil fuels”.',
    source: 'AP · BBC · Reuters',
  },
  {
    no: 2,
    band: 'ship',
    colour: '#1f3a4d',
    badge: 'SUNK',
    tag: 'WAR · BENGHAZI',
    place: 'Libya',
    topic: 'war spreads to the Mediterranean',
    title: 'Ukraine sinks Russian corvette Merkury at Benghazi with seven sea drones',
    body: 'Zelensky confirmed the strike 2,400 km from the frontline: the 2023 corvette sank, a Ka-27 helicopter burned, cargo ship Angara was hit. The UN demanded a probe.',
    source: 'Reuters · DW · AP',
  },
  {
    no: 3,
    band: 'nvda',
    colour: '#1a4d2e',
    badge: '+33%',
    tag: 'MARKETS · WALL ST',
    place: 'United States',
    topic: 'Nvidia',
    title: 'Jensen Huang back as Nvidia CEO — stock surges 33%, Nasdaq +7%',
    body: 'Eleven days after resigning over an affair with a suspected Chinese spy, Huang was reinstated after Trump intervened; Nvidia added ~$848B in value, its best day ever.',
    source: 'AP · Reuters · BBC',
  },
];

export const STATS = [
  { value: '153', label: 'russian drones overnight, 60 jet-powered', colour: '#7d1f3d' },
  { value: '−3.3%', label: 'KOSPI closes 4,708.54 as AI rout rolls on', colour: '#33415a' },
  { value: '+33%', label: 'Nvidia on Huang’s return — Nasdaq +7%', colour: '#1a4d2e' },
  { value: '258', label: 'House seats for Democrats, most since 1992', colour: '#26427a' },
  { value: '31', label: 'loaded tankers waiting outside Hormuz', colour: '#8a4a12' },
  { value: '$1.6bn', label: 'India’s package for Nepal after talks', colour: '#5b3a7a' },
];

export const REGIONS = [
  { name: 'EUROPE 12', colour: '#37506d' },
  { name: 'AMERICAS 7', colour: '#1a4d2e' },
  { name: 'MIDDLE EAST 7', colour: '#8a4a12' },
  { name: 'ASIA-PACIFIC 6', colour: '#26427a' },
  { name: 'AFRICA 4', colour: '#7d1f3d' },
  { name: '39 STORIES', colour: '#5b3a7a' },
];

export const TIMELINE = [
  { time: 'NIGHT', text: '153 drones over Ukraine; Dymer toll rises' },
  { time: '06:30', text: 'KOSPI locks a −3.3% close' },
  { time: '07:44', text: 'Modi–Shah talks open in Delhi' },
  { time: 'MORN', text: 'Zelensky confirms Merkury sunk; NATO meets' },
  { time: '13:21', text: 'Nvidia board reinstates Huang' },
  { time: '16:42', text: 'EU unveils 22nd Russia sanctions package' },
];

export const TILES = [
  {
    no: 4, band: 'nato', colour: '#26427a', badge: 'ARTICLE 4',
    place: 'Poland', label: '',
    title: 'NATO holds emergency meeting on Russian missiles in its airspace',
    line: 'Three Kh-101 cruise missiles fell Friday; Rutte vows to defend “every inch”; Warsaw wants an air shield.',
    source: 'AP · NATO',
  },
  {
    no: 5, band: 'tanker', colour: '#8a4a12', badge: 'HORMUZ',
    place: 'Strait of Hormuz', label: '',
    title: 'Three more ships struck at record pace of attacks',
    line: 'Seven tankers hit since Nov 16; Iran threatens to break the US blockade; Brent eases to $92.29.',
    source: 'UKMTO · Reuters',
  },
  {
    no: 6, band: 'rubble', colour: '#4d3a35', badge: 'TOLL 11',
    place: 'Ukraine', label: '',
    title: 'Dymer death toll rises to 11 as rescuers free boy, 79-year-old woman',
    line: 'Overnight attack on an apartment block near Kyiv; two people still missing under the rubble.',
    source: 'Reuters',
  },
  {
    no: 7, band: 'refinery', colour: '#5b2a12', badge: 'OIL WAR',
    place: 'Russia', label: '',
    title: 'Ukrainian drones hit refineries in Perm, Rostov and Tatarstan',
    line: 'Lukoil’s Permnefteorgsintez burned; 192 drones downed over 17 Russian regions, Moscow says.',
    source: 'Governors · Reuters',
  },
  {
    no: 8, band: 'handshake', colour: '#26427a', badge: 'DELHI',
    place: 'India · Nepal', label: '',
    title: 'Modi welcomes Nepal’s Gen Z PM Shah with $1.6bn package',
    line: 'Eight MoUs, an offshore IIT campus and the Saryu–Kamala Express flagged off at Hyderabad House.',
    source: 'BBC · The Hindu',
  },
  {
    no: 9, band: 'racket', colour: '#1a4d2e', badge: 'SUN · MASTERS',
    place: 'Turin', label: '',
    title: 'Alcaraz beats Zverev 6-2 7-6 for his first ATP Masters title',
    line: 'The Spaniard adds the season finale to his year at the top of the game.',
    source: 'SNA · ATP',
  },
  {
    no: 10, band: 'car', colour: '#12131a', badge: 'SUN · P1',
    place: 'Las Vegas', label: '',
    title: 'Verstappen wins wild Vegas GP with 35 lead changes',
    line: 'His 75th win, 0.639s over Norris; Russell hits the barrier late; McLaren takes a double podium.',
    source: 'F1 · AFP',
  },
  {
    no: 11, band: 'cricket', colour: '#2e5f4f', badge: 'SUN · 720/9',
    place: 'Wellington', label: '',
    title: 'India declare 720/9 — highest Test total on New Zealand soil',
    line: 'Pant hits 128 to pass McCullum’s sixes record; a 352-run first-innings lead.',
    source: 'Reuters',
  },
  {
    no: 12, band: 'flame', colour: '#7d1f3d', badge: 'WEST BANK',
    place: 'Israel · Palestine', label: '',
    title: 'Settler arson wave: Eisenkot condemns “Jewish terrorism”',
    line: 'Cars burned, racist graffiti in four towns; an UNRWA worker and aid drivers killed in Gaza.',
    source: 'WaPo · DN!',
  },
  {
    no: 13, band: 'skull', colour: '#4d3a35', badge: 'OXFAM',
    place: 'Gaza', label: '',
    title: 'Oxfam: conflict made Gaza a “toxic wasteland”, 99% contaminated',
    line: 'Report finds explosive pollution in air, water and soil; clean-up priced in decades.',
    source: 'UPI · Oxfam',
  },
  {
    no: 14, band: 'un', colour: '#37506d', badge: 'KHARTOUM',
    place: 'Sudan', label: '',
    title: 'Drone strikes damage UN building and homes in Khartoum',
    line: 'Army blames Ethiopia, denied by Addis Ababa; US demands a humanitarian truce and an arms embargo.',
    source: 'UN · allAfrica',
  },
  {
    no: 15, band: 'boat', colour: '#2e5f4f', badge: 'TOLL 24+',
    place: 'Nigeria', label: '',
    title: 'Boat carrying mourners to a funeral capsizes in Bayelsa',
    line: 'At least 24 dead, the governor says 29; VP Shettima announces ₦250m and tighter waterway rules.',
    source: 'Reuters · NEMA',
  },
  {
    no: 16, band: 'icu', colour: '#5b3a7a', badge: 'HAITI',
    place: 'Haiti · El Salvador', label: '',
    title: 'Battle of Martissant: 70+ gang suspects killed, 3 Salvadoran soldiers die',
    line: 'Two soldiers pulled a live grenade from a failing drone; Bukele pledges $200k to each family.',
    source: 'AP · LA Times',
  },
  {
    no: 17, band: 'ballot', colour: '#26427a', badge: 'MIDTERMS',
    place: 'United States', label: '',
    title: 'Democrats clinch 258 House seats as Hubbard takes NC-5 recount',
    line: 'Largest majority since 1992; three races still uncalled; Jeffries puts ending the Iran war first.',
    source: 'AP · NYT',
  },
  {
    no: 18, band: 'protest', colour: '#7d1f3d', badge: 'EUROPE',
    place: 'Europe', label: '',
    title: 'Students sweep Europe demanding wages, rents — Spain votes next Sunday',
    line: 'Tens of thousands march in Paris against austerity; Spain holds snap parliamentary elections.',
    source: 'DN! · AFP',
  },
];

export const MORE = [
  { no: 19, kicker: 'Gulf of Finland', text: 'second Russian ship hit in a week: cargo vessel Sparta II struck; Moscow warns of a “dangerous trend”.' },
  { no: 20, kicker: 'Chicago', text: 'Murray’s 45 and a Jokic triple-double edge the Bulls 151-145 in overtime.' },
  { no: 21, kicker: 'Brussels', text: 'national anti-austerity strike paralyses Belgian transport for a day.' },
  { no: 22, kicker: 'Brazil', text: 'Bolsonaro in intensive care with a bowel obstruction; a supercell storm hits the south.' },
  { no: 23, kicker: 'Seoul', text: 'education minister quits over exam chaos as Seoul readies a market-stabilisation pool.' },
  { no: 24, kicker: 'Tokyo', text: 'markets closed for a holiday; US futures bounce 2% on the Nvidia rally.' },
  { no: 25, kicker: 'Libya', text: 'UNSMIL demands an independent probe; eastern govt files UN complaint.' },
  { no: 26, kicker: 'Moscow', text: 'Kremlin “takes note” of the Merkury sinking; warns of a “dangerous trend”.' },
  { no: 27, kicker: 'Berlin', text: 'German media: NATO intel sees Russia planning a nuclear-armed satellite this year.' },
  { no: 28, kicker: 'Tehran', text: 'Iran vows “all available means” against the US naval blockade of Hormuz.' },
  { no: 29, kicker: 'Washington', text: 'Trump sets a post-New-Year deadline to resume strikes on Iran absent a deal.' },
  { no: 30, kicker: 'Brussels', text: 'von der Leyen unveils the EU’s 22nd sanctions package against Russia’s war.' },
  { no: 31, kicker: 'Riyadh', text: 'nine-month deficit hits the full-year forecast; blamed for COP31 collapse.' },
  { no: 32, kicker: 'Copenhagen', text: 'bomb threats against schools probed in Germany and Denmark.' },
  { no: 33, kicker: 'Doha', text: 'Tilak Varma hits a second straight century, vs Pakistan A in the Rising Stars cup.' },
  { no: 34, kicker: 'Dhaka', text: 'garment-worker unrest and Grameen Bank tensions enter a third week.' },
  { no: 35, kicker: 'Iowa', text: 'Army plans “controlled detonation” of five tons of lead azide despite a court hold.' },
  { no: 36, kicker: 'Kyiv', text: 'Ukraine logs 2,700 Russian drones and 1,460 glide bombs in the past week.' },
  { no: 37, kicker: 'Cairo', text: 'Egypt and Türkiye talk de-escalation on Sudan, Libya and Gaza.' },
  { no: 38, kicker: 'Jeddah', text: 'Saudi Arabia and Egypt jointly condemn the Khartoum drone attacks.' },
  { no: 39, kicker: 'Nuuk', text: 'Denmark ratifies the Greenland security deal.' },
];

export const PINS = [
  { no: 1, x: 55.5, y: 32 },
  { no: 2, x: 51.5, y: 31 },
  { no: 4, x: 54.5, y: 27.5 },
  { no: 5, x: 62, y: 41 },
  { no: 6, x: 54, y: 28 },
  { no: 7, x: 56, y: 26 },
  { no: 8, x: 68.5, y: 38 },
  { no: 10, x: 15, y: 38 },
  { no: 11, x: 93, y: 42 },
  { no: 12, x: 55, y: 34 },
  { no: 14, x: 56, y: 38 },
  { no: 15, x: 51, y: 44 },
  { no: 16, x: 74, y: 47 },
  { no: 17, x: 26, y: 32 },
  { no: 18, x: 48.5, y: 24 },
];

export const DATE_CHECK = {
  kept: 'Monday, 23 November 2026 — a real Monday. Weekend results (Vegas GP, Turin final, Wellington declaration, the midterms recount) carry SUN/SAT badges and are rounded up as a Monday paper rounds up its weekend; the Benghazi strike and Poland’s missiles broke Sunday and were confirmed Monday. Everything before 13 November 2026 is excluded.',
};

export const FOOTER = {
  rule: 'RULES: one day · named · every card an object · weekend items badged SUN/SAT · no photos, no gradients',
  sources: 'Sources: AP · Reuters · BBC · DW · Al Jazeera · The Hindu · Democracy Now! · NPR · UN · F1 · ATP · UKMTO · Oxfam — all 23 Nov 2026',
};
