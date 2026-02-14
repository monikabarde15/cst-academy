import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Thermometer, ShieldCheck, Mountain, Cpu, FlaskConical } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <PremiumCaseLayout
      title="Climate Control"
      subtitle="Developing AC-integrated garment prototypes for uniformed personnel and professional workwear."
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      stats={[
        { label: "Client", value: "Workwear R&D" },
        { label: "Industry", value: "Workwear" },
        { label: "Tech", value: "IoT + Textiles" },
        { label: "Status", value: "Prototype" }
      ]}
      nextProject={{
        title: "Off-Ice Training",
        link: "/projects/better-hockey",
        image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      }}
    >
      <div className="space-y-16">

        {/* Intro */}
        <section>
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mb-8 inline-flex items-center">
            <FlaskConical className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-yellow-200 font-mono text-sm uppercase tracking-wider">Ongoing R&D Project</span>
          </div>

          <h2 className="text-4xl text-white mb-6">The Challenge</h2>
          <p>
            From arctic construction workers to foundry operators, professionals in extreme environments face a common enemy: thermal stress.
            A leading European textile manufacturer needed a solution. Traditional passive insulation is heavy and restrictive.
            They needed an active system—one that could regulate body temperature without compromising mobility or safety certifications.
          </p>
        </section>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Thermometer className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Adaptive Climate</h3>
            <p className="text-sm">Heating and cooling elements with multi-zone control.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <ShieldCheck className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Safety First</h3>
            <p className="text-sm">Flame resistant, electrically safe, and fully durable.</p>
          </div>
        </div>

        {/* Deep Dive */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            We engineered an "Active Skin" layer. It's a fully integrated system where the controller acts as the brain.
            Using environmental sensors, it detects if the worker is entering a freezing zone or standing near a blast furnace.
            The system then automatically adjusts power to the heating/cooling filaments woven into the fabric.
          </p>
        </section>

        {/* Feature List */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">Specs</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Cpu className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">AI Controller</strong>
                Learns user preferences and optimizes battery life.
              </div>
            </li>
            <li className="flex items-start">
              <Mountain className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Extreme Durability</strong>
                Washable and ruggedized for industrial use.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">Preliminary Results</h2>
          <p>
            The technology is currently being evaluated by select industrial clients in the oil & gas and mining sectors
            across Northern Europe and Canada. Early feedback highlights a massive improvement in worker comfort and
            extended operational times in harsh conditions.
          </p>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default WorkwearProject;
