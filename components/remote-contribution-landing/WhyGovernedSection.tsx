import React from 'react';

export default function WhyGovernedSection() {
  const cards = [
    {
      title: 'Remote endpoints vary',
      description: 'A source can change device, room, network, permissions, or input between rehearsal and event.',
      badge: 'TESTED CONFIG & CHANGED STATES',
      image: '/images/remote-contribution-landing/why-card-1.png'
    },
    {
      title: 'Connected creates false confidence',
      description: 'A session can exist while audio, video, or source permissions remain unresolved.',
      badge: 'SEPARATED STATE FLOWS',
      image: '/images/remote-contribution-landing/why-card-2.png'
    },
    {
      title: 'Ownership gets blurred',
      description: 'Planner, contributor, venue, and production may each assume someone else owns the failing dependency.',
      badge: 'OWNER & ACTION METADATA',
      image: '/images/remote-contribution-landing/why-card-3.png'
    },
    {
      title: 'Recovery is often improvised',
      description: 'When a source fails live, teams lose time deciding whether to reconnect, switch method, or use backup.',
      badge: 'PREDEFINED FALLBACK INTENT',
      image: '/images/remote-contribution-landing/why-card-4.png'
    },
    {
      title: 'Privacy is easy to overcollect',
      description: 'Guest contribution forms can become lead forms or collect unnecessary personal data.',
      badge: 'DATA MINIMIZATION RULES',
      image: '/images/remote-contribution-landing/why-card-5.png'
    },
    {
      title: 'Accessibility discovered too late',
      description: 'Keyboard, screen-reader, or language needs can block a contributor at event time.',
      badge: 'A11Y CHECKS IN REHEARSAL',
      image: '/images/remote-contribution-landing/why-card-6.png'
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .why-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          <img 
            src="/images/remote-contribution-landing/why-bg.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.55)' }} />
        </div>
      </div>

      <div className="why-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold text-white w-full" style={{ fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Why remote contribution needs deliberate planning
          </h2>
          <p className="font-space-grotesk font-normal text-[#aab3c4] w-full" style={{ fontSize: '18px', lineHeight: '28.8px' }}>
            Connected is not the same as verified. Verified is not the same as ready for go-live. These states must never be collapsed into one green indicator.
          </p>
        </div>

        {/* Grid */}
        <div 
          className="why-grid grid w-full" 
          style={{ 
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px' 
          }}
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start overflow-hidden border border-[#1e293b]"
              style={{
                backgroundColor: 'rgba(18,22,37,0.8)',
                borderRadius: '16px'
              }}
            >
              {/* Card Image */}
              <div className="w-full shrink-0" style={{ height: '160px' }}>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ opacity: index === 5 ? 0.46 : 1 }}
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-start w-full h-full" style={{ padding: '24px', gap: '12px' }}>
                <h3 className="font-space-grotesk font-bold text-white whitespace-nowrap" style={{ fontSize: '18px', lineHeight: 'normal' }}>
                  {card.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#aab3c4]" style={{ fontSize: '14px', lineHeight: '22px' }}>
                  {card.description}
                </p>
                
                {/* Badge (pushes to bottom if needed) */}
                <div className="mt-auto">
                  <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(51,217,199,0.07)' }}>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#33d9c7', fontSize: '11px', lineHeight: 'normal' }}>
                      {card.badge}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
