import React from 'react';

export default function LifecycleSection() {
  const steps = [
    { number: '01', title: 'Contribute', subtitle: 'Source handoff', isActive: true },
    { number: '02', title: 'Ingest', subtitle: 'Media accept', isActive: true },
    { number: '03', title: 'Produce', subtitle: 'Session run', isActive: true },
    { number: '04', title: 'Secure', subtitle: 'Stream boundary', isActive: true },
    { number: '05', title: 'Deliver', subtitle: 'Audience reach', isActive: true },
    { number: '06', title: 'Understand', subtitle: 'Observe state', isActive: true },
    { number: '07', title: 'Preserve', subtitle: 'VOD / Archive', isActive: true },
  ];

  return (
    <section className="bg-[#0a0f1a] border-b border-[#232b3a] flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col gap-[12px] items-start relative w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[32px] md:text-[38px] leading-[1.2]">
          Where real-time contribution fits
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Real-time contribution owns the source-to-production handoff — from authorized contributor through verified connection to production acceptance.
        </p>
      </div>

      {/* Progress Rail */}
      <div className="flex flex-col lg:flex-row gap-[8px] items-center lg:items-start py-[24px] relative w-full max-w-[1216px] mx-auto overflow-x-hidden min-h-[120px]">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-1 items-center lg:items-start relative w-full lg:w-auto mt-4 lg:mt-0">
              <div className="flex flex-col gap-[12px] items-center relative w-full">
                
                {/* Circle */}
                <div 
                  className={`flex items-center justify-center rounded-full w-[48px] h-[48px] border shrink-0 transition-colors z-10 ${
                    step.isActive 
                      ? 'bg-[#00d4aa] border-[#00d4aa]' 
                      : 'bg-[#0a0f1a] border-[#232b3a]'
                  }`}
                >
                  <span 
                    className={`font-['Space_Grotesk'] font-bold text-[15px] ${
                      step.isActive ? 'text-[#04141a]' : 'text-[#707a8c]'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                
                {/* Text */}
                <div className="flex flex-col gap-[2px] items-center text-center">
                  <span 
                    className={`font-['Space_Grotesk'] font-bold text-[14px] ${
                      step.isActive ? 'text-[#00d4aa]' : 'text-[#aab3c4]'
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="font-['Space_Grotesk'] font-normal text-[#707a8c] text-[11px]">
                    {step.subtitle}
                  </span>
                </div>

              </div>
              
              {/* Connector Line (except for the last item) */}
              {index < steps.length - 1 && (
                <div 
                  className={`hidden lg:block absolute top-[24px] left-[50%] w-full h-[2px] z-0 ${
                    step.isActive && steps[index + 1].isActive 
                      ? 'bg-[#00d4aa]' 
                      : 'bg-[#00d4aa]' // Always green in the design! Wait, the target image shows green across the whole line!
                  }`} 
                />
              )}
            </div>

            {/* Mobile Vertical Connector Line (except for the last item) */}
            {index < steps.length - 1 && (
              <div 
                className={`lg:hidden w-[2px] h-[40px] my-2 ${
                  step.isActive && steps[index + 1].isActive 
                    ? 'bg-[#00d4aa]' 
                    : 'bg-[#00d4aa]'
                }`} 
              />
            )}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
}
