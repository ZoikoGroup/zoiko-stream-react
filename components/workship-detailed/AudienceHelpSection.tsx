import React from 'react';

export default function AudienceHelpSection() {
  const cards = [
    {
      title: 'Open / public viewing',
      desc: 'Available to anyone via direct link, embed, or searchable directories.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-405 border-none'
    },
    {
      title: 'Private / invite-controlled',
      desc: 'Tokenized links sent directly to shut-ins, home-bound or traveling members.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-405 border-none'
    },
    {
      title: 'Ticketed / entitled',
      desc: 'Exclusive access structured for specific workshops, retreats or training.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-405 border-none'
    },
    {
      title: 'Organization-only',
      desc: 'Restricted strictly to staff, volunteers, or internal administrative teams.',
      status: 'Pending',
      statusColor: 'bg-slate-500/10 text-slate-500 border-none'
    },
    {
      title: 'Unsure / assistance needed',
      desc: 'Set up the basic intent and review configuration with an event advisor.',
      status: 'Draft',
      statusColor: 'bg-slate-500/10 text-slate-550 border-none'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Content & List */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          
          <div className="flex flex-col gap-4">
            <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Decide who can watch, and how they get help
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Worship events demand specific boundary choices to protect sacred spaces while reaching those who depend on them.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 rounded-xl border border-slate-205 flex items-center justify-between gap-4 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 shrink-0" />
                  <div className="flex flex-col gap-1 text-left">
                    <h4 className="text-zinc-900 text-lg font-bold leading-tight font-sans">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <span className={`px-3 py-1 text-xs font-semibold rounded-sm shrink-0 uppercase tracking-wider ${card.statusColor}`}>
                  {card.status}
                </span>

              </div>
            ))}
          </div>

        </div>

        {/* Right Side Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <img 
            className="w-full max-w-[526px] aspect-[526/765] object-cover rounded-3xl shadow-xl border border-slate-200" 
            src="/images/workship-detailed/image (12).png" 
            alt="Worship service live stream audience dashboard"
          />
        </div>

      </div>
    </section>
  );
}
