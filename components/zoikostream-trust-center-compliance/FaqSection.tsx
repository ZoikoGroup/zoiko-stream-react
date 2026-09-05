'use client';

import React, { useState } from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const faqs = [
  {
    q: 'What is the difference between a certification and an attestation?',
    a: 'A certification is issued by an accredited body confirming a management system meets a formal standard (e.g. ISO 27001). An attestation is a CPA firm’s opinion, based on testing, that controls operated effectively over a stated period (e.g. SOC 2 Type II). Neither substitutes for the other.',
  },
  {
    q: 'How do I access controlled compliance documents like SOC 2 reports?',
    a: 'Submit a request through the Controlled Evidence Access workflow above. After an authorization review against our document classification policy, approved documents are delivered through a secure, time-limited, watermarked portal.',
  },
  {
    q: 'Does ZoikoStream claim full compliance with every framework listed?',
    a: 'No. Each entry in the Framework & Requirement Directory states its exact status — Current, In Progress, or Planned — along with defined scope. We do not represent planned or in-progress work as completed compliance.',
  },
  {
    q: 'How often is compliance evidence reviewed and updated?',
    a: 'Review cadence follows each framework’s own cycle: attestations are renewed annually, certifications follow surveillance and recertification audits, and assessments are refreshed when scope or regulation changes. Every update is logged in Evidence History & Corrections.',
  },
  {
    q: 'What happens when compliance evidence expires or is withdrawn?',
    a: 'Expired or withdrawn evidence is removed from the active inventory and its status is updated immediately. A historical record is retained only where policy permits, and any cached copies or shared links are revoked.',
  },
  {
    q: 'Who should I contact for compliance questions not answered here?',
    a: 'Reach our compliance team through the Request Controlled Documents action above, or via the Trust Center contact routes, for anything not covered by the public evidence on this page.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden faq-section"
      style={{ padding: '100px 112px 120px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .faq-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .faq-section { padding: 64px 24px 80px !important; }
        }
      `}} />

      <img src="/images/zoikostream-data-protection/faq-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-119px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Compliance FAQ
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Clear answers to the questions compliance, risk, and procurement teams ask most.
          </p>
        </div>

        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={f.q}
                className="flex flex-col items-start w-full"
                style={{ padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <p className="font-space-grotesk font-bold flex-1 min-w-0" style={{ fontSize: '16px', color: '#0a0d13' }}>{f.q}</p>
                  <div className="flex items-center justify-center shrink-0" style={{ width: '24px', height: '24px' }}>
                    <img
                      src={`${IMG}/plus.svg`}
                      alt=""
                      style={{ width: '14px', height: '14px', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.15s ease' }}
                    />
                  </div>
                </button>
                {isOpen && (
                  <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '14px', lineHeight: '22px', color: '#4f5e74', marginTop: '16px' }}>
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
