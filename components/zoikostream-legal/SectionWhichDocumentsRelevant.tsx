import React from 'react';

const GROUPS = [
  { title: "Website visitor", items: ["Website/Use Terms", "Privacy Notice", "Cookie Notice"] },
  { title: "Account / self-service user", items: ["Applicable Service Terms", "Acceptable Use", "Privacy; commercial terms if incorporated"] },
  { title: "Enterprise customer", items: ["Signed agreement or Order Form", "Enterprise Terms if incorporated", "DPA; SLA/addenda if applicable"] },
  { title: "Developer / API integrator", items: ["Applicable Service Terms", "Developer/API Terms", "Acceptable Use; DPA if applicable"] },
  { title: "Live Events customer", items: ["Applicable Service/Enterprise Terms", "Live Events/Production addendum", "Order Form"] },
  { title: "Media / public", items: ["Website Terms", "Trademark/copyright guidance where relevant"] },
];

export default function SectionWhichDocumentsRelevant() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Navigation guide
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Which documents may be relevant?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full mb-[24px]">
        {GROUPS.map((group) => (
          <div key={group.title} className="border border-[#dde2ea] rounded-[14px] p-[24px]">
            <h3 className="font-sora font-bold text-[#32353c] text-[15.5px] m-0 mb-[16px]">{group.title}</h3>
            <ul className="m-0 p-0 flex flex-col gap-[10px] list-none">
              {group.items.map((item) => (
                <li key={item} className="font-inter font-normal text-[#4b5563] text-[13px] leading-[1.5] flex gap-[8px]">
                  <span className="text-[#9aa1ae]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-[#dde2ea] pt-[16px]">
        <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6] m-0">
          This guide helps you navigate the public document library. Your signed agreement and the terms incorporated into it control as stated there.
        </p>
      </div>
    </div>
  );
}
