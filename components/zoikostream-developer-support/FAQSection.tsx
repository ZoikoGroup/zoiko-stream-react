import React from 'react';

const faqs = [
  { q: 'What is Developer support for?', a: 'Use it for technical integration problems — authentication, API requests, webhooks, playback, monitoring and similar developer-facing issues. It routes you to the right documentation authority or helps you prepare a safe support request.', height: 134.38 },
  { q: 'Do I need to sign in to use Developer support?', a: 'No. Public orientation and technical authority links are accessible without signing in. Sign-in is required only when account-specific context is needed for a channel.', height: 112.78 },
  { q: 'Will you ask me for my API key or password?', a: 'No. ZoikoStream never asks you to paste a password, API key, bearer token, private key or signing secret into a support form.', height: 112.78 },
  { q: 'What if I\'m not sure which topic fits my issue?', a: 'Choose the closest option or "Other developer issue." You can always change your topic without losing what you\'ve already entered.', height: 112.78 },
  { q: 'Does Developer support check for an outage automatically?', a: 'When your symptom class suggests possible service impact, we offer a System Status check. We never assert an outage based on a single report — only from authoritative status data.', height: 112.78 },
  { q: 'What happens after I submit a request?', a: 'You\'ll see a confirmation only after the backend accepts your request, including a reference ID if one is returned. We do not invent response-time promises.', height: 112.78 },
  { q: 'Can this turn into a sales conversation?', a: 'No. Developer support keeps technical cases separate from commercial or billing conversations unless you specifically need that handoff.', height: 112.78 }
];

export default function FAQSection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full justify-center bg-[#f7f9fb] border-b border-[#dde2ea]" style={{ height: '1056.66px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[75px] w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] left-[132px]" />
          <div className="absolute top-[68px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              AEO
            </p>
          </div>

          <div className="absolute top-[108px] left-[132px] h-[33px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              Frequently asked questions.
            </h2>
          </div>

          <div className="absolute top-[175.59px] left-[132px] right-[132px] border-t border-[#dde2ea]">
            {faqs.map((faq, i) => {
              const topOffset = faqs.slice(0, i).reduce((sum, f) => sum + f.height, 0);
              return (
                <div key={i} className="absolute left-0 right-0 border-b border-[#dde2ea] flex flex-col justify-center" style={{ top: `${topOffset}px`, height: `${faq.height}px` }}>
                  <span className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[23.2px]">
                    {faq.q}
                  </span>
                  <span className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[21.6px] mt-2 max-w-[1000px]">
                    {faq.a}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full flex-col justify-start bg-[#f7f9fb] border-b border-[#dde2ea] pt-[45px] pb-[40px] px-[22px]">
        <div className="w-full max-w-[390px] relative z-10 mx-auto">
          {/* Header Block */}
          <div className="flex items-center h-[20px] mb-[13px]">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] m-0">
              AEO
            </p>
          </div>

          <div className="flex flex-col mb-[34px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">Frequently asked</h2>
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">questions.</h2>
          </div>

          {/* FAQ Container using Flex Flow */}
          <div className="w-full border-t border-[#dde2ea] flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="w-full border-b border-[#dde2ea] flex flex-col py-[24px]">
                <span className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] leading-[23.2px] mb-[12px]">
                  {faq.q}
                </span>
                <span className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[21.6px]">
                  {faq.a}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
