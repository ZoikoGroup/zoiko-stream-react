import React from 'react';

const FIELDS = [
  { label: "Published", description: "When ZoikoStream posted the record." },
  { label: "Effective", description: "When the change actually applies." },
  { label: "Applies to", description: "The affected audience or scope." },
  { label: "Action", description: "What the reader must do, if anything." },
  { label: "Status", description: "Effective / Upcoming / Superseded / Withdrawn." },
];

export default function SectionHowToReadAnUpdate() {
  return (
    <div className="bg-[#3b3d42] w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Reference</p>
        </div>
        <h2 className="font-sora font-bold text-white text-[24px] lg:text-[28px] leading-[1.6] tracking-[-0.28px] m-0 w-full">
          How to read an update.
        </h2>
        <p className="font-inter font-normal text-[#c7cbd3] text-[15.5px] leading-[1.6] m-0 w-full">
          Five fields explain every record — no need to infer impact from marketing copy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] w-full">
          {FIELDS.map((field) => (
            <div key={field.label} className="bg-[#40444b] border border-[#565a63] border-solid rounded-[14px] p-[20px] flex flex-col gap-[16px] items-start">
              <p className="font-sora font-bold text-[#7ee3d8] text-[14.5px] m-0 whitespace-nowrap">{field.label}</p>
              <p className="font-inter font-normal text-[#c7cbd3] text-[13px] leading-[1.6] m-0 w-full">{field.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
