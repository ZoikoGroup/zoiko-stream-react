import React from 'react';

const handoffRows = [
  {
    category: 'General unresolved help',
    desc: 'Approved intent plus what you entered.',
    action: 'Contact support →'
  },
  {
    category: 'Developer / API / integration',
    desc: 'Structured technical intent only — free text transfers with consent.',
    action: 'Developer support →'
  },
  {
    category: 'Enterprise account-specific',
    desc: 'Account/entitlement context only after authorization.',
    action: 'Enterprise support →'
  },
  {
    category: 'Live Events',
    desc: 'Event identifiers only if you choose to supply them.',
    action: 'Live Events support →'
  },
  {
    category: 'Product / website issue report',
    desc: 'Issue category plus what you approve to share.',
    action: 'Report an issue →'
  },
  {
    category: 'Accessibility barrier',
    desc: 'Barrier context only — never inferred disability.',
    action: 'Accessibility help →'
  },
  {
    category: 'Service health',
    desc: 'No support form payload required to view status.',
    action: 'System status →'
  },
  {
    category: 'Commercial inquiry (if selected)',
    desc: 'Never transferred by default — you start commercial intake separately.',
    action: 'Pricing / Contact sales →'
  }
];

export default function SpecialistHandoffMatrixSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea]" style={{ height: '705.55px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[132px]" />
          
          <div className="absolute top-[76px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Right team, right issue
            </p>
          </div>

          <div className="absolute top-[112px] left-[132px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] mb-0">
              Where your request goes.
            </h2>
          </div>

          <div className="absolute top-[190.79px] left-[132px] right-[132px] border-t border-[#dde2ea]">
            {handoffRows.map((row, i) => (
              <div key={i} className="flex h-[54.59px] border-b border-[#dde2ea] items-center relative">
                <div className="absolute left-0 w-[500px]">
                  <span className="font-inter font-semibold text-[#32353c] text-[13.5px] leading-[21.6px]">
                    {row.category}
                  </span>
                </div>
                <div className="absolute left-[500px] w-[500px]">
                  <span className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px]">
                    {row.desc}
                  </span>
                </div>
                <div className="absolute right-0 flex justify-end">
                  <span className="font-inter font-bold text-[#5b8def] text-[13px] leading-[20.8px] cursor-pointer hover:underline">
                    {row.action}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col bg-white border-b border-[#dde2ea] px-[20px] py-[60px]">
        {/* Dot & Label */}
        <div className="flex items-center">
          <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
            Right team, right issue
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[34px] mt-[16px] mb-[30px] pr-[20px]">
          Where your request goes.
        </h2>

        {/* List */}
        <div className="flex flex-col border-t border-[#dde2ea] w-full">
          {handoffRows.map((row, i) => (
            <div key={i} className="flex flex-col border-b border-[#dde2ea] py-[16px] gap-[8px]">
              <span className="font-inter font-semibold text-[#32353c] text-[12px] leading-[20px]">
                {row.category}
              </span>
              <span className="font-inter font-normal text-[#9aa1ae] text-[11px] leading-[18px]">
                {row.desc}
              </span>
              <span className="font-inter font-semibold text-[#5b8def] text-[12px] leading-[20px] cursor-pointer hover:underline mt-[4px]">
                {row.action}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
