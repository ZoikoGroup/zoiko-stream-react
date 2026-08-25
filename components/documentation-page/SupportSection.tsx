import Image from 'next/image';

const TRUST_CARDS = [
  {
    img: 'card-0-v2.png',
    title: 'Developer Support',
    desc: 'Submit tickets or discuss architecture live with specialists',
  },
  {
    img: 'card-1-v2.png',
    title: 'System Status',
    desc: 'Verify current uptime target scores and historical outage logs',
  },
  {
    img: 'card-2-v2.png',
    title: 'Security & Access Evidence',
    desc: 'Inspect current encryption profiles and audited SSO protocols',
  },
  {
    img: 'card-3-v2.png',
    title: 'Accessibility Help',
    desc: 'Configure WCAG guidelines compliance, ASL & translation templates',
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/documentation-page/support/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Verify Current Information or Get Technical Help
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-normal text-[#4f5e74] md:text-[18px]">
            Connect directly with verified solutions architects and documentation engineers.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc]"
            >
              <div className="relative h-[140px] w-full">
                <Image src={`/images/documentation-page/support/${card.img}`} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                <p className="w-full text-[18px] font-bold leading-normal text-[#0f1b2d]">{card.title}</p>
                <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#4f5e74]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback + sales split */}
        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Feedback panel */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">Documentation Feedback</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[11px] font-bold uppercase leading-normal text-[#4f5e74]">
                  Select Feedback Category
                </p>
                <div className="flex w-full items-start rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[14px]">
                  <p className="flex-1 font-inter text-[14px] font-normal leading-normal text-[#0f1b2d]">
                    Typo or Code Error Mismatch
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[11px] font-bold uppercase leading-normal text-[#4f5e74]">
                  Optional Comment
                </p>
                <div className="flex h-[100px] w-full items-start rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[14px]">
                  <p className="flex-1 font-inter text-[14px] font-normal leading-normal text-[#aab3c4]">
                    Describe your experience or suggest an improvement here...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bespoke evaluation */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[440px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">Bespoke Evaluation</p>
            <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
              If your engineering team requires customized pipeline SLAs, strict security auditing, or
              unique geo-fenced replication routes, connect with our sales architects.
            </p>
            <div className="h-0 w-full border-t border-solid border-[#e1e6eb]" />
            <p className="text-[13px] font-bold leading-normal text-[#4a8cfb]">
              Report a Documentation Issue →
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
        >
          Get Developer Support
        </button>
      </div>
    </section>
  );
}
