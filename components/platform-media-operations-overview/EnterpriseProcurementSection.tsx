import { Accessibility, Award, BookOpen, CreditCard, FileText, Headphones, Lock, Shield } from 'lucide-react';

const row1 = [
  { title: 'Operating Model', desc: 'Roles, readiness, state, evidence, escalation.', icon: Award },
  { title: 'Security & Access', desc: 'Scoped access, security/privacy boundaries.', icon: Shield },
  { title: 'Reliability', desc: 'Approved resilience/status evidence with scope.', icon: BookOpen },
  { title: 'Monitoring & Support', desc: 'Status/support distinction and pathways.', icon: Headphones },
];

const row2 = [
  { title: 'Accessibility', desc: 'WCAG 2.2 AA + product accessibility boundaries.', icon: Accessibility },
  { title: 'Privacy', desc: 'Data minimization, analytics exclusions.', icon: Lock },
  { title: 'Change Management', desc: 'Claim freshness, changelog, deprecation.', icon: FileText },
  { title: 'Commercial', desc: 'Pricing and enterprise consultation routes.', icon: CreditCard },
];

export default function EnterpriseProcurementSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/60 border-b border-slate-700 flex flex-col gap-14"
    style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (60).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }}>
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Enterprise evaluation and procurement
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Evidence-first approach to enterprise trust
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {row1.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 bg-slate-900 rounded-xl border border-slate-700 flex flex-col gap-3"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <p className="text-slate-50 text-base font-bold font-['Space_Grotesk'] leading-6">
                  {item.title}
                </p>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {row2.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 bg-slate-900 rounded-xl border border-slate-700 flex flex-col gap-3"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <p className="text-slate-50 text-base font-bold font-['Space_Grotesk'] leading-6">
                  {item.title}
                </p>
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <button
          type="button"
          className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-gray-800 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
        >
          Talk to an expert
        </button>
        <button
          type="button"
          className="px-7 py-3.5 rounded-[10px] border border-slate-700 text-slate-50 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800 transition-colors"
        >
          View documentation
        </button>
      </div>
    </section>
  );
}

