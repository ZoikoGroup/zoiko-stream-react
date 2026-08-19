import React from 'react';

export default function SafeguardingSection() {
  const cards = [
    {
      title: 'Music copyrights',
      desc: 'Coordinate compliance with CCLI, OneLicense, or public domain records seamlessly.',
      img: '/images/workship-detailed/image (28).png'
    },
    {
      title: 'Attendee privacy',
      desc: 'Configure custom overlays or camera directions to protect attendee identities.',
      img: '/images/workship-detailed/image (26).png'
    },
    {
      title: 'Minors protection',
      desc: "Apply strict access parameters or automatic blurring during children's worship blocks.",
      img: '/images/workship-detailed/image (27).png'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Rights and safeguarding responsibility, stated plainly
          </h2>
          <p className="text-gray-550 text-base sm:text-lg">
            We protect your space. Safeguarding is embedded directly inside our operational model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              <div className="h-40 rounded-[10px] overflow-hidden flex">
                <img 
                  className="w-full h-full object-cover" 
                  src={card.img} 
                  alt={`${card.title} screenshot`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-lg font-bold font-sans">
                  {card.title}
                </h3>
                <p className="text-gray-550 text-sm leading-relaxed">
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
