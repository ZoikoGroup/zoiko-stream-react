import React from 'react';

const nextCards = [
  {
    title: 'Quickstart',
    desc: 'The shortest path to a working stream.',
    btn: 'Start the Quickstart →',
  },
  {
    title: 'API Reference',
    desc: 'Exact endpoints, fields, and contracts.',
    btn: 'Open API Reference →',
  },
  {
    title: 'Developer support',
    desc: 'Direct technical help, no sales gate.',
    btn: 'Get Developer support →',
  },
];

export function ContinueFromWhereYouAreSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-zinc-950 text-slate-100 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Radial Teal Backdrop Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-400/20 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              CONTINUE FROM WHERE YOU ARE
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Continue with the right authoritative surface.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-[850px]">
            Each option states what you&apos;ll get next — no generic &quot;learn more.&quot;
          </p>
        </div>

        {/* 3 Authoritative Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {nextCards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col justify-between gap-6 shadow-xl"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-base font-bold">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-6">{card.desc}</p>
              </div>

              <div>
                <button className="w-full py-3 bg-zinc-100 rounded-xl text-zinc-900 font-semibold text-sm hover:bg-white transition-colors">
                  {card.btn}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-slate-950 font-bold text-base hover:opacity-95 transition-opacity shadow-md">
            Start building
          </button>
          <button className="px-7 py-3.5 rounded-xl border border-gray-800 text-stone-200 font-semibold text-base hover:border-white transition-colors">
            Search documentation
          </button>
        </div>
      </div>
    </section>
  );
}
