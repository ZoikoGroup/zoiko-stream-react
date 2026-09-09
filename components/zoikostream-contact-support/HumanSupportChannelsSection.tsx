import React from 'react';

const IMG = '/images/zoikostream-contact-support';

const channels = [
  {
    img: 'support-case.png',
    pill: 'Available',
    pillBg: '#e9f9f7',
    pillText: '#3fbf7f',
    title: 'Support case',
    desc: ["Submit a structured request and we'll respond", "through your preferred contact method."],
    link: 'Start a request →',
  },
  {
    img: 'help-center.png',
    pill: 'Available',
    pillBg: '#e9f9f7',
    pillText: '#3fbf7f',
    title: 'Help Center',
    desc: ['Browse guides and answers to common questions', 'before contacting support.'],
    link: 'Visit Help Center →',
  },
  {
    img: 'enterprise-support.png',
    pill: 'Authenticated · entitlement required',
    pillBg: '#eef3ff',
    pillText: '#5b8def',
    title: 'Enterprise support',
    desc: ['Shown only after an authoritative entitlement check', '— never inferred from plan or org size.'],
    link: 'Learn about entitlement →',
  },
];

export default function HumanSupportChannelsSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea]" style={{ height: '788px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          {/* Dot */}
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[132px]" />
          
          {/* Label */}
          <div className="absolute top-[86px] left-[146px] transform -translate-y-1/2 flex flex-col justify-center h-[20px]">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              Available channels
            </p>
          </div>

          {/* Title */}
          <div className="absolute top-[134.4px] left-[132px] transform -translate-y-1/2 flex flex-col justify-center h-[44.8px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] mb-0">
              Human support channels.
            </h2>
          </div>

          {/* Description */}
          <div className="absolute top-[196.19px] left-[132px] transform -translate-y-1/2 flex flex-col justify-center h-[49.6px]">
            <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[24.8px] mb-0">
              Only source-approved channels are shown — we never imply a channel exists (email, chat,
            </p>
            <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[24.8px] mb-0">
              phone) unless it's currently available to you.
            </p>
          </div>

          {/* Cards */}
          <div className="absolute top-[255.89px] left-[132px] right-[132px] grid grid-cols-3 gap-[20px]">
            {channels.map((channel, i) => (
              <div key={i} className="relative w-full h-[415.3px] bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden group">
                {/* Image Area */}
                <div className="absolute top-0 left-0 right-0 h-[212.63px] bg-[#f1f4f8] overflow-hidden">
                  <img 
                    src={`${IMG}/${channel.img}`} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Badge */}
                <div 
                  className="absolute left-[22px] h-[22.8px] px-[10.4px] py-[4px] rounded-[100px] top-[236.63px]"
                  style={{ backgroundColor: channel.pillBg }}
                >
                  <div className="absolute top-[11.4px] left-[10.4px] transform -translate-y-1/2 flex flex-col justify-center h-[20px]">
                    <p 
                      className="font-inter font-bold text-[10.5px] tracking-[0.42px] uppercase mb-0 whitespace-nowrap"
                      style={{ color: channel.pillText }}
                    >
                      {channel.pill}
                    </p>
                  </div>
                </div>

                {/* Card Title */}
                <div className="absolute top-[284.23px] left-[22px] right-[22px] transform -translate-y-1/2 flex flex-col justify-center h-[25.6px]">
                  <p className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] leading-[25.6px] mb-0">
                    {channel.title}
                  </p>
                </div>

                {/* Card Description */}
                <div className="absolute top-[328.63px] left-[22px] right-[22px] transform -translate-y-1/2 flex flex-col justify-center h-[43.2px]">
                  {channel.desc.map((line, idx) => (
                    <p key={idx} className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[21.6px] mb-0">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Card Link */}
                <div className="absolute top-[380.5px] left-[22px] transform -translate-y-1/2 flex flex-col justify-center h-[23.2px]">
                  <p className="font-inter font-semibold text-[#5b8def] text-[14.5px] leading-[23.2px] cursor-pointer hover:underline mb-0">
                    {channel.link}
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
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
            Available channels
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[34px] mt-[16px] mb-0">
          Human support channels.
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22px] mt-[16px] mb-[30px]">
          Only source-approved channels are shown — we never imply a channel exists (email, chat, phone) unless it's currently available to you.
        </p>

        {/* Cards Stack */}
        <div className="flex flex-col gap-[20px] w-full">
          {channels.map((channel, i) => (
            <div key={i} className="relative w-full flex flex-col bg-white border border-[#dde2ea] rounded-[14px] overflow-hidden">
              {/* Image Area */}
              <div className="w-full h-[180px] bg-[#f1f4f8] overflow-hidden">
                <img 
                  src={`${IMG}/${channel.img}`} 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-[20px]">
                {/* Badge */}
                <div 
                  className="h-[22.8px] px-[10.4px] rounded-[100px] flex items-center justify-center w-max mb-[16px]"
                  style={{ backgroundColor: channel.pillBg }}
                >
                  <p 
                    className="font-inter font-bold text-[9px] tracking-[0.4px] uppercase mb-0 whitespace-nowrap"
                    style={{ color: channel.pillText }}
                  >
                    {channel.pill === 'Authenticated · entitlement required' ? 'AUTHENTICATED - ENTITLEMENT REQUIRED' : channel.pill}
                  </p>
                </div>

                {/* Card Title */}
                <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] leading-[24px] mb-[12px]">
                  {channel.title}
                </h3>

                {/* Card Description */}
                <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20px] mb-[20px]">
                  {channel.desc.join(' ')}
                </p>

                {/* Card Link */}
                <p className="font-inter font-semibold text-[#5b8def] text-[13px] leading-[20px] cursor-pointer hover:underline mb-0">
                  {channel.link}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
