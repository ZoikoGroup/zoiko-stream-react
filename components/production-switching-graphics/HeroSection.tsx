import Link from 'next/link';

interface SourceChip {
  tag: string;
  label: string;
  meta: string;
  state: 'ready' | 'verifying';
}

const sourceChips: SourceChip[] = [
  { tag: 'CAM 1', label: 'Wide Stage', meta: 'READY · 1080p', state: 'ready' },
  { tag: 'CAM 2', label: 'Presenter', meta: 'READY · 1080p', state: 'ready' },
  { tag: 'REMOTE', label: 'Paris Guest', meta: 'VERIFYING · WebRTC', state: 'verifying' },
];

const chipStyles = {
  ready: { outline: 'outline-emerald-500', tag: 'text-emerald-500' },
  verifying: { outline: 'outline-orange-300', tag: 'text-orange-300' },
} as const;

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-zinc-950 border-b border-gray-800 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.2), rgba(9, 9, 11, 0.2)), url('/images/production-switching-graphics/hero-bg.png')`,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 xl:gap-14">
        <div className="flex-1 min-w-0 w-full flex flex-col items-start gap-6">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-wide">
              Production, Switching &amp; Graphics
            </span>
          </div>

          <h1 className="text-slate-100 text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight xl:leading-[66px]">
            Turn prepared sources into a controlled live program.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-7">
            Plan cameras and sources, show cues, switching responsibilities, layouts, graphics, and
            approved assets around one versioned production run-of-show &mdash; with changes and
            blockers visible before go-live.
          </p>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/plan-a-live-event"
              className="px-6 py-3.5 rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] text-slate-950 text-base font-bold text-center hover:opacity-90 transition-opacity"
            >
              Plan a live event
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-500 hover:outline-slate-300 text-slate-100 text-base font-medium text-center transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* Live operator view — Figma pins this to 640px, which only leaves a sane
            text column at the 1440 desktop width; below that it shares the row. */}
        <div className="w-full lg:flex-1 lg:min-w-0 xl:w-[640px] xl:flex-none p-5 bg-zinc-900/95 backdrop-blur-md rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4">
          <div className="w-full pb-3 border-b border-gray-800 flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <h2 className="text-slate-100 text-xs font-bold font-mono">LIVE OPERATOR VIEW</h2>
            </div>
            <span className="text-slate-500 text-xs font-mono">v3.4.1 - ACTIVE</span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="text-slate-400 text-xs font-bold">INPUT SOURCE READINESS</span>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
              {sourceChips.map((chip) => (
                <div
                  key={chip.tag}
                  className={`p-2 bg-gray-900 rounded-md outline outline-1 outline-offset-[-1px] flex items-center justify-between gap-1.5 ${chipStyles[chip.state].outline}`}
                >
                  <span className={`text-[10px] font-mono shrink-0 ${chipStyles[chip.state].tag}`}>
                    {chip.tag}
                  </span>
                  <span className="text-slate-100 text-xs font-bold truncate">{chip.label}</span>
                  <span className="text-slate-500 text-[6px] font-mono shrink-0">{chip.meta}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-blue-500 text-xs font-mono">PREVIEW</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/production-switching-graphics/hero-preview.png"
                alt="Preview monitor showing the next segment"
                className="w-full h-36 object-cover rounded-lg border-[1.5px] border-blue-500"
              />
              <span className="text-slate-400 text-xs">Next: Segment B - Panel Intro</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-red-500 text-xs font-mono">PROGRAM</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/production-switching-graphics/hero-program.png"
                alt="Program output currently on air"
                className="w-full h-36 object-cover rounded-lg border-[1.5px] border-red-500"
              />
              <span className="text-slate-100 text-xs">Active: Segment A - Keynote</span>
            </div>
          </div>

          <div className="w-full pt-2 border-t border-gray-800 flex flex-wrap justify-between items-center gap-2">
            <span className="text-slate-500 text-sm">Illustrative production view</span>
            <span className="text-teal-400 text-xs font-mono">SWITCH LOCK ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
