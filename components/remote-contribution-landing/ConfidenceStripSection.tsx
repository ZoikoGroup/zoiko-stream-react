import React from 'react';

export default function ConfidenceStripSection() {
  const cards = [
    {
      title: 'Prepare each source',
      description: 'Set the source, owner, contribution method, permissions, timing, and known constraints before the event.',
      image: '/images/remote-contribution-landing/confidence-card-1.png'
    },
    {
      title: 'Verify tested state',
      description: 'Run defined preflight and rehearsal checks, then preserve the tested configuration and timestamp.',
      image: '/images/remote-contribution-landing/confidence-card-2.png'
    },
    {
      title: 'See source state',
      description: 'Keep connection, verification, standby, in-program, and recovery states separate during the event.',
      image: '/images/remote-contribution-landing/confidence-card-3.png'
    },
    {
      title: 'Plan next action',
      description: 'Define approved reconnection and fallback paths instead of assuming every source will remain stable.',
      image: '/images/remote-contribution-landing/confidence-card-4.png'
    }
  ];

  return (
    <section className="relative w-full flex flex-col items-start overflow-hidden bg-white" style={{ paddingTop: '100px', paddingBottom: '100px', paddingLeft: '112px', paddingRight: '112px' }}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/confidence-bg-texture.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none opacity-95"
        />
      </div>

      <div className="relative z-10 flex flex-col w-full" style={{ gap: '52px', maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Operating model built for contribution confidence
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Every remote source follows a controlled lifecycle — prepared, verified, operated, and recovered — so no one guesses<br />
            whether a feed is actually ready.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-wrap items-center justify-start w-full" style={{ gap: '33px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start bg-white border border-[#e1e5ec]"
              style={{
                width: '286px',
                height: '306px',
                borderRadius: '24px',
                boxShadow: '0px 4px 2px rgba(0,0,0,0.09)'
              }}
            >
              {/* Card Image Wrapper */}
              <div className="w-full shrink-0" style={{ height: index === 1 ? '125px' : '140px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', overflow: 'hidden' }}>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-start w-full shrink-0" style={{ padding: '24px', gap: '12px' }}>
                <h3 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '18px', lineHeight: 'normal' }}>
                  {card.title}
                </h3>
                <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '14px', lineHeight: '22px' }}>
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
