import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, PenTool, ArrowUpRight, Monitor, Box, Layers, Sparkles, Focus, LayoutGrid, List, Smartphone, Cpu, ImageIcon, Volume2, VolumeX } from 'lucide-react';

import { PROJECTS, DISCIPLINES } from './data/projects';

/* --- UI COMPONENTS --- */

// Hide broken images instead of swapping in a fallback URL (which loops forever if the fallback also fails).
const hideOnError = (e) => { e.currentTarget.style.display = 'none'; };
const hideFrameOnError = (e) => { e.currentTarget.parentElement.style.display = 'none'; };

// Reserved slot for an image that hasn't been supplied yet (item without src).
const isMobileViewport = () => window.matchMedia('(max-width: 767px)').matches;

const ImagePlaceholder = () => (
    <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
        <ImageIcon size={28} strokeWidth={1.25} className="text-gray-300" />
    </div>
);

// Soft studio backdrop with a perspective court floor, for renders exported with a transparent background.
const CourtBackdrop = () => (
    <svg viewBox="0 0 1920 1200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <g fill="none" stroke="rgba(15, 23, 42, 0.09)" strokeWidth="3" strokeLinecap="round">
            <path d="M240 1130H1680M240 1130L640 820M1680 1130L1280 820M640 820H1280" />
            <path d="M470 1130L742 820M1450 1130L1178 820M620 960H1300M960 960V820M960 1130V1112" />
        </g>
    </svg>
);

const ProcessMedia = ({ item }) => {
    if (!item.src) return <ImagePlaceholder />;
    const img = (
        <img
            className="w-full h-auto object-cover relative"
            alt={item.caption || 'Process View'}
            src={item.src}
            loading="lazy"
            decoding="async"
            onError={hideFrameOnError}
        />
    );
    if (!item.transparent) return img;
    return (
        <div
            className="relative overflow-hidden"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 55%, #fcfcfd 0%, #e6e8ec 100%)' }}
        >
            <CourtBackdrop />
            {img}
        </div>
    );
};

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
                    Product Designer — Tel Aviv
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
                        Product Designer
                    </h2>
                </FadeInSection>

                <FadeInSection delay={200}>
                    <p className="text-lg md:text-2xl xl:text-3xl font-light leading-relaxed text-gray-700 max-w-4xl mb-16">
                        I'm a product designer living in Tel Aviv, working across physical products and digital experiences. Trained as an industrial designer, I take products from concept to production, from the form in your hand to the interface on your screen. I combine sharp attention to detail with a practical mindset to create designs that are both beautiful and built to ship.
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
                                <li className="flex items-center gap-3"><Smartphone size={18} className="flex-shrink-0" /> UI / UX Design</li>
                                <li className="flex items-center gap-3"><Cpu size={18} className="flex-shrink-0" /> Hardware Prototyping</li>
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
                                Full ownership of product at a cybersecurity startup — responsible for all design, engineering planning, manufacturing, and product strategy. Also oversees the overall look and feel of the product at the UI/UX level, ensuring a coherent experience from hardware to interface.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2024 — 2025</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Jenovice</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Head of Design</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Led all design efforts at a cybersecurity startup, shaping the visual identity and product language across industrial design and UI/UX. Responsible for the overall appearance and user-facing experience of the product, from physical form to digital interface.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2023 — 2024</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Jenovice</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Senior Industrial Designer</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Joined a cybersecurity startup as senior industrial designer, taking ownership of product design, manufacturing planning, and production processes. Worked end-to-end from initial concept through final manufacturing, collaborating with engineering to bring precise, functional products to life.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2020 — 2023</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Kaufman R&D</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Industrial Designer</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Managed formal development from concept to production. Oversaw the design field, communicated directly with suppliers, exported parts for production, managed 3D printers.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2019 — 2020</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">P.K Studio</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Industrial Designer</p>
                            <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-lg">
                                Design and develop high-quality products for clients using plastic injection and mold making techniques.
                            </p>
                        </div>
                        <div className="group">
                            <span className="text-sm font-mono text-gray-500 mb-2 block">2018 — 2019</span>
                            <h4 className="text-2xl font-bold group-hover:text-gray-600 transition-colors">Vagman Design House</h4>
                            <p className="text-base text-gray-500 font-medium mt-1">Industrial Designer</p>
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

// 3. WORK INDEX (dashboard)
const FILTERS = [{ id: 'all', label: 'All Work', short: 'All' }, ...DISCIPLINES];
const pad2 = (n) => String(n).padStart(2, '0');
const matchesFilter = (project, filter) => filter === 'all' || project.disciplines.includes(filter);
const disciplineShort = (id) => DISCIPLINES.find(d => d.id === id)?.short ?? id;

const ProjectTile = ({ project, number, onOpen }) => {
    const isAvailable = !!project.available;
    return (
        <article
            className={`group flex flex-col h-full ${isAvailable ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => isAvailable && onOpen(project)}
        >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative rounded-xl border border-gray-200/70">
                <img
                    src={project.thumb}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out ${isAvailable ? 'group-hover:scale-[1.03]' : 'opacity-40 grayscale'}`}
                    loading={number <= 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={hideOnError}
                />
                <span className="absolute top-3 left-3 text-[10px] font-mono text-gray-700 bg-white/90 backdrop-blur px-2 py-1 rounded-md">
                    {pad2(number)}
                </span>
                <div className="absolute top-3 right-3 flex gap-1.5">
                    {project.disciplines.map(d => (
                        <span key={d} className="text-[9px] font-bold uppercase tracking-widest text-gray-700 bg-white/90 backdrop-blur px-2 py-1 rounded-md">
                            {disciplineShort(d)}
                        </span>
                    ))}
                </div>
                {isAvailable ? (
                    <div className="absolute bottom-3 right-3 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight size={16} className="text-white" />
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/90 px-3 py-1.5 rounded-md">
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>
            <div className="pt-4 flex items-baseline justify-between gap-3">
                <h2 className={`text-base md:text-lg font-semibold tracking-tight leading-tight ${isAvailable ? 'text-black' : 'text-gray-400'}`}>
                    {project.title}
                </h2>
                <span className="text-xs font-mono text-gray-400 flex-shrink-0">{project.year}</span>
            </div>
            <p className={`text-[11px] font-bold uppercase tracking-widest mt-1.5 ${isAvailable ? 'text-gray-500' : 'text-gray-300'}`}>
                {project.category}
            </p>
            <p className={`text-sm font-light leading-relaxed line-clamp-2 mt-3 ${isAvailable ? 'text-gray-500' : 'text-gray-300'}`}>
                {project.description}
            </p>
        </article>
    );
};

const ProjectRow = ({ project, number, onOpen }) => {
    const isAvailable = !!project.available;
    return (
        <button
            type="button"
            onClick={() => isAvailable && onOpen(project)}
            className={`group w-full grid grid-cols-[40px_1fr_auto] md:grid-cols-[48px_96px_1.5fr_1fr_1fr_56px_24px] items-center gap-4 py-4 px-2 border-b border-gray-200 text-left transition-colors ${
                isAvailable ? 'hover:bg-white/70 cursor-pointer' : 'cursor-default'
            }`}
        >
            <span className="text-xs font-mono text-gray-400">{pad2(number)}</span>
            <div className="hidden md:block w-[96px] h-[64px] rounded-md overflow-hidden bg-gray-100 border border-gray-200/70">
                <img
                    src={project.thumb}
                    alt=""
                    className={`w-full h-full object-cover ${isAvailable ? '' : 'opacity-40 grayscale'}`}
                    loading="lazy"
                    decoding="async"
                    onError={hideOnError}
                />
            </div>
            <div className="min-w-0">
                <p className={`text-base md:text-lg font-semibold tracking-tight truncate ${isAvailable ? 'text-black' : 'text-gray-400'}`}>
                    {project.title}
                </p>
                <p className="text-xs text-gray-400 truncate md:hidden">{project.category} · {project.year}</p>
                {project.subtitle && <p className="hidden md:block text-xs text-gray-400 truncate">{project.subtitle}</p>}
            </div>
            <span className={`hidden md:block text-xs font-bold uppercase tracking-widest ${isAvailable ? 'text-gray-500' : 'text-gray-300'}`}>
                {project.category}
            </span>
            <div className="hidden md:flex gap-1.5 flex-wrap">
                {project.disciplines.map(d => (
                    <span key={d} className={`text-[9px] font-bold uppercase tracking-widest border px-2 py-1 rounded-md ${isAvailable ? 'text-gray-600 border-gray-300' : 'text-gray-300 border-gray-200'}`}>
                        {disciplineShort(d)}
                    </span>
                ))}
            </div>
            <span className="hidden md:block text-xs font-mono text-gray-400">{project.year}</span>
            <span className="flex justify-end">
                {isAvailable ? (
                    <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                ) : (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Soon</span>
                )}
            </span>
        </button>
    );
};

const ProjectsPage = ({ onNavigate, filter, onFilterChange }) => {
    const [layout, setLayout] = useState('grid');
    const visible = PROJECTS.filter(p => matchesFilter(p, filter));
    const years = PROJECTS.map(p => Number(p.year));
    const caseStudies = PROJECTS.filter(p => p.available).length;
    const openProject = (project) => onNavigate('detail', project);

    return (
        <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-6 md:px-12 lg:px-20 pb-32 relative">
            <div className="max-w-[1600px] mx-auto relative z-10 lg:grid lg:grid-cols-[240px_1fr] lg:gap-14 xl:gap-20">
                {/* Control panel */}
                <aside className="mb-10 lg:mb-0">
                    <div className="lg:sticky lg:top-28">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-5xl laptop:text-6xl font-black tracking-tighter uppercase text-black mb-2">Work</h1>
                            <p className="text-xs md:text-sm text-gray-500 font-mono mb-8 lg:mb-12">
                                INDEX {Math.min(...years)}—{Math.max(...years)}
                            </p>

                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Discipline</p>
                            <nav className="flex lg:flex-col gap-2 overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0 pb-1 lg:pb-0" aria-label="Filter projects">
                                {FILTERS.map(f => {
                                    const count = PROJECTS.filter(p => matchesFilter(p, f.id)).length;
                                    const active = filter === f.id;
                                    return (
                                        <button
                                            key={f.id}
                                            type="button"
                                            onClick={() => onFilterChange(f.id)}
                                            aria-pressed={active}
                                            className={`flex items-center justify-between gap-3 lg:gap-6 px-3 lg:px-4 py-3 rounded-lg border text-left transition-colors duration-200 flex-shrink-0 ${
                                                active
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-white/70 border-gray-200 text-gray-600 hover:border-gray-400 hover:text-black'
                                            }`}
                                        >
                                            <span className="text-[11px] lg:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                                                <span className="lg:hidden">{f.short}</span>
                                                <span className="hidden lg:inline">{f.label}</span>
                                            </span>
                                            <span className={`text-xs font-mono ${active ? 'text-white/60' : 'text-gray-400'}`}>{pad2(count)}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <dl className="hidden lg:grid grid-cols-1 gap-5 mt-12 pt-8 border-t border-gray-200">
                                {[
                                    ['Projects', PROJECTS.length],
                                    ['Case studies', caseStudies],
                                    ['Disciplines', DISCIPLINES.length],
                                ].map(([label, value]) => (
                                    <div key={label} className="flex items-baseline justify-between">
                                        <dt className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</dt>
                                        <dd className="text-2xl font-black tracking-tight text-black">{pad2(value)}</dd>
                                    </div>
                                ))}
                            </dl>
                        </FadeInSection>
                    </div>
                </aside>

                {/* Results */}
                <section>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
                        <p className="text-xs font-mono text-gray-500">
                            SHOWING {pad2(visible.length)} / {pad2(PROJECTS.length)}
                        </p>
                        <div className="flex items-center gap-1 p-1 rounded-lg border border-gray-200 bg-white/70" role="group" aria-label="Layout">
                            {[
                                { id: 'grid', icon: LayoutGrid, label: 'Grid view' },
                                { id: 'list', icon: List, label: 'List view' },
                            ].map(({ id, icon, label }) => {
                                const Icon = icon;
                                return (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => setLayout(id)}
                                    aria-label={label}
                                    aria-pressed={layout === id}
                                    className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                                        layout === id ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
                                    }`}
                                >
                                    <Icon size={15} strokeWidth={1.75} />
                                </button>
                                );
                            })}
                        </div>
                    </div>

                    {layout === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 laptop:gap-x-10">
                            {visible.map((project, index) => (
                                <FadeInSection key={`${filter}-${project.id}`} delay={index * 60}>
                                    <ProjectTile project={project} number={PROJECTS.indexOf(project) + 1} onOpen={openProject} />
                                </FadeInSection>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div className="hidden md:grid grid-cols-[48px_96px_1.5fr_1fr_1fr_56px_24px] gap-4 px-2 pb-3 border-b border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                <span>No.</span><span /><span>Project</span><span>Category</span><span>Discipline</span><span>Year</span><span />
                            </div>
                            {visible.map((project, index) => (
                                <FadeInSection key={`${filter}-${project.id}`} delay={index * 40}>
                                    <ProjectRow project={project} number={PROJECTS.indexOf(project) + 1} onOpen={openProject} />
                                </FadeInSection>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

// Vertical launch film: plays muted on its own (browsers require it); one tap turns the music on.
const LaunchFilm = ({ promo, title }) => {
    const ref = useRef(null);
    const [muted, setMuted] = useState(true);
    const toggle = () => {
        const v = ref.current;
        if (!v) return;
        v.muted = !muted;
        if (muted) { v.currentTime = 0; v.play(); }
        setMuted(!muted);
    };
    return (
        <section className="py-16 md:py-24 bg-[#F3F3F3] relative z-10">
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center">
                <FadeInSection>
                    <div className="text-center mb-10">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-3">Launch Film</span>
                        <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">{promo.caption}</p>
                    </div>
                </FadeInSection>
                <FadeInSection delay={150}>
                    <div className="relative" style={{ width: 'min(100%, calc(min(78vh, 760px) * 9 / 16))', aspectRatio: '9 / 16' }}>
                        <video
                            ref={ref}
                            className="w-full h-full object-cover rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] bg-white"
                            src={promo.src}
                            poster={promo.poster}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={`${title} launch film`}
                        />
                        <button
                            type="button"
                            onClick={toggle}
                            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/70 hover:bg-black/85 text-white text-xs font-bold uppercase tracking-widest pl-3 pr-4 py-2.5 backdrop-blur-md transition-colors"
                            aria-label={muted ? 'Turn sound on' : 'Mute'}
                        >
                            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            {muted ? 'Sound on' : 'Mute'}
                        </button>
                    </div>
                </FadeInSection>
            </div>
        </section>
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
                            <h1 className={`${project.title.length > 7 ? 'text-6xl md:text-7xl xl:text-8xl' : 'text-6xl md:text-8xl xl:text-9xl'} font-black tracking-tighter mb-8 leading-[0.9]`}>
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

                <div
                    className="w-full md:w-1/2 h-[50vh] md:h-auto bg-gray-200 relative overflow-hidden flex items-center justify-center"
                    style={project.heroBg ? { background: project.heroBg } : undefined}
                >
                    <img 
                        src={project.heroImage || project.thumb} 
                        className={`absolute inset-0 w-full h-full ${project.heroFit === 'contain' ? 'object-contain' : 'object-cover'}`} 
                        alt={project.title}
                        style={{objectPosition: 'center center'}}
                        onError={hideOnError}
                    />
                </div>
            </div>

            {/* Film: full-bleed muted loop */}
            {project.film && (
                <section className="relative z-10 bg-black">
                    <video
                        className="w-full block object-cover aspect-[13/15] md:aspect-[2/1]"
                        src={isMobileViewport() && project.film.mobileSrc ? project.film.mobileSrc : project.film.src}
                        poster={isMobileViewport() && project.film.mobilePoster ? project.film.mobilePoster : project.film.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${project.title} film`}
                    />
                </section>
            )}

            {project.promo && <LaunchFilm promo={project.promo} title={project.title} />}

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
                                {project.challengeImages.map((item, index, all) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col ${all.length > 2 && all.length % 2 === 1 && index === all.length - 1 ? 'md:col-span-2' : ''}`}
                                    >
                                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                            <img
                                                className="w-full h-auto object-cover"
                                                alt={item.caption || 'Challenge View'}
                                                src={item.src}
                                                loading="lazy"
                                                decoding="async"
                                                onError={hideFrameOnError}
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
                                    onError={hideFrameOnError}
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
                                    onError={hideFrameOnError}
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
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {project.processImages.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col ${item.full ? 'md:col-span-2 max-w-4xl mx-auto w-full' : ''}`}
                                    >
                                        <div className="bg-gray-50 p-4 md:p-6 rounded-sm overflow-hidden">
                                            <ProcessMedia item={item} />
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
                    ) : (
                        project.images && project.images[1] && (
                            <FadeInSection delay={200}>
                                <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-sm overflow-hidden">
                                    <img 
                                        src={project.images[1]} 
                                        className="w-full h-auto object-cover" 
                                        alt="Process View" 
                                        onError={hideFrameOnError}
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
                                                    onError={hideFrameOnError}
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
                                        onError={hideFrameOnError}
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
                                                onError={hideFrameOnError}
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
                                    onError={hideFrameOnError}
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
                                            <a href="tel:+972547530732" className="hover:text-gray-500 transition-colors">
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

/* --- ROUTING --- */
const DEFAULT_TITLE = 'Gal Zarski — Product Designer';

const routeFromLocation = () => {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const discipline = new URLSearchParams(window.location.search).get('d');
  const filter = DISCIPLINES.some(d => d.id === discipline) ? discipline : 'all';
  if (parts[0] === 'about' || parts[0] === 'contact') return { view: parts[0], project: null, filter };
  if (parts[0] === 'work') {
    const project = PROJECTS.find(p => p.id === parts[1] && p.available);
    return project ? { view: 'detail', project, filter } : { view: 'projects', project: null, filter };
  }
  return { view: 'home', project: null, filter };
};

const pathFor = ({ view, project, filter }) => {
  if (view === 'detail') return `/work/${project.id}`;
  if (view === 'projects') return filter === 'all' ? '/work' : `/work?d=${filter}`;
  if (view === 'home') return '/';
  return `/${view}`;
};

/* --- MAIN APP --- */
export default function App() {
  const [route, setRoute] = useState(routeFromLocation);
  const { view: currentView, project: selectedProject, filter } = route;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [currentView, selectedProject]);

  // Canonicalize unknown or locked URLs, and follow browser back/forward.
  useEffect(() => {
    const path = pathFor(routeFromLocation());
    if (path !== window.location.pathname + window.location.search) window.history.replaceState(null, '', path);
    const onPopState = () => setRoute(routeFromLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = selectedProject && currentView === 'detail' ? `${selectedProject.title} — Gal Zarski` : DEFAULT_TITLE;
  }, [currentView, selectedProject]);

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
    const next = { view, project: view === 'detail' ? project : null, filter };
    const path = pathFor(next);
    if (path !== window.location.pathname + window.location.search) window.history.pushState(null, '', path);
    setRoute(next);
    setIsMenuOpen(false);
  };

  const changeFilter = (nextFilter) => {
    const next = { ...route, filter: nextFilter };
    window.history.replaceState(null, '', pathFor(next));
    setRoute(next);
  };

  const navigateToNextProject = () => {
    if (!selectedProject) return;
    const available = PROJECTS.filter(p => p.available);
    const currentIndex = available.findIndex(p => p.id === selectedProject.id);
    const nextProject = available[(currentIndex + 1) % available.length];
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
        <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center relative">
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
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-12 text-xs font-bold tracking-[0.2em] uppercase">
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
        {currentView === 'projects' && <ProjectsPage onNavigate={navigateTo} filter={filter} onFilterChange={changeFilter} />}
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