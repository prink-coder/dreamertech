export const SOLUTIONS_DATA = [
  {
    id: 'suitecrm-custom',
    category: 'CRM & Add-ons',
    badge: 'Core Expertise',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'SuiteCRM & SugarCRM Customization',
    description:
      'Custom modules, automated workflow logic hooks, legacy upgrades, and seamless ERP/API integrations tailored to your exact sales operations.',
    highlights: ['Custom Logic Hooks', 'Zero-Downtime Upgrades', 'REST/SOAP API Sync'],
    iconName: 'Database',
  },
  {
    id: 'asterisk-ippbx',
    category: 'IPPBX & Telephony',
    badge: 'Telecom Stack',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    title: 'Asterisk, Elastix & FreePBX Setup',
    description:
      'Enterprise VoIP deployment with multi-level IVR, intelligent call routing, call recording, SIP trunking, and native CRM screen-pop integration.',
    highlights: ['Click-to-Call CRM', 'Multi-Level IVR', 'SIP Trunk Security'],
    iconName: 'PhoneCall',
  },
  {
    id: 'twilio-plugin',
    category: 'CRM & Add-ons',
    badge: 'Marketplace Bestseller',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    title: 'Twilio Call Logger & Click-to-Call',
    description:
      'Bridge Twilio voice directly inside SuiteCRM & SugarCRM. Log inbound/outbound call durations, recordings, and instant caller popups automatically.',
    highlights: ['One-Click Dialing', 'Auto Call Recording', 'Instant Lead Popup'],
    iconName: 'Headphones',
  },
  {
    id: 'whatsapp-sms',
    category: 'CRM & Add-ons',
    badge: 'Omnichannel',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'WhatsApp & SMS CRM Connectors',
    description:
      'Send automated order alerts, appointment reminders, and two-way conversational messages via Twilio SMS & WhatsApp directly from CRM records.',
    highlights: ['Template Automation', '2-Way Chat History', 'Bulk Campaign Logs'],
    iconName: 'MessageSquare',
  },
  {
    id: 'opencart-ecom',
    category: 'Web, E-Commerce & Mobile',
    badge: 'E-Commerce',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    title: 'OpenCart & Custom E-Commerce',
    description:
      'High-speed online storefronts with custom payment gateways, shipping calculators, inventory sync, and automated CRM order ingestion.',
    highlights: ['Custom Checkout', 'CRM Order Sync', 'SEO & Speed Tuned'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'mobile-apps',
    category: 'Web, E-Commerce & Mobile',
    badge: 'iOS & Android',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'Field-Force & Custom Mobile Apps',
    description:
      'Native and cross-platform Android & iOS applications engineered for field sales teams, GPS check-ins, and real-time CRM synchronization.',
    highlights: ['Offline Data Sync', 'GPS Visit Tracking', 'Push Notifications'],
    iconName: 'Smartphone',
  },
  {
    id: 'crm-hosting',
    category: 'IPPBX & Telephony',
    badge: 'Managed Cloud',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
    title: 'Managed CRM & VoIP Server Hosting',
    description:
      'Hardened cloud infrastructure with automated off-site backups, SSL, firewall tuning, and 24/7 proactive uptime monitoring.',
    highlights: ['99.98% Uptime SLA', 'Daily Off-Site Backups', 'DDoS & SIP Hardening'],
    iconName: 'Server',
  },
  {
    id: 'gcal-sync',
    category: 'CRM & Add-ons',
    badge: 'Productivity Plugin',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: '2-Way Google Calendar & Mail Sync',
    description:
      'Eliminate double entry with real-time bi-directional synchronization between SuiteCRM/SugarCRM meetings, tasks, and Google Workspace.',
    highlights: ['Real-Time Sync', 'Conflict Resolution', 'Team Calendar Views'],
    iconName: 'RefreshCw',
  },
  {
    id: 'web-portals',
    category: 'Web, E-Commerce & Mobile',
    badge: 'Customer Portals',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    title: 'Custom Web Apps & Client Portals',
    description:
      'Self-service customer portals, ticket dashboards, and custom PHP/Laravel/React web applications built for reliability and speed.',
    highlights: ['Role-Based Access', 'Live Ticket Tracking', 'Modern Responsive UI'],
    iconName: 'Globe',
  },
];

export const ESTIMATOR_MODULES = [
  { id: 'dreamcrm', label: 'DreamCRM / SuiteCRM Setup', days: 5, category: 'Core CRM' },
  { id: 'asterisk', label: 'Asterisk / FreePBX IPPBX', days: 4, category: 'Telephony' },
  { id: 'twilio', label: 'Twilio Click-to-Call & Logger', days: 2, category: 'Add-on' },
  { id: 'whatsapp', label: 'WhatsApp & SMS Integration', days: 2, category: 'Add-on' },
  { id: 'migration', label: 'Legacy Data Migration', days: 3, category: 'Data' },
  { id: 'ecommerce', label: 'OpenCart / Web Portal Sync', days: 6, category: 'Web' },
];