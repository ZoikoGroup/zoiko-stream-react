import React from 'react';

const IMG = '/images/zoikostream-developer-support';

export default function HeroSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full overflow-hidden justify-center" style={{ height: '545.34px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
          <img src={`${IMG}/hero-bg.png`} alt="" className="absolute h-[124.69%] max-w-none w-full object-cover" style={{ top: '-12.35%' }} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(115deg, rgba(44, 46, 51, 0.95) 0%, rgba(59, 61, 66, 0.88) 45%, rgba(93, 221, 214, 0.3) 100%)" }} />

        <div className="w-full max-w-[1440px] relative z-10 h-full">
          {/* Dot and Label */}
          <div className="absolute bg-[#3fc9bd] rounded-[3px] w-[6px] h-[6px] left-[132px] top-[95px]" />
          <div className="absolute left-[146px] top-[88px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Developer support
            </p>
          </div>

          {/* Heading */}
          <div className="absolute left-[132px] top-[122px] flex items-center h-[92px]">
            <h1 className="font-sora font-bold text-white text-[38px] tracking-[-0.38px] leading-[44.08px]">
              Get technical help with your<br />ZoikoStream integration.
            </h1>
          </div>

          {/* Subtitle */}
          <div className="absolute left-[132px] top-[230px] flex items-center h-[68.6px]">
            <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px]">
              Start with the technical area and symptom. We will point you to the<br />
              right developer authority or help you prepare a safe, reproducible<br />
              support request.
            </p>
          </div>

          {/* Buttons */}
          <div className="absolute left-[132px] top-[326.54px] w-[232px] h-[52px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] cursor-pointer">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] leading-[24px]">Choose a technical topic</span>
          </div>
          <div className="absolute left-[378px] top-[326.54px] w-[283px] h-[52px] rounded-[10px] flex items-center justify-center border border-[rgba(255,255,255,0.3)] cursor-pointer">
            <span className="font-inter font-semibold text-white text-[15px] leading-[24px]">Open developer documentation</span>
          </div>

          {/* Warning Box */}
          <div className="absolute left-[132px] top-[415.34px] w-[500px] h-[66px] rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] flex items-center">
            <img src={`${IMG}/shield-icon.svg`} alt="Warning" className="absolute left-[14px] top-[13px] w-[16px] h-[16px]" />
            <div className="absolute left-[40px] top-[14px]">
              <p className="font-inter font-normal text-[#dfe2e8] text-[12.5px] leading-[20px]">
                Never share passwords, API secrets, access tokens, private keys, signing<br />
                secrets, or unnecessary customer data.
              </p>
            </div>
          </div>

          {/* Decision Spine Card */}
          <div className="absolute left-[742px] top-[149.69px] w-[566px] h-[253.97px] bg-[#232529] border border-[#565a63] rounded-[14px]">
            <p className="absolute left-[24px] top-[26px] font-inter font-semibold text-[#8b92a0] text-[12px] tracking-[0.36px] leading-[19.2px] uppercase">
              Troubleshooting decision spine
            </p>

            <div className="absolute top-[57.18px] left-[24px] right-[24px] flex gap-[6px]">
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[rgba(126,227,216,0.12)] border border-[rgba(126,227,216,0.4)] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#7ee3d8] text-[11px] leading-[17.6px]">Topic</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Symptom</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Self-service</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Reproduce</span>
              </div>
            </div>

            <div className="absolute top-[102.78px] left-[24px] right-[24px] flex gap-[6px]">
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Evidence</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Handoff check</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Review</span>
              </div>
              <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Submit</span>
              </div>
            </div>

            <p className="absolute left-[24px] top-[156px] font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px]">
              Self-service is always offered first — human support remains<br />
              available at every step, never gated behind it.
            </p>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full overflow-hidden justify-center bg-white" style={{ height: '1173.74px' }}>
        <div className="w-full max-w-[390px] relative z-10 h-full">

          {/* Breadcrumbs */}
          <div className="absolute bg-[#f7f9fb] border-[#dde2ea] border-b border-solid h-[45.8px] left-0 right-0 top-0 flex items-center px-[22px] gap-[6px]">
            <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">Home</span>
            <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">/</span>
            <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">Developers</span>
            <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">/</span>
            <span className="font-inter font-semibold text-[#32353c] text-[13px]">Developer support</span>
          </div>

          {/* Subnav */}
          <div className="absolute h-[47px] left-0 right-0 top-[45.8px] backdrop-blur-[3px] bg-[rgba(59,61,66,0.97)] border-[#565a63] border-b border-solid flex items-center overflow-x-auto px-[22px] gap-[24px]">
            <div className="relative h-full flex items-center justify-center border-b-2 border-[#3fc9bd]">
              <span className="font-inter font-semibold text-white text-[12.5px]">Topics</span>
            </div>
            <div className="relative h-full flex items-center justify-center cursor-pointer">
              <span className="font-inter font-normal text-[#9aa1ae] text-[12.5px] whitespace-nowrap">Authority check</span>
            </div>
            <div className="relative h-full flex items-center justify-center cursor-pointer">
              <span className="font-inter font-normal text-[#9aa1ae] text-[12.5px] whitespace-nowrap">How this works</span>
            </div>
            <div className="relative h-full flex items-center justify-center cursor-pointer">
              <span className="font-inter font-normal text-[#9aa1ae] text-[12.5px] whitespace-nowrap">Preparation</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute left-0 right-0 top-[92.8px] h-[1080.94px] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
              <img src={`${IMG}/hero-bg.png`} alt="" className="absolute h-full w-[586.94%] max-w-none object-cover" style={{ left: '-243.47%' }} />
            </div>
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(115deg, rgba(44, 46, 51, 0.95) 0%, rgba(59, 61, 66, 0.88) 45%, rgba(93, 221, 214, 0.3) 100%)" }} />

            <div className="absolute bg-[#3fc9bd] h-[6px] w-[6px] left-[22px] rounded-[3px] top-[79px]" />
            <div className="absolute flex items-center h-[20px] left-[36px] top-[72px]">
              <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
                Developer support
              </p>
            </div>

            <div className="absolute flex flex-col justify-center h-[99.94px] left-[22px] top-[106px]">
              <p className="font-sora font-bold text-white text-[28px] tracking-[-0.28px] leading-[32.48px] m-0">
                Get technical help with
              </p>
              <p className="font-sora font-bold text-white text-[28px] tracking-[-0.28px] leading-[32.48px] m-0">
                your ZoikoStream
              </p>
              <p className="font-sora font-bold text-white text-[28px] tracking-[-0.28px] leading-[32.48px] m-0">
                integration.
              </p>
            </div>

            <div className="absolute flex flex-col justify-center h-[93.39px] left-[22px] top-[223.4px]">
              <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                Start with the technical area and symptom. We
              </p>
              <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                will point you to the right developer authority
              </p>
              <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                or help you prepare a safe, reproducible
              </p>
              <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                support request.
              </p>
            </div>

            <div className="absolute left-[22px] right-[135.66px] h-[52px] top-[344.59px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px] leading-[24px]">Choose a technical topic</span>
            </div>
            
            <div className="absolute left-[22px] right-[85.42px] h-[52px] top-[410.59px] rounded-[10px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-white text-[15px] leading-[24px]">Open developer documentation</span>
            </div>

            <div className="absolute left-[22px] top-[486.99px] h-[20.8px] flex items-center -translate-y-1/2 cursor-pointer">
              <p className="font-inter font-normal text-[#9fd8ff] text-[13px] leading-[20.8px]">Check System Status →</p>
            </div>
            <div className="absolute left-[185.66px] top-[486.99px] h-[20.8px] flex items-center -translate-y-1/2 cursor-pointer">
              <p className="font-inter font-normal text-[#9fd8ff] text-[13px] leading-[20.8px]">Open API Reference →</p>
            </div>

            <div className="absolute left-[22px] right-[22px] top-[515.39px] h-[86px] rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] flex items-center">
              <img src={`${IMG}/shield-icon.svg`} alt="Warning" className="absolute left-[14px] top-[13px] w-[16px] h-[16px]" />
              <div className="absolute left-[40px] top-[14px]">
                <p className="font-inter font-normal text-[#dfe2e8] text-[12.5px] leading-[20px] m-0">
                  Never share passwords, API secrets, access
                </p>
                <p className="font-inter font-normal text-[#dfe2e8] text-[12.5px] leading-[20px] m-0">
                  tokens, private keys, signing secrets, or
                </p>
                <p className="font-inter font-normal text-[#dfe2e8] text-[12.5px] leading-[20px] m-0">
                  unnecessary customer data.
                </p>
              </div>
            </div>

            <div className="absolute left-[22px] right-[22px] top-[629.39px] h-[387.55px] bg-[#232529] border border-[#565a63] rounded-[14px]">
              <p className="absolute left-[24px] top-[26px] font-inter font-semibold text-[#8b92a0] text-[12px] tracking-[0.36px] leading-[19.2px] uppercase m-0">
                TROUBLESHOOTING DECISION SPINE
              </p>

              <div className="absolute top-[57.19px] left-[24px] right-[24px] flex gap-[6px]">
                <div className="flex-1 h-[37.59px] rounded-[8px] bg-[rgba(126,227,216,0.12)] border border-[rgba(126,227,216,0.4)] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#7ee3d8] text-[11px] leading-[17.6px]">Topic</span>
                </div>
                <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Symptom</span>
                </div>
                <div className="flex-1 h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Self-service</span>
                </div>
              </div>

              <div className="absolute top-[102.78px] left-[24px] right-[24px]">
                <div className="w-full h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Reproduce</span>
                </div>
              </div>

              <div className="absolute top-[148.37px] left-[24px] right-[24px] flex gap-[6px]">
                <div className="flex-1 h-[55.19px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Evidence</span>
                </div>
                <div className="flex-1 h-[55.19px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center text-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Handoff<br/>check</span>
                </div>
                <div className="flex-1 h-[55.19px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Review</span>
                </div>
              </div>

              <div className="absolute top-[211.56px] left-[24px] right-[24px]">
                <div className="w-full h-[37.59px] rounded-[8px] bg-[#2c2e33] border border-[#565a63] flex items-center justify-center">
                  <span className="font-inter font-semibold text-[#c7cbd3] text-[11px] leading-[17.6px]">Submit</span>
                </div>
              </div>

              <div className="absolute left-[24px] top-[265.15px] flex flex-col justify-center">
                <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                  Self-service is always offered first —
                </p>
                <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                  human support remains available at
                </p>
                <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[24.8px] m-0">
                  every step, never gated behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
