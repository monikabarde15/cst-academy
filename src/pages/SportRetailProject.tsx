import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <PremiumCaseLayout
      title="Performance"
      subtitle="Revolutionary R&D for next-generation athletic footwear with embedded textile sensors."
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      stats={[
        { label: "Client", value: "Global Retailer" },
        { label: "Industry", value: "Sports" },
        { label: "Tech", value: "R&D" },
        { label: "Status", value: "Prototyping" }
      ]}
      nextProject={{
        title: "Climate Control",
        link: "/projects/workwear",
        image: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
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
            A global sports retail leader approached WRLDS with a vision: to revolutionize how athletic footwear is designed, tested, and sold.
            Traditional development relies on subjective feedback. They needed hard data.
            Measurements of actual performance metrics, pressure distribution, and foot movements in real-world scenarios—not just a lab.
          </p>
        </section>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Footprints className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Embedded Sensors</h3>
            <p className="text-sm">Textile-based pressure matrices integrated directly into the sole.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Zap className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Real-time Feedback</h3>
            <p className="text-sm">Instant analysis of gait efficiency and energy return.</p>
          </div>
        </div>

        {/* Deep Dive */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            We developed a "Smart Footwear R&D Platform". It's a suite of tools that allows designers to iterate faster than ever before.
            By seeing exactly how a shoe performs on a runner's foot in real-time, the client can optimized material usage and structural design.
            Furthermore, this tech is paving the way for **Personalized Retail**: imagine running on a treadmill in-store and getting a shoe recommendation based on your unique digital heat-map.
          </p>
        </section>

        {/* Feature List */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">Capabilities</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <LineChart className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Performance Metrics</strong>
                Comprehensive data on acceleration, stability, and energy return.
              </div>
            </li>
            <li className="flex items-start">
              <Award className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Athlete Cloud</strong>
                AI comparisons of performance across prototype iterations.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">Preliminary Results</h2>
          <p>
            The prototype platform has shown marked success in initial testing. The data-driven approach is currently guiding
            the design of the client's 2026 flagship running shoe.
          </p>
          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
            <Sparkles className="text-blue-400 w-8 h-8" />
            <p className="text-sm text-blue-200">
              Patent applications have been filed based on innovations developed during this ongoing project.
            </p>
          </div>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default SportRetailProject;
