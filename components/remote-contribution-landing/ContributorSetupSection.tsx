import React from 'react';

export default function ContributorSetupSection() {
  const steps = [
    {
      number: '1',
      title: 'Invitation landing',
      description: 'Clear purpose, date, and access credentials check.'
    },
    {
      number: '2',
      title: 'Identity & access',
      description: 'Simple corporate directory verification.'
    },
    {
      number: '3',
      title: 'Device selection',
      description: 'Interactive camera, mic, and speaker check.'
    },
    {
      number: '4',
      title: 'Environment check',
      description: 'Auto bandwidth, noise, and latency pass.'
    },
    {
      number: '5',
      title: 'Preview & privacy',
      description: 'See your frame exactly as the producer will.'
    },
    {
      number: '6',
      title: 'Ready room',
      description: 'Direct communication line to local stage managers.'
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .setup-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .setup-split {
            flex-direction: column !important;
          }
          .setup-mockup {
            width: 100% !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/setup-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none opacity-80"
        />
      </div>

      <div className="setup-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            A contributor experience built for confidence, not confusion
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            The most human part of the workflow. Contributors see a calm, respectful, self-explanatory setup flow — no production infrastructure jargon.
          </p>
        </div>

        {/* Split Content */}
        <div className="setup-split flex items-center w-full" style={{ gap: '48px' }}>
          
          {/* Left Column: Steps */}
          <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '24px' }}>
            <h3 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '24px', lineHeight: 'normal' }}>
              A frictionless six-step onboarding path
            </h3>
            <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-center w-full bg-white border" 
                  style={{ padding: '12px', gap: '16px', borderRadius: '12px', borderColor: '#e1e6eb' }}
                >
                  <div className="flex items-center justify-center shrink-0" style={{ width: '28px', height: '28px', borderRadius: '14px' }}>
                    <span className="font-space-grotesk font-bold" style={{ color: '#34d4ca', fontSize: '13px', lineHeight: 'normal' }}>
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '2px' }}>
                    <h4 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '15px' }}>
                      {step.title}
                    </h4>
                    <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '13px' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div 
            className="setup-mockup flex flex-col items-start shrink-0 border"
            style={{ 
              width: '584px', 
              padding: '32px', 
              gap: '24px', 
              backgroundColor: '#121625',
              borderColor: '#1e293b',
              borderRadius: '20px',
              boxShadow: '0px 16px 16px rgba(0,0,0,0.25)' 
            }}
          >
            {/* Mockup Header */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start" style={{ gap: '4px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '16px' }}>Contributor Setup</p>
                <p className="font-space-grotesk font-normal whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '12px' }}>Session: Global Q3 Product Keynote</p>
              </div>
              <div className="flex items-center justify-center" style={{ gap: '6px', padding: '4px 10px', borderRadius: '100px', backgroundColor: 'rgba(16,185,129,0.13)' }}>
                <img src="/images/remote-contribution-landing/setup-ellipse.svg" alt="" style={{ width: '6px', height: '6px' }} />
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#10b981', fontSize: '10px' }}>PREVIEW ACTIVE</span>
              </div>
            </div>

            {/* Video Preview Box */}
            <div className="w-full relative shrink-0" style={{ height: '240px', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/images/remote-contribution-landing/video-preview.png" alt="Video Preview" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
            </div>

            {/* Device Pickers */}
            <div className="flex items-start w-full" style={{ gap: '12px' }}>
              <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '6px' }}>
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '11px' }}>CAMERA SOURCE</span>
                <div className="flex items-center w-full border" style={{ borderColor: '#2d3f58', backgroundColor: '#1e293b', height: '40px', padding: '0 12px', borderRadius: '8px' }}>
                  <span className="font-space-grotesk font-normal truncate" style={{ color: '#ffffff', fontSize: '13px' }}>HD Pro Webcam C920</span>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '6px' }}>
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#aab3c4', fontSize: '11px' }}>MICROPHONE</span>
                <div className="flex items-center w-full border" style={{ borderColor: '#2d3f58', backgroundColor: '#1e293b', height: '40px', padding: '0 12px', borderRadius: '8px' }}>
                  <span className="font-space-grotesk font-normal truncate" style={{ color: '#ffffff', fontSize: '13px' }}>Yeti Stereo Microphone</span>
                </div>
              </div>
            </div>

            {/* Environment Checks */}
            <div className="flex flex-col items-start w-full" style={{ gap: '10px' }}>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <img src="/images/remote-contribution-landing/setup-check.svg" alt="" style={{ width: '14px', height: '14px' }} />
                  <span className="font-space-grotesk font-normal" style={{ color: '#ffffff', fontSize: '13px' }}>Bandwidth (35 Mbps upload)</span>
                </div>
                <span className="font-space-grotesk font-bold" style={{ color: '#10b981', fontSize: '12px' }}>EXCELLENT</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <img src="/images/remote-contribution-landing/setup-check.svg" alt="" style={{ width: '14px', height: '14px' }} />
                  <span className="font-space-grotesk font-normal" style={{ color: '#ffffff', fontSize: '13px' }}>Audio isolation</span>
                </div>
                <span className="font-space-grotesk font-bold" style={{ color: '#10b981', fontSize: '12px' }}>CLEAR</span>
              </div>
            </div>

            {/* Join Button */}
            <button className="flex items-center justify-center w-full" style={{ height: '48px', borderRadius: '10px', background: 'linear-gradient(90deg, #33d9c7 0%, #4c86ff 100%)' }}>
              <span className="font-space-grotesk font-bold" style={{ color: '#0a0d13', fontSize: '15px' }}>Join when ready</span>
            </button>
            
          </div>
        </div>

        {/* Trust Row */}
        <div className="flex items-center w-full bg-white border" style={{ borderColor: '#e1e6eb', gap: '12px', padding: '24px', borderRadius: '12px' }}>
          <img src="/images/remote-contribution-landing/setup-shield.svg" alt="" className="shrink-0" style={{ width: '20px', height: '20px' }} />
          <p className="flex-1 font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '14px', lineHeight: '22.75px' }}>
            <strong className="font-inter font-bold" style={{ color: '#0f1b2d' }}>Data Minimization: </strong>
            Operational participation and commercial lead generation are separate purposes. A remote contributor never has to consent to marketing to test or join an event.
          </p>
        </div>

      </div>
    </section>
  );
}
