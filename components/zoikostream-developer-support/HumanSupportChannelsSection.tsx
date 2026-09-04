import React from 'react';

const IMG = '/images/zoikostream-developer-support';

export default function HumanSupportChannelsSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '718.67px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[75px] w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] left-[132px]" />
          <div className="absolute top-[68px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              When you need a person
            </p>
          </div>

          <div className="absolute top-[108px] left-[132px] h-[33px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              Human developer-support channels.
            </h2>
          </div>

          <div className="absolute top-[163px] left-[132px] flex items-center h-[40.19px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px]">
              Only source-approved channels are rendered — this page never assumes a ticket form, chat, community, or<br />
              callback exists by default.
            </p>
          </div>

          {/* Card 1 */}
          <div className="absolute top-[236.47px] left-[132px] w-[380px] h-[413.2px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[213px] bg-[#f1f4f8]">
              <img src={`${IMG}/support-case.png`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[236.62px] left-[22px] h-[22.8px] px-[10px] bg-[#e9f9f7] rounded-[100px] flex items-center justify-center">
              <span className="font-inter font-bold text-[#3fbf7f] text-[10.5px] tracking-[0.42px] uppercase">Available</span>
            </div>
            <div className="absolute top-[271px] left-[22px] h-[21px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px]">Developer support case</h3>
            </div>
            <div className="absolute top-[310px] left-[22px] h-[36.8px] flex items-center">
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">
                Submit a structured, reproducible technical case for<br />review by developer support.
              </p>
            </div>
            <div className="absolute top-[367px] left-[22px] h-[17px] flex items-center">
              <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">Start a request →</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-[236.47px] left-[530px] w-[380px] h-[413.2px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[213px] bg-[#f1f4f8]">
              <img src={`${IMG}/developer-community.png`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[236.62px] left-[22px] h-[22.8px] px-[10px] bg-[#e9f9f7] rounded-[100px] flex items-center justify-center">
              <span className="font-inter font-bold text-[#3fbf7f] text-[10.5px] tracking-[0.42px] uppercase">Available</span>
            </div>
            <div className="absolute top-[271px] left-[22px] h-[21px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px]">Developer community</h3>
            </div>
            <div className="absolute top-[310px] left-[22px] h-[36.8px] flex items-center">
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">
                Ask and answer questions with other developers in<br />official ZoikoStream spaces.
              </p>
            </div>
            <div className="absolute top-[367px] left-[22px] h-[17px] flex items-center">
              <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">Join the community →</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute top-[236.47px] left-[928px] w-[380px] h-[413.2px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[213px] bg-[#f1f4f8]">
              <img src={`${IMG}/enterprise-support.png`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[236.62px] left-[22px] h-[22.8px] px-[10px] bg-[#eef3ff] rounded-[100px] flex items-center justify-center">
              <span className="font-inter font-bold text-[#5b8def] text-[10.5px] tracking-[0.42px] uppercase">Authenticated · entitlement required</span>
            </div>
            <div className="absolute top-[271px] left-[22px] h-[21px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px]">Enterprise developer support</h3>
            </div>
            <div className="absolute top-[310px] left-[22px] h-[36.8px] flex items-center">
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">
                Shown only after an authoritative entitlement check —<br />never inferred from plan, domain or org size.
              </p>
            </div>
            <div className="absolute top-[367px] left-[22px] h-[17px] flex items-center">
              <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">Learn about entitlement →</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full flex-col justify-start bg-[#f7f9fb] border-b border-[#dde2ea] pt-[45px] pb-[40px] px-[22px]">
        <div className="w-full max-w-[390px] relative z-10 mx-auto">
          {/* Header Block */}
          <div className="flex items-center h-[20px] mb-[13px]">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] m-0">
              When you need a person
            </p>
          </div>

          <div className="flex flex-col mb-[16px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">Human developer-</h2>
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">support channels.</h2>
          </div>

          <div className="flex flex-col mb-[34px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">Only source-approved channels are rendered —</p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">this page never assumes a ticket form, chat,</p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">community, or callback exists by default.</p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-[18px] w-full">
            
            {/* Card 1 */}
            <div className="w-full bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden pb-[20px]">
              <div className="w-full aspect-[344/193.5] bg-[#f1f4f8]">
                <img src={`${IMG}/support-case.png`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-[22px] pt-[24px]">
                <div className="inline-flex h-[22.8px] px-[10px] bg-[#e9f9f7] rounded-[100px] items-center justify-center mb-[22px]">
                  <span className="font-inter font-bold text-[#3fbf7f] text-[10.5px] tracking-[0.42px] uppercase">Available</span>
                </div>
                <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] mb-[10px]">
                  Developer support case
                </h3>
                <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] mb-[12px]">
                  Submit a structured, reproducible technical case for review by developer support.
                </p>
                <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">
                  Start a request →
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden pb-[20px]">
              <div className="w-full aspect-[344/193.5] bg-[#f1f4f8]">
                <img src={`${IMG}/developer-community.png`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-[22px] pt-[24px]">
                <div className="inline-flex h-[22.8px] px-[10px] bg-[#e9f9f7] rounded-[100px] items-center justify-center mb-[22px]">
                  <span className="font-inter font-bold text-[#3fbf7f] text-[10.5px] tracking-[0.42px] uppercase">Available</span>
                </div>
                <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] mb-[10px]">
                  Developer community
                </h3>
                <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] mb-[12px]">
                  Ask and answer questions with other developers in official ZoikoStream spaces.
                </p>
                <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">
                  Join the community →
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden pb-[20px]">
              <div className="w-full aspect-[344/193.5] bg-[#f1f4f8]">
                <img src={`${IMG}/enterprise-support.png`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-[22px] pt-[24px]">
                <div className="inline-flex h-[22.8px] px-[10px] bg-[#eef3ff] rounded-[100px] items-center justify-center mb-[22px]">
                  <span className="font-inter font-bold text-[#5b8def] text-[10.5px] tracking-[0.42px] uppercase">Authenticated · entitlement required</span>
                </div>
                <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] mb-[10px]">
                  Enterprise developer support
                </h3>
                <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] mb-[12px]">
                  Shown only after an authoritative entitlement check — never inferred from plan, domain or org size.
                </p>
                <span className="font-inter font-semibold text-[#5b8def] text-[14.5px] cursor-pointer hover:underline">
                  Learn about entitlement →
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
