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
      { src: '25.webp', caption: '', full: true }
    ],
    designImages: [
      { src: '14.webp', caption: '' },
      { src: '15.webp', caption: '' }
    ],
    available: true
  },
  {
    id: 'strikeco',
    title: 'STRIKECO',
    subtitle: 'Home Tennis Simulator',
    category: 'Sports Tech',
    disciplines: ['industrial'],
    year: '2023',
    thumb: 'Strikco-thumb.webp',
    heroImage: 'strikeco-hero.webp',
    heroFit: 'contain',
    heroBg: '#dddddd',
    film: {
      src: 'strikeco-film.mp4',
      mobileSrc: 'strikeco-film-mobile.mp4',
      poster: 'strikeco-film-poster.webp',
      mobilePoster: 'strikeco-film-poster-mobile.webp'
    },
    description: 'STRIKECO is a home tennis simulator. Players hit a real ball with their own racquet while sensors read every shot and the game plays out on the TV.',
    quote: 'Real tennis in the living room. A training device designed to earn its place at home.',
    fullText: {
      brief: 'Getting better at tennis takes repetition, and repetition needs a court, a partner, and time. Practicing alone usually means a basket of balls, a drill, and then collecting every ball again, so much of the session is spent walking instead of hitting. STRIKECO brings practice home: the player hits a real ball on a flexible arm with their own racquet, while sensors read power, spin, and direction and the session plays out on the TV. The design challenge was to create a sports device that absorbs a full swing day after day, sets up in minutes, and still looks like it belongs in a living room rather than a gym.',
      process: 'The design began with the strike itself: where the ball needs to sit, how it moves after impact, and how the device stays planted under a full swing. Early sketches explored how to hold the ball: a column, an articulated arm, a wall mount, a tripod, and a leaning spine on a wedge base. Two directions were taken into 3D, an articulated arm and a single pedestal column, each checked against a full-size figure to set ball height and swing clearance. The sensor head was then developed with an integrated light bar as a status cue, and taken into physical prototypes: the housing, the light bar, and the head assembled with its flexible arm mechanism.',
      design: 'The form is built from one gesture: an angled spine rising from a low triangular base, leaning away from the hitting zone while the base keeps the weight planted. A gooseneck arm carries the ball out at striking height, and the sensor cradle with its green status light sits where the arm meets the spine. A graduated scale along the spine makes height adjustment visible and repeatable. The finish is matte black throughout, with the tennis ball as the only accent color, so the device reads as calm furniture when idle and as equipment once play begins. Power and HDMI connections are gathered in a single rear panel to keep the front clean.',
      result: 'STRIKECO moved from concept to a commercial product, now open for pre-order with shipping planned for Q4 2026. Setup takes about two minutes: place the device, connect it to the TV, and play. Real tennis practice at home, any time.'
    },
    challengeImages: [
      { src: 'strikeco-challenge-drill.webp', caption: 'Solo practice today: a basket of balls, then collecting them all again. Photo: Kamara Rahmat / Unsplash' },
      { src: 'strikeco-challenge-collect.webp', caption: 'Court time that is not spent hitting. Photo: Nathan B / Unsplash' },
      { src: 'strikeco-home.webp', caption: 'The goal: real practice, in the room you already have.' }
    ],
    processImages: [
      { src: 'strikeco-process-sketches.webp', caption: 'Concept sketches. Column, articulated arm, wall mount, tripod, and a leaning spine.', full: true },
      { src: 'strikeco-process-arm.webp', caption: 'Early direction. An articulated arm presents the ball.', transparent: true },
      { src: 'strikeco-process-arm-side.webp', caption: 'Arm concept at the strike position.', transparent: true },
      { src: 'strikeco-process-arm-scale.webp', caption: 'Arm concept, checked against a player.', transparent: true },
      { src: 'strikeco-process-pedestal-scale.webp', caption: 'Pedestal direction, at the same scale.', transparent: true },
      { src: 'strikeco-process-head.webp', caption: 'Sensor head. The light bar as a status cue.', transparent: true, full: true },
      { src: 'strikeco-process-pedestal.webp', caption: 'Pedestal study. A single column on a weighted base.', transparent: true },
      { src: 'strikeco-process-pedestal-front.webp', caption: 'Front view. A minimal footprint.', transparent: true },
      { src: 'strikeco-process-housing.webp', caption: 'First housing prototype.' },
      { src: 'strikeco-process-lightbar.webp', caption: 'Light bar on the test rig.' },
      { src: 'strikeco-process-assembly.webp', caption: 'Head and flexible arm, assembled.' },
      { src: 'strikeco-process-mechanism.webp', caption: 'The flexible arm mechanism.' }
    ],
    designImages: [
      { src: 'strikeco-studio.webp', caption: 'One angled spine on a low, weighted base.' },
      { src: 'strikeco-detail.webp', caption: 'Ball arm and sensor cradle.' }
    ],
    resultImages: [
      { src: 'strikeco-play.webp', caption: 'A real ball and your own racquet.' },
      { src: 'strikeco-tv.webp', caption: 'Every shot read and played out on the TV.' }
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
  }
];
