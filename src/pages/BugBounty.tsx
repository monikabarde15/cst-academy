import { ShieldCheck, Cpu, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

const blogs = [
  {
    title: "What is Bug Bounty? A Complete Beginner Guide",
    slug: "What-is-Bug-Bounty?-A-Complete-Beginner-Guide",
    desc: "Bug bounty programs allow ethical hackers to legally discover and report vulnerabilities in websites, applications, and systems in exchange for rewards. Learn how bug bounty hunting works and how to get started.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How to Start Earning from Bug Bounty Programs",
    slug:"How-to-Start-Earning-from-Bug-Bounty-Programs",
    desc: "Step-by-step roadmap to begin your bug bounty journey, including choosing platforms like HackerOne and Bugcrowd, setting up your lab environment, and identifying security vulnerabilities.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Top Bug Bounty Platforms in 2026",
    slug:"Top-Bug-Bounty-Platforms-in-2026",
    desc: "Explore leading bug bounty platforms such as HackerOne, Bugcrowd, and Synack that connect ethical hackers with organizations looking to secure their applications.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Common Vulnerabilities Found in Bug Bounty",
    slug:"Common-Vulnerabilities-Found-in-Bug-Bounty",
    desc: "Learn about common vulnerabilities like SQL Injection, XSS, IDOR, CSRF, and authentication bypass that frequently appear in bug bounty programs.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CEH vs Bug Bounty: Which Path is Better?",
    slug:"CEH-vs-Bug-Bounty-Which-Path-is-Better?",
    desc: "Compare CEH certification and bug bounty hunting to understand which cybersecurity path suits your career goals — structured certification or practical vulnerability research.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
];


const BugBounty = () => {
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
              Bug <span className="text-blue-500">Bounty</span>
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
              Bug Bounty Insights
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

export default BugBounty;
