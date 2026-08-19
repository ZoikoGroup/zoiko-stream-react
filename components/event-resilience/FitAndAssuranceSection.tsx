import React from 'react';

const cards = [
  {
    icon: '/images/event-resilience/icon-shield-cyan.svg',
    pillText: 'You are here',
    pillBg: '#d1fae5',
    pillBorder: '#a7f3d0',
    pillColor: '#065f46',
    title: 'Event Resilience',
    description: <>Resilience model, dependency<br/>truth, verification, change<br/>detection, recovery planning, live<br/>incident state, and evidence.</>,
    cta: 'Learn more'
  },
  {
    icon: '/images/event-resilience/icon-shield-cyan.svg',
    pillText: 'Managed operations',
    pillBg: '#dbeafe',
    pillBorder: '#93c5fd',
    pillColor: '#1e40af',
    title: 'Managed Live Event Streaming',
    description: <>Responsibility-led managed<br/>operating model where specific<br/>event tasks are run by ZoikoStream<br/>when scoped.</>,
    cta: 'Talk to an expert'
  },
  {
    icon: '/images/event-resilience/icon-shield-cyan.svg',
    pillText: 'Higher assurance',
    pillBg: '#f3e8ff',
    pillBorder: '#e9d5ff',
    pillColor: '#6b21a8',
    title: 'Assured Event',
    description: <>Higher-assurance commercial and<br/>service packaging. Exact<br/>commitments defined by<br/>authoritative service source.</>,
    cta: 'Talk to an expert'
  }
];

export default function FitAndAssuranceSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-[#0d121f]"
      style={{ paddingTop: '80px', paddingBottom: '80px', gap: '48px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .fit-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/fit-and-assurance-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,18,31,0.65)' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[1440px] h-[800px]" style={{ background: 'linear-gradient(to right, rgba(52,212,202,0.05), rgba(74,140,251,0.02))' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full fit-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#eef1f6', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Find the right level of support
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#aab3c4', fontSize: '18px', maxWidth: '800px' }}>
          ZoikoStream offers different levels of event support. Choose the path that matches your<br/>operational needs.
        </p>
      </div>

      <div className="relative z-10 w-full fit-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: '24px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start justify-between border w-full"
              style={{ 
                backgroundColor: '#0d1520', 
                borderColor: '#2a3547', 
                padding: '36px', 
                borderRadius: '16px',
                minHeight: '379px'
              }}
            >
              <div className="flex flex-col items-start w-full" style={{ gap: '24px' }}>
                <div className="flex items-center justify-between w-full">
                  <div 
                    className="flex flex-col items-center justify-center shrink-0 overflow-hidden"
                    style={{ 
                      backgroundColor: 'rgba(52,212,202,0.1)',
                      width: '48px',
                      height: '48px',
                      borderRadius: '24px'
                    }}
                  >
                    <img src={card.icon} alt="" style={{ width: '20px', height: '20px' }} />
                  </div>
                  
                  <div 
                    className="flex items-start border"
                    style={{ 
                      backgroundColor: card.pillBg,
                      borderColor: card.pillBorder,
                      padding: '4px 10px',
                      borderRadius: '99px'
                    }}
                  >
                    <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: card.pillColor, fontSize: '11px' }}>
                      {card.pillText}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
                  <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#eef1f6', fontSize: '22px' }}>
                    {card.title}
                  </p>
                  <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#aab3c4', fontSize: '18px' }}>
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start w-full" style={{ paddingTop: '32px' }}>
                <button 
                  className="flex items-center justify-center border w-full hover:bg-[rgba(52,212,202,0.1)] transition-colors"
                  style={{ 
                    borderColor: '#34d4ca',
                    padding: '14px 24px',
                    borderRadius: '10px',
                  }}
                >
                  <span className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#34d4ca', fontSize: '15px' }}>
                    {card.cta}
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
