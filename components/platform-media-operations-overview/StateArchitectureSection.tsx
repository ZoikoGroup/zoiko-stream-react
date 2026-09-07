import { ChevronDown } from 'lucide-react';

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
    options: ['PENDING', 'APPROVED', 'DENIED', 'EXPIRED', 'UNKNOWN'],
    active: 'APPROVED',
  },
  {
    title: 'Runtime',
    options: ['PLANNED', 'ACTIVE', 'STOPPING', 'FAILED'],
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
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-[#070C18] border-b border-slate-800/80 flex flex-col gap-12 overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Orthogonal state architecture
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal leading-7 font-['Space_Grotesk']">
          Independent axes prevent false simplification.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {stateColumns.map((col) => (
          <div
            key={col.title}
            className="p-5 bg-[#0D1527]/90 rounded-2xl border border-slate-800/80 flex flex-col gap-4 shadow-xl backdrop-blur-sm"
          >
            <p className="text-slate-100 text-sm font-bold tracking-wide font-['Space_Grotesk']">
              {col.title}
            </p>
            <div className="flex flex-col gap-2">
              {col.options.map((opt) => {
                const isActive = opt === col.active;
                const isAmber = col.activeColor === 'amber' && isActive;
                return (
                  <div
                    key={opt}
                    className={`px-3.5 py-2 rounded-lg flex justify-between items-center transition-all ${
                      isActive
                        ? isAmber
                          ? 'bg-amber-950/40 border border-amber-500/80 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                          : 'bg-[#062C2E] border border-teal-400/90 text-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.15)]'
                        : 'bg-[#09101F]/60 border border-transparent text-slate-500 hover:text-slate-400'
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider font-['Space_Grotesk']">
                      {opt}
                    </span>
                    {isActive && (
                      <ChevronDown className={`w-3.5 h-3.5 ${isAmber ? 'text-amber-400' : 'text-teal-400'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex justify-center mt-2">
        <div className="px-6 py-3 bg-[#0B1528]/90 rounded-full border border-blue-500/30 shadow-lg inline-flex items-center gap-3 max-w-full text-center">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="text-slate-300 text-xs sm:text-sm font-medium font-['Space_Grotesk']">
            <strong className="text-blue-400 font-semibold">Conflict Rule:</strong> If states do not align (e.g. Runtime is Active but Authorization is Pending), the pipeline alerts immediately.
          </span>
        </div>
      </div>
    </section>
  );
}
