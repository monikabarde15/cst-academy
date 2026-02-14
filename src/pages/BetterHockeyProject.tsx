import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Target, Radar, Smartphone, Gamepad2 } from 'lucide-react';

const BetterHockeyProject = () => {
  return (
    <PremiumCaseLayout
      title="Off-Ice Training"
      subtitle="Smart targets and radar technology for gamified hockey training."
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      stats={[
        { label: "Client", value: "Better Hockey" },
        { label: "Industry", value: "Sports" },
        { label: "Tech", value: "IoT + Sensors" },
        { label: "Focus", value: "Training" }
      ]}
      nextProject={{
        title: "Trampoline AI",
        link: "/projects/berg",
        image: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
      }}
    >
      <div className="space-y-16">

        {/* Intro */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Challenge</h2>
          <p>
            Hockey players need consistent, measurable training off the ice. Better Hockey wanted to create
            an ecosystem of smart training equipment that could track performance, provide instant feedback,
            and make practice sessions more engaging through gamification.
          </p>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Target className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Smart Targets</h3>
            <p className="text-sm">Modular targets with embedded sensors for goal placement, connected to app for various game modes.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Radar className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Shot Speed Radar</h3>
            <p className="text-sm">Precision radar system to measure shot velocity with real-time display and tracking.</p>
          </div>
        </div>

        {/* Solution */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            We developed a complete off-ice training ecosystem featuring smart targets that can be placed 
            in goal corners, each equipped with impact sensors and LED feedback. The companion radar unit 
            measures shot speed with professional-grade accuracy. All devices connect via Bluetooth to the 
            Better Hockey app, enabling competitive game modes, progress tracking, and social challenges.
          </p>
        </section>

        {/* Ecosystem */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">The Ecosystem</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Smartphone className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Training App</strong>
                Real-time stats, game modes, and progress tracking synced via Bluetooth.
              </div>
            </li>
            <li className="flex items-start">
              <Gamepad2 className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Gamification</strong>
                Competitive challenges, leaderboards, and skill-based achievements.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Outcome</h2>
          <p>
            The Better Hockey training system transforms solo practice into an engaging, measurable experience.
            Players can track their improvement over time, compete with friends, and train with the same 
            intensity as game situations—all from their driveway or garage.
          </p>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default BetterHockeyProject;