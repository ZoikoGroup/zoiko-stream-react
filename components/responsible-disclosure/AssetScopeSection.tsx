import React from 'react';

const imgBg = "/images/responsible-disclosure/scope-section.png";

const assets = [
  { target: "zoikostream.com", type: "Web Properties", state: "In Scope", stateClass: "bg-[rgba(16,185,129,0.1)] border-[#10b981] text-[#10b981]" },
  { target: "api.zoikostream.com", type: "API Surface", state: "In Scope", stateClass: "bg-[rgba(16,185,129,0.1)] border-[#10b981] text-[#10b981]" },
  { target: "Player SDK (Web & Native)", type: "SDK Integration", state: "Conditional", stateClass: "bg-[rgba(245,158,11,0.1)] border-[#f59e0b] text-[#f59e0b]" },
  { target: "Mobile Applications (iOS / Android)", type: "Mobile Client", state: "In Scope", stateClass: "bg-[rgba(16,185,129,0.1)] border-[#10b981] text-[#10b981]" },
  { target: "Third-Party Integrations", type: "External Partner", state: "Out of Scope", stateClass: "bg-[rgba(239,68,68,0.1)] border-[#ef4444] text-[#ef4444]" },
  { target: "staging.zoikostream.com / *.dev", type: "Internal Environments", state: "Out of Scope", stateClass: "bg-[rgba(239,68,68,0.1)] border-[#ef4444] text-[#ef4444]" },
];

export default function AssetScopeSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative scroll-mt-[80px] w-full overflow-hidden" id="asset-scope" data-name="Asset-Scope-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.3)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Published Asset Scope
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            The scope registry shows which assets are explicitly in scope, out of scope, conditional, or not
            published. Silence, absence, or technical discoverability never means in scope.
          </p>
        </div>

        <div className="bg-[#232b3a] hidden lg:flex flex-col gap-px items-start overflow-hidden relative rounded-[12px] shrink-0 w-full" data-name="Scope-Table">
          <div className="bg-[#0a0d13] flex gap-[24px] items-start px-[24px] py-[16px] relative shrink-0 w-full" data-name="Table-Header">
            <span className="flex-1 font-mono font-bold leading-[normal] min-w-px not-italic text-[#aab3c4] text-[12px]">TARGET / PATTERN</span>
            <span className="font-mono font-bold leading-[normal] not-italic shrink-0 text-[#aab3c4] text-[12px] w-[192px]">ASSET TYPE</span>
            <span className="font-mono font-bold leading-[normal] not-italic shrink-0 text-[#aab3c4] text-[12px] w-[160px]">STATE</span>
          </div>
          {assets.map((asset) => (
            <div key={asset.target} className="bg-[#0d1119] flex gap-[24px] items-center px-[24px] py-[20px] relative shrink-0 w-full" data-name="Table-Row">
              <span className="[word-break:break-word] flex-1 font-sans font-bold leading-[normal] min-w-px text-[#eef1f6] text-[15px]">{asset.target}</span>
              <span className="font-mono font-normal leading-[normal] not-italic shrink-0 text-[#aab3c4] text-[12px] w-[192px]">{asset.type}</span>
              <div className={`${asset.stateClass} border border-solid flex items-center justify-center px-[10px] py-[4px] rounded-[100px] shrink-0 w-[160px]`}>
                <span className="font-sans font-bold leading-[normal] text-[12px] whitespace-nowrap">{asset.state}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[12px] items-start lg:hidden relative shrink-0 w-full" data-name="Scope-Cards">
          {assets.map((asset) => (
            <div key={asset.target} className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start p-[18px] relative rounded-[12px] shrink-0 w-full" data-name="Scope-Card">
              <p className="[word-break:break-word] font-sans font-bold leading-[22px] text-[#eef1f6] text-[15px] w-full">{asset.target}</p>
              <div className="flex flex-wrap gap-[10px] items-center justify-between relative shrink-0 w-full">
                <span className="font-mono font-normal leading-[normal] not-italic text-[#aab3c4] text-[12px]">{asset.type}</span>
                <div className={`${asset.stateClass} border border-solid flex items-center justify-center px-[10px] py-[4px] rounded-[100px] shrink-0`}>
                  <span className="font-sans font-bold leading-[normal] text-[12px] whitespace-nowrap">{asset.state}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="[word-break:break-word] font-sans font-normal leading-[20px] relative shrink-0 text-[#707a8c] text-[12px] w-full">
          *No published scope result does not mean out of scope unless an explicit record says so. If in doubt, reach
          out before conducting operations.
        </p>
      </div>
    </div>
  );
}
