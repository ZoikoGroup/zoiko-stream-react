import React from 'react';

const imgHeroBgDesktop = "/images/zoikostream-trust-center/hero-bg-desktop.png";
const imgHeroBgMobile = "/images/zoikostream-trust-center/hero-bg-mobile.png";

export default function SectionHero() {
  return (
    <div className="relative w-full overflow-hidden lg:rounded-[18px]">
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 hidden lg:block w-full h-full object-cover" src={imgHeroBgDesktop} />
        <img
          alt=""
          className="absolute lg:hidden max-w-none"
          style={{ left: "-75%", top: 0, width: "250%", height: "100%" }}
          src={imgHeroBgMobile}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(100deg, rgba(59,61,66,0.93) 0%, rgba(64,68,75,0.75) 55%, rgba(93,221,214,0.28) 100%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[24px] items-start px-6 lg:px-[44px] py-[48px] lg:py-[67px] w-full">
        <div className="hidden lg:flex gap-[12px] items-center">
          <div className="bg-[#7ee3d8] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Trust Center</p>
        </div>
        <h1 className="font-sora font-bold text-white text-[26px] lg:text-[34px] leading-[1.16] tracking-[-0.34px] m-0 w-full">
          <span className="hidden lg:inline">
            Security, privacy and<br />
            resilience you can verify.
          </span>
          <span className="lg:hidden">
            Security, privacy and<br />
            resilience you can<br />
            verify.
          </span>
        </h1>
        <p className="font-inter font-normal text-[#e4e6ea] text-[15px] leading-[1.6] m-0 w-full lg:max-w-[700px]">
          <span className="hidden lg:inline">
            Review how ZoikoStream approaches platform security, privacy,<br />
            compliance and service resilience. Explore public trust resources,<br />
            check live service health, report a vulnerability, or request<br />
            governed evidence for due diligence.
          </span>
          <span className="lg:hidden">
            Review how ZoikoStream approaches<br />
            platform security, privacy, compliance<br />
            and service resilience. Explore public<br />
            trust resources, check live service<br />
            health, report a vulnerability, or request<br />
            governed evidence for due diligence.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-[16px] items-stretch sm:items-center w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] px-[24px] h-[46px] flex items-center justify-center border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">Explore trust topics</span>
          </button>
          <button className="border border-[rgba(255,255,255,0.35)] border-solid rounded-[10px] px-[24px] h-[46px] flex items-center justify-center bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
            <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">Request trust evidence</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-x-[24px] gap-y-[8px] items-center">
          <p className="font-inter font-semibold text-[#9fd8ff] text-[13px] m-0 whitespace-nowrap cursor-pointer">View system status →</p>
          <p className="hidden lg:block font-inter font-semibold text-[#9fd8ff] text-[13px] m-0 whitespace-nowrap cursor-pointer">Report a vulnerability →</p>
        </div>
      </div>
    </div>
  );
}
