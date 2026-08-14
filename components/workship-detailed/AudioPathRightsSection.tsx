import React from 'react';

export default function AudioPathRightsSection() {
  const cards = [
    {
      title: 'Spoken word',
      desc: 'Dedicated pulpit lapels, handheld mics, and priest/pastor voice feeds.',
      bg: '/images/workship-detailed/image (14).png'
    },
    {
      title: 'Music & ensemble audio',
      desc: 'Full instrumental setups, choir overheads, and digital piano lines.',
      bg: '/images/workship-detailed/image (15).png'
    },
    {
      title: 'Remote guest audio',
      desc: 'Latency-matched loops for remote singers or digital prayer segments.',
      bg: '/images/workship-detailed/image (16).png'
    },
    {
      title: 'Recording/replay rights',
      desc: 'Confirm CCLI or equivalent broadcast licenses before going live.',
      bg: '/images/workship-detailed/image (17).png'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Plan the audio path, and know where rights responsibility sits
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg">
            Capture clear vocals, full musical worship, and ensure proper stream licensing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative h-60 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-gray-850 flex flex-col justify-end p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Card background image and overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-35 blur-[1px]"
                style={{ backgroundImage: `url('${card.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-350 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
