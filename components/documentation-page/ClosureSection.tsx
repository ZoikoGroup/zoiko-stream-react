import Image from 'next/image';

const STEPS = [
  {
    num: '01',
    tag: '5 MINS',
    title: 'Quickstart',
    desc: 'Get a working stream with default params in under 5 minutes.',
  },
  {
    num: '02',
    tag: 'SCHEMAS',
    title: 'API Reference',
    desc: 'Every endpoint strictly typed, mapped, and schema qualified.',
  },
  {
    num: '03',
    tag: 'SSO/JWT',
    title: 'Authentication',
    desc: 'Integrate SAML SSO, JWT parameters, and compliance keys.',
  },
  {
    num: '04',
    tag: 'GUIDES',
    title: 'BUILD/OPERATE',
    desc: 'Browse specific guides covering contribution to archive.',
  },
  {
    num: '05',
    tag: 'LIVE',
    title: 'Support',
    desc: 'Live architecture validation sessions with specialists.',
  },
];

export default function ClosureSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/closure/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.88)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Continue From Where You Are
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-normal text-[#aab3c4] md:text-[18px]">
            Select your primary starting path and accelerate your video pipeline integration today.
          </p>
        </div>

        {/* Next steps grid */}
        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[20px]"
            >
              <div className="flex w-full items-center justify-between gap-[8px]">
                <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[24px] border-2 border-solid border-[#4f5e74] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb]">
                  <p className="text-[14px] font-bold leading-normal text-white">{step.num}</p>
                </div>
                <span className="flex items-start rounded-[4px] border border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] px-[6px] py-[2px] text-[9px] font-bold leading-normal text-[#34d4ca]">
                  {step.tag}
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-[6px]">
                <p className="text-[16px] font-bold leading-normal text-white">{step.title}</p>
                <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#aab3c4]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex w-full flex-col items-center border-t border-solid border-[#232b3a] pt-[40px]">
          <div className="flex flex-wrap items-center justify-center gap-[16px]">
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
            >
              Quickstart
            </button>
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-solid border-[#aab3c4] px-[28px] py-[14px] text-[15px] font-bold text-white transition-colors hover:bg-white/5"
            >
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
