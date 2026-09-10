import React from 'react';

export default function SecurityOperational() {
  const cards = [
    {
      title: 'Monitoring & Incident Security',
      description: 'Continuous signal analysis mapping stream health anomalies, automated incident runbooks, and transparent public status metrics.',
      linkText: 'Service status panel',
      imageSrc: '/images/security/Incidentsecurity.png',
    },
    {
      title: 'Infrastructure & Resilience',
      description: 'Active-Active streaming failover setups. Backups deploy instantly across distinct geographic nodes if physical networks fluctuate.',
      linkText: 'Service Reliability details',
      imageSrc: '/images/security/resilience.png',
    },
    {
      title: 'Third-Party Security',
      description: 'Rigorous vendor assessments. Partner audits cover third-party data processing networks, verifying compliance with data sovereignty protocols.',
      linkText: 'Vetted Subprocessors list',
      imageSrc: '/images/security/thirdparty.png',
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
      
      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] bottom-[-10%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-5%] top-[-5%] bg-teal-400/10 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Operational security categories and infrastructure boundaries
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            How we protect network integrity, monitor transmission telemetry, and manage third-party supplier risks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col bg-zinc-900 rounded-2xl border border-gray-800 overflow-hidden group shadow-lg hover:border-gray-700 transition-colors"
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
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5 flex-grow">
                  {card.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-teal-500 hover:text-teal-400 text-xs font-bold font-['Space_Grotesk'] inline-flex items-center gap-1 transition-colors mt-auto w-fit"
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
