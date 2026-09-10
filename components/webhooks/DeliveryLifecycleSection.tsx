import React from 'react';

const imgBg = "/images/webhooks/lifecycle-background.webp";

const states = [
  { title: 'Generated', badge: 'ORIGED', tone: 'blue', description: 'Event exists within primary source server scope.' },
  { title: 'Attempting', badge: 'POSTING', tone: 'blue', description: 'Delivery connection is established over transport.' },
  { title: 'Transport Received', badge: 'TRANSPORTED', tone: 'green', description: 'Webhook payload has reached target endpoint buffer.' },
  { title: 'Acknowledged', badge: 'RESOLVED', tone: 'green', description: 'Target endpoint returned valid contract signature status.' },
  { title: 'Retry Pending', badge: 'REQUEUED', tone: 'amber', description: 'Attempt scheduled per active retry backoff algorithm.' },
  { title: 'Failed / Exhausted', badge: 'EXHAUSTED', tone: 'red', description: 'Dead-letter state reached after final retry bounds expire.' },
  { title: 'Delayed', badge: 'LATE', tone: 'amber', description: 'Delivery exceeds target latency boundaries.' },
  { title: 'Unknown', badge: 'UNCHECKED', tone: 'slate', description: 'Outcome cannot be established. Use API read check fallback.' },
];

const toneClasses: Record<string, string> = {
  blue: 'bg-[#dbeafe] text-[#1e40af]',
  green: 'bg-[#d1fae5] text-[#065f46]',
  amber: 'bg-[#fef3c7] text-[#92400e]',
  red: 'bg-[#fee2e2] text-[#991b1b]',
  slate: 'bg-[#e2e8f0] text-[#4f5e74]',
};

export default function DeliveryLifecycleSection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Delivery-Lifecycle-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Delivery lifecycle model
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Transport receipt, signature verification, payload parsing, business processing, and final reconciliation
            are separate states.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
          {states.map((state) => (
            <div
              key={state.title}
              className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[12px] items-start p-[20px] rounded-[12px]"
            >
              <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                <p className="font-sans font-bold text-[#0a0d13] text-[16px] min-w-0 break-words">{state.title}</p>
                <div className={`${toneClasses[state.tone]} flex items-start px-[8px] py-[2px] rounded-[2px] shrink-0`}>
                  <span className="font-mono font-bold text-[10px]">{state.badge}</span>
                </div>
              </div>
              <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px] w-full">{state.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#e2e8f0] border-solid flex items-start p-[16px] rounded-[8px] w-full">
          <p className="font-sans font-normal text-[#4f5e74] text-[12px]">
            *Acknowledged state only confirms transport reception. Application logical success requires downstream
            process queue checks.
          </p>
        </div>
      </div>
    </section>
  );
}
