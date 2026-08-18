import React from 'react';

export default function HeroSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1440 860' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(155.52 0 0 139.32 144 774)'><stop stop-color='rgba(51,217,199,0.14118)' offset='0'/><stop stop-color='rgba(51,217,199,0)' offset='0.65'/></radialGradient></defs></svg>"), linear-gradient(90deg, rgb(10, 13, 19) 0%, rgb(10, 13, 19) 100%)`
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .hero-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-content-wrapper {
            flex-direction: column !important;
            gap: 60px !important;
          }
          .hero-left-col, .hero-right-col {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}} />

      {/* Background Scenery */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full" style={{ transform: 'scaleX(-1)' }}>
          <img 
            src="/images/event-resilience/hero-scenery-2.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.47)' }} />
        </div>
      </div>

      <div className="hero-content-wrapper hero-padding relative z-10 flex flex-row items-center justify-between w-full" style={{ gap: '40px', maxWidth: '1440px' }}>
        
        {/* Left Column */}
        <div className="hero-left-col flex flex-col items-start" style={{ width: '620px', gap: '32px' }}>
          
          <div className="flex items-start border border-[#33d9c7]" style={{ padding: '6px 12px', borderRadius: '200px' }}>
            <p className="font-space-grotesk font-bold uppercase whitespace-nowrap" style={{ color: '#33d9c7', fontSize: '11px', letterSpacing: '1px' }}>
              Remote Contribution
            </p>
          </div>

          <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
            <h1 className="font-space-grotesk font-bold w-full" style={{ color: '#ffffff', fontSize: '60px', lineHeight: '74.16px', letterSpacing: '-0.72px' }}>
              Bring remote contributors into the live production with confidence
            </h1>
            <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
              Plan, authorize, test, and operate remote video and audio sources with clear readiness, privacy, and recovery states before they enter the live program.
            </p>
          </div>

          <div className="flex items-center flex-wrap" style={{ gap: '16px' }}>
            <button 
              className="flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
              style={{ 
                background: 'linear-gradient(to right, #33d9c7, #4c86ff)',
                padding: '14px 26px',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(51,217,199,0.2)'
              }}
            >
              <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0a0d13', fontSize: '15px' }}>
                Start event brief
              </span>
            </button>
            <button 
              className="flex items-center justify-center bg-transparent transition-colors hover:bg-white/5 border border-[#6f7787]"
              style={{
                padding: '14px 28px',
                borderRadius: '10px'
              }}
            >
              <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '15px' }}>
                Talk to an expert
              </span>
            </button>
          </div>

          <p className="font-space-grotesk font-normal opacity-60" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22.75px' }}>
            Contribution method, compatibility, availability, and service scope are verified for the event context.
          </p>

        </div>

        {/* Right Column: Dashboard UI */}
        <div 
          className="hero-right-col flex flex-col items-start border border-[#1e293b] backdrop-blur-[12px]" 
          style={{ 
            width: '520px', 
            padding: '28px', 
            gap: '20px', 
            borderRadius: '20px', 
            backgroundColor: 'rgba(18,22,37,0.8)' 
          }}
        >
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start" style={{ gap: '4px' }}>
              <p className="font-space-grotesk font-bold text-white text-[16px]">
                Contribution Readiness
              </p>
              <p className="font-space-grotesk font-normal opacity-70 text-[#aab3c4] text-[12px]">
                Webinar: Q1 Corporate All-Hands
              </p>
            </div>
            
            <div className="flex items-center" style={{ padding: '4px 10px', borderRadius: '100px', backgroundColor: 'rgba(239,68,68,0.13)', gap: '6px' }}>
              <div className="flex shrink-0 items-center justify-center" style={{ width: '8px', height: '8px' }}>
                <img src="/images/event-resilience/pulse-ellipse.svg" alt="" className="w-full h-full" />
              </div>
              <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ef4444', fontSize: '11px' }}>
                PRE-FLIGHT
              </p>
            </div>
          </div>

          {/* Roster List */}
          <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
            
            {/* Row 1 */}
            <div className="flex items-center justify-between w-full" style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(30,41,59,0.2)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <img src="/images/event-resilience/user-avatar-1.png" alt="Sarah Jenkins" className="rounded-full object-cover" style={{ width: '36px', height: '36px' }} />
                <div className="flex flex-col items-start" style={{ gap: '2px' }}>
                  <p className="font-space-grotesk font-bold text-white text-[14px]">Sarah Jenkins</p>
                  <p className="font-space-grotesk font-normal text-[#aab3c4] text-[12px]">Keynote Speaker (London)</p>
                </div>
              </div>
              <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#10b981', fontSize: '12px' }}>Verified</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between w-full" style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(30,41,59,0.2)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <img src="/images/event-resilience/user-avatar-2.png" alt="Marcus Vance" className="rounded-full object-cover" style={{ width: '36px', height: '36px' }} />
                <div className="flex flex-col items-start" style={{ gap: '2px' }}>
                  <p className="font-space-grotesk font-bold text-white text-[14px]">Marcus Vance</p>
                  <p className="font-space-grotesk font-normal text-[#aab3c4] text-[12px]">CFO presentation (NY Office)</p>
                </div>
              </div>
              <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(245,158,11,0.1)' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#f59e0b', fontSize: '12px' }}>Config Changed</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between w-full" style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(30,41,59,0.2)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <img src="/images/event-resilience/user-avatar-3.png" alt="Dr. Aris Thorne" className="rounded-full object-cover" style={{ width: '36px', height: '36px' }} />
                <div className="flex flex-col items-start" style={{ gap: '2px' }}>
                  <p className="font-space-grotesk font-bold text-white text-[14px]">Dr. Aris Thorne</p>
                  <p className="font-space-grotesk font-normal text-[#aab3c4] text-[12px]">Panelist (Zurich)</p>
                </div>
              </div>
              <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#3b82f6', fontSize: '12px' }}>Standby</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between w-full" style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'rgba(30,41,59,0.2)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <img src="/images/event-resilience/user-avatar-4.png" alt="Elena Rostova" className="rounded-full object-cover" style={{ width: '36px', height: '36px' }} />
                <div className="flex flex-col items-start" style={{ gap: '2px' }}>
                  <p className="font-space-grotesk font-bold text-white text-[14px]">Elena Rostova</p>
                  <p className="font-space-grotesk font-normal text-[#aab3c4] text-[12px]">Product Demo (Tokyo)</p>
                </div>
              </div>
              <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(239,68,68,0.1)' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ef4444', fontSize: '12px' }}>Needs Action</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
