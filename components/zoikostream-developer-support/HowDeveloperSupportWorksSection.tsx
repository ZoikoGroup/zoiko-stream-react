import React from 'react';

const steps = [
  { num: '1', title: 'Technical area', desc: 'What technical area are you working with? Resolves to a controlled topic.' },
  { num: '2', title: 'Symptom class', desc: 'How-to question, unexpected behavior, access/auth problem, possible outage, or security issue.' },
  { num: '3', title: 'Self-service check', desc: 'Is there an authoritative documentation destination? Offered without dead-ending human support.' },
  { num: '4', title: 'Reproduction context', desc: 'Can the issue be reproduced safely? We collect structured facts, not raw payloads.' },
  { num: '5', title: 'Identifier preference', desc: 'Is there a request/error/correlation identifier? Preferred over raw logs when available.' },
  { num: '6', title: 'Account context', desc: 'Requested only when necessary and authorized — never guessed from browser state.' },
  { num: '7', title: 'Optional evidence', desc: 'Redacted snippet, log excerpt or attachment, with safety controls applied.' },
  { num: '8', title: 'Specialist handoff check', desc: 'If another destination owns the issue with high confidence, we hand off before submission.' },
  { num: '9', title: 'Review transferred data', desc: "An explicit preview before anything is sent — remove what you don't want to share." },
  { num: '10', title: 'Submit', desc: 'Sent to the approved developer-support channel with a truthful confirmation.' },
];

export default function HowDeveloperSupportWorksSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full overflow-hidden justify-center bg-white border-b border-[#dde2ea]" style={{ height: '1055.44px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full flex flex-col items-center">
          
          {/* Dot and Label */}
          <div className="absolute top-[68px] flex items-center justify-center h-[20px]">
            <div className="bg-[#3fc9bd] rounded-[3px] w-[6px] h-[6px] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] uppercase tracking-[1.25px] text-[12.5px] leading-[20px]">
              Transparent process
            </p>
          </div>
          
          {/* Heading */}
          <div className="absolute top-[108px] flex items-center h-[33px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              How Developer support works.
            </h2>
          </div>
          
          <div className="absolute top-[175.62px] w-[862px] border-t border-[#dde2ea] flex flex-col relative">
            {steps.map((s, i) => (
              <div key={i} className="w-full h-[81px] border-b border-[#dde2ea] relative">
                <div className="absolute w-[32px] h-[32px] rounded-[16px] bg-[#f1f4f8] flex items-center justify-center left-0 top-[16px]">
                  <span className="font-sora font-bold text-[#6a6df0] text-[13px] leading-[20.8px]">{s.num}</span>
                </div>
                <div className="absolute left-[55.84px] top-[18px] h-[18px] flex items-center">
                  <span className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[23.2px]">{s.title}</span>
                </div>
                <div className="absolute left-[55.84px] top-[43px] h-[20.8px] flex items-center">
                  <span className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full overflow-hidden justify-center bg-white border-b border-[#dde2ea]">
        <div className="w-full max-w-[390px] relative z-10 pt-[45px] pb-[40px] px-[22px]">
          
          {/* Dot and Label */}
          <div className="flex items-center h-[20px] mb-[15px]">
            <div className="bg-[#3fc9bd] rounded-[3px] w-[6px] h-[6px] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] uppercase tracking-[1.25px] text-[12.5px] leading-[20px]">
              Transparent process
            </p>
          </div>
          
          {/* Heading */}
          <div className="flex flex-col justify-center mb-[34px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">
              How Developer support
            </h2>
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">
              works.
            </h2>
          </div>
          
          {/* Steps list using flow layout for safe text wrapping */}
          <div className="w-full border-t border-[#dde2ea] flex flex-col relative">
            {steps.map((s, i) => (
              <div key={i} className="w-full border-b border-[#dde2ea] relative py-[16px] pl-[56px] min-h-[81px]">
                <div className="absolute w-[32px] h-[32px] rounded-[16px] bg-[#f1f4f8] flex items-center justify-center left-0 top-[16px]">
                  <span className="font-sora font-bold text-[#6a6df0] text-[13px] leading-[20.8px]">{s.num}</span>
                </div>
                <div className="mb-[2px] pr-[10px]">
                  <span className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[23.2px] block">{s.title}</span>
                </div>
                <div className="pr-[10px]">
                  <span className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] block">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
