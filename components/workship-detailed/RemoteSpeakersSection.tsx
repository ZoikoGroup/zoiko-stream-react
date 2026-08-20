import React from 'react';

export default function RemoteSpeakersSection() {
  const cards = [
    {
      title: 'Contributor list',
      desc: 'Identify and invite external speakers, guests or choir leaders.',
      icon: '/images/workship-detailed/image (18).png'
    },
    {
      title: 'Contribution guides',
      desc: 'Automated, step-by-step connection setup instructions generated for guests.',
      icon: '/images/workship-detailed/image (20).png'
    },
    {
      title: 'Preflight test',
      desc: 'Run background tests of guest network and latency before showtime.',
      icon: '/images/workship-detailed/image (21).png'
    },
    {
      title: 'Multiple locations',
      desc: 'Coordinate multi-site services with synchronized video matrixing.',
      icon: '/images/workship-detailed/image (19).png'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-955 text-white border-t border-slate-900 transition-colors duration-200"
            style={{ backgroundImage: "url('/images/workship-detailed/image (19).png')" }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Bring in remote speakers, musicians, or additional locations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Connect sister congregations or traveling speakers seamlessly via our low-latency pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-8 bg-gray-900 rounded-xl border border-slate-800 flex flex-col gap-5 hover:border-slate-700 transition-colors"
            >
              <img 
                className="w-12 h-12 rounded-sm object-cover" 
                src={card.icon} 
                alt={`${card.title} icon`}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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
