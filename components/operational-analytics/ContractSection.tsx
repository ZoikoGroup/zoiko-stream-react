import Image from 'next/image';

const ROWS = [
  {
    label: 'Metric ID & Label',
    desc: 'Unique identifier cross-referenced to developer API and client dashboard.',
  },
  {
    label: 'Business Question',
    desc: 'What operational intent or failure mode this metric specifically evaluates.',
  },
  {
    label: 'Unit of Observation',
    desc: 'What constitutes the baseline unit (e.g. playback start attempt vs session).',
  },
  {
    label: 'Numerator & Denominator',
    desc: 'The exact mathematical formula used to compute percentage or rate metrics.',
  },
  {
    label: 'Aggregation & Grain',
    desc: 'How results are combined (e.g. median percentile) and temporal/device limits.',
  },
  {
    label: 'Validity & Exclusions',
    desc: 'Strictly defined criteria that invalidates telemetry (e.g. loopbacks, bot noise).',
  },
  {
    label: 'Limitations',
    desc: 'Documented gaps in coverage, stale parameters, or freshness bottlenecks.',
  },
];

export default function ContractSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/contract/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.61)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            No metric without meaning.
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Every visible metric must open a definition drawer. The measurement contract governs every number on
            this page.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Contract table */}
          <div className="flex w-full min-w-px flex-1 flex-col items-start gap-[12px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235] p-[24px]">
            <p className="text-[18px] font-bold text-white">Registry Standard Fields</p>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center gap-[16px] border-b border-solid border-[#232b3a] p-[12px]"
              >
                <p className="w-[140px] shrink-0 text-[14px] font-bold text-[#34d4ca] md:w-[200px]">
                  {row.label}
                </p>
                <p className="min-w-px flex-1 font-inter text-[13px] font-normal leading-[18px] text-[#aab3c4]">
                  {row.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Guardrail sidebar */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px] xl:w-[440px]">
            <p className="text-[14px] font-bold tracking-[1px] text-[#34d4ca]">REACH WORDING GUARDRAIL</p>
            <div className="relative h-[180px] w-full overflow-hidden rounded-[12px]">
              <Image
                src="/images/operational-analytics/contract/guardrail-visual.png"
                alt="Metric isolation diagram: playback starts are not sessions, accounts, or verified people"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[22px] font-bold text-white">Metric Inflation Guard</p>
            <p className="font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
              To prevent misrepresentation, we enforce strict metric isolation boundaries:
            </p>
            <div className="h-px w-full bg-[#232b3a]" />
            <div className="w-full font-inter text-[13px] font-normal text-white">
              <p className="font-bold leading-[20px] text-[#4a8cfb]">12,000 Playback Starts</p>
              <p className="leading-[20px]">{'  ≠ 12,000 Sessions'}</p>
              <p className="leading-[20px]">{'  ≠ 12,000 Accounts'}</p>
              <p className="leading-[20px]">{'  ≠ 12,000 Verified People.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
