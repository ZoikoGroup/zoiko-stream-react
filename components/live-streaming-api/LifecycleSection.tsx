import React from 'react';

export default function LifecycleSection() {
  const steps = [
    {
      title: '1. CREATE',
      desc: <>Initialize endpoint<br/>via API post<br/>request</>,
      icon: '/images/live-streaming-api/plus-circle.svg',
      isActive: true,
    },
    {
      title: '2. CONNECT',
      desc: <>Handoff ingest<br/>tokens to software<br/>encoder</>,
      icon: '/images/live-streaming-api/radio-tower.svg',
      isActive: false,
    },
    {
      title: '3. LIVE',
      desc: <>Real-time ingest<br/>goes active<br/>globally</>,
      icon: '/images/live-streaming-api/airplay.svg',
      isActive: false,
    },
    {
      title: '4. PLAYBACK',
      desc: <>Low-latency edge<br/>delivery to viewers</>,
      icon: '/images/live-streaming-api/play-circle.svg',
      isActive: false,
    },
    {
      title: '5. END / ASSET',
      desc: <>Auto-convert stream into archival VOD</>,
      icon: '/images/live-streaming-api/archive.svg',
      isActive: false,
    },
  ];

  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[554px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/live-streaming-api/light-topo-bg.png"
          alt="" 
          className="absolute inset-0 max-w-none object-cover size-full" 
        />
        <div className="absolute bottom-[-118px] right-[-171px] w-[520px] h-[520px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-2.svg" />
        </div>
        <div className="absolute left-[-186px] top-[-85px] w-[420px] h-[420px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-1.svg" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[64px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-[#0f1b2d] text-[38px] tracking-[-0.8px] leading-[48px]">
            Live-stream lifecycle
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Follow the stream from creation to playback in five steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center relative gap-[32px] md:gap-0">
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row flex-[1_0_0] items-start md:items-center w-full relative">
              
              {/* Content */}
              <div className="flex flex-col flex-[1_0_0] items-center gap-[16px] w-full relative z-10">
                {step.isActive ? (
                  <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] shadow-sm">
                    <img src={step.icon} alt="" className="w-[24px] h-[24px] brightness-0 invert" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#f8fafc] border-2 border-solid border-[#e1e6eb]">
                    <img src={step.icon} alt="" className="w-[24px] h-[24px]" />
                  </div>
                )}
                
                <div className="flex flex-col items-center gap-[4px] text-center w-full max-w-[160px]">
                  <p className="font-sora font-bold text-[#0f1b2d] text-[15px] lg:text-[16px] whitespace-nowrap">
                    {step.title}
                  </p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[12px] lg:text-[13px] leading-[1.4]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connector line (hidden on last item, hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div 
                  className={`hidden md:block absolute top-[32px] left-[50%] w-[100%] h-[2px] z-0 ${
                    step.isActive ? 'bg-gradient-to-r from-[#34d4ca] to-[#e1e6eb]' : 'bg-[#e1e6eb]'
                  }`} 
                />
              )}
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
