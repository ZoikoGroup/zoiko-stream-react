import React from 'react';

const ethicsPoints = [
  {
    title: 'Minimum data',
    description: "We ask only what's needed to scope resilience."
  },
  {
    title: 'No hidden lead scoring',
    description: "We don't track page behavior for scoring."
  },
  {
    title: 'Privacy-first structure',
    description: "The core form works without optional cookies."
  },
  {
    title: 'Expert verification',
    description: "Your brief routes to qualified planning review."
  }
];

export default function EventBriefSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0f1a', paddingTop: '100px', paddingBottom: '100px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .brief-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        .brief-input::placeholder {
          color: rgba(238, 241, 246, 0.8) !important;
        }
      `}} />

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/event-brief-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.78)' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[100px]" style={{ width: '400px', height: '400px' }}>
          <img src="/images/event-resilience/event-brief-ellipse-1.svg" alt="" className="absolute inset-0 w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-100px] top-[250px]" style={{ width: '350px', height: '350px' }}>
          <img src="/images/event-resilience/event-brief-ellipse-2.svg" alt="" className="absolute inset-0 w-full h-full max-w-none" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start w-full brief-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#eef1f6', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Start your event resilience brief
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#aab3c4', fontSize: '18px', maxWidth: '900px' }}>
          Capture the minimum information needed to scope resilience planning. Submitting a brief starts<br/>planning and review — it does not confirm booking, staffing, or availability.
        </p>
      </div>

      <div className="relative z-10 w-full brief-section-padding">
        <div className="flex flex-col lg:flex-row items-start w-full" style={{ gap: '48px' }}>
          
          {/* Form Column */}
          <div className="flex flex-col flex-1 w-full" style={{ gap: '24px' }}>
            
            <div className="flex flex-col md:flex-row w-full" style={{ gap: '20px' }}>
              <div className="flex flex-col flex-1" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Work email</label>
                <div className="flex items-center w-full border" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px' }}>
                  <input type="text" placeholder="you@organization.com" className="bg-transparent border-none outline-none w-full font-space-grotesk brief-input" style={{ color: '#eef1f6', fontSize: '14px' }} />
                </div>
              </div>
              <div className="flex flex-col flex-1" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Organization</label>
                <div className="flex items-center w-full border" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px' }}>
                  <input type="text" placeholder="e.g. Acme Corp" className="bg-transparent border-none outline-none w-full font-space-grotesk brief-input" style={{ color: '#eef1f6', fontSize: '14px' }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full" style={{ gap: '20px' }}>
              <div className="flex flex-col flex-1" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Event date/time window + timezone</label>
                <div className="flex items-center w-full border" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px' }}>
                  <input type="text" placeholder="e.g. Oct 12, 2026, 2:00 PM EST" className="bg-transparent border-none outline-none w-full font-space-grotesk brief-input" style={{ color: '#eef1f6', fontSize: '14px' }} />
                </div>
              </div>
              <div className="flex flex-col flex-1" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Event type</label>
                <div className="flex items-center w-full border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px', gap: '8px' }}>
                  <span className="flex-1 font-space-grotesk opacity-80" style={{ color: '#eef1f6', fontSize: '14px' }}>Select type...</span>
                  <img src="/images/event-resilience/icon-chevron-down.svg" alt="" style={{ width: '16px', height: '16px' }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full" style={{ gap: '10px' }}>
              <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Venue model</label>
              <div className="flex flex-wrap items-start" style={{ gap: '16px' }}>
                <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#34d4ca', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                  <img src="/images/event-resilience/icon-radio-checked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                  <span className="font-space-grotesk font-medium" style={{ color: '#eef1f6', fontSize: '13px' }}>Fixed venue</span>
                </div>
                <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                  <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                  <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Remote</span>
                </div>
                <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                  <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                  <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Multi-location</span>
                </div>
                <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                  <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                  <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Not decided</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full" style={{ gap: '20px' }}>
              <div className="flex flex-col flex-1" style={{ gap: '8px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Audience/access intent</label>
                <div className="flex items-center w-full border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px', gap: '8px' }}>
                  <span className="flex-1 font-space-grotesk opacity-80" style={{ color: '#eef1f6', fontSize: '14px' }}>Public</span>
                  <img src="/images/event-resilience/icon-chevron-down.svg" alt="" style={{ width: '16px', height: '16px' }} />
                </div>
              </div>
              <div className="flex flex-col flex-1" style={{ gap: '10px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Remote Contribution Landing</label>
                <div className="flex flex-wrap items-start" style={{ gap: '16px' }}>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Yes</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>No</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#34d4ca', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-checked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#eef1f6', fontSize: '13px' }}>Not decided</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full" style={{ gap: '20px' }}>
              <div className="flex flex-col flex-1" style={{ gap: '10px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Captions/languages/alternative access</label>
                <div className="flex flex-wrap items-start" style={{ gap: '16px' }}>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#34d4ca', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-checked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#eef1f6', fontSize: '13px' }}>Yes</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>No</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Not decided</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1" style={{ gap: '10px' }}>
                <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Recording/replay intent</label>
                <div className="flex flex-wrap items-start" style={{ gap: '16px' }}>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#34d4ca', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-checked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#eef1f6', fontSize: '13px' }}>Yes</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>No</span>
                  </div>
                  <div className="flex items-center border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '8px 12px', gap: '8px', borderRadius: '6px' }}>
                    <img src="/images/event-resilience/icon-radio-unchecked.svg" alt="" style={{ width: '12px', height: '12px' }} />
                    <span className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '13px' }}>Not decided</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full" style={{ gap: '8px' }}>
              <label className="font-space-grotesk font-medium" style={{ color: '#aab3c4', fontSize: '14px' }}>Service interest</label>
              <div className="flex items-center w-full border cursor-pointer" style={{ backgroundColor: '#10151e', borderColor: '#232b3a', padding: '12px 16px', borderRadius: '8px', gap: '8px' }}>
                <span className="flex-1 font-space-grotesk opacity-80" style={{ color: '#eef1f6', fontSize: '14px' }}>Planning only</span>
                <img src="/images/event-resilience/icon-chevron-down.svg" alt="" style={{ width: '16px', height: '16px' }} />
              </div>
            </div>

            <div className="flex flex-col w-full items-start" style={{ gap: '16px', paddingTop: '12px' }}>
              <button 
                className="flex items-center justify-center cursor-pointer"
                style={{ 
                  background: 'linear-gradient(to right, #00d4aa, #4c86ff)',
                  boxShadow: '0px 4px 8px rgba(0, 212, 170, 0.2)',
                  padding: '14px 32px',
                  borderRadius: '10px',
                  width: 'max-content'
                }}
              >
                <span className="font-space-grotesk font-bold" style={{ color: '#04141a', fontSize: '15px' }}>Submit event brief</span>
              </button>
              <p className="font-space-grotesk font-normal" style={{ color: '#707a8c', fontSize: '12px', lineHeight: '18px' }}>
                Submitting this brief means request planning/review. It does not confirm booking, availability, or service scope.
              </p>
            </div>

          </div>

          {/* Sidebar Column */}
          <div 
            className="flex flex-col border shrink-0" 
            style={{ backgroundColor: '#0d1520', borderColor: '#2a3547', width: '100%', maxWidth: '420px', padding: '32px', gap: '24px', borderRadius: '16px' }}
          >
            <p className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '18px' }}>
              Resilience Planning Ethics
            </p>
            <div className="flex flex-col w-full" style={{ gap: '18px' }}>
              {ethicsPoints.map((point, i) => (
                <div key={i} className="flex items-start" style={{ gap: '12px' }}>
                  <div 
                    className="flex flex-col items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: 'rgba(52,212,202,0.1)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '12px'
                    }}
                  >
                    <img src="/images/event-resilience/icon-check.svg" alt="" style={{ width: '14px', height: '14px' }} />
                  </div>
                  <div className="flex flex-col flex-1" style={{ gap: '4px' }}>
                    <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#eef1f6', fontSize: '14px' }}>
                      {point.title}
                    </p>
                    <p className="font-space-grotesk font-normal leading-[19.5px]" style={{ color: '#8c9baf', fontSize: '13px' }}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
