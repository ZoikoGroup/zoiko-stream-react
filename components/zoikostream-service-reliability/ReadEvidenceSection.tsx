import React from 'react';
const imgReadEvidenceSection = "/images/zoikostream-service-reliability/read-evidence-section-read-evidence-section.png";
const imgBgBlob2 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob2.svg";
const imgBgBlob1 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob1.svg";
const imgDot = "/images/zoikostream-service-reliability/current-evidence-section-status-dot.svg";
const imgDot1 = "/images/zoikostream-service-reliability/read-evidence-section-dot1.svg";
const imgDot2 = "/images/zoikostream-service-reliability/read-evidence-section-dot2.svg";
const imgDot3 = "/images/zoikostream-service-reliability/read-evidence-section-dot3.svg";
const imgDot4 = "/images/zoikostream-service-reliability/read-evidence-section-dot4.svg";
const imgDot5 = "/images/zoikostream-service-reliability/read-evidence-section-dot5.svg";

export default function ReadEvidenceSection() {
  return (
    <div className="bg-white flex flex-col items-center py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3140" data-name="Read-Evidence-Section">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full z-0" src="/images/zoikostream-data-protection/faq-bg.png" />
      <div className="absolute bottom-[-250px] right-[-148px] size-[520px] z-0" data-node-id="3842:3141" data-name="bg-blob-2">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="absolute left-[-140px] size-[420px] top-[-88px] z-0" data-node-id="3842:3142" data-name="bg-blob-1">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3143" data-name="Section-Header">
        <p className="font-sans font-bold font-bold leading-[48px] relative shrink-0 text-[#0a0d13] text-[38px] tracking-[-0.38px] w-full" data-node-id="3842:3144">
          How to read reliability evidence
        </p>
        <p className="font-sans font-normal font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full" data-node-id="3842:3145">
          Every material reliability statement identifies its type, scope, method, period, state, and limitations.
        </p>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(2,fit-content(100%))] h-[258px] relative shrink-0 w-full" data-node-id="3842:3146" data-name="State-Grid">
        <div className="bg-white border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3147" data-name="state-card-0">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3148" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3149">
              Current
            </p>
            <div className="bg-[rgba(0,212,170,0.08)] flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3150" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3151" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#00d4aa] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3152">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3153">
            Approved for stated scope within source-defined <br className="hidden lg:block" /> period.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3154" data-name="state-card-1">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3155" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3156">
              Review Required
            </p>
            <div className="bg-[rgba(245,158,11,0.08)] flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3157" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3158" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#f59e0b] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3159">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3160">
            Evidence requires revalidation or has a conflict.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid col-3 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-1 self-stretch shrink-0" data-node-id="3842:3161" data-name="state-card-2">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3162" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3163">
              Superseded
            </p>
            <div className="bg-[rgba(76,134,255,0.08)] flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3164" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3165" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot2} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#4c86ff] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3166">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3167">
            A newer approved record replaces it.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3168" data-name="state-card-3">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3169" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3170">
              Expired
            </p>
            <div className="bg-[#e2e8f0] flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3171" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3172" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot3} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#707a8c] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3173">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3174">
            Validity period has ended.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3175" data-name="state-card-4">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3176" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3177">
              Withdrawn
            </p>
            <div className="bg-[rgba(239,68,68,0.08)] flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3178" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3179" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot4} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#ef4444] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3180">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3181">
            Owner removed from public use.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] border-solid col-3 flex flex-col gap-[16px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-2 self-stretch shrink-0" data-node-id="3842:3182" data-name="state-card-5">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3183" data-name="card-header">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[18px] whitespace-nowrap" data-node-id="3842:3184">
              Unavailable
            </p>
            <div className="bg-[#f1f5f9] border border-[#4f5e74] border-solid flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="3842:3185" data-name="indicator">
              <div className="relative shrink-0 size-[6px]" data-node-id="3842:3186" data-name="dot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot5} />
              </div>
              <p className="[word-break:break-word] font-mono font-bold leading-[normal] not-italic relative shrink-0 text-[#4f5e74] text-[10px] uppercase whitespace-nowrap" data-node-id="3842:3187">
                Status
              </p>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13px] w-full" data-node-id="3842:3188">
            No eligible public answer is established.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}