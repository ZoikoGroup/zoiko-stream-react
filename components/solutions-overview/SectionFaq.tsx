import React from 'react';

const imgSectionFaq = "/images/solutions-overview/faq-section-bg.png";
const imgBgBlob1 = "/images/solutions-overview/faq-bg-blob-1.svg";
const imgBgBlob2 = "/images/solutions-overview/faq-bg-blob-2.svg";
const imgMinus = "/images/solutions-overview/faq-icon-minus.svg";
const imgPlus = "/images/solutions-overview/faq-icon-minus-1.svg";

export default function SectionFaq() {
  return (
    <div className="border-[#e1e6eb] border-b border-solid content-stretch flex flex-col gap-[56px] items-start px-6 lg:px-[112px] py-[60px] lg:py-[120px] relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionFaq} />
      <div className="absolute left-[-180px] size-[420px] top-[-120px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-95px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-sans font-bold leading-[48px] relative shrink-0 text-[#0f1b2d] text-[32px] lg:text-[38px] tracking-[-0.8px] w-full m-0">
          Questions about choosing a ZoikoStream solution
        </h2>
        <p className="font-sans font-normal leading-[28px] relative shrink-0 text-[#4f5e74] text-[18px] w-full m-0">
          Deterministic guidance for matching operational capacity to video outcomes.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              How do I choose the right ZoikoStream solution?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            Determine your entrance path based on operational capacity. Developers should select raw APIs/SDKs; organizations needing secure controls should browse enterprise layouts; produced broadcasts map best to managed services.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              Can developers build video into their own product?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            Yes. Our developer APIs allow you to embed ultra-low latency streams, ingest feeds, and trigger VOD replays directly within native apps with custom players and logic control.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              Can ZoikoStream support enterprise broadcasts?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            Yes. We support SAML SSO, complete administrative logs, and highly governed workflow routing structures to restrict sensitive enterprise broadcasts to authorized staff only.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              How does ZoikoStream handle private or controlled audiences?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            ZoikoStream uses token-gated access, geo-fencing, and domain-restricted embeds to ensure only verified viewers can join private or controlled audience streams.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              Does ZoikoStream support captions and multilingual video?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            Yes. ZoikoStream includes real-time closed captioning, automated subtitle generation, and support for multilingual audio tracks across live and on-demand video content.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              Can live broadcasts be recorded and preserved?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            Yes. All live broadcasts can be automatically recorded, stored, and converted into on-demand assets for replay, clipping, and long-term content preservation.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              What is the difference between a solution and a workflow?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            A solution is a pre-configured product bundle designed for a specific use case, while a workflow is a customizable sequence of steps you define to match your operational process.
          </p>
        </div>
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between relative shrink-0 w-full gap-[16px]">
            <h3 className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#0f1b2d] text-[16px] whitespace-normal m-0 flex-1">
              When should I talk to an expert?
            </h3>
            <div className="border border-[#e1e6eb] border-solid flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[28px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-normal leading-[22px] not-italic relative shrink-0 text-[#4f5e74] text-[14px] w-full m-0">
            If your use case involves custom integrations, high-volume broadcast infrastructure, or compliance-sensitive environments, connecting with a ZoikoStream specialist ensures your architecture is optimized from day one.
          </p>
        </div>
      </div>
    </div>
  );
}
