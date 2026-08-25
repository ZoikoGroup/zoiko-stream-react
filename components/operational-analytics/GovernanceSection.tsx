import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/governance/card-1.png',
    title: '1. Analytics Evidence Pack',
    desc: 'Compile complete, verified report packages mapping targets, timelines, and explicit metadata metrics securely.',
  },
  {
    image: '/images/operational-analytics/governance/card-2.png',
    title: '2. Report Status Pipeline',
    desc: 'Trace reports through dynamic generation states from raw Draft, generating, or Ready states to superseding archives.',
  },
  {
    image: '/images/operational-analytics/governance/card-3.png',
    title: '3. Interactive Metric Glossary',
    desc: 'Plain language and low-level technical formulas are strictly mapped to every metric, avoiding calculation bias.',
  },
  {
    image: '/images/operational-analytics/governance/card-4.png',
    title: '4. Unified RBAC Permissions',
    desc: 'Configure tight access control rules governing who can view, filter, export, or share raw and aggregated metrics.',
  },
  {
    image: '/images/operational-analytics/governance/card-5.png',
    title: '5. Statutory Retention Limits',
    desc: 'Rigorous retention policy engine ensures automated evidence pruning or cold security archival replication paths.',
  },
  {
    image: '/images/operational-analytics/governance/card-6.png',
    title: '6. Privacy-First Aggregation',
    desc: 'Telemetry datasets utilize default group hashing, removing individual visitor trace profiles before write.',
  },
  {
    image: '/images/operational-analytics/governance/card-7.png',
    title: '7. Change Audit Ledger',
    desc: 'Every telemetry parameter change, formula modification, or report status shift is permanently recorded to system audit logs.',
  },
  {
    image: '/images/operational-analytics/governance/card-8.png',
    title: '8. Governed Export Rules',
    desc: 'Encrypted export profiles output strictly verified data fields. All outputs are audit-logged.',
  },
];

export default function GovernanceSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/governance/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/governance/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-54px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/governance/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[42px] right-[-120px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Reporting, evidence, governance, privacy, and exports
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Metric glossary, report states, export rules, permissions, retention, privacy, and auditability.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]"
            >
              <div className="relative h-[130px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="w-full text-[18px] font-bold leading-normal text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
