import React from 'react';

const reasons = [
  {
    title: '1. Clarify scope',
    description: 'We map out exactly which channels need to be live and confirm your target resolution beforehand.',
    image: '/images/planning-and-briefing/why-brief-card1.png'
  },
  {
    title: '2. Surface unknowns early',
    description: 'Catch missing transcripts, security credential errors, and bandwidth bottlenecks before the red light turns on.',
    image: '/images/planning-and-briefing/why-brief-card2.png'
  },
  {
    title: '3. Route to the right team',
    description: 'Your specific brief guides whether we dispatch automated capture probes or white-glove technical operators.',
    image: '/images/planning-and-briefing/why-brief-card3.png'
  }
];

export default function WhyBriefFirstSection() {
  return (
    <section className="relative w-full py-[80px] px-6 md:px-[112px] bg-[#0a0f16] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/why-brief-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] max-w-[860px]">
          <h2 className="font-space-grotesk font-bold text-white text-3xl md:text-[40px]">
            Why brief before scheduling?
          </h2>
          <p className="font-space-grotesk font-normal text-[#aab3c4] text-[16px] max-w-[640px] leading-[26px]">
            Writing a detailed brief keeps live execution boring. Real operations require explicit configurations, not downstream hope.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="flex flex-col overflow-hidden bg-[rgba(13,20,35,0.75)] border border-[#2a3a50] rounded-[14px] transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-full h-[200px] relative border-b border-[#2a3a50]">
                <img 
                  src={reason.image} 
                  alt={reason.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[12px] p-[24px] pb-[28px]">
                <h3 className="font-space-grotesk font-bold text-white text-[18px]">
                  {reason.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#8fa3be] text-[14px] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
