import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const routes = [
  { title: 'Trust Center', desc: 'The canonical evidence hub — cross-domain inventory, access metadata, lifecycle, and controlled evidence catalog.', img: 'card-route-trust-center.png' },
  { title: 'Security', desc: 'Security governance, public-safe control-domain explanations, and approved security practice documentation.', img: 'card-route-security.png' },
  { title: 'Data Protection', desc: 'Privacy, data handling, governance, legal-policy, and data-subject processing authorities.', img: 'card-route-data-protection.png' },
  { title: 'Service Reliability', desc: 'Reliability, resilience, and business continuity evidence and methodology.', img: 'card-route-service-reliability.png' },
  { title: 'Subprocessors', desc: 'Current approved subprocessor inventory, change notification process, and vendor assessment.', img: 'card-route-subprocessors.png' },
  { title: 'Responsible Disclosure', desc: 'Vulnerability reporting policy and safe disclosure intake process for security researchers.', img: 'card-route-responsible-disclosure.png' },
];

export default function ResourcesSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden resources-section"
      style={{ padding: '120px 112px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .resources-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 900px) {
          .resources-grid-row { flex-direction: column !important; align-items: stretch !important; }
        }
        @media (max-width: 640px) {
          .resources-section { padding: 64px 24px !important; }
        }
      `}} />

      <img src="/images/zoikostream-data-protection/faq-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-281px', bottom: '-140px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Related Trust &amp; Security Resources
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Compliance is one part of a broader trust architecture. Each destination below is a specialist authority — compliance links to them but never replaces their specific truth.
          </p>
        </div>

        <div className="flex flex-col items-start w-full" style={{ gap: '24px' }}>
          {[routes.slice(0, 3), routes.slice(3, 6)].map((row, ri) => (
            <div key={ri} className="flex items-start w-full resources-grid-row" style={{ gap: '24px' }}>
              {row.map((r) => (
                <div
                  key={r.title}
                  className="flex flex-col items-start flex-1 min-w-0 overflow-hidden"
                  style={{ borderRadius: '16px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}
                >
                  <div className="w-full shrink-0" style={{ height: '150px' }}>
                    <img src={`${IMG}/${r.img}`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start w-full" style={{ gap: '12px', padding: '24px' }}>
                    <p className="font-space-grotesk font-bold w-full" style={{ fontSize: '18px', color: '#0a0d13' }}>{r.title}</p>
                    <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', lineHeight: '20px', color: '#4f5e74', height: '60px' }}>{r.desc}</p>
                    <div className="flex items-center" style={{ gap: '6px' }}>
                      <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '14px', color: '#4c86ff' }}>Visit Portal</p>
                      <img src={`${IMG}/arrow-right-blue.svg`} alt="" style={{ width: '14px', height: '14px' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
