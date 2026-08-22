import React from 'react';

const ROUTES = [
  { title: "Privacy rights", link: "Go to Privacy →" },
  { title: "Cookie choices", link: "Cookie Preferences →" },
  { title: "Security", link: "Trust Center →" },
  { title: "Product issue", link: "Support →" },
  { title: "Accessibility barrier", link: "Accessibility →" },
  { title: "Legal notice", link: "Contact Legal →" },
];

export default function SectionNeedSomethingElse() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Routing
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Need something else?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#dde2ea] border border-[#dde2ea] rounded-[14px] overflow-hidden w-full">
        {ROUTES.map((route) => (
          <div key={route.title} className="bg-white p-[22px] flex flex-col gap-[16px]">
            <h3 className="font-sora font-bold text-[#32353c] text-[15px] m-0">{route.title}</h3>
            <span className="font-inter font-semibold text-[#5b8def] text-[14px]">{route.link}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
