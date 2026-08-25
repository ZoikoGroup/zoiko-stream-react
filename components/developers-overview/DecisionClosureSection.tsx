import Image from 'next/image';

const CARDS = [
  {
    title: 'Start Building',
    desc: 'Get instant access tokens, configure play console testing, and run your first working stream in minutes.',
    cta: 'Get API Keys →',
    highlight: true,
  },
  {
    title: 'Read Documentation',
    desc: 'Examine qualified protocol schemas (RTMPS, SRT, WHIP), SDK reference guides, and error limits.',
    cta: 'Browse Reference →',
    highlight: false,
  },
  {
    title: 'Operate & Support',
    desc: 'Configure stream telemetry Webhooks, integrate Slack alerts, and setup failover operational structures.',
    cta: 'Access SDK Console →',
    highlight: false,
  },
  {
    title: 'Bespoke Architecture',
    desc: 'Talk with solutions architects regarding dedicated GPU requirements, custom SLAs, and custom SSO constraints.',
    cta: 'Schedule Architect Call →',
    highlight: false,
  },
];

export default function DecisionClosureSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[140px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/decision-closure/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.79)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[48px]">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-[16px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.5px] text-white md:text-[44px] md:leading-[56px]">
            Ready to choose the right video path?
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Start with the outcome, workflow, or operating model that fits your team. If your requirements
            cross multiple paths, our architects will review your engineering outline.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid bg-[rgba(16,21,30,0.8)] p-[32px] ${
                card.highlight ? 'border-[#34d4ca]' : 'border-[#232b3a]'
              }`}
            >
              <div className="flex w-full flex-col items-start gap-[12px]">
                <p className="text-[22px] font-bold leading-normal text-white">{card.title}</p>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                  {card.desc}
                </p>
              </div>
              <button
                type="button"
                className={`mt-auto flex w-full items-center justify-center whitespace-nowrap rounded-[8px] px-[28px] py-[14px] text-[15px] font-bold transition-opacity hover:opacity-90 ${
                  card.highlight
                    ? 'bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] text-[#0a0d14]'
                    : 'border-[1.5px] border-solid border-[#aab3c4] text-white'
                }`}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
