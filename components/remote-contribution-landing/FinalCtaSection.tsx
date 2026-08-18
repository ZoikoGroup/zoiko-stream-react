import React from 'react';

export default function FinalCtaSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '140px', paddingBottom: '140px' }}
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/final-cta-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.79)' }} />
      </div>

      {/* Content Block */}
      <div className="relative z-10 flex flex-col items-center text-center" style={{ gap: '40px', maxWidth: '900px' }}>

        <div className="flex flex-col items-center" style={{ gap: '24px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#ffffff', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Ready to bring remote contributors into your next event?
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Plan, test, and operate remote sources with confidence. Start with an event brief or talk to our team.
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-center" style={{ gap: '16px' }}>
          {/* Primary Button */}
          <button
            className="flex items-center justify-center shrink-0"
            style={{
              padding: '14px 26px',
              background: 'linear-gradient(90deg, #33d9c7 0%, #4c86ff 100%)',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(51,217,199,0.2)'
            }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#04141a', fontSize: '15px' }}>
              Plan a live event
            </span>
          </button>

          {/* Secondary Outline Button */}
          <button
            className="flex items-center justify-center shrink-0 border"
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              borderColor: '#33d9c7',
              borderWidth: '1.5px',
              backgroundColor: 'transparent'
            }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '15px' }}>
              Talk to an expert
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
