import React from 'react';

export default function ReadinessIndicatorsSection() {
  const indicators = [
    { name: 'Service details confirmed', status: 'Verified', color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'Camera and audio source verified', status: 'Verified', color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'CCLI Streaming License logged', status: 'Verified', color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'Active-event support contact assigned', status: 'Verified', color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'Local internet stability backup verified', status: 'Draft', color: 'bg-slate-500/10 text-slate-500 dark:text-slate-400' },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-950 dark:bg-black text-white border-t border-slate-900 transition-colors duration-200"
            style={{ backgroundImage: "url('/images/workship-detailed/image (29).png')" }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Confidence built on preparation, not promises
          </h2>
          <p className="text-slate-450 text-base sm:text-lg">
            Check alignment indicators across all streams to guarantee live stream health.
          </p>
        </div>

        <div className="w-full bg-gray-900 dark:bg-zinc-955 rounded-2xl border border-slate-800 flex flex-col overflow-hidden">
          {indicators.map((item, idx) => (
            <div 
              key={idx}
              className={`px-6 py-4.5 flex justify-between items-center gap-4 transition-colors hover:bg-gray-800/40 ${
                idx < indicators.length - 1 ? 'border-b border-slate-800' : ''
              }`}
            >
              <span className="text-white text-sm font-medium">{item.name}</span>
              <span className={`px-3 py-1 text-xs font-semibold rounded-sm shrink-0 uppercase tracking-wider ${item.color}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
