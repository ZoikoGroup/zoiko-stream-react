import React from 'react';

const steps = [
  { id: 1, name: 'Event Context', active: true },
  { id: 2, name: 'Audience Gate', active: false },
  { id: 3, name: 'Venue/Source', active: false },
  { id: 4, name: 'Production', active: false },
  { id: 5, name: 'Access & Privacy', active: false },
];

export default function StepperPreviewSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/stepper-preview-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#0a0d13] text-3xl md:text-[38px] leading-tight md:leading-[60.8px] tracking-[-0.38px]">
            The Interactive Planning Flow
          </h2>
          <p className="font-space-grotesk font-normal text-[#374151] text-[16px] max-w-[800px]">
            Our progressive setup flows seamlessly from baseline details to exact archival policy controls.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="flex flex-col md:flex-row gap-[16px] w-full p-[24px] rounded-[16px] bg-white relative shadow-[inset_0px_2px_4px_0px_#4c86ff,inset_0px_-1px_4px_0px_#4c86ff,0px_0px_0px_1px_#34d4ca]">
          
          {/* Left Navigation */}
          <div className="flex flex-col gap-[20px] w-full md:w-[300px] flex-shrink-0 pt-[8px]">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`flex items-center gap-[12px] cursor-pointer ${step.active ? '' : 'opacity-80 hover:opacity-100 transition-opacity'}`}
              >
                <div className={`w-[24px] h-[24px] rounded-[12px] flex items-center justify-center flex-shrink-0 ${step.active ? 'bg-[#33d9c7]' : 'bg-[#eef1f6]'}`}>
                  <span className={`font-space-grotesk font-bold text-[12px] ${step.active ? 'text-[#171b22]' : 'text-[#6b7484]'}`}>
                    {step.id}
                  </span>
                </div>
                <span className={`font-space-grotesk font-medium text-[14px] ${step.active ? 'text-[#33d9c7]' : 'text-[#374151]'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Form Area */}
          <div className="flex flex-col gap-[20px] w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[24px]">
            <h3 className="font-space-grotesk font-bold text-[#0a0d13] text-[18px]">
              Step 1: Event Context
            </h3>

            <div className="flex flex-col gap-[16px] w-full">
              
              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-space-grotesk font-medium text-[#374151] text-[14px]">
                  Event Name
                </label>
                <div className="bg-white border border-[#e2e8f0] rounded-[6px] px-[16px] py-[12px] flex items-center">
                  <span className="font-space-grotesk font-normal text-[#6b7484] text-[14px] truncate w-full">
                    Summer Music Festival 2025
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-space-grotesk font-medium text-[#374151] text-[14px]">
                  Event Type
                </label>
                <div className="bg-white border border-[#e2e8f0] rounded-[6px] px-[16px] py-[12px] flex items-center justify-between">
                  <span className="font-space-grotesk font-normal text-[#6b7484] text-[14px] truncate">
                    Live Concert / Performance
                  </span>
                  <img src="/images/planning-and-briefing/chevron-down.svg" alt="" className="w-[16px] h-[16px]" />
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-space-grotesk font-medium text-[#374151] text-[14px]">
                  Event Date & Time
                </label>
                <div className="bg-white border border-[#e2e8f0] rounded-[6px] px-[16px] py-[12px] flex items-center">
                  <span className="font-space-grotesk font-normal text-[#6b7484] text-[14px] truncate">
                    2025-08-15  •  7:00 PM EST
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
