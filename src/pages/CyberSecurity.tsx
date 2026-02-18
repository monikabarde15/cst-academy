import { ShieldCheck, Cpu, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cyberBlogs } from "@/data/cyberBlogs";

import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

export const blogs = [
  {
    title: "CERTIFIED NETWORK DEFENDER",
    slug: "certified-network-defender",
    category: "Cyber Security",
    author: "WRLDS Team",
    date: "2026-02-15",
    excerpt:
      "Comprehensive training on network defense fundamentals and advanced security measures.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The Certified Network Defender program is meticulously crafted...</p>
      <p>You will gain in-depth knowledge of network defense fundamentals...</p>
    `,
  },
  {
    title: "SOC ANALYST",
    slug: "soc-analyst",
    category: "Cyber Security",
    author: "WRLDS Team",
    date: "2026-02-14",
    excerpt:
      "Learn SOC operations and tools used in modern Security Operations Centers.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The SOC Analyst program is expertly designed...</p>
    `,
  },
  {
    title: "Information Security and Ethical Hacking Course",
    slug: "information-security-ethical-hacking",
    category: "Ethical Hacking",
    author: "WRLDS Team",
    date: "2026-02-13",
    excerpt:
      "Advanced ethical hacking techniques and cyber defense strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The Cyber Defender program is meticulously crafted...</p>
    `,
  },
  {
    title: "CYBER FORENSICS",
    slug: "cyber-forensics",
    category: "Digital Investigation",
    author: "WRLDS Team",
    date: "2026-02-12",
    excerpt:
      "Master digital investigation and forensic evidence handling.",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The Cyber Forensics program is intricately designed...</p>
    `,
  },
  {
    title: "Bug Bounty",
    slug: "bug-bounty",
    category: "Security Research",
    author: "WRLDS Team",
    date: "2026-02-11",
    excerpt:
      "Learn to identify and exploit vulnerabilities responsibly.",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The Bug Bounty program is designed to provide...</p>
    `,
  },
];

const CyberSecurity = () => {
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
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
      Cyber <span className="text-blue-500">Security</span>
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
              Cyber Security Insights
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
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    <div
  className="prose prose-invert max-w-none"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>
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

export default CyberSecurity;
