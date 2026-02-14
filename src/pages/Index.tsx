import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Sectors from '@/components/Sectors';
import SEO from '@/components/SEO';
import ThreeBackground from '@/components/ThreeBackground';
import Safe3D from '@/components/Safe3D';
import SimpleContact from '@/components/SimpleContact';
import WorkshopPopup from './WorkshopPopup';
import React, { useState } from "react";

const FallbackBackground = () => (

  <div className="absolute inset-0 bg-wrlds-dark overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wrlds-blue/10 rounded-full blur-[150px] animate-pulse-slow"></div>
  </div>
);

const Index = () => {
      const [open, setOpen] = useState(true);

  return (
    <PageLayout>
      <WorkshopPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        title="AI & Cyber Security Workshop – 21st Feb"
        targetDate="2026-02-21T18:00:00"
        points={[
          "Hands-on live training",
          "Real-world projects",
          "Certificate included",
          "Placement guidance",
        ]}
      />
      <SEO
        title="WRLDS - The Connected Future"
        description="We transform visionary concepts into market-ready connected products. Hardware, software, and manufacturing integrated seamlessly."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['IoT development', 'connected product development', 'hardware software integration', 'smart product partner', 'end-to-end IoT solutions', 'rapid prototyping', 'product development']}
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
        <ServicesSection />
        <Sectors />
        <Projects />
        <WhyUs />

        {/* University Collaboration Section */}
        <section className="py-20 bg-transparent relative z-20">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">
                Academic <span className="text-wrlds-blue">Partnerships</span>
              </h3>
              <p className="text-lg text-wrlds-muted leading-relaxed">
                We collaborate with leading universities including <span className="text-white font-medium">Borås Textilhögskola</span> and <span className="text-white font-medium">KTH Royal Institute of Technology</span> to provide internship opportunities and drive innovation in smart textiles and connected technology.
              </p>
            </div>
          </div>
        </section>

        <SimpleContact />
      </div>
    </PageLayout>
  );
};

export default Index;
