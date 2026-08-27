import Image from 'next/image';
import React from 'react';

const SUPPORT_ITEMS = [
  {
    icon: 'icon-0.png',
    title: 'Documentation',
    desc: 'Comprehensive structural guides. Accessible without registration walls.',
  },
  {
    icon: 'icon-1.png',
    title: 'API Reference',
    desc: 'Direct verification for all active endpoints, query structures, and response schemas.',
  },
  {
    icon: 'icon-2.png',
    title: 'Authentication',
    desc: 'Diagnose active credential profiles or authorization failures quickly.',
  },
  {
    icon: 'icon-3.png',
    title: 'System Status',
    desc: 'Real-time verified status updates for core media pipelines and nodes.',
  },
  {
    icon: 'icon-4.png',
    title: 'Developer Support',
    desc: 'Dedicated help desk access. Direct chat channel with platform engineering.',
  },
  {
    icon: 'icon-5.png',
    title: 'Accessibility',
    desc: 'Accessibility assistance and verified tools configuration support.',
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/support/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-177px] top-[-127px] size-[420px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-289px] right-[-136px] size-[520px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] tracking-tight text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Existing developer continuity and support
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            A developer should not need to re-enter a promotional marketing loop just to troubleshoot credentials.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex w-full items-center gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[20px]"
            >
              <div className="relative size-[72px] shrink-0 rounded-[8px]">
                <Image
                  src={`/images/developer-access-page/support/${item.icon}`}
                  alt=""
                  fill
                  className="rounded-[8px] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[6px]">
                <h3 className="w-full text-[16px] font-bold leading-normal text-[#0f1b2d]">
                  {item.title}
                </h3>
                <p className="w-full font-inter text-[13px] font-normal leading-[18px] text-[#4f5e74]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
