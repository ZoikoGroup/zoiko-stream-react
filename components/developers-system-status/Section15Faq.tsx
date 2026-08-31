"use client";
import React, { useState } from 'react';

export default function Section15Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What does ZoikoStream System status show?",
      a: "This page monitors core regional infrastructure operational capacity across ingest pipelines, edge delivery CDNs, APIs, and transcoding clusters."
    },
    {
      q: "Does a healthy status mean my stream is healthy?",
      a: "Not necessarily. A healthy status indicates general platform health. Stream-specific issues can occur due to local encoder parameters, network drops, or stream key mismatch."
    },
    {
      q: "How current is the status page?",
      a: "Platform summary metrics are pulled directly from telemetry logs and updated automatically every 60 seconds."
    },
    {
      q: "Where do I see active incidents?",
      a: "Active platform degradation timelines are published immediately under the 'Active Incidents' segment above."
    },
    {
      q: "Where do I see planned maintenance?",
      a: "Upcoming maintenance windows are listed transparently under the 'Scheduled Maintenance' directory."
    },
    {
      q: "Does ZoikoStream publish uptime percentages?",
      a: "We display real-time SLA metrics internally. Historical uptimes are available for Enterprise agreement review."
    },
    {
      q: "Can I subscribe to updates?",
      a: "Yes. You can subscribe to push notifications, SMS alerts, email reports, or raw RSS feeds via the 'Stay Informed' section."
    },
    {
      q: "Is there a status API or feed?",
      a: "Yes. Our Status API exposes JSON REST outputs at /v1/status for native orchestration."
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-30" src="/images/developers-system-status/sec15-bg.png" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.7)]" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Frequently asked questions.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Prompt answers to operational inquiries about platform metrics, diagnostic reports, and failover integration schemas.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#111622] border border-[#232b3a] border-solid flex flex-col items-start p-[24px] relative rounded-[12px] w-full cursor-pointer hover:border-[#34d4ca]/50 transition-colors duration-300"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between relative w-full">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[16px] text-white">
                    {faq.q}
                  </h3>
                  <div className="border border-[#232b3a] border-solid flex items-center justify-center relative rounded-[14px] w-[28px] h-[28px] shrink-0 bg-[#0a0d14]">
                    {isOpen ? (
                      <div className="w-[12px] h-[1.5px] bg-[#34d4ca]" />
                    ) : (
                      <div className="relative w-[12px] h-[12px]">
                        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#34d4ca] -translate-y-1/2" />
                        <div className="absolute left-1/2 top-0 h-full w-[1.5px] bg-[#34d4ca] -translate-x-1/2" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-[12px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#aab3c4] text-[14px] w-full">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-[#232b3a] border-solid flex flex-col gap-[32px] items-center p-[32px] md:p-[48px] relative rounded-[16px] w-full overflow-hidden text-center mt-8">
          <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
            <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-40" src="/images/developers-system-status/faq-cta-bg.png" />
          </div>
          
          <div className="flex flex-col gap-[12px] items-center relative z-10 w-full">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] relative text-[24px] md:text-[28px] text-white">
              Still experiencing stream degradation?
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] not-italic relative text-[#aab3c4] text-[16px] w-full max-w-[700px]">
              Our diagnostics portal can analyze your active stream parameters automatically. If issues persist, raise a direct ticket with our reliability engineering desk.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center relative z-10 w-full">
            <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0a0f1a] text-[15px] whitespace-nowrap">
                Run stream diagnostics
              </span>
            </button>
            <button className="border-[1.5px] border-[#aab3c4] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:bg-white/5 transition-colors w-full sm:w-auto">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[15px] whitespace-nowrap">
                Contact Support
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
