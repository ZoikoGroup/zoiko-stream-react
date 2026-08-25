import React from 'react';

const imgHeroBgDesktop = "/images/zoikostream-company-updates/hero-bg-desktop.png";
const imgHeroBgMobile = "/images/zoikostream-company-updates/hero-bg-mobile.png";

const PREVIEW_UPDATES = [
  {
    date: "Aug 20 2026",
    title: "Live captioning expanded across playback",
    category: "Platform & Experience",
    badgeLabel: "No action required",
    badgeTone: "green" as const,
  },
  {
    date: "Sep 1 2026",
    title: "Legacy Starter plan retires",
    category: "Commercial & Plans",
    badgeLabel: "Action required",
    badgeTone: "red" as const,
  },
  {
    date: "Aug 6 2026",
    title: "New Chief Trust & Security Officer",
    category: "Company & Operations",
    badgeLabel: "No action required",
    badgeTone: "green" as const,
  },
];

const BADGE_CLASSES = {
  green: "bg-[#e9f9f7] text-[#3fbf7f]",
  red: "bg-[#fbe6e4] text-[#e2685f]",
};

export default function SectionHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute hidden lg:block max-w-none"
          style={{ left: 0, top: "-19.21%", width: "100%", height: "138.42%" }}
          src={imgHeroBgDesktop}
        />
        <img
          alt=""
          className="absolute lg:hidden max-w-none"
          style={{ left: "-245.35%", top: 0, width: "590.7%", height: "100%" }}
          src={imgHeroBgMobile}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(126deg, rgba(44,46,51,0.9) 0%, rgba(74,64,168,0.9) 42%, rgba(63,201,189,0.9) 100%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[40px] lg:gap-[48px] items-start px-6 lg:px-[132px] py-[60px] lg:py-[84px] w-full">
        <div className="flex flex-col gap-[24px] items-start flex-1 min-w-0 w-full">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#7ee3d8] rounded-full h-[6px] w-[6px] shrink-0" />
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Company updates</p>
          </div>
          <h1 className="font-sora font-bold text-white text-[32px] lg:text-[42px] leading-[1.14] tracking-[-0.4px] m-0 w-full">
            What changed at ZoikoStream, and when.
          </h1>
          <p className="font-inter font-normal text-[#e4e6ea] text-[16px] leading-[1.6] m-0 w-full">
            Track meaningful changes to ZoikoStream&apos;s platform, Live Events, commercial model, trust posture and operating experience — with clear dates, scope and action guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-stretch sm:items-center w-full sm:w-auto">
            <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] px-[24px] h-[52px] flex items-center justify-center border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">View latest updates</span>
            </button>
            <button className="border border-[rgba(255,255,255,0.35)] border-solid rounded-[10px] px-[24px] h-[52px] flex items-center justify-center bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">Browse by category</span>
            </button>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.98)] rounded-[18px] shadow-[0px_30px_60px_-25px_rgba(0,0,0,0.5)] flex flex-col w-full lg:w-[564px] shrink-0 p-[18px] gap-0">
          {PREVIEW_UPDATES.map((update, index) => (
            <div
              key={update.title}
              className={`flex flex-col sm:flex-row sm:items-center gap-[10px] sm:gap-[16px] py-[20px] px-[6px] w-full ${
                index < PREVIEW_UPDATES.length - 1 ? "border-b border-[#dde2ea] border-solid" : ""
              }`}
            >
              <p className="font-inter font-bold text-[#9aa1ae] text-[12px] leading-[1.6] m-0 sm:w-[70px] shrink-0 whitespace-nowrap">{update.date}</p>
              <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                <p className="font-sora font-bold text-[#32353c] text-[14px] leading-[1.6] m-0 w-full">{update.title}</p>
                <p className="font-inter font-semibold text-[#6a6df0] text-[12px] m-0 w-full">{update.category}</p>
              </div>
              <div className={`rounded-full px-[10px] py-[4px] shrink-0 ${BADGE_CLASSES[update.badgeTone]}`}>
                <p className="font-inter font-bold text-[11px] m-0 whitespace-nowrap">{update.badgeLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
