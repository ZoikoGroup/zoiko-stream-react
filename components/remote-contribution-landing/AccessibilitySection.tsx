import React from 'react';

export default function AccessibilitySection() {
  const checklist = [
    {
      title: 'Keyboard',
      desc: 'Every setup, test, status, and recovery control is keyboard operable.'
    },
    {
      title: 'Screen reader',
      desc: 'Controls have accessible names, status uses live regions.'
    },
    {
      title: 'Color',
      desc: 'Pass/fail/degraded states use text and icon semantics, not color alone.'
    },
    {
      title: 'Motion',
      desc: 'Respect reduced-motion preferences; animation is never required.'
    },
    {
      title: 'Zoom and reflow',
      desc: 'Core controls work at 200% zoom without clipping.'
    },
    {
      title: 'Alternative access',
      desc: 'Approved alternative path without requiring disability disclosure.'
    }
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .a11y-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .a11y-split {
            flex-direction: column !important;
          }
          .a11y-banner {
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/accessibility-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.85)' }} />
      </div>

      <div className="a11y-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '600px' }}>
          <h2 className="font-space-grotesk font-bold" style={{ color: '#ffffff', fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.38px' }}>
            Built for everyone
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28px' }}>
            Accessibility is foundational, not an afterthought. Every control surface meets rigorous standards so all operators can contribute without barriers.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="a11y-split flex items-center w-full" style={{ gap: '48px' }}>

          {/* Left: Banner Image */}
          <div
            className="a11y-banner relative shrink-0 overflow-hidden border"
            style={{
              width: '560px',
              height: '420px',
              borderRadius: '24px',
              borderColor: '#4c86ff',
              borderWidth: '1px'
            }}
          >
            <img
              src="/images/remote-contribution-landing/accessibility-banner.png"
              alt="Accessibility banner showing accessible production controls"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ borderRadius: '24px' }}
            />
          </div>

          {/* Right: Checklist */}
          <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '20px' }}>
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start w-full" style={{ gap: '16px' }}>
                {/* Gradient Checkbox Icon */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '12px',
                    background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src="/images/remote-contribution-landing/accessibility-check.svg"
                    alt=""
                    style={{ width: '14px', height: '14px' }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '4px' }}>
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '16px', lineHeight: 'normal' }}>
                    {item.title}
                  </p>
                  <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
