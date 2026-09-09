import React from 'react';
const imgFaqSection = "/images/zoikostream-service-reliability/faq-section-faq-section.png";
const imgBgBlob2 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob2.svg";
const imgBgBlob1 = "/images/zoikostream-service-reliability/controlled-access-section-bg-blob1.svg";
const imgChevronDown = "/images/zoikostream-service-reliability/faq-section-chevron-down.svg";

export default function FaqSection() {
  return (
    <div className="flex flex-col gap-8 lg:gap-[48px] flex-wrap items-center px-6 lg:px-[112px] py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3596" data-name="FAQ-Section">
      <img alt="" className="absolute inset-0 z-0 max-w-none object-cover pointer-events-none size-full" src="/images/zoikostream-data-protection/faq-bg.png" />
      <div className="absolute bottom-[-30px] right-[-148px] size-[520px]" data-node-id="3842:3597" data-name="bg-blob-2">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="absolute left-[-140px] size-[420px] top-[-88px]" data-node-id="3842:3598" data-name="bg-blob-1">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="flex flex-col items-start relative shrink-0 w-full" data-node-id="3842:3599" data-name="Section-Header">
        <p className="[word-break:break-word] font-sans font-bold font-bold leading-[60.8px] relative shrink-0 text-[#0a0d13] text-[37.9px] tracking-[-0.38px] w-full" data-node-id="3842:3600">
          Frequently asked questions
        </p>
      </div>
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(4,fit-content(100%))] h-[648px] relative shrink-0 w-full" data-node-id="3842:3601" data-name="FAQ-Grid">
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-1 self-stretch shrink-0" data-node-id="3842:3602" data-name="FAQ-Item-0">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3603" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3604">
              What does this page cover?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3605" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3606" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3608">
            This page presents audited historical evidence mapping global reliability, network <br className="hidden lg:block" /> resilience, operational business continuity, and system recovery capability. Each <br className="hidden lg:block" /> observation carries exact scope, period, and data parameters.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-1 self-stretch shrink-0" data-node-id="3842:3609" data-name="FAQ-Item-1">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3610" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3611">
              Is this page a live status page?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3612" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3613" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3615">
            No. This represents retrospective assurance evidence. Current active outages, <br className="hidden lg:block" /> global latency spikes, or scheduled software updates belong exclusively on System <br className="hidden lg:block" /> Status.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-2 self-stretch shrink-0" data-node-id="3842:3616" data-name="FAQ-Item-2">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3617" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3618">{`What is ZoikoStream's uptime?`}</p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3619" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3620" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3622">
            We publish exact observed availability metrics in historical blocks (e.g., Q1-Q2 2026 <br className="hidden lg:block" /> Core Ingest registered 99.9821%). We map calculation methodologies clearly to <br className="hidden lg:block" /> prevent generalized statistical assumptions.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-2 self-stretch shrink-0" data-node-id="3842:3623" data-name="FAQ-Item-3">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3624" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3625">
              What SLA applies to my account?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3626" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3627" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3629">
            Service Level Agreements are commercially and legally defined inside specific <br className="hidden lg:block" /> contract terms. Public retrospective observations represent standard platform <br className="hidden lg:block" /> performance, not structural legal guarantees.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-3 self-stretch shrink-0" data-node-id="3842:3630" data-name="FAQ-Item-4">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3631" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3632">
              What happens during an outage?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3633" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3634" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3636">
            Our live status portal details incident scope, active containment efforts, and <br className="hidden lg:block" /> estimated resolution parameters. Personal account impacts are managed strictly <br className="hidden lg:block" /> through L1 support channels.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-3 self-stretch shrink-0" data-node-id="3842:3637" data-name="FAQ-Item-5">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3638" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3639">
              Does ZoikoStream have disaster recovery?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3640" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3641" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3643">
            Yes. Restorative capabilities are verified via automated failover node exercises. <br className="hidden lg:block" /> Audit results mapping true recovery metrics are available for controlled enterprise <br className="hidden lg:block" /> review.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-1 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-4 self-stretch shrink-0" data-node-id="3842:3644" data-name="FAQ-Item-6">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3645" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3646">{`Who are ZoikoStream's infrastructure providers?`}</p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3647" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3648" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3650">
            We maintain an active, audited list of approved cloud datacenters, local <br className="hidden lg:block" /> telecommunication fiber loops, and CDN subprocessors on the Subprocessors <br className="hidden lg:block" /> Inventory page.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid col-2 flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[10px] row-4 self-stretch shrink-0" data-node-id="3842:3651" data-name="FAQ-Item-7">
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3652" data-name="QuestionRow">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap" data-node-id="3842:3653">
              How do I report a vulnerability?
            </p>
            <div className="flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="3842:3654" data-name="Arrow-Indicator">
              <div className="relative shrink-0 size-[16px]" data-node-id="3842:3655" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-sans font-normal font-normal leading-[20px] relative shrink-0 text-[#4f5e74] text-[13.5px] w-full" data-node-id="3842:3657">
            Security findings must route through our audited Responsible Disclosure program <br className="hidden lg:block" /> to protect stream integrity. Please do not submit vulnerability tickets via generic <br className="hidden lg:block" /> customer support.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}