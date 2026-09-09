import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const signals = [
  { title: 'Independent Auditor', desc: 'Annual SOC 2 Type II attestation by a licensed CPA firm with AICPA accreditation.', img: 'signal-independent-auditor.png' },
  { title: 'Certification Body', desc: 'ISO 27001:2022 certification issued by an accredited certification body under IAF MLA.', img: 'signal-certification-body.png' },
  { title: 'Privacy Assessor', desc: 'GDPR compliance assessment conducted by qualified data protection consultants.', img: 'signal-privacy-assessor.png' },
  { title: 'Penetration Testing', desc: 'Annual penetration testing by an independent, CREST-accredited security firm.', img: 'signal-penetration-testing.png' },
];

export default function ValidationSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden validation-section"
      style={{ padding: '120px 112px', backgroundColor: '#0a0f1a', borderBottom: '1px solid #232b3a' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .validation-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 900px) {
          .validation-signals-row { flex-wrap: wrap !important; }
          .validation-signals-row > * { flex: 1 1 calc(50% - 10px) !important; min-width: 220px !important; }
        }
        @media (max-width: 640px) {
          .validation-section { padding: 64px 24px !important; }
          .validation-signals-row > * { flex: 1 1 100% !important; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/validation-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.92)' }} />
      </div>
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-216px', top: '-136px', width: '643px', height: '643px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-221px', bottom: '-222px', width: '683px', height: '683px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Trust Signals &amp; Independent Validation
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Our compliance program is validated by independent third-party auditors, assessors, and certification bodies.
          </p>
        </div>

        <div className="flex items-stretch w-full validation-signals-row" style={{ gap: '20px' }}>
          {signals.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-start flex-1 min-w-0 overflow-hidden"
              style={{ borderRadius: '16px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}
            >
              <div className="flex items-center justify-center w-full shrink-0" style={{ height: '120px', padding: '20px', backgroundColor: '#141b26' }}>
                <img src={`${IMG}/${s.img}`} alt="" className="h-full w-full object-cover" style={{ borderRadius: '4px' }} />
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: '8px', padding: '20px' }}>
                <p className="font-space-grotesk font-bold w-full" style={{ fontSize: '16px', color: '#eef1f6' }}>{s.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', lineHeight: '20px', color: '#aab3c4' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center w-full"
          style={{ gap: '16px', padding: '20px 24px', borderRadius: '12px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}
        >
          <div className="shrink-0" style={{ width: '20px', height: '20px' }}>
            <img src={`${IMG}/shield-check.svg`} alt="" style={{ width: '20px', height: '20px' }} />
          </div>
          <p className="font-space-grotesk font-medium flex-1 min-w-0" style={{ fontSize: '14.5px', color: '#eef1f6' }}>
            All validation relationships are current and independently verifiable. Contact our compliance team for verification details.
          </p>
        </div>
      </div>
    </section>
  );
}
