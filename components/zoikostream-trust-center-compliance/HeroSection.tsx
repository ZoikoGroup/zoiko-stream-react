import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const trustCards = [
  {
    title: 'SOC 2 Type II',
    desc: 'Attested annually by independent third-party CPA auditors. Clear operational safety records locked.',
  },
  {
    title: 'ISO 27001:2022',
    desc: 'Global standard certification mapping strict system security policies across production infrastructure.',
  },
  {
    title: 'GDPR Compliant',
    desc: 'Rigorous data processing safety structures mapping EEA regulations for ultimate client privacy.',
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden hero-section"
      style={{
        height: '800px',
        padding: '100px 112px',
        backgroundColor: '#0a0f1a',
        borderBottom: '1px solid #232b3a',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .hero-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .hero-section { height: auto !important; padding: 64px 24px !important; }
          .hero-title { font-size: 34px !important; line-height: 42px !important; }
          .hero-actions { flex-direction: column !important; align-items: stretch !important; }
          .hero-actions > * { justify-content: center !important; }
          .hero-cards-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/hero-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,15,26,0.63) 0%, rgba(10,15,26,0.69) 80%, rgba(10,15,26,0.7) 100%)' }}
        />
      </div>
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-347px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '24px' }}>
        <div className="flex items-center shrink-0" style={{ padding: '6px 12px', borderRadius: '100px', border: '1px solid #34d4ca' }}>
          <span className="font-space-grotesk font-bold uppercase whitespace-nowrap" style={{ fontSize: '11px', letterSpacing: '1px', color: '#34d4ca' }}>
            TRUST &amp; SECURITY
          </span>
        </div>

        <h1 className="font-space-grotesk font-bold w-full hero-title" style={{ fontSize: '56px', lineHeight: '66px', letterSpacing: '-1.5px', color: '#eef1f6' }}>
          Compliance at ZoikoStream
        </h1>

        <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '18px', lineHeight: '28.8px', color: '#aab3c4' }}>
          Every compliance claim is backed by evidence — with exact type, scope, status, and limitations. No blanket statements. No badge walls. Just transparent, verifiable compliance records.
        </p>

        <div className="flex items-center hero-actions" style={{ gap: '16px', marginTop: '0px' }}>
          <button
            className="flex items-center justify-center shrink-0"
            style={{ padding: '14px 26px', borderRadius: '10px', background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '15px', color: '#0f1b2d' }}>
              Explore Compliance Evidence
            </span>
          </button>
          <button
            className="flex items-center justify-center shrink-0"
            style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid #aab3c4', backgroundColor: 'transparent' }}
          >
            <span className="font-space-grotesk font-medium whitespace-nowrap" style={{ fontSize: '15px', color: '#eef1f6' }}>
              Download Security Package
            </span>
          </button>
        </div>

        <div className="flex items-start w-full hero-cards-row" style={{ gap: '24px', marginTop: '32px' }}>
          {trustCards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-start flex-1 min-w-0"
              style={{
                gap: '16px',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #232b3a',
                backgroundColor: 'rgba(16,21,30,0.8)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '20px', color: '#eef1f6' }}>{c.title}</p>
                <div className="shrink-0 overflow-hidden" style={{ width: '24px', height: '24px' }}>
                  <img src={`${IMG}/shield.svg`} alt="" style={{ width: '24px', height: '24px' }} />
                </div>
              </div>
              <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '14px', color: '#aab3c4' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
