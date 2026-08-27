import Image from 'next/image';
import React from 'react';

const STEPS = [
  {
    num: '01',
    img: 'step-0.png',
    title: 'Access Context',
    desc: 'Verified active developer access context mapped directly for the target workspace.',
    hasArrow: true,
  },
  {
    num: '02',
    img: 'step-1.png',
    title: 'Authentication',
    desc: 'Secure credential authorization and key issuance triggered via approved pathways.',
    hasArrow: true,
  },
  {
    num: '03',
    img: 'step-2.png',
    title: 'Quickstart / Build',
    desc: 'Deploy your first real-time media stream or initialize production integrations.',
    hasArrow: false,
  },
];

export default function HandoffSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/handoff/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-177px] top-[-172px] size-[420px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-221px] right-[-123px] size-[520px]">
        <Image src="/images/developer-access-page/review-process/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] tracking-tight text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            From access to authentication to quickstart
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Three checkpoints between verified access and your first working live stream.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[16px] lg:flex-row">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="flex w-full flex-1 flex-col items-start overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc]">
                <div className="relative h-[160px] w-full shrink-0">
                  <Image
                    src={`/images/developer-access-page/handoff/${step.img}`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                  <div className="flex items-center gap-[8px] whitespace-nowrap">
                    <p className="text-[14px] font-bold text-[#33d9c7]">{step.num}</p>
                    <p className="text-[18px] font-bold text-[#0f1b2d]">{step.title}</p>
                  </div>
                  <p className="font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {step.hasArrow && (
                <div className="flex hidden h-full w-[48px] shrink-0 items-center justify-center lg:flex">
                  <div className="relative size-[24px]">
                    <Image
                      src="/images/developer-access-page/handoff/arrow-right.svg"
                      alt="Arrow Right"
                      fill
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
