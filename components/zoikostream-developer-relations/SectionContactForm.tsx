import React from 'react';

export default function SectionContactForm() {
  return (
    <div className="bg-[#f7f9fb] w-full pt-[60px] lg:pt-[100px] pb-[60px] lg:pb-[100px] px-6 lg:px-[112px] flex flex-col items-center">
      <div className="w-full max-w-[760px] flex flex-col items-center text-center mb-[40px] lg:mb-[48px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
          <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Human contact
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2]">
          Connect with Developer Relations.
        </h2>
      </div>

      <div className="w-full max-w-[720px] bg-white border border-[#dde2ea] rounded-[18px] p-[24px] lg:p-[38px]">
        <div className="bg-[#f1f4f8] rounded-[10px] p-[16px] mb-[24px]">
          <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0">
            Use this form for developer community, events, technical content, open source, education, product feedback or ecosystem collaboration. For technical support, security reports, sales or partner applications, use the dedicated route.
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              What do you want to do? <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[45px] bg-[#efefef] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Community</span>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Topic / title <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[43px] border border-[#dde2ea] rounded-[8px] px-[14px] flex items-center bg-white">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">e.g. Proposing a talk for a developer conference</span>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Short description <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[100px] border border-[#dde2ea] rounded-[8px] p-[14px] bg-white">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">Tell us more about your request.</span>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px] flex items-center gap-[4px]">
              Public URL
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">(optional)</span>
            </label>
            <div className="w-full h-[43px] border border-[#dde2ea] rounded-[8px] px-[14px] flex items-center bg-white">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">Event page, repository, or content link</span>
            </div>
          </div>

          <div className="bg-[#fdf5ec] border border-[#f0dcc0] rounded-[8px] p-[16px]">
            <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[1.6] m-0">
              Do not include API keys, access tokens, stream keys, passwords, private customer data, proprietary source code or security vulnerability details.
            </p>
          </div>

          <button className="w-full h-[52px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity outline-none border-none">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px]">Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
