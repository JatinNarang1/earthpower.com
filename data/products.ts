/** All eight Earth Power models. Values verified against each model's datasheet PDF. */
const JK = 'JK BMS + Active Balancer (Bluetooth)'
const JBD = 'JBD BMS (Bluetooth)'

interface Raw {
  id: string
  v: number
  ah: number
  kwh: string
  cfg: string
  bms: string
  range: string
  chg: number
  dis: number
  par?: number
  bal?: number
  high?: boolean
  wt: string
  dim: string
}

const RAW: Raw[] = [
  { id: 'EPL121058H', v: 12.8, ah: 100, kwh: '1.280', cfg: '4S1P', bms: JBD, range: '11.2 – 14.4 V', chg: 50, dis: 70, wt: '13.0 ± 0.5 kg', dim: '215 × 182 × 370 mm' },
  { id: 'EPL122100S', v: 12.8, ah: 200, kwh: '2.560', cfg: '4S2P', bms: JK, range: '11.2 – 14.4 V', chg: 50, dis: 100, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm' },
  { id: 'EPL251058H', v: 25.6, ah: 100, kwh: '2.560', cfg: '8S1P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 80, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm' },
  { id: 'EP25105ESS', v: 25.6, ah: 100, kwh: '2.560', cfg: '8S1P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 80, par: 15, bal: 5, wt: '24.7 ± 1 kg', dim: '375 × 177 × 385 mm' },
  { id: 'EPL252100S', v: 25.6, ah: 200, kwh: '5.120', cfg: '8S2P', bms: JK, range: '22.4 – 28.8 V', chg: 50, dis: 100, wt: '47.3 ± 1 kg', dim: '380 × 175 × 650 mm' },
  { id: 'EP51105ESS', v: 51.2, ah: 100, kwh: '5.120', cfg: '16S1P', bms: JK, range: '44.8 – 57.6 V', chg: 50, dis: 100, par: 15, bal: 5, wt: '47.3 ± 1 kg', dim: '380 × 175 × 650 mm' },
  { id: 'EP51314ESS', v: 51.2, ah: 314, kwh: '16.076', cfg: '16S1P', bms: JK, range: '44.8 – 57.6 V', chg: 80, dis: 130, par: 15, bal: 5, wt: '107 ± 1 kg', dim: '406 × 267 × 838 mm' },
  { id: 'EPL961050S', v: 96, ah: 100, kwh: '9.600', cfg: '30S1P', bms: JK, range: '90.0 – 106.5 V', chg: 40, dis: 70, high: true, wt: '80 ± 1 kg', dim: '615 × 280 × 550 mm' },
]

export interface Product {
  id: string
  name: string
  v: number
  kwh: string
  voltage: string
  capacity: string
  energy: string
  group: string
  highVoltage: boolean
  jk: boolean
  parallel?: number
  balancing?: number
  image: string
  datasheet: string
  datasheetName: string
  chips: string[]
  features: string[]
  applications: string[]
  specs: [string, string][]
  integration: [string, string][]
  range: string
  chg: number
  dis: number
  cfg: string
  bms: string
  weight: string
  dimensions: string
}

export const SAFETY: string[] = [
  'Installation, commissioning and maintenance should be carried out by suitably qualified personnel in accordance with the approved product manual and applicable local requirements.',
  'Keep the battery away from direct flame, excessive heat, conductive debris and environments outside the specified operating temperature range.',
  'Prevent short circuits, reverse polarity, impact, crushing, puncture or unauthorised dismantling.',
  "Use correctly rated cables, overcurrent protection, isolators and connectors suitable for the system's voltage and current.",
  'Do not use a battery that is visibly damaged, unusually hot, swollen, leaking or giving abnormal indications. Isolate it only if safe to do so and contact the supplier.',
  'Ensure ventilation, access clearance, mounting and environmental protection meet the installation design and product manual.',
]

function build(r: Raw): Product {
  const jk = r.bms === JK || r.bms.startsWith('JK')
  const voltage = `${r.v} V`
  const capacity = `${r.ah} Ah`
  const energy = `${r.kwh} kWh`
  const par = r.par
  const integration: [string, string][] = []
  if (r.high)
    integration.push([
      'High-voltage system',
      '30 LiFePO₄ cells in series (30S1P) for a 96 V nominal DC system. Use only with inverters, UPS or charge controllers rated for this battery voltage window (90.0 – 106.5 V).',
    ])
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
  integration.push([
    'BMS',
    `${jk ? 'JK BMS with built-in active balancer. ' : 'JBD BMS. '}Bluetooth connectivity to the EarthPower app for live monitoring of voltage, current, state of charge, cell voltages and temperature.`,
  ])
  integration.push([
    'Inverter compatibility',
    "Confirm the inverter's battery voltage window, charging settings, maximum charge/discharge current and supported battery communication protocol.",
  ])
  integration.push([
    'Charging source',
    'Use a charging system configured for the approved LiFePO₄ battery voltage and manufacturer-approved charging limits.',
  ])

  const specs: [string, string][] = [
    ['Product model', r.id],
    ['Battery type', 'Rechargeable lithium iron phosphate battery'],
    ['Nominal voltage', voltage],
    ['Nominal capacity', capacity],
    ['Nominal energy', energy],
    ['Cell configuration', r.cfg],
    ['BMS', r.bms],
    ['Specified voltage range', r.range],
    ['Peak charging current', `${r.chg} A`],
    ['Peak discharging current', `${r.dis} A`],
  ]
  if (par) {
    specs.push(['Parallel balancing current', `${r.bal} A`])
    specs.push(['Parallel communication capability', `Up to ${par} batteries`])
  }
  specs.push(
    ['Cell chemistry', 'Lithium Iron Phosphate (LiFePO₄ / LFP)'],
    ['Operating temperature', '−20 °C to 60 °C'],
    ['Product weight', r.wt],
    ['Dimensions (L × W × H)', r.dim],
    ['Warranty period', '5 years'],
  )

  const features = [
    `${jk ? 'JK BMS with built-in active balancer' : 'JBD BMS'} and Bluetooth`,
    'Live monitoring in the EarthPower app',
    `Cell configuration ${r.cfg}`,
    'Operating range −20 °C to 60 °C',
    '5-year warranty',
  ]
  if (par) features.push(`Parallel communication for up to ${par} batteries`)
  if (r.high) features.push('High-voltage 96 V nominal DC system')

  return {
    id: r.id,
    name: r.high ? 'LiFePO4 High-Voltage Battery' : 'LiFePO4 Energy Storage Battery',
    v: r.v,
    kwh: r.kwh,
    voltage,
    capacity,
    energy,
    group: voltage,
    highVoltage: !!r.high,
    jk,
    parallel: par,
    balancing: r.bal,
    image: `/products/${r.id}.jpg`,
    datasheet: `/datasheets/EarthPower-${r.id}-Datasheet.pdf`,
    datasheetName: `EarthPower ${r.id} Datasheet.pdf`,
    chips: [jk ? 'JK BMS · Bluetooth' : 'JBD BMS · Bluetooth', '5-year warranty', ...(par ? [`Parallel up to ${par}`] : [])],
    features,
    applications: r.high
      ? ['High-voltage inverter', 'UPS', 'Stationary energy storage']
      : ['Inverter systems', 'Stationary energy storage', 'Home backup', 'Solar storage'],
    specs,
    integration,
    range: r.range,
    chg: r.chg,
    dis: r.dis,
    cfg: r.cfg,
    bms: r.bms,
    weight: r.wt,
    dimensions: r.dim,
  }
}

export const PRODUCTS: Product[] = RAW.map(build)
export const VOLTAGE_GROUPS = ['12.8 V', '25.6 V', '51.2 V', '96 V']
export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id)
