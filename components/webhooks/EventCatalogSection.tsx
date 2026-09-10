import React from 'react';

const imgBg = "/images/webhooks/event-catalog-background.webp";

const families = [
  {
    image: "/images/webhooks/catalog-stream-events.webp",
    title: 'Stream Events',
    event: 'stream.status.changed',
    meta: 'Version v2.1 · Emitted when stream transitions',
  },
  {
    image: "/images/webhooks/catalog-recording-events.webp",
    title: 'Recording Events',
    event: 'recording.ready',
    meta: 'Version v1.3 · Emitted on processing complete',
  },
  {
    image: "/images/webhooks/catalog-asset-events.webp",
    title: 'Asset Events',
    event: 'asset.updated',
    meta: 'Version v2.0 · Emitted on metadata updates',
  },
];

export default function EventCatalogSection() {
  return (
    <section
      id="event-catalog"
      className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden"
      data-name="Event-Catalog-Section"
    >
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Event catalog
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Current public event families and types with version, lifecycle, and trigger context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {families.map((family) => (
            <div key={family.title} className="border border-[#e2e8f0] border-solid flex flex-col items-start rounded-[16px] overflow-hidden">
              <img alt="" className="h-[160px] object-cover w-full" src={family.image} />
              <div className="bg-white flex flex-col gap-[16px] items-start p-[20px] w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="font-sans font-bold text-[#0a0d13] text-[18px]">{family.title}</p>
                  <div className="bg-[#d1fae5] flex items-start px-[8px] py-[2px] rounded-[2px]">
                    <span className="font-mono font-bold text-[#065f46] text-[9px]">CURRENT</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] items-start">
                  <p className="font-sans font-bold text-[#4f5e74] text-[14px]">{family.event}</p>
                  <p className="font-mono font-normal text-[#9aa1ae] text-[12px]">{family.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#e2e8f0] border-solid flex flex-wrap gap-3 justify-between items-center p-[16px] rounded-[8px] w-full">
          <span className="font-sans font-normal text-[#9aa1ae] text-[14px]">Search event catalog or lookup schemas...</span>
          <span className="font-mono font-bold text-[#4f5e74] text-[12px] break-words min-w-0">ONLY ACTIVE CONTRACT EVENTS REGISTERED</span>
        </div>
      </div>
    </section>
  );
}
