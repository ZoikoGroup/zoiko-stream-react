import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/final-cta-background.webp";

export default function FinalCtaSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Final-CTA-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.45] contrast-[1.05]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.2)] inset-0" />
      </div>

      <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[860px] relative z-10">
        <h2 className="[word-break:break-word] font-sans font-bold text-[#f1f5f9] text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.25] lg:leading-[60px] w-full">
          Ready to integrate with ZoikoStream events?
        </h2>
        <p className="font-sans font-normal text-[#94a3b8] text-[15px] sm:text-[17px] leading-[28px] w-full">
          Start with the event catalog, verify your endpoint configuration, then proceed to implementation when your
          access state permits.
        </p>

        <div className="flex flex-wrap gap-[16px] items-center justify-center">
          <Link
            href="#event-catalog"
            className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-start px-[24px] py-[14px] rounded-[10px] transition-opacity hover:opacity-90"
          >
            <span className="font-sans font-bold text-[#0a0d13] text-[16px]">Explore events</span>
          </Link>
          <Link
            href="#verification"
            className="border-[1.5px] border-[#94a3b8] border-solid flex items-start px-[28px] py-[14px] rounded-[10px] transition-colors hover:border-[#f1f5f9]"
          >
            <span className="font-sans font-medium text-[#f1f5f9] text-[16px]">Review endpoint verification</span>
          </Link>
        </div>

        <p className="font-sans font-normal text-[#64748b] text-[12px] leading-[20px] w-full max-w-[720px]">
          Webhook documentation is public. Access and environment availability require current Developer Access
          authorization.
        </p>
      </div>
    </section>
  );
}
