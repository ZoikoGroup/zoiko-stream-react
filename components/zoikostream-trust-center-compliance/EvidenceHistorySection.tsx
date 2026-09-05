import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const items = [
  { date: 'Mar 15, 2026', active: true, title: 'SOC 2 Type II report renewed', desc: 'Annual attestation report updated with latest audit period covering Jan–Dec 2025. No material exceptions noted.' },
  { date: 'Feb 28, 2026', active: false, title: 'GDPR assessment scope updated', desc: 'Assessment scope expanded to include new data processing activities introduced in Q4 2025.' },
  { date: 'Jan 10, 2026', active: false, title: 'ISO 27001:2022 surveillance audit completed', desc: 'Successful surveillance audit with zero non-conformities. Certificate validity extended to March 2027.' },
  { date: 'Dec 05, 2025', active: false, title: 'CSA STAR self-assessment refreshed', desc: 'CAIQ v4.0 responses updated to reflect current cloud security controls and architecture changes.' },
];

export default function EvidenceHistorySection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden history-section"
      style={{ padding: '120px 112px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .history-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .history-section { padding: 64px 24px !important; }
          .history-row { gap: 20px !important; }
          .history-date { width: 88px !important; font-size: 13px !important; }
        }
      `}} />

      <img src="/images/zoikostream-data-protection/faq-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-190px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Evidence History &amp; Corrections
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Transparency means showing what changed and when. Every compliance record maintains a complete audit trail of updates, corrections, and status changes.
          </p>
        </div>

        <div className="flex flex-col items-start w-full">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="flex items-start w-full history-row"
              style={{ gap: '48px', paddingBottom: i === items.length - 1 ? 0 : '40px' }}
            >
              <p className="font-space-grotesk font-bold shrink-0 history-date" style={{ width: '112px', fontSize: '16px', color: it.active ? '#4c86ff' : '#4f5e74' }}>
                {it.date}
              </p>
              <div className="shrink-0" style={{ width: '48px', height: '48px' }}>
                <img src={`${IMG}/${it.active ? 'node-active.svg' : 'node-inactive.svg'}`} alt="" style={{ width: '48px', height: '48px' }} />
              </div>
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '8px', paddingTop: '8px' }}>
                <p className="font-space-grotesk font-bold w-full" style={{ fontSize: '18px', color: '#0a0d13' }}>{it.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '15px', lineHeight: '24px', color: '#4f5e74' }}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
