'use client';

import React, { useState } from 'react';

const newsItems = [
  {
    date: 'Aug 18, 2026',
    category: 'Product & Platform',
    title: 'ZoikoStream introduces expanded live captioning across the platform.',
    description: 'Live captioning is now available across supported playback surfaces.',
  },
  {
    date: 'Aug 12, 2026',
    category: 'Live Events',
    title: 'ZoikoStream expands managed Live Events production partnerships.',
    description: 'New partnerships extend managed broadcast options for enterprise teams.',
  },
  {
    date: 'Aug 6, 2026',
    category: 'Company',
    title: 'ZoikoStream appoints new Chief Trust & Security Officer.',
    description: 'The appointment strengthens security and governance leadership.',
  },
  {
    date: 'Jul 29, 2026',
    category: 'Research',
    title: 'ZoikoStream publishes annual State of Live Video report.',
    description: 'Reviews audience, reliability and accessibility trends in 2026.',
  },
  {
    date: 'Jul 21, 2026',
    category: 'Product & Platform',
    title: 'ZoikoStream releases updated SDKs for mobile playback.',
    description: 'Simplifies integration for mobile developers.',
  },
  {
    date: 'Jul 14, 2026',
    category: 'Partnership',
    title: 'ZoikoStream and identity partner announce authentication integration.',
    description: 'Adds streamlined authenticated access for enterprise viewers.',
  },
  {
    date: 'Jul 8, 2026',
    category: 'Company',
    title: 'ZoikoStream completes annual third-party security assessment.',
    description: 'Findings documented in the ZoikoStream Trust Center.',
  },
];

const TOTAL_ANNOUNCEMENTS = 24;

export default function ArchiveSection() {
  const [search, setSearch] = useState('');

  const filteredItems = newsItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const announcementCount = search ? filteredItems.length : TOTAL_ANNOUNCEMENTS;

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[132px] py-16 lg:py-[89px] flex flex-col gap-[24px] items-start bg-white">
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[8px] items-center">
          <span className="block bg-[#5b8def] rounded-full size-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase">
            Archive
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] sm:text-[28px] leading-[1.6] tracking-[-0.28px]">
          Browse all news.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-[12px] items-stretch md:items-center w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search newsroom"
          className="font-inter font-normal text-[#32353c] text-[14px] placeholder:text-[#757575] bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[43px] px-[16px] flex-1 outline-none focus:border-[#5b8def]"
        />
        <button
          type="button"
          className="font-inter font-normal text-[#32353c] text-[14px] bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[45px] px-[18px] w-full md:w-[188px] text-left shrink-0"
        >
          Category
        </button>
        <button
          type="button"
          className="font-inter font-normal text-[#32353c] text-[14px] bg-white border border-[#dde2ea] border-solid rounded-[10px] h-[45px] px-[18px] w-full md:w-[188px] text-left shrink-0"
        >
          Year
        </button>
        <button
          type="button"
          onClick={() => setSearch('')}
          className="font-inter font-semibold text-[#9aa1ae] text-[13.5px] whitespace-nowrap hover:text-[#6b7280] transition-colors shrink-0"
        >
          Clear filters
        </button>
      </div>

      <p className="font-inter font-normal text-[#9aa1ae] text-[13.5px]">
        {announcementCount} announcements
      </p>

      <div className="border-t border-[#dde2ea] border-solid flex flex-col w-full">
        {filteredItems.map((item) => (
          <div
            key={item.title}
            className="border-b border-[#dde2ea] border-solid flex flex-col sm:flex-row gap-[8px] sm:gap-[24px] items-start py-[24px] w-full"
          >
            <p className="font-inter font-normal text-[#9aa1ae] text-[13px] w-full sm:w-[100px] shrink-0">
              {item.date}
            </p>
            <p className="font-inter font-bold text-[#6a6df0] text-[12px] tracking-[0.36px] uppercase w-full sm:w-[140px] shrink-0">
              {item.category}
            </p>
            <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
              <h3 className="font-sora font-bold text-[#32353c] text-[16px] leading-[1.6] tracking-[-0.16px]">
                {item.title}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[8px] items-center justify-center w-full pt-[16px]">
        <button
          type="button"
          className="bg-[#32353c] border border-[#32353c] border-solid rounded-[8px] h-[38px] w-[38px] font-inter font-semibold text-white text-[13.5px]"
        >
          1
        </button>
        <button
          type="button"
          className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] w-[38px] font-inter font-semibold text-[#32353c] text-[13.5px]"
        >
          2
        </button>
        <button
          type="button"
          className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] w-[38px] font-inter font-semibold text-[#32353c] text-[13.5px]"
        >
          3
        </button>
        <button
          type="button"
          className="border border-[#dde2ea] border-solid rounded-[8px] h-[38px] px-[16px] font-inter font-semibold text-[#32353c] text-[13.5px] whitespace-nowrap"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
