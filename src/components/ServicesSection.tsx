import { Cpu, Cloud, Smartphone, Factory } from 'lucide-react';

const services = [
    {
        icon: <Cpu className="w-8 h-8 text-white group-hover:text-wrlds-blue transition-colors duration-500" />,
        title: "Hardware Engineering",
        description: "PCB design, sensor integration, and power optimization fitting extreme constraints.",
        colSpan: "md:col-span-2"
    },
    {
        icon: <Smartphone className="w-8 h-8 text-wrlds-blue group-hover:text-white transition-colors duration-500" />,
        title: "App Development",
        description: "Native iOS & Android experiences that feel magical.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Cloud className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors duration-500" />,
        title: "Cloud Infrastructure",
        description: "Scalable backends, real-time data processing, and AI integration.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Factory className="w-8 h-8 text-wrlds-muted group-hover:text-wrlds-blue transition-colors duration-500" />,
        title: "Manufacturing",
        description: "From rapid prototyping to mass production supply chains.",
        colSpan: "md:col-span-2"
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-12 md:py-24 relative bg-transparent overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-wrlds-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

            <div className="container px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-white">
                        <span className="block md:inline">Complete</span>{' '}
                        <span className="text-wrlds-blue relative inline-block whitespace-nowrap">
                            End-to-End
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wrlds-blue to-transparent opacity-50"></span>
                        </span>
                        <span className="block md:inline"> Control</span>
                    </h2>
                    <p className="text-wrlds-muted text-lg">
                        From chip to cloud — one team, one vision, zero handoffs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${service.colSpan} glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 border-white/5 bg-wrlds-surface relative overflow-hidden`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-wrlds-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="mb-6 relative z-10">
                                <div className="holo-container w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-wrlds-blue/30 transition-colors duration-500">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white relative z-10">{service.title}</h3>
                            <p className="text-wrlds-muted leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-500">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
