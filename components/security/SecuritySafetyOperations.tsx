import React from 'react';

export default function SecuritySafetyOperations() {
  const cards = [
    {
      title: 'Responsible Disclosure',
      description: 'Report a potential vulnerability through the approved safe intake path. No sales qualification. No generic support triage.',
      linkText: 'Report a vulnerability',
      imageSrc: '/images/security/responsible.png',
    },
    {
      title: 'Security Advisories',
      description: 'Published security notices and their lifecycle. Route for advisory information without mirroring unofficial feeds.',
      linkText: 'View advisories',
      imageSrc: '/images/security/advisories.png',
    },
    {
      title: 'System Status',
      description: 'Live service health, incidents, and maintenance. Never embeds stale green state on the Security page.',
      linkText: 'View System status',
      imageSrc: '/images/security/systemstatus.png',
    },
  ];

  return (
    <section className="w-full bg-slate-950/90 border-b border-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
            Safety and operational actions always come first
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Responsible disclosure and System status always outrank sales for relevant intent.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 overflow-hidden group shadow-lg hover:border-gray-700 transition-colors"
            >
              {/* Card Image */}
              <div className="w-full h-44 relative overflow-hidden bg-zinc-800">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={card.imageSrc} 
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <h3 className="text-slate-100 text-xl font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-5 flex-grow">
                  {card.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] inline-flex items-center gap-1 transition-colors mt-auto w-fit"
                >
                  {card.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
