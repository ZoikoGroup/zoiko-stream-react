import React from 'react';

export default function EvidenceGatedSection() {
  const cards = [
    {
      title: 'Supported contribution method',
      tag: 'VERIFIED · Capability Registry'
    },
    {
      title: 'Browser and device compatibility',
      tag: 'VERIFIED · Compatibility Registry'
    },
    {
      title: 'Geographic availability',
      tag: 'VERIFIED · Region Registry'
    },
    {
      title: 'Service-level scope',
      tag: 'VERIFIED · Service Registry'
    }
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden border-t border-b"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px', borderColor: '#e1e6eb' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .evidence-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .evidence-cards {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .evidence-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/security-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
      </div>

      <div className="evidence-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '800px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Evidence-gated capability
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Every capability assertion is evidence-gated. The page shows what has been verified for the current event context, not what might theoretically work.
          </p>
        </div>

        {/* Trust Proof Cards Row */}
        <div
          className="evidence-cards grid w-full"
          style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '24px', height: 'auto' }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-start bg-white border"
              style={{
                padding: '24px',
                gap: '16px',
                borderColor: '#e1e6eb',
                borderRadius: '12px',
                minHeight: '170px'
              }}
            >
              {/* Title Row */}
              <div className="flex items-center w-full" style={{ gap: '12px' }}>
                {/* Checkmark container */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(51,217,199,0.1)',
                    padding: '6px',
                    flexShrink: 0
                  }}
                >
                  <img
                    src="/images/remote-contribution-landing/trust-check.svg"
                    alt=""
                    style={{ width: '12px', height: '12px' }}
                  />
                </div>
                <p className="font-space-grotesk font-bold flex-1 min-w-0" style={{ color: '#0f1b2d', fontSize: '20px', lineHeight: '28px' }}>
                  {card.title}
                </p>
              </div>

              {/* Source Tag */}
              <div
                className="flex items-center shrink-0"
                style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#f1f5f9' }}
              >
                <span
                  className="font-space-grotesk font-bold uppercase whitespace-nowrap"
                  style={{ color: '#4f5e74', fontSize: '11px', letterSpacing: '0.5px' }}
                >
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
