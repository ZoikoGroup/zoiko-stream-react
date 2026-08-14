import React from 'react';

export default function ArchiveRetentionSection() {
  const cards = [
    {
      title: 'Live only',
      desc: 'Transmit without recording to protect private sensitive community moments.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-400'
    },
    {
      title: 'Auto recording',
      desc: 'Securely write high-definition broadcast files directly to localized secure cloud slots.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-400'
    },
    {
      title: 'Processing & trimming',
      desc: 'Trim silence or off-schedule audio before releasing replays to directories.',
      status: 'Pending',
      statusColor: 'bg-slate-500/10 text-slate-500 dark:text-slate-400'
    },
    {
      title: 'Replay available',
      desc: 'Specify if and how community members can watch past service recordings.',
      status: 'Verified',
      statusColor: 'bg-emerald-500/10 text-emerald-400'
    },
    {
      title: 'Archive & retention',
      desc: 'Set automatic retention policies to auto-prune or secure archive events.',
      status: 'Draft',
      statusColor: 'bg-slate-500/10 text-slate-500 dark:text-slate-400'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-950 dark:bg-black text-white border-t border-slate-900 transition-colors duration-200"
            style={{ backgroundImage: "url('/images/workship-detailed/image (25).png')" }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Separate decisions for live, recording, replay, and retention
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Control the broadcast lifecycle and retain record memories with structured permissions.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gray-900 dark:bg-zinc-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors hover:border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-white text-lg font-bold font-sans">
                    {card.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
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
    </section>
  );
}
