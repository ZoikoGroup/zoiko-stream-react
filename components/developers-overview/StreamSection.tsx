import Image from 'next/image';

const STAGES = [
  { label: '1. Access', icon: '/images/developers-overview/stream/icon-user.svg' },
  { label: '2. Credentials', icon: '/images/developers-overview/stream/icon-key.svg' },
  { label: '3. Create Stream', icon: '/images/developers-overview/stream/icon-activity.svg' },
  { label: '4. Playback', icon: '/images/developers-overview/stream/icon-play.svg' },
  { label: '5. Observe State', icon: '/images/developers-overview/stream/icon-eye.svg' },
];

export default function StreamSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/stream/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.88)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-white md:text-[38px] md:leading-[48px]">
            First Working Stream — Know the Path Before You Copy the First Command
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            The overview shows the sequence. Quickstart owns the commands. API Reference owns the schema.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch py-[20px] md:flex-row md:items-center">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="flex flex-col items-center md:flex-1 md:flex-row">
              <div className="flex flex-col items-center gap-[8px] md:flex-1">
                <div className="flex size-[48px] items-center justify-center rounded-full border-2 border-solid border-[#34d4ca] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={stage.icon} alt="" className="size-[18px]" />
                </div>
                <p className="whitespace-nowrap text-center text-[13px] font-bold text-white">{stage.label}</p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="my-[8px] h-[24px] w-[2px] shrink-0 self-center bg-[#34d4ca] md:my-0 md:h-[2px] md:w-auto md:flex-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
