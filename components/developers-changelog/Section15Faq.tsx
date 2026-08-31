'use client';
import React, { useState } from 'react';

export default function Section15Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the ZoikoStream changelog?",
      a: "The official immutable log of record for all changes, deprecations, corrections, and updates to the ZoikoStream developer ecosystem."
    },
    {
      q: "Does every change require action?",
      a: "No. Only changes tagged as 'Backward Breaking (v1)' or 'Action Required' demand manual intervention before scheduled deprecation sunsets."
    },
    {
      q: "Where do outages appear?",
      a: "Outage post-mortems and verified system incidents are indexed directly inside the system status registry (status.zoikostream.com)."
    },
    {
      q: "How are breaking changes shown?",
      a: "All breaking changes carry high-visibility RED tags with mandatory payload diff guides and explicit deprecation countdown metrics."
    },
    {
      q: "How are corrections handled?",
      a: "Corrections are appended as immutable secondary logs linking back to original release entries. History is never rewritten."
    },
    {
      q: "Can I subscribe to changes?",
      a: "Yes. Developers can subscribe via authenticated email, programmatic webhooks, Slack alerts, or standard anonymous RSS feeds."
    },
    {
      q: "How are deprecations handled?",
      a: "Deprecated elements enter a mandatory migration period with active console warnings before reaching absolute sunset."
    }
  ];

  const routes = [
    { title: "API Reference", desc: "Endpoint parameters, contracts, payload structures.", link: "API Docs →" },
    { title: "SDK Downloads", desc: "Download and configure native language client wrappers.", link: "Configure SDKs →" },
    { title: "Webhooks & Events", desc: "Integrate programmatic live notifications.", link: "Setup Webhooks →" },
    { title: "Error Reference", desc: "Detailed failure codes, recovery recommendations.", link: "Browse Errors →" },
    { title: "Rate Limits", desc: "Scale parameters, concurrency quotas.", link: "View Limits →" },
    { title: "System Status", desc: "Real-time service updates, historic uptime.", link: "Check Status →" },
    { title: "Player Integration", desc: "Embed and configure custom WebGL players.", link: "Player Demos →" },
    { title: "Enterprise Support", desc: "Custom SLAs, dedicated migration guides.", link: "Contact Sales →" }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec15-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.94)] inset-0" />
      </div>

      <div className="flex flex-col gap-[64px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Common questions. Clear answers.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Deterministic answers mapping operational capabilities directly to stable production systems.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] items-start relative w-full">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] w-full"
            >
              <div className="flex items-center justify-between relative w-full gap-4">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[16px] text-white">
                  {faq.q}
                </h3>
                <div className="border border-[#232b3a] border-solid flex items-center justify-center relative rounded-[14px] shrink-0 w-[24px] h-[24px] bg-[#0a0d14]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 0V8H4.5V0H3.5Z" fill="#34d4ca"/>
                    <path d="M0 3.5H8V4.5H0V3.5Z" fill="#34d4ca"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-full">
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] not-italic relative text-[#aab3c4] text-[14px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[24px] items-start relative w-full">
          <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[14px] text-white tracking-[0.5px] uppercase">
            EXPLORE DOCUMENTATION & WORKSPACE ACTIONS
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] relative w-full">
            {routes.map((route, idx) => (
              <div key={idx} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start justify-between p-[24px] relative rounded-[12px] w-full min-h-[160px] hover:border-[#34d4ca] transition-colors duration-300 group">
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[18px] text-white group-hover:text-[#34d4ca] transition-colors">
                    {route.title}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] w-full not-italic relative text-[#aab3c4] text-[13px]">
                    {route.desc}
                  </p>
                </div>
                <a href={`#${route.title.toLowerCase().replace(/\s+/g, '-')}`} className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#4a8cfb] text-[13px] hover:underline underline-offset-2 mt-2">
                  {route.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
