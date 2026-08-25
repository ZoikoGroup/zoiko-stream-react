import React from 'react';

const imgSectionBg = "/images/live-product-video/recording-replay-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/recording-replay-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/recording-replay-bg-blob-2.svg";

const ROWS = [
  {
    dimension: "Recording Intent",
    states: "Off · On · Conditional · Undecided",
    tone: "teal" as const,
    mandate: "Must be configured explicitly, never inferred from live media actions. Prevents accidental archive creation.",
  },
  {
    dimension: "Capture Job",
    states: "Not Started · Recording · Complete · Partial · Failed",
    tone: "gray" as const,
    mandate: "Partial archives cannot be silently presented to viewers as complete recordings without review.",
  },
  {
    dimension: "Asset Registration",
    states: "Pending · Registered · Duplicate-safe · Failed",
    tone: "gray" as const,
    mandate: "Registration tasks must be fully idempotent. Retries must not create duplicate storage assets.",
  },
  {
    dimension: "Replay Readiness",
    states: "Not Evaluated · Needs Review · Ready · Blocked",
    tone: "teal" as const,
    mandate: "Media integrity, caption accuracy, and audio sync must be validated before publication state changes.",
  },
  {
    dimension: "Audience Inheritance",
    states: "Inherited · Narrowed · Widening requires review",
    tone: "gray" as const,
    mandate: "Archived asset access cannot silently broaden beyond the original live audience without explicit audit.",
  },
  {
    dimension: "Publication",
    states: "Draft · Published · Withheld · Superseded · Withdrawn",
    tone: "gray" as const,
    mandate: "Supports version corrections and strict takedown sequences. Never rewrite platform history silently.",
  },
];

export default function Section10RecordingReplay() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-143px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.19] tracking-[-1px] m-0 w-full">
            Make replay a deliberate publication state
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Do not equate recorded with ready to watch.
          </p>
        </div>

        <div className="bg-white border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] w-full overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="bg-[#f8fafc] border-b-2 border-[#e1e6eb] border-solid flex gap-[16px] items-start px-[24px] py-[16px] w-full">
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-[240px] shrink-0">Control Dimension</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-[220px] shrink-0">States / Config Range</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 flex-1 min-w-0">Operational Mandate</p>
            </div>
            {ROWS.map((row, index) => (
              <div
                key={row.dimension}
                className={`flex gap-[16px] items-center px-[24px] py-[18px] w-full ${index % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} ${
                  index < ROWS.length - 1 ? "border-b border-[#e1e6eb] border-solid" : ""
                }`}
              >
                <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 w-[240px] shrink-0">{row.dimension}</p>
                <div className="w-[220px] shrink-0">
                  <div className={`rounded-full px-[10px] py-[4px] inline-flex items-center justify-center ${row.tone === "teal" ? "bg-[rgba(52,212,202,0.1)]" : "bg-[#e2e8f0]"}`}>
                    <p className={`font-sans font-bold text-[11px] tracking-[0.5px] uppercase m-0 whitespace-nowrap ${row.tone === "teal" ? "text-[#34d4ca]" : "text-[#4f5e74]"}`}>
                      {row.states}
                    </p>
                  </div>
                </div>
                <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 flex-1 min-w-0">{row.mandate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
