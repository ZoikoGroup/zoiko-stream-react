import React from 'react';

export default function JobsSection() {
  return (
    <section className="flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden bg-white">
      {/* Background Image */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full opacity-50" 
        src="/images/real-time-contribution/jobs-bg.png" 
      />

      {/* Section Header */}
      <div className="flex flex-col gap-[12px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[32px] md:text-[38px] leading-[1.2]">
          What are you contributing?
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[16px] md:text-[18px] max-w-[700px] leading-[1.5]">
          Select your contribution scenario to find the right verified path, requirements, and documentation.
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative z-10 w-full max-w-[1216px] mx-auto">
        
        {/* Job Card 1 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer">
          <div className="h-[160px] relative w-full">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-0.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              Remote person or speaker
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Authorize and prepare a remote human contributor for a live production session.
            </p>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer">
          <div className="h-[160px] relative w-full">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-1.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              Field or venue source
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Connect a camera, encoder, or production feed from an on-location source.
            </p>
          </div>
        </div>

        {/* Job Card 3 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer">
          <div className="h-[160px] relative w-full">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-2.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              Application-integrated source
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Embed real-time contribution into your product via APIs and SDKs.
            </p>
          </div>
        </div>

        {/* Job Card 4 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer">
          <div className="h-[160px] relative w-full">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-3.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              Controlled enterprise source
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Manage authorized sources across teams, tenants, and workflows.
            </p>
          </div>
        </div>

        {/* Job Card 5 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer h-full">
          <div className="h-[160px] relative w-full shrink-0">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-4.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full flex-1">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              Managed event contribution
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Route to professionally managed Live Events production.
            </p>
          </div>
        </div>

        {/* Job Card 6 */}
        <div className="bg-white border border-[#e1e6eb] flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)] hover:shadow-lg transition-shadow cursor-pointer h-full">
          <div className="h-[160px] relative w-full shrink-0 flex items-center justify-center bg-[#f8fafc]">
            <img alt="" className="absolute inset-0 object-cover w-full h-full pointer-events-none" src="/images/real-time-contribution/job-5.png" />
          </div>
          <div className="flex flex-col gap-[8px] items-start p-[20px] w-full flex-1">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[18px]">
              I'm not sure
            </h3>
            <p className="font-['Space_Grotesk'] font-normal leading-[20px] text-[#4f5e74] text-[13px]">
              Get guidance on finding the right contribution path for your use case.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
