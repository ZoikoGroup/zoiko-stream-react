import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

export default function CtaBannerSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden cta-section"
      style={{ padding: '120px 112px', backgroundColor: '#0a0f1a' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .cta-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .cta-section { padding: 64px 24px !important; }
          .cta-title { font-size: 30px !important; line-height: 38px !important; }
          .cta-actions { flex-direction: column !important; align-items: stretch !important; width: 100%; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/validation-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,15,26,0.73) 0%, rgba(10,15,26,0.8) 80%, rgba(10,15,26,0.81) 100%)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center" style={{ gap: '24px', maxWidth: '800px' }}>
        <h2 className="font-space-grotesk font-bold text-center w-full cta-title" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
          Need Compliance Evidence for Your Review?
        </h2>
        <p className="font-space-grotesk font-normal text-center w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
          Access our compliance records, request controlled documents, or speak with our compliance team — all without a sales conversation.
        </p>

        <div className="flex items-center cta-actions" style={{ gap: '16px' }}>
          <button
            className="flex items-center justify-center shrink-0"
            style={{ padding: '14px 26px', borderRadius: '10px', background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '15px', color: '#0f1b2d' }}>
              Access Evidence Portal
            </span>
          </button>
          <button
            className="flex items-center justify-center shrink-0"
            style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid #aab3c4', backgroundColor: 'rgba(16,21,30,0.8)', backdropFilter: 'blur(8px)' }}
          >
            <span className="font-space-grotesk font-medium whitespace-nowrap" style={{ fontSize: '15px', color: '#eef1f6' }}>
              Contact Compliance Team
            </span>
          </button>
        </div>

        <p className="font-space-grotesk font-normal text-center w-full" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>
          Free planning reviews align scope transparently beforehand. No payment details required.
        </p>
      </div>
    </section>
  );
}
