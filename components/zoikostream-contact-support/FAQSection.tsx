import React from 'react';

const faqs = [
  {
    q: 'What is Contact support for?',
    a: 'Use it for general product, account, billing or other help. Developer/API issues, enterprise accounts, and Live Events each have their own dedicated support routes that Contact support can direct you to.'
  },
  {
    q: 'Do I need to sign in to contact support?',
    a: 'No. You can start a general request without signing in. Account-specific issues may require sign-in so we can safely confirm your account context.'
  },
  {
    q: 'Will you ask me for my password or API key?',
    a: 'No. ZoikoStream never asks you to share a password, API key, access token or private key through a support form.'
  },
  {
    q: "How do I check if there's a known outage?",
    a: "Use System Status. If your symptom suggests a possible service issue, we'll show a status check before you submit a request — but we never assume an outage from a single report."
  },
  {
    q: 'What happens after I submit a request?',
    a: "You'll see a confirmation only once your request is accepted, including a reference number if one is provided. We do not promise specific response times unless one is published for your channel."
  },
  {
    q: 'Can this turn into a sales conversation?',
    a: 'No. Contact support keeps your issue separate from sales unless you specifically choose the pricing or sales route.'
  }
];

export default function FAQSection() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:flex relative w-full justify-center bg-[#f7f9fb] border-b border-[#dde2ea] pb-[88px]" style={{ minHeight: '1075.05px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[83px] w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] left-[132px]" />
          
          <div className="absolute top-[76px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] mb-0">
              AEO
            </p>
          </div>

          <div className="absolute top-[112px] left-[132px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[28px] tracking-[-0.28px] leading-[44.8px] mb-0">
              Frequently asked questions.
            </h2>
          </div>

          <div className="relative mt-[190.8px] left-[132px] right-[132px] w-[1176px] border-t border-[#dde2ea] flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="w-full border-b border-[#dde2ea] py-[34px] flex flex-col justify-center">
                <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] leading-[25.6px] mb-[16px]">
                  {faq.q}
                </h3>
                <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] mb-0">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="flex md:hidden relative w-full flex-col bg-[#f7f9fb] border-b border-[#dde2ea] px-[20px] py-[60px]">
        {/* Dot & Label */}
        <div className="flex items-center">
          <div className="w-[6px] h-[6px] rounded-[3px] bg-[#5b8def] mr-[8px]" />
          <p className="font-inter font-bold text-[#5b8def] text-[11px] tracking-[1.1px] uppercase leading-[20px] mb-0">
            AEO
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[34px] mt-[16px] mb-[30px] max-w-[250px]">
          Frequently asked questions.
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col w-full border-t border-[#dde2ea]">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full flex flex-col border-b border-[#dde2ea] py-[24px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[14px] tracking-[-0.14px] leading-[22px] mb-[12px]">
                {faq.q}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[22px] mb-0 pr-[10px]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
