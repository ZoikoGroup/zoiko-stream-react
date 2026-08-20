const stateColumns = [
  {
    title: 'Availability',
    options: ['AVAILABLE', 'LIMITED', 'UNAVAILABLE', 'UNKNOWN'],
    active: 'AVAILABLE',
  },
  {
    title: 'Readiness',
    options: ['NOT STARTED', 'IN REVIEW', 'BLOCKED', 'READY', 'UNKNOWN'],
    active: 'READY',
  },
  {
    title: 'Authorization',
    options: ['PENDING', 'APPROVED', 'DENIED', 'EXPIRED'],
    active: 'APPROVED',
  },
  {
    title: 'Runtime',
    options: ['PLANNED', 'ACTIVE', 'STOPPING', 'ENDED'],
    active: 'ACTIVE',
  },
  {
    title: 'Health',
    options: ['NORMAL', 'DEGRADED', 'IMPACTED', 'RECOVERING'],
    active: 'NORMAL',
  },
  {
    title: 'Dependency',
    options: ['NORMAL', 'DEGRADED', 'UNAVAILABLE', 'UNKNOWN'],
    active: 'DEGRADED',
    activeColor: 'amber',
  },
  {
    title: 'Incident',
    options: ['NONE', 'INVESTIGATING', 'MITIGATING', 'RESOLVED'],
    active: 'NONE',
  },
  {
    title: 'Evidence',
    options: ['CURRENT', 'STALE', 'PARTIAL', 'CONFLICTED'],
    active: 'CURRENT',
  },
];

export default function StateArchitectureSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950/70 border-b border-slate-700 flex flex-col gap-14 overflow-hidden">
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Orthogonal state architecture
        </h2>
        <p className="text-slate-400 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Independent axes prevent false simplification.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {stateColumns.map((col) => (
          <div
            key={col.title}
            className="p-5 bg-slate-900 rounded-2xl border border-slate-700 flex flex-col gap-4"
          >
            <p className="text-slate-50 text-base font-bold font-['Space_Grotesk']">
              {col.title}
            </p>
            <div className="border-t border-slate-700" />
            <div className="flex flex-col gap-2">
              {col.options.map((opt) => {
                const isActive = opt === col.active;
                const isAmber = col.activeColor === 'amber' && isActive;
                return (
                  <div
                    key={opt}
                    className={`px-3 py-1.5 rounded-md flex justify-between items-center ${
                      isActive
                        ? isAmber
                          ? 'bg-amber-600/10 border border-slate-700'
                          : 'bg-teal-500/10 border border-teal-500'
                        : 'bg-slate-900 border border-transparent'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold font-['Space_Grotesk'] ${
                        isActive
                          ? isAmber
                            ? 'text-slate-400'
                            : 'text-teal-500'
                          : 'text-slate-400'
                      }`}
                    >
                      {opt}
                    </span>
                    {isActive && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isAmber ? 'bg-amber-600' : 'bg-teal-500'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="px-6 py-3 bg-slate-900 rounded-full border border-slate-700 inline-flex items-center gap-2">
          <span className="w-3 h-3 text-blue-500 border border-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold">
            i
          </span>
          <span className="text-slate-400 text-sm font-medium font-['Space_Grotesk']">
            Conflict Rule: If states do not align (e.g. Runtime is Active but Authorization is Pending), the pipeline alerts immediately.
          </span>
        </div>
      </div>
    </section>
  );
}
