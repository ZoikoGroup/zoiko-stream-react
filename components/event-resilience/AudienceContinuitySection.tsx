import React from 'react';

const cards = [
  {
    image: '/images/event-resilience/audience-card-1.png',
    icon: '/images/event-resilience/icon-key.svg',
    title: 'Entry and re-entry',
    description: <>Access method state is known before the event.<br/>Error recovery never weakens authorization or<br/>forces duplicate accounts.</>
  },
  {
    image: '/images/event-resilience/audience-card-2.png',
    icon: '/images/event-resilience/icon-accessibility.svg',
    title: <>Accessibility as a first-class<br/>dependency</>,
    description: <>Captions, languages, interpretation, and<br/>alternative access are separate dependencies. A<br/>recovery path that removes accessibility must<br/>show that impact explicitly.</>
  },
  {
    image: '/images/event-resilience/audience-card-3.png',
    icon: '/images/event-resilience/icon-message.svg',
    title: 'Viewer-safe communication',
    description: <>Audience impact messages use plain language<br/>without exposing sensitive infrastructure detail.<br/>Degraded states are communicated truthfully.</>
  }
];

export default function AudienceContinuitySection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-[#080c14]"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .audience-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/audience-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(8,12,20,0.65)' }} />
      </div>
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-[900px] top-[-180px]" style={{ width: '600px', height: '600px' }}>
          <img src="/images/event-resilience/audience-ellipse-1.svg" alt="" className="absolute inset-0 w-full h-full max-w-none" />
        </div>
        <div className="absolute left-[1150px] top-[-80px]" style={{ width: '320px', height: '320px' }}>
          <img src="/images/event-resilience/audience-ellipse-2.svg" alt="" className="absolute inset-0 w-full h-full max-w-none" />
        </div>
        <div 
          className="absolute left-[700px] top-0" 
          style={{ 
            width: '740px', 
            height: '400px', 
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 740 400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(37 0 0 40 370 0)'><stop stop-color='rgba(74,140,251,0.070588)' offset='0'/><stop stop-color='rgba(8,12,20,0)' offset='1'/></radialGradient></defs></svg>\")" 
          }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full audience-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#eef1f6', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Audience continuity
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#aab3c4', fontSize: '18px', maxWidth: '680px' }}>
          Access, privacy, accessibility, and viewer recovery are tracked as<br/>independent dimensions - not afterthoughts.
        </p>
      </div>

      <div className="relative z-10 w-full audience-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: '20px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start border w-full overflow-hidden"
              style={{ 
                backgroundColor: '#0d1520', 
                borderColor: '#2a3547', 
                borderRadius: '16px',
                minHeight: '427px'
              }}
            >
              <div className="relative w-full overflow-hidden shrink-0" style={{ height: '220px' }}>
                <img src={card.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,21,32,0.35)' }} />
              </div>

              <div className="flex flex-col items-start w-full" style={{ padding: '28px', gap: '16px' }}>
                <div className="flex items-center w-full" style={{ gap: '12px' }}>
                  <div 
                    className="flex flex-col items-center justify-center shrink-0 border"
                    style={{ 
                      backgroundColor: '#131c2e',
                      borderColor: '#1e2f4a',
                      width: '36px',
                      height: '36px',
                      borderRadius: '18px'
                    }}
                  >
                    <img src={card.icon} alt="" style={{ width: '16px', height: '16px' }} />
                  </div>
                  <p className="font-space-grotesk font-bold leading-[normal] flex-1" style={{ color: '#eef1f6', fontSize: '17px' }}>
                    {card.title}
                  </p>
                </div>
                
                <p className="font-space-grotesk font-normal leading-[22.75px]" style={{ color: '#8c9baf', fontSize: '14px' }}>
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
