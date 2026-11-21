// Source: EarthPower_Privacy_and_App_Privacy_Policies.txt (draft supplied by EarthPower).
// Body line markup: "## " = sub-heading, "- " = bullet, anything else = paragraph.
// {{EMAIL}}, {{URL}} and {{ADDRESS}} are filled from lib/site.ts.
export interface PolicySection {
  n: string
  h: string
  body: string[]
}

export const POLICY_DATES = { effective: '21 November 2026', updated: '21 November 2026' }

export const PRIVACY_POLICY: PolicySection[] = [
  {
    n: "01",
    h: "Introduction",
    body: [
      "EarthPower (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share when using our website, mobile application, battery monitoring platform, and customer support services.",
      "This Privacy Policy explains how we collect, use, store, process, and protect your information when you access or use EarthPower services.",
      "By using our website or application, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    n: "02",
    h: "Information We Collect",
    body: [
      "Depending on how you use our services, we may collect:",
      "## A. Personal and Account Information",
      "- Name and contact information.",
      "- Mobile phone number and account details.",
      "- Account authentication and verification information.",
      "- Customer and battery ownership information.",
      "## B. Battery and Device Information",
      "When you connect a compatible battery or Battery Management System (BMS), the application may access and display:",
      "- Battery voltage and current.",
      "- State of charge (SOC).",
      "- Battery temperature and cell information.",
      "- Battery protection and fault status.",
      "- BMS configuration and diagnostic information.",
      "- Battery model, serial number, and identification information.",
      "- Battery connection and communication status.",
      "Available information depends on the connected battery, BMS model, compatibility, and supported communication features.",
      "## C. Warranty and Registration Information",
      "When registering a battery or submitting a warranty request, we may collect:",
      "- Battery identification and serial numbers.",
      "- Battery model information.",
      "- Customer contact information.",
      "- Dealer or distributor information, where applicable.",
      "- Address and other information required for registration or warranty services.",
      "## D. Location Information",
      "Certain features, including trip recording and route-related functionality, may require access to your device's location. When you grant location permission and use location-dependent features, we may process location information to record trips and routes, display your location on a map, calculate or display trip-related information, and support location-dependent application features.",
      "Location access depends on device permissions and features used. You can manage location permissions through device settings.",
      "## E. Customer Support Information",
      "When contacting support or submitting a complaint, we may collect complaint details, messages exchanged with representatives, images and attachments you submit, appointment requests, support history, and information related to the battery or issue being reported.",
      "## F. Technical and Usage Information",
      "We may collect limited technical information necessary to operate, maintain, and improve our services, including device type and operating system, app version and technical configuration, connection and diagnostic logs, error reports and crash information where available, and usage or interaction information associated with platform functionality.",
    ],
  },
  {
    n: "03",
    h: "How We Use Your Information",
    body: [
      "We use collected information to create and maintain accounts; authenticate users; connect compatible batteries and BMS devices; display battery information and diagnostics; register batteries and manage warranty-related records; provide customer support and complaint management; facilitate trip recording and location-related functionality; send service-related notifications; maintain application functionality and security; troubleshoot technical issues; improve products, services, and user experience; prevent misuse and fraudulent activity; and comply with applicable legal obligations.",
    ],
  },
  {
    n: "04",
    h: "Bluetooth and Connected Battery Data",
    body: [
      "The EarthPower application may use Bluetooth and related device permissions to discover, connect to, communicate with, and retrieve supported information from compatible batteries and BMS devices.",
      "Bluetooth communication enables battery monitoring and supported battery management features. Battery information depends on data made available by connected hardware and firmware. We do not guarantee every battery or BMS will provide complete, accurate, or continuously available information.",
    ],
  },
  {
    n: "05",
    h: "Location and Trip Data",
    body: [
      "Location access may be used when you use trip recording or related map features. Depending on functionality, trip information may include route coordinates, recorded locations, timestamps, and associated trip information.",
      "Location permission can be managed or revoked through device settings. Disabling location access may affect features that require it. We do not intend to use location information for purposes unrelated to service functionality without appropriate authorization or lawful basis.",
    ],
  },
  {
    n: "06",
    h: "Data Sharing and Disclosure",
    body: [
      "We do not sell your personal information as part of our normal service operations.",
      "We may share information, where necessary, with authorized EarthPower personnel involved in customer service, technical support, warranty, or operations; service providers supporting hosting, infrastructure, communications, authentication, notifications, storage, and technical operations; authorized dealers, distributors, or service partners when required; legal, regulatory, or government authorities when required by law; or relevant parties when necessary to protect rights, safety, security, or property.",
      "Information shared with service providers is limited to what is reasonably necessary for the relevant service, subject to applicable requirements.",
    ],
  },
  {
    n: "07",
    h: "Data Storage and Security",
    body: [
      "We take reasonable technical and organizational measures to protect information against unauthorized access, loss, misuse, alteration, or disclosure. Measures may include access controls, authentication mechanisms, security monitoring, secure communication practices, and infrastructure safeguards, as appropriate.",
      "No digital system, network, storage mechanism, or internet transmission can be guaranteed to be completely secure. We cannot guarantee absolute security.",
    ],
  },
  {
    n: "08",
    h: "Data Retention",
    body: [
      "We retain information for as long as reasonably necessary to provide services; maintain account, battery, registration, and warranty records; support customer requests and complaints; maintain security and prevent misuse; fulfill operational requirements; and comply with legal obligations.",
      "When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable law and legitimate record-retention requirements.",
    ],
  },
  {
    n: "09",
    h: "Your Privacy Rights and Choices",
    body: [
      "Depending on applicable laws, you may have rights concerning your personal information, including requesting access, correction, deletion where applicable, withdrawing consent where processing is based on consent, and raising concerns or privacy-related complaints.",
      "You may manage certain permissions, including Bluetooth, notifications, and location access, through device settings. Contact us using the details below to submit a privacy request.",
    ],
  },
  {
    n: "10",
    h: "Third-Party Services",
    body: [
      "Our website and application may use third-party services for maps, hosting, notifications, authentication, infrastructure, or communications. These services may process information under their own privacy policies and applicable terms.",
      "EarthPower is not responsible for independent third-party privacy practices, except to the extent required by applicable law.",
    ],
  },
  {
    n: "11",
    h: "Children's Privacy",
    body: [
      "Our services are not specifically designed to collect personal information from children without appropriate authorization. If we become aware of collection in circumstances where it is not permitted, we will take appropriate steps in accordance with applicable laws.",
    ],
  },
  {
    n: "12",
    h: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy to reflect changes in services, technologies, operational practices, or legal requirements. Updated versions will be published with a revised effective or last-updated date. Please review it periodically.",
    ],
  },
  {
    n: "13",
    h: "Contact Us",
    body: [
      "EarthPower",
      "Email: {{EMAIL}}",
      "Website: {{URL}}",
      "Address: {{ADDRESS}}",
      "We will review privacy-related requests and respond in accordance with applicable laws.",
    ],
  },
]

export const APP_PRIVACY_POLICY: PolicySection[] = [
  {
    n: "01",
    h: "Introduction",
    body: [
      "This App Privacy Policy explains how EarthPower collects, uses, processes, stores, and protects information when you use the EarthPower Battery mobile application (“App”).",
      "The App provides battery connectivity and monitoring, battery registration, supported diagnostics, trip-related features, and customer support functionality. Information processed may vary depending on your device, connected battery/BMS, permissions, and features used.",
    ],
  },
  {
    n: "02",
    h: "Information the App May Process",
    body: [
      "## A. Account and Profile Information",
      "The App may process your name, mobile number, account details, authentication information, and customer profile details needed to provide account and platform services.",
      "## B. Battery and BMS Information",
      "When you connect a compatible battery or BMS, the App may read or display supported information, including battery voltage and current; state of charge (SOC); temperature and cell information; protection, fault, or diagnostic information; BMS model and device identifiers; battery model and serial information; and connection and communication status.",
      "Available information depends on the connected hardware and its supported functionality.",
      "## C. Bluetooth Permissions and Usage",
      "Bluetooth-related permissions and functionality may be used to scan for compatible battery devices, establish connections, communicate with supported BMS hardware, and retrieve battery information.",
      "Bluetooth access is necessary for features requiring a direct connection to a compatible battery. Disabling Bluetooth or relevant permissions may prevent battery discovery or connection.",
      "## D. Location Information",
      "The App may use device location when you use trip recording, maps, or other location-dependent features.",
      "Location may be used to display your position, record routes or trip information, and support location-based features. Location access is subject to device permissions and settings.",
      "You can manage location permission through device settings. Disabling location access may affect trip recording or related features.",
      "## E. Battery Registration and Warranty Information",
      "When registering a battery or using warranty-related features, the App may process battery serial numbers, model details, customer information, dealer information, contact details, and other registration details you submit.",
      "## F. Support Messages and Uploaded Content",
      "When using support features, the App may process complaint descriptions, chat messages, appointment details, images, attachments, and relevant battery or account information submitted to support.",
      "## G. Notifications",
      "If notification functionality is enabled, the App may use notification services to deliver service-related updates, messages, or other relevant notifications. You can manage notification permissions through device settings.",
      "## H. Technical Information",
      "The App may process technical information such as app version, operating system, device information, connection status, error information, and diagnostics as needed to operate, support, and troubleshoot the service.",
    ],
  },
  {
    n: "03",
    h: "How App Information Is Used",
    body: [
      "Information processed through the App may be used to authenticate and maintain your account; connect to compatible battery and BMS hardware; display battery data and diagnostics; facilitate battery registration and warranty-related services; enable trip recording and map functionality; provide customer support, complaint handling, chat, and appointment features; deliver relevant service notifications; maintain, troubleshoot, and improve the App; protect the App, platform, users, and services from misuse; and meet applicable legal obligations.",
    ],
  },
  {
    n: "04",
    h: "Permissions and Your Choices",
    body: [
      "Depending on the features you use and operating system, the App may request:",
      "- Bluetooth: discovering, connecting to, and communicating with compatible batteries/BMS devices.",
      "- Location: trip recording, maps, and location-dependent functionality.",
      "- Notifications: supported alerts and service updates.",
      "- Camera or photo/media access: when you choose to capture or upload images for supported support or other features.",
      "Permission availability and requirements may differ between Android and iOS versions.",
      "You can manage or revoke permissions through device settings. Some features may not function if required permissions are disabled.",
    ],
  },
  {
    n: "05",
    h: "Data Sharing",
    body: [
      "EarthPower does not sell your personal information as part of its normal service operations.",
      "Information may be shared when necessary with authorized EarthPower staff, service providers, infrastructure providers, communications or notification providers, authorized dealers or service partners where relevant, and legal or regulatory authorities when required by law.",
      "Sharing is intended to be limited to what is necessary for the applicable service or legal requirement.",
    ],
  },
  {
    n: "06",
    h: "Data Storage, Security, and Retention",
    body: [
      "Information may be stored and processed through EarthPower systems and service providers used to operate the App and backend services.",
      "We take reasonable technical and organizational measures intended to protect information from unauthorized access, loss, misuse, alteration, or disclosure. No system can be guaranteed to be completely secure.",
      "Information is retained for as long as reasonably necessary to provide the App's services, maintain account and battery registration or warranty records, support customers, meet operational requirements, and comply with applicable law.",
      "When information is no longer required, it may be deleted, anonymized, or securely disposed of, subject to applicable requirements.",
    ],
  },
  {
    n: "07",
    h: "Third-Party Services",
    body: [
      "The App may rely on third-party services for maps, hosting, authentication, notifications, communications, or other functionality.",
      "Third-party providers may process information under their own terms and privacy policies. Their availability and practices may be outside EarthPower's direct control.",
    ],
  },
  {
    n: "08",
    h: "Your Privacy Rights",
    body: [
      "Subject to applicable law, you may request access to, correction of, or deletion of personal information, and may withdraw consent where processing is based on consent.",
      "You may manage App permissions through device settings, including Bluetooth, location, camera, media, and notifications, depending on the permissions available on your device.",
      "For privacy-related requests, contact EarthPower using the contact information below.",
    ],
  },
  {
    n: "09",
    h: "Children's Privacy",
    body: [
      "The App is not specifically designed to collect personal information from children without appropriate authorization. If we become aware of collection in circumstances where it is not permitted, we will take appropriate steps in accordance with applicable law.",
    ],
  },
  {
    n: "10",
    h: "Changes to This App Privacy Policy",
    body: [
      "We may update this App Privacy Policy when App functionality, data practices, technologies, or legal requirements change.",
      "The updated policy will be made available through the website or App, with a revised effective or last-updated date.",
    ],
  },
  {
    n: "11",
    h: "Contact",
    body: [
      "EarthPower",
      "Email: {{EMAIL}}",
      "Website: {{URL}}",
      "Address: {{ADDRESS}}",
    ],
  },
]

