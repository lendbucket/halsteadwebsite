/**
 * Halstead individual feature pages.
 *
 * Each feature gets a deep-dive page targeting specific search intent like
 * "what is two-camera verification" or "AI motion detection security camera".
 * Schema: HowTo or Article.
 */

export type Feature = {
  slug: string;
  name: string;
  category: "smart-filtering" | "automation" | "response" | "financial";
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  whatItIs: string;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  whyItMatters: string;
  technicalDetails?: string;
  comparisonToCompetitors?: string;
  faqs: Array<{ q: string; a: string }>;
  availableOn: string[];
  relatedFeatures: string[];
};

export const FEATURES: Record<string, Feature> = {
  "two-camera-verification": {
    slug: "two-camera-verification",
    name: "Two-Camera Verification",
    category: "smart-filtering",
    metaTitle: "Two-Camera Verification — How Halstead Cuts False Alarms 70%",
    metaDescription:
      "Halstead's two-camera verification requires corroboration from a second camera or sensor before triggering an alarm. Cuts false alarms by an estimated 70%. Learn how it works.",
    hero: {
      eyebrow: "Smart Filtering",
      title: "Two-Camera Verification",
      subtitle:
        "Most security alarms trigger on a single sensor. Halstead requires corroboration from a second camera or sensor before escalating to an alarm. Cuts false alarms by an estimated 70%.",
    },
    whatItIs:
      "Two-camera verification is a security industry concept where an alarm event must be confirmed by a second independent sensor before being treated as a real alarm. It's been used in commercial security for decades but rarely makes it into residential security systems. Halstead implements two-camera verification across all tiers as a default behavior.",
    howItWorks: [
      {
        step: 1,
        title: "First sensor detects motion",
        description:
          "Sensor A — typically a camera with motion detection — picks up movement in its field of view. The system marks this as a 'first signal' but does not yet trigger an alarm.",
      },
      {
        step: 2,
        title: "System looks for corroboration",
        description:
          "Within a configurable time window (typically 30-60 seconds), the system checks whether sensor B — a different camera covering the same area, a door/window contact, or a glass break sensor — also detects activity consistent with a real intrusion.",
      },
      {
        step: 3,
        title: "Second sensor confirms",
        description:
          "If sensor B confirms, the system promotes the event to a real alarm: notifications fire, the alarm sounds, and on the Pro Monitoring tier, central station dispatch is triggered.",
      },
      {
        step: 4,
        title: "If no corroboration, single signal logs but doesn't alarm",
        description:
          "If sensor B does not confirm within the time window, the original first signal still gets logged in your timeline (so you can review it), but no alarm is triggered. This is what kills 70% of false alarms — single-sensor noise like wind blowing leaves, animals crossing, or shadows from passing cars never escalate.",
      },
    ],
    whyItMatters:
      "False alarms are the single biggest reason customers cancel residential security service. Industry data suggests that 94-98% of all residential alarm activations are false alarms — caused by wind, animals, shadows, pets, or mis-placed motion sensors. False alarms also cost real money: many cities now charge $50-$500 per false alarm dispatch fee, and after a few false alarms, police prioritize your alarms lower in their dispatch queue. By requiring two-sensor corroboration, Halstead dramatically reduces the false alarm rate without reducing detection of real intrusion events. The result: you actually trust the alerts when they come, and on the Pro Monitoring tier, dispatch happens faster because you're not crying wolf.",
    technicalDetails:
      "Two-camera verification requires careful sensor placement to work effectively. During Halstead installation, your local technician maps your property and configures sensor pairs that have overlapping or adjacent coverage zones. For a typical single-family home, this means front-door camera + doorbell, backyard camera + back-door contact sensor, garage camera + interior-from-garage door sensor, and similar pairings throughout. The system's logic engine handles edge cases like pet motion, time-of-day adjustments, and seasonal variations.",
    comparisonToCompetitors:
      "Most consumer security systems (Ring, SimpliSafe, Nest) use single-sensor alerting, which is why their users often disable motion alerts entirely after experiencing alert fatigue. ADT and other professional services do offer verification protocols on certain tiers but typically require the central station operator to manually call before dispatching. Halstead's automated two-camera verification happens before any human is involved, making the entire alert pipeline cleaner.",
    faqs: [
      {
        q: "Does two-camera verification mean I miss real intrusions?",
        a: "No. The verification window is short (configurable from 30 to 60 seconds), and any real intrusion will activate multiple sensors as the intruder moves through the property. The pattern of an actual break-in (front door triggered, then motion in foyer, then motion in living room) is exactly what verification is designed to catch — quickly and reliably.",
      },
      {
        q: "What if I only have one camera covering an area?",
        a: "Two-camera verification falls back to other sensors in the area. A glass break sensor, door contact, or window sensor can serve as the second confirming signal. During installation, your Halstead technician identifies coverage gaps and recommends sensor placements to maintain verification across your whole property.",
      },
      {
        q: "Does this require special hardware?",
        a: "No. Two-camera verification is software logic that runs on Halstead's standard camera and sensor platform. As long as you have at least two sensors with overlapping or adjacent coverage zones, you have verification.",
      },
      {
        q: "Can I disable it if I want all alerts?",
        a: "Yes. Verification is on by default but can be configured per zone. Some users disable it for specific high-priority areas (jewelry safe, gun safe, garage with valuable equipment) where any motion warrants immediate attention. Most users leave it on for most of their property.",
      },
    ],
    availableOn: ["Basic", "Premium", "Pro Monitoring"],
    relatedFeatures: ["ai-motion-classification", "smart-escalation"],
  },

  "ai-motion-classification": {
    slug: "ai-motion-classification",
    name: "AI Motion Classification",
    category: "smart-filtering",
    metaTitle: "AI Motion Detection — Person, Vehicle, Package, Animal Recognition",
    metaDescription:
      "Halstead's AI motion classification distinguishes person, vehicle, package, and animal motion. Subscribe only to the categories that matter to you. Cuts notification noise dramatically.",
    hero: {
      eyebrow: "Smart Filtering",
      title: "AI Motion Classification",
      subtitle:
        "Person, vehicle, package, animal, or other. Halstead subscribes you only to the categories you care about. Person at 3 a.m.? Notify. Squirrel at 3 a.m.? Skip.",
    },
    whatItIs:
      "AI motion classification is a real-time computer vision system that identifies what kind of object triggered the motion — distinguishing humans from cars from packages from animals from environmental motion (wind, shadows, lights). Halstead applies this AI to every motion event before deciding whether to notify you, so you get fewer but more relevant alerts.",
    howItWorks: [
      {
        step: 1,
        title: "Motion detected",
        description:
          "A camera detects motion in its field of view. The video frame is processed locally on the Halstead Hub for low latency.",
      },
      {
        step: 2,
        title: "AI classifies the object",
        description:
          "A computer vision model identifies what's in the frame: person, vehicle, package, animal, or other. The classification typically completes in under 200 milliseconds.",
      },
      {
        step: 3,
        title: "System checks your subscription preferences",
        description:
          "Each motion category has its own notification preference per camera, per time of day. You can subscribe to person alerts only, or person + package, or all categories — whatever fits your needs.",
      },
      {
        step: 4,
        title: "Notification fires (or doesn't)",
        description:
          "If the classified object matches your subscription, you get a notification with a snippet of video and the classification label. If it doesn't match, the event is logged in your timeline (searchable later) but no notification interrupts your day.",
      },
    ],
    whyItMatters:
      "Without AI classification, motion detection becomes useless because you get notifications for every car passing, every shadow, every animal. Most users disable motion alerts within weeks. With AI classification, your alerts become trustworthy — you only get notified for events you actually care about, which means you actually pay attention when alerts come through.",
    technicalDetails:
      "Halstead uses an on-device computer vision model running on the Halstead Hub for the fastest possible classification (typically 100-200ms). Cloud-based fallback handles edge cases. The model is trained on millions of labeled images from residential security contexts and continues to improve through ongoing model updates. Classifications include: person (with rough size estimation), vehicle (car/truck/motorcycle), package (placed and removed events), animals (dogs, cats, deer, raccoons, squirrels, etc.), and other (unclassified motion).",
    comparisonToCompetitors:
      "Most consumer security platforms offer some level of object detection (Ring's 'Smart Alerts' feature, Nest's 'Familiar Faces') but typically require their highest subscription tier and don't differentiate as many categories. Halstead's AI is included on the Premium tier and above as a default rather than a paid add-on.",
    faqs: [
      {
        q: "How accurate is the AI classification?",
        a: "Person and vehicle classification typically achieves 95%+ accuracy in normal lighting. Package detection (placement vs removal) is more nuanced — typically 85-92% accurate depending on lighting and camera angle. Animal classification varies by species. Halstead's model is updated regularly, so accuracy improves over time.",
      },
      {
        q: "Does this work in the dark?",
        a: "Yes. Halstead's cameras have IR night vision that produces a clear black-and-white image at night, and the AI model is trained on both color and IR night vision images. Detection accuracy in low light is slightly lower than daytime but still strong for the categories that matter most.",
      },
      {
        q: "Can the AI recognize my specific family members?",
        a: "Yes — through the Family Check-Ins feature. Pre-register household members at install with consent, and the AI can distinguish family members from strangers. This enables features like 'Sarah is home, 3:47pm' notifications without triggering alarms.",
      },
      {
        q: "Is the AI processing happening in the cloud or on my device?",
        a: "Both. Initial classification runs on-device for the fastest response (under 200ms). For edge cases or unusual scenes, the system falls back to cloud-based processing for higher accuracy. Either way, your video is encrypted in transit and at rest.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["two-camera-verification", "family-check-ins"],
  },

  "vacation-mode": {
    slug: "vacation-mode",
    name: "Vacation Mode",
    category: "automation",
    metaTitle: "Vacation Mode — Automated Home Security While You're Away",
    metaDescription:
      "Halstead's vacation mode increases sensitivity, sets longer cloud retention, sends daily digests, and alerts your trusted neighbors — all from one toggle. Built for the way families actually travel.",
    hero: {
      eyebrow: "Automation",
      title: "Vacation Mode",
      subtitle:
        "One toggle. Increases sensitivity, sets longer cloud retention, sends daily digests, alerts your trusted neighbor list. Returns to normal when you tap it off.",
    },
    whatItIs:
      "Vacation mode is a single toggle that reconfigures multiple security settings simultaneously to fit how households operate when nobody's home for an extended period. Instead of manually adjusting sensitivity, retention, alert routing, and notifications individually, you tap one button and everything changes at once.",
    howItWorks: [
      {
        step: 1,
        title: "Toggle vacation mode in the app",
        description:
          "Open the Halstead app, tap 'Vacation Mode' on the dashboard. Set your start and end dates (or leave open-ended). The system immediately reconfigures based on your saved preferences.",
      },
      {
        step: 2,
        title: "Sensitivity increases automatically",
        description:
          "Motion sensitivity tightens across all cameras. Two-camera verification time windows shorten. AI motion classification subscriptions expand to include all categories (since any motion is more suspicious when you're not home).",
      },
      {
        step: 3,
        title: "Cloud retention extends",
        description:
          "Video retention extends to capture more history during your trip. Useful if an incident occurs early in your trip but isn't noticed until later.",
      },
      {
        step: 4,
        title: "Daily digest emails kick in",
        description:
          "Instead of getting a barrage of individual notifications, you receive a single daily digest email summarizing all activity at your home — visits, motion events, package deliveries, weather alerts. Less notification noise, more context.",
      },
      {
        step: 5,
        title: "Trusted neighbor list activates",
        description:
          "If a high-priority alarm fires while you're away, your trusted neighbor list (configured during setup) gets notified in addition to you. Useful when you're in a different time zone or unable to respond quickly.",
      },
      {
        step: 6,
        title: "Returns to normal when toggled off",
        description:
          "When you return home, tap 'Disable Vacation Mode' and all settings revert to your normal configuration. No need to manually undo six different things.",
      },
    ],
    whyItMatters:
      "Most security systems force you to manually adjust dozens of settings before you leave on a trip and then remember to undo them when you return. Most people don't bother, which means their security stays in everyday-mode while they're away — the opposite of what they want. Halstead's vacation mode handles the reconfiguration automatically with one tap, which means people actually use it.",
    faqs: [
      {
        q: "Can I schedule vacation mode for future dates?",
        a: "Yes. Set start and end dates when you toggle vacation mode and the system will activate and deactivate automatically. Useful for planned trips where you might forget to toggle on the day you leave.",
      },
      {
        q: "What's the trusted neighbor list?",
        a: "During setup, you can designate trusted neighbors or family members who get notified when vacation mode is active and a high-priority alarm fires. They receive the same alert you do, with a link to view the live camera and the option to call you, the police, or simply check on the property.",
      },
      {
        q: "Will my pet trigger alarms in vacation mode?",
        a: "No. Halstead's AI motion classification distinguishes pets from people, and the classification preferences carry over into vacation mode. Pets walking around will be logged but won't trigger alerts.",
      },
      {
        q: "Does vacation mode pause my regular routines?",
        a: "Visitor passes for cleaners and contractors continue working normally — they're scheduled separately. If you have routine deliveries or pet sitters, you can configure them to operate even during vacation mode.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["family-check-ins", "visitor-pass", "halstead-watch"],
  },

  "visitor-pass": {
    slug: "visitor-pass",
    name: "Visitor Pass",
    category: "automation",
    metaTitle: "Visitor Pass — Time-Boxed Access for Cleaners and Contractors",
    metaDescription:
      "Halstead's visitor pass system creates time-boxed access windows for cleaners, contractors, dog walkers, and visitors. Records activity but doesn't blast you with alerts during their pre-defined window.",
    hero: {
      eyebrow: "Automation",
      title: "Visitor Pass",
      subtitle:
        "Generate a visitor pass for your weekly cleaner, dog walker, or in-laws. Records video for your archive but doesn't blast you with alerts during their pre-defined window.",
    },
    whatItIs:
      "A visitor pass is a time-boxed authorization that tells your Halstead system 'someone authorized is going to be at the property between these times — record everything but don't alarm me about it.' It solves the everyday problem of knowing the cleaner is coming and not wanting your phone to blow up with motion alerts every time they move from one room to another.",
    howItWorks: [
      {
        step: 1,
        title: "Create a visitor pass",
        description:
          "In the Halstead app, tap 'New Visitor Pass'. Enter the visitor's name, the day (or recurring schedule), and the time window (e.g., Tuesday 10am-12pm). Save.",
      },
      {
        step: 2,
        title: "System suppresses alerts during the window",
        description:
          "During the pass window, motion in covered areas continues to record to your timeline, but no notifications fire. The visitor name and time window are logged in your activity feed.",
      },
      {
        step: 3,
        title: "Outside the window, normal alerts resume",
        description:
          "Activity outside the pass window triggers normal alerts. If your cleaner shows up an hour early, you'll get an alert (and can choose to extend the pass or investigate).",
      },
      {
        step: 4,
        title: "Recurring passes for repeat visitors",
        description:
          "Set up recurring visitor passes for weekly cleaners, biweekly dog walkers, monthly maintenance — they automatically activate and deactivate without you having to remember to toggle them.",
      },
    ],
    whyItMatters:
      "Without visitor passes, you face a bad tradeoff: either disable alerts entirely while expected visitors are at your home (and miss real events), or let the alerts blow up your phone every time they move (and get conditioned to ignore your security alerts). Visitor passes solve this with surgical precision — alerts off for known activity, alerts on for unknown activity.",
    faqs: [
      {
        q: "Does the visitor see anything different?",
        a: "No. Visitor passes are entirely on Halstead's backend — they don't change anything visible to the visitor or require them to use any app or code.",
      },
      {
        q: "Can I see what happened during a visitor pass window?",
        a: "Yes. All activity during a visitor pass window is recorded normally to your video timeline — the only thing suppressed is push notifications. Review footage anytime you want.",
      },
      {
        q: "Can I extend a visitor pass if my cleaner runs long?",
        a: "Yes. From the activity feed, tap the active visitor pass and choose 'Extend by 30 minutes' or 'Extend by 1 hour'. The pass continues without interruption.",
      },
      {
        q: "What if someone else shows up during a visitor pass?",
        a: "Halstead's AI distinguishes people from each other when Family Check-Ins is configured with reference photos. If an unrecognized person appears during a visitor pass window, you can configure the system to alert anyway. Otherwise, all motion during the window logs without alerts.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["family-check-ins", "vacation-mode"],
  },

  "family-check-ins": {
    slug: "family-check-ins",
    name: "Family Check-Ins",
    category: "automation",
    metaTitle: "Family Check-Ins — Smart Notifications When Family Arrives Home",
    metaDescription:
      "Halstead's family check-ins recognize household members and send 'Sarah is home' notifications without triggering alarms. Built for households with kids, teens, or shift workers.",
    hero: {
      eyebrow: "Automation",
      title: "Family Check-Ins",
      subtitle:
        "Pre-register household members at install. When your kids come home from school, Halstead recognizes them and sends a 'Sarah is home, 3:47pm' notification — without triggering a scary alarm.",
    },
    whatItIs:
      "Family check-ins use Halstead's AI to recognize pre-registered household members and send positive arrival notifications instead of alarm-style intrusion alerts. The feature is designed for households with kids who come home from school, teens with after-school schedules, or family members on shift work.",
    howItWorks: [
      {
        step: 1,
        title: "Pre-register family members",
        description:
          "During or after installation, add household members to your account with reference photos. Halstead's AI uses the photos to learn each person's appearance for recognition. Reference photos are processed once and discarded — only the trained model parameters are stored.",
      },
      {
        step: 2,
        title: "Family member arrives at home",
        description:
          "The doorbell or entry camera detects motion. AI motion classification identifies a person. Family recognition kicks in to identify which family member is arriving.",
      },
      {
        step: 3,
        title: "Positive notification fires",
        description:
          "Instead of a generic 'Person detected at front door' alarm-style notification, you get a positive 'Sarah is home, 3:47pm' message with a snapshot. No alarm sound, no escalation.",
      },
      {
        step: 4,
        title: "Unknown people still trigger alerts",
        description:
          "If the AI doesn't recognize the person, normal motion alerts continue. You get notified about strangers, delivery drivers, and unfamiliar visitors as expected.",
      },
    ],
    whyItMatters:
      "Most security systems treat every arrival the same way: a stranger and your own daughter both get the 'PERSON DETECTED' alarm-style alert. That's annoying and conditions you to ignore your security alerts. Family check-ins distinguish family from non-family at the AI level so your alerts mean what they should mean: family arrivals are positive notifications, strangers are alarm-style alerts.",
    faqs: [
      {
        q: "What about privacy for my kids?",
        a: "Family member reference photos are used to train the recognition model and then discarded. Only model parameters (effectively a mathematical fingerprint) are retained. The video itself follows your normal Halstead retention settings — typically 7, 30, or 60 days depending on your tier.",
      },
      {
        q: "How accurate is the recognition?",
        a: "For registered household members in normal lighting, recognition typically achieves 95%+ accuracy. Lower accuracy in low light, with sunglasses, or unusual angles. The system errs on the side of treating ambiguous cases as 'person' rather than 'recognized family member', so you get an alert rather than missing a real intruder.",
      },
      {
        q: "Can I add temporary recognition for visitors?",
        a: "Yes — for visitors expected to come and go for an extended period (a college kid home for the summer, a long-term houseguest), you can add them to the family list and remove them later. For shorter-term visitors, use Visitor Passes instead.",
      },
      {
        q: "Does family check-in work with Halstead Watch?",
        a: "Yes. Halstead Watch (the optional neighbor network feature) uses the same AI infrastructure but never shares family member identity with neighbors — only blurred motion events.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["ai-motion-classification", "vacation-mode", "halstead-watch"],
  },

  "storm-mode": {
    slug: "storm-mode",
    name: "Storm Mode",
    category: "automation",
    metaTitle: "Storm Mode — Automatic Weather-Based Alert Suppression",
    metaDescription:
      "Halstead's storm mode automatically reduces motion sensitivity during severe weather alerts from the National Weather Service. No more 50 false alerts during a thunderstorm or hurricane.",
    hero: {
      eyebrow: "Automation",
      title: "Storm Mode",
      subtitle:
        "Severe weather alert from the National Weather Service automatically calms motion sensitivity. No more 50 false alerts during a thunderstorm.",
    },
    whatItIs:
      "Storm mode is an automated feature that pulls real-time severe weather alerts from the National Weather Service for your location and adjusts your camera motion sensitivity to compensate for environmental motion (wind, rain, lightning, debris). It activates and deactivates automatically based on weather conditions.",
    howItWorks: [
      {
        step: 1,
        title: "NWS issues severe weather alert",
        description:
          "The National Weather Service issues a thunderstorm, tornado, hurricane, or other severe weather watch/warning for your area.",
      },
      {
        step: 2,
        title: "Halstead pulls the alert",
        description:
          "Halstead's system polls the NWS API for active alerts at your registered location. When a relevant alert is active, storm mode automatically activates.",
      },
      {
        step: 3,
        title: "Sensitivity adjusts",
        description:
          "Motion sensitivity reduces, AI motion classification deprioritizes environmental categories (debris, weather), and notification thresholds increase. The system continues recording everything but stops sending you alerts about wind-blown branches.",
      },
      {
        step: 4,
        title: "Person and vehicle detection still works",
        description:
          "AI motion classification continues to identify person and vehicle motion, which still triggers alerts as normal. The only thing that's suppressed is environmental motion that would otherwise be flagged.",
      },
      {
        step: 5,
        title: "Alert expires, normal mode resumes",
        description:
          "When the NWS alert expires or is canceled, storm mode automatically deactivates and your normal sensitivity returns. No manual reset required.",
      },
    ],
    whyItMatters:
      "During a severe thunderstorm, hurricane, or tornado event, traditional motion-detection security can fire dozens or hundreds of alerts as wind moves leaves, rain hits cameras, and debris flies through the field of view. After the first dozen alerts, users learn to ignore their security entirely — which means a real intrusion happening during the storm goes unnoticed. Storm mode prevents this alert fatigue without losing detection of real intrusions.",
    faqs: [
      {
        q: "Will I miss real intrusions during storms?",
        a: "No. Person and vehicle detection continues to function normally during storm mode — only environmental motion is suppressed. If a real intrusion happens during a storm, you'll still get the alert.",
      },
      {
        q: "What weather conditions trigger storm mode?",
        a: "Halstead activates storm mode for: severe thunderstorm watches and warnings, tornado watches and warnings, hurricane watches and warnings, high wind warnings, and tropical storm warnings. Lower-severity alerts (heat advisories, frost warnings) don't activate storm mode.",
      },
      {
        q: "Can I manually activate storm mode?",
        a: "Yes. From the app you can manually enable storm mode if you have local weather conditions that haven't yet triggered a formal NWS alert. Useful in coastal areas during developing weather situations.",
      },
      {
        q: "What about hurricane evacuations?",
        a: "When you evacuate, you can combine storm mode with vacation mode for full coverage. Storm mode suppresses environmental motion alerts. Vacation mode increases sensitivity for actual person/vehicle detection. Together, they give you minimal noise during the storm and quick alerts if there's looting after the storm passes.",
      },
    ],
    availableOn: ["Basic", "Premium", "Pro Monitoring"],
    relatedFeatures: ["vacation-mode", "ai-motion-classification"],
  },

  "smart-escalation": {
    slug: "smart-escalation",
    name: "Smart Escalation",
    category: "response",
    metaTitle: "Smart Escalation — Automatic Alert Chain to Police Dispatch",
    metaDescription:
      "Halstead's smart escalation chain: push notification → automated phone call → emergency contact → professional dispatch. Each step happens only if the prior step doesn't get a response.",
    hero: {
      eyebrow: "Response",
      title: "Smart Escalation",
      subtitle:
        "Motion detected. Push notification sent. No response in 90 seconds? Halstead calls you. No answer? Calls your emergency contact. Pro Monitoring tier? Dispatches authorities.",
    },
    whatItIs:
      "Smart escalation is the automated alert chain that connects an alarm event to the right responder — you, your emergency contact, or professional dispatch — depending on your response time. Instead of relying on a single notification that you might miss, smart escalation tries every channel in sequence until someone responds.",
    howItWorks: [
      {
        step: 1,
        title: "Verified alarm event occurs",
        description:
          "Two-camera verification confirms a real intrusion event. The smart escalation chain begins.",
      },
      {
        step: 2,
        title: "Push notification fires",
        description:
          "You receive a high-priority push notification with an alarm sound, even if your phone is on silent or do-not-disturb. The notification includes a snapshot and a button to view the live camera or acknowledge the alert.",
      },
      {
        step: 3,
        title: "If no response in 90 seconds, system calls you",
        description:
          "If you don't acknowledge the alert within 90 seconds, Halstead's system places an automated phone call to your registered number. The call announces the alarm and gives you options to acknowledge, escalate to police, or deny.",
      },
      {
        step: 4,
        title: "If no answer, calls emergency contact",
        description:
          "If you don't answer the phone call within three rings, the system calls your designated emergency contact (typically a spouse, parent, or trusted neighbor) with the same prompt.",
      },
      {
        step: 5,
        title: "Pro Monitoring tier: dispatches authorities",
        description:
          "On the Pro Monitoring tier, if neither you nor your emergency contact responds, the system escalates to Halstead's UL-listed central station partner. A trained operator views the live camera feed, confirms the threat, and dispatches local police directly with floor plan information.",
      },
    ],
    whyItMatters:
      "A push notification is great when you're looking at your phone, but useless if you're sleeping, in a meeting, driving, or on a plane. Most home security 'alerts' fail in those exact situations — when a real intrusion is most likely and you're most likely to miss the notification. Smart escalation solves this by trying every channel in sequence until someone responds, with optional handoff to professional dispatch as the final fallback.",
    faqs: [
      {
        q: "Can I customize the escalation timing?",
        a: "Yes. You can configure the wait time at each step (default 90 seconds for push, 3 rings for phone), the order of contacts, and which contact methods are tried.",
      },
      {
        q: "What if the alert is a false alarm?",
        a: "At any step in the chain, you can acknowledge the alert as a false alarm and the chain stops immediately. No further escalation, no police dispatch.",
      },
      {
        q: "Does Pro Monitoring dispatch happen automatically?",
        a: "Pro Monitoring's central station operator views the live camera feed before dispatching, so dispatch happens only when the operator can confirm a real threat. If the operator sees nothing alarming, they typically call you to confirm before any dispatch decision.",
      },
      {
        q: "How fast is the typical police response with Pro Monitoring?",
        a: "Police response times vary by location and current call volume, but Halstead's verified-by-camera dispatch typically results in faster response than alarm-only systems because police know the threat is real, not a typical false alarm.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["two-camera-verification", "cellular-backup"],
  },

  "cellular-backup": {
    slug: "cellular-backup",
    name: "Cellular Backup",
    category: "response",
    metaTitle: "Cellular Backup Hub — Stay Online During Internet & Power Outages",
    metaDescription:
      "Halstead's cellular backup hub keeps your security online during internet and power outages. LTE-M radio, 24-hour battery backup, included with Pro Monitoring tier.",
    hero: {
      eyebrow: "Response",
      title: "Cellular Backup",
      subtitle:
        "Internet down? Power glitched? Pro Monitoring tier includes a cellular backup hub that keeps your system online when nothing else is.",
    },
    whatItIs:
      "Cellular backup is a secondary internet connection through an LTE-M cellular modem built into the Halstead Hub. If your home's wifi internet drops or your power goes out, the hub stays connected through cellular and continues processing alarms, sending notifications, and (on Pro Monitoring) communicating with the central station.",
    howItWorks: [
      {
        step: 1,
        title: "Hub uses wifi by default",
        description:
          "Under normal conditions, the Halstead Hub connects to your home wifi for camera communication, cloud upload, and platform connectivity.",
      },
      {
        step: 2,
        title: "Wifi failure detected",
        description:
          "If the hub loses wifi connectivity (router crash, ISP outage, severed line), it detects the failure within seconds and automatically fails over to cellular.",
      },
      {
        step: 3,
        title: "Cellular maintains alarm path",
        description:
          "Through the LTE-M modem, the hub continues to communicate alarms to Halstead's platform and (on Pro Monitoring) to the central station partner. Notifications still fire. Smart escalation still works.",
      },
      {
        step: 4,
        title: "24-hour battery backup",
        description:
          "If your power also goes out, the hub's lithium-ion battery sustains the system for approximately 24 hours, depending on activity level. Cameras with their own battery backup continue recording and the hub continues sending alarms via cellular.",
      },
      {
        step: 5,
        title: "Auto-recovery when wifi/power return",
        description:
          "When your wifi or power restores, the hub automatically switches back to wifi and resumes normal cloud upload of any video that was queued during the outage.",
      },
    ],
    whyItMatters:
      "The most common time for a residential break-in is during or after a storm or power outage — when traditional security systems are offline and homeowners are distracted. Cellular backup ensures your security never goes dark, even when everything else does.",
    faqs: [
      {
        q: "What carriers does the cellular backup use?",
        a: "Halstead's cellular hubs use LTE-M (Cat-M1) on multiple major carriers' networks for maximum coverage. The hub auto-selects the strongest available signal at your location.",
      },
      {
        q: "Does cellular backup increase my monthly cost?",
        a: "Cellular backup is included with the Pro Monitoring tier ($75/month). It's available as an add-on to the Premium tier for $10/month additional.",
      },
      {
        q: "Will I get full video upload during a wifi outage?",
        a: "During a wifi outage, the cellular connection prioritizes alarm signaling over video upload to conserve cellular bandwidth. Footage continues recording locally to the hub. When wifi restores, queued footage uploads to the cloud automatically.",
      },
      {
        q: "What about the 24-hour battery — what if power is out longer?",
        a: "After 24 hours on battery, the hub will send a low-battery alert and then enter a power-conservation mode that maintains alarm signaling but stops video processing. For most residential power outages this is more than sufficient — most outages resolve within 12-24 hours.",
      },
    ],
    availableOn: ["Pro Monitoring", "Premium add-on"],
    relatedFeatures: ["smart-escalation", "two-camera-verification"],
  },

  "insurance-discount": {
    slug: "insurance-discount",
    name: "Insurance Discount Auto-Submission",
    category: "financial",
    metaTitle: "Insurance Discount Auto-Submission — Save 5-15% on Home Insurance",
    metaDescription:
      "Halstead automatically generates and submits your monitoring certificate to your home insurance carrier annually. Most carriers offer 5-15% discounts on monitored homes.",
    hero: {
      eyebrow: "Financial",
      title: "Insurance Discount Auto-Submission",
      subtitle:
        "Halstead generates the certificate of monitoring and auto-files with your home insurance carrier annually. Most carriers offer 5-15% discounts on monitored homes — Halstead does the paperwork so you actually get the discount.",
    },
    whatItIs:
      "Most homeowners insurance policies include a discount for professionally monitored security systems — typically 5% to 15% of the annual premium. The discount requires you to submit a 'certificate of monitoring' (sometimes called an 'alarm certificate') from your security provider to your carrier annually. Most homeowners either don't know about the discount or never get around to submitting the paperwork. Halstead handles it automatically.",
    howItWorks: [
      {
        step: 1,
        title: "Setup at install",
        description:
          "During or after installation, you provide your homeowners insurance carrier name and policy number. Halstead's system identifies the carrier's specific certificate format and required information.",
      },
      {
        step: 2,
        title: "Certificate generated automatically",
        description:
          "Halstead generates an annual certificate of monitoring with your address, policy number, monitoring tier, monitoring contract dates, and central station UL-listing details. The certificate is signed by Halstead's compliance officer.",
      },
      {
        step: 3,
        title: "Submitted to your carrier directly",
        description:
          "Halstead transmits the certificate to your carrier through the appropriate channel — direct API, secure email, or mail depending on the carrier. You receive a confirmation when the submission is complete.",
      },
      {
        step: 4,
        title: "Annual renewal",
        description:
          "Each year on the anniversary of your install, Halstead automatically generates and submits a renewed certificate. You don't need to remember or do anything.",
      },
    ],
    whyItMatters:
      "Insurance discounts compound over time. A 10% discount on a $2,400 annual premium saves $240 per year, $2,400 over 10 years, $4,800 over 20 years. Most homeowners never claim this discount because the paperwork is annoying. Halstead takes the paperwork out of your hands so you actually save the money you should be saving.",
    faqs: [
      {
        q: "Which insurance carriers does Halstead work with?",
        a: "Halstead supports automatic submission to all major US homeowners insurance carriers including State Farm, Allstate, USAA, Liberty Mutual, Farmers, Travelers, Nationwide, Geico, Progressive, and others. For smaller regional carriers, we generate the certificate and provide it to you for manual submission if needed.",
      },
      {
        q: "How much can I save?",
        a: "Discounts vary by carrier and policy, but typically range from 5% to 15% of the annual premium. The discount applies for 'monitored' security systems with central station dispatch, which means the Pro Monitoring tier ($75/month) qualifies for the highest discounts. Premium tier customers may qualify for partial discounts depending on carrier.",
      },
      {
        q: "Will my insurance company actually honor it?",
        a: "Yes — the discount is a standard feature of homeowners insurance policies and the certificate is the standard proof. Most carriers process it automatically when received. Occasionally a carrier will require additional documentation, in which case Halstead provides it on your behalf.",
      },
      {
        q: "What if I have multiple homes?",
        a: "Halstead handles certificate generation and submission per property. Each Halstead-monitored home gets its own certificate sent to its respective insurance policy.",
      },
    ],
    availableOn: ["Pro Monitoring", "Premium"],
    relatedFeatures: ["smart-escalation"],
  },

  "halstead-watch": {
    slug: "halstead-watch",
    name: "Halstead Watch",
    category: "automation",
    metaTitle: "Halstead Watch — Opt-In Neighbor Network Without the Toxicity",
    metaDescription:
      "Halstead Watch is an opt-in community alert network for Halstead customers in the same neighborhood. Share blurred motion events without the toxicity of Citizen or Nextdoor.",
    hero: {
      eyebrow: "Automation",
      title: "Halstead Watch",
      subtitle:
        "Share blurred motion events with neighbors who are also Halstead customers. A community watch network without the toxicity of Citizen or Nextdoor — just neighbors helping neighbors stay aware.",
    },
    whatItIs:
      "Halstead Watch is an opt-in feature that creates a private neighbor network among Halstead customers in the same neighborhood. When suspicious activity occurs at one customer's property, blurred motion events can be shared with other Halstead customers nearby — alerting the whole street that something is happening without exposing identifying details.",
    howItWorks: [
      {
        step: 1,
        title: "Opt in during setup",
        description:
          "During or after installation, you choose whether to participate in Halstead Watch. Participation is opt-in only and can be turned off at any time.",
      },
      {
        step: 2,
        title: "Suspicious event detected",
        description:
          "Your camera detects motion classified as suspicious (person at unusual hours, vehicle lingering, multiple cameras triggered in sequence). The event is processed by your normal smart escalation chain.",
      },
      {
        step: 3,
        title: "Blurred summary shared with neighbors",
        description:
          "If you've opted in to Halstead Watch, a blurred snippet (faces blurred, license plates blurred, identifying details obscured) is shared with other opted-in Halstead customers within a configurable radius (typically 1/4 mile to 1/2 mile).",
      },
      {
        step: 4,
        title: "Neighbors get awareness, not panic",
        description:
          "Receiving neighbors see a non-alarming notification: 'Halstead Watch: suspicious activity reported in your neighborhood.' They can choose to view the blurred footage if they want context. No commenting. No social media-style toxicity.",
      },
      {
        step: 5,
        title: "Pattern detection across the neighborhood",
        description:
          "If multiple Halstead Watch reports cluster geographically (same suspicious vehicle reported by three properties on a street), Halstead's system recognizes the pattern and increases alert priority for everyone in the area.",
      },
    ],
    whyItMatters:
      "Existing neighborhood awareness apps (Citizen, Nextdoor, Ring's Neighbors) have become toxic — full of racial profiling, gossip, fear-mongering, and unverified claims. They make neighborhoods feel less safe rather than more. Halstead Watch is designed to provide the awareness benefit (knowing about suspicious activity nearby) without the social toxicity (no comments, no profiles, no community drama). Just blurred footage of verified suspicious events from one neighbor's camera shared privately with other Halstead customers.",
    faqs: [
      {
        q: "What does 'blurred' mean exactly?",
        a: "Halstead Watch processes shared footage to obscure identifying details: faces are pixelated, license plates are blurred, distinctive clothing is obscured. The footage shows enough to communicate 'something happened' without exposing anyone's identity. The original unblurred footage stays in your private timeline.",
      },
      {
        q: "Can I see who shared what?",
        a: "No. Halstead Watch is anonymous between neighbors. You'll see 'A Halstead customer in your neighborhood reported suspicious activity' — never a specific person, address, or property. This is intentional, to prevent retaliation and protect privacy.",
      },
      {
        q: "Can I opt out?",
        a: "Yes, at any time. Toggle Halstead Watch off in your account settings. You stop receiving and stop sharing immediately.",
      },
      {
        q: "Does law enforcement get access?",
        a: "Halstead Watch is private to opted-in customers. Law enforcement access requires a valid legal request (warrant, subpoena) per Halstead's privacy policy. Halstead does not proactively share Halstead Watch data with police.",
      },
    ],
    availableOn: ["Premium", "Pro Monitoring"],
    relatedFeatures: ["family-check-ins", "vacation-mode"],
  },
};

export const FEATURES_LIST = Object.values(FEATURES);
