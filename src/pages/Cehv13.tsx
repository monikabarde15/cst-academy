import { ShieldCheck, Cpu, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

const blogs = [
  {
    title: "What is CEH v13 Ethical Hacking?",
    slug:"What-is-CEH-v13-Ethical-Hacking",
    desc: "CEH v13 (Certified Ethical Hacker Version 13) is a globally recognized cybersecurity certification that teaches professionals how to legally identify and fix vulnerabilities in systems, networks, and applications using real-world hacking tools and methodologies.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CEH v13 Syllabus & Modules Explained",
    slug:"CEH-v13-Syllabus&Modules-Explained",
    desc: "Explore the complete CEH v13 syllabus including footprinting, scanning networks, system hacking, malware analysis, web application security, and cloud security concepts covered in the latest certification version.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Top Tools Covered in CEH v13",
    slug:"Top-Tools-Covered-in-CEH-v13",
    desc: "Learn industry-leading tools like Kali Linux, Nmap, Metasploit, Wireshark, Burp Suite, and more that are included in CEH v13 training for performing vulnerability assessments and penetration testing.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CEH v13 Practical Labs & Hands-On Training",
    slug:"CEH-v13-Practical-Labs&Hands-On-Training",
    desc: "CEH v13 provides real-world lab environments to practice ethical hacking techniques, simulate attacks, and strengthen defensive security skills through structured hands-on exercises.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8b7b8c9b45?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CEH v13 Exam Pattern & Preparation Tips",
    slug:"CEH-v13-Exam-Pattern&Preparation-Tips",
    desc: "Understand the CEH v13 exam structure, question types, scoring criteria, and expert preparation strategies to successfully pass the certification on your first attempt.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Career Opportunities After CEH v13",
    slug:"Career-Opportunities-After-CEH-v13",
    desc: "Discover career paths like Ethical Hacker, Penetration Tester, SOC Analyst, Cybersecurity Consultant, and Security Engineer after earning your CEH v13 certification.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  },
];


const Cehv13 = () => {
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
              CEH <span className="text-blue-500">V13 Ethical Hacking</span>
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

export default Cehv13;
