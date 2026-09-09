import React from 'react';

export default function ClosingSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea] overflow-hidden h-[424.38px]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="/images/zoikostream-contact-support/closing-bg.png" 
            alt="Closing Background" 
            className="absolute max-w-none w-full h-full object-cover left-0 top-0" 
          />
        </div>
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundImage: 'linear-gradient(120deg, rgba(59, 61, 66, 0.95) 0%, rgba(64, 68, 75, 0.88) 100%)' }} 
        />

        <div className="w-full max-w-[1440px] relative z-20 h-full flex flex-col items-center pt-[76px]">
          <div className="flex items-center justify-center">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
            <p className="font-inter font-bold text-[#9fd8ff] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Ready to continue?
            </p>
          </div>

          <h2 className="font-sora font-bold text-white text-[32px] tracking-[-0.32px] leading-[51.2px] text-center mt-[15.4px] mb-0">
            Let's get you to the right place.
          </h2>

          <div className="flex flex-col items-center mt-[15.7px]">
            <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] text-center mb-0">
              Choose what you need help with, or browse the Help Center for a quick answer first.
            </p>
          </div>

          <div className="flex items-center justify-center gap-[16px] mt-[26.9px]">
            <div className="w-[290px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
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

          <div className="flex items-center justify-center gap-[40px] mt-[30px]">
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13.5px] leading-[21.6px] cursor-pointer hover:underline">
              System Status
            </span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13.5px] leading-[21.6px] cursor-pointer hover:underline">
              Developer support
            </span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13.5px] leading-[21.6px] cursor-pointer hover:underline">
              Accessibility help
            </span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13.5px] leading-[21.6px] cursor-pointer hover:underline">
              Pricing
            </span>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col items-center justify-center bg-white border-b border-[#dde2ea] overflow-hidden py-[70px] px-[20px]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="/images/zoikostream-contact-support/closing-bg.png" 
            alt="Closing Background" 
            className="absolute max-w-none h-full w-[387.14%] left-[-143.57%] top-0 object-cover" 
          />
        </div>
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundImage: 'linear-gradient(120deg, rgba(59, 61, 66, 0.95) 0%, rgba(64, 68, 75, 0.88) 100%)' }} 
        />

        <div className="w-full relative z-20 h-full flex flex-col items-center">
          
          <div className="flex items-center justify-center">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
            <p className="font-inter font-bold text-[#9fd8ff] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
              Ready to continue?
            </p>
          </div>

          <h2 className="font-sora font-bold text-white text-[26px] tracking-[-0.26px] leading-[34px] text-center mt-[12px] mb-0 max-w-[240px]">
            Let's get you to the right place.
          </h2>

          <p className="font-inter font-normal text-[#c7cbd3] text-[13px] leading-[22px] text-center mt-[16px] mb-0 max-w-[280px]">
            Choose what you need help with, or browse the Help Center for a quick answer first.
          </p>

          <div className="flex flex-col items-center gap-[12px] mt-[24px] w-full">
            <div className="w-full max-w-[290px] h-[40px] rounded-[8px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer shadow-sm">
              <span className="font-inter font-semibold text-[#1c2430] text-[12px] leading-[20px]">
                Choose what you need help with
              </span>
            </div>

            <div className="w-[200px] h-[40px] rounded-[8px] border border-[rgba(255,255,255,0.35)] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              <span className="font-inter font-semibold text-white text-[12px] leading-[20px]">
                Visit Help Center
              </span>
            </div>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-[12px] mt-[24px]">
            <div className="flex justify-center gap-[16px]">
              <span className="font-inter font-semibold text-[#9fd8ff] text-[11px] leading-[18px] cursor-pointer hover:underline">
                System Status
              </span>
              <span className="font-inter font-semibold text-[#9fd8ff] text-[11px] leading-[18px] cursor-pointer hover:underline">
                Developer support
              </span>
            </div>
            <div className="flex justify-center gap-[16px]">
              <span className="font-inter font-semibold text-[#9fd8ff] text-[11px] leading-[18px] cursor-pointer hover:underline">
                Accessibility help
              </span>
              <span className="font-inter font-semibold text-[#9fd8ff] text-[11px] leading-[18px] cursor-pointer hover:underline">
                Pricing
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
