import Link from 'next/link';

type GateState = 'CONNECTED' | 'VALIDATED' | 'STANDBY' | 'STABLE';

interface GateRow {
  label: string;
  state: GateState;
}

const gateRows: GateRow[] = [
  { label: 'SSO / Org Identity', state: 'CONNECTED' },
  { label: 'Ticket API Sync', state: 'VALIDATED' },
  { label: 'Recovery Gateway', state: 'STANDBY' },
  { label: 'Credential Handshake', state: 'STABLE' },
];

const stateStyles: Record<GateState, string> = {
  CONNECTED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  VALIDATED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  STANDBY: 'bg-orange-300/10 outline-orange-300 text-orange-300',
  STABLE: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-20 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.18), rgba(9, 9, 11, 0.18)), url('/images/secure-audience-access/hero-bg.png')`,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 min-w-0 w-full lg:max-w-[620px] flex flex-col items-start gap-8">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex items-start">
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wide">
              Secure Audience Access
            </span>
          </div>

          <div className="w-full flex flex-col gap-4">
            <h1 className="text-white text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[74px]">
              Give the right audience a clear way in.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-7">
              Plan invite-only or ticketed viewing with explicit audience rules, access windows,
              recovery paths, and ownership across your event team and approved access systems.
            </p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/plan-a-live-event"
              className="px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
            >
              Plan a live event
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 text-white text-base font-bold text-center transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* Access control center */}
        <div className="w-full lg:flex-1 lg:min-w-0 xl:w-[520px] xl:flex-none p-6 sm:p-7 bg-gray-900/80 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-slate-800 backdrop-blur-md flex flex-col gap-5">
          <div className="w-full flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-base font-bold">Access Control Center</h2>
              <span className="text-slate-500 text-xs font-mono">AUDIENCE ROUTING ENGINE v2.0</span>
            </div>
            <div className="px-2.5 py-1 bg-red-500/10 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span className="text-red-500 text-xs font-bold font-mono">MONITORING ACTIVE</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-800/20 rounded-lg flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] font-mono">ACTIVE VIEWERS</span>
              <span className="text-white text-xl font-bold">14,805</span>
            </div>
            <div className="p-3 bg-slate-800/20 rounded-lg flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] font-mono">AUTH ATTEMPTS</span>
              <span className="text-white text-xl font-bold">99.94% OK</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            {gateRows.map((row) => (
              <div
                key={row.label}
                className="w-full p-3 bg-slate-800/20 rounded-lg flex justify-between items-center gap-3"
              >
                <span className="text-white text-xs font-medium">{row.label}</span>
                <span
                  className={`px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold font-mono shrink-0 ${stateStyles[row.state]}`}
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
