import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const faqsCol1 = [
  { q: 'What is the difference between a certification and a mapping?', a: 'A certification means an independent auditor has verified controls against a standard. A mapping shows alignment to a framework but does not equal certification or legal compliance.' },
  { q: 'Can I access trust evidence without speaking to sales?', a: 'Yes. All public evidence is available immediately. Controlled evidence has an operational access workflow separate from commercial conversations.' },
  { q: 'How do I know if evidence is current?', a: 'Every record has an explicit state: Current, Review Required, Superseded, Expired, or Withdrawn. Current records have a valid review date and source authority.' },
  { q: 'What does Controlled access mean?', a: 'Controlled evidence requires identity verification before access. Access requirements are shown before any information is collected, and the process is not a marketing opt-in.' },
];

const faqsCol2 = [
  { q: 'Does the Trust Center show live service health?', a: 'No. Live operational status, incidents, and maintenance are on the System Status page. The Trust Center links to it but never caches a green status claim.' },
  { q: 'How do I report a security vulnerability?', a: 'Use the Responsible Disclosure link, available on every page. Vulnerability reports are never routed to generic support or sales.' },
  { q: 'What happens when evidence is withdrawn?', a: 'The restricted asset is removed immediately. Public historical notice is retained only when policy permits. Caches, search indexes, and tokens are revoked.' },
  { q: 'Are trust searches used for lead scoring?', a: 'No. Trust exploration never becomes hidden lead scoring, account-risk scoring, churn scoring, or behavioral retargeting.' },
];

export default function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px', backgroundColor: '#0a0f1a' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ width: '1440px', height: '920px' }}>
        <img src={`${IMG}/faq-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.69)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '48px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Trust Center FAQ</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>Stable answers about how ZoikoStream manages trust evidence.</p>
        </div>

        <div className="flex items-start w-full" style={{ gap: '40px' }}>
          <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '16px' }}>
            {faqsCol1.map((f, i) => (
              <div key={i} className="flex flex-col items-start w-full border" style={{ padding: '24px', gap: '12px', backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '10px' }}>
                <p className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '16px' }}>{f.q}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px', lineHeight: '20px' }}>{f.a}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '16px' }}>
            {faqsCol2.map((f, i) => (
              <div key={i} className="flex flex-col items-start w-full border" style={{ padding: '24px', gap: '12px', backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '10px' }}>
                <p className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '16px' }}>{f.q}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px', lineHeight: '20px' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
