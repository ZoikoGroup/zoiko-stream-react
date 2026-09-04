import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const cards = [
  { img: `${IMG}/card-zoiko-managed.png`, title: 'ZoikoStream Managed', desc: 'Infrastructure security, encryption at rest, platform access controls, monitoring, incident response, and security updates.' },
  { img: `${IMG}/card-customer.png`, title: 'Customer Controlled', desc: 'Account credentials, user permissions, content policies, integration endpoints, and network configuration.' },
  { img: `${IMG}/card-third-party.png`, title: 'Third-Party Controlled', desc: 'External identity providers, cloud hosting, CDN delivery, and third-party integrations.' },
  { img: `${IMG}/card-shared-resp.png`, title: 'Shared Responsibility', desc: 'Data classification, access reviews, incident coordination, and compliance alignment.' },
];

export default function SharedResponsibilitySection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-b" style={{ padding: '100px 112px', backgroundColor: '#0a0f1a', borderColor: '#232b3a' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ width: '1440px', height: '780px' }}>
        <img src={`${IMG}/shared-resp-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.78)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Understanding Security Boundaries</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>Approved customer, ZoikoStream, and third-party responsibilities for security and data handling.</p>
        </div>

        <div className="flex items-start w-full" style={{ gap: '24px' }}>
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col items-start flex-1 min-w-0 overflow-hidden border" style={{ backgroundColor: 'rgba(16,21,30,0.8)', borderColor: '#232b3a', borderRadius: '16px' }}>
              <div className="relative w-full shrink-0" style={{ height: '160px' }}>
                <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ padding: '24px', gap: '12px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '18px' }}>{c.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px', lineHeight: '20px' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center w-full" style={{ paddingTop: '16px', gap: '12px' }}>
          <img src={`${IMG}/info-blue.svg`} alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          <p className="font-space-grotesk font-normal flex-1" style={{ color: '#aab3c4', fontSize: '13px' }}>
            Responsibility boundaries apply only when authoritative guidance establishes them. Contact Security or your account team for implementation-specific questions.
          </p>
        </div>
      </div>
    </section>
  );
}
