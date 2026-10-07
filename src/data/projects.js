export const DISCIPLINES = [
  { id: 'industrial', label: 'Industrial Design', short: 'Industrial' },
  { id: 'digital', label: 'Digital Product', short: 'Digital' },
];

export const PROJECTS = [
  {
    id: 'line8',
    title: 'LINE•8',
    subtitle: 'Hanukkiah',
    category: 'Product Design',
    disciplines: ['industrial'],
    year: '2024',
    thumb: '7.webp',
    heroImage: '6.webp',
    description: 'A minimalist Hanukkiah crafted for precision, simplicity, and longevity.',
    quote: 'A minimalist Hanukkiah crafted for precision, simplicity, and longevity.',
    fullText: {
      brief: 'Create a full, functional Hanukkiah with extreme simplicity: a complete form produced in a single press operation, without complex assembly or unnecessary parts. LINE•8 embraces the beauty of the material in its natural state, taking a familiar, timeless object and elevating it into something precise, premium, and built to last.',
      process: 'The process always starts small. An idea grows through quick, hands-on iterations. First come fast sketches to explore proportion, candle spacing, and the core silhouette. Then the design moves into digital modeling to lock geometry and tolerances. Finally, 3D prints and feasibility tests validate scale, stability, and real-world usability before final production.',
      design: 'LINE•8 is intentionally minimal. Clean surfaces, sharp geometry, and calm proportions let the object speak without decoration. Aluminum was chosen for precision, durability, and a refined feel. The finish is oven-cured powder coating for a clean, resilient surface. Multiple color options are offered while preserving the same iconic form.',
      result: 'A modern take on a classic ritual object. Simple, premium, and satisfying to use. The final presentation continues the same philosophy with a minimal, elegant package that protects the product and feels intentional from the first moment you open it.'
    },
    challengeImage: '13.webp',
    processImages: [
      { src: '2.webp', caption: 'Early sketch studies. Form and proportions.' },
      { src: '9.webp', caption: 'Prototype iterations. Testing usability and scale.' },
      { src: '10.webp', caption: 'Packaging exploration. Minimal, protective, gift-ready.' }
    ],
    designImage: '4.webp',
    resultImage: '8.webp',
    available: true
  },
  {
    id: 'rocking',
    title: 'ROCKING',
    subtitle: 'Smart Stroller Rocker',
    category: 'Connected Product',
    disciplines: ['industrial', 'digital'],
    year: '2026',
    thumb: 'rocking-thumb.webp',
    heroImage: 'rocking-hero.webp',
    description: 'A motorized stroller rocker and its companion app. Pick a calm motion mode on your phone and the stroller keeps the rhythm for you.',
    quote: 'One tap, and the stroller rocks. Hardware and app designed as a single calm experience.',
    fullText: {
      brief: 'Rocking a stroller by hand is repetitive and ties a parent to one spot, often for a long time. ROCKING takes over the motion with a small motorized unit, so the parent gets their hands back and the baby keeps the steady rhythm that helps them fall and stay asleep.',
      process: 'Hardware and software were developed side by side. A NEMA 17 stepper motor driven by an ESP32-C5 was brought up first, tuning ramp-up and step timing until the motion felt smooth rather than mechanical. The device runs its own Wi-Fi network and a WebSocket server, so any phone browser can control it with no router, app store, or pairing. Motion patterns are defined as data, which made preset modes easy to add and leaves room for record-and-replay later.',
      design: 'The app is built around a single decision: choose a mode. Gentle, Classic, Deep sway, and Soothe are large tiles, each with its own color and waveform, readable at a glance in a dark room. Manual controls stay secondary. A Sleep tab logs sessions on a daily timeline, and settings include a sleep timer and a hard safety auto-off that stops the motor no matter what.',
      result: 'A working prototype that connects a physical product and its interface into one experience, designed end to end from motor control to the last screen.'
    },
    challengeImage: 'rocking-screens.webp',
    designImages: [
      { src: 'rocking-sleep.webp', caption: 'Sleep log. Sessions on a daily timeline.' },
      { src: 'rocking-pattern.webp', caption: 'Custom patterns. Sweep and pace as two simple controls.' }
    ],
    available: true
  },
  {
    id: 'maybe',
    title: 'MAYBE?',
    subtitle: 'Baby Name Matching App',
    category: 'Mobile App',
    disciplines: ['digital'],
    year: '2025',
    thumb: 'maybe-thumb.webp',
    heroImage: 'maybe-hero.webp',
    description: 'A Hebrew baby-name app for couples. Each partner swipes privately, and a name only appears when you both liked it.',
    quote: 'Choosing a name together, without anyone having to say no out loud.',
    fullText: {
      brief: 'Choosing a baby name together usually means long lists, vetoes, and one partner\'s favorites quietly winning. Maybe? turns it into a private, playful process: each partner swipes on their own, and only the names you both love become matches.',
      process: 'Designed and built end to end as a live product. React and TypeScript on the front end; Firebase for authentication, real-time sync, and Cloud Functions on the back end. A couple joins a shared room, swipes sync in real time, and a new match sends a push notification to the partner. The name catalogue was curated and tagged by gender, style, and popularity, and filters are shared so both partners draw from the same pool.',
      design: 'A soft pastel visual language for an emotional moment, with full right-to-left Hebrew support. The core interaction is one card at a time with clear like and pass actions. A match is celebrated with confetti and a framed card, then lands in a shared list where both partners can rate their favorites.',
      result: 'A live, installable mobile web app covering the whole product: concept, UX and UI design, real-time backend, and notifications.'
    },
    challengeImage: 'maybe-screens.webp',
    designImages: [
      { src: 'maybe-list.webp', caption: 'Shared matches. Rate and compare favorites.' },
      { src: 'maybe-match.webp', caption: 'The match moment.' }
    ],
    available: true
  },
  {
    id: 'yurbu',
    title: 'YURBU',
    category: 'Consumer Electronics',
    disciplines: ['industrial'],
    year: '2023',
    thumb: '18.webp',
    heroImage: '18.webp',
    description: 'YURBU is an automatic coffee machine concept designed to feel like a trained barista at home, personalized to each user.',
    quote: 'YURBU is an automatic coffee machine concept designed to feel like a trained barista at home, personalized to each user.',
    fullText: {
      brief: 'Great coffee is often slowed down by friction: waiting, repeating an order, and inconsistent results. YURBU tackles this by learning habits and preferences, then using ongoing data gathering to continuously improve performance over time.',
      process: 'YURBU combines product design with a digital experience. Alongside the machine concept, an accompanying UI layer supports customization and repeatability, so personalization feels simple and intuitive rather than overly technical. Visual development moved between clean concept renders and real-world validation, building the project beyond a single image into a complete design story.',
      design: 'A minimal, premium appliance language that fits naturally in a modern kitchen, paired with an experience that remembers the user and removes unnecessary steps while keeping interaction clear and familiar.',
      result: 'A cohesive hardware and UI concept: a coffee machine that does not just make coffee, it gets better at making your coffee.'
    },
    challengeImages: [
      { src: '21.webp', caption: '' },
      { src: '22.webp', caption: '' }
    ],
    processImages: [
      { src: '19.webp', caption: '' },
      { src: '20.webp', caption: '' },
      { src: '23.webp', caption: '' },
      { src: '24.webp', caption: '' },
      { src: '25.webp', caption: '' }
    ],
    designImages: [
      { src: '14.webp', caption: '' },
      { src: '15.webp', caption: '' }
    ],
    available: true
  },
  {
    id: 'hezus',
    title: 'HEZUS',
    category: 'Marine Design',
    disciplines: ['industrial'],
    year: '2023',
    thumb: 'hezus-thumb.webp',
    description: 'HEZUS is a one-person lake vessel concept designed for a calm, stable, and stress-free solo sailing experience.',
    quote: 'HEZUS is a one-person lake vessel concept designed for a calm, stable, and stress-free solo sailing experience.',
    fullText: {
      brief: 'Many small vessels can feel unstable and demanding. HEZUS aims to shift the focus from effort to ease by designing a solo craft centered on tranquility, comfort, and confidence on the water, using rotational technology to reduce typical on-water stress.',
      process: 'The concept was developed through iterative form exploration and proportion studies, followed by surface refinement and visualization. Multiple render iterations helped validate the identity and how the vessel reads from different angles, while color variations ensured the design language stays consistent across finishes.',
      design: 'A sculpted, approachable silhouette that communicates stability and comfort. The visual language is calm and friendly rather than aggressive, supporting the idea of a quiet personal escape.',
      result: 'A distinctive leisure concept designed to help users disconnect from daily noise and enjoy a peaceful solo ride on the water.'
    }
  },
  {
    id: 'testudo',
    title: 'TESTODO',
    category: 'Tech Accessories',
    disciplines: ['industrial'],
    year: '2023',
    thumb: 'testodo-thumb.webp',
    description: 'TESTODO is a minimalist iPhone smart cover concept that adds tracking and audible find-me functionality while keeping the look clean and familiar.',
    quote: 'TESTODO is a minimalist iPhone smart cover concept that adds tracking and audible find-me functionality while keeping the look clean and familiar.',
    fullText: {
      brief: 'Most "smart" accessories look bulky or obviously tech-driven. The goal was to design a cover that blends in like a regular phone case, while adding the capability to be tracked and located by sound, without sacrificing the aesthetic appearance of the device.',
      process: 'The project focused on integrating "invisible" capability into an everyday object. The design was developed around usability and simplicity, ensuring the added features feel natural and do not change how the case is used day to day.',
      design: 'A clean, minimal design language with calm surfaces and a familiar silhouette. The form is intentionally understated so the smart functionality stays in the background and the product still feels like a normal case first.',
      result: 'A simple, effective solution for users who want to upgrade their phone with practical tracking and audible location features, without adding bulk or compromising the iPhone\'s appearance.'
    }
  },
  {
    id: 'greenbrush',
    title: 'GREEN BRUSH',
    category: 'Sustainability',
    disciplines: ['industrial'],
    year: '2023',
    thumb: 'green-brush-thumb.webp',
    description: 'GREEN BRUSH is a compact maintenance capsule concept designed to help keep solar panels performing efficiently through cleaner water and simpler upkeep.',
    quote: 'GREEN BRUSH is a compact maintenance capsule concept designed to help keep solar panels performing efficiently through cleaner water and simpler upkeep.',
    fullText: {
      brief: 'Solar panels can lose performance over time due to impurities and corrosion-related issues. GREEN BRUSH addresses this by introducing a small capsule containing a natural resin, designed to be inserted into the water transportation system. As water passes through the capsule, it becomes distilled and impurities that could cause damage or decrease efficiency are removed.',
      process: 'The concept was developed around real maintenance flow. First, define how the capsule integrates into existing water transport and how a user installs it quickly and correctly. Then refine the form through iterations that balance durability, grip, and clear functional cues. Finally, validate the concept through physical-scale checks and visual development to ensure it reads as a robust, service-friendly product.',
      design: 'A clean, functional cylindrical form with a no-nonsense "tool" feel. The capsule is designed to work within the water system, and it can also connect to an external faucet to support external cleaning of the panels, keeping maintenance accessible and straightforward.',
      result: 'A simple product concept that supports long-term solar panel maintenance and helps keep panels working at their optimal capacity through cleaner water and easier cleaning routines.'
    }
  },
  {
    id: 'strikeco',
    title: 'STRIKECOSENSE',
    category: 'Sports Tech',
    disciplines: ['industrial'],
    year: '2023',
    thumb: 'Strikco-thumb.webp',
    description: 'STRIKECOSENSE is a tennis training device concept designed to help players improve their skills, supported by an app and simulator for a more realistic practice experience.',
    quote: 'STRIKECOSENSE is a tennis training device concept designed to help players improve their skills, supported by an app and simulator for a more realistic practice experience.',
    fullText: {
      brief: 'Training can be repetitive without clear feedback or progression. STRIKECOSENSE was designed to serve both beginners and experienced players by combining a physical training device with a digital layer that makes practice more engaging, measurable, and skill-focused.',
      process: 'The concept was developed as a full ecosystem rather than a standalone object. Form iterations focused on stability, interaction points, and a clear sports-tech identity. In parallel, the app and simulator experience was shaped to support a repeatable training loop that encourages improvement over time.',
      design: 'A compact, approachable product language that communicates where and how to interact. The form is performance-forward but intentionally simple, keeping the user focused on training rather than setup.',
      result: 'A cohesive training concept that combines hardware and software into a single experience, helping users practice more effectively and push their gameplay to the next level.'
    }
  }
];
