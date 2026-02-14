import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import ThreeBackground from '@/components/ThreeBackground';
import Safe3D from '@/components/Safe3D';

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-wrlds-dark overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wrlds-blue/10 rounded-full blur-[150px] animate-pulse-slow"></div>
  </div>
);

interface Stat {
    label: string;
    value: string;
}

interface PremiumCaseLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    imageUrl: string;
    stats: Stat[];
    nextProject: {
        title: string;
        link: string;
        image: string;
    };
}

const PremiumCaseLayout: React.FC<PremiumCaseLayoutProps> = ({
    children,
    title,
    subtitle,
    imageUrl,
    stats,
    nextProject
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax for Hero
    const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLayout>
            {/* Global starfield background */}
            <div className="fixed inset-0 z-0">
                <Safe3D fallback={<FallbackBackground />}>
                    <ThreeBackground />
                </Safe3D>
            </div>
            
            <div ref={containerRef} className="relative z-10 bg-transparent min-h-screen text-white overflow-hidden">

                {/* HERO SECTION */}
                <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
                    {/* Parallax Background */}
                    <motion.div
                        style={{ y: yHero }}
                        className="absolute inset-0 z-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
                    </motion.div>

                    {/* Hero Content */}
                    <motion.div
                        style={{ opacity: opacityHero }}
                        className="relative z-10 container px-6 text-center max-w-5xl mx-auto mt-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block px-4 py-2 border border-white/20 rounded-full bg-black/30 backdrop-blur-md text-sm tracking-[0.2em] font-bold uppercase mb-8">
                                Case Study
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-space leading-[0.9] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                                {title}
                            </h1>
                            <p className="text-xl md:text-2xl text-wrlds-muted max-w-2xl mx-auto font-light leading-relaxed">
                                {subtitle}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity: opacityHero }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                    </motion.div>
                </div>

                {/* Stats Bar - Mobile responsive */}
                <motion.div 
                    className="max-w-5xl mx-auto px-4 md:px-8 mb-16 md:mb-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {/* Desktop: horisontell layout */}
                    <div className="hidden md:flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-white/40 py-8 border-t border-b border-white/10">
                        {stats.map((stat, index) => (
                            <span key={stat.label} className="inline-flex items-center gap-3">
                                <span className="uppercase tracking-wider text-[11px] text-wrlds-blue/80">{stat.label}</span>
                                <span className="text-white font-medium text-base">{stat.value}</span>
                                {index < stats.length - 1 && <span className="ml-8 text-white/20">·</span>}
                            </span>
                        ))}
                    </div>
                    
                    {/* Mobile: 2x2 grid */}
                    <div className="md:hidden grid grid-cols-2 gap-4 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="py-5 px-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                                <p className="uppercase tracking-wider text-[10px] text-wrlds-blue/80 mb-2">{stat.label}</p>
                                <p className="text-base text-white font-semibold">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* MAIN CONTENT */}
                <div className="relative z-10 container px-4 md:px-8 max-w-4xl mx-auto pb-24 md:pb-32">
                    <div className="mb-8 md:mb-12">
                        <Link to="/#projects" className="inline-flex items-center text-white/50 hover:text-white transition-colors group">
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="prose prose-lg md:prose-xl prose-invert max-w-none prose-headings:font-space prose-headings:font-bold prose-p:text-wrlds-muted prose-p:font-light prose-p:leading-relaxed prose-strong:text-white prose-headings:text-2xl md:prose-headings:text-4xl">
                        {children}
                    </div>
                </div>

                {/* NEXT PROJECT NAV */}
                {nextProject && (
                    <Link to={nextProject.link} className="block group relative h-[50vh] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${nextProject.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/70">Next Project</span>
                            <h2 className="text-5xl md:text-8xl font-space font-bold text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                                {nextProject.title}
                            </h2>
                            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black">
                                View Case Study <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </Link>
                )}
            </div>
        </PageLayout>
    );
};

export default PremiumCaseLayout;
