import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const steps = [
  { step: 'STEP 01', tag: 'PORTAL', title: 'Request Access', desc: 'Submit a request through our Trust Center portal. Identify your organization, role, and the specific evidence you need. No sales conversation required.', img: 'card-request-access.png' },
  { step: 'STEP 02', tag: 'REVIEW', title: 'Authorization Review', desc: 'Our compliance team reviews your request against our document classification policy. NDA requirements are clearly stated before any commitment.', img: 'card-authorization-review.png' },
  { step: 'STEP 03', tag: 'SECURE', title: 'Secure Delivery', desc: 'Approved documents are delivered through a secure, time-limited portal with watermarking and audit trail. Access can be revoked if terms are violated.', img: 'card-secure-delivery.png' },
];

export default function EvidenceAccessSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden access-section"
      style={{ padding: '120px 112px', backgroundColor: '#0a0f1a', borderBottom: '1px solid #232b3a' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .access-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .access-section { padding: 64px 24px !important; }
          .access-steps-row { flex-direction: column !important; align-items: stretch !important; }
          .access-banner { flex-direction: column !important; align-items: stretch !important; gap: 16px !important; }
          .access-banner button { width: 100%; justify-content: center !important; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/access-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.7)' }} />
      </div>
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-190px', top: '-140px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-206px', bottom: '-257px', width: '712px', height: '712px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Controlled Evidence Access
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Some compliance evidence — like SOC 2 Type II reports and penetration test summaries — is available under controlled access. Here is how the authorization process works.
          </p>
        </div>

        <div className="flex items-start w-full access-steps-row" style={{ gap: '24px' }}>
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col items-start flex-1 min-w-0 overflow-hidden"
              style={{ borderRadius: '16px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)', backdropFilter: 'blur(8px)' }}
            >
              <div className="w-full shrink-0" style={{ height: '160px' }}>
                <img src={`${IMG}/${s.img}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: '12px', padding: '24px' }}>
                <div className="flex items-center justify-between w-full">
                  <p className="font-mono" style={{ fontSize: '12px', color: '#34d4ca' }}>{s.step}</p>
                  <div className="flex items-start shrink-0" style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(52,212,202,0.1)' }}>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '10px', color: '#34d4ca' }}>{s.tag}</p>
                  </div>
                </div>
                <p className="font-space-grotesk font-bold w-full" style={{ fontSize: '18px', color: '#eef1f6' }}>{s.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', lineHeight: '20px', color: '#aab3c4' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between w-full access-banner"
          style={{ padding: '24px', borderRadius: '12px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}
        >
          <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '4px', maxWidth: '950px' }}>
            <p className="font-space-grotesk font-bold w-full" style={{ fontSize: '16px', color: '#eef1f6' }}>
              Public evidence is always available without authorization
            </p>
            <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', color: '#aab3c4' }}>
              Only controlled documents with commercial sensitivity or legal restrictions require the access workflow outlined above.
            </p>
          </div>
          <button
            className="flex items-center justify-center shrink-0"
            style={{ padding: '12px 24px', borderRadius: '8px', background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '14px', color: '#0f1b2d' }}>
              Request Controlled Documents
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
