import React from 'react';

const DOCS = [
  "Terms of Service/Use",
  "Privacy Notice",
  "Data Processing Addendum",
  "Acceptable Use Policy",
  "Live Events Terms",
  "Developer/API Terms",
];

export default function SectionPopularDocuments() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Popular documents
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Frequently requested documents.
      </h2>
      <div className="flex flex-wrap gap-[16px] w-full">
        {DOCS.map((doc) => (
          <button
            key={doc}
            className="h-[43.6px] px-[20px] bg-white border border-[#dde2ea] rounded-full cursor-pointer hover:border-[#5b8def] transition-colors"
          >
            <span className="font-inter font-semibold text-[#32353c] text-[14px] whitespace-nowrap">{doc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
