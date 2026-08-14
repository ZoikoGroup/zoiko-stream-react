import Image from 'next/image';

interface RiskCard {
  code: string;
  title: string;
  description: string;
  bg: string;
}

const risks: RiskCard[] = [
  {
    code: 'RISK 01',
    title: 'Live is sensitive later',
    description:
      'Recording instantly changes privacy limits, consent scopes, and publishing rights. Decisions cannot be retroactive.',
    bg: '/images/recording-replay-archive/why/card-bg-1.png',
  },
  {
    code: 'RISK 02',
    title: 'Capture is not readiness',
    description:
      'Successful raw capture does not equal replay readiness. It still requires access controls, metadata checks, and accessibility review.',
    bg: '/images/recording-replay-archive/why/card-bg-2.png',
  },
  {
    code: 'RISK 03',
    title: 'Honest viewer expectations',
    description:
      'Tell your audience clearly whether a replay is expected, processing, or permanently unavailable. Avoid ambiguous states.',
    bg: '/images/recording-replay-archive/why/card-bg-3.png',
  },
  {
    code: 'RISK 04',
    title: 'Stale templates risk drift',
    description:
      'Recurring live event templates must not silently inherit legacy post-event choices. Each cycle requires fresh scope verification.',
    bg: '/images/recording-replay-archive/why/card-bg-4.png',
  },
  {
    code: 'RISK 05',
    title: 'Archive is a policy choice',
    description:
      'Long-term stream preservation demands active ownership, specific retention schedules, and auditable compliance logs.',
    bg: '/images/recording-replay-archive/why/card-bg-5.png',
  },
];

export default function WhySection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#232b3a] flex flex-col gap-14 items-start px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-25">
      {/* Base section background image */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/recording-replay-archive/why/section-bg-base.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* WhyBg overlay: shifted/cropped background image + dark scrim */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="/images/recording-replay-archive/why/section-bg-overlay.png"
            className="absolute h-full left-[-9.6%] max-w-none top-0 w-[119.21%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.78)]" />
      </div>

      {/* Decorative glows */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: '-180px', top: '-120px', width: '600px', height: '500px' }}
      >
        <img
          alt=""
          src="/images/recording-replay-archive/why/glow-tl.svg"
          className="block max-w-none size-full"
        />
      </div>
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: '1050px', top: '200px', width: '500px', height: '400px' }}
      >
        <img
          alt=""
          src="/images/recording-replay-archive/why/glow-br.svg"
          className="block max-w-none size-full"
        />
      </div>

      {/* Section header */}
      <div className="relative flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Why post-event planning matters
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          Relying on automatic defaults invites privacy breaches, compliance drift, and poor viewer experiences. A reliable platform makes post-live states deliberate.
        </p>
      </div>

      {/* Risk cards grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {risks.map((risk) => (
          <div
            key={risk.code}
            className="relative flex flex-col gap-5 items-start p-6 rounded-xl border border-[#232b3a] bg-[#10151e] overflow-hidden"
          >
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <Image src={risk.bg} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[rgba(16,21,30,0.96)]" />
            </div>

            <div className="relative flex items-center justify-between w-full">
              <p className="font-mono font-bold text-[#33d9c7] text-sm">{risk.code}</p>
              <img
                alt=""
                src="/images/recording-replay-archive/why/alert-circle.svg"
                className="size-4"
              />
            </div>

            <div className="relative flex flex-col gap-2 items-start w-full">
              <p className="font-bold text-[#eef1f6] text-base">{risk.title}</p>
              <p className="text-[#aab3c4] text-[13px] leading-[18px]">{risk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
