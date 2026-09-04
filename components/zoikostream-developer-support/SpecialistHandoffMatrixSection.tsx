import React from 'react';

const handoffItems = [
  { topic: 'General technical implementation', desc: 'Technical authority before generic Contact support.', link: 'Developer documentation →' },
  { topic: 'Authentication / access documentation', desc: 'Account-specific access failures use approved account support.', link: 'Authentication →' },
  { topic: 'Possible platform incident', desc: 'Never create an outage from a single user report.', link: 'System Status →' },
  { topic: 'Enterprise account-specific technical support', desc: 'Only when entitlement and topic ownership are verified.', link: 'Enterprise support →' },
  { topic: 'Live Events technical issue', desc: 'Routed per approved ownership taxonomy, with the reason explained.', link: 'Live Events support →' },
  { topic: 'Billing / developer commercial access', desc: 'Never turned into a sales lead from a technical case.', link: 'Usage and billing →' },
  { topic: 'Product or site defect report', desc: 'Developer support retains integration-specific failures.', link: 'Report an issue →' },
  { topic: 'Accessibility barrier', desc: 'Direct route — no forced technical triage.', link: 'Accessibility help →' },
  { topic: 'Security vulnerability', desc: 'Never collected in an ordinary developer case.', link: 'Security reporting →' },
  { topic: 'General nontechnical help', desc: 'Safe intent context is preserved across the handoff.', link: 'Contact support →' },
];

export default function SpecialistHandoffMatrixSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea]" style={{ height: '852.41px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[75px] w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] left-[132px]" />
          <div className="absolute top-[68px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              Right team, right issue
            </p>
          </div>

          <div className="absolute top-[108px] left-[132px] h-[33px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              Specialist handoff matrix.
            </h2>
          </div>

          <div className="absolute top-[163px] left-[132px] flex items-center h-[40.18px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px]">
              Developer support does not become a sales queue — commercial handoffs happen only when explicitly<br />
              relevant.
            </p>
          </div>

          <div className="absolute top-[236.47px] left-[132px] right-[132px] border-t border-[#dde2ea]">
            {handoffItems.map((item, i) => {
              const topOffset = i * 54.59;
              return (
                <div key={i} className="absolute left-0 right-0 border-b border-[#dde2ea] flex items-center h-[54.59px]" style={{ top: `${topOffset}px` }}>
                  <span className="absolute left-0 font-inter font-semibold text-[#32353c] text-[13.5px] leading-[21.6px]">
                    {item.topic}
                  </span>
                  <span className="absolute right-[383px] font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px]">
                    {item.desc}
                  </span>
                  <span className="absolute right-0 font-inter font-bold text-[#5b8def] text-[13px] leading-[20.8px] cursor-pointer hover:underline">
                    {item.link}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full flex-col justify-start bg-white border-b border-[#dde2ea] pt-[45px] pb-[40px] px-[22px]">
        <div className="w-full max-w-[390px] relative z-10 mx-auto">
          {/* Header Block */}
          <div className="flex items-center h-[20px] mb-[13px]">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] m-0">
              Right team, right issue
            </p>
          </div>

          <div className="flex flex-col mb-[13.49px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">
              Specialist handoff matrix.
            </h2>
          </div>

          <div className="flex flex-col mb-[31.69px]">
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">Developer support does not become a sales</p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">queue — commercial handoffs happen only when</p>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">explicitly relevant.</p>
          </div>

          {/* Table container using Flex Flow */}
          <div className="w-full border-t border-[#dde2ea] flex flex-col">
            {handoffItems.map((item, i) => (
              <div key={i} className="w-full border-b border-[#dde2ea] flex flex-col py-[18px]">
                <span className="font-inter font-semibold text-[#32353c] text-[13.5px] leading-[21.6px] mb-[4px]">
                  {item.topic}
                </span>
                <span className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px] mb-[4px]">
                  {item.desc}
                </span>
                <span className="font-inter font-bold text-[#5b8def] text-[13px] leading-[20.8px] cursor-pointer hover:underline">
                  {item.link}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
