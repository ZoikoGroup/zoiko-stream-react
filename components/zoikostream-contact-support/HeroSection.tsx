import React from 'react';

export default function HeroSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center overflow-hidden" style={{ height: '581.81px' }}>
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/zoikostream-contact-support/hero-bg.png" 
            alt="Contact Support" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundImage: 'linear-gradient(115deg, rgba(59, 61, 66, 0.93) 0%, rgba(64, 68, 75, 0.82) 45%, rgba(93, 221, 214, 0.32) 100%)' }} 
        />

        <div className="w-full max-w-[1440px] relative z-20 h-full mx-auto">
          {/* Dot */}
          <div className="absolute top-[87px] w-[6px] h-[6px] rounded-[3px] bg-[#7ee3d8] left-[132px]" />
          
          {/* Label */}
          <div className="absolute top-[80px] left-[146px] flex items-center h-[20px]">
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Contact support
            </p>
          </div>

          {/* Title */}
          <div className="absolute top-[125px] left-[132px] flex flex-col justify-center">
            <h1 className="font-sora font-bold text-white text-[42px] tracking-[-0.42px] leading-[48.72px] mb-0">
              Get the right help for your
            </h1>
            <h1 className="font-sora font-bold text-white text-[42px] tracking-[-0.42px] leading-[48.72px] mb-0">
              ZoikoStream issue.
            </h1>
          </div>

          {/* Description */}
          <div className="absolute top-[235px] left-[132px] flex flex-col justify-center">
            <p className="font-inter font-normal text-[#e4e6ea] text-[16px] leading-[25.6px] mb-0">
              Tell us what you need help with. We will route you to the appropriate support
            </p>
            <p className="font-inter font-normal text-[#e4e6ea] text-[16px] leading-[25.6px] mb-0">
              path and ask only for the context needed to continue.
            </p>
          </div>

          {/* Buttons */}
          <div className="absolute top-[310.62px] left-[132px] flex gap-[15.7px]">
            <div className="w-[290px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(93,221,214,0.3)] hover:opacity-90 transition-opacity">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px] leading-[24px]">
                Choose what you need help with
              </span>
            </div>

            <div className="w-[176px] h-[52px] rounded-[10px] border border-[rgba(255,255,255,0.35)] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              <span className="font-inter font-semibold text-white text-[15px] leading-[24px]">
                Visit Help Center
              </span>
            </div>
          </div>

          {/* Info Box */}
          <div className="absolute top-[393.81px] left-[132px] w-[560px] h-[69.59px] rounded-[10px] bg-[#ffffff0f] border border-[#ffffff26] flex items-center px-[16px]">
            <div className="w-[17px] h-[17px] flex-shrink-0 mr-[10px]">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 2L1 21H23L12 2ZM12 6L19.53 19H4.47L12 6ZM11 10V14H13V10H11ZM11 16V18H13V16H11Z" fill="#DFE2E8"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-inter font-normal text-[#dfe2e8] text-[13px] leading-[20.8px] mb-0">
                Do not include passwords, API secrets, access tokens, private keys, or
              </p>
              <p className="font-inter font-normal text-[#dfe2e8] text-[13px] leading-[20.8px] mb-0">
                unnecessary sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col overflow-hidden bg-[#000]">
        {/* Subnav Bar */}
        <div className="w-full h-[55px] bg-[#f1f4f8] z-20 flex items-center px-[20px] flex-shrink-0 relative">
          <p className="font-inter font-normal text-[#c7cbd3] text-[11px] leading-[17.6px] mb-0">
            <span className="text-[#9aa1ae]">Home / Support /</span>
            <span className="font-semibold text-[#1c2430]"> Contact support</span>
          </p>
        </div>

        {/* Hero Content Area */}
        <div className="relative w-full flex flex-col px-[20px] z-10 min-h-[673px] py-[85px]">
          {/* Hero Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img 
              src="/images/zoikostream-contact-support/hero-bg.png" 
              alt="Contact Support" 
              className="w-[387.14%] max-w-none h-full object-cover absolute" 
              style={{ left: '-143.57%' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ backgroundImage: 'linear-gradient(115deg, rgba(59, 61, 66, 0.93) 0%, rgba(64, 68, 75, 0.82) 45%, rgba(93, 221, 214, 0.32) 100%)' }} 
            />
          </div>

          <div className="relative z-10 flex flex-col w-full h-full">
            {/* Dot & Label */}
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-[3px] bg-[#7ee3d8] mr-[8px]" />
              <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
                Contact support
              </p>
            </div>

            {/* Title */}
            <h1 className="font-sora font-bold text-white text-[28px] tracking-[-0.28px] leading-[36px] mb-0 mt-[24px]">
              Get the right help for<br />your ZoikoStream<br />issue.
            </h1>

            {/* Description */}
            <p className="font-inter font-normal text-[#e4e6ea] text-[14px] leading-[22px] mb-0 mt-[21px]">
              Tell us what you need help with. We will<br />route you to the appropriate support path<br />and ask only for the context needed to<br />continue.
            </p>

            {/* Button 1 */}
            <div className="w-[290px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(93,221,214,0.3)] hover:opacity-90 transition-opacity mt-[20px]">
              <span className="font-inter font-semibold text-[#1c2430] text-[13px] leading-[24px]">
                Choose what you need help with
              </span>
            </div>

            {/* Button 2 */}
            <div className="w-[176px] h-[52px] rounded-[10px] border border-[rgba(255,255,255,0.35)] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors mt-[16px]">
              <span className="font-inter font-semibold text-white text-[13px] leading-[24px]">
                Visit Help Center
              </span>
            </div>

            {/* Link */}
            <div className="flex items-center h-[20.8px] cursor-pointer hover:underline mt-[20px]">
              <p className="font-inter font-semibold text-[#9fd8ff] text-[13px] leading-[20.8px] mb-0">
                Check System Status →
              </p>
            </div>

            {/* Info Box */}
            <div className="w-full rounded-[10px] bg-[#ffffff0f] border border-[#ffffff26] px-[16px] py-[14px] mt-[30px] flex gap-[10px]">
              <div className="w-[17px] h-[17px] flex-shrink-0 mt-[2px]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L1 21H23L12 2ZM12 6L19.53 19H4.47L12 6ZM11 10V14H13V10H11ZM11 16V18H13V16H11Z" fill="#DFE2E8"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-inter font-normal text-[#dfe2e8] text-[13px] leading-[20.8px] mb-0">
                  Do not include passwords, API secrets,<br />access tokens, private keys, or unnecessary<br />sensitive data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
