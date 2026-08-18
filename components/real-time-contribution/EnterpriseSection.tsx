import React from 'react';

export default function EnterpriseSection() {
  const cards = [
    {
      title: 'Enterprise operations',
      description: 'For teams evaluating multi-location contribution, security, procurement, or organizational workflows.',
      image: '/images/real-time-contribution/enterprise-card-1.png',
      buttonText: 'Talk to an expert'
    },
    {
      title: 'Managed Live Events',
      description: 'For professionally managed event contribution and production logistics.',
      image: '/images/real-time-contribution/enterprise-card-2.png',
      buttonText: 'Plan a live event'
    }
  ];

  return (
    <section className="bg-white flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Background Graphic */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full opacity-40 z-0" 
        src="/images/real-time-contribution/enterprise-bg.png" 
      />

      {/* Header */}
      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[32px] md:text-[38px] leading-[1.2]">
          Enterprise architecture and managed event production
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Complex contribution architectures, security evaluation, and managed event production have dedicated paths.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row gap-[24px] relative z-10 w-full max-w-[1216px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border border-[#e1e6eb] flex flex-[1_0_0] flex-col gap-[24px] items-start p-[32px] rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
            
            {/* Card Image */}
            <div className="h-[180px] w-full rounded-[8px] overflow-hidden relative">
              <img 
                alt="" 
                className="absolute inset-0 object-cover w-full h-full pointer-events-none transition-transform duration-500 hover:scale-105" 
                src={card.image} 
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-[12px] items-start w-full flex-1">
              <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[22px] leading-[1.2]">
                {card.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[14px] leading-[22px]">
                {card.description}
              </p>
            </div>

            {/* Action Button */}
            <button className="border border-[#4f5e74] px-[26px] py-[14px] rounded-[10px] hover:bg-[#0f1b2d] hover:border-[#0f1b2d] hover:text-white transition-colors group">
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] group-hover:text-white text-[15px] transition-colors">
                {card.buttonText}
              </span>
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}
