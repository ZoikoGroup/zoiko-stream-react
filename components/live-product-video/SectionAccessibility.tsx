import React from 'react';

const imgSectionBg = "/images/live-product-video/accessibility-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/accessibility-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/accessibility-bg-blob-2.svg";

const REQUIREMENTS = [
  { icon: "/images/live-product-video/accessibility-icon-keyboard.svg", tag: "REQ-01", title: "Player Controls", description: "Keyboard operable, visible focus, descriptive labels." },
  { icon: "/images/live-product-video/accessibility-icon-subtitles.svg", tag: "REQ-02", title: "Captions/Subtitles", description: "Distinct versioned artifacts with provenance." },
  { icon: "/images/live-product-video/accessibility-icon-globe.svg", tag: "REQ-03", title: "Language Selection", description: "Language names/codes, not flags." },
  { icon: "/images/live-product-video/accessibility-icon-activity.svg", tag: "REQ-04", title: "Live State", description: "Caption availability and degradation explicit." },
  { icon: "/images/live-product-video/accessibility-icon-repeat.svg", tag: "REQ-05", title: "Replay Continuity", description: "Track provenance carried independently." },
  { icon: "/images/live-product-video/accessibility-icon-alert-triangle.svg", tag: "REQ-06", title: "Errors", description: "Announce blocking errors accessibly, preserve focus." },
  { icon: "/images/live-product-video/accessibility-icon-wind.svg", tag: "REQ-07", title: "Motion", description: "Respect reduced-motion preferences." },
  { icon: "/images/live-product-video/accessibility-icon-help-circle.svg", tag: "REQ-08", title: "Barrier Help", description: "Direct accessibility help route, never sales-gated." },
];

export default function SectionAccessibility() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-217px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.24] tracking-[-0.8px] m-0 w-full">
            Build inclusive behavior into the workflow
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Accessibility is part of product readiness, not a footer claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
          {REQUIREMENTS.map((item) => (
            <div key={item.tag} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[24px] flex flex-col gap-[16px] items-start">
              <div className="flex items-center justify-between w-full">
                <div className="bg-[rgba(52,212,202,0.1)] rounded-[6px] p-[8px] flex items-center justify-center">
                  <img alt="" className="size-[18px]" src={item.icon} />
                </div>
                <p className="font-sans font-bold text-[#4a8cfb] text-[11px] m-0 whitespace-nowrap">{item.tag}</p>
              </div>
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 w-full">{item.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[13px] leading-[1.54] m-0 w-full">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
