import React from 'react';

const IMG = '/images/zoikostream-developer-support';

export default function FastTechnicalAuthorityCheckSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full overflow-hidden justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '919.66px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          {/* Dot and Label */}
          <div className="absolute bg-[#3fc9bd] rounded-[3px] w-[6px] h-[6px] left-[132px] top-[75px]" />
          <div className="absolute left-[146px] top-[68px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Before you submit a request
            </p>
          </div>

          {/* Heading */}
          <div className="absolute left-[132px] top-[108px] flex items-center h-[33px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              Fast technical authority check.
            </h2>
          </div>

          {/* Subtitle */}
          <div className="absolute left-[132px] top-[163px] flex items-center h-[17px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px]">
              Shown only when topic mapping is high-confidence and the route is current. Illustrative example below.
            </p>
          </div>

          {/* Card */}
          <div className="absolute left-[132px] right-[132px] top-[213.28px] h-[637.38px] bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[335.42px] bg-[#f1f4f8] overflow-hidden">
              <img src={`${IMG}/auth-card.png`} alt="Authentication" className="absolute w-full h-full object-cover top-0 left-0" />
            </div>
            
            {/* Pill */}
            <div className="absolute left-[30px] top-[366.42px] bg-[#e9f9f7] rounded-[100px] flex items-center justify-center px-[10px] py-[4px] h-[24.8px]">
              <span className="font-inter font-bold text-[#3fc9bd] uppercase text-[10.5px] tracking-[0.525px] leading-[16.8px]">Recommended authority</span>
            </div>
            
            <div className="absolute left-[30px] top-[406.22px] flex items-center h-[24px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[19px] tracking-[-0.19px] leading-[30.4px]">Authentication</h3>
            </div>
            
            <div className="absolute left-[30px] top-[449.6px] flex items-center h-[39.39px]">
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px]">
                This authority explains supported credential/token methods, scopes and least-privilege<br />
                guidance, and safe request patterns for authenticating API calls.
              </p>
            </div>
            
            <div className="absolute left-[30px] top-[510.39px] w-[161.91px] h-[40.8px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#1c2430] text-[13px] leading-[20.8px]">Open documentation</span>
            </div>
            
            <div className="absolute left-[207.91px] top-[510.39px] w-[161.91px] h-[40.8px] rounded-[10px] border border-[#32353c] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#32353c] text-[13px] leading-[20.8px]">Continue to support</span>
            </div>
            
            <div className="absolute left-[30px] right-[30px] top-[567.19px] border-t border-[#dde2ea] h-[40.19px]">
              <div className="absolute left-[0px] top-[24px] w-[8px] h-[8px] rounded-[4px] bg-[#9aa1ae]" />
              <div className="absolute left-[16px] top-[18px] flex items-center h-[16px]">
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px]">
                  No authoritative incident data currently loaded for this topic.
                </p>
              </div>
              <div className="absolute left-[399.2px] top-[18px] flex items-center h-[17px] cursor-pointer">
                <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px]">
                  Check System Status →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full overflow-hidden justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '854.44px' }}>
        <div className="w-full max-w-[390px] relative z-10 h-full">
          {/* Dot and Label */}
          <div className="absolute bg-[#3fc9bd] rounded-[3px] w-[6px] h-[6px] left-[22px] top-[45px]" />
          <div className="absolute left-[36px] top-[38px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Before you submit a request
            </p>
          </div>

          {/* Heading */}
          <div className="absolute left-[22px] top-[78px] flex flex-col justify-center h-[74.59px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">
              Fast technical authority
            </h2>
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">
              check.
            </h2>
          </div>

          {/* Subtitle */}
          <div className="absolute left-[22px] top-[174.7px] flex flex-col justify-center h-[63.37px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">
              Shown only when topic mapping is high-
            </p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">
              confidence and the route is current. Illustrative
            </p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">
              example below.
            </p>
          </div>

          {/* Card */}
          <div className="absolute left-[22px] right-[22px] top-[271.25px] h-[544.19px] bg-white border border-[#dde2ea] rounded-[18px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 aspect-[344/98.28] bg-[#f1f4f8] overflow-hidden">
              <img src={`${IMG}/auth-card-mobile.png`} alt="Authentication" className="absolute w-full h-[100.01%] object-cover top-0 left-0" />
            </div>
            
            {/* Pill */}
            <div className="absolute left-[30px] top-[129.28px] bg-[#e9f9f7] rounded-[100px] flex items-center px-[10px] h-[24.8px]">
              <span className="font-inter font-bold text-[#3fc9bd] uppercase text-[10.5px] tracking-[0.525px] leading-[16.8px]">Recommended authority</span>
            </div>
            
            <div className="absolute left-[30px] top-[169.08px] flex items-center h-[24px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[19px] tracking-[-0.19px] leading-[30.4px] m-0">Authentication</h3>
            </div>
            
            <div className="absolute left-[30px] top-[212.48px] flex flex-col justify-center h-[84.17px]">
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
                This authority explains supported
              </p>
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
                credential/token methods, scopes and
              </p>
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
                least-privilege guidance, and safe request
              </p>
              <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
                patterns for authenticating API calls.
              </p>
            </div>
            
            <div className="absolute left-[30px] right-[148.09px] top-[318.03px] h-[40.8px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#1c2430] text-[13px] leading-[20.8px]">Open documentation</span>
            </div>
            
            <div className="absolute left-[30px] right-[154.8px] top-[370.83px] h-[40.8px] rounded-[10px] border border-[#32353c] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#32353c] text-[13px] leading-[20.8px]">Continue to support</span>
            </div>
            
            <div className="absolute left-[30px] right-[30px] top-[427.62px] border-t border-[#dde2ea] h-[86.56px]">
              <div className="absolute left-[0px] top-[51.29px] w-[8px] h-[8px] rounded-[4px] bg-[#9aa1ae] -translate-y-1/2" />
              <div className="absolute left-[16px] top-[50.88px] flex flex-col justify-center h-[57.6px] -translate-y-1/2">
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] m-0">
                  No authoritative incident
                </p>
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] m-0">
                  data currently loaded for
                </p>
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[20.8px] m-0">
                  this topic.
                </p>
              </div>
              <div className="absolute left-[204.64px] top-[51.19px] flex flex-col justify-center h-[63.38px] -translate-y-1/2 cursor-pointer">
                <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px] m-0">
                  Check
                </p>
                <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px] m-0">
                  System
                </p>
                <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px] m-0">
                  Status →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
