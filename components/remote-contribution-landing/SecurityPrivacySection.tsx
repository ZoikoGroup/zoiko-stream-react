import React from 'react';

export default function SecurityPrivacySection() {
  const cards = [
    {
      title: 'Invitation and access',
      desc: 'Time-bound, event-scoped, least-privilege access. Secret tokens never exposed in analytics or page source.',
      image: '/images/remote-contribution-landing/security-card-1.png',
      overlay: null
    },
    {
      title: 'Authentication',
      desc: 'Approved method for the event and account context. SSO, passwordless, or guest flows only when registered.',
      image: '/images/remote-contribution-landing/security-card-2.png',
      overlay: null
    },
    {
      title: 'Authorization',
      desc: 'Source access scoped to the intended event, session, and role. Contributors cannot access producer controls.',
      image: '/images/remote-contribution-landing/security-card-3.png',
      overlay: 'rgba(4,30,70,0.73)'
    },
    {
      title: 'Session handling',
      desc: 'Secure cookies and tokens with defined revoke and expiry behavior.',
      image: '/images/remote-contribution-landing/security-card-4.png',
      overlay: null
    },
    {
      title: 'Auditability',
      desc: 'Security-relevant actions recorded where the product supports logs. Audit access is role-controlled.',
      image: '/images/remote-contribution-landing/security-card-5.png',
      overlay: null
    },
    {
      title: 'Data minimization',
      desc: 'Contributor data collection minimized to operational need. Marketing consent separate from participation.',
      image: '/images/remote-contribution-landing/security-card-6.png',
      overlay: null
    }
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .security-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .security-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .security-grid {
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

      <div className="security-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '52px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '900px' }}>
          <h2 className="font-space-grotesk font-bold" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Security, privacy, and access architecture
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Authentication, least privilege, minimized data, and logging boundaries — visible without implying certifications not in evidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="security-grid grid w-full"
          style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '24px' }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-start overflow-hidden bg-white border"
              style={{ borderColor: '#e1e6eb', borderRadius: '16px' }}
            >
              {/* Card Image */}
              <div className="w-full relative shrink-0" style={{ height: '140px' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                />
                {card.overlay && (
                  <div className="absolute inset-0" style={{ backgroundColor: card.overlay }} />
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col items-start w-full" style={{ padding: '24px', gap: '12px' }}>
                <h3 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '18px', lineHeight: 'normal' }}>
                  {card.title}
                </h3>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '14px', lineHeight: '22px' }}>
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
