import React from 'react';

const imgBg = "/images/security-advisories/history-bg.png";

export default function HistoricalRecordsSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Historical-Records-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.2)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Historical and Superseded Records
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            Material security alterations are systematically preserved for long-term audit and traceability.
            Superseded advisories preserve their successors cleanly. Corrections are explicitly labeled, and all
            historical documentation remains searchable.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Record-List">
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[16px] sm:gap-[20px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full sm:flex-row sm:gap-[24px] sm:items-center" data-name="Record-Item">
            <div className="bg-[#232b3a] flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[80px]">
              <span className="font-sans font-bold leading-[normal] text-[#00d4aa] text-[22px]">2024</span>
              <span className="font-mono font-normal leading-[normal] not-italic text-[#707a8c] text-[11px]">NOV</span>
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px relative">
              <div className="flex flex-wrap gap-[12px] items-center relative shrink-0">
                <span className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[12px]">ZSA-2024-008</span>
                <span className="bg-[rgba(245,158,11,0.14)] font-mono font-bold leading-[normal] not-italic px-[8px] py-[2px] rounded-[4px] text-[#f59e0b] text-[10px]">
                  SUPERSEDED
                </span>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[17px]">
                Session Management Enhancement
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#aab3c4] text-[13.5px] w-full">
                All original parameters have been replaced by the updated architectural guidelines in{" "}
                <span className="text-[#00d4aa] underline">ZSA-2025-001</span>. Please refer directly to the new
                master document for your deployment logic.
              </p>
            </div>
          </div>
          <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[16px] sm:gap-[20px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full sm:flex-row sm:gap-[24px] sm:items-center" data-name="Record-Item">
            <div className="bg-[#232b3a] flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[80px]">
              <span className="font-sans font-bold leading-[normal] text-[#00d4aa] text-[22px]">2024</span>
              <span className="font-mono font-normal leading-[normal] not-italic text-[#707a8c] text-[11px]">SEP</span>
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px relative">
              <div className="flex flex-wrap gap-[12px] items-center relative shrink-0">
                <span className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[12px]">ZSA-2024-006</span>
                <span className="bg-[#232b3a] font-mono font-bold leading-[normal] not-italic px-[8px] py-[2px] rounded-[4px] text-[#707a8c] text-[10px]">
                  ARCHIVED HISTORICAL
                </span>
              </div>
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[17px]">
                CDN Edge Configuration Update
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#aab3c4] text-[13.5px] w-full">
                CDN infrastructure edge optimization completed successfully. This is a static historical record.
                Integrity audits verify correct and active routing pathways remain closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
