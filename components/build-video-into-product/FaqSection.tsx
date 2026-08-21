'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'Can I build live and on-demand video into my product with ZoikoStream?',
    answer: 'Yes, ZoikoStream provides programmable APIs, SDKs and media protocols for live, real-time and on-demand product video. Our platform abstraction maps directly to normal programming schemas.',
  },
  {
    question: 'Do I need to build the underlying media infrastructure myself?',
    answer: 'No. The product team keeps its application experience while ZoikoStream handles the media-infrastructure layer, including adaptive encoding, multi-CDN caching, secure token verification, and failover telemetry.',
  },
  {
    question: 'How do I control who can watch video?',
    answer: 'Design entitlement in your product and integrate the approved ZoikoStream access mechanisms. You authorize end-user sessions with temporary client keys that verify user identity and location at the edge.',
  },
  {
    question: 'What happens after a live stream ends?',
    answer: 'Recording and replay workflows can continue where configured; readiness and access are governed states. Live streams transition automatically to durable storage, making replay streams accessible according to your rules.',
  },
  {
    question: 'How should I plan for failures?',
    answer: 'Test authentication, network, media, webhook, access and unknown-result states with retries and idempotency. Our testing sandbox simulates exact player exceptions and network degradation parameters to ensure resilience.',
  },
  {
    question: 'How do I get started?',
    answer: 'Use the current developer access path and documentation. You can generate sandbox API keys instantly. For custom integration, migration, or enterprise compliance needs, connect with our solutions team.',
  },
];

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(faqItems.length).fill(true));

  const toggleItem = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#1f2a3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/faq-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(3,19,43,0.52)] -z-10 pointer-events-none" />

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#f8fafc] text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Frequently asked questions
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#cbd5e1] text-[18px] leading-[28.8px] w-full">
          Granular technical answers for developers, architects, and product leads.
        </p>
      </div>

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        {faqItems.map((item, index) => {
          const isOpen = openItems[index];
          return (
            <div
              key={item.question}
              className="bg-[#0b1220] border border-[#1f2a3a] border-solid flex flex-col gap-[12px] items-start p-[24px] rounded-[12px] w-full cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center justify-between w-full gap-[16px]">
                <p className="flex-1 font-spaceGrotesk font-bold text-[#f8fafc] text-[16px] min-w-0">
                  {item.question}
                </p>
                <div className="border-[#334155] border-[1.5px] border-solid flex flex-col items-center justify-center rounded-[14px] shrink-0 size-[28px]">
                  <ChevronDown
                    className={`size-[14px] text-[#cbd5e1] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2}
                  />
                </div>
              </div>
              {isOpen && (
                <p className="font-spaceGrotesk font-normal text-[#cbd5e1] text-[14px] leading-[22px] w-full">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
