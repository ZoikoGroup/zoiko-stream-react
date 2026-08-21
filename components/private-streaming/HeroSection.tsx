import Link from 'next/link';

interface ControlRow {
  label: string;
  value: string;
  state: string;
  variant: 'secure' | 'pending' | 'ready';
}

const controlRows: ControlRow[] = [
  {
    label: 'ACCESS GATEWAY',
    value: 'SAML 2.0 Identity Assertion',
    state: 'SECURE',
    variant: 'secure',
  },
  {
    label: 'ACTIVE WINDOW',
    value: '14:00 - 18:00 UTC (Time-Locked)',
    state: 'PENDING',
    variant: 'pending',
  },
  {
    label: 'COMPLIANCE MATRIX',
    value: 'Accessibility Subtitles & Captions',
    state: 'READY',
    variant: 'ready',
  },
];

const stateStyles: Record<ControlRow['variant'], string> = {
  secure: 'bg-emerald-500/10 text-emerald-500',
  pending: 'bg-orange-300/10 text-orange-300',
  ready: 'bg-emerald-500/10 text-emerald-500',
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.55), rgba(9, 9, 11, 0.55)), url('/images/private-streaming/hero-bg.png')`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[200px] top-[100px] w-[700px] h-[500px] rounded-full blur-2xl bg-gradient-to-b from-teal-400/10 to-blue-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[900px] top-[200px] w-[600px] h-[500px] rounded-full blur-2xl bg-gradient-to-b from-blue-500/10 to-teal-400/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 xl:gap-14">
        <div className="flex-1 w-full flex flex-col items-start gap-6 lg:gap-7">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wide">
              Private streaming
            </span>
          </div>

          <h1 className="text-slate-100 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[1.1]">
            Create a closed viewing room for the people who should be there.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Plan a private live-event room with explicit membership, credentialed access, viewing
            windows, recovery, accessibility, and replay decisions &mdash; all confirmed against the
            event&apos;s current setup.
          </p>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#"
              className="px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
            >
              Start your event brief
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-slate-200 text-slate-100 text-base font-medium text-center transition-colors"
            >
              Talk to an event expert
            </Link>
          </div>

          <p className="text-slate-500 text-xs leading-5">
            Closed, credentialed rooms. Exact access methods and availability are confirmed during
            planning.
          </p>
        </div>

        <div className="w-full lg:w-[500px] shrink-0 p-5 bg-zinc-900/80 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <div className="w-full pb-3 border-b border-gray-800 flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <h2 className="text-slate-100 text-xs font-bold font-mono">PRIVATE ROOM CONTROL</h2>
            </div>
            <span className="text-slate-500 text-xs font-mono">VERIFIED GATES ACTIVE</span>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            {controlRows.map((row) => (
              <div
                key={row.label}
                className="w-full p-3 bg-gray-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-3"
              >
                <div className="flex flex-col gap-[3px] min-w-0">
                  <span className="text-slate-500 text-[9px] font-mono">{row.label}</span>
                  <span className="text-slate-100 text-xs font-medium">{row.value}</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-sm text-xs font-bold uppercase shrink-0 ${stateStyles[row.variant]}`}
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
