import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start justify-center overflow-hidden"
      style={{
        height: '752px',
        padding: '100px 112px',
        backgroundColor: '#0a0f1a'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .trust-hero-content {
            padding-left: 48px !important;
            padding-right: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .trust-hero-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .trust-hero-section {
            height: auto !important;
            min-height: 680px;
            padding: 80px 24px !important;
          }
          .trust-hero-title {
            font-size: 36px !important;
            line-height: 44px !important;
          }
          .trust-hero-actions {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/zoikostream-trust-center/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        {/* Gradient overlay with mix-blend-multiply */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(152deg, rgba(5,10,31,0.6) 0%, rgba(10,26,56,0.6) 31.82%, rgba(5,46,71,0.6) 53.03%, rgba(13,31,51,0.6) 70.71%)',
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="trust-hero-content relative z-10 flex flex-col items-start" style={{ gap: '24px', maxWidth: '984px' }}>

        {/* Badge */}
        <div
          className="flex items-center shrink-0"
          style={{
            padding: '6px 12px',
            borderRadius: '100px',
            backgroundColor: 'rgba(76,134,255,0.12)'
          }}
        >
          <span
            className="uppercase whitespace-nowrap"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '1px',
              color: '#4c86ff'
            }}
          >
            TRUST CENTER
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-space-grotesk font-bold w-full trust-hero-title"
          style={{
            fontSize: '56px',
            lineHeight: '66px',
            letterSpacing: '-1.5px',
            color: '#ffffff'
          }}
        >
          Trust evidence, with scope you can understand.
        </h1>

        {/* Description */}
        <p
          className="font-space-grotesk font-normal w-full"
          style={{
            fontSize: '18px',
            lineHeight: '30px',
            color: '#aab3c4'
          }}
        >
          Use the ZoikoStream Trust Center to find approved trust evidence, see what each record covers, distinguish current from superseded or unavailable material, and reach the authoritative Security, Compliance, Data protection, Service reliability, Subprocessors, Security advisories, or Responsible disclosure destination.
        </p>

        {/* Action Buttons */}
        <div className="trust-hero-actions flex items-center" style={{ gap: '24px', paddingTop: '16px' }}>
          {/* Primary CTA */}
          <button
            className="flex items-center justify-center shrink-0"
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              background: 'linear-gradient(180deg, #33d9c7 0%, #4c86ff 100%)'
            }}
          >
            <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '15px', color: '#04141a' }}>
              Explore Trust Evidence
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            className="flex items-center justify-center shrink-0"
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              border: '1px solid #aab3c4',
              backgroundColor: 'transparent'
            }}
          >
            <span className="font-space-grotesk font-medium whitespace-nowrap" style={{ fontSize: '15px', color: '#eef1f6' }}>
              Browse Trust &amp; Security
            </span>
          </button>
        </div>

        {/* Microcopy Disclaimer */}
        <div className="flex items-center" style={{ gap: '8px', paddingTop: '24px' }}>
          <div className="flex items-center justify-center shrink-0 overflow-hidden" style={{ width: '14px', height: '14px' }}>
            <img
              src="/images/zoikostream-trust-center/info-icon.svg"
              alt=""
              style={{ width: '14px', height: '14px' }}
            />
          </div>
          <p
            className="font-space-grotesk font-normal whitespace-normal md:whitespace-nowrap"
            style={{
              fontSize: '12.5px',
              color: '#707a8c'
            }}
          >
            Evidence applies only to its stated scope, period, version, access state, limitations, and authority. A record is not a universal guarantee.
          </p>
        </div>

      </div>
    </section>
  );
}
