import { ShieldCheck, Cpu, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";



export const blogs = [
  {
    title: "AI-Powered Threat Intelligence",
    slug: "ai-powered-threat-intelligence",
    desc: "Advanced cyber security solutions leverage artificial intelligence...",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    content: `
      <h2>AI-Powered Threat Intelligence</h2>
      <p>AI-driven systems analyze large volumes of security data to detect anomalies and predict threats in real time.</p>
      <ul>
        <li>Machine Learning Threat Detection</li>
        <li>Automated Incident Response</li>
        <li>Behavioral Analytics</li>
      </ul>
    `,
  },

  {
    title: "Zero Trust Security Architecture",
    slug: "zero-trust-security-architecture",
    desc: "Zero Trust is a modern security framework...",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    content: `
      <h2>Zero Trust Security Architecture</h2>
      <p>Zero Trust verifies every user and device before granting access.</p>
      <ul>
        <li>Identity Verification</li>
        <li>Micro-segmentation</li>
        <li>Continuous Monitoring</li>
      </ul>
    `,
  },

  {
    title: "Advanced SOC & Incident Response",
    slug: "advanced-soc-incident-response",
    desc: "Security Operations Centers (SOC) use advanced monitoring tools...",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8b7b8c9b45?w=1200",
    content: `
      <h2>Advanced SOC & Incident Response</h2>
      <p>24/7 monitoring using SIEM and threat intelligence platforms.</p>
    `,
  },

  {
    title: "Cloud Security & DevSecOps",
    slug: "cloud-security-devsecops",
    desc: "Modern enterprises secure cloud environments...",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200",
    content: `
      <h2>Cloud Security & DevSecOps</h2>
      <p>Integrating security into the DevOps pipeline for safer deployments.</p>
    `,
  },

  {
    title: "IoT & Critical Infrastructure Protection",
    slug: "iot-critical-infrastructure-protection",
    desc: "Advanced security frameworks protect IoT devices...",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200",
    content: `
      <h2>IoT & Infrastructure Protection</h2>
      <p>Protecting connected devices and industrial systems.</p>
    `,
  },

  {
    title: "Ransomware Prevention & Cyber Defense Strategy",
    slug: "ransomware-prevention-cyber-defense",
    desc: "Implement multi-layered security strategies...",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    content: `
      <h2>Ransomware Prevention Strategy</h2>
      <p>Multi-layered security including backups and behavioral analytics.</p>
    `,
  },
];



const AdvancedCyberSecurity = () => {
  return (
    <PageLayout>
      <SEO
        title="Enterprise Cyber Security Solutions"
        description="AI-powered enterprise cyber security including SOC monitoring, IoT protection and advanced threat intelligence."
      />

      <div className="bg-gradient-to-b from-[#0b0f1a] via-[#0e1424] to-black text-white">

        {/* HERO SECTION */}
        <section className="relative w-full aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4] flex items-center justify-center text-center overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Cyber Security Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Advanced <span className="text-blue-500"> Cyber Security</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-300">
                Enterprise-grade protection powered by AI-driven threat detection,
                real-time monitoring, and intelligent defense systems.
              </p>
          </div>

        </section>

       
      

        {/* BLOG SECTION */}
        <section className="py-24 px-6 bg-[#0c1220]">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
             Advanced Cyber Security Insights
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Latest updates and industry insights from our security experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500 transition group"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {blog.desc}
                  </p>

                  <Link
                   to={`/course-detail/${blog.slug}`}
                    className="text-blue-400 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AdvancedCyberSecurity;
