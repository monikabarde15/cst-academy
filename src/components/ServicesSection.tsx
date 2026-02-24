import { Cpu, Cloud, Smartphone, Factory } from "lucide-react";

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-white group-hover:text-wrlds-blue transition-colors duration-500" />,
    title: "Cybersecurity Foundations",
    description:
      "Networking, Linux, system administration, security fundamentals, and threat landscape awareness.",
    colSpan: "md:col-span-2",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-wrlds-blue group-hover:text-white transition-colors duration-500" />,
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Web, network, and application security using real-world attack methodologies and tools.",
    colSpan: "md:col-span-1",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors duration-500" />,
    title: "SOC Analyst & Blue Team Training",
    description:
      "SIEM, log analysis, incident response, threat hunting, and real-time security monitoring.",
    colSpan: "md:col-span-1",
  },
  {
    icon: <Factory className="w-8 h-8 text-wrlds-muted group-hover:text-wrlds-blue transition-colors duration-500" />,
    title: "Certification & Career Readiness",
    description:
      "Guidance for global certifications, resume building, mock interviews, and job preparation.",
    colSpan: "md:col-span-2",
  },
  {
    icon: <Factory className="w-8 h-8 text-wrlds-muted group-hover:text-wrlds-blue transition-colors duration-500" />,
    title: "Learning Methodology",
    description:
      "We believe cybersecurity is learned by doing, not just watching.",
    colSpan: "md:col-span-2",
    points: [
      "Hands-on labs with real tools",
      "Live attack and defense simulations",
      "Industry-relevant projects",
      "Mentor-led training sessions",
      "Continuous assessments and feedback",
    ],
  },
  {
    icon: <Factory className="w-8 h-8 text-wrlds-muted group-hover:text-wrlds-blue transition-colors duration-500" />,
    title: "Success Stories & Outcomes",
    description: "Real Learning. Real Careers.",
    colSpan: "md:col-span-1",
    points: [
      "Students transitioning into SOC Analyst and Ethical Hacker roles",
      "IT professionals moving into penetration testing and security consulting",
      "Corporate teams reducing security incidents through awareness and skill training",
    ],
    CTA: "View Student Success Stories"
  },
  {
    icon: <Factory className="w-8 h-8 text-wrlds-muted group-hover:text-wrlds-blue transition-colors duration-500" />,
    title: "Cybersecurity Insights & Resources",
    description: "Stay updated with the latest cyber threats, tools, career guidance, and practical tutorials curated by CST Academy experts.",
    colSpan: "md:col-span-2",
    CTA:"Read Our Blog",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-1 md:py-24 relative bg-transparent overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-wrlds-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-white">
            Complete{" "}
            <span className="text-wrlds-blue">End-to-End Cybersecurity</span>{" "}
            Learning
          </h2>

          <p className="text-wrlds-muted text-lg">
            From fundamentals to advanced cyber defense — one academy, one
            roadmap. CST Academy provides a structured learning journey covering
            offensive, defensive, and operational security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.colSpan} glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 border-white/5 bg-wrlds-surface relative overflow-hidden`}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-wrlds-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-wrlds-blue/30 transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white relative z-10">
                {service.title}
              </h3>

              <p className="text-wrlds-muted leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-500">
                {service.description}
              </p>

              {/* Points (if available) */}
              {service.points && (
                <ul className="mt-4 space-y-2 relative z-10">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-wrlds-muted group-hover:text-white/80 transition-colors duration-500 flex items-start gap-2"
                    >
                      <span className="text-wrlds-blue">•</span> {point}
                    </li>
                  ))}
                </ul>
              )}
              {/* CTA Button */}

              {service.CTA && (
                <div className="mt-6 relative z-10">
                    <button className="px-5 py-2 text-sm font-semibold rounded-lg border border-wrlds-blue/40 text-wrlds-blue hover:bg-wrlds-blue hover:text-white transition-all duration-300">
                    {service.CTA}
                    </button>
                </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;