import React from 'react';

const imgBgDesktop = "/images/zoikostream-trust-center/request-evidence-cta-bg-desktop.png";
const imgBgMobile = "/images/zoikostream-trust-center/request-evidence-cta-bg-mobile.png";

export default function SectionRequestEvidenceCta() {
  return (
    <div className="w-full px-6 lg:px-0 py-[40px] lg:py-[48px]">
      <div className="relative rounded-[18px] overflow-hidden w-full">
        <div className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute hidden lg:block max-w-none"
            style={{ left: 0, top: "-9.8%", width: "100%", height: "119.59%" }}
            src={imgBgDesktop}
          />
          <img
            alt=""
            className="absolute lg:hidden max-w-none"
            style={{ left: "-102.99%", top: 0, width: "305.99%", height: "100%" }}
            src={imgBgMobile}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(120deg, rgba(59,61,66,0.95) 0%, rgba(64,68,75,0.9) 100%)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-[24px] items-start px-6 lg:px-[44px] py-[48px] lg:py-[64px] w-full">
          <h2 className="font-sora font-bold text-white text-[24px] lg:text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
            <span className="hidden lg:inline">
              Need evidence for a security or<br />
              procurement review?
            </span>
            <span className="lg:hidden">
              Need evidence for a<br />
              security or<br />
              procurement review?
            </span>
          </h2>
          <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[1.6] m-0 w-full lg:max-w-[600px]">
            <span className="hidden lg:inline">
              Browse the evidence catalog first. If the material you need is restricted, submit a<br />
              governed request and we will route it to the<br />
              appropriate trust owner.
            </span>
            <span className="lg:hidden">
              Browse the evidence catalog first. If the<br />
              material you need is restricted, submit a<br />
              governed request and we will route it to<br />
              the appropriate trust owner.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-stretch sm:items-center w-full sm:w-auto">
            <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] px-[24px] h-[52px] flex items-center justify-center border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">Request trust evidence</span>
            </button>
            <button className="border border-[rgba(255,255,255,0.35)] border-solid rounded-[10px] px-[24px] h-[52px] flex items-center justify-center bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">Talk to an enterprise specialist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
