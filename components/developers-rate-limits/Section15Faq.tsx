'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Section15Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What status code does ZoikoStream return when limit is crossed?",
      a: "We return an HTTP 429 Too Many Requests status code, accompanied by Retry-After header fields indicating the recovery delay in milliseconds."
    },
    {
      q: "Are rate limits shared globally or allocated per-region?",
      a: "Rate limits are isolated within their target deploy regions to prevent split-brain key-value network lag from degrading edge API execution times."
    },
    {
      q: "Can I adjust individual client rate-limit caps programmatically?",
      a: "Yes, you can modify dynamic token values instantly using the custom API configuration SDK endpoints or admin portal console."
    },
    {
      q: "How long does it take for rate-limit updates to propagate to edge CDN networks?",
      a: "Updates are pushed across all global points-of-presence in under 350ms using decentralized high-speed cache sync mechanisms."
    },
    {
      q: "Do unsuccessful queries consume allocation budgets?",
      a: "Only valid authenticated traffic counts towards allocation caps. Rejected or invalid API key queries are discarded at the edge for free."
    },
    {
      q: "Does ZoikoStream offer a SLA guarantee on edge-gateway uptime under heavy load?",
      a: "We guarantee a 99.999% uptime SLA tier for enterprise clusters, backed by multi-region redundancy failover setups."
    },
    {
      q: "What cache backing-stores does the platform use under the hood?",
      a: "We employ highly clustered ultra-low-latency Redis key-value memory blocks paired with high-performance Rust parsing proxies."
    },
    {
      q: "How are system bursts defined versus sustained traffic averages?",
      a: "Bursts are defined as traffic speeds exceeding peak capacity limits for less than 1500ms before returning to nominal baseline rates."
    }
  ];

  const nextSteps = [
    {
      title: "Getting Started Guide",
      desc: "Initialize your workspace client SDK integration setup within less than 5 minutes.",
      img: "/images/developers-rate-limits/sec15-rect0.png"
    },
    {
      title: "SDK Code Examples",
      desc: "Explore real-world implementation samples for Node, Python, Go, and Java systems.",
      img: "/images/developers-rate-limits/sec15-rect1.png"
    },
    {
      title: "Architecture Patterns",
      desc: "Deep-dive into multi-region high-concurrency systems engineered for scale.",
      img: "/images/developers-rate-limits/sec15-rect2.png"
    },
    {
      title: "Load Testing Tools",
      desc: "Simulate burst traffic query spikes against your system endpoints using our CLI runner.",
      img: "/images/developers-rate-limits/sec15-rect3.png"
    },
    {
      title: "SLA and Security",
      desc: "Review platform compliance details, SOC2 reporting standards, and encryption tiers.",
      img: "/images/developers-rate-limits/sec15-rect4.png"
    },
    {
      title: "Manage API Keys",
      desc: "Create, rotate, and deprecate developer authorization tokens from your portal dashboard.",
      img: "/images/developers-rate-limits/sec15-rect5.png"
    },
    {
      title: "Developer Forum",
      desc: "Ask technical integration setup questions directly to engineering team representatives.",
      img: "/images/developers-rate-limits/sec15-rect6.png"
    },
    {
      title: "Contact Support",
      desc: "Get in touch with enterprise solutions support for custom rate capacity limits requests.",
      img: "/images/developers-rate-limits/sec15-rect7.png"
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="flex flex-col gap-[80px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-[#04141a] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec15-bg.png" />
        <div className="absolute bg-[rgba(4,20,26,0.8)] inset-0" />
      </div>

      <div className="flex flex-col gap-[48px] items-start relative z-10 w-full">
        <div className="flex flex-col items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#f8fafc] tracking-[-0.8px] w-full">
            Common questions, authoritative answers
          </h2>
        </div>

        <div className="flex flex-col gap-[16px] items-start relative w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-col items-start relative rounded-[8px] w-full cursor-pointer transition-colors hover:bg-[rgba(16,30,36,0.8)] overflow-hidden"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between p-[24px] w-full relative">
                  <h3 className="flex-[1_0_0] font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#f8fafc] text-[18px]">
                    {faq.q}
                  </h3>
                  <div className={`relative shrink-0 w-[16px] h-[16px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <img alt="Toggle" className="absolute block inset-0 max-w-none w-full h-full" src="/images/developers-rate-limits/sec15-chevron.svg" />
                  </div>
                </div>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#94a3b8] text-[14px] w-full px-[24px] pb-[24px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-[40px] items-start relative z-10 w-full mt-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#f8fafc] text-[28px] whitespace-nowrap">
          Next Steps
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] relative w-full">
          {nextSteps.map((card, idx) => (
            <div key={idx} className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-[0_0_20px_rgba(52,212,202,0.15)] transition-shadow duration-300">
              <div className="h-[160px] relative w-full shrink-0">
                <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
                <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#f8fafc] text-[20px]">
                  {card.title}
                </h4>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#94a3b8] text-[14px] w-full">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
