import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/event-contract-background.webp";

const specs = [
  { label: 'Event Name', value: 'stream.status.changed', mono: true },
  { label: 'Version', value: '2.1', mono: true },
  { label: 'Lifecycle', value: 'Current', mono: true, highlight: true },
  { label: 'Trigger', value: 'Stream state transitions', mono: false },
  { label: 'Envelope Schema', value: 'v3.0', mono: true },
  { label: 'Delivery Profile', value: 'standard-retry-v2', mono: true },
];

export default function EventContractSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Event-Contract-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.25)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Event contract and delivery semantics
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Each event binds name, version, trigger, envelope, payload, delivery profile, and verification profile into
            a single compatibility record.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center w-full">
          <div className="bg-[rgba(24,27,33,0.8)] border border-[#1e2530] border-solid flex flex-col gap-[20px] items-start p-[28px] rounded-[16px] w-full lg:w-[600px]">
            <p className="font-sans font-bold text-[#f1f5f9] text-[18px]">stream.status.changed Contract Specs</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-[rgba(2,6,23,0.5)] flex flex-wrap gap-2 justify-between items-start p-[12px] rounded-[8px] w-full"
                >
                  <span className="font-sans font-bold text-[#94a3b8] text-[12px]">{spec.label}</span>
                  <span
                    className={`${spec.mono ? "font-mono" : "font-sans"} font-normal text-[12px] break-all min-w-0 ${
                      spec.highlight ? 'text-[#00d4aa]' : 'text-[#f1f5f9]'
                    }`}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-start flex-1 w-full">
            <h3 className="font-sans font-bold text-[#f1f5f9] text-[20px] sm:text-[24px] w-full">Contract before code</h3>
            <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[16px] leading-[24px] w-full">
              We treat webhooks as deterministic contracts. No unexpected key additions or removals are permitted
              outside strict semantic versioning handshakes. Both developers and delivery engines rely on immutable
              schema registry records to preserve pipeline stability.
            </p>
            <Link
              href="/developer-api-reference"
              className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
            >
              <span className="font-sans font-bold text-[#0a0d13] text-[16px]">Download event schemas</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
