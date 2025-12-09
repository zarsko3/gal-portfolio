import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Instagram, Mail, ChevronLeft, ChevronRight, MapPin, Phone, Linkedin, PenTool, Camera, Gamepad2, Plane, Music, Globe, ArrowUpRight, Monitor, Box, Layers, Video, Sparkles, Focus } from 'lucide-react';

/* --- DATA SOURCE --- */
const PROJECTS = [
  {
    id: 'line8',
    title: 'Line 8',
    category: 'Product Design',
    year: '2024',
    thumb: '7.png', 
    description: 'A minimalist aluminum menorah exploring machining and repetition.',
    isCustom: true
  },
  {
    id: 'yurbu',
    title: 'Yurbu',
    category: 'Consumer Electronics',
    year: '2023',
    thumb: 'image_a2612f.png',
    description: 'An automatic coffee machine aiming to replace a trained barista with AI adaptation.',
    fullText: {
      brief: 'Create a self-adapting coffee machine that personalizes the process for each customer by learning their preferences.',
      process: 'We focused on the interaction between the user and the machine, hiding the complexity of AI behind a simple, intuitive interface.',
      result: 'A sleek, automated countertop device that bridges the gap between professional barista quality and home convenience.'
    },
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520978385391-8226451e506d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'hezus',
    title: 'Hezus',
    category: 'Marine Design',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2000&auto=format&fit=crop',
    description: 'A marine vessel designed for a peaceful sailing experience using rotational technology.',
    fullText: {
      brief: 'Design a single-person marine vessel that provides a meditative, stable sailing experience on lakes.',
      process: 'Inspired by organic forms and water flow, the shape minimizes resistance while maximizing stability through rotational technology.',
      result: 'A unique sailing vessel for those desiring a peaceful escape from the hustle and bustle of everyday life.'
    },
    images: [
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567808291548-79b8c9c9f3e3?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'testudo',
    title: 'Testudo Tech',
    category: 'Tech Accessories',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1592434134753-a70baf7979d5?q=80&w=2000&auto=format&fit=crop',
    description: 'Smart iPhone cover transforming the device into a trackable and audible tool.',
    fullText: {
      brief: 'Transform the iPhone case into an active, trackable device without adding significant bulk or compromising aesthetics.',
      process: 'Integration of slim tracking modules within a protective shell, using impact-resistant materials.',
      result: 'A simple yet effective solution for users who want to upgrade their phone capabilities seamlessly.'
    },
    images: [
      'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541877944-ac82a091518a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'greenbrush',
    title: 'Green Brush',
    category: 'Sustainability',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop',
    description: 'Solar panel maintenance capsule aimed at preventing rust and corrosion.',
    fullText: {
      brief: 'Develop a maintenance solution for solar panels to prevent efficiency loss due to rust and mineral buildup.',
      process: 'We designed a flow-through capsule containing natural resin that fits into standard water systems.',
      result: 'A maintenance-free solution that ensures solar panels operate at optimal capacity for years.'
    },
    images: [
      'https://images.unsplash.com/photo-1545208639-654c60920b66?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'strikeco',
    title: 'Strikeco',
    category: 'Sports Tech',
    year: '2023',
    thumb: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop',
    description: 'Training device designed to help tennis players improve their game style.',
    fullText: {
      brief: 'Create a training aid for tennis players that provides real-time feedback on form and style.',
      process: 'Combining motion sensors with a physical training arm to simulate realistic resistance and angles.',
      result: 'The perfect tool for players looking to take their game to the next level through interactive feedback.'
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
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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

// Mobile Blocker Component
const MobileBlocker = () => {
    return (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center p-8 text-center">
            <FadeInSection>
                <div className="mb-8 opacity-20 animate-pulse flex items-center justify-center">
                    <Monitor size={64} className="mx-auto" />
                </div>
                <h1 className="text-4xl font-black tracking-tighter mb-6 uppercase">
                    Desktop<br/>Only
                </h1>
                <div className="w-12 h-1 bg-black mx-auto mb-8"></div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-12">
                    Sorry, this portfolio is not available on mobile.<br/>
                    Please view on iPad or Desktop.
                </p>
                
                <div className="flex gap-8 justify-center items-center">
                    <a href="https://www.instagram.com/gal.zarski" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-colors flex flex-col items-center gap-2">
                        <Instagram size={24} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/gal-zarski/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-colors flex flex-col items-center gap-2">
                        <Linkedin size={24} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                    </a>
                </div>
            </FadeInSection>
        </div>
    );
};

/* --- PAGES --- */

// 1. HOME
const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent relative overflow-hidden pt-24 sm:pt-28 md:pt-32 laptop:pt-36 laptop-lg:pt-40 xl:pt-44 2xl:pt-48">
        <div className="relative z-10 text-center px-6 laptop:px-8 laptop-lg:px-12 xl:px-16 max-w-[1400px] laptop:max-w-[1200px] laptop-lg:max-w-[1400px] xl:max-w-[1600px] mx-auto w-full">
            <FadeInSection>
                <h2 className="text-sm md:text-base laptop:text-lg laptop-lg:text-xl font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 laptop:mb-10 laptop-lg:mb-12 text-gray-500">
                    Hi, I'm Gal Zarski — an industrial designer.
                </h2>
            </FadeInSection>
            
            <FadeInSection delay={200}>
                {/* Fluid typography with clamp() for smooth scaling across laptop sizes */}
                <h1 
                    className="font-bold tracking-tight text-black drop-shadow-sm mx-auto"
                    style={{
                        fontSize: 'clamp(2.25rem, 3.5vw + 0.5rem, 5.5rem)',
                        lineHeight: '1.15',
                        marginBottom: 'clamp(2.5rem, 4vw + 0.5rem, 5rem)',
                        maxWidth: 'clamp(18rem, 80vw, 52rem)',
                    }}
                >
                    Creating innovative designs that meet the needs of <span className="font-light italic text-gray-600">users</span> and <span className="font-light italic text-gray-600">clients</span> alike.
                </h1>
            </FadeInSection>
            
            <FadeInSection delay={400}>
                <button 
                    onClick={() => onNavigate('projects')}
                    className="group flex items-center gap-4 mx-auto px-8 laptop:px-10 py-4 laptop:py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                    <span className="text-xs md:text-sm laptop:text-sm font-bold tracking-widest uppercase">Explore Work</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
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
                            src="Gal b&w.jpg" 
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                            alt="Gal Zarski B&W"
                        />
                        <img 
                            src="Gal.jpg" 
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                            alt="Gal Zarski Color"
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
                                <li className="flex items-center gap-3"><Camera size={18} className="flex-shrink-0" /> Photoshop</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><Box size={18} className="flex-shrink-0" /> 3D Printing</li>
                                <li className="flex items-center gap-3"><Layers size={18} className="flex-shrink-0" /> InDesign</li>
                                <li className="flex items-center gap-3"><Video size={18} className="flex-shrink-0" /> Premiere Pro</li>
                                <li className="flex items-center gap-3"><Sparkles size={18} className="flex-shrink-0" /> AI Tools</li>
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
    <div className="min-h-screen bg-transparent pt-32 px-6 md:px-12 lg:px-20 pb-32 relative">
        <div className="max-w-[1400px] laptop:max-w-[1200px] laptop-lg:max-w-[1400px] xl:max-w-[1600px] mx-auto relative z-10">
            <FadeInSection>
                <div className="mb-12 md:mb-16 border-b border-gray-200 pb-6 md:pb-8">
                    <h1 className="text-4xl md:text-5xl laptop:text-6xl font-black tracking-tighter uppercase text-black mb-2">Work</h1>
                    <p className="text-sm md:text-base text-gray-500 font-mono">SELECTED WORKS ({String(PROJECTS.length).padStart(2, '0')})</p>
                </div>
            </FadeInSection>

            {/* 4+2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 laptop:gap-12">
                {PROJECTS.map((project, index) => {
                    // Determine if this item should span 2 columns (items 5-6, 11-12, etc. in each cycle of 6)
                    const positionInCycle = index % 6;
                    const shouldSpanTwo = positionInCycle >= 4; // Items at positions 4 and 5 (5th and 6th items) span 2 columns
                    
                    return (
                       <FadeInSection key={project.id} delay={index * 50}>
                            <div 
                                className={`group cursor-pointer ${
                                    shouldSpanTwo ? 'md:col-span-2' : ''
                                }`}
                                onClick={() => onNavigate('detail', project)}
                            >
                                {/* Card */}
                                <div className="flex flex-col h-full">
                                    {/* Image */}
                                    <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative mb-6 rounded-sm">
                                        <img 
                                            src={project.thumb} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transition-[filter,opacity] duration-300 ease-out blur-0 md:blur-[2px] md:group-hover:blur-0 group-hover:opacity-90 focus:blur-0 active:blur-0"
                                            style={{objectPosition: 'center center'}}
                                            onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop'}}
                                        />
                                    </div>

                                    {/* Minimal Text */}
                                    <div className="space-y-3 flex-1">
                                        <h2 className="text-lg md:text-xl font-light tracking-tight text-black leading-tight">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Project Index Number */}
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <span className="text-xs font-mono text-gray-400">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                       </FadeInSection>
                    );
                })}
            </div>

            {/* Ensure group-hover blur works with proper CSS specificity */}
            <style>{`
                @media (min-width: 768px) {
                    .group:hover img {
                        filter: blur(0px) !important;
                    }
                    .group img {
                        transition: filter 300ms ease-out, opacity 300ms ease-out;
                    }
                }
            `}</style>
        </div>
    </div>
  );
};

// 4. UNIFIED PROJECT DETAIL
const ProjectDetail = ({ project, onBack }) => {
    if (!project) return null;
    
    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-500 relative">
            {/* Split Screen Hero - Responsive Order */}
            <div className="flex flex-col md:flex-row h-auto md:h-[90vh] relative z-10">
                <div className="w-full md:w-1/2 bg-[#F3F3F3] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
                    <button onClick={onBack} className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
                        <ChevronLeft size={16} /> Back
                     </button>
                    
                    <FadeInSection>
                        <div className="max-w-xl mt-12 md:mt-0">
                            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 block">Selected Project</span>
                            {/* Responsive Text Size */}
                            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                                {project.title.toUpperCase()}
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
                        src={project.thumb} 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt={project.title}
                        style={{objectPosition: 'center center'}}
                        onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1513205739345-3269d05634b3?q=80&w=2670&auto=format&fit=crop'}}
                    />
                </div>
            </div>

            <section className="py-32 md:py-48 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-[1600px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                            <FadeInSection>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8">The Challenge</h2>
                                <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                                    {project.fullText?.brief || project.description}
                                </p>
                            </FadeInSection>
                        </div>
                        <div className="relative">
                            <FadeInSection delay={200}>
                                <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm aspect-square flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={project.images[0]} 
                                        className="w-full h-full object-cover" 
                                        alt="Detail View" 
                                        onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                    />
                    </div>
                            </FadeInSection>
                    </div>
                    </div>
                </div>
            </section>

            <section className="py-32 md:py-48 bg-[#FAFAFA] relative z-10">
                <div className="container mx-auto px-6 max-w-[1600px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="order-2 md:order-1">
                            <FadeInSection delay={200}>
                                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm aspect-square flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={project.images[1]} 
                                        className="w-full h-full object-cover" 
                                        alt="Process View" 
                                        onError={(e) => e.target.src='https://via.placeholder.com/800x800'} 
                                    />
                </div>
                    </FadeInSection>
                </div>
                        <div className="order-1 md:order-2">
                <FadeInSection>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8">The Process</h2>
                                <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                                    {project.fullText?.process}
                                </p>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full h-[80vh] relative z-10">
                <img 
                    src={project.thumb} 
                    className="w-full h-full object-cover" 
                    alt="Atmosphere" 
                    onError={(e) => e.target.src='https://via.placeholder.com/1600x900'} 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <FadeInSection>
                        <h2 className="text-white text-5xl md:text-9xl font-bold tracking-tight mix-blend-overlay opacity-90">DESIGN</h2>
                    </FadeInSection>
                </div>
            </section>

            <section className="py-32 md:py-48 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-[1600px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        <div className="flex flex-col justify-center">
                            <FadeInSection>
                                <h3 className="text-3xl font-bold mb-4">The Result</h3>
                                <p className="text-xl text-gray-600 font-light leading-relaxed">{project.fullText?.result}</p>
                            </FadeInSection>
                        </div>
                             <FadeInSection delay={200}>
                            <img 
                                src={project.images[2]} 
                                className="w-full h-auto shadow-xl mb-10" 
                                alt="Final Product" 
                                onError={(e) => e.target.src='https://via.placeholder.com/800x600'} 
                            />
                             </FadeInSection>
                     </div>
                </div>
            </section>
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
                                        <li>0547-530732</li>
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
                © 2024 Gal Zarski
            </footer>
        </div>
    );
};

/* --- MAIN APP --- */
export default function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView, selectedProject]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show navbar when scrolled past threshold
          setScrolled(currentScrollY > 10);
          
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
    
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const navigateTo = (view, project = null) => {
    setCurrentView(view);
    if (project) setSelectedProject(project);
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isMobile) {
      return <MobileBlocker />;
  }

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Background */}
      <AmbientBackground />

      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out min-h-[80px] flex items-center bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 text-black ${
          navbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex justify-center items-center w-full relative">
          {/* Home/Focus Icon - Top Left */}
          <button
            onClick={() => navigateTo('home')}
            className={`absolute left-6 md:left-12 lg:left-20 z-50 transition-colors duration-300 flex items-center ${
              currentView === 'home' 
                ? 'text-black' 
                : 'text-gray-600 hover:text-black'
            }`}
            aria-label="Go to home"
          >
            <Focus size={18} className="md:w-5 md:h-5" strokeWidth={1.5} />
          </button>

          {/* Centered Navigation */}
          <div className="hidden md:flex space-x-16 text-sm md:text-base xl:text-lg font-bold tracking-[0.2em] uppercase">
            <button 
              onClick={() => navigateTo('about')} 
              className={`relative transition-all duration-300 ${
                currentView === 'about' 
                  ? 'text-black after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-black' 
                  : 'text-gray-600 hover:text-black hover:opacity-80'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => navigateTo('projects')} 
              className={`relative transition-all duration-300 ${
                currentView === 'projects' 
                  ? 'text-black after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-black' 
                  : 'text-gray-600 hover:text-black hover:opacity-80'
              }`}
            >
              Work
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`relative transition-all duration-300 ${
                currentView === 'contact' 
                  ? 'text-black after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-black' 
                  : 'text-gray-600 hover:text-black hover:opacity-80'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Positioned absolutely on the right */}
          <button 
            className="md:hidden absolute right-6 z-50 text-black" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-10 text-4xl font-light text-black animate-in fade-in zoom-in duration-300">
          <button 
            onClick={() => navigateTo('home')}
            className={`transition-all duration-300 ${
              currentView === 'home' 
                ? 'text-black font-bold border-b-2 border-black pb-2' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('projects')}
            className={`transition-all duration-300 ${
              currentView === 'projects' 
                ? 'text-black font-bold border-b-2 border-black pb-2' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Work
          </button>
          <button 
            onClick={() => navigateTo('about')}
            className={`transition-all duration-300 ${
              currentView === 'about' 
                ? 'text-black font-bold border-b-2 border-black pb-2' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className={`transition-all duration-300 ${
              currentView === 'contact' 
                ? 'text-black font-bold border-b-2 border-black pb-2' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Contact
          </button>
        </div>
      )}

      {/* Main Content Router */}
      <main className="relative z-10">
        {currentView === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        {currentView === 'contact' && <ContactPage />}
        
        {currentView === 'detail' && selectedProject && (
             <ProjectDetail project={selectedProject} onBack={() => navigateTo('projects')} />
        )}
      </main>
    </div>
  );
}