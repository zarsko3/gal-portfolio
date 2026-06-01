import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Linkedin, PenTool, Camera, ArrowUpRight, Monitor, Box, Layers, Video, Sparkles, Focus } from 'lucide-react';

/* --- DATA SOURCE --- */
const PROJECTS = [
  {
    id: 'line8',
    title: 'LINE•8',
    subtitle: 'Hanukkiah',
    category: 'Product Design',
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
    isCustom: true
  },
  {
    id: 'yurbu',
    title: 'YURBU',
    category: 'Consumer Electronics',
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
      { src: '19.HEIC', caption: '' },
      { src: '20.HEIC', caption: '' },
      { src: '23.webp', caption: '' },
      { src: '24.webp', caption: '' },
      { src: '25.webp', caption: '' }
    ],
    designImages: [
      { src: '14.webp', caption: '' },
      { src: '15.webp', caption: '' }
    ],
    resultImages: [
      { src: 'placeholder-outcome-1.png', caption: '' },
      { src: 'placeholder-outcome-2.png', caption: '' }
    ],
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520978385391-8226451e506d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'hezus',
    title: 'HEZUS',
    category: 'Marine Design',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=75&w=800&auto=format&fit=crop',
    description: 'HEZUS is a one-person lake vessel concept designed for a calm, stable, and stress-free solo sailing experience.',
    quote: 'HEZUS is a one-person lake vessel concept designed for a calm, stable, and stress-free solo sailing experience.',
    fullText: {
      brief: 'Many small vessels can feel unstable and demanding. HEZUS aims to shift the focus from effort to ease by designing a solo craft centered on tranquility, comfort, and confidence on the water, using rotational technology to reduce typical on-water stress.',
      process: 'The concept was developed through iterative form exploration and proportion studies, followed by surface refinement and visualization. Multiple render iterations helped validate the identity and how the vessel reads from different angles, while color variations ensured the design language stays consistent across finishes.',
      design: 'A sculpted, approachable silhouette that communicates stability and comfort. The visual language is calm and friendly rather than aggressive, supporting the idea of a quiet personal escape.',
      result: 'A distinctive leisure concept designed to help users disconnect from daily noise and enjoy a peaceful solo ride on the water.'
    },
    images: [
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567808291548-79b8c9c9f3e3?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'testudo',
    title: 'TESTODO',
    category: 'Tech Accessories',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=75&w=800&auto=format&fit=crop',
    description: 'TESTODO is a minimalist iPhone smart cover concept that adds tracking and audible find-me functionality while keeping the look clean and familiar.',
    quote: 'TESTODO is a minimalist iPhone smart cover concept that adds tracking and audible find-me functionality while keeping the look clean and familiar.',
    fullText: {
      brief: 'Most "smart" accessories look bulky or obviously tech-driven. The goal was to design a cover that blends in like a regular phone case, while adding the capability to be tracked and located by sound, without sacrificing the aesthetic appearance of the device.',
      process: 'The project focused on integrating "invisible" capability into an everyday object. The design was developed around usability and simplicity, ensuring the added features feel natural and do not change how the case is used day to day.',
      design: 'A clean, minimal design language with calm surfaces and a familiar silhouette. The form is intentionally understated so the smart functionality stays in the background and the product still feels like a normal case first.',
      result: 'A simple, effective solution for users who want to upgrade their phone with practical tracking and audible location features, without adding bulk or compromising the iPhone\'s appearance.'
    },
    images: [
      'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541877944-ac82a091518a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'greenbrush',
    title: 'GREEN BRUSH',
    category: 'Sustainability',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=75&w=800&auto=format&fit=crop',
    description: 'GREEN BRUSH is a compact maintenance capsule concept designed to help keep solar panels performing efficiently through cleaner water and simpler upkeep.',
    quote: 'GREEN BRUSH is a compact maintenance capsule concept designed to help keep solar panels performing efficiently through cleaner water and simpler upkeep.',
    fullText: {
      brief: 'Solar panels can lose performance over time due to impurities and corrosion-related issues. GREEN BRUSH addresses this by introducing a small capsule containing a natural resin, designed to be inserted into the water transportation system. As water passes through the capsule, it becomes distilled and impurities that could cause damage or decrease efficiency are removed.',
      process: 'The concept was developed around real maintenance flow. First, define how the capsule integrates into existing water transport and how a user installs it quickly and correctly. Then refine the form through iterations that balance durability, grip, and clear functional cues. Finally, validate the concept through physical-scale checks and visual development to ensure it reads as a robust, service-friendly product.',
      design: 'A clean, functional cylindrical form with a no-nonsense "tool" feel. The capsule is designed to work within the water system, and it can also connect to an external faucet to support external cleaning of the panels, keeping maintenance accessible and straightforward.',
      result: 'A simple product concept that supports long-term solar panel maintenance and helps keep panels working at their optimal capacity through cleaner water and easier cleaning routines.'
    },
    images: [
      'https://images.unsplash.com/photo-1545208639-654c60920b66?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'strikeco',
    title: 'STRIKECOSENSE',
    category: 'Sports Tech',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=75&w=800&auto=format&fit=crop',
    description: 'STRIKECOSENSE is a tennis training device concept designed to help players improve their skills, supported by an app and simulator for a more realistic practice experience.',
    quote: 'STRIKECOSENSE is a tennis training device concept designed to help players improve their skills, supported by an app and simulator for a more realistic practice experience.',
    fullText: {
      brief: 'Training can be repetitive without clear feedback or progression. STRIKECOSENSE was designed to serve both beginners and experienced players by combining a physical training device with a digital layer that makes practice more engaging, measurable, and skill-focused.',
      process: 'The concept was developed as a full ecosystem rather than a standalone object. Form iterations focused on stability, interaction points, and a clear sports-tech identity. In parallel, the app and simulator experience was shaped to support a repeatable training loop that encourages improvement over time.',
      design: 'A compact, approachable product language that communicates where and how to interact. The form is performance-forward but intentionally simple, keeping the user focused on training rather than setup.',
      result: 'A cohesive training concept that combines hardware and software into a single experience, helping users practice more effectively and push their gameplay to the next level.'
    },
    images: [
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599474924187-334a4ae513ab?q=80&w=2000&auto=format&fit=crop'
    ]
  }
];

/* --- UI COMPONENTS --- */

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.1 });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Ambient Background Component
const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply" 
         style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
         }}>
    </div>
    <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-gray-200/50 to-transparent rounded-full blur-[120px] opacity-60" />
    <div className="absolute bottom-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-gradient-to-tl from-gray-200/50 to-transparent rounded-full blur-[150px] opacity-60" />
  </div>
);


/* --- PAGES --- */

// 1. HOME
const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent relative overflow-hidden px-6 md:px-12 lg:px-20">
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
            <FadeInSection>
                <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-6 text-gray-400">
                    Industrial Designer — Tel Aviv
                </p>
            </FadeInSection>

            <FadeInSection delay={150}>
                <h1
                    className="font-bold tracking-tight text-black mx-auto mb-8 md:mb-12"
                    style={{
                        fontSize: 'clamp(2rem, 4vw + 0.5rem, 5rem)',
                        lineHeight: '1.1',
                    }}
                >
                    Creating designs that meet the needs of{' '}
                    <span className="font-light italic text-gray-500">users</span>
                    {' '}and{' '}
                    <span className="font-light italic text-gray-500">clients</span>
                    {' '}alike.
                </h1>
            </FadeInSection>

            <FadeInSection delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => onNavigate('projects')}
                        className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <span className="text-xs font-bold tracking-widest uppercase">View Work</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => onNavigate('about')}
                        className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black transition-colors py-4 px-4"
                    >
                        About Me
                    </button>
                </div>
            </FadeInSection>
        </div>
    </div>
  );
};

// 2. ABOUT
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto pb-32 relative">
        <div className="flex flex-col lg:flex-row gap-20 2xl:gap-32 mb-32 relative z-10">
            {/* Image Side */}
            <div className="w-full lg:w-1/3 xl:w-1/4">
        <FadeInSection>
                    <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative shadow-lg group">
                        <img
                            src="Gal-bw.webp"
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                            alt="Gal Zarski B&W"
                            decoding="async"
                        />
                        <img
                            src="Gal.webp"
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                            alt="Gal Zarski Color"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </FadeInSection>
            </div>

            {/* Header Content */}
            <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col justify-center">
                <FadeInSection delay={100}>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-[10rem] font-black tracking-tighter mb-6 text-black uppercase leading-none">
                        Gal<br/>Zarski
                    </h1>
                    <h2 className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-gray-500 mb-16">
                        Industrial Designer
                    </h2>
                </FadeInSection>

                <FadeInSection delay={200}>
                    <p className="text-lg md:text-2xl xl:text-3xl font-light leading-relaxed text-gray-700 max-w-4xl mb-16">
                        I'm an industrial designer living in Tel Aviv with a deep passion for making things concept to production. I combine sharp attention to detail with a practical mindset to create designs that are both beautiful and built to ship.
                    </p>
                </FadeInSection>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32 border-t border-gray-300 pt-24 relative z-10">
            <div className="space-y-24">
                <FadeInSection delay={400}>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tight">Education</h3>
                        <div className="space-y-10">
                            <div>
                                <h4 className="text-xl font-bold">Hadassah Academic College</h4>
                                <p className="text-gray-600 text-base mb-1">B.Des, Industrial Design</p>
                                <p className="text-gray-500 text-sm">2014 — 2018</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Aalon High School, Yavne</h4>
                                <p className="text-gray-600 text-base">Major in Arts</p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection delay={500}>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tight">Skills</h3>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-base text-gray-600">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Box size={18} className="flex-shrink-0" /> SolidWorks</li>
                                <li className="flex items-center gap-3"><Monitor size={18} className="flex-shrink-0" /> KeyShot</li>
                                <li className="flex items-center gap-3"><PenTool size={18} className="flex-shrink-0" /> Figma</li>
                                <li className="flex items-center gap-3"><Layers size={18} className="flex-shrink-0" /> Adobe Suite</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Box size={18} className="flex-shrink-0" /> 3D Printing</li>
                                <li className="flex items-center gap-3"><Sparkles size={18} className="flex-shrink-0" /> AI Expert</li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
            </div>

            <div>
                <FadeInSection delay={500}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tight">Work Experience</h3>
                    <div className="space-y-16">
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2026 — Present</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Jenovice</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Head of Product</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Leading product strategy and execution, bridging industrial design with product vision to ship meaningful, market-ready solutions.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2024 — 2025</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Jenovice</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Head of Design</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Led the design team end-to-end, defining the visual language and overseeing product design from concept through production.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2023 — 2024</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Jenovice</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Senior Industrial Designer</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Drove industrial design projects from brief to final form, collaborating closely with engineering and manufacturing teams.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2020 — 2023</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Kaufman R&D</h4>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Managed formal development from concept to production. Oversaw the design field, communicated directly with suppliers, exported parts for production, managed 3D printers.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2019 — 2020</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">P.K Studio</h4>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Design and develop high-quality products for clients using plastic injection and mold making techniques.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2018 — 2019</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Vagman Design House</h4>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Design and develop innovative products that meet client and user needs. Manage projects from concept to production.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    </div>
  );
};

// 3. PROJECTS INDEX
const ProjectsPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-6 md:px-12 lg:px-20 pb-32 relative">
        <div className="max-w-[1400px] laptop:max-w-[1200px] laptop-lg:max-w-[1400px] xl:max-w-[1600px] mx-auto relative z-10">
            <FadeInSection>
                <div className="mb-12 md:mb-16 border-b border-gray-200 pb-6 md:pb-8">
                    <h1 className="text-4xl md:text-5xl laptop:text-6xl font-black tracking-tighter uppercase text-black mb-2">Work</h1>
                    <p className="text-sm md:text-base text-gray-500 font-mono">SELECTED WORKS ({String(PROJECTS.length).padStart(2, '0')})</p>
                </div>
            </FadeInSection>

            {/* 4+2 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 laptop:gap-12">
                {PROJECTS.map((project, index) => {
                    const positionInCycle = index % 6;
                    const shouldSpanTwo = positionInCycle >= 4;

                    return (
                       <FadeInSection key={project.id} delay={index * 60}>
                            <div
                                className={`group cursor-pointer ${shouldSpanTwo ? 'sm:col-span-2' : ''}`}
                                onClick={() => onNavigate('detail', project)}
                            >
                                <div className="flex flex-col h-full">
                                    {/* Image with overlay arrow on hover */}
                                    <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative mb-5 rounded-sm">
                                        <img
                                            src={project.thumb}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                            style={{objectPosition: 'center center'}}
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                            decoding="async"
                                            onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop'}}
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-end p-4">
                                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                                <ArrowUpRight size={16} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="flex items-start justify-between mb-2">
                                        <h2 className="text-base md:text-lg font-semibold tracking-tight text-black leading-tight">
                                            {project.title}
                                        </h2>
                                        <span className="text-xs font-mono text-gray-400 ml-3 mt-0.5 flex-shrink-0">{project.year}</span>
                                    </div>
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-2 py-0.5 rounded-sm mb-3">
                                        {project.category}
                                    </span>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Index number */}
                                    <div className="mt-5 pt-5 border-t border-gray-100">
                                        <span className="text-xs font-mono text-gray-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                       </FadeInSection>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

// 4. UNIFIED PROJECT DETAIL
const ProjectDetail = ({ project, onBack, onNext }) => {
    if (!project) return null;
    
    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-500 relative">
            {/* Split Screen Hero - Responsive Order */}
            <div className="flex flex-col md:flex-row h-auto md:h-[90vh] relative z-10">
                <div className="w-full md:w-1/2 bg-[#F3F3F3] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
                    
                    <FadeInSection>
                        <div className="max-w-xl mt-12 md:mt-0">
                            {project.subtitle && (
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 block">{project.subtitle}</span>
                            )}
                            {/* Responsive Text Size */}
                            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                                {project.title}
                            </h1>
                            <div className="w-16 h-1 bg-black mb-10"></div>
                            {project.quote && (
                                <p className="text-xl md:text-2xl xl:text-3xl font-light text-gray-800 leading-relaxed">
                                    {project.quote}
                                </p>
                            )}
                        </div>
                    </FadeInSection>
                </div>

                <div className="w-full md:w-1/2 h-[50vh] md:h-auto bg-gray-200 relative overflow-hidden flex items-center justify-center">
                    <img 
                        src={project.heroImage || project.thumb} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt={project.title}
                        style={{objectPosition: 'center center'}}
                        onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1513205739345-3269d05634b3?q=80&w=2670&auto=format&fit=crop'}}
                    />
                </div>
            </div>

            {/* The Challenge Section */}
            <section className="py-16 md:py-24 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <FadeInSection>
                        <div className="max-w-prose space-y-6">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">The Challenge</h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {project.fullText?.brief || project.description}
                            </p>
                        </div>
                    </FadeInSection>
                    {project.challengeImages && project.challengeImages.length > 0 ? (
                        <FadeInSection delay={200}>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {project.challengeImages.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                            <img
                                                className="w-full h-auto object-cover"
                                                alt={item.caption || 'Challenge View'}
                                                src={item.src}
                                                loading="lazy"
                                                decoding="async"
                                                onError={(e) => e.target.src='https://via.placeholder.com/800x800'}
                                            />
                                        </div>
                                        {item.caption && (
                                            <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                {item.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    ) : project.challengeImage && (
                        <FadeInSection delay={200}>
                            <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                <img
                                    src={project.challengeImage}
                                    className="w-full h-auto object-cover"
                                    alt="Challenge View"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => e.target.src='https://via.placeholder.com/800x800'}
                                />
                            </div>
                        </FadeInSection>
                    )}
                    {project.images && project.images[0] && !project.challengeImage && !project.challengeImages && (
                        <FadeInSection delay={200}>
                            <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                <img 
                                    src={project.images[0]} 
                                    className="w-full h-auto object-cover" 
                                    alt="Challenge View" 
                                    onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                />
                            </div>
                        </FadeInSection>
                    )}
                </div>
            </section>

            {/* The Process Section */}
            <section className="py-16 md:py-24 bg-[#FAFAFA] relative z-10">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <FadeInSection>
                        <div className="max-w-prose space-y-6">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">The Process</h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {project.fullText?.process || project.description}
                            </p>
                        </div>
                    </FadeInSection>
                    {project.processImages && project.processImages.length > 0 ? (
                        <FadeInSection delay={200}>
                            <div className="mt-8 space-y-6 md:space-y-8">
                                {/* First row: 2 images side by side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    {project.processImages.slice(0, 2).map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <div className="bg-gray-50 p-4 md:p-6 rounded-sm overflow-hidden">
                                                <img
                                                    className="w-full h-auto object-cover"
                                                    alt={item.caption || 'Process View'}
                                                    src={item.src}
                                                    loading="lazy"
                                                    decoding="async"
                                                    onError={(e) => e.target.src='https://via.placeholder.com/800x800'}
                                                />
                                            </div>
                                            {item.caption && (
                                                <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Second row: 2 images side by side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    {project.processImages.slice(2, 4).map((item, index) => (
                                        <div key={index + 2} className="flex flex-col">
                                            <div className="bg-gray-50 p-4 md:p-6 rounded-sm overflow-hidden">
                                                <img
                                                    className="w-full h-auto object-cover"
                                                    alt={item.caption || 'Process View'}
                                                    src={item.src}
                                                    loading="lazy"
                                                    decoding="async"
                                                    onError={(e) => e.target.src='https://via.placeholder.com/800x800'}
                                                />
                                            </div>
                                            {item.caption && (
                                                <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Third row: Last image spans full width */}
                                {project.processImages.length > 4 && (
                                    <div className="flex flex-col">
                                        <div className="bg-gray-50 p-4 md:p-6 rounded-sm overflow-hidden max-w-4xl mx-auto w-full">
                                            <img 
                                                className="w-full h-auto object-cover" 
                                                alt={project.processImages[4].caption || 'Process View'} 
                                                src={project.processImages[4].src}
                                                onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                            />
                                        </div>
                                        {project.processImages[4].caption && (
                                            <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                {project.processImages[4].caption}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </FadeInSection>
                    ) : (
                        project.images && project.images[1] && (
                            <FadeInSection delay={200}>
                                <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                    <img 
                                        src={project.images[1]} 
                                        className="w-full h-auto object-cover" 
                                        alt="Process View" 
                                        onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                    />
                                </div>
                            </FadeInSection>
                        )
                    )}
                </div>
            </section>
            
            {/* Design Section */}
            {project.fullText?.design && (
                <section className="py-16 md:py-24 bg-white relative z-10">
                    <div className="max-w-6xl mx-auto px-6 md:px-10">
                        <FadeInSection>
                            <div className="max-w-prose space-y-6">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Design</h2>
                                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                    {project.fullText.design}
                                </p>
                            </div>
                        </FadeInSection>
                        {project.designImages && project.designImages.length > 0 ? (
                            <FadeInSection delay={200}>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    {project.designImages.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <div className="bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                                <img
                                                    className="w-full h-auto object-cover"
                                                    alt={item.caption || 'Design Detail'}
                                                    src={item.src}
                                                    loading="lazy"
                                                    decoding="async"
                                                    onError={(e) => e.target.src='https://via.placeholder.com/800x800'}
                                                />
                                            </div>
                                            {item.caption && (
                                                <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </FadeInSection>
                        ) : project.designImage && (
                            <FadeInSection delay={200}>
                                <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                    <img 
                                        src={project.designImage} 
                                        className="w-full h-auto object-cover" 
                                        alt="Design Detail" 
                                        onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                    />
                                </div>
                            </FadeInSection>
                        )}
                    </div>
                </section>
            )}

            {/* The Result Section */}
            <section className="py-16 md:py-24 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <FadeInSection>
                        <div className="max-w-prose space-y-6">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">The Result</h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {project.fullText?.result || project.description}
                            </p>
                        </div>
                    </FadeInSection>
                    {project.resultImages && project.resultImages.length > 0 ? (
                        <FadeInSection delay={200}>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {project.resultImages.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                            <img 
                                                className="w-full h-auto object-cover" 
                                                alt={item.caption || 'Final Product'} 
                                                src={item.src}
                                                onError={(e) => e.target.src='https://via.placeholder.com/800x600'} 
                                            />
                                        </div>
                                        {item.caption && (
                                            <p className="text-sm text-gray-600 font-light italic text-center mt-4">
                                                {item.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    ) : (project.resultImage || (project.images && project.images[2])) && (
                        <FadeInSection delay={200}>
                            <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                <img
                                    src={project.resultImage || project.images[2]}
                                    className="w-full h-auto object-cover"
                                    alt="Final Product"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => e.target.src='https://via.placeholder.com/800x600'}
                                />
                            </div>
                        </FadeInSection>
                    )}
                </div>
            </section>
            
            {/* Navigation Buttons at Bottom */}
            <div className="py-16 md:py-24 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    <button 
                        onClick={onBack} 
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors"
                    >
                        <ChevronLeft size={16} /> Back
                    </button>
                    {onNext && (
                        <button 
                            onClick={onNext} 
                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors"
                        >
                            Next Work <ChevronRight size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// 6. CONTACT (REDESIGNED)
const ContactPage = () => {
    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 md:px-12 lg:px-20 pb-32 relative z-10 flex flex-col justify-between">
            <div className="max-w-[1920px] mx-auto w-full">
                <FadeInSection>
                    <h1 className="text-[12vw] font-black tracking-tighter leading-none mb-12 text-black uppercase opacity-90">
                        Let's<br/>Talk
                    </h1>
                </FadeInSection>
    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 border-t-2 border-black pt-12">
                    <div className="space-y-8">
                        <FadeInSection delay={200}>
                            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-lg leading-relaxed">
                                Interested in working together? <br/>
                                Always open for new opportunities and collaborations.
                            </p>
                        </FadeInSection>
                        
                        <FadeInSection delay={300}>
                             <a 
                                href="mailto:Zarsko2@gmail.com" 
                                className="inline-flex items-center gap-4 text-3xl md:text-5xl font-bold tracking-tight hover:text-gray-500 transition-colors"
                            >
                                Email Me
                                <ArrowUpRight size={32} className="opacity-50" />
                            </a>
                        </FadeInSection>
                    </div>
    
                    <div className="space-y-12">
                         <FadeInSection delay={400}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contact Details</h4>
                                    <ul className="space-y-4 text-lg text-gray-800">
                                        <li>
                                            <a href="tel:+9720547530732" className="hover:text-gray-500 transition-colors">
                                                0547-530732
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Socials</h4>
                                    <ul className="space-y-4 text-lg text-gray-800">
                                        <li><a href="https://www.instagram.com/gal.zarski" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                                        <li><a href="https://www.linkedin.com/in/gal-zarski/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                                        <li><a href="https://facebook.com/gal.zarski" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
                                    </ul>
                                </div>
                            </div>
                         </FadeInSection>
                    </div>
                </div>
            </div>
    
            <footer className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-24">
                © {new Date().getFullYear()} Gal Zarski
            </footer>
        </div>
    );
};

/* --- MAIN APP --- */
export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView, selectedProject]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Auto-hide/show navbar on scroll
          if (currentScrollY < 10) {
            // Always show at top
            setNavbarVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide navbar
            setNavbarVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setNavbarVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigateTo = (view, project = null) => {
    setCurrentView(view);
    if (project) setSelectedProject(project);
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    const nextProject = PROJECTS[nextIndex];
    navigateTo('detail', nextProject);
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Background */}
      <AmbientBackground />

      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out min-h-[72px] flex items-center bg-white/95 backdrop-blur-md border-b border-gray-100 text-black ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo / Home button */}
          <button
            onClick={() => navigateTo('home')}
            className={`flex items-center gap-2 transition-colors duration-300 ${
              currentView === 'home'
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`}
            aria-label="Home"
          >
            <Focus size={18} strokeWidth={1.5} />
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Gal Zarski</span>
          </button>

          {/* Centered Navigation */}
          <div className="hidden md:flex space-x-12 text-xs font-bold tracking-[0.2em] uppercase">
            <button
              onClick={() => navigateTo('about')}
              className={`relative pb-1 transition-all duration-300 ${
                currentView === 'about'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:rounded-full'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className={`relative pb-1 transition-all duration-300 ${
                currentView === 'projects' || currentView === 'detail'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:rounded-full'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`relative pb-1 transition-all duration-300 ${
                currentView === 'contact'
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black after:rounded-full'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right side — project name on detail view + mobile menu */}
          <div className="flex items-center gap-4">
            {currentView === 'detail' && selectedProject && (
              <span className="hidden md:block text-xs font-mono text-gray-400 uppercase tracking-widest">
                {selectedProject.title}
              </span>
            )}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-black" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { label: 'Home', view: 'home' },
              { label: 'Work', view: 'projects' },
              { label: 'About', view: 'about' },
              { label: 'Contact', view: 'contact' },
            ].map(({ label, view }) => (
              <button
                key={view}
                onClick={() => navigateTo(view)}
                className={`text-left text-5xl font-black tracking-tighter uppercase transition-colors duration-200 ${
                  currentView === view || (view === 'projects' && currentView === 'detail')
                    ? 'text-black'
                    : 'text-gray-300 hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/gal.zarski" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/gal-zarski/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      )}

      {/* Main Content Router */}
      <main
        key={currentView === 'detail' ? `detail-${selectedProject?.id}` : currentView}
        className="relative z-10 animate-in fade-in duration-300"
      >
        {currentView === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'detail' && selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onBack={() => navigateTo('projects')}
            onNext={navigateToNextProject}
          />
        )}
      </main>
    </div>
  );
}