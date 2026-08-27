'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const FAQ_COL_1 = [
  {
    q: 'What is Developer access?',
    a: 'The approved platform relationship that authorizes your verified account to consume resources, orchestrate media workflows, and interact securely within a designated ZoikoStream developer workspace.',
  },
  {
    q: 'How is access different from authentication?',
    a: 'Access establishes workspace context, roles, and allowed parameters. Authentication verifies your identity credentials through active SSO tokens or API certificates during execution requests.',
  },
  {
    q: 'Can I start without approval?',
    a: 'Depends entirely on active tenant workspace settings. If self-service registration is allowed for your organization domain, your credentials can be generated instantly without manual staging reviews.',
  },
  {
    q: 'What happens if my access is revoked?',
    a: 'Associated client configurations, security profiles, and programmatic keys are invalidated. Standard fallback workflows guide operators safely back into recovery workflows.',
  },
];

const FAQ_COL_2 = [
  {
    q: 'Do I need a paid plan for developer access?',
    a: 'Access requirements are tied directly to tenant policies. Creating or verifying basic sandboxes for development requires no pre-paid commitment.',
  },
  {
    q: 'How do I expand my capabilities?',
    a: 'Consult the Capability Matrix. Select target capabilities and submit direct modification requests. We automate verification when organizational criteria are matched.',
  },
  {
    q: 'Where do I find my API keys?',
    a: 'API keys are generated and securely stored in your workspace\'s active Authentication console, kept separate from this access definition view.',
  },
  {
    q: 'Who do I contact for access problems?',
    a: 'Reach our technical help desk directly through verified support channels. Escalations bypass typical commercial funnels for accelerated resolutions.',
  },
];

function FaqAccordionItem({ 
  q, 
  a, 
  isOpen, 
  onToggle 
}: { 
  q: string; 
  a: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="flex w-full flex-col rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e] p-[20px] overflow-hidden">
      <div 
        className="flex w-full cursor-pointer items-center justify-between group"
        onClick={onToggle}
      >
        <p className="text-[16px] font-bold leading-normal text-white">
          {q}
        </p>
        <div className={`relative size-[16px] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <Image
            src="/images/developer-access-page/faq/chevron-down.svg"
            alt="Toggle"
            fill
          />
        </div>
      </div>
      <div 
        className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4] pt-[12px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_COL_1[0].q);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/faq/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.88)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-tight text-white md:text-[38px] md:leading-[48px]">
            Frequently asked questions
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Key details concerning the ZoikoStream developer access model, verification parameters, and integration pathways.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[24px] lg:flex-row">
          <div className="flex flex-1 flex-col items-start gap-[16px]">
            {FAQ_COL_1.map((item) => (
              <FaqAccordionItem 
                key={item.q} 
                q={item.q} 
                a={item.a} 
                isOpen={openId === item.q} 
                onToggle={() => handleToggle(item.q)} 
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col items-start gap-[16px]">
            {FAQ_COL_2.map((item) => (
              <FaqAccordionItem 
                key={item.q} 
                q={item.q} 
                a={item.a} 
                isOpen={openId === item.q} 
                onToggle={() => handleToggle(item.q)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
