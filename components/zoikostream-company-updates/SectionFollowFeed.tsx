import React from 'react';

export default function SectionFollowFeed() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[132px] py-[40px] lg:py-[48px]">
      <div
        className="rounded-[18px] p-[32px] lg:p-[40px] flex flex-col lg:flex-row gap-[24px] items-start lg:items-center justify-between w-full"
        style={{ backgroundImage: "linear-gradient(120deg, rgb(59,61,66) 0%, rgb(64,68,75) 100%)" }}
      >
        <div className="flex flex-col gap-[12px] items-start flex-1 min-w-0">
          <p className="font-sora font-bold text-white text-[20px] tracking-[-0.2px] m-0 whitespace-nowrap">Follow company updates</p>
          <p className="font-inter font-normal text-[#c7cbd3] text-[14px] leading-[1.6] m-0 w-full">
            Get an RSS/Atom feed of new company updates as they&apos;re published.
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] rounded-[10px] px-[24px] h-[52px] flex items-center justify-center border-none cursor-pointer hover:opacity-90 transition-opacity w-full lg:w-auto shrink-0">
          <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">Company updates feed</span>
        </button>
      </div>
    </div>
  );
}
