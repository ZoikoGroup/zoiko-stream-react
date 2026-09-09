import React from 'react';

const IMG = '/images/zoikostream-developer-support';

export default function ReproductionContextBuilderSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full overflow-hidden justify-center" style={{ height: '1333.17px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
          <img src={`${IMG}/reproduction-bg.png`} alt="" className="absolute max-w-none h-full left-[-33.32%] w-[166.65%] top-0 object-cover" />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(160deg, rgba(44, 46, 51, 0.96) 0%, rgba(59, 61, 66, 0.92) 100%)" }} />

        <div className="w-full max-w-[1440px] relative z-10 h-full flex justify-center">
          {/* Header Block */}
          <div className="absolute top-[75px] w-[6px] h-[6px] rounded-[3px] bg-[#7ee3d8] left-[601.3px]" />
          <div className="absolute top-[68px] left-[615.3px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Prepare a support request
            </p>
          </div>
          
          <div className="absolute top-[108px] w-full flex justify-center">
            <h2 className="font-sora font-bold text-white text-[26px] tracking-[-0.26px] leading-[41.6px] text-center">
              Reproduction context builder.
            </h2>
          </div>
          
          <div className="absolute top-[163px] w-full flex justify-center">
            <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[23.2px] text-center">
              Fields are conditional — only what improves reproducibility for your selected topic is requested. "I am not<br />
              sure" is always a valid answer.
            </p>
          </div>

          {/* Form Card */}
          <div className="absolute top-[240.47px] left-[340px] right-[340px] h-[1024.7px] bg-white rounded-[18px]">
            <div className="absolute top-[40px] left-[40px] h-[20.8px] flex items-center">
              <span className="font-inter font-bold text-[#5b8def] text-[13px] tracking-[0.52px] uppercase">Step 1 of 3</span>
            </div>
            <div className="absolute top-[75px] left-[40px] h-[27px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[22px] tracking-[-0.22px]">What's happening?</h3>
            </div>
            
            {/* Field 1 */}
            <div className="absolute top-[128px] left-[40px] h-[17px] flex items-center">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">Technical topic *</label>
            </div>
            <div className="absolute top-[156.37px] left-[40px] right-[40px] h-[45px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[18px]">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Authentication or developer access</span>
            </div>
            
            {/* Field 2 */}
            <div className="absolute top-[223px] left-[40px] h-[17px] flex items-center">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">Symptom class *</label>
            </div>
            <div className="absolute top-[251.76px] left-[40px] right-[40px] h-[45px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[18px]">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">How-to question</span>
            </div>

            {/* Row 3 - Environment & Client Surface */}
            <div className="absolute top-[316.76px] left-[40px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Environment</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional)</span>
            </div>
            <div className="absolute top-[347.16px] left-[40px] right-[388px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px]">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">e.g. Production, Sandbox, or 'not sure'</span>
            </div>
            
            <div className="absolute top-[316.76px] left-[388px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Client surface</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional)</span>
            </div>
            <div className="absolute top-[347.16px] left-[388px] right-[40px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px]">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">API, SDK, player, webhook, other</span>
            </div>

            {/* Row 4 - Request ID */}
            <div className="absolute top-[410.16px] left-[40px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Request, correlation or error ID</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional but preferred)</span>
            </div>
            <div className="absolute top-[440.55px] left-[40px] right-[40px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px]">
              <span className="font-inter font-normal text-[#757575] text-[14.5px]">e.g. req_8f2a1c...</span>
            </div>
            <div className="absolute top-[491px] left-[40px] h-[15px] flex items-center">
              <span className="font-inter font-normal text-[#9aa1ae] text-[12px]">Preferred over a raw log or payload when you have one.</span>
            </div>

            {/* Row 5 - Textareas */}
            <div className="absolute top-[528.73px] left-[40px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Expected behavior</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional)</span>
            </div>
            <div className="absolute top-[559.12px] left-[40px] right-[388px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <span className="font-jetbrains text-[#757575] text-[13px]">What did you expect to happen?</span>
            </div>
            
            <div className="absolute top-[528.73px] left-[388px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Observed behavior</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional)</span>
            </div>
            <div className="absolute top-[559.12px] left-[388px] right-[40px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <span className="font-jetbrains text-[#757575] text-[13px]">What actually happened?</span>
            </div>

            {/* Reproduction steps */}
            <div className="absolute top-[686.72px] left-[40px] h-[22px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Reproduction steps</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-1">(optional)</span>
            </div>
            <div className="absolute top-[717.11px] left-[40px] right-[40px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <div className="font-jetbrains text-[#757575] text-[13px] leading-[20px] flex flex-col">
                <span>1. ...</span>
                <span>2. ...</span>
                <span>3. ...</span>
              </div>
            </div>

            {/* Warning Message */}
            <div className="absolute top-[844.7px] left-[40px] right-[40px] h-[66px] bg-[#fdf5ec] border border-[#f0dcc0] rounded-[8px] flex items-center">
              <img src={`${IMG}/lock-icon.svg`} className="absolute left-[14px] top-[13px] w-[16px] h-[16px]" alt="" />
              <div className="absolute left-[40px] top-[14px]">
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px]">
                  Do not paste passwords, API keys, bearer/access tokens, private keys, signing secrets, MFA codes, or<br />
                  unnecessary customer data. We will never ask you to share a secret so we can "test" it.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="absolute top-[932.7px] left-[40px] right-[40px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px]">Continue</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full overflow-hidden flex-col items-center" style={{ height: '1780px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full flex justify-center">
          <img src={`${IMG}/reproduction-bg.png`} alt="" className="absolute max-w-none h-full left-[-33.32%] w-[166.65%] top-0 object-cover" />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(160deg, rgba(44, 46, 51, 0.96) 0%, rgba(59, 61, 66, 0.92) 100%)" }} />

        <div className="w-full max-w-[390px] relative z-10 h-full flex flex-col items-center">
          
          {/* Header Block */}
          <div className="absolute top-[45px] flex items-center justify-center h-[20px] w-full">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#7ee3d8] mr-[8px]" />
            <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Prepare a support request
            </p>
          </div>
          
          <div className="absolute top-[78px] w-full flex flex-col items-center h-[74.59px] justify-center">
            <h2 className="font-sora font-bold text-white text-[26px] tracking-[-0.26px] leading-[41.6px] text-center m-0">
              Reproduction context
            </h2>
            <h2 className="font-sora font-bold text-white text-[26px] tracking-[-0.26px] leading-[41.6px] text-center m-0">
              builder.
            </h2>
          </div>
          
          <div className="absolute top-[174.67px] w-full flex flex-col items-center h-[86.57px] justify-center px-[22px]">
            <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[23.2px] text-center m-0">
              Fields are conditional — only what improves
            </p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[23.2px] text-center m-0">
              reproducibility for your selected topic is
            </p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[23.2px] text-center m-0">
              requested. "I am not sure" is always a valid
            </p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[14.5px] leading-[23.2px] text-center m-0">
              answer.
            </p>
          </div>

          {/* Form Card */}
          <div className="absolute top-[298.43px] left-[22px] right-[22px] h-[1429.66px] bg-white rounded-[18px]">
            <div className="absolute top-[40px] left-[40px] h-[20.8px] flex items-center">
              <span className="font-inter font-bold text-[#5b8def] text-[13px] tracking-[0.52px] uppercase">Step 1 of 3</span>
            </div>
            <div className="absolute top-[75px] left-[40px] h-[27px] flex items-center">
              <h3 className="font-sora font-bold text-[#32353c] text-[22px] tracking-[-0.22px]">What's happening?</h3>
            </div>
            
            {/* Field 1 */}
            <div className="absolute top-[128px] left-[40px] h-[17px] flex items-center">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">Technical topic *</label>
            </div>
            <div className="absolute top-[156.38px] left-[40px] right-[40px] h-[45px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[18px]">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">Authentication or developer access</span>
            </div>
            
            {/* Field 2 */}
            <div className="absolute top-[223.38px] left-[40px] h-[17px] flex items-center">
              <label className="font-inter font-semibold text-[#32353c] text-[14px]">Symptom class *</label>
            </div>
            <div className="absolute top-[251.77px] left-[40px] right-[40px] h-[45px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[18px]">
              <span className="font-inter font-normal text-[#32353c] text-[14.5px]">How-to question</span>
            </div>

            {/* Row 3 - Environment & Client Surface (Stacked in Mobile) */}
            {/* Environment */}
            <div className="absolute top-[316.77px] left-[40px] right-[40px] h-[22.39px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Environment</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-[8px]">(optional)</span>
            </div>
            <div className="absolute top-[347.16px] left-[40px] right-[40px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px] overflow-hidden">
              <span className="font-inter font-normal text-[#757575] text-[14.5px] truncate">e.g. Production, Sandbox, or 'not sure'</span>
            </div>
            
            {/* Client surface */}
            <div className="absolute top-[426.16px] left-[40px] right-[40px] h-[22.39px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Client surface</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-[8px]">(optional)</span>
            </div>
            <div className="absolute top-[456.55px] left-[40px] right-[40px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px] overflow-hidden">
              <span className="font-inter font-normal text-[#757575] text-[14.5px] truncate">API, SDK, player, webhook, other</span>
            </div>

            {/* Row 4 - Request ID */}
            <div className="absolute top-[519.55px] left-[40px] right-[40px] h-[44.78px] flex flex-col justify-center">
              <div className="flex items-center h-[17px]">
                <span className="font-inter font-semibold text-[#32353c] text-[14px]">Request, correlation or error ID</span>
              </div>
              <div className="flex items-center h-[16px] mt-[4px]">
                <span className="font-inter font-normal text-[#9aa1ae] text-[13px]">(optional but preferred)</span>
              </div>
            </div>
            <div className="absolute top-[572.33px] left-[40px] right-[40px] h-[43px] border border-[#dde2ea] rounded-[8px] bg-white flex items-center px-[14px] overflow-hidden">
              <span className="font-inter font-normal text-[#757575] text-[14.5px] truncate">e.g. req_8f2a1c...</span>
            </div>
            <div className="absolute top-[623.33px] left-[40px] right-[40px] h-[34.19px] flex flex-col justify-center">
              <span className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px] m-0">Preferred over a raw log or payload when you</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px] m-0">have one.</span>
            </div>

            {/* Row 5 - Textareas (Stacked in Mobile) */}
            <div className="absolute top-[679.71px] left-[40px] right-[40px] h-[22.39px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Expected behavior</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-[8px]">(optional)</span>
            </div>
            <div className="absolute top-[710.1px] left-[40px] right-[40px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <span className="font-jetbrains text-[#757575] text-[13px]">What did you expect to happen?</span>
            </div>
            
            <div className="absolute top-[853.69px] left-[40px] right-[40px] h-[22.39px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Observed behavior</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-[8px]">(optional)</span>
            </div>
            <div className="absolute top-[884.08px] left-[40px] right-[40px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <span className="font-jetbrains text-[#757575] text-[13px]">What actually happened?</span>
            </div>

            {/* Reproduction steps */}
            <div className="absolute top-[1011.68px] left-[40px] right-[40px] h-[22.39px] flex items-center">
              <span className="font-inter font-semibold text-[#32353c] text-[14px]">Reproduction steps</span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[13px] ml-[8px]">(optional)</span>
            </div>
            <div className="absolute top-[1042.07px] left-[40px] right-[40px] h-[100px] border border-[#dde2ea] rounded-[8px] bg-white p-[14px]">
              <div className="font-jetbrains text-[#757575] text-[13px] leading-[20px] flex flex-col">
                <span className="m-0">1. ...</span>
                <span className="m-0">2. ...</span>
                <span className="m-0">3. ...</span>
              </div>
            </div>

            {/* Warning Message */}
            <div className="absolute top-[1169.66px] left-[40px] right-[40px] h-[146px] bg-[#fdf5ec] border border-[#f0dcc0] rounded-[8px]">
              <img src={`${IMG}/lock-icon.svg`} className="absolute left-[14px] top-[13px] w-[16px] h-[16px]" alt="" />
              <div className="absolute left-[40px] top-[14px] flex flex-col">
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">Do not paste passwords, API keys,</p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">bearer/access tokens, private keys,</p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">signing secrets, MFA codes, or</p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">unnecessary customer data. We</p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">will never ask you to share a secret</p>
                <p className="font-inter font-normal text-[#b8895a] text-[12.5px] leading-[20px] m-0">so we can "test" it.</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="absolute top-[1337.66px] left-[40px] right-[40px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center cursor-pointer">
              <span className="font-inter font-semibold text-[#1c2430] text-[15px]">Continue</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
