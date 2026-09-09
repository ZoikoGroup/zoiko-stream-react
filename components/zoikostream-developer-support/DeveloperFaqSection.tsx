import React from 'react';

const faqs = [
  {
    q: 'What is Developer support for?',
    a: 'Use it for technical integration problems — authentication, API requests, webhooks, playback, monitoring and similar developer-facing issues. It routes you to the right documentation authority or helps you prepare a safe support request.'
  },
  {
    q: 'Do I need to sign in to use Developer support?',
    a: 'No. Public orientation and technical authority links are accessible without signing in. Sign-in is required only when account-specific context is needed for a channel.'
  },
  {
    q: 'Will you ask me for my API key or password?',
    a: 'No. ZoikoStream never asks you to paste a password, API key, bearer token, private key or signing secret into a support form.'
  },
  {
    q: "What if I'm not sure which topic fits my issue?",
    a: 'Choose the closest option or "Other developer issue." You can always change your topic without losing what you\'ve already entered.'
  },
  {
    q: 'Does Developer support check for an outage automatically?',
    a: 'When your symptom class suggests possible service impact, we offer a System Status check. We never assert an outage based on a single report — only from authoritative status data.'
  },
  {
    q: 'What happens after I submit a request?',
    a: "You'll see a confirmation only after the backend accepts your request, including a reference ID if one is returned. We do not invent response-time promises."
  },
  {
    q: 'Can this turn into a sales conversation?',
    a: 'No. Developer support keeps technical cases separate from commercial or billing conversations unless you specifically need that handoff.'
  }
];

export default function DeveloperFaqSection() {
  return (
    <section className="relative w-full bg-[#f7f9fb] border-b border-[#dde2ea] flex justify-center py-[75px]" style={{ minHeight: '1056px' }}>
      <div className="w-full max-w-[1440px] px-[132px] flex flex-col items-start relative z-10">
        <div className="bg-[#3fc9bd] rounded-[3px] w-full max-w-[40px] h-[6px] mb-[24px]" />
        
        <p className="font-inter font-bold text-[#3fc9bd] uppercase tracking-[1.25px] text-[12.5px] mb-[12px]">
          FAQ
        </p>
        
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] mb-[40px]">
          Frequently asked questions.
        </h2>
        
        <div className="w-full border-t border-[#dde2ea] flex flex-col">
          {faqs.map((f, i) => (
            <div key={i} className="w-full border-b border-[#dde2ea] py-[31px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[14.5px] tracking-[-0.145px] mb-[12px]">
                {f.q}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[21.6px] max-w-[1000px]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
