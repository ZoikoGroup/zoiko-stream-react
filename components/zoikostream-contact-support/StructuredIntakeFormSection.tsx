import React from 'react';

export default function StructuredIntakeFormSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '1174.72px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          {/* Header Block */}
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[628.41px]" />
          
          <div className="absolute top-[86px] left-[642.41px] right-[628.09px] transform -translate-y-1/2 flex flex-col justify-center h-[20px]">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] text-center mb-0">
              Structured request
            </p>
          </div>

          <div className="absolute top-[134.4px] left-[557.25px] right-[556.92px] transform -translate-y-1/2 flex flex-col justify-center h-[44.8px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] text-center mb-0">
              Tell us what's going on.
            </h2>
          </div>

          <div className="absolute top-[184.7px] left-[481.19px] right-[480.8px] transform -translate-y-1/2 flex flex-col justify-center h-[24.8px]">
            <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[24.8px] text-center mb-0">
              We only ask for what's needed to route and resolve your request.
            </p>
          </div>

          {/* Form Container */}
          <div className="absolute top-[212.59px] left-[360px] right-[360px] h-[885.13px] bg-white border border-[#dde2ea] rounded-[18px]">
            
            <div className="absolute top-[50.4px] left-[40px] right-[606.36px] transform -translate-y-1/2 flex flex-col justify-center h-[20.8px]">
              <p className="font-inter font-bold text-[#5b8def] text-[13px] tracking-[0.52px] leading-[20.8px] mb-0">
                Step 1 of 3
              </p>
            </div>
            
            <div className="absolute top-[88.3px] left-[40px] right-[535.96px] transform -translate-y-1/2 flex flex-col justify-center h-[27px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[22px] tracking-[-0.22px] leading-[35.2px] mb-0">
                Your request
              </h3>
            </div>

            {/* Help Topic */}
            <div className="absolute top-[136.49px] left-[40px] right-[470.92px] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                What do you need help with? *
              </label>
            </div>
            <div className="absolute top-[156.38px] left-[40px] right-[40px] h-[45px] bg-white border border-[#dde2ea] rounded-[8px] flex flex-col justify-center px-[18px] cursor-pointer hover:border-[#5b8def] transition-colors">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px] leading-[16px]">
                General product help
              </span>
            </div>

            {/* Issue Summary */}
            <div className="absolute top-[231.88px] left-[40px] right-[563.37px] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                Issue summary *
              </label>
            </div>
            <input 
              type="text" 
              className="absolute top-[251.77px] left-[40px] right-[40px] h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[14.5px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
              placeholder="A short, plain-language summary" 
            />

            {/* Issue Details */}
            <div className="absolute top-[314.77px] left-[40px] right-[40px] h-[22.39px]">
              <div className="absolute top-[10.5px] left-[0] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
                <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                  Issue details
                </label>
              </div>
              <div className="absolute top-[11px] left-[88.25px] transform -translate-y-1/2 flex flex-col justify-center h-[16px]">
                <span className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] mb-0">
                  (optional)
                </span>
              </div>
            </div>
            <textarea 
              className="absolute top-[345.16px] left-[40px] right-[40px] h-[100px] bg-white border border-[#dde2ea] rounded-[8px] p-[14px] font-inter font-normal text-[#32353c] text-[14.5px] placeholder-[#757575] outline-none focus:border-[#5b8def] resize-none"
              placeholder="Add any context that would help us understand and resolve this." 
            />

            {/* Name & Email */}
            <div className="absolute top-[483.25px] left-[40px] right-[627px] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                Name *
              </label>
            </div>
            <input 
              type="text" 
              className="absolute top-[503.14px] left-[40px] right-[367px] h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[14.5px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
              placeholder="Your name" 
            />

            <div className="absolute top-[483.25px] left-[367px] right-[303.12px] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
              <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                Email *
              </label>
            </div>
            <input 
              type="email" 
              className="absolute top-[503.14px] left-[367px] right-[40px] h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[14.5px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
              placeholder="you@example.com" 
            />

            {/* When did this happen */}
            <div className="absolute top-[566.14px] left-[40px] right-[40px] h-[22.39px]">
              <div className="absolute top-[10.5px] left-[0] transform -translate-y-1/2 flex flex-col justify-center h-[17px]">
                <label className="font-inter font-semibold text-[#32353c] text-[14px] leading-[22.4px] mb-0">
                  When did this happen?
                </label>
              </div>
              <div className="absolute top-[11px] left-[158.38px] transform -translate-y-1/2 flex flex-col justify-center h-[16px]">
                <span className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] mb-0">
                  (optional)
                </span>
              </div>
            </div>
            <input 
              type="text" 
              className="absolute top-[596.53px] left-[40px] right-[40px] h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[14.5px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
              placeholder="e.g. Today around 2:00 PM PDT" 
            />

            {/* Warning Box */}
            <div className="absolute top-[659.53px] left-[40px] right-[40px] h-[66px] bg-[#fdf5ec] border border-[#f0dcc0] rounded-[8px]">
              <div className="absolute top-[13px] left-[14px] w-[16px] h-[16px]">
                <img src="/images/zoikostream-contact-support/warning-icon.svg" alt="" className="w-full h-full block max-w-none" />
              </div>
              <div className="absolute top-[31.5px] left-[40px] w-[579.33px] transform -translate-y-1/2 flex flex-col justify-center h-[35px]">
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] mb-0">
                  Do not include passwords, API keys, access tokens, private keys, or unnecessary sensitive data in
                </p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] mb-0">
                  this form.
                </p>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="absolute top-[750.53px] left-[44px] right-[661px] h-[13px] border border-[#767676] rounded-[2.5px] bg-white cursor-pointer" />
            <div className="absolute top-[757.53px] left-[70px] right-[143.65px] transform -translate-y-1/2 flex flex-col justify-center h-[16px]">
              <span className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[21.6px] mb-0">
                I understand this information will be used to review and respond to my request.
              </span>
            </div>

            {/* Continue Button */}
            <div className="absolute top-[791.13px] left-[40px] right-[40px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] shadow-sm hover:opacity-90 cursor-pointer">
              <div className="absolute top-[calc(50%-0.5px)] left-[calc(50%+0.19px)] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center h-[19px]">
                <span className="font-inter font-semibold text-[#1c2430] text-[15px] leading-[24px] mb-0 text-center">
                  Continue
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col items-center bg-[#f7f9fb] border-b border-[#dde2ea] px-[20px] py-[60px]">
        {/* Header Block */}
        <div className="flex items-center justify-center w-full">
          <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
            Structured request
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[34px] mt-[12px] mb-0 text-center">
          Tell us what's going on.
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22px] mt-[16px] mb-[30px] text-center max-w-[280px]">
          We only ask for what's needed to route and resolve your request.
        </p>

        {/* Form Container */}
        <div className="w-full flex flex-col bg-white border border-[#dde2ea] rounded-[18px] p-[24px]">
          
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[0.44px] leading-[20px] mb-[4px]">
            Step 1 of 3
          </p>
          
          <h3 className="font-sora font-bold text-[#32353c] text-[20px] tracking-[-0.2px] leading-[32px] mb-[24px]">
            Your request
          </h3>

          <div className="flex flex-col gap-[24px]">
            {/* Help Topic */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                What do you need help with? *
              </label>
              <div className="w-full h-[45px] bg-white border border-[#dde2ea] rounded-[8px] flex items-center px-[14px] cursor-pointer hover:border-[#5b8def] transition-colors">
                <span className="font-inter font-normal text-[#32353c] text-[13px] leading-[16px]">
                  General product help
                </span>
              </div>
            </div>

            {/* Issue Summary */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                Issue summary *
              </label>
              <input 
                type="text" 
                className="w-full h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[13px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
                placeholder="A short, plain-language summary" 
              />
            </div>

            {/* Issue Details */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                  Issue details
                </label>
                <span className="font-inter font-normal text-[#9aa1ae] text-[11px] leading-[20px] mb-0">
                  (optional)
                </span>
              </div>
              <textarea 
                className="w-full h-[100px] bg-white border border-[#dde2ea] rounded-[8px] p-[14px] font-inter font-normal text-[#32353c] text-[13px] placeholder-[#757575] outline-none focus:border-[#5b8def] resize-none"
                placeholder="Add any context that would help us understand and resolve this." 
              />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                Name *
              </label>
              <input 
                type="text" 
                className="w-full h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[13px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
                placeholder="Your name" 
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                Email *
              </label>
              <input 
                type="email" 
                className="w-full h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[13px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
                placeholder="you@example.com" 
              />
            </div>

            {/* When did this happen */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <label className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px] mb-0">
                  When did this happen?
                </label>
                <span className="font-inter font-normal text-[#9aa1ae] text-[11px] leading-[20px] mb-0">
                  (optional)
                </span>
              </div>
              <input 
                type="text" 
                className="w-full h-[43px] bg-white border border-[#dde2ea] rounded-[8px] px-[14px] font-inter font-normal text-[#32353c] text-[13px] placeholder-[#757575] outline-none focus:border-[#5b8def]"
                placeholder="e.g. Today around 2:00 PM PDT" 
              />
            </div>
            
            {/* Warning Box */}
            <div className="w-full bg-[#fdf5ec] border border-[#f0dcc0] rounded-[8px] p-[16px] flex gap-[12px] items-start mt-[8px]">
              <div className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]">
                <img src="/images/zoikostream-contact-support/warning-icon.svg" alt="" className="w-full h-full block max-w-none" />
              </div>
              <p className="font-inter font-normal text-[#b8895a] text-[11px] leading-[18px] mb-0">
                Do not include passwords, API keys, access tokens, private keys, or unnecessary sensitive data in this form.
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex gap-[12px] items-start mt-[8px]">
              <input type="checkbox" className="w-[13px] h-[13px] border border-[#767676] rounded-[2.5px] bg-white cursor-pointer flex-shrink-0 mt-[4px]" />
              <span className="font-inter font-normal text-[#6b7280] text-[11px] leading-[18px] mb-0">
                I understand this information will be used to review and respond to my request.
              </span>
            </div>

            {/* Continue Button */}
            <div className="w-full h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] shadow-sm hover:opacity-90 cursor-pointer flex items-center justify-center mt-[12px]">
              <span className="font-inter font-semibold text-[#1c2430] text-[14px] leading-[24px] mb-0">
                Continue
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
