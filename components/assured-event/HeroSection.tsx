import Link from 'next/link';

interface MonitorRow {
  label: string;
  state: string;
  variant: 'verified' | 'confirmed' | 'stable' | 'locked';
}

const monitorRows: MonitorRow[] = [
  { label: 'Dual-WAN Stream Path Alpha', state: 'VERIFIED', variant: 'verified' },
  { label: 'Dedicated Transcoder Ingest', state: 'CONFIRMED', variant: 'confirmed' },
  { label: 'Preflight Network Probing', state: 'STABLE', variant: 'stable' },
  { label: 'SAML SSO Gate Ready', state: 'LOCKED', variant: 'locked' },
];

const stateStyles: Record<MonitorRow['variant'], string> = {
  verified: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  confirmed: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  stable: 'bg-blue-500/10 outline-blue-500 text-blue-500',
  locked: 'bg-teal-500/10 outline-teal-500 text-teal-500',
};

const assuranceChips = ['99.99% SLA', 'Dual-WAN', 'Active Ops'];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 border-b border-gray-800 bg-cover bg-center bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.72), rgba(2, 6, 23, 0.82)), url('/images/assured-event/hero-bg.png')`,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left column */}
        <div className="flex-1 w-full flex flex-col items-start gap-6">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-500 bg-teal-500/10 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-500 text-xs font-bold uppercase tracking-wide">
              Our highest-assurance tier
            </span>
          </div>

          <h1 className="text-slate-100 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[1.1]">
            The highest-assurance path for events that cannot fail
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Active engineering supervision, dual-WAN venue audits, and dedicated failover cloud
            infrastructure. Assured Event converts downstream hope into strict operational proof.
          </p>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/talk-to-an-expert"
              className="px-6 py-3.5 rounded-[10px] bg-gradient-to-b from-teal-500 to-blue-500 text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
            >
              Discuss Assured Event
            </Link>
            <Link
              href="/plan-a-live-event"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 bg-slate-900/40 backdrop-blur-sm text-slate-100 text-base font-medium text-center transition-colors"
            >
              Start your event brief
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {assuranceChips.map((chip) => (
              <div
                key={chip}
                className="px-3 py-2 bg-zinc-900/80 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-teal-500 rounded-full" />
                <span className="text-slate-100 text-xs font-bold">{chip}</span>
              </div>
            ))}
          </div>

          <div className="w-full pt-4 border-t border-gray-800">
            <p className="text-slate-500 text-xs">
              Assurance is scoped, verified, and event-specific &mdash; not a blanket marketing
              guarantee.
            </p>
          </div>
        </div>

        {/* Right monitor card */}
        <div className="w-full lg:w-[540px] shrink-0 p-6 bg-zinc-900/95 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <h2 className="text-slate-100 text-xs font-bold font-mono tracking-wide">
                ACTIVE ASSURANCE MONITOR
              </h2>
            </div>
            <span className="text-slate-500 text-[10px] font-mono">ROLE: ASSURED_DESK</span>
          </div>

          <div className="w-full flex flex-col gap-3">
            {monitorRows.map((row) => (
              <div
                key={row.label}
                className="w-full p-3 bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-3"
              >
                <span className="text-slate-100 text-xs">{row.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono shrink-0 ${stateStyles[row.variant]}`}
                >
                  {row.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
