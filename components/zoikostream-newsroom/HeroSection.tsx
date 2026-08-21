import React from 'react';
import Image from 'next/image';

const featuredArticle = {
  category: 'Product & Platform',
  date: 'August 18, 2026',
  title: 'ZoikoStream introduces expanded live captioning across the platform.',
  description: 'Live captioning is now available across supported ZoikoStream playback surfaces, extending accessibility coverage for live and on-demand video.',
};

const relatedItems = [
  { category: 'Live Events', date: 'Aug 12, 2026', tag: 'Partnership' },
  { category: 'Company', date: 'Aug 6, 2026', tag: 'Company' },
  { category: 'Research', date: 'Jul 29, 2026', tag: 'Research' },
];

export default function HeroSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[132px] py-16 lg:py-[89px] flex flex-col items-start overflow-hidden bg-[#1c1f26]">
      <Image
        src="/images/zoikostream-newsroom/hero-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(59,61,66,0.658) 0%, rgba(64,68,75,0.595) 45%, rgba(93,221,214,0.245) 100%)',
        }}
      />

      <div className="relative flex flex-col xl:flex-row gap-[48px] items-start w-full">
        <div className="flex flex-col gap-[24px] items-start w-full xl:flex-1 xl:max-w-[560px] py-[24px]">
          <div className="flex gap-[8px] items-center">
            <span className="block bg-[#7ee3d8] rounded-full size-[6px] shrink-0" />
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase">
              Newsroom
            </p>
          </div>

          <h1 className="font-sora font-bold text-white text-[32px] sm:text-[42px] leading-[1.14] tracking-[-0.42px] w-full">
            News and announcements from ZoikoStream.
          </h1>

          <p className="font-inter font-normal text-[#e4e6ea] text-[16px] leading-[1.6] w-full">
            Official company, product, partnership and Live Events announcements from ZoikoStream, plus selected independent media coverage.
          </p>
        </div>

        <div className="bg-[rgba(255,255,255,0.97)] border border-[rgba(255,255,255,0.2)] border-solid flex flex-col gap-[20px] p-[26px] rounded-[18px] shadow-[0px_30px_60px_-25px_rgba(0,0,0,0.5)] w-full xl:w-[500px] shrink-0">
          <div className="flex flex-col gap-[16px] items-start">
            <div className="bg-[#e9f9f7] flex gap-[8px] items-center px-[10px] py-[6px] rounded-[100px]">
              <span className="block bg-[#3fc9bd] rounded-[3px] size-[6px] shrink-0" />
              <p className="font-inter font-bold text-[#3fc9bd] text-[11px] tracking-[0.66px] uppercase whitespace-nowrap">
                Official ZoikoStream news
              </p>
            </div>

            <div className="flex gap-[10px] items-center flex-wrap">
              <p className="font-inter font-semibold text-[#6a6df0] text-[12.5px] whitespace-nowrap">
                {featuredArticle.category}
              </p>
              <span className="font-inter font-normal text-[#9aa1ae] text-[12.5px]">·</span>
              <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] whitespace-nowrap">
                {featuredArticle.date}
              </p>
            </div>

            <h2 className="font-sora font-bold text-[#32353c] text-[20px] leading-[1.3] tracking-[-0.2px] w-full">
              {featuredArticle.title}
            </h2>

            <p className="font-inter font-normal text-[#63697a] text-[14px] leading-[1.6] w-full">
              {featuredArticle.description}
            </p>
          </div>

          <div className="border-t border-[#dde2ea] border-solid flex flex-col w-full">
            {relatedItems.map((item, index) => (
              <div
                key={item.category}
                className={`flex items-center justify-between py-[13px] w-full ${
                  index !== relatedItems.length - 1 ? 'border-b border-dashed border-[#dde2ea]' : ''
                }`}
              >
                <p className="font-inter font-normal text-[#6b7280] text-[13px] whitespace-nowrap">
                  {item.category} · {item.date}
                </p>
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] whitespace-nowrap">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
