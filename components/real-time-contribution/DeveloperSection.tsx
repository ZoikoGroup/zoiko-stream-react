import React from 'react';

export default function DeveloperSection() {
  const cards = [
    {
      title: 'Video APIs',
      description: 'Create and configure contribution sessions programmatically.',
      image: '/images/real-time-contribution/dev-card-1.png'
    },
    {
      title: 'SDKs',
      description: 'Use maintained client and server libraries for contribution workflows.',
      image: '/images/real-time-contribution/dev-card-2.png'
    },
    {
      title: 'Media Protocols',
      description: 'Choose the right connection and transport method for your source.',
      image: '/images/real-time-contribution/dev-card-3.png'
    },
    {
      title: 'Developer Docs',
      description: 'Authentication, events, errors, limits, and changelog.',
      image: '/images/real-time-contribution/dev-card-4.png',
      isZoomed: true
    }
  ];

  return (
    <section className="bg-[#0a0f1a] flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[32px] md:text-[38px] leading-[1.2]">
          Build with real-time contribution
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Route to maintained developer authorities for programmatic contribution integration.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] relative w-full max-w-[1216px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#10151e]/80 border border-[#232b3a] flex flex-col gap-[16px] overflow-hidden p-[20px] rounded-[12px] hover:bg-[#232b3a]/50 transition-colors cursor-pointer group">
            
            {/* Card Image Header */}
            <div className="h-[110px] relative w-full rounded-[6px] overflow-hidden">
              <img 
                alt="" 
                className={`absolute ${card.isZoomed ? 'w-[141.87%] h-[138.81%] max-w-none left-[-23.42%] top-[-19.37%]' : 'inset-0 w-full h-full object-cover pointer-events-none'} transition-transform duration-500 group-hover:scale-105`} 
                src={card.image} 
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-[4px] items-start w-full">
              <h3 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[16px]">
                {card.title}
              </h3>
              <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#aab3c4] text-[13px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-center w-full max-w-[1216px] mx-auto mt-4">
        <button className="border border-[#aab3c4] px-[28px] py-[14px] rounded-[10px] hover:bg-[#aab3c4]/10 transition-colors">
          <span className="font-['Space_Grotesk'] font-medium text-[#eef1f6] text-[15px]">
            Explore developer documentation
          </span>
        </button>
      </div>

    </section>
  );
}
