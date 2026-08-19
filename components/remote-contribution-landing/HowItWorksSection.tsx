import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Add the source',
      description: 'Source type, event segment, owner, timing'
    },
    {
      number: '2',
      title: 'Choose method',
      description: 'Availability state, prerequisites, compatibility'
    },
    {
      number: '3',
      title: 'Invite or authorize',
      description: 'Least-privilege access, expiry, privacy notice'
    },
    {
      number: '4',
      title: 'Prepare and test',
      description: 'Camera, mic, permissions, connection checks'
    },
    {
      number: '5',
      title: 'Verify workflow',
      description: 'Rehearsal result, timestamp, tested config'
    },
    {
      number: '6',
      title: 'Check in event day',
      description: 'Presence, changes, revalidation needs'
    },
    {
      number: '7',
      title: 'Operate & recover',
      description: 'Standby, in-program, reconnect, fallback'
    },
    {
      number: '8',
      title: 'Release and close',
      description: 'End access, preserve evidence, follow-up'
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .how-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .how-track {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .how-connector {
            display: none !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/how-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
      </div>

      <div className="how-padding relative z-10 flex flex-col items-end w-full" style={{ gap: '64px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold text-[#0f1b2d] w-full" style={{ fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            How remote contribution works
          </h2>
          <p className="font-space-grotesk font-normal text-[#4f5e74] w-full" style={{ fontSize: '18px', lineHeight: '28.8px' }}>
            Every source follows an eight-stage lifecycle from addition to close. Each stage has a defined owner, required inputs, evidence, and next action.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="how-track flex items-start w-full" style={{ gap: '16px' }}>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start relative flex-1 min-w-[0px]" style={{ gap: '16px' }}>
              
              <div className="flex items-center w-full relative shrink-0">
                
                {/* Number Circle */}
                <div 
                  className="flex flex-col items-center justify-center shrink-0" 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '20px', 
                    background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' 
                  }}
                >
                  <span className="font-space-grotesk font-bold text-white whitespace-nowrap" style={{ fontSize: '16px', lineHeight: 'normal' }}>
                    {step.number}
                  </span>
                </div>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="how-connector flex-1 h-[0px] relative min-w-[1px]">
                    <div className="absolute top-[-2px] left-0 right-0 h-[2px]">
                      <img 
                        src="/images/remote-contribution-landing/how-connector.svg" 
                        alt="" 
                        className="block w-full h-full max-w-none" 
                        style={{ display: 'block' }}
                      />
                    </div>
                  </div>
                )}
                {/* Invisible placeholder for last item to maintain flex rules if needed, but flex-1 handles it */}
                {index === steps.length - 1 && (
                  <div className="how-connector flex-1 h-[0px] relative min-w-[1px] opacity-0" />
                )}

              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start w-full break-words" style={{ gap: '8px' }}>
                <h3 className="font-space-grotesk font-bold text-[#0f1b2d] w-full" style={{ fontSize: '20px', lineHeight: '28px' }}>
                  {step.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#4f5e74] w-full" style={{ fontSize: '14px', lineHeight: '22.75px' }}>
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
