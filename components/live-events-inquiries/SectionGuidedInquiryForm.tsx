import React from 'react';

export default function SectionGuidedInquiryForm() {
  return (
    <div className="bg-[#f7f9fb] w-full pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px] px-6 lg:px-[112px] flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[760px] flex flex-col items-center text-center mb-[40px] lg:mb-[60px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Guided inquiry
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[16px]">
          Tell us what you are planning.
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[16px] leading-[1.6] m-0">
          Roughly two to three minutes. No mandatory phone, budget or file upload in this first step.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[760px] bg-white border border-[#dde2ea] rounded-[18px] p-[24px] lg:p-[40px] shadow-sm">
        {/* Form Header */}
        <div className="mb-[40px]">
          <p className="font-inter font-bold text-[#5b8def] text-[13px] tracking-[0.52px] m-0 mb-[8px]">
            Step 1 of 3
          </p>
          <h3 className="font-sora font-bold text-[#32353c] text-[24px] tracking-[-0.24px] m-0">
            The event
          </h3>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[32px]">
          {/* Field: Event type */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Event type <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Company / internal</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Field: Event timing */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Event timing <span className="text-[#32353c]">*</span>
            </label>
            <div className="flex flex-wrap gap-[12px]">
              <div className="h-[42px] px-[20px] rounded-full bg-[#eef3ff] border border-[#5b8def] flex items-center justify-center cursor-pointer transition-colors">
                <span className="font-inter font-normal text-[#5b8def] text-[13.5px]">Exact date & time</span>
              </div>
              <div className="h-[42px] px-[20px] rounded-full bg-white border border-[#dde2ea] flex items-center justify-center cursor-pointer transition-colors hover:border-[#9aa1ae]">
                <span className="font-inter font-normal text-[#32353c] text-[13.5px]">Approximate date or window</span>
              </div>
              <div className="h-[42px] px-[20px] rounded-full bg-white border border-[#dde2ea] flex items-center justify-center cursor-pointer transition-colors hover:border-[#9aa1ae]">
                <span className="font-inter font-normal text-[#32353c] text-[13.5px]">Date not set</span>
              </div>
            </div>
          </div>

          {/* Fields: Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">
                Local date <span className="text-[#32353c]">*</span>
              </label>
              <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center bg-white">
                <span className="font-inter font-normal text-[#757575] text-[14.5px]">e.g. 14 October 2026</span>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">
                Start time <span className="text-[#32353c]">*</span>
              </label>
              <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
                <span className="font-inter font-normal text-[#757575] text-[14.5px]">e.g. 10:00 AM</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 4V8L10.6667 9.33333" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Field: Timezone */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Timezone <span className="text-[#32353c]">*</span>
            </label>
            <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">America/Los_Angeles (PDT)</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Field: Event format */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px] flex items-center gap-[4px]">
              Event format
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">(optional)</span>
            </label>
            <div className="w-full h-[45px] border border-[#dde2ea] rounded-[8px] px-[16px] flex items-center justify-between cursor-pointer bg-white">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Virtual</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#9aa1ae" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Field: Is this event already live? */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-inter font-semibold text-[#32353c] text-[14px]">
              Is this event already live? <span className="text-[#32353c]">*</span>
            </label>
            <div className="flex flex-wrap gap-[12px]">
              <div className="h-[42px] px-[20px] rounded-full bg-[#eef3ff] border border-[#5b8def] flex items-center justify-center cursor-pointer transition-colors">
                <span className="font-inter font-normal text-[#5b8def] text-[13.5px]">No</span>
              </div>
              <div className="h-[42px] px-[20px] rounded-full bg-white border border-[#dde2ea] flex items-center justify-center cursor-pointer transition-colors hover:border-[#9aa1ae]">
                <span className="font-inter font-normal text-[#32353c] text-[13.5px]">Yes — take me to Support</span>
              </div>
            </div>
          </div>

          {/* Divider line in design or just spacing? Just spacing before disclaimer. */}
          <div className="pt-[16px] flex flex-col gap-[20px]">
            <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] leading-[20px] m-0">
              Submitting an inquiry starts a planning review. It does not reserve capacity, confirm event acceptance, production coverage, service level or pricing.
            </p>

            <button className="w-full h-[52px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity outline-none border-none">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px]">
                Continue
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
