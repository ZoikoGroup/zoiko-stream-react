import React from 'react';

export default function SourceTypesSection() {
  const cards = [
    {
      title: 'Remote presenter',
      description: 'Speaker, host, panelist, or guest contributing camera and microphone from an approved endpoint.',
      image: '/images/remote-contribution-landing/source-card-1.png'
    },
    {
      title: 'Remote venue feed',
      description: 'Program output from another venue or production environment delivered as a managed source.',
      image: '/images/remote-contribution-landing/source-card-2.png'
    },
    {
      title: 'Field or mobile source',
      description: 'Approved mobile or field contribution for events where presenter mobility is required.',
      image: '/images/remote-contribution-landing/source-card-3.png'
    },
    {
      title: 'Partner or system source',
      description: 'Approved external production or media system feeding the event through an integrated path.',
      image: '/images/remote-contribution-landing/source-card-4.png'
    },
    {
      title: 'Interpreter or accessibility source',
      description: 'Interpreter or accessibility-related contribution coordinated with the event accessibility plan.',
      image: '/images/remote-contribution-landing/source-card-5.png'
    },
    {
      title: 'Backup source',
      description: 'Preplanned alternate source or method for a defined primary source with verified readiness.',
      image: '/images/remote-contribution-landing/source-card-6.png'
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .source-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .source-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/source-types-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.66)' }} />
      </div>

      <div className="source-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold text-white w-full" style={{ fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Source types and contribution options
          </h2>
          <p className="font-space-grotesk font-normal text-[#aab3c4] w-full" style={{ fontSize: '18px', lineHeight: '28.8px' }}>
            Different sources have different requirements. ZoikoStream helps you match each source to the right contribution method and verify compatibility before the event.
          </p>
        </div>

        {/* Grid */}
        <div 
          className="source-grid grid w-full" 
          style={{ 
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px' 
          }}
        >
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start overflow-hidden border border-[#3c4d69]"
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
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
