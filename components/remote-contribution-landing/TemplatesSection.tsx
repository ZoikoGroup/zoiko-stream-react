import React from 'react';

export default function TemplatesSection() {
  const cards = [
    {
      title: 'Source-role templates',
      desc: 'Reuse role labels, source categories, and required checks across recurring events. Do not carry personal contributor data beyond retention.',
      image: '/images/remote-contribution-landing/template-card-1.png'
    },
    {
      title: 'Checklist templates',
      desc: 'Reuse preflight structure and responsibility assignments. Prior pass results never become current pass results.',
      image: '/images/remote-contribution-landing/template-card-2.png'
    },
    {
      title: 'Venue and source patterns',
      desc: 'Reuse known operational dependencies for recurring venues and partners. Mark last verified date and require confirmation after changes.',
      image: '/images/remote-contribution-landing/template-card-3.png'
    }
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .templates-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .templates-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* Background Image + Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/templates-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.68)' }} />
      </div>

      <div className="templates-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '900px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#ffffff', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Repeat events, templates, and operational reuse
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Professional communications teams plan for the year, not the hour. Save contribution configurations as templates while ensuring prior test results never become current pass results.
          </p>
        </div>

        {/* Template Cards Row */}
        <div
          className="templates-grid grid w-full"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px' }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-start overflow-hidden border"
              style={{
                height: '333px',
                backgroundColor: 'rgba(18,22,37,0.8)',
                borderColor: '#1e293b',
                borderRadius: '16px'
              }}
            >
              {/* Card Image */}
              <div className="w-full relative shrink-0" style={{ height: '140px' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col items-start w-full" style={{ padding: '24px', gap: '12px' }}>
                <h3 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '18px', lineHeight: 'normal' }}>
                  {card.title}
                </h3>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22px' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
