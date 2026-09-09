import React from 'react';

const IMG = '/images/zoikostream-developer-support';

export default function ClosingSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full overflow-hidden justify-center" style={{ height: '389.95px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
          <img src={`${IMG}/closing-bg.png`} alt="" className="absolute max-w-none w-full object-cover" style={{ height: '123.09%', top: '-11.55%' }} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(120deg, rgba(44, 46, 51, 0.95) 0%, rgba(59, 61, 66, 0.9) 100%)" }} />

        <div className="w-full max-w-[1440px] relative z-10 h-full flex justify-center">
          <div className="absolute top-[67px] w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] left-[632.19px]" />
          <div className="absolute top-[60px] left-[646.19px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Ready to continue?
            </p>
          </div>

          <div className="absolute top-[100px] w-full flex justify-center text-center">
            <h2 className="font-sora font-bold text-white text-[27px] tracking-[-0.27px] leading-[43.2px]">
              Start with a topic, or prepare a support<br />request.
            </h2>
          </div>

          <div className="absolute top-[196px] w-full flex justify-center text-center">
            <p className="font-inter font-normal text-[#c7cbd3] text-[14px] leading-[22.4px]">
              Self-service is always available first — human support remains one click away<br />at every step.
            </p>
          </div>

          <div className="absolute top-[261.16px] left-[475.33px] w-[229px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px]">Contact Support</span>
          </div>

          <div className="absolute top-[261.16px] left-[721.67px] w-[229px] h-[52px] rounded-[10px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer">
            <span className="font-inter font-semibold text-white text-[15px]">Request a Demo</span>
          </div>

          <div className="absolute top-[329px] w-full flex justify-center gap-6">
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">System Status</span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">API Reference</span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">Authentication</span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">Talk to an expert</span>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full overflow-hidden justify-center" style={{ height: '535.94px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
          <img src={`${IMG}/closing-bg.png`} alt="" className="absolute max-w-none h-full left-[-156.13%] w-[412.26%] top-0 object-cover" />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(120deg, rgba(44, 46, 51, 0.95) 0%, rgba(59, 61, 66, 0.9) 100%)" }} />

        <div className="w-full max-w-[390px] relative z-10 h-full flex flex-col items-center pt-[67px]">
          {/* Header Block */}
          <div className="flex items-center justify-center h-[20px] w-full mb-[13px]">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] mr-[8px]" />
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] m-0">
              Ready to continue?
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mb-[18px]">
            <h2 className="font-sora font-bold text-white text-[27px] tracking-[-0.27px] leading-[43.2px] text-center m-0">Start with a topic, or</h2>
            <h2 className="font-sora font-bold text-white text-[27px] tracking-[-0.27px] leading-[43.2px] text-center m-0">prepare a support</h2>
            <h2 className="font-sora font-bold text-white text-[27px] tracking-[-0.27px] leading-[43.2px] text-center m-0">request.</h2>
          </div>

          <div className="flex flex-col items-center justify-center mb-[25px] px-[43px]">
            <p className="font-inter font-normal text-[#c7cbd3] text-[14px] leading-[22.4px] text-center m-0">Self-service is always available first — human</p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[14px] leading-[22.4px] text-center m-0">support remains one click away at every step.</p>
          </div>

          <div className="w-[233px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer mb-[14px]">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px]">Contact Support</span>
          </div>

          <div className="w-[243px] h-[52px] rounded-[10px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer mb-[26px]">
            <span className="font-inter font-semibold text-white text-[15px]">Request a Demo</span>
          </div>

          <div className="w-full flex justify-center items-center gap-[16px] mb-[16px]">
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">System Status</span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">API Reference</span>
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">Authentication</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="font-inter font-semibold text-[#9fd8ff] text-[13px] cursor-pointer hover:underline">Talk to an expert</span>
          </div>
        </div>
      </section>
    </>
  );
}
