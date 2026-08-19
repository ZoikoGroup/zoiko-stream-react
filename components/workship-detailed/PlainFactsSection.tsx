import React from 'react';

export default function PlainFactsSection() {
  const facts = [
    {
      title: 'Audience access protection',
      desc: 'Private invite logic guarantees only your approved list enters.'
    },
    {
      title: 'Military-grade encryption',
      desc: 'All broadcast streams and chat logs are fully encrypted in transit.'
    },
    {
      title: '99.9% uptime assurance',
      desc: 'Dual backup CDNs keep your service online regardless of peak spikes.'
    },
    {
      title: 'Total data privacy',
      desc: "We never sell, analyze, or share community members' active metrics."
    },
    {
      title: 'CCLI alignment helper',
      desc: 'Automated music logging modules for clean license reporting.'
    },
    {
      title: 'Dedicated operator backup',
      desc: 'Real-time support technicians ready to assist during live hours.'
    },
    {
      title: 'Accessibility standards',
      desc: 'Fully WCAG compliant player components out of the box.'
    },
    {
      title: 'Clean storage policies',
      desc: 'Replay files pruned automatically matching your clear specifications.'
    }
  ];

  return (
    <section className="relative w-full py-20 bg-zinc-950 text-white overflow-hidden transition-colors duration-200 border-t border-slate-900">
      
      {/* Background image underlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 blur-[2px] pointer-events-none select-none"
        style={{ backgroundImage: "url('/images/workship-detailed/image (7).png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            What we can tell you plainly
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {facts.map((fact, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900/60 rounded-xl border border-slate-800 backdrop-blur-sm flex flex-col justify-center items-start gap-3 hover:border-slate-700 transition-colors"
            >
              <h4 className="text-teal-400 text-base font-bold font-sans">
                {fact.title}
              </h4>
              <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
