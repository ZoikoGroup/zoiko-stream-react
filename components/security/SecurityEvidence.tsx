import React from 'react';

export default function SecurityEvidence() {
  const evidenceCards = [
    {
      title: 'Current Public Evidence',
      description: 'Instant access to public certifications, security models, and compliance posture details.',
      linkText: 'View public inventory',
      imageSrc: '/images/security/publicevidence.png',
    },
    {
      title: 'Controlled Evidence',
      description: 'Requires verified workspace credentials and approved NDA workflows for SOC 2 Type II reports.',
      linkText: 'Request secure access',
      imageSrc: '/images/security/controlledevidence.png',
    },
    {
      title: 'Review Required',
      description: 'Items pending bi-annual revalidation cycle. High-integrity claims remain visible but flagged.',
      linkText: 'Track revalidation schedule',
      imageSrc: '/images/security/review.png',
    },
    {
      title: 'Not Publicly Established',
      description: 'Sensitive internal infrastructure controls and server network maps are strictly private.',
      linkText: 'Contact security desk',
      imageSrc: '/images/security/notpublicly.png',
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] md:right-[5%] top-[60%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-10%] md:left-[-5%] top-[-10%] bg-teal-400/10 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Security evidence governed by the Trust Center
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Trust Center owns the governed evidence inventory and access state. Evidence relationship never becomes decorative badge logic.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {evidenceCards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col bg-zinc-900 rounded-xl border border-gray-800 overflow-hidden group shadow-lg hover:border-gray-700 transition-colors"
            >
              {/* Card Image */}
              <div className="w-full h-36 relative overflow-hidden bg-zinc-800">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={card.imageSrc} 
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5 flex-grow">
                  {card.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-teal-400 hover:text-teal-300 text-xs font-bold font-['Space_Grotesk'] inline-flex items-center gap-1 transition-colors mt-auto w-fit"
                >
                  {card.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center w-full mt-4">
          <a 
            href="#" 
            className="px-8 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-lg text-slate-950 text-sm font-bold font-['Space_Grotesk'] shadow-md inline-flex items-center gap-2"
          >
            Visit Trust Center <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
