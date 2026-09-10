import React from 'react';

export default function SecurityDataProtection() {
  const cards = [
    {
      title: 'Data Security Relationship',
      description: 'Every byte of in-transit live signal uses strict TLS 1.3 tunnels. Storage archiving uses sovereign AES-256 blocks with custom customer-controlled key retention profiles.',
      linkText: 'Open Data Protection',
      linkColor: 'text-teal-500 hover:text-teal-400',
      imageSrc: '/images/security/Securityrelationship.png',
    },
    {
      title: 'Secure Development & Release Assurance',
      description: 'Release builds require automated unit testing, dependency vulnerability audits, and mandatory peer security approval prior to container staging.',
      linkText: 'Review evidence',
      linkColor: 'text-blue-500 hover:text-blue-400',
      imageSrc: '/images/security/securedevelopment.png',
    },
  ];

  return (
    <section className="relative w-full bg-[#060B14] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-transparent to-[#060B14] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-transparent to-[#060B14] z-10" />
        <img 
          src="/images/security/Architecture.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Protecting data through governed development and testing
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Rest assured your live video data passes through tested, auditable continuous deployment gates.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col bg-[#11141c] rounded-2xl border border-white/10 overflow-hidden group shadow-lg hover:border-white/20 transition-colors"
            >
              {/* Card Image */}
              <div className="w-full aspect-[21/9] relative overflow-hidden bg-[#0A101C]/50 border-b border-white/5">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={card.imageSrc} 
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-sm md:text-xs font-normal font-['Space_Grotesk'] leading-relaxed flex-grow">
                  {card.description}
                </p>
                
                <a 
                  href="#" 
                  className={`${card.linkColor} text-sm md:text-xs font-bold font-['Space_Grotesk'] inline-flex items-center gap-1.5 transition-colors mt-2 w-fit`}
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
