import React from 'react';

const imgBg = "/images/webhooks/errors-background.webp";

const failures = [
  { title: 'No Events Received', description: 'Check subscription, event catalog, diagnostics, and system status' },
  { title: 'Verification Failed', description: 'Use exact verification profile. Rotate/recreate only per source' },
  { title: 'Repeated Deliveries', description: 'Check delivery history and idempotent consumer behavior' },
  { title: 'Events Late/Out of Order', description: 'Use event/resource version and reconciliation when documented' },
  { title: 'High Retry Volume', description: 'Inspect diagnostics, status, and endpoint acknowledgement behavior' },
  { title: 'Unknown Outcome', description: 'Verify delivery log and resource state before unsafe action' },
];

export default function ErrorTaxonomySection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Error-Taxonomy-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.25)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Error taxonomy and troubleshooting
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Structured failure classes with safe diagnostic steps — never guessing root cause.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {failures.map((failure) => (
            <div
              key={failure.title}
              className="bg-[rgba(24,27,33,0.8)] border border-[#1e2530] border-solid flex flex-col gap-[12px] items-start p-[24px] rounded-[12px]"
            >
              <p className="font-sans font-bold text-[#f1f5f9] text-[16px]">{failure.title}</p>
              <p className="font-sans font-normal text-[#94a3b8] text-[13px] leading-[20px] w-full">{failure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
