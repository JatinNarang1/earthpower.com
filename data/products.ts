/**
 * Earth Power catalogue. Every value comes from the model's datasheet PDF
 * (public/datasheets). Fields a datasheet does not state are left undefined and not shown.
 * Warranty durations are intentionally not published on the website.
 */
const JK = 'JK BMS + Active Balancer (Bluetooth)'
const JBD = 'JBD BMS (Bluetooth)'
const ANT = 'ANT BMS + Passive Balancer (Bluetooth)'
const TW_BMS = 'BMS with built-in active balancer (Bluetooth)'

export type Category = 'storage' | 'twowheeler' | 'highvoltage' | 'rack' | 'bess'

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: 'storage', label: 'Inverter & ESS', blurb: '12.8 V – 51.2 V energy-storage batteries' },
  { id: 'highvoltage', label: 'High-voltage', blurb: '73.6 V – 102.4 V high-voltage batteries' },
  { id: 'rack', label: 'Rack systems', blurb: '121.6 V – 480 V stacked rack systems' },
  { id: 'bess', label: 'BESS', blurb: '261 kWh – 5.016 MWh liquid-cooled systems' },
  { id: 'twowheeler', label: 'Two-wheeler', blurb: '51.2 V – 73.6 V scooter battery packs' },
]

interface Raw {
  id: string
  cat: Category
  v: number
  ah: number
  kwh: string
  cfg: string
  bms: string
  range: string
  chg: number
  dis: number
  peak?: string
  par?: number
  bal?: number
  wt?: string
  dim?: string
  img: string
}

const RAW: Raw[] = [
  // Inverter & ESS
  { id: 'EPL121058H', cat: 'storage', v: 12.8, ah: 100, kwh: '1.280', cfg: '4S1P', bms: JBD, range: '11.2 – 14.4 V', chg: 50, dis: 70, wt: '13.0 ± 0.5 kg', dim: '215 × 182 × 370 mm', img: 'jpg' },
  { id: 'EPL122100S', cat: 'storage', v: 12.8, ah: 200, kwh: '2.560', cfg: '4S2P', bms: JK, range: '11.2 – 14.4 V', chg: 50, dis: 100, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm', img: 'jpg' },
  { id: 'EPL251058H', cat: 'storage', v: 25.6, ah: 100, kwh: '2.560', cfg: '8S1P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 80, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm', img: 'jpg' },
  { id: 'EP25105ESS', cat: 'storage', v: 25.6, ah: 100, kwh: '2.560', cfg: '8S1P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 80, par: 15, bal: 5, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm', img: 'jpg' },
  { id: 'EPL252100S', cat: 'storage', v: 25.6, ah: 200, kwh: '5.120', cfg: '8S2P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 100, wt: '47.3 ± 1 kg', dim: '380 × 175 × 650 mm', img: 'jpg' },
  { id: 'EP51105ESS', cat: 'storage', v: 51.2, ah: 100, kwh: '5.120', cfg: '16S1P', bms: JK, range: '44.8 – 57.6 V', chg: 50, dis: 100, par: 15, bal: 5, wt: '47.3 ± 1 kg', dim: '380 × 175 × 650 mm', img: 'jpg' },
  { id: 'EP51314ESS', cat: 'storage', v: 51.2, ah: 314, kwh: '16.076', cfg: '16S1P', bms: JK, range: '44.8 – 57.6 V', chg: 80, dis: 130, par: 15, bal: 5, wt: '107 ± 1 kg', dim: '406 × 267 × 838 mm', img: 'jpg' },
  // Two-wheeler packs
  { id: 'EPL51304S', cat: 'twowheeler', v: 51.2, ah: 30, kwh: '1.536', cfg: '16S2P', bms: TW_BMS, range: '44.8 – 57.6 V', chg: 15, dis: 40, peak: '50 A / 10 s', wt: '13.1 ± 0.5 kg', dim: '229 × 152 × 229 mm', img: 'png' },
  { id: 'EPL51456S', cat: 'twowheeler', v: 51.2, ah: 45, kwh: '2.304', cfg: '16S3P', bms: TW_BMS, range: '44.8 – 57.6 V', chg: 15, dis: 40, peak: '50 A / 10 s', wt: '18.94 ± 1 kg', dim: '229 × 152 × 229 mm', img: 'png' },
  { id: 'EPL60304S', cat: 'twowheeler', v: 60.8, ah: 30, kwh: '1.824', cfg: '19S2P', bms: TW_BMS, range: '53.2 – 68.4 V', chg: 15, dis: 40, peak: '50 A / 10 s', wt: '15.4 ± 0.5 kg', dim: '229 × 152 × 267 mm', img: 'png' },
  { id: 'EPL60456S', cat: 'twowheeler', v: 60.8, ah: 45, kwh: '2.736', cfg: '19S3P', bms: TW_BMS, range: '53.2 – 68.4 V', chg: 20, dis: 60, dim: '229 × 152 × 387 mm', img: 'png' },
  { id: 'EPL73304S', cat: 'twowheeler', v: 73.6, ah: 30, kwh: '2.208', cfg: '23S2P', bms: TW_BMS, range: '64.4 – 82.8 V', chg: 15, dis: 40, peak: '50 A / 10 s', dim: '229 × 152 × 318 mm', img: 'png' },
  { id: 'EPL73456S', cat: 'twowheeler', v: 73.6, ah: 45, kwh: '3.312', cfg: '23S3P', bms: TW_BMS, range: '64.4 – 82.8 V', chg: 20, dis: 60, img: 'png' },
  // High-voltage batteries
  { id: 'EPL731050S', cat: 'highvoltage', v: 73.6, ah: 100, kwh: '7.360', cfg: '23S1P', bms: JK, range: '69.0 – 81.7 V', chg: 40, dis: 70, wt: '65 ± 3 kg', img: 'jpg' },
  { id: 'EPL961050S', cat: 'highvoltage', v: 96, ah: 100, kwh: '9.600', cfg: '30S1P', bms: JK, range: '90.0 – 106.5 V', chg: 40, dis: 70, wt: '80 ± 1 kg', dim: '615 × 550 × 280 mm', img: 'jpg' },
  { id: 'EPL1021050S', cat: 'highvoltage', v: 102.4, ah: 100, kwh: '10.240', cfg: '32S1P', bms: JK, range: '96.0 – 113.6 V', chg: 40, dis: 70, wt: '85 ± 3 kg', img: 'jpg' },
  // Rack systems
  { id: 'EP1211050S', cat: 'rack', v: 121.6, ah: 100, kwh: '12.160', cfg: '38S1P', bms: ANT, range: '114.0 – 133.0 V', chg: 40, dis: 70, img: 'jpg' },
  { id: 'EP1821050S', cat: 'rack', v: 182.4, ah: 100, kwh: '18.240', cfg: '57S1P', bms: ANT, range: '171.0 – 199.5 V', chg: 40, dis: 70, img: 'jpg' },
  { id: 'EP2401050S', cat: 'rack', v: 240, ah: 100, kwh: '24.000', cfg: '75S1P', bms: ANT, range: '225.0 – 262.5 V', chg: 40, dis: 70, img: 'jpg' },
  { id: 'EP3611050S', cat: 'rack', v: 361.6, ah: 100, kwh: '36.160', cfg: '113S1P', bms: ANT, range: '339.0 – 395.5 V', chg: 40, dis: 70, img: 'jpg' },
  { id: 'EP4801050S', cat: 'rack', v: 480, ah: 100, kwh: '48.000', cfg: '150S1P', bms: ANT, range: '450.0 – 525.0 V', chg: 40, dis: 70, img: 'jpg' },
]

export interface Product {
  id: string
  name: string
  category: Category
  v: number
  kwh: string
  voltage: string
  capacity: string
  energy: string
  group: string
  highVoltage: boolean
  maxVoltage: string
  jk: boolean
  parallel?: number
  balancing?: number
  image: string
  datasheet: string
  datasheetName: string
  datasheetLabel: string
  /** Four headline figures (cards show the first three). */
  headline: [string, string][]
  chips: string[]
  features: string[]
  applications: string[]
  specs: [string, string][]
  integration: [string, string][]
  range: string
  chg: number
  dis: number
  peak?: string
  cfg: string
  bms: string
  weight?: string
  dimensions?: string
  note?: string
}

export const SAFETY: string[] = [
  'Installation, commissioning and maintenance should be carried out by suitably qualified personnel in accordance with the approved product manual and applicable local requirements.',
  'Keep the battery away from direct flame, excessive heat, conductive debris and environments outside the specified operating temperature range.',
  'Prevent short circuits, reverse polarity, impact, crushing, puncture or unauthorised dismantling.',
  "Use correctly rated cables, overcurrent protection, isolators and connectors suitable for the system's voltage and current.",
  'Do not use a battery that is visibly damaged, unusually hot, swollen, leaking or giving abnormal indications. Isolate it only if safe to do so and contact the supplier.',
  'Ensure ventilation, access clearance, mounting and environmental protection meet the installation design and product manual.',
]

export const TWO_WHEELER_SAFETY: string[] = [
  'Use only a charger approved for the final battery pack voltage and LiFePO₄ charging profile.',
  'Before installation, verify connector polarity, compartment dimensions, controller voltage and maximum current demand.',
  'Do not short-circuit, crush, puncture, dismantle or expose the battery to fire or water.',
  'Do not operate or charge a damaged, swollen, overheated or abnormal battery. Disconnect it safely and contact the supplier.',
  'Actual range depends on vehicle, rider/load, speed, terrain, temperature, tyre pressure and driving conditions.',
]

const CAT_NAME: Record<Category, string> = {
  storage: 'LiFePO4 Energy Storage Battery',
  twowheeler: 'LiFePO4 Two-Wheeler Battery Pack',
  highvoltage: 'LiFePO4 High-Voltage Battery',
  rack: 'LiFePO4 High-Voltage Rack Battery System',
  bess: 'Battery Energy Storage System',
}

function build(r: Raw): Product {
  const cat = r.cat
  const jk = r.bms.startsWith('JK') || r.bms === TW_BMS
  const voltage = `${r.v} V`
  const capacity = `${r.ah} Ah`
  const energy = `${r.kwh} kWh`
  const maxVoltage = r.range.split('–')[1].trim()
  const high = cat === 'highvoltage' || cat === 'rack'
  const par = r.par

  const integration: [string, string][] = []
  if (cat === 'highvoltage')
    integration.push([
      'High-voltage system',
      `${r.cfg.split('S')[0]} LiFePO₄ cells in series (${r.cfg}) for a ${r.v} V nominal DC system. Use only with inverters or charge controllers rated for this battery voltage window (${r.range}).`,
    ])
  if (cat === 'rack') {
    integration.push([
      'High-voltage rack system',
      `${r.cfg.split('S')[0]} LiFePO₄ cells in series (${r.cfg}) for a ${r.v} V nominal DC system, built as stacked rack modules with a master control unit. Use only with inverters or power conversion systems rated for this battery voltage window (${r.range}).`,
    ])
    integration.push([
      'Circuit protection',
      'Built-in MCCB on the master control unit for overcurrent and short-circuit protection, and for safe isolation of the battery system during installation and maintenance.',
    ])
  }
  if (par) {
    integration.push([
      'Parallel expansion',
      `Communication support is specified for up to ${par} batteries. Confirm approved wiring, communication connections, configuration and inverter compatibility before connecting multiple units.`,
    ])
    integration.push([
      'Parallel balancing',
      `${r.bal} A rating as specified. Confirm operating conditions and the intended balancing function in the product manual.`,
    ])
  }
  const bmsText =
    cat === 'rack'
      ? 'ANT BMS with built-in passive balancing. '
      : cat === 'twowheeler'
        ? 'BMS with built-in active balancer. '
        : jk
          ? 'JK BMS with built-in active balancer. '
          : 'JBD BMS. '
  integration.push([
    'BMS',
    `${bmsText}Bluetooth connectivity to the EarthPower app for live monitoring of voltage, current, state of charge, cell voltages and temperature.`,
  ])
  if (cat === 'twowheeler') {
    integration.push([
      'Vehicle matching',
      'Pack configuration and current capability should be matched to the vehicle controller, motor and charger. Final operating limits and mechanical details must be confirmed against the approved cell, BMS and vehicle requirements before production or installation.',
    ])
  } else {
    integration.push([
      'Inverter compatibility',
      "Confirm the inverter's battery voltage window, charging settings, maximum charge/discharge current and supported battery communication protocol.",
    ])
    integration.push([
      'Charging source',
      'Use a charging system configured for the approved LiFePO₄ battery voltage and manufacturer-approved charging limits.',
    ])
  }

  const specs: [string, string][] = [['Product model', r.id]]
  if (cat === 'twowheeler') specs.push(['Application', 'Electric scooter / two-wheeler'])
  specs.push(
    ['Battery type', cat === 'twowheeler' ? 'Lithium Iron Phosphate (LiFePO₄ / LFP) pack' : 'Rechargeable lithium iron phosphate battery'],
    ['Nominal voltage', voltage],
    ['Nominal capacity', capacity],
    ['Nominal energy', energy],
    ['Cell configuration', cat === 'twowheeler' ? `${r.cfg}, using 3.2 V 15 Ah cells` : r.cfg],
    ['BMS', r.bms],
  )
  if (cat === 'rack') specs.push(['Circuit protection', 'Built-in MCCB with ON/OFF switch'], ['System design', 'Modular stacked rack with master control unit'])
  specs.push(['Specified voltage range', r.range])
  if (cat === 'twowheeler') {
    specs.push(['Max. continuous charge current', `${r.chg} A`], ['Max. continuous discharge current', `${r.dis} A`])
    if (r.peak) specs.push(['Peak discharge current / duration', r.peak])
  } else {
    specs.push(['Peak charging current', `${r.chg} A`], ['Peak discharging current', `${r.dis} A`])
  }
  if (par) specs.push(['Parallel balancing current', `${r.bal} A`], ['Parallel communication capability', `Up to ${par} batteries`])
  specs.push(['Cell chemistry', 'Lithium Iron Phosphate (LiFePO₄ / LFP)'])
  specs.push([
    cat === 'twowheeler' ? 'Operating / storage temperature' : 'Operating temperature',
    cat === 'twowheeler' ? '−20 °C to 60 °C / 20 °C to 40 °C' : '−20 °C to 60 °C',
  ])
  if (r.wt) specs.push(['Product weight', r.wt])
  if (r.dim) specs.push(['Dimensions (L × W × H)', r.dim])

  const features = [
    cat === 'rack'
      ? 'ANT BMS with built-in passive balancing and Bluetooth'
      : cat === 'twowheeler'
        ? 'Smart BMS with built-in active balancer and Bluetooth'
        : `${jk ? 'JK BMS with built-in active balancer' : 'JBD BMS'} and Bluetooth`,
    'Live monitoring in the EarthPower app',
    `Cell configuration ${r.cfg}`,
    'Operating range −20 °C to 60 °C',
  ]
  if (cat === 'rack') features.push('Built-in MCCB with ON/OFF switch', 'Modular stacked rack with master control unit')
  if (cat === 'twowheeler') features.push('Compact pack for compatible vehicle battery compartments')
  if (par) features.push(`Parallel communication for up to ${par} batteries`)
  if (high) features.push(`High-voltage ${r.v} V nominal DC system`)

  const applications =
    cat === 'twowheeler'
      ? ['Electric scooters', 'Electric two-wheelers']
      : cat === 'rack'
        ? ['High-voltage inverter', 'Commercial energy storage', 'Industrial energy storage']
        : cat === 'highvoltage'
          ? ['High-voltage inverter', 'Stationary energy storage']
          : ['Inverter systems', 'Stationary energy storage', 'Home backup', 'Solar storage']

  const chips = [cat === 'rack' ? 'ANT BMS · Bluetooth' : cat === 'twowheeler' ? 'Smart BMS · Bluetooth' : jk ? 'JK BMS · Bluetooth' : 'JBD BMS · Bluetooth']
  if (cat === 'rack') chips.push('MCCB')
  if (par) chips.push(`Parallel up to ${par}`)

  return {
    id: r.id,
    name: CAT_NAME[cat],
    category: cat,
    v: r.v,
    kwh: r.kwh,
    voltage,
    capacity,
    energy,
    group: voltage,
    highVoltage: high,
    maxVoltage,
    jk,
    parallel: par,
    balancing: r.bal,
    image: `/products/${r.id}.${r.img}`,
    datasheet: `/datasheets/EarthPower-${r.id}-Datasheet.pdf`,
    datasheetName: `EarthPower ${r.id} Datasheet.pdf`,
    datasheetLabel: 'Download Datasheet (PDF)',
    headline: [['Voltage', voltage], ['Capacity', capacity], ['Energy', energy], ['Cell configuration', r.cfg]],
    chips,
    features,
    applications,
    specs,
    integration,
    range: r.range,
    chg: r.chg,
    dis: r.dis,
    peak: r.peak,
    cfg: r.cfg,
    bms: r.bms,
    weight: r.wt,
    dimensions: r.dim,
  }
}

/* ------------------------------------------------------------------ */
/* BESS systems — values from the Earth Power BESS catalogue (PDF).    */
/* The catalogue gives no model numbers or separate datasheets, so     */
/* systems are identified by their rated energy and link to the        */
/* catalogue itself.                                                   */
/* ------------------------------------------------------------------ */
const CATALOGUE = '/catalogues/EarthPower-BESS-Catalogue.pdf'
const CELL: [string, string] = ['Cell', 'LFP, 314 Ah']
const BESS_APPS = [
  'Solar self-consumption',
  'Backup power & DG replacement',
  'Peak shaving & tariff arbitrage',
  'Demand-charge reduction',
  'Grid support & renewables',
  'Microgrids & remote sites',
]
const BESS_NOTE =
  'Specifications are as published in the Earth Power BESS catalogue. Contact Earth Power for project-specific configuration, certification documents, site requirements and commissioning.'

function bess(o: {
  id: string
  name: string
  kwh: string
  energy: string
  power: string
  dc: string
  enclosure: string
  image: string
  chips: string[]
  features: string[]
  specs: [string, string][]
}): Product {
  return {
    id: o.id,
    name: o.name,
    category: 'bess',
    v: parseFloat(o.dc.replace(/[^\d.]/g, '')),
    kwh: o.kwh,
    voltage: o.dc,
    capacity: '314 Ah cells',
    energy: o.energy,
    group: o.enclosure,
    highVoltage: false,
    maxVoltage: '',
    jk: false,
    image: `/products/${o.image}.jpg`,
    datasheet: CATALOGUE,
    datasheetName: 'EarthPower BESS Catalogue.pdf',
    datasheetLabel: 'Download BESS Catalogue (PDF)',
    headline: [
      ['Rated energy', o.energy],
      ['Rated power', o.power],
      ['Rated DC voltage', o.dc],
      ['Enclosure', o.enclosure],
    ],
    chips: o.chips,
    features: o.features,
    applications: BESS_APPS,
    specs: o.specs,
    integration: [],
    range: '',
    chg: 0,
    dis: 0,
    cfg: '',
    bms: '',
    note: BESS_NOTE,
  }
}

const BESS_PRODUCTS: Product[] = [
  bess({
    id: 'BESS-261kWh',
    name: 'Liquid-Cooled C&I Outdoor Cabinet',
    kwh: '261',
    energy: '261 kWh',
    power: '125 kW AC',
    dc: '832 V DC',
    enclosure: 'Outdoor cabinet',
    image: 'BESS-cabinet',
    chips: ['C&I', 'Liquid cooling', 'Aerosol fire suppression'],
    features: ['Outdoor all-in-one cabinet with integrated PCS', 'Liquid cooling', 'Aerosol fire suppression', 'LFP 314 Ah cells', '832 V DC · 400 V AC'],
    specs: [
      ['System', 'C&I outdoor all-in-one cabinet'],
      ['Rated energy', '261 kWh'],
      ['Rated AC power', '125 kW (max. 137.5 kW)'],
      CELL,
      ['Battery configuration', '1P260S · 5 × 1P52S packs'],
      ['Rated DC voltage', '832 V (715 – 936 V)'],
      ['Rated AC voltage', '400 V ±15%'],
      ['PCS max. efficiency', '98.5%'],
      ['AC–AC round-trip efficiency', '≥ 86% incl. auxiliary'],
      ['Cooling · fire protection', 'Liquid · aerosol'],
      ['Protection · corrosion', 'IP55 · C3 (C4/C5 on request)'],
      ['Ambient temperature', '−30 to 55 °C (derating above 45 °C)'],
      ['Dimensions (W × D × H)', '1,035 × 1,400 × 2,350 mm'],
      ['Weight', '≈ 2.5 t'],
    ],
  }),
  bess({
    id: 'BESS-418kWh',
    name: 'Liquid-Cooled C&I Outdoor Cabinet',
    kwh: '418',
    energy: '418 kWh',
    power: '209 kW AC',
    dc: '1,331.2 V DC',
    enclosure: 'Outdoor cabinet',
    image: 'BESS-cabinet',
    chips: ['C&I', 'Liquid cooling', 'Aerosol fire suppression'],
    features: ['Outdoor all-in-one cabinet with integrated PCS', 'Liquid cooling', 'Aerosol fire suppression', 'LFP 314 Ah cells', '1,331 V DC · 690 V AC'],
    specs: [
      ['System', 'C&I outdoor all-in-one cabinet'],
      ['Rated energy', '418 kWh'],
      ['Rated AC power', '209 kW'],
      CELL,
      ['Battery configuration', '1P416S · 8 × 1P52S packs'],
      ['Rated DC voltage', '1,331.2 V (1,164.8 – 1,497.6 V)'],
      ['Rated AC voltage', '690 V ±10% (800 V optional)'],
      ['PCS max. efficiency', '99%'],
      ['AC–AC round-trip efficiency', '≥ 88% excl. auxiliary'],
      ['Cooling · fire protection', 'Liquid · aerosol'],
      ['Protection · corrosion', 'IP55 · C3 (C4/C5 on request)'],
      ['Ambient temperature', '−30 to 55 °C (derating above 45 °C)'],
      ['Dimensions (W × D × H)', '1,300 × 1,350 × 2,350 mm'],
      ['Weight', '≈ 4 t'],
    ],
  }),
  bess({
    id: 'BESS-1044kWh',
    name: 'All-in-One 10-ft Plug-and-Play AC System',
    kwh: '1044',
    energy: '1.044 MWh',
    power: '500 kW AC',
    dc: '832 V DC',
    enclosure: '10-ft enclosure',
    image: 'BESS-enclosure',
    chips: ['C&I / Utility', 'Smart liquid cooling', 'Aerosol fire suppression'],
    features: ['Battery, PCS, liquid cooling and fire protection in one 10-ft enclosure', 'Plug-and-play AC system', 'Smart liquid cooling', 'LFP 314 Ah cells', '832 V DC · 400 V AC'],
    specs: [
      ['System', 'All-in-one 10-ft plug-and-play AC system'],
      ['Rated energy', '1.044 MWh'],
      ['Rated power', '500 kW (4 × 125 kW)'],
      CELL,
      ['Battery configuration', '4P260S · 1P52S packs'],
      ['Rated DC voltage', '832 V (715 – 936 V)'],
      ['AC output', '400 V AC, 50/60 Hz'],
      ['Charge / discharge rate', '0.5C'],
      ['Thermal management', 'Smart liquid cooling'],
      ['Fire protection', 'Detection, aerosol suppression, ventilation, water interface'],
      ['Protection · corrosion', 'IP55 · C4 (C5 optional)'],
      ['Operating temperature', '−30 to 55 °C (derating above 45 °C)'],
      ['Dimensions (L × W × H)', '2,991 × 2,438 × 2,896 mm'],
      ['Weight', '16 t'],
    ],
  }),
  bess({
    id: 'BESS-2508kWh',
    name: 'All-in-One 10-ft Plug-and-Play AC System',
    kwh: '2508',
    energy: '2.508 MWh',
    power: '1.29 MW AC',
    dc: '1,331.2 V DC',
    enclosure: '10-ft enclosure',
    image: 'BESS-enclosure',
    chips: ['C&I / Utility', 'Smart liquid cooling', 'Water fire-fighting interface'],
    features: ['Battery, PCS, liquid cooling and fire protection in one 10-ft enclosure', 'Plug-and-play AC system', 'Smart liquid cooling', 'LFP 314 Ah cells', '1,331 V DC · 690 V AC'],
    specs: [
      ['System', 'All-in-one 10-ft plug-and-play AC system'],
      ['Rated energy', '2.508 MWh'],
      ['Rated power', '1.29 MW (3 × 430 kW)'],
      CELL,
      ['Battery configuration', '6P416S · 1P104S packs'],
      ['Rated DC voltage', '1,331.2 V (1,164.8 – 1,497.6 V)'],
      ['AC output', '690 V AC, 50/60 Hz'],
      ['Charge / discharge rate', '0.5C'],
      ['Thermal management', 'Smart liquid cooling'],
      ['Fire protection', 'Detection, ventilation, water fire-fighting interface'],
      ['Protection · corrosion', 'IP55 · C4 (C5 optional)'],
      ['Operating temperature', '−30 to 55 °C (derating above 45 °C)'],
      ['Dimensions (L × W × H)', '2,991 × 2,438 × 2,896 mm'],
      ['Weight', '23 t'],
    ],
  }),
  bess({
    id: 'BESS-5016kWh',
    name: 'Penta — Liquid-Cooled DC Container',
    kwh: '5016',
    energy: '5.016 MWh',
    power: '≤ 2.5 MW DC',
    dc: '1,331.2 V DC',
    enclosure: '20-ft container',
    image: 'BESS-container',
    chips: ['Utility / large C&I', 'Liquid cooling', 'UL 9540 certified'],
    features: [
      '20-ft liquid-cooled DC battery block',
      '≥ 94% DC round-trip efficiency at 0.5C',
      'UL 9540 certified, UL 9540A tested (per catalogue)',
      '25 years design calendar life',
      'LFP 314 Ah cells',
      'IP55 container · IP67 pack',
    ],
    specs: [
      ['System', 'Penta — 20-ft liquid-cooled DC container'],
      ['Rated energy', '5.016 MWh'],
      ['Rated power', '≤ 2.5 MW (0.5C)'],
      ['Configuration', '12 clusters × (4 × 1P104S)'],
      ['Cell', 'LFP, 314 Ah'],
      ['Rated voltage', '1,331.2 V DC'],
      ['Voltage range', '1,164.8 – 1,497.6 V DC'],
      ['DC round-trip efficiency', '≥ 94% at 0.5C'],
      ['Design calendar life', '25 years'],
      ['Certification (per catalogue)', 'IEC · UL — UL 9540 certified, UL 9540A tested'],
      ['Thermal management', 'Liquid cooling, 60 kW cooling capacity'],
      ['Fixed auxiliary load', '3.1 kW'],
      ['Protection', 'IP55 container · IP67 pack'],
      ['Operating temperature', '−30 to +55 °C (derating above 45 °C)'],
      ['Altitude', '≤ 4,000 m (derating above 2,000 m)'],
      ['Communication', 'PCS: CAN / RS485 · EMS: IEC 61850'],
      ['Dimensions (L × W × H)', '6,058 × 2,438 × 2,896 mm'],
      ['Weight', '42.5 t'],
    ],
  }),
]

const CAT_RANK = new Map(CATEGORIES.map((c, i) => [c.id, i]))
export const PRODUCTS: Product[] = [...RAW.map(build), ...BESS_PRODUCTS].sort(
  (a, b) => (CAT_RANK.get(a.category) ?? 0) - (CAT_RANK.get(b.category) ?? 0),
)
/** Battery models only (excludes BESS systems, whose figures are not comparable cell-for-cell). */
export const BATTERIES: Product[] = PRODUCTS.filter((p) => p.category !== 'bess')
export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id)

const kwhNums = BATTERIES.map((p) => parseFloat(p.kwh))
export const STATS = {
  count: PRODUCTS.length,
  minV: Math.min(...PRODUCTS.map((p) => p.v)),
  maxV: Math.max(...PRODUCTS.map((p) => p.v)),
  voltageRange: '12.8 V to 1,331.2 V',
  energyRange: `${BATTERIES.find((p) => parseFloat(p.kwh) === Math.min(...kwhNums))!.kwh} kWh – 5.016 MWh`,
}
