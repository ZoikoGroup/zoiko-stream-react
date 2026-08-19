import React from 'react';

export default function RecoverySection() {
  const cards = [
    {
      title: 'State monitoring',
      description: 'Real-time contribution state is observable through scoped diagnostics and operational status.',
      image: '/images/real-time-contribution/recovery-card-1.png'
    },
    {
      title: 'Incident & recovery',
      description: 'Scoped notices, diagnostics, reconnection, fallback, and support with clear ownership.',
      image: '/images/real-time-contribution/recovery-card-2.png'
    },
    {
      title: 'Evidence & audit',
      description: 'Every operational claim resolves to source, owner, scope, and review date.',
      image: '/images/real-time-contribution/recovery-card-3.png'
    }
  ];

  return (
    <section className="bg-white flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Background Image */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full opacity-50 z-0" 
        src="/images/real-time-contribution/recovery-bg.png" 
      />

      {/* Header */}
      <div className="flex flex-col gap-[12px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[32px] md:text-[38px] leading-[1.2]">
          Observable state and safe recovery
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Every contribution state is observable. Recovery preserves known-good dimensions without resetting identity, permissions, or completed readiness.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] relative z-10 w-full max-w-[1216px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[14px] shadow-[0_4px_14px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow">
            
            {/* Card Image Header */}
            <div className="h-[224px] relative w-full overflow-hidden">
              <img 
                alt="" 
                className="absolute inset-0 object-cover w-full h-full pointer-events-none transition-transform duration-500 hover:scale-105" 
                src={card.image} 
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-[14px] items-start p-[24px] w-full min-h-[160px]">
              <div className="flex gap-[10px] items-center">
                <img alt="" src="/images/real-time-contribution/ellipse-dark.svg" className="w-[7px] h-[7px] opacity-80" />
                <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[17px]">
                  {card.title}
                </h3>
              </div>
              <p className="font-['Space_Grotesk'] font-normal leading-[22px] text-[#4f5e74] text-[14px]">
                {card.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
