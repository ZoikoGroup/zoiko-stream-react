const row1Steps = [
  {
    num: '01',
    title: 'Propose',
    desc: 'Action label, target, scope, reason, expected impact',
  },
  {
    num: '02',
    title: 'Validate',
    desc: 'Current state, prerequisites, conflict checks, dependencies',
  },
  {
    num: '03',
    title: 'Authorize',
    desc: 'Required role/approver, policy basis, separation of duties',
  },
  {
    num: '04',
    title: 'Confirm',
    desc: 'Plain-language summary of what will and will not happen',
  },
];

const row2Steps = [
  {
    num: '05',
    title: 'Execute',
    desc: 'Operation/change reference, idempotency semantics',
  },
  {
    num: '06',
    title: 'Verify',
    desc: 'Observed outcome, evidence source, affected scope',
  },
  {
    num: '07',
    title: 'Recover',
    desc: 'Rollback/alternative/support if outcome failed or unknown',
  },
  {
    num: '08',
    title: 'Record',
    desc: 'Actor, authority, before/after, evidence, outcome',
  },
];

export default function ControlledInterventionSection() {
  return (
    <section
      className="relative w-full px-4  bg-white sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden"
      
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Controlled intervention
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Observation and intervention are intentionally separate
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {row1Steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col gap-3 shadow-sm"
            >
              <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {step.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {row2Steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col gap-3 shadow-sm"
            >
              <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {step.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 bg-slate-50 rounded-lg border border-gray-200/20 flex items-center gap-3">
        <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold shrink-0">
          !
        </span>
        <p className="text-slate-900 text-sm font-medium font-['Space_Grotesk']">
          A user should never mistake seeing a problem for the system changing it. All actions require validated intent boundaries.
        </p>
      </div>
    </section>
  );
}
