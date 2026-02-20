import React, { useState, useEffect } from "react";
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Sectors from '@/components/Sectors';
import SEO from '@/components/SEO';
import ThreeBackground from '@/components/ThreeBackground';
import Safe3D from '@/components/Safe3D';
import SimpleContact from '@/components/SimpleContact';
import WorkshopPopup from './WorkshopPopup';

const FallbackBackground = () => (

  <div className="absolute inset-0 bg-wrlds-dark overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wrlds-blue/10 rounded-full blur-[150px] animate-pulse-slow"></div>
  </div>
);

const Index = () => {
const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyRegistered = localStorage.getItem("workshopRegistered");

    if (!alreadyRegistered) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <PageLayout>
      <WorkshopPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <SEO
        title="CST Academy | Cybersecurity Training & Ethical Hacking Institute"
        description="CST Academy offers hands-on cybersecurity training, ethical hacking, SOC analyst courses & corporate security programs. Build a secure career today."
        imageUrl="/logo/cstacademylogo.png"
        keywords={['cybersecurity training institute', 'cybersecurity courses', 'ethical hacking training', 'SOC analyst training', 'cyber security course with placement']}
      />
      
      {/* Global starfield background */}
      <div className="fixed inset-0 z-0">
        <Safe3D fallback={<FallbackBackground />}>
          <ThreeBackground />
        </Safe3D>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Sectors />
        <ServicesSection />
        <Blogs />
        <Projects />
        <WhyUs />

        {/* University Collaboration Section */}
     <section className="py-20 bg-transparent relative z-20">
      <div className="container px-6">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">
            Academic <span className="text-wrlds-blue">& Industry Partnerships</span>
          </h3>

          <p className="text-lg text-wrlds-muted leading-relaxed">
            CST Academy collaborates with colleges, universities, 
            <span className="text-white font-medium"> and corporate </span> 
            partners to bridge 
            <span className="text-white font-medium"> the cybersecurity </span> 
            skill gap.
          </p>
        </div>

        {/* Partnership Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {[
            "Campus training and bootcamps",
            "Internship-oriented programs",
            "Faculty development workshops",
            "Corporate upskilling initiatives"
          ].map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-white/5 bg-wrlds-surface hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-wrlds-blue"></span>
                <p className="text-wrlds-muted group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>

        <SimpleContact />
      </div>
    </PageLayout>
  );
};

export default Index;
