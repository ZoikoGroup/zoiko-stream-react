import React from 'react';

export default function ImplementationPathsSection() {
  const cards = [
    {
      title: 'API-first (Backend)',
      desc: 'Best for platform architects requiring bare REST primitives, granular telemetry, and custom player flows.',
      image: '/images/live-streaming-api/card-img-1.png',
      buttonText: 'View API Docs',
    },
    {
      title: 'SDK-assisted (Apps)',
      desc: 'Best for native application developers seeking ready-to-run UI components and wrapper classes.',
      image: '/images/live-streaming-api/card-img-2.png',
      buttonText: 'Browse SDKs',
    },
    {
      title: 'Sample App (POC)',
      desc: 'Best for immediate testing. Zero boilerplate stream player instances ready for instant local staging.',
      image: '/images/live-streaming-api/card-img-3.png',
      buttonText: 'Clone Template',
    },
    {
      title: 'Protocol-first (Broadcast)',
      desc: 'Best for traditional studios seeking RTMP to SRT transcoders mapping directly to standard grids.',
      image: '/images/live-streaming-api/card-img-4.png',
      buttonText: 'Explore Protocols',
    },
  ];

  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[797px] flex flex-col items-start bg-[#0a0f1a] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/implementation-bg.png"
          alt="" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute bg-[rgba(10,15,26,0.78)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] leading-[48px]">
            Choose your implementation path
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Pick the entry point that matches your team and timeline.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full items-stretch">
          
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#0a0f1a] border-[#232b3a] border-[1.5px] border-solid flex flex-[1_0_0] flex-col items-start overflow-hidden relative rounded-[12px] group hover:border-[#34d4ca] transition-colors">
              <div className="h-[160px] relative shrink-0 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] w-full flex-1">
                <h3 className="font-sora font-bold text-white text-[18px]">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.6] flex-1">
                  {card.desc}
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#232b3a] to-transparent my-1" />
                <button className="w-full border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[20px] py-[12px] rounded-[8px] hover:bg-white/5 transition-colors">
                  <span className="font-sora font-bold text-[#aab3c4] group-hover:text-white text-[14px] transition-colors">
                    {card.buttonText}
                  </span>
                </button>
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
