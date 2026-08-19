import React from 'react';

const cards = [
  {
    icon: '/images/event-resilience/icon-git-branch.svg',
    iconBg: 'rgba(52,212,202,0.1)',
    step: '01',
    title: 'Planning phase',
    description: <>Commercial and planning support<br/>collects event scope and routes<br/>to expert review.</>
  },
  {
    icon: '/images/event-resilience/icon-check-circle.svg',
    iconBg: 'rgba(52,212,202,0.1)',
    step: '02',
    title: 'Pre-event verification',
    description: <>Operational owner and support<br/>route follows the scoped plan —<br/>no generic marketing form as<br/>primary path.</>
  },
  {
    icon: '/images/event-resilience/icon-activity.svg',
    iconBg: 'rgba(37,99,235,0.1)',
    step: '03',
    title: 'Live event',
    description: <>Active-event help is prominent,<br/>context-aware, and distinct from<br/>sales. Severity, impact, and event<br/>ID are available.</>
  },
  {
    icon: '/images/event-resilience/icon-clock.svg',
    iconBg: 'rgba(52,212,202,0.1)',
    step: '04',
    title: 'Post-event',
    description: <>Issue follow-up, evidence, and<br/>service review routes remain<br/>separate from lead-generation<br/>CTAs.</>
  }
];

export default function OperationalHandoffSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-white"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .handoff-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <img 
        src="/images/event-resilience/operational-handoff-bg.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-start w-full handoff-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#0d1117', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Operational handoff and active-event help
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#5a6478', fontSize: '18px', maxWidth: '800px' }}>
          When the event is live, operational support takes precedence over sales. Incident<br/>ownership, severity, and next actions are explicit — not hidden behind a contact form.
        </p>
      </div>

      <div className="relative z-10 w-full handoff-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full" style={{ gap: '20px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start border w-full bg-white"
              style={{ 
                borderColor: '#e2e8f0', 
                padding: '28px', 
                gap: '20px',
                borderRadius: '16px',
                boxShadow: '0px 8px 12px rgba(0,0,0,0.05)',
                minHeight: '235px'
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div 
                  className="flex flex-col items-center justify-center shrink-0"
                  style={{ 
                    backgroundColor: card.iconBg,
                    width: '48px',
                    height: '48px',
                    borderRadius: '24px'
                  }}
                >
                  <img src={card.icon} alt="" style={{ width: '20px', height: '20px' }} />
                </div>
                
                <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#5a6478', fontSize: '14px', opacity: 0.4 }}>
                  {card.step}
                </p>
              </div>

              <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
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
