/**
 * Halstead Solutions — vertical-specific landing pages.
 *
 * Each solution targets a specific industry/use-case with keyword-rich content
 * designed to rank for queries like "home security for Airbnb hosts" or
 * "construction site security cameras". Schema: Service.
 */

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  problem: {
    title: string;
    body: string;
  };
  solution: {
    title: string;
    body: string;
  };
  keyFeatures: Array<{
    title: string;
    description: string;
  }>;
  pricing: {
    starting: string;
    note: string;
  };
  faqs: Array<{ q: string; a: string }>;
  relatedSolutions: string[];
};

export const SOLUTIONS: Record<string, Solution> = {
  "home-security": {
    slug: "home-security",
    name: "Home Security",
    shortName: "Residential",
    industry: "Residential homes",
    metaTitle: "Home Security Systems — Professional Installation from $30/month",
    metaDescription:
      "Halstead home security delivers professionally installed cameras, smart AI motion alerts, and optional 24/7 monitoring for single-family homes. No 36-month contracts. Free quote in minutes.",
    hero: {
      eyebrow: "For Homeowners",
      title: "Home security that actually works for the way families live.",
      subtitle:
        "Professional cameras installed by your neighbor. Smart alerts that filter out wind, rain, and animals. Vacation mode that thinks for you. Optional 24/7 professional dispatch. All for $30 to $75 per month with no 36-month contract.",
    },
    problem: {
      title: "What's wrong with home security today.",
      body: "The big national brands lock customers into 36-month contracts at $40-$60 per month, then route every support call through anonymous offshore call centers. The DIY brands ship boxes and abandon you to figure out installation, network configuration, and troubleshooting alone. Neither serves homeowners well — especially families that want both reliability and the flexibility to leave if something doesn't work.",
    },
    solution: {
      title: "Halstead's residential approach.",
      body: "Halstead bridges the gap with locally installed, locally supported home security. A state-licensed technician comes to your home, mounts your cameras, configures your hub, walks you through the mobile app, and gives you their direct phone number for support. Your system runs on Halstead's smart software platform with AI motion classification, vacation mode automation, package detection, and family check-ins. Optional 24/7 professional monitoring through a UL-listed central station partner is available on the Pro Monitoring tier.",
    },
    keyFeatures: [
      {
        title: "Professional installation by a local technician",
        description:
          "Every Halstead system is installed by a state-licensed technician who lives in your area. They mount cameras at the right heights and angles, configure the hub on your wifi network, install the mobile app on your phone, and walk you through every feature. Most installations take 2 to 4 hours depending on home size.",
      },
      {
        title: "Smart AI motion alerts",
        description:
          "Halstead's AI distinguishes person, vehicle, package, and animal motion — so you only get notified for the categories that matter to you. Available on the Premium tier and above. Cuts false alerts by an estimated 70%.",
      },
      {
        title: "Vacation mode automation",
        description:
          "One toggle increases sensitivity, sets longer cloud retention, sends you a daily digest, and notifies your trusted neighbor list. Returns to normal when you tap it off. Built specifically for the way families travel.",
      },
      {
        title: "Family check-ins",
        description:
          "Pre-register household members at install. When your kids come home from school, Halstead recognizes them and sends a 'Sarah is home, 3:47pm' notification — without triggering a scary alarm.",
      },
      {
        title: "Visitor passes for cleaners and contractors",
        description:
          "Generate a visitor pass for your weekly cleaner, dog walker, or in-laws. The system records video for your archive but doesn't blast you with alerts during their pre-defined window.",
      },
      {
        title: "Optional 24/7 professional monitoring",
        description:
          "Pro Monitoring tier ($75/month) adds dispatch through a UL-listed central station. Their staff can dispatch police, fire, or medical responders. Includes a cellular backup hub that keeps your system online even when internet or power are down.",
      },
    ],
    pricing: {
      starting: "$30/month",
      note: "Plus hardware (4-camera kit: $399, 6-camera: $599, 8-camera: $799). 0% financing available through Reyna Title.",
    },
    faqs: [
      {
        q: "How much does a Halstead home security system cost?",
        a: "Plans start at $30/month for Basic (4 cameras, 7-day cloud storage). Premium is $50/month (8 cameras, AI smart filters, 30-day storage, vacation mode, visitor passes). Pro Monitoring is $75/month (everything in Premium plus 24/7 UL-listed central station dispatch and cellular backup). Hardware is sold separately at install: 4-camera kit $399, 6-camera $599, 8-camera $799.",
      },
      {
        q: "How long does a typical home installation take?",
        a: "Most single-family home installations take 2 to 4 hours. Your local Halstead installer arrives, walks the property with you to confirm camera placement, mounts and wires the cameras, configures the hub on your wifi, sets up your mobile app, and walks you through every feature. Same-day install for most metros.",
      },
      {
        q: "Do I own the cameras and equipment?",
        a: "Yes. You purchase the hardware up front and own it. If you cancel your subscription, the cameras continue working as standalone devices recording locally to the hub. Cellular backup features and cloud storage stop, but the hardware is yours forever.",
      },
      {
        q: "What happens during a power or internet outage?",
        a: "On the Pro Monitoring tier, your system includes a cellular backup hub with LTE-M radio and 24-hour battery. If your internet goes down or your power glitches, the hub stays online via cellular and continues sending alerts and recording footage. Basic and Premium tiers continue local recording during outages but lose cloud upload until connectivity is restored.",
      },
      {
        q: "Can I move my Halstead system to a new home?",
        a: "Yes. If your new home is within a Halstead service area, your local team will uninstall your existing system, transport the equipment, and reinstall at your new address for a flat service fee (typically $200-$400 depending on system size). Your subscription continues uninterrupted.",
      },
      {
        q: "Does Halstead work with insurance discounts?",
        a: "Yes. Most major homeowners insurance carriers offer 5% to 15% discounts for monitored security systems. Halstead automatically generates the certificate of monitoring and submits it to your carrier annually so you actually receive the discount.",
      },
    ],
    relatedSolutions: ["multifamily", "short-term-rental", "business-security"],
  },

  "business-security": {
    slug: "business-security",
    name: "Business Security",
    shortName: "Commercial",
    industry: "Small and mid-sized businesses",
    metaTitle: "Small Business Security Systems — Restaurants, Retail, Offices",
    metaDescription:
      "Professional commercial security from Halstead. Camera systems, access control, alarm monitoring, and after-hours dispatch for restaurants, retail stores, offices, and small businesses. Locally installed, no long contracts.",
    hero: {
      eyebrow: "For Small Business",
      title: "Commercial security without the corporate runaround.",
      subtitle:
        "Halstead protects small and mid-sized businesses with professionally installed camera systems, smart alarms, and optional 24/7 dispatch. Built for restaurants, retail stores, offices, and service businesses that need real protection without ADT-style contracts.",
    },
    problem: {
      title: "Why small business security usually disappoints.",
      body: "Most small business owners get pushed into one of two bad options: pay ADT or Brinks $150 to $300 per month under a 3-year contract with mediocre cameras and a call center monitoring center, or DIY a home-grade system that wasn't designed for commercial use. Neither option treats your business like the asset it is.",
    },
    solution: {
      title: "Halstead's commercial approach.",
      body: "Halstead delivers commercial-grade IP cameras with proper night vision, weatherproofing, and motion detection — installed by a state-licensed local technician who understands commercial environments. Optional 24/7 professional monitoring with police dispatch, after-hours alarm response, and integrated alarm panels. Plus the Halstead software your team can actually use: multi-user access, role-based permissions, audit logs, and customizable alerts.",
    },
    keyFeatures: [
      {
        title: "Commercial-grade hardware",
        description:
          "Halstead works with professional ONVIF-compliant IP cameras built for commercial environments. 4MP and 8MP options. IK10 vandal-resistance ratings. IP67 weather-sealing. Real night vision (not just IR LEDs).",
      },
      {
        title: "After-hours professional monitoring",
        description:
          "Pro Monitoring tier includes 24/7 dispatch through a UL-listed central station. After-hours alarm trigger? Your local police are dispatched, your manager is called, and your security system records every detail.",
      },
      {
        title: "Multi-user access with permissions",
        description:
          "Owner, manager, and staff each get their own login with role-based permissions. Owners see everything. Managers see operational data. Staff see only what they need. Full audit log of who viewed what and when.",
      },
      {
        title: "Customizable alert routing",
        description:
          "Configure who gets alerted for what. Glass-break at 2am? Owner's phone rings. Motion at the back loading dock at 11pm? Manager gets a text. Routine business-hours activity? No alerts at all.",
      },
      {
        title: "Integration with access control",
        description:
          "Halstead can integrate with commercial access control systems for door entry logging, visitor management, and time-stamped entry/exit records. Available on commercial tiers.",
      },
      {
        title: "Storage for compliance and incident response",
        description:
          "Extended retention plans (60-day, 90-day, custom) for businesses that need recorded footage for compliance, insurance, or legal protection. All footage end-to-end encrypted, exportable on demand.",
      },
    ],
    pricing: {
      starting: "$75/month",
      note: "Commercial pricing varies by site complexity. Most small businesses fall between $75 and $200 per month plus hardware.",
    },
    faqs: [
      {
        q: "How is Halstead's commercial pricing different from residential?",
        a: "Commercial customers typically need more cameras, higher-grade hardware, longer storage retention, and integrated alarm panels — so commercial systems are typically priced from $75 to $200 per month plus hardware. Pricing is quoted per site after a free walk-through with your local Halstead team.",
      },
      {
        q: "Can Halstead handle multi-location businesses?",
        a: "Yes. Halstead's platform supports multi-site management, allowing owners and managers to view all locations from a single portal with consolidated reporting. Each location can have its own camera count, alert routing, and access permissions while rolling up to a parent organization.",
      },
      {
        q: "Does Halstead offer after-hours alarm response?",
        a: "Yes, on the Pro Monitoring tier. After-hours alarm triggers go through Halstead's UL-listed central station partner, who can dispatch police, contact your designated responder list, or take other configured actions based on the alarm type and your settings.",
      },
      {
        q: "What about commercial alarm panels and access control?",
        a: "Halstead works with industry-standard commercial alarm panels (DSC, Honeywell, Bosch) and access control systems. Your local Halstead team will assess your existing infrastructure and integrate where possible, replacing only what's necessary.",
      },
    ],
    relatedSolutions: ["multifamily", "auto-dealership", "cannabis-dispensary"],
  },

  "multifamily": {
    slug: "multifamily",
    name: "Multifamily & Apartments",
    shortName: "Multifamily",
    industry: "Apartment buildings, condo associations",
    metaTitle: "Apartment Security Systems — Multifamily Camera & Access Control",
    metaDescription:
      "Halstead multifamily security: per-unit camera options, common area monitoring, package room cameras, parking lot coverage, and resident-facing app. Built for property managers and HOAs.",
    hero: {
      eyebrow: "For Property Managers",
      title: "Security infrastructure for the modern apartment building.",
      subtitle:
        "Halstead serves multifamily properties with consolidated common area monitoring, package room cameras, parking lot coverage, optional in-unit camera kits, and a resident-facing app — all under one platform with property manager dashboards.",
    },
    problem: {
      title: "Multifamily security is a coordination nightmare.",
      body: "Most apartment buildings end up with a Frankenstein mix of decades-old DVR systems for common areas, mismatched intercoms, package theft from porches and lobbies, and residents installing their own Ring cameras in violation of HOA rules. Property managers can't see what's happening across their portfolio. Residents don't trust the system. Insurance carriers ask uncomfortable questions during renewals.",
    },
    solution: {
      title: "Halstead's multifamily approach.",
      body: "One platform, one dashboard, one set of alerts. Halstead deploys commercial-grade cameras across common areas, lobbies, package rooms, parking, and amenities. Optional resident kits for in-unit doorbell and entry cameras under HOA-approved configurations. Centralized property manager portal for monitoring, incident response, and resident communication. Resident-facing app for video access on permitted cameras.",
    },
    keyFeatures: [
      {
        title: "Common area camera coverage",
        description:
          "Lobbies, hallways, parking lots, package rooms, fitness centers, pool decks, mail rooms — all covered with commercial-grade IP cameras and integrated into a single management portal.",
      },
      {
        title: "Package room cameras with theft alerts",
        description:
          "Package theft is the #1 multifamily complaint. Halstead's package room cameras log every package placement and removal, with anomaly detection for after-hours pickups or repeat removers.",
      },
      {
        title: "Resident-facing mobile app",
        description:
          "Residents can view permitted cameras (their own door, package room confirmation, lobby) from their phone. Configurable per-resident permissions controlled by property manager.",
      },
      {
        title: "Property manager dashboard",
        description:
          "Property manager portal shows all cameras, all alerts, all incidents across the entire portfolio. Filter by property, building, time range. Generate reports for ownership and insurance.",
      },
      {
        title: "Visitor and delivery logging",
        description:
          "AI-tagged delivery and visitor activity at lobby and package room cameras. Searchable archive. Useful for resident disputes and incident response.",
      },
      {
        title: "Per-door pricing model",
        description:
          "Multifamily pricing scales by unit count rather than per-camera. Predictable monthly cost that includes common area cameras, monitoring, and platform access. Add-ons for in-unit deployments.",
      },
    ],
    pricing: {
      starting: "$3-$8 per door per month",
      note: "Multifamily pricing varies by amenity scope and in-unit options. Quoted per property after a walk-through.",
    },
    faqs: [
      {
        q: "How does multifamily pricing work?",
        a: "Multifamily is priced per unit rather than per camera, typically $3-$8 per door per month depending on amenity scope and feature requirements. Common area camera infrastructure is included. In-unit kits are optional add-ons priced separately. Quoted per property after a walk-through.",
      },
      {
        q: "Can residents have their own cameras?",
        a: "Yes, on HOA-approved configurations. Residents can opt into Halstead in-unit kits with doorbell cameras and entry cameras that integrate with the property's overall system while keeping resident video private from property management.",
      },
      {
        q: "What about Section 8 and affordable housing?",
        a: "Halstead works with affordable housing properties and HUD-funded developments. Compliance with privacy regulations and resident notification requirements is built into our deployment process.",
      },
      {
        q: "Does Halstead integrate with my existing intercom?",
        a: "In most cases yes. Halstead's commercial team can integrate with industry-standard IP intercoms and access control systems (Butterfly MX, ButterflyMX, Brivo, OpenPath). Integration is assessed during the property walk-through.",
      },
    ],
    relatedSolutions: ["business-security", "short-term-rental"],
  },

  "short-term-rental": {
    slug: "short-term-rental",
    name: "Short-Term Rentals",
    shortName: "STR / Airbnb",
    industry: "Airbnb and VRBO hosts",
    metaTitle: "Airbnb Security Cameras — Short-Term Rental Property Protection",
    metaDescription:
      "Halstead protects Airbnb and VRBO short-term rental properties with platform-compliant cameras, noise monitoring, occupancy detection, and damage documentation. Built for hosts and property managers.",
    hero: {
      eyebrow: "For STR Hosts",
      title: "Protect your short-term rental property.",
      subtitle:
        "Halstead builds Airbnb and VRBO-compliant security around exterior cameras, noise monitoring, occupancy detection, and damage documentation. Designed for hosts who manage one home or property managers running portfolios.",
    },
    problem: {
      title: "STR hosts have unique security needs.",
      body: "Airbnb's policy requires external camera disclosure and prohibits interior cameras in private spaces. Hosts need to detect parties, unauthorized guests, smoking, pets, and property damage — all while respecting platform rules and guest privacy. Generic home security wasn't built for this.",
    },
    solution: {
      title: "Halstead's STR approach.",
      body: "Halstead's STR tier ships with platform-compliant exterior cameras (clearly disclosed and permitted by Airbnb policy), noise level monitoring (decibel-based, no audio recording), occupancy sensors, and pre-built post-checkout inspection workflows. Property managers get a multi-property dashboard. Hosts get peace of mind without violating platform rules.",
    },
    keyFeatures: [
      {
        title: "Exterior cameras with platform disclosure",
        description:
          "Halstead's STR tier includes exterior-only camera placement with pre-written disclosure language for Airbnb and VRBO listings. Doorbell cameras at entry, exterior pole cameras, driveway cameras — all visible and disclosed per platform requirements.",
      },
      {
        title: "Noise monitoring without audio recording",
        description:
          "Noise sensors measure decibel levels in real-time without recording audio (which is restricted in many jurisdictions and prohibited by Airbnb's interior-camera rules). Get alerts when noise exceeds set thresholds — common for parties.",
      },
      {
        title: "Occupancy detection",
        description:
          "Get alerts if occupancy exceeds your booking count. Useful for detecting unauthorized parties, extra guests, or unlisted long stays.",
      },
      {
        title: "Pre-built inspection workflows",
        description:
          "Post-checkout, get an automated inspection report comparing pre-checkin and post-checkout camera angles. Damage documentation built in. Helpful for Airbnb resolution disputes.",
      },
      {
        title: "Multi-property dashboard for managers",
        description:
          "STR property managers running multiple listings get a single dashboard showing all properties, current bookings, alert status, and inspection reports. Filter by city, listing, or booking status.",
      },
      {
        title: "Smart lock integration",
        description:
          "Integrate with Schlage Encode, August, Yale, Igloohome, and other smart lock systems for automatic guest code generation and revocation.",
      },
    ],
    pricing: {
      starting: "$45/month per property",
      note: "Multi-property discounts available for portfolios of 3+ listings. Hardware extra.",
    },
    faqs: [
      {
        q: "Are interior cameras allowed for Airbnb?",
        a: "No. Airbnb's policy explicitly prohibits cameras inside the home in private spaces (bedrooms, bathrooms, living areas). Halstead's STR tier deploys exterior-only cameras to remain compliant with Airbnb's policies. Noise monitoring is decibel-only and does not record audio.",
      },
      {
        q: "Will Halstead's cameras show up on my Airbnb listing?",
        a: "Yes — and they need to. Airbnb requires hosts to disclose all surveillance equipment in the listing. Halstead provides pre-written disclosure language compliant with Airbnb policy that you can copy directly into your listing's house rules and amenities.",
      },
      {
        q: "Can I monitor for parties?",
        a: "Yes, through a combination of noise level monitoring (decibel-based, no audio recording) and occupancy detection. Halstead's STR tier sends alerts when noise exceeds your set thresholds or when more people are detected than your booking count would suggest.",
      },
      {
        q: "What about damage documentation for resolution disputes?",
        a: "Halstead automatically generates pre-checkin and post-checkout snapshots from your exterior cameras. If a guest causes property damage, you have time-stamped photos showing the property's condition before and after their stay — useful evidence for Airbnb resolution claims.",
      },
    ],
    relatedSolutions: ["home-security", "multifamily"],
  },

  "construction-site": {
    slug: "construction-site",
    name: "Construction Site Security",
    shortName: "Construction",
    industry: "Active construction projects",
    metaTitle: "Construction Site Security Cameras — Job Site Theft Prevention",
    metaDescription:
      "Halstead construction site security: solar-powered cameras, cellular connectivity, theft detection, and remote monitoring for active job sites. Mobile, weatherproof, and easy to relocate as projects progress.",
    hero: {
      eyebrow: "For Builders",
      title: "Job site theft prevention without dragging cable.",
      subtitle:
        "Halstead deploys solar-powered, cellular-connected, weatherproof camera systems to active construction sites — without requiring power, internet, or permanent infrastructure. Mobile, relocatable, and built for jobsite conditions.",
    },
    problem: {
      title: "Construction sites are theft magnets.",
      body: "Active job sites are attractive targets: unfinished structures with copper wiring, expensive tools, equipment, materials, and no security. Traditional security systems require power and internet — neither of which exist on a fresh job site. Most builders self-insure for material theft and absorb the losses, which can run $10K to $100K per project.",
    },
    solution: {
      title: "Halstead's construction approach.",
      body: "Halstead deploys solar-powered, LTE-connected, weatherproof cameras with on-board recording and AI motion detection. No grid power, no wired internet, no permanent install. Mount them on temporary poles, fence posts, or trailer corners. Relocate as the project progresses. Active monitoring detects person motion at off-hours and alerts your designated security responder.",
    },
    keyFeatures: [
      {
        title: "Solar-powered, cellular-connected cameras",
        description:
          "Self-contained cameras with integrated solar panels, lithium-ion battery, and LTE-M cellular radio. No external power, no wifi required. Operating range from -20°F to 140°F.",
      },
      {
        title: "AI person detection at off-hours",
        description:
          "AI motion detection distinguishes person from vehicle, animal, or environmental motion. Off-hours alerts (configurable schedule) trigger immediate response while business-hours activity logs without alerts.",
      },
      {
        title: "Mobile, relocatable deployment",
        description:
          "Cameras mount with industrial magnets, U-bolts, or zip ties to temporary poles, fence posts, or trailer corners. Reposition as your project progresses without rewiring or recommissioning.",
      },
      {
        title: "Optional 24/7 active monitoring",
        description:
          "Add active monitoring through a UL-listed central station partner. Off-hours intrusion detected → operator views camera → confirms threat → dispatches police directly. Stops thefts in progress, not just records them.",
      },
      {
        title: "Project-duration billing",
        description:
          "Pay monthly while the project is active. Cancel when the project completes. No long contracts, no termination fees. Designed for the project-based nature of construction.",
      },
      {
        title: "FieldPermit integration for permits",
        description:
          "Halstead is integrated with FieldPermit (a Reyna Holdings sister company) to pre-handle any required municipal permits for temporary surveillance equipment on commercial projects.",
      },
    ],
    pricing: {
      starting: "$500-$1,500 per month per site",
      note: "Construction site pricing varies by site size and active monitoring tier. Most jobsites fall in this range. Equipment rental included.",
    },
    faqs: [
      {
        q: "How does construction site monitoring work?",
        a: "Halstead deploys solar-powered LTE cameras at strategic perimeter points around your active job site. AI motion detection runs continuously, with off-hours person detection triggering immediate alerts. On the active monitoring tier, a central station operator can verify the threat and dispatch police directly.",
      },
      {
        q: "Do I need to provide power or internet?",
        a: "No. Halstead's construction cameras are fully self-contained with solar power and LTE cellular connectivity. We commission them on-site without requiring any utilities.",
      },
      {
        q: "Can I move the cameras as my project progresses?",
        a: "Yes. Cameras are designed to be relocatable as foundation work moves to framing, framing moves to interior, etc. Your project manager can reposition cameras themselves, or schedule a Halstead technician to optimize coverage at major project milestones.",
      },
      {
        q: "What's the contract structure?",
        a: "Construction projects are billed monthly while active. No long-term commitment. Cancel when your project completes. Equipment is a rental, returned at project end.",
      },
    ],
    relatedSolutions: ["business-security", "auto-dealership"],
  },

  "cannabis-dispensary": {
    slug: "cannabis-dispensary",
    name: "Cannabis Dispensary Security",
    shortName: "Cannabis",
    industry: "Licensed cannabis retailers",
    metaTitle: "Cannabis Dispensary Security — State-Compliant Camera Systems",
    metaDescription:
      "Halstead cannabis dispensary security: state regulation-compliant camera coverage, vault monitoring, transport tracking, and 90-day video retention. Built for licensed retailers in TX, NM, AZ, CO.",
    hero: {
      eyebrow: "For Licensed Cannabis Retailers",
      title: "State-compliant security for cannabis operations.",
      subtitle:
        "Halstead builds dispensary security to state regulatory specifications — full camera coverage of point-of-sale, storage, vault, and transport operations with mandated retention periods, redundant recording, and compliance reporting built in.",
    },
    problem: {
      title: "Cannabis security is a regulatory minefield.",
      body: "Every state with legal cannabis has detailed security regulations: minimum camera resolution, mandatory coverage zones, minimum retention periods, off-site backup requirements, vault specifications, transport logging. Get any of it wrong and your license is at risk. Most generic security companies don't understand state-specific compliance.",
    },
    solution: {
      title: "Halstead's cannabis approach.",
      body: "Halstead builds dispensary security to your state's specific regulations from day one. Our team works directly with your compliance officer to verify coverage zones, resolution requirements, retention periods, and backup configurations. Pre-built compliance reports for state inspections. Vault monitoring with vibration and door-position sensors. Transport tracking integration for delivery operations.",
    },
    keyFeatures: [
      {
        title: "State-specific compliance build-out",
        description:
          "Halstead works to your state's regulatory specifications: Texas, New Mexico, Arizona, Colorado, and others. Coverage zones, resolution, retention, redundancy — all built to spec.",
      },
      {
        title: "Vault and storage monitoring",
        description:
          "Vault rooms get door-position sensors, vibration detection, and 24/7 camera coverage. Storage areas get full camera coverage with anomaly detection for after-hours access.",
      },
      {
        title: "Point-of-sale camera coverage",
        description:
          "Mandated POS camera coverage with sufficient resolution to identify currency, products, and customer faces. Coverage of register, customer-facing area, and ID verification stations.",
      },
      {
        title: "Transport vehicle tracking",
        description:
          "For dispensaries with delivery operations, Halstead integrates with vehicle GPS tracking and driver-facing dashcams to maintain chain-of-custody documentation.",
      },
      {
        title: "Minimum 90-day retention",
        description:
          "Most states require 30 to 90 days of recorded footage retention. Halstead's cannabis tier defaults to 90 days with automated archival to off-site backup for redundancy.",
      },
      {
        title: "Pre-built compliance reports",
        description:
          "Generate inspection-ready compliance reports showing camera coverage maps, retention compliance, redundancy verification, and access logs.",
      },
    ],
    pricing: {
      starting: "$300-$800 per month",
      note: "Cannabis dispensary pricing varies by site size and state. Quoted per location after compliance review.",
    },
    faqs: [
      {
        q: "Does Halstead understand cannabis regulations in my state?",
        a: "Halstead currently supports compliance build-out for Texas, New Mexico, Arizona, and Colorado, with additional states added as our service area expands. Our compliance team coordinates with your state's regulatory body and your compliance officer during install.",
      },
      {
        q: "What about retention requirements?",
        a: "Most states with legal cannabis require 30 to 90 days of recorded footage retention. Halstead defaults to 90 days for cannabis tier customers with automated daily archival to redundant off-site backup.",
      },
      {
        q: "Is Halstead compliant with seed-to-sale tracking systems?",
        a: "Halstead doesn't replace seed-to-sale tracking software (Metrc, BioTrack, etc.) but integrates camera coverage with their requirements. Our cameras provide the visual record that complements transactional logs.",
      },
      {
        q: "How is cannabis pricing different?",
        a: "Cannabis dispensaries typically need more cameras, longer retention, and redundant backup — so pricing typically runs $300 to $800 per month plus hardware. Quoted per location after a compliance review with your team.",
      },
    ],
    relatedSolutions: ["business-security", "auto-dealership"],
  },

  "auto-dealership": {
    slug: "auto-dealership",
    name: "Auto Dealership Security",
    shortName: "Auto Dealers",
    industry: "Car dealerships and auto lots",
    metaTitle: "Auto Dealership Security — License Plate Readers, Lot Monitoring",
    metaDescription:
      "Halstead protects auto dealerships with full lot camera coverage, license plate readers, after-hours monitoring, and integration with dealership inventory systems. Built for car dealers and BHPH lots.",
    hero: {
      eyebrow: "For Auto Dealers",
      title: "Lot security that pays for itself.",
      subtitle:
        "Halstead builds auto dealership security around full lot camera coverage, license plate readers at entry and exit points, after-hours monitoring, and integration with dealership management systems. Designed for franchise dealers, independent lots, and Buy-Here-Pay-Here operations.",
    },
    problem: {
      title: "Dealership security is high-stakes.",
      body: "An auto dealership has $1M to $20M in inventory parked outside, often unattended at night. Vehicle theft, catalytic converter theft, vandalism, and showroom break-ins are common. Most dealerships rely on outdated DVR systems, low-quality cameras, and after-hours patrols that aren't always there.",
    },
    solution: {
      title: "Halstead's auto dealer approach.",
      body: "Halstead deploys high-resolution cameras across the entire lot with strategic license plate reader (LPR) cameras at entry and exit points. Vehicle motion at off-hours triggers immediate alerts. License plate logs create a record of every vehicle that entered or exited. Optional 24/7 active monitoring through a UL-listed central station partner provides verified threat response.",
    },
    keyFeatures: [
      {
        title: "Full lot coverage with high-resolution cameras",
        description:
          "8MP and 4K cameras provide enough detail to identify vehicles, vehicle damage, and people across the entire lot. Coverage includes inventory rows, customer parking, employee lot, and showroom interior.",
      },
      {
        title: "License plate reader integration",
        description:
          "LPR cameras at entry and exit points log every plate that enters or leaves the lot. Searchable by plate, time range, or movement direction. Integrates with dealership management systems for test-drive tracking.",
      },
      {
        title: "After-hours active monitoring",
        description:
          "After business hours, motion in inventory areas triggers verified alerts. UL-listed central station operators view the camera, confirm the threat, and dispatch police directly — typically faster than alarm-only response.",
      },
      {
        title: "Showroom and office coverage",
        description:
          "Interior coverage of showroom, sales offices, F&I rooms, and customer waiting areas with audit logging for sensitive financial transactions.",
      },
      {
        title: "Catalytic converter and battery theft detection",
        description:
          "AI motion patterns detect under-vehicle activity that suggests catalytic converter or battery theft attempts. Immediate alerts during off-hours.",
      },
      {
        title: "Integration with DMS and inventory systems",
        description:
          "Halstead's auto dealer tier integrates with major DMS systems (Reynolds, CDK, Dealertrack) for inventory verification, test-drive tracking, and stock loss reconciliation.",
      },
    ],
    pricing: {
      starting: "$400-$1,200 per month",
      note: "Pricing varies by lot size and active monitoring tier. Quoted per location after a walk-through.",
    },
    faqs: [
      {
        q: "How effective are license plate readers?",
        a: "LPR cameras log every plate that enters and exits your lot, creating a searchable record for incident investigation, test-drive verification, and stock loss reconciliation. They also act as a deterrent — visible LPR cameras significantly reduce opportunistic theft.",
      },
      {
        q: "Can Halstead detect catalytic converter theft attempts?",
        a: "Yes. Halstead's AI is trained to detect under-vehicle motion patterns associated with catalytic converter and battery theft. Off-hours under-vehicle activity triggers an immediate alert with footage.",
      },
      {
        q: "Does Halstead work with my DMS?",
        a: "Halstead's auto dealer tier integrates with major DMS systems including Reynolds, CDK, and Dealertrack for inventory verification and test-drive tracking. Custom integrations available for less common systems.",
      },
      {
        q: "What about Buy-Here-Pay-Here (BHPH) operations?",
        a: "Halstead supports BHPH operations with collateral monitoring, repossession verification, and integration with GPS/starter-disable systems for vehicle tracking. We work with BHPH dealers across our service area.",
      },
    ],
    relatedSolutions: ["business-security", "construction-site"],
  },

  "houses-of-worship": {
    slug: "houses-of-worship",
    name: "Houses of Worship Security",
    shortName: "Worship",
    industry: "Churches, mosques, synagogues, temples",
    metaTitle: "Church Security Systems — Houses of Worship Camera & Monitoring",
    metaDescription:
      "Halstead protects churches, mosques, synagogues, and temples with welcoming-but-secure camera systems, parking lot coverage, and optional 24/7 monitoring. Mission-focused security for places of worship.",
    hero: {
      eyebrow: "For Houses of Worship",
      title: "Security that doesn't compromise welcome.",
      subtitle:
        "Halstead protects churches, mosques, synagogues, and temples with thoughtful camera coverage, parking lot monitoring, and optional 24/7 dispatch — designed to keep your community safe while preserving the welcoming atmosphere your mission requires.",
    },
    problem: {
      title: "Houses of worship face unique challenges.",
      body: "Houses of worship are open to the public by mission, which makes them vulnerable. Recent years have seen increased vandalism, theft from collection boxes and offices, and tragically, targeted attacks. Most religious organizations have limited security budgets and resist anything that feels overly fortified or unwelcoming. Off-the-shelf commercial security usually doesn't fit the cultural environment.",
    },
    solution: {
      title: "Halstead's worship approach.",
      body: "Halstead works with religious leadership to design security that's effective without being overbearing. Discrete camera placement with proper sightlines for sanctuaries, lobbies, parking, and education buildings. Optional after-hours monitoring with dispatch protocols designed for religious organizations. Volunteer-friendly mobile app access for ushers and security volunteers. Reduced pricing for tax-exempt organizations.",
    },
    keyFeatures: [
      {
        title: "Discrete camera placement",
        description:
          "Halstead works with your facilities team to place cameras strategically — sanctuaries, lobbies, education wings, parking lots — without making the space feel surveilled. Mounting that integrates with architecture rather than dominates it.",
      },
      {
        title: "Parking lot security",
        description:
          "Most house of worship incidents happen in parking lots: car break-ins during services, vandalism, threats. Halstead provides full parking lot coverage with after-hours alerts.",
      },
      {
        title: "Volunteer-friendly app access",
        description:
          "Ushers, security volunteers, and youth program leaders can be granted role-based access to view permitted cameras during their volunteer shifts. Time-bounded access that automatically expires.",
      },
      {
        title: "Active shooter protocols",
        description:
          "Halstead's professional monitoring tier includes pre-defined active shooter dispatch protocols that route directly to local law enforcement with floor plan and access information for first responders.",
      },
      {
        title: "Reduced pricing for tax-exempt organizations",
        description:
          "Halstead extends pricing discounts to 501(c)(3) tax-exempt religious organizations. Quoted per facility after consultation with leadership.",
      },
      {
        title: "Coordination with denominational security teams",
        description:
          "For denominational organizations (dioceses, synods, federations) with central security teams, Halstead coordinates with denominational leadership for consistent security standards across multiple facilities.",
      },
    ],
    pricing: {
      starting: "$150-$400 per month",
      note: "Houses of worship receive reduced pricing as 501(c)(3) tax-exempt organizations. Quoted per facility.",
    },
    faqs: [
      {
        q: "Does Halstead cover the sanctuary itself?",
        a: "Yes — typically with discrete camera placement at the rear of the sanctuary covering the worship area. Coverage decisions are made in consultation with religious leadership to ensure the cameras don't interfere with worship or pastoral care.",
      },
      {
        q: "What about pastoral care confidentiality?",
        a: "Halstead respects the unique confidentiality requirements of pastoral counseling rooms, confessionals, and meeting rooms. These spaces are typically excluded from camera coverage entirely. We work with your leadership to identify which spaces are appropriate for monitoring.",
      },
      {
        q: "Can security volunteers use the system?",
        a: "Yes. Halstead supports time-bounded role-based access for security volunteers, ushers, and youth program leaders. Volunteers get app access during their shift and access automatically expires when the shift ends.",
      },
      {
        q: "Does Halstead help with active shooter preparation?",
        a: "On the Pro Monitoring tier, Halstead includes pre-defined active shooter dispatch protocols. We work with your leadership and local law enforcement during install to develop a response plan, document floor plans and access points, and configure the system for fastest possible police response if needed.",
      },
    ],
    relatedSolutions: ["business-security", "multifamily"],
  },
};

export const SOLUTIONS_LIST = Object.values(SOLUTIONS);
