import React from 'react';

const imgBg = "/images/webhooks/security-background.webp";

const controls = [
  {
    label: 'RESTRICTED',
    title: 'Secret Safety',
    description: 'Never in URL, screenshot, code repo, analytics, browser telemetry, or support ticket.',
  },
  {
    label: 'DATA POLICY',
    title: 'Payload Privacy',
    description: 'Treat per current data classification. Do not assume no personal/sensitive data.',
  },
  {
    label: 'REDACTED',
    title: 'Diagnostic Logs',
    description: 'Redact secrets and signatures. Minimize payload logging to trusted environments only.',
  },
  {
    label: 'SAFE IDs',
    title: 'Support Data',
    description: 'Use safe identifiers and redacted metadata. Strict zero secret collection rules.',
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Security-Privacy-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.22)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Security, privacy, and data minimization
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Secrets never appear in public examples, analytics, or support logs. Payloads are classified per current
            data policy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {controls.map((control) => (
            <div
              key={control.title}
              className="bg-[rgba(24,27,33,0.6)] border border-[#1e2530] border-solid flex flex-col gap-[10px] items-start p-[24px] rounded-[12px]"
            >
              <span className="font-mono font-bold text-[#00d4aa] text-[10px] tracking-[0.5px]">{control.label}</span>
              <p className="font-sans font-bold text-[#f1f5f9] text-[17px]">{control.title}</p>
              <p className="font-sans font-normal text-[#94a3b8] text-[13px] leading-[20px] w-full">{control.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
