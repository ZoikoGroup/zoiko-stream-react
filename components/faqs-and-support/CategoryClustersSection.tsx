import React from 'react';

const clusters = [
  {
    title: 'Event Planning',
    description: 'How do I submit an event brief? What is the standard lead time?',
    image: '/images/faqs-and-support/card1.png',
  },
  {
    title: 'Production & Ingest',
    description: 'Supported protocols (SRT, RTMP), backup encoders, and bitrates.',
    image: '/images/faqs-and-support/card2.png',
  },
  {
    title: 'Access & Security',
    description: 'SAML 2.0 integration, paywalls, and role-based viewing permissions.',
    image: '/images/faqs-and-support/card3.png',
  },
  {
    title: 'Accessibility & Languages',
    description: 'WebVTT captions, real-time sign language, and localized audio.',
    image: '/images/faqs-and-support/card4.png',
  },
  {
    title: 'Resilience & SLAs',
    description: 'Multi-WAN failover, backup streaming routes, and service guarantees.',
    image: '/images/faqs-and-support/card5.png',
  },
  {
    title: 'Recording & Archive',
    description: 'Post-event replay, automated transcripts, and life-cycle purging.',
    image: '/images/faqs-and-support/card6.png',
  },
];

export default function CategoryClustersSection() {
  return (
    <section className="relative w-full py-[80px] px-6 md:px-[112px] bg-[#f8fafc] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/faqs-and-support/category-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        <h2 className="font-space-grotesk font-bold text-[#0f172a] text-3xl md:text-[38px] leading-tight md:leading-[60.8px] tracking-[-0.38px]">
          Top Question Clusters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <div className="relative w-full h-[200px]">
                <img 
                  src={cluster.image} 
                  alt={cluster.title} 
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-6 pb-6">
                <h3 className="font-space-grotesk font-bold text-[#0f172a] text-[18px]">
                  {cluster.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#64748b] text-[14px] leading-[22px]">
                  {cluster.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
