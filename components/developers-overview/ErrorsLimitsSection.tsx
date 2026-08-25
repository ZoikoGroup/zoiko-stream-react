import Image from 'next/image';

const CARDS = [
  {
    img: '/images/developers-overview/errors-limits/card-1.png',
    title: 'Error Handling & Failover',
    desc: 'Automatic failover paths, dual ingest endpoints, and instantaneous stream redirection. Built for high-stakes broadcast environments.',
  },
  {
    img: '/images/developers-overview/errors-limits/card-2.png',
    title: 'Rate Limits & Thresholds',
    desc: 'Deterministic system-level controls preventing usage spikes. Protect developer APIs from unexpected billing surprises and pipeline overload.',
  },
  {
    img: '/images/developers-overview/errors-limits/card-3.png',
    title: 'Change Governance',
    desc: 'A fully auditable historical log of every credential rotation, SSO rule modification, and gateway update. Total administrative accountability.',
  },
];

export default function ErrorsLimitsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/errors-limits/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.9)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Errors, Rate Limits &amp; Change Governance
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Design for reality. Standardize error state tracking, protect execution boundaries, and govern
            key changes deterministically.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)]"
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image src={card.img} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[16px] p-[24px]">
                <div className="flex w-full items-center justify-between gap-[12px]">
                  <p className="text-[20px] font-bold leading-normal text-white">{card.title}</p>
                  <span className="shrink-0 rounded-[100px] border border-solid border-[rgba(52,212,202,0.3)] bg-[rgba(52,212,202,0.1)] px-[10px] py-[4px] text-[11px] font-bold leading-normal text-[#34d4ca]">
                    CURRENT
                  </span>
                </div>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
