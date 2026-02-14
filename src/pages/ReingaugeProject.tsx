import PremiumCaseLayout from '@/components/PremiumCaseLayout';
import { Activity, Smartphone, TrendingUp, Users } from 'lucide-react';

const ReingaugeProject = () => {
  return (
    <PremiumCaseLayout
      title="Equestrian Tech"
      subtitle="Rein sensors measuring pulling power for real-time rider-horse communication analysis."
      imageUrl="/lovable-uploads/horse-equestrian.png"
      stats={[
        { label: "Client", value: "Reingauge" },
        { label: "Initiated by", value: "Carolyn Melka" },
        { label: "Tech", value: "IoT + App" },
        { label: "Focus", value: "Training" }
      ]}
      nextProject={{
        title: "6th SENSE",
        link: "/projects/firecat",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      }}
    >
      <div className="space-y-16">

        {/* Intro */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Challenge</h2>
          <p>
            Communication between rider and horse happens through subtle cues—pulling power on the reins, 
            timing, and symmetry. These signals are invisible to coaches watching from the ground. 
            Initiated by Carolyn Melka, one of the top riders in the USA, Reingauge set out to quantify 
            this interaction, giving riders objective data about their communication with the horse.
          </p>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Activity className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Rein Sensors</h3>
            <p className="text-sm">Precision sensors placed between the rein and bit measure pulling power and communication patterns in real-time.</p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end group hover:bg-white/10 transition-colors">
            <Users className="w-12 h-12 text-wrlds-blue mb-4" />
            <h3 className="text-2xl font-bold font-space text-white mb-2">Crown Piece Hub</h3>
            <p className="text-sm">Central unit on the horse's head receives sensor data via Bluetooth and streams to trainer's device.</p>
          </div>
        </div>

        {/* Solution */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Solution</h2>
          <p>
            We engineered a system with sensors placed between the reins and the bit, connected wirelessly 
            to a crown piece worn on the horse's head. The sensors measure pulling power and every nuance 
            of rider-horse communication, transmitting data via Bluetooth to a companion app. Trainers can 
            watch the visualization in real-time, seeing exactly how the rider communicates with the horse.
          </p>
        </section>

        {/* Ecosystem */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold font-space text-white mb-8">The Ecosystem</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Smartphone className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Rider App</strong>
                Strava-like interface to log training sessions, track progress, and analyze historical pulling power data.
              </div>
            </li>
            <li className="flex items-start">
              <TrendingUp className="w-6 h-6 text-wrlds-blue mr-4 mt-1" />
              <div>
                <strong className="text-white block mb-1">Progress Analytics</strong>
                Long-term tracking shows improvement in communication consistency, symmetry, and pulling power balance.
              </div>
            </li>
          </ul>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-4xl text-white mb-6">The Outcome</h2>
          <p>
            Reingauge brings data-driven training to the equestrian world. Riders gain objective insights 
            into their pulling power and technique, trainers can provide precise feedback on communication 
            patterns, and the Strava-like logging creates a record of improvement over time.
          </p>
        </section>

      </div>
    </PremiumCaseLayout>
  );
};

export default ReingaugeProject;