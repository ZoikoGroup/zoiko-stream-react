import React from 'react';
import Image from 'next/image';

const policyItems = [
  {
    title: 'Audience definition',
    desc: 'Whitelisted directories and organizational tenants.'
  },
  {
    title: 'Eligibility/authorization',
    desc: 'Real-time entitlement lookup against active IDPs.'
  },
  {
    title: 'Invite state',
    desc: 'Track invitation parameters, access window times.'
  }
];

const deliveryItems = [
  {
    title: 'Guest handling',
    desc: 'Sandboxed public access loops without inner metadata access.'
  },
  {
    title: 'Exceptions',
    desc: 'One-time token override systems for explicit stakeholders.'
  },
  {
    title: 'Revocation',
    desc: 'Kill-switch access invalidation propagating in real-time.'
  }
];

export default function AudienceAccessSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden border-b border-[#e2e8f0] border-solid">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/audience-bg.png" 
          alt="Audience Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Separate policy from delivery capability
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Audience governance defines who is authorized. Access control and secure playback handle the technical delivery pathway.
        </p>
      </div>

      {/* Split View */}
      <div className="relative z-10 flex flex-col md:flex-row gap-[48px] items-start md:items-center w-full">
        {/* Left Column (Policy) */}
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
          <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[20px]">
            Audience Governance (Policy)
          </h3>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {policyItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-[4px] items-start w-full">
                <h4 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px]">
                  {item.title}
                </h4>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Split Line */}
        <div className="hidden md:block w-px h-[280px] bg-[#e2e8f0] shrink-0" />

        {/* Horizontal Split Line for mobile */}
        <div className="block md:hidden w-full h-px bg-[#e2e8f0] shrink-0 my-4" />

        {/* Right Column (Delivery) */}
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
          <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[20px]">
            Secure Playback (Delivery)
          </h3>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {deliveryItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-[4px] items-start w-full">
                <h4 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[16px]">
                  {item.title}
                </h4>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
