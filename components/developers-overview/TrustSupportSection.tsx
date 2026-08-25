import Image from 'next/image';

const CARDS = [
  {
    title: 'API Documentation',
    badge: 'Authority',
    desc: 'Every single endpoint, typed parameters, and validated schemas.',
  },
  {
    title: 'System Status',
    badge: 'Transparency',
    desc: 'Live up-time statistics and real-time incident reports.',
  },
  {
    title: 'Changelog Archive',
    badge: 'Attribution',
    desc: 'Version histories, verified protocol paths, and key updates.',
  },
  {
    title: 'Developer Support',
    badge: 'SLA Guaranteed',
    desc: 'Immediate engineers-on-call escalation paths.',
  },
  {
    title: 'Accessibility (WCAG)',
    badge: 'Compliance',
    desc: 'Keyboard mapping, screen readers, and multilingual layouts.',
  },
];

export default function TrustSupportSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/trust-support/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/trust-support/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-171px] top-[-12px] size-[420px]"
      />
      <img
        src="/images/developers-overview/trust-support/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-241px] right-[-134px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Trust, Support &amp; Current Truth — Verify What Is Current
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            We replace abstract marketing reassurance with auditable, live records and comprehensive
            accessibility.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[20px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]"
            >
              <div className="flex w-full flex-wrap items-center justify-between gap-y-[8px]">
                <p className="text-[18px] font-bold leading-normal text-[#0a0f1a]">{card.title}</p>
                <span className="shrink-0 rounded-[6px] bg-[rgba(74,140,251,0.1)] px-[8px] py-[4px] text-[11px] font-bold leading-normal text-[#4a8cfb]">
                  {card.badge}
                </span>
              </div>
              <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                {card.desc}
              </p>
              <div className="h-0 w-full border-t border-solid border-[#e1e6eb]" />
              <div className="flex w-full flex-col items-start gap-[8px]">
                <p className="text-[13px] font-bold uppercase leading-normal text-[#0a0f1a]">
                  Verification Path:
                </p>
                <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#4f5e74]">
                  Attributable current proof, updated live on every release cycle.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
