import React from 'react';

const imgBg = "/images/webhooks/verification-background.webp";

const items = [
  {
    title: 'Verification Method',
    description: 'Conforms strictly to the active verification profile. No generic HMAC assumptions.',
    icon: (
      <path d="M2.5 7.5l3.2 3.2L11.5 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Header & Fields',
    description: 'Uses exact contract-defined header keys and timestamp parameters. No invented signatures.',
    icon: <circle cx="7" cy="7" r="4.5" strokeWidth="2" />,
  },
  {
    title: 'Secret Handling',
    description: 'Signing secrets are treated as sensitive data. Never revealed in logs or cleartext documentation.',
    icon: (
      <>
        <rect x="2.5" y="6" width="9" height="6.5" rx="1" strokeWidth="1.8" />
        <path d="M4.75 6V4.25a2.25 2.25 0 014.5 0V6" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Rotation Model',
    description: 'Provides graceful overlapping rotation windows allowing zero transmission dropouts.',
    icon: (
      <>
        <path d="M2.5 7a4.5 4.5 0 017.7-3.2L12 5.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 7a4.5 4.5 0 01-7.7 3.2L2 8.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function VerificationSection() {
  return (
    <section
      id="verification"
      className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden"
      data-name="Verification-Section"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.28)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Verification, signing, and secret lifecycle
          </h2>
          <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            A webhook payload is not trusted merely because it reached the endpoint. Verification must use the exact
            current profile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[rgba(24,27,33,0.8)] border border-[#1e2530] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[16px]"
            >
              <div className="bg-[rgba(76,134,255,0.1)] flex items-center justify-center rounded-[8px] size-[28px]">
                <svg viewBox="0 0 14 14" fill="none" stroke="#4c86ff" className="size-[14px]" aria-hidden>
                  {item.icon}
                </svg>
              </div>
              <p className="font-sans font-bold text-[#f1f5f9] text-[16px]">{item.title}</p>
              <p className="font-sans font-normal text-[#94a3b8] text-[12px] leading-[20px] w-full">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
