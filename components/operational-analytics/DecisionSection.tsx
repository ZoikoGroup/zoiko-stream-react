import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/decision/card-1.png',
    title: 'Developer Evaluating',
    primary: 'Read API docs',
    secondary: 'Join Slack',
    secondaryBorder: 'border-white',
  },
  {
    image: '/images/operational-analytics/decision/card-2.png',
    title: 'Enterprise Director',
    primary: 'Request security pack',
    secondary: 'Talk to expert',
    secondaryBorder: 'border-white',
  },
  {
    image: '/images/operational-analytics/decision/card-3.png',
    title: 'Active Live Operator',
    primary: 'Stream monitoring',
    secondary: 'Contact support',
    secondaryBorder: 'border-white',
  },
  {
    image: '/images/operational-analytics/decision/card-4.png',
    title: 'Existing Customer',
    primary: 'Platform login',
    secondary: 'System status',
    secondaryBorder: 'border-[#aab3c4]',
  },
  {
    image: '/images/operational-analytics/decision/card-5.png',
    title: 'Live Event Planner',
    primary: 'Reserve dates',
    secondary: 'Consult architect',
    secondaryBorder: 'border-white',
  },
  {
    image: '/images/operational-analytics/decision/card-6.png',
    title: 'Seeking Guidance',
    primary: 'Workflow finder',
    secondary: 'Solutions index',
    secondaryBorder: 'border-[#aab3c4]',
  },
];

export default function DecisionSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/decision/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.87)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px] xl:gap-[64px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Get started based on your role
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Whether you&apos;re a developer, enterprise director, live operator, event planner, or existing
            customer — find tailored resources and actions for your needs.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#050f1e] p-[24px]"
            >
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="w-full text-[18px] font-bold text-white">{card.title}</p>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-[6px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[16px] py-[10px] text-[13px] font-bold text-[#0a0d14] transition-opacity hover:opacity-90"
                >
                  {card.primary}
                </button>
                <button
                  type="button"
                  className={`flex w-full items-center justify-center rounded-[6px] border border-solid ${card.secondaryBorder} px-[16px] py-[10px] text-[13px] font-bold text-white transition-colors hover:bg-white/10`}
                >
                  {card.secondary}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
