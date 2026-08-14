import React from 'react';

export default function RegularServicesToolsSection() {
  const cards = [
    {
      title: 'Service profiles',
      desc: "Save specific configs for 'Sunday Liturgy', 'Youth Group', or 'Choir Practice'.",
      bg: '/images/workship-detailed/image (30).png'
    },
    {
      title: 'Automated schedule',
      desc: 'Link directly with digital church calendars to auto-arm stream states.',
      bg: '/images/workship-detailed/image (31).png'
    },
    {
      title: 'Post-event review',
      desc: 'Gain helpful, secure analytics detailing viewer engagement and latency logs.',
      bg: '/images/workship-detailed/image (32).png'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Operational tools for regular services
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg">
            Carry forward your templates smoothly week after week without complex re-configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative p-8 bg-slate-50 dark:bg-zinc-955 rounded-xl border border-slate-200 dark:border-gray-850 flex flex-col gap-4 hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Background image & gradient overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                style={{ backgroundImage: `url('${card.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-80 pointer-events-none" />

              <h3 className="relative z-10 text-white dark:text-white text-xl font-bold font-sans">
                {card.title}
              </h3>
              <p className="relative z-10 text-white text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
