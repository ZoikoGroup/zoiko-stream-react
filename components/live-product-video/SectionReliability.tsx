import React from 'react';

const imgSectionBg = "/images/live-product-video/reliability-section-bg.png";

const ROWS = [
  { scenario: "Duplicate create/start request", resolution: "Idempotency strategy" },
  { scenario: "Unknown outcome after timeout", resolution: "Reconcile state first" },
  { scenario: "Source loss", resolution: "Show Lost/Recovering with timestamp" },
  { scenario: "Delayed/out-of-order event", resolution: "Reconcile against authoritative state" },
  { scenario: "Authorization unavailable", resolution: "Protected playback fails closed" },
  { scenario: "Partial recording", resolution: "Block complete replay status" },
  { scenario: "Stale analytics/state", resolution: "Mark stale with last updated" },
  { scenario: "Platform incident", resolution: "Link System status, no invented cause" },
  { scenario: "Unsupported requirement", resolution: "Return Validate/Not supported" },
];

export default function SectionReliability() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.71)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.24] m-0 w-full">
            Design for partial and unknown outcomes
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Operational maturity is visible in the exception model.
          </p>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] w-full overflow-x-auto">
          <div className="min-w-[680px]">
            <div className="bg-[#141e33] border-b-2 border-[#232b3a] border-solid flex gap-[12px] items-start p-[16px] w-full">
              <p className="font-sans font-bold text-white text-[13px] m-0 w-[300px] shrink-0">Failure Scenario</p>
              <p className="font-sans font-bold text-white text-[13px] m-0 flex-1 min-w-0">Deterministic Resolution</p>
            </div>
            {ROWS.map((row, index) => (
              <div
                key={row.scenario}
                className={`flex gap-[12px] items-center p-[16px] w-full ${index < ROWS.length - 1 ? "border-b border-[#232b3a] border-solid" : ""}`}
              >
                <p className="font-sans font-bold text-[#34d4ca] text-[14px] m-0 w-[300px] shrink-0">{row.scenario}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] m-0 flex-1 min-w-0">{row.resolution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
