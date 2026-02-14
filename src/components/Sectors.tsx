import { Shield, Activity, Gamepad2, Factory, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const sectors = [
    {
        id: "military",
        title: "Defense",
        subtitle: "Mission Critical",
        icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        description: "Next-gen tactical awareness and biometric monitoring for high-stakes environments.",
        gradient: "from-slate-900 to-slate-800",
        imageUrl: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
        id: "sport",
        title: "Sport",
        subtitle: "Elite Performance",
        icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        description: "Precision motion tracking embedded in footwear and apparel for professional sports.",
        gradient: "from-blue-950 to-slate-900",
        imageUrl: "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png"
    },
    {
        id: "leisure",
        title: "Leisure",
        subtitle: "Connected Play",
        icon: <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        description: "Invisible technology enhancing gaming, outdoor activities, and daily life.",
        gradient: "from-indigo-950 to-slate-900",
        imageUrl: "/lovable-uploads/football-leisure.png"
    },
    {
        id: "industry",
        title: "Industry",
        subtitle: "Smart Manufacturing",
        icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-white" />,
        description: "Intelligent workwear and sensor networks for the modern automated workforce.",
        gradient: "from-slate-900 to-gray-900",
        imageUrl: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png"
    }
];

// Simple static mobile card - no scroll-triggered animations for performance
const MobileSectorCard = ({ sector }: { sector: typeof sectors[0] }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden h-32">
            {/* Background Image */}
            <img 
                src={sector.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${sector.gradient} opacity-80`}></div>

            {/* Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl shrink-0 bg-white/10">
                    {sector.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-space text-white text-lg mb-1">
                        {sector.title}
                    </h3>
                    <p className="text-xs text-wrlds-muted line-clamp-2">
                        {sector.description}
                    </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/50 shrink-0" />
            </div>
        </div>
    );
};

const Sectors = () => {
    const [activeId, setActiveId] = useState<string | null>("sport"); // Default active for visual impact

    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-20">

            <div className="container px-6 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space text-white leading-[0.9] tracking-tighter">
                            WHERE WE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-wrlds-blue to-white">OPERATE.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Desktop Accordion Layout */}
                <div className="hidden md:flex gap-2 h-[600px] w-full">
                    {sectors.map((sector) => {
                        const isActive = activeId === sector.id;
                        return (
                            <div
                                key={sector.id}
                                onClick={() => setActiveId(sector.id)}
                                onMouseEnter={() => setActiveId(sector.id)}
                                style={{
                                    flex: isActive ? 3 : 1,
                                    transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                className="relative rounded-3xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image */}
                                <img 
                                    src={sector.imageUrl}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                                    style={{ opacity: isActive ? 0.4 : 0.2 }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-60 z-0`}></div>

                                {/* Active Borders */}
                                <div 
                                    className="absolute inset-0 border-2 z-20 rounded-3xl transition-colors duration-700"
                                    style={{ borderColor: isActive ? 'rgba(0, 163, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)' }}
                                ></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    {/* Header / Icon */}
                                    <div className="flex justify-between items-start">
                                        <div 
                                            className="p-3 rounded-2xl backdrop-blur-md transition-all duration-500"
                                            style={{ 
                                                backgroundColor: isActive ? 'rgb(0, 163, 255)' : 'rgba(255, 255, 255, 0.1)',
                                            }}
                                        >
                                            {sector.icon}
                                        </div>
                                        <ArrowUpRight 
                                            className="w-6 h-6 transition-all duration-500"
                                            style={{
                                                color: isActive ? 'white' : 'rgba(255, 255, 255, 0.3)',
                                                transform: isActive ? 'rotate(0deg)' : 'rotate(45deg)'
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col">
                                        {/* Title - horizontal, scales smoothly */}
                                        <h3 
                                            className="font-space font-bold text-white transition-all duration-500 ease-out"
                                            style={{
                                                fontSize: isActive ? 'clamp(2rem, 5vw, 3.75rem)' : 'clamp(1rem, 2vw, 1.25rem)',
                                                opacity: isActive ? 1 : 0.7,
                                                marginBottom: isActive ? '0.75rem' : '0',
                                            }}
                                        >
                                            {sector.title}
                                        </h3>

                                        {/* Description - fades and slides in */}
                                        <div 
                                            className="overflow-hidden transition-all duration-500 ease-out"
                                            style={{
                                                maxHeight: isActive ? '120px' : '0',
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        >
                                            <p className="text-wrlds-muted text-lg leading-relaxed max-w-lg">
                                                {sector.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Static Cards */}
                <div className="flex flex-col md:hidden gap-3">
                    {sectors.map((sector) => (
                        <MobileSectorCard key={sector.id} sector={sector} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
