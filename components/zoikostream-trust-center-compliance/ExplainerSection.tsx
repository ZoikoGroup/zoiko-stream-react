import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const cards = [
  { title: 'Evidence Type', desc: 'We distinguish certifications from attestations, assessments from mappings, and public statements from contractual obligations.', img: 'card-evidence-type.png' },
  { title: 'Scope & Coverage', desc: 'Every framework entry specifies exactly which products, services, regions, and data types are covered — and which are not.', img: 'card-scope-coverage.png' },
  { title: 'Status & Currentness', desc: 'Evidence carries its audit period, last review date, and next renewal — so you see whether it is current or approaching expiration.', img: 'card-status-currentness.png' },
  { title: 'Limitations & Boundaries', desc: 'Where evidence has known gaps, pending items, or scope restrictions, we state them upfront rather than hiding behind positive labels.', img: 'card-limitations-boundaries.png' },
];

export default function ExplainerSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden explainer-section"
      style={{ padding: '100px 112px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .explainer-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .explainer-section { padding: 64px 24px !important; }
          .explainer-grid { grid-template-columns: 1fr !important; }
          .explainer-card { flex-direction: column !important; align-items: stretch !important; }
        }
      `}} />

      <img src="/images/zoikostream-data-protection/faq-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-218px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            How We Present Compliance Evidence
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Every compliance record includes its evidence type, current status, exact scope, and any known limitations — so you always know what is established and what requires further review.
          </p>
        </div>

        <div className="grid explainer-grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px', width: '100%' }}>
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex items-center explainer-card"
              style={{ gap: '20px', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}
            >
              <div className="shrink-0 overflow-hidden" style={{ width: '140px', height: '140px', borderRadius: '8px' }}>
                <img src={`${IMG}/${c.img}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '8px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '18px', color: '#0a0d13' }}>{c.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '14px', lineHeight: '20px', color: '#4f5e74' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
