import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Shield, Radio, Activity, Box } from 'lucide-react';

const FireCatProject = () => {
  return (
    <PremiumCaseLayout
      title="6th SENSE"
      subtitle="AI-driven sensor solution integrating real-time biometric data into uniforms for law enforcement, military, and firefighters."
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      stats={[
        { label: "Client", value: "FireCat" },
        { label: "Industry", value: "Safety" },
        { label: "Tech", value: "AI + IoT" },
        { label: "Impact", value: "Life Saving" }
      ]}
      nextProject={{
        title: "Performance",
        link: "/projects/sport-retail",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      }}
    >
      <div className="space-y-16">

        {/* Intro */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Challenge</h2>
          <p>
            FireCat Group aimed to enhance the safety and operational effectiveness of personnel in high-risk
            environments such as law enforcement, military operations, and firefighting. They required an advanced,
            integrated sensor solution that could provide critical real-time data for risk management and decision-making.
            Traditional solutions were bulky, unreliable, or lacked the intelligence to discern false alarms from real threats.
          </p>
        </section>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Shield className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Man Down Detection</h3>
            <p className="text-sm">Instant alerts when personnel are incapacitated, with location locking.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Radio className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Encrypted Comms</h3>
            <p className="text-sm">Military-grade encryption ensures data integrity in hostile environments.</p>
          </div>
        </div>

        {/* Deep Dive */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            WRLDS Technologies engineered **6th SENSE**—an end-to-end ecosystem. It's not just a sensor; it's a platform.
            By embedding machine learning algorithms directly onto the hardware (Edge AI), we reduced latency to near-zero.
            The system learns the wearer's "normal" movement patterns, drastically reducing false positives compared to standard accelerometers.
          </p>
          <p className="mt-6">
            Everything is integrated into the fabric. No bulky clips. No cables. Just a smart uniform that watches your back.
          </p>
        </section>

        {/* Feature List */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">System Architecture</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Box className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Integrated Clothing</strong>
                Customized shirts embedding AI-powered sensors that maintain user comfort and washability.
              </div>
            </li>
            <li className="flex items-start">
              <Activity className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Supervisor Dashboard</strong>
                Centralized AI interface providing transparent data visualization and fleet management.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Outcome</h2>
          <p>
            FireCat successfully implemented the 6th SENSE solution, significantly enhancing situational awareness.
            The system is now standard issue in multiple pilot programs across Europe. WRLDS' modular architecture means
            future upgrades—like gas detection or ballistics monitoring—can be pushed via over-the-air software updates.
          </p>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default FireCatProject;
