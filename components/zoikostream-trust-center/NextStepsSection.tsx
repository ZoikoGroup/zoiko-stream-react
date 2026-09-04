import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const actionCards = [
  { img: `${IMG}/card-docs.png`, title: 'Browse Documentation', desc: 'Explore developer guides, API references, and integration documentation.', action: 'Open Docs →' },
  { img: `${IMG}/card-support.png`, title: 'Contact Support', desc: 'Reach our support team for account-specific assistance.', action: 'Get Support →' },
  { img: `${IMG}/card-enterprise.png`, title: 'Enterprise Evaluation', desc: 'After reviewing evidence, speak with our enterprise team.', action: 'Talk to an Expert →' },
  { img: `${IMG}/card-accessibility.png`, title: 'Accessibility', desc: 'Learn about our accessibility commitment and get assistance.', action: 'Accessibility →' },
];

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px' }}>
      <img src={`${IMG}/specialist-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      <div className="absolute top-[-88px] left-[-140px] pointer-events-none" style={{ width: '420px', height: '420px' }}>
        <img src={`${IMG}/bg-blob-1.svg`} alt="" className="block max-w-none" style={{ margin: '-21.43%', width: '142.86%', height: '142.86%' }} />
      </div>
      <div className="absolute bottom-[-258px] right-[-153px] pointer-events-none" style={{ width: '520px', height: '520px' }}>
        <img src={`${IMG}/bg-blob-2.svg`} alt="" className="block max-w-none" style={{ margin: '-21.15%', width: '142.3%', height: '142.3%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full">
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            What Would You Like to Do Next?
          </h2>
        </div>

        <div className="flex items-start w-full" style={{ gap: '24px' }}>
          {actionCards.map((c, i) => (
            <div key={i} className="flex flex-col items-start flex-1 min-w-0 overflow-hidden border" style={{ backgroundColor: '#0a0f1a', borderColor: '#232b3a', borderRadius: '16px' }}>
              <div className="relative w-full shrink-0" style={{ height: '140px' }}>
                <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ padding: '20px', gap: '12px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>{c.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px', lineHeight: '18px' }}>{c.desc}</p>
                <div className="flex items-center" style={{ paddingTop: '8px' }}>
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#4c86ff', fontSize: '13.5px' }}>{c.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
