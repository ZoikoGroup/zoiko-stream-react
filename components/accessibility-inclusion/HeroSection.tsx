import Link from 'next/link';

type ReadinessState = 'VERIFIED' | 'PLANNED' | 'CHANGED' | 'LIMITATION' | 'UNAVAILABLE';

interface MonitorRow {
  label: string;
  state: ReadinessState;
}

const monitorRows: MonitorRow[] = [
  { label: 'Keyboard Navigation', state: 'VERIFIED' },
  { label: 'Sign Language Overlay', state: 'PLANNED' },
  { label: 'Live Captions Stream', state: 'CHANGED' },
  { label: 'Complex SVG Alternatives', state: 'LIMITATION' },
  { label: 'Real-Time Braille Stream', state: 'UNAVAILABLE' },
];

const stateStyles: Record<ReadinessState, string> = {
  VERIFIED: 'bg-emerald-500/10 outline-emerald-500 text-emerald-500',
  PLANNED: 'bg-blue-500/10 outline-blue-500 text-blue-500',
  CHANGED: 'bg-amber-500/10 outline-amber-500 text-amber-500',
  LIMITATION: 'bg-red-500/10 outline-red-500 text-red-500',
  UNAVAILABLE: 'bg-gray-500/10 outline-gray-500 text-gray-500',
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-900 border-b border-gray-800 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.2), rgba(23, 23, 23, 0.2)), url('/images/accessibility-inclusion/hero-bg.png')`,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full flex flex-col items-start gap-6">
          <div className="px-2.5 py-1 bg-teal-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-500 inline-flex items-center">
            <span className="text-teal-500 text-xs font-bold uppercase tracking-wide">
              Accessibility &amp; Inclusion
            </span>
          </div>

          <h1 className="text-slate-100 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[1.1]">
            Plan an event more people can access and understand
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Define accessibility requirements early, make available viewer options easy to use,
            verify what matters before go-live, and keep limitations and recovery paths visible when
            conditions change.
          </p>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/plan-a-live-event"
              className="px-6 py-3.5 rounded-[10px] bg-gradient-to-b from-teal-400 to-blue-500 text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
            >
              Plan accessibility
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 text-slate-100 text-base font-medium text-center transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[540px] shrink-0 p-6 bg-zinc-900/95 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full" />
              <h2 className="text-slate-100 text-xs font-bold">ACCESSIBILITY READINESS MONITOR</h2>
            </div>
            <span className="text-slate-500 text-[10px]">VERIFICATION: V2.4</span>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            {monitorRows.map((row) => (
              <div
                key={row.label}
                className="w-full p-3 bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-3"
              >
                <span className="text-slate-100 text-xs">{row.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] text-[10px] font-bold shrink-0 ${stateStyles[row.state]}`}
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
