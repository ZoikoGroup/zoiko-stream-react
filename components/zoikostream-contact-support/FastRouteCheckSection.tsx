import React from 'react';

const IMG = '/images/zoikostream-contact-support';

export default function FastRouteCheckSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '970.27px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[132px]" />
          
          <div className="absolute top-[76px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Before you submit
            </p>
          </div>

          <div className="absolute top-[112px] left-[132px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] mb-0">
              Fast route check.
            </h2>
          </div>

          <div className="absolute top-[174px] left-[132px] flex items-center">
            <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[24.8px] mb-0">
              Shown only when routing confidence is high and the destination is source-authorized.<br />
              Illustrative example below.
            </p>
          </div>

          <div className="absolute top-[255.89px] left-[132px] right-[132px] h-[637.38px] bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden">
            <div className="w-full aspect-[1174/335.42] bg-[#f1f4f8]">
              <img src={`${IMG}/fast-route.png`} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="absolute top-[366.42px] left-[30px] h-[24.8px] px-[12px] bg-[#e9f9f7] rounded-[100px] flex items-center justify-center">
              <span className="font-inter font-bold text-[#3fc9bd] text-[10.5px] tracking-[0.525px] uppercase">
                Recommended route
              </span>
            </div>

            <div className="absolute top-[406px] left-[30px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[19px] tracking-[-0.19px] leading-[30.4px] mb-0">
                Developer support
              </h3>
            </div>

            <div className="absolute top-[447px] left-[30px] flex items-center">
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] mb-0">
                Developer support handles implementation and API support, including authentication, request<br />
                errors, webhooks and SDK questions.
              </p>
            </div>

            <div className="absolute top-[510.39px] left-[30px] flex gap-[12px]">
              <div className="h-[40.8px] px-[24px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer shadow-sm hover:opacity-90">
                <span className="font-inter font-semibold text-[#1c2430] text-[13px] leading-[20.8px]">
                  Go to Developer support
                </span>
              </div>

              <div className="h-[40.8px] px-[24px] rounded-[10px] border border-[#32353c] flex items-center justify-center cursor-pointer hover:bg-gray-50 bg-white">
                <span className="font-inter font-semibold text-[#32353c] text-[13px] leading-[20.8px]">
                  Continue with Contact support
                </span>
              </div>
            </div>

            <div className="absolute top-[567.18px] left-[30px] right-[30px] h-[40.19px] border-t border-[#dde2ea] flex items-center">
              <div className="w-[8px] h-[8px] bg-[#9aa1ae] rounded-[4px]" />
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] ml-[8px]">
                No authoritative incident data currently loaded for this topic.
              </span>
              <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px] ml-[24px] cursor-pointer hover:underline">
                Check System Status →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col bg-[#f7f9fb] border-b border-[#dde2ea] px-[20px] py-[60px]">
        {/* Dot & Label */}
        <div className="flex items-center">
          <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
            Before you submit
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[34px] mt-[16px] mb-0">
          Fast route check.
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22px] mt-[16px] mb-[30px]">
          Shown only when routing confidence is high and the destination is source-authorized. Illustrative example below.
        </p>

        {/* Card */}
        <div className="w-full flex flex-col bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden">
          {/* Card Image */}
          <div className="w-full h-[140px] bg-[#f1f4f8]">
            <img src={`${IMG}/fast-route.png`} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Card Content */}
          <div className="flex flex-col p-[20px] pt-[24px]">
            {/* Badge */}
            <div className="h-[24px] px-[12px] bg-[#e9f9f7] rounded-[100px] flex items-center justify-center w-max mb-[20px]">
              <span className="font-inter font-bold text-[#3fc9bd] text-[10px] tracking-[0.5px] uppercase">
                Recommended route
              </span>
            </div>

            {/* Card Title */}
            <h3 className="font-sora font-bold text-[#32353c] text-[18px] tracking-[-0.18px] leading-[26px] mb-[12px]">
              Developer support
            </h3>

            {/* Card Description */}
            <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20px] mb-[24px] pr-[10px]">
              Developer support handles implementation and API support, including authentication, request errors, webhooks and SDK questions.
            </p>

            {/* Buttons Stack */}
            <div className="flex flex-col gap-[12px] mb-[24px]">
              <div className="w-[185px] h-[40px] rounded-[8px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer shadow-sm">
                <span className="font-inter font-semibold text-[#1c2430] text-[12px] leading-[20px]">
                  Go to Developer support
                </span>
              </div>

              <div className="w-[205px] h-[40px] rounded-[8px] border border-[#32353c] flex items-center justify-center cursor-pointer bg-white">
                <span className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px]">
                  Continue with Contact support
                </span>
              </div>
            </div>

            {/* Card Footer Divider */}
            <div className="w-full border-t border-[#f0f2f5] pt-[16px] flex justify-between items-start">
              <div className="flex items-start pr-[12px]">
                <div className="w-[6px] h-[6px] bg-[#9aa1ae] rounded-[3px] mt-[7px] flex-shrink-0" />
                <span className="font-inter font-normal text-[#9aa1ae] text-[11px] leading-[18px] ml-[8px]">
                  No authoritative incident data currently loaded for this topic.
                </span>
              </div>
              <span className="font-inter font-semibold text-[#5b8def] text-[12px] leading-[18px] w-[70px] flex-shrink-0">
                Check<br />System<br />Status →
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
