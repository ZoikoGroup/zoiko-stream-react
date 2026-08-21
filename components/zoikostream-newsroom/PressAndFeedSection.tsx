import React from 'react';
import Link from 'next/link';

export default function PressAndFeedSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[132px] py-16 lg:py-[89px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
        <div className="bg-white border border-[#dde2ea] border-solid flex flex-col gap-[24px] items-start justify-center p-[32px] rounded-[18px] w-full">
          <div className="flex flex-col gap-[12px] items-start w-full">
            <h3 className="font-sora font-bold text-[#32353c] text-[20px] tracking-[-0.2px]">
              Press & media
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6]">
              Find official company information, approved media assets and press contacts.
            </p>
          </div>
          <Link
            href="#"
            className="border border-[#32353c] border-solid rounded-[10px] h-[52px] px-[24px] flex items-center justify-center hover:bg-[#32353c]/5 transition-colors"
          >
            <span className="font-inter font-semibold text-[#32353c] text-[15px] whitespace-nowrap">
              Open Press & media →
            </span>
          </Link>
        </div>

        <div className="bg-[#3b3d42] flex flex-col gap-[16px] items-start justify-center p-[32px] rounded-[18px] w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <h3 className="font-sora font-bold text-white text-[18px] tracking-[-0.18px]">
              Newsroom feed
            </h3>
            <p className="font-inter font-normal text-[#c7cbd3] text-[13.5px] leading-[1.6]">
              Follow official ZoikoStream announcements via RSS/Atom.
            </p>
          </div>
          <Link
            href="#"
            className="font-inter font-bold text-[#9fd8ff] text-[13.5px] hover:underline"
          >
            Get the newsroom feed →
          </Link>
        </div>
      </div>
    </section>
  );
}
