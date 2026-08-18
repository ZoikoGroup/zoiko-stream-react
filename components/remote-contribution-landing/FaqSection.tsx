'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'What contribution methods are supported?',
    a: 'Supported methods depend on your event type, account, region, and current service availability. Method eligibility is verified during event planning — not assumed from a generic feature list.'
  },
  {
    q: 'Can I test remote contribution before the event?',
    a: 'Yes. Preflight checks can be run within a defined test window. Results are scoped to the tested configuration and timestamp. Material changes after testing may require revalidation.'
  },
  {
    q: 'What happens if a remote source disconnects during the event?',
    a: 'The system shows disconnected state, last known configuration, and approved recovery options. If a fallback source was predefined and verified, it can be activated by an authorized operator.'
  },
  {
    q: 'How is contributor privacy protected?',
    a: 'Contributor data collection is minimized to operational need. Marketing consent is separate from event participation. Contributors are never automatically converted into sales leads.'
  },
  {
    q: 'Does remote contribution work from any device or location?',
    a: 'Compatibility depends on the contribution method, device, browser, network conditions, and event configuration. Specific compatibility is verified during planning — we do not make universal coverage claims.'
  },
  {
    q: 'Can I reuse contribution configurations for recurring events?',
    a: 'Source-role templates and checklist structures can be saved for reuse. However, prior test results never become current pass results — each event requires fresh verification.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 border-t border-b"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '120px', borderColor: '#e1e6eb' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .faq-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        .faq-accordion-body {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
        .faq-accordion-body.open {
          max-height: 300px;
          opacity: 1;
        }
        .faq-accordion-body.closed {
          max-height: 0;
          opacity: 0;
        }
        .faq-toggle-icon {
          transition: transform 0.3s ease;
        }
        .faq-toggle-icon.open {
          transform: rotate(45deg);
        }
      `}} />

      <div className="faq-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Title */}
        <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
          Frequently asked questions
        </h2>

        {/* Accordion */}
        <div className="flex flex-col items-start w-full" style={{ gap: '0px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="flex flex-col items-start w-full border"
              style={{
                padding: '24px',
                gap: '12px',
                backgroundColor: '#f8fafc',
                borderColor: '#e5e7eb',
                borderRadius: '12px',
                marginBottom: i < faqs.length - 1 ? '8px' : '0'
              }}
            >
              {/* Header Row */}
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <p className="font-space-grotesk font-bold flex-1 min-w-0" style={{ color: '#0f1b2d', fontSize: '18px', lineHeight: 'normal' }}>
                  {faq.q}
                </p>
                <div
                  className={`faq-toggle-icon flex items-center justify-center shrink-0 overflow-hidden${openIndex === i ? ' open' : ''}`}
                  style={{ width: '20px', height: '20px' }}
                >
                  <img
                    src="/images/remote-contribution-landing/faq-plus.svg"
                    alt=""
                    style={{ width: '20px', height: '20px', display: 'block' }}
                  />
                </div>
              </button>

              {/* Body */}
              <div className={`faq-accordion-body${openIndex === i ? ' open' : ' closed'} w-full`} style={{ paddingTop: openIndex === i ? '12px' : '0' }}>
                <p className="font-space-grotesk font-normal flex-1 min-w-0" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
