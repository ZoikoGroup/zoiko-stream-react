import React from 'react';

const cards = [
  {
    icon: '/images/event-resilience/icon-file-text.svg',
    title: 'Bounded claims',
    description: <>Every capability claim links to a controlled evidence record with<br/>scope, time, and version.</>
  },
  {
    icon: '/images/event-resilience/icon-users.svg',
    title: 'Responsibility clarity',
    description: <>Provider, venue, and customer dependencies are labeled — never<br/>silently attributed to ZoikoStream.</>
  },
  {
    icon: '/images/event-resilience/icon-shield.svg',
    title: 'Privacy by design',
    description: <>Attendee and contributor personal data is minimized. Operational<br/>telemetry is separated from CRM.</>
  },
  {
    icon: '/images/event-resilience/icon-activity.svg',
    title: 'Audit-ready evidence',
    description: <>Role-appropriate audit history with retention policy. Evidence is<br/>referenceable without exposing secrets.</>
  }
];

export default function TrustAndEvidenceSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-white border-t"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '56px', borderColor: '#e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .trust-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <img 
        src="/images/event-resilience/trust-and-evidence-bg.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-start w-full trust-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#0d1117', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Trust, evidence, and responsibility
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#5a6478', fontSize: '18px', maxWidth: '800px' }}>
          Claims are bounded by verified capability and evidence. Limits and responsibility<br/>boundaries are as visible as strengths.
        </p>
      </div>

      <div className="relative z-10 w-full trust-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full" style={{ gap: '24px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex items-start border w-full"
              style={{ 
                backgroundColor: '#f8fafc', 
                borderColor: '#e2e8f0', 
                padding: '32px', 
                gap: '24px',
                borderRadius: '16px'
              }}
            >
              <div 
                className="flex flex-col items-center justify-center shrink-0"
                style={{ 
                  backgroundColor: 'rgba(37,99,235,0.08)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px'
                }}
              >
                <img src={card.icon} alt="" style={{ width: '20px', height: '20px' }} />
              </div>

              <div className="flex flex-col items-start flex-1" style={{ gap: '8px' }}>
                <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#0d1117', fontSize: '18px' }}>
                  {card.title}
                </p>
                <p className="font-space-grotesk font-normal leading-[22.75px]" style={{ color: '#5a6478', fontSize: '14px' }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
