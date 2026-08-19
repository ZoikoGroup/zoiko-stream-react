import React from 'react';

const cards = [
  {
    title: 'No second takes',
    description: <>Every presenter and track operates on live time.<br/>Failover switches must execute instantly without<br/>freezing players.</>,
    image: '/images/event-resilience/card-image-1.png'
  },
  {
    title: 'Invisible dependencies',
    description: <>Network bottlenecks and credential problems are<br/>invisible until they fail. Proactive probing verifies<br/>every link beforehand.</>,
    image: '/images/event-resilience/card-image-2.png'
  },
  {
    title: 'Recovery, not luck',
    description: <>If a local encoder breaks, fallback systems route<br/>viewers to preflight splash cards rather than empty<br/>black screens.</>,
    image: '/images/event-resilience/card-image-3.png'
  }
];

export default function WhyEventResilienceMattersSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start overflow-hidden bg-[#0a0f1a] px-6 md:px-0"
      style={{ paddingTop: '80px', paddingBottom: '80px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .resilience-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/why-resilience-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 15, 26, 0.55)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col w-full resilience-section-padding" style={{ gap: '14px', maxWidth: '100%' }}>
        <h2 className="font-space-grotesk font-bold text-white leading-[normal]" style={{ fontSize: '42px' }}>
          Why live resilience is critical
        </h2>
        <p className="font-space-grotesk font-normal leading-[normal]" style={{ color: '#9ba8bb', fontSize: '16px', maxWidth: '680px' }}>
          Live events happen once. If a connection drops, you can't rewind the clock. We<br/>approach resilience as a policy, not an accident.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full resilience-section-padding" style={{ gap: '20px' }}>
        {cards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col items-start overflow-hidden border h-full"
            style={{ 
              backgroundColor: '#0d1520', 
              borderColor: '#2a3547',
              borderRadius: '14px'
            }}
          >
            {/* Card Image */}
            <div className="relative w-full shrink-0" style={{ height: '160px' }}>
              <img 
                src={card.image} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: 'rgba(10, 15, 26, 0.45)' }}
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-start" style={{ padding: '20px', gap: '10px' }}>
              <h3 className="font-space-grotesk font-bold text-white leading-[normal]" style={{ fontSize: '17px' }}>
                {card.title}
              </h3>
              <p className="font-space-grotesk font-normal leading-[normal]" style={{ color: '#8c9baf', fontSize: '14px' }}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
