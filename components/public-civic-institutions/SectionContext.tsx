import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/context-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/context-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/context-bg-blob-2.svg";

const CARDS = [
  {
    image: "/images/public-civic-institutions/context-card-public-meetings.png",
    title: "Public meetings & proceedings",
    description: "Council chambers, board meetings, and open government sessions demanding public transparency and live broadcast records.",
  },
  {
    image: "/images/public-civic-institutions/context-card-public-briefings.png",
    title: "Public briefings",
    description: "Press conferences, agency updates, and high-importance public information sessions requiring flawless stream uptime.",
  },
  {
    image: "/images/public-civic-institutions/context-card-public-programs.png",
    title: "Public programs",
    description: "Town halls, community outreach, and civic educational broadcasts designed to engage general populations transparently.",
  },
  {
    image: "/images/public-civic-institutions/context-card-controlled-sessions.png",
    title: "Controlled / internal sessions",
    description: "Restricted briefings, closed hearings, and internal civic operations demanding air-gapped stream access security.",
  },
  {
    image: "/images/public-civic-institutions/context-card-ceremonies.png",
    title: "Ceremonies & civic events",
    description: "Inaugurations, commemorations, and public celebrations requiring durable media broadcast formats for historical records.",
  },
  {
    image: "/images/public-civic-institutions/context-card-archives-replay.png",
    title: "Archives & replay",
    description: "On-demand access catalogs to recorded proceedings, offering citizens structured, searchable, and compliant video replay.",
  },
];

export default function SectionContext() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-182px] size-[420px] top-[-97px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-111px] right-[-178px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
            For institutions responsible for public information, controlled proceedings, or durable civic media
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Identify your operating context by responsibility, not jurisdiction or politics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[150px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="flex flex-col gap-[8px] items-start p-[20px] w-full">
                <h3 className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 w-full">{card.title}</h3>
                <p className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.54] m-0 w-full">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
