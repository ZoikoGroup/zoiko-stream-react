import React from 'react';

const IMG = '/images/zoikostream-contact-support';

const topics = [
  { img: 'general-product-help.png', title: 'General product help', link: '→ Contact support / Help Center' },
  { img: 'account-access.png', title: 'Account or sign-in access', link: '→ Account-access support' },
  { img: 'billing.png', title: 'Billing or account charge', link: '→ Usage and billing support' },
  { img: 'developer-api.png', title: 'Developer / API / integration', link: '→ Developer support' },
  { img: 'enterprise-account.png', title: 'Enterprise account support', link: '→ Enterprise support (eligibility-checked)' },
  { img: 'live-events.png', title: 'Live Events', link: '→ Live Events support / System status' },
  { img: 'service-availability.png', title: 'Service availability / outage', link: '→ System status first' },
  { img: 'product-issue.png', title: 'Product / website issue report', link: '→ Report an issue' },
  { img: 'accessibility.png', title: 'Accessibility barrier', link: '→ Accessibility help' },
  { img: 'security.png', title: 'Security vulnerability', link: '→ Approved security reporting only' },
  { img: 'enterprise-account.png', title: 'Sales / pricing / new purchase', link: '→ Pricing / Contact sales (only if you choose it)' },
  { img: 'something-else.png', title: 'Something else', link: '→ Continue to general intake' }
];

export default function SupportIntentRouterSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea]" style={{ height: '1272.38px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          {/* Dot */}
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[132px]" />
          
          {/* Label */}
          <div className="absolute top-[86px] left-[146px] transform -translate-y-1/2 flex flex-col justify-center h-[20px]">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Start here
            </p>
          </div>

          {/* Title */}
          <div className="absolute top-[134.4px] left-[132px] transform -translate-y-1/2 flex flex-col justify-center h-[44.8px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] mb-0">
              What do you need help with?
            </h2>
          </div>

          {/* Description */}
          <div className="absolute top-[184.7px] left-[132px] transform -translate-y-1/2 flex flex-col justify-center h-[24.8px]">
            <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[24.8px] mb-0">
              Choosing the closest option routes you correctly — free text alone never determines routing.
            </p>
          </div>

          {/* Grid */}
          <div className="absolute top-[231.09px] left-[132px] right-[132px] grid grid-cols-4 gap-[16px]">
            {topics.map((topic, i) => (
              <div key={i} className="relative w-full h-[291.03px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                <div className="absolute top-0 left-0 right-0 h-[210px] bg-[#f1f4f8] overflow-hidden">
                  <img 
                    src={`${IMG}/${topic.img}`} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="absolute top-[235px] left-[18px] right-[20px] transform -translate-y-1/2 flex flex-col justify-center h-[18.85px]">
                  <p className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[18.85px] mb-0">
                    {topic.title}
                  </p>
                </div>

                <div className="absolute top-[261.35px] left-[18px] right-[12px] transform -translate-y-1/2 flex flex-col justify-center h-[19.2px]">
                  <p className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px] truncate group-hover:text-[#5b8def] transition-colors mb-0">
                    {topic.link}
                  </p>
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
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
            Start here
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[36px] mt-[16px] mb-0 pr-[10px]">
          What do you need help with?
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22px] mt-[16px] mb-[30px]">
          Choosing the closest option routes you correctly — free text alone never determines routing.
        </p>

        {/* Cards Stack */}
        <div className="flex flex-col gap-[16px] w-full">
          {topics.map((topic, i) => (
            <div key={i} className="relative w-full h-[291.03px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden cursor-pointer active:bg-gray-50 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-[210px] bg-[#f1f4f8] overflow-hidden">
                <img 
                  src={`${IMG}/${topic.img}`} 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="absolute top-[235px] left-[18px] right-[20px] transform -translate-y-1/2 flex flex-col justify-center h-[18.85px]">
                <p className="font-sora font-bold text-[#32353c] text-[14px] tracking-[-0.14px] leading-[18px] mb-0">
                  {topic.title}
                </p>
              </div>

              <div className="absolute top-[261.35px] left-[18px] right-[12px] transform -translate-y-1/2 flex flex-col justify-center h-[19.2px]">
                <p className="font-inter font-normal text-[#9aa1ae] text-[12px] leading-[19.2px] truncate mb-0">
                  {topic.link}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
