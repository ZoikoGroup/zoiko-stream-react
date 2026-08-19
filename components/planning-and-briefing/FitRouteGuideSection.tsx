import React from 'react';

const paths = [
  {
    icon: '/images/planning-and-briefing/video.svg',
    title: 'Managed Live Streaming',
    description: 'Full-service execution with technical delivery, monitoring, and support.'
  },
  {
    icon: '/images/planning-and-briefing/mic.svg',
    title: 'Remote Contribution',
    description: 'Ingest from remote locations with quality monitoring and backup paths.'
  },
  {
    icon: '/images/planning-and-briefing/lock-white.svg',
    title: 'Private Streaming',
    description: 'Restricted access, SSO, and secure delivery for internal audiences.'
  },
  {
    icon: '/images/planning-and-briefing/layers.svg',
    title: 'Conference & Multi-track',
    description: 'Multiple sessions, tracks, and simultaneous delivery profiles.'
  },
  {
    icon: '/images/planning-and-briefing/shield.svg',
    title: 'Event Resilience',
    description: 'Failover planning, backup ingest, and contingency workflows.'
  },
  {
    icon: '/images/planning-and-briefing/check-circle-white.svg',
    title: 'Assured Event',
    description: 'High-stakes events with strict SLAs and technical assurance.'
  }
];

export default function FitRouteGuideSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-[#fdfdfd] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <img 
          src="/images/planning-and-briefing/fit-route-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#0a0d13] text-3xl md:text-[40px]">
            Find the right planning path
          </h2>
          <p className="font-space-grotesk font-normal text-[#6b7484] text-[16px] w-full leading-[normal]">
            Your event brief helps identify which planning and service paths may be a potential fit. Exact scope requires review.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {paths.map((path, idx) => (
            <div 
              key={idx}
              className="flex flex-col gap-[12px] bg-white border border-[#e2e8f0] rounded-[16px] p-[20px] shadow-[0px_10px_12px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
            >
              <div className="w-[40px] h-[40px] rounded-[12px] bg-[#2563eb] flex items-center justify-center mb-[4px]">
                <img src={path.icon} alt="" className="w-[20px] h-[20px]" />
              </div>
              
              <h3 className="font-space-grotesk font-bold text-[#0a0d13] text-[16px]">
                {path.title}
              </h3>
              
              <p className="font-space-grotesk font-normal text-[#6b7484] text-[14px] leading-[22px] flex-grow">
                {path.description}
              </p>

              <div className="flex items-center gap-[8px] mt-[4px]">
                <span className="font-space-grotesk font-bold text-[#4c86ff] text-[14px] whitespace-nowrap group-hover:underline">
                  Choose planning path
                </span>
                <img src="/images/planning-and-briefing/arrow-right-blue.svg" alt="" className="w-[16px] h-[16px] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
