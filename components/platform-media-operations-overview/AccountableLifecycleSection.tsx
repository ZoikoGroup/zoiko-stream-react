const row1Steps = [
  { num: '01', title: 'PLAN', text: 'Outcome, scope, owner, dependencies' },
  { num: '02', title: 'PREPARE', text: 'Prerequisites, config, readiness' },
  { num: '03', title: 'AUTHORIZE', text: 'Decision rights, approver, policy' },
  { num: '04', title: 'ACTIVATE', text: 'Approved start with verification' },
  { num: '05', title: 'OBSERVE', text: 'Current state, health, evidence' },
];

const row2Steps = [
  { num: '06', title: 'DECIDE', text: 'Human review of evidence & impact' },
  { num: '07', title: 'ACT', text: 'Controlled intervention with rollback' },
  { num: '08', title: 'ESCALATE', text: 'Incident/support communication' },
  { num: '09', title: 'PRESERVE', text: 'Record action, evidence, outcomes' },
  { num: '010', title: 'IMPROVE', text: 'Review lessons, workflow changes' },
];

export default function AccountableLifecycleSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/70 border-b border-slate-700 flex flex-col gap-14 overflow-hidden"
    style={{backgroundImage:`url('/images/platform-media-operations-overview/bg (1).png')`,opacity:20}}>
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Accountable operations lifecycle
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Every consequential transition exposes responsibility, scope, evidence, state, and recovery.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {row1Steps.map((step) => (
            <div
              key={step.num}
              className="p-3 bg-slate-900 rounded-lg border border-slate-700 flex flex-col gap-2"
            >
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
              <span className="text-slate-50 text-xs font-bold font-['Space_Grotesk'] truncate">
                {step.title}
              </span>
              <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4 line-clamp-2">
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {row2Steps.map((step) => (
            <div
              key={step.num}
              className="p-3 bg-slate-900 rounded-lg border border-slate-700 flex flex-col gap-2"
            >
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
              <span className="text-slate-50 text-xs font-bold font-['Space_Grotesk'] truncate">
                {step.title}
              </span>
              <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-4 line-clamp-2">
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
