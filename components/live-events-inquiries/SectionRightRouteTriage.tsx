import React from 'react';

const imgSvg = "/images/live-event-inquiries/triage-icon-1.svg";
const imgSvg1 = "/images/live-event-inquiries/triage-icon-2.svg";
const imgSvg2 = "/images/live-event-inquiries/triage-icon-3.svg";
const imgSvg3 = "/images/live-event-inquiries/triage-icon-4.svg";

export default function SectionRightRouteTriage() {
  return (
    <div className="bg-[#f7f9fb] relative w-full px-6 lg:px-[112px] py-[80px] lg:py-[120px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col gap-[16px]">
        {/* Header content */}
        <div className="flex items-center gap-[8px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Start with the right path
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0">
          Is this the right route?
        </h2>

        {/* Horizontal Ticker Cards Container */}
        <div className="flex flex-col lg:flex-row items-stretch bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden w-full mt-[24px] lg:mt-[40px] shadow-sm">

          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-start px-[22px] pt-[26px] pb-[32px] border-b lg:border-b-0 lg:border-r border-[#dde2ea] hover:bg-[#f8fafc] transition-colors">
            <div className="size-[36px] bg-[#f1f4f8] rounded-[9px] flex items-center justify-center shrink-0">
              <img alt="" className="size-[17px] block" src={imgSvg} />
            </div>
            <div className="flex flex-col gap-[15px] flex-1 mt-[14px] mb-[21px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] m-0 leading-[24px]">
                Planning a future event
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] m-0">
                A specific live event, broadcast or<br />defined event series.
              </p>
            </div>
            <a href="#" className="font-inter font-bold text-[#5b8def] text-[12.5px] mt-auto no-underline hover:underline">
              Continue planning →
            </a>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="flex-1 flex flex-col items-start px-[22px] pt-[26px] pb-[32px] bg-[#fdf8f1] border-b lg:border-b-0 lg:border-r border-[#dde2ea]">
            <div className="size-[36px] bg-[#faeed9] rounded-[9px] flex items-center justify-center shrink-0">
              <img alt="" className="size-[17px] block" src={imgSvg1} />
            </div>
            <div className="flex flex-col gap-[15px] flex-1 mt-[14px] mb-[21px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] m-0 leading-[24px]">
                Event is live now
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] m-0">
                Something is wrong with an active<br />service or broadcast.
              </p>
            </div>
            <a href="#" className="font-inter font-bold text-[#d99a4e] text-[12.5px] mt-auto no-underline hover:underline">
              Go to Support →
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-start px-[22px] pt-[26px] pb-[32px] border-b lg:border-b-0 lg:border-r border-[#dde2ea] hover:bg-[#f8fafc] transition-colors">
            <div className="size-[36px] bg-[#f1f4f8] rounded-[9px] flex items-center justify-center shrink-0">
              <img alt="" className="size-[17px] block" src={imgSvg2} />
            </div>
            <div className="flex flex-col gap-[15px] flex-1 mt-[14px] mb-[21px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] m-0 leading-[24px]">
                Enterprise-wide program
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] m-0">
                Ongoing platform infrastructure, not a<br />single event.
              </p>
            </div>
            <a href="#" className="font-inter font-bold text-[#5b8def] text-[12.5px] mt-auto no-underline hover:underline">
              Enterprise Inquiries →
            </a>
          </div>

          {/* Card 4 */}
          <div className="flex-1 flex flex-col items-start px-[22px] pt-[26px] pb-[32px] hover:bg-[#f8fafc] transition-colors">
            <div className="size-[36px] bg-[#f1f4f8] rounded-[9px] flex items-center justify-center shrink-0">
              <img alt="" className="size-[17px] block" src={imgSvg3} />
            </div>
            <div className="flex flex-col gap-[15px] flex-1 mt-[14px] mb-[21px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] m-0 leading-[24px]">
                Still exploring
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] m-0">
                Want to see what ZoikoStream Live<br />Events can do first.
              </p>
            </div>
            <a href="#" className="font-inter font-bold text-[#5b8def] text-[12.5px] mt-auto no-underline hover:underline">
              Explore Live Events →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
