import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Activity, Brain, Bluetooth, Trophy } from 'lucide-react';

const BergProject = () => {
  return (
    <PremiumCaseLayout
      title="Trampoline AI"
      subtitle="Ankle sensor with machine learning for jump analysis and trick recognition."
      imageUrl="/lovable-uploads/trampoline-ai.png"
      stats={[
        { label: "Client", value: "Berg" },
        { label: "Industry", value: "Leisure" },
        { label: "Tech", value: "AI + Sensors" },
        { label: "Tricks", value: "40+" }
      ]}
      nextProject={{
        title: "Equestrian Tech",
        link: "/projects/reingauge",
        image: "/lovable-uploads/6fdd3d0d-5dca-470a-a845-bd7b07bff599.png"
      }}
    >
      <div className="space-y-16">

        {/* Intro */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Challenge</h2>
          <p>
            Berg, a leading trampoline manufacturer, wanted to add a digital dimension to their products.
            The goal was to create a wearable sensor that could accurately measure jumps, recognize tricks,
            and turn backyard bouncing into a gamified experience for kids and families.
          </p>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Activity className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Jump Tracking</h3>
            <p className="text-sm">Precision IMU sensors measure jump height, airtime, and landing quality in real-time.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Brain className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">AI Trick Recognition</h3>
            <p className="text-sm">Machine learning algorithms identify and classify up to 40 different trampoline tricks.</p>
          </div>
        </div>

        {/* Solution */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            We designed a compact ankle sensor that straps securely during jumping. Inside, a high-frequency 
            IMU captures every nuance of movement. Our custom machine learning model, trained on thousands 
            of labeled jumps, can distinguish between front flips, backflips, twists, and dozens of other tricks.
            The data streams via Bluetooth to a companion app where users can see their stats and compete.
          </p>
        </section>

        {/* Ecosystem */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">The Ecosystem</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Bluetooth className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Bluetooth Sync</strong>
                Instant connection to the Berg app for live feedback and session logging.
              </div>
            </li>
            <li className="flex items-start">
              <Trophy className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Gamification</strong>
                Challenges, achievements, and leaderboards make every session exciting.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Outcome</h2>
          <p>
            The Berg Trampoline AI transforms a simple trampoline into an interactive fitness platform.
            Kids are motivated to practice and improve, parents can track activity levels, and the 
            gamification elements keep the whole family engaged in healthy outdoor play.
          </p>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default BergProject;