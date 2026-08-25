import Image from 'next/image';

const FILTERS = [
  { label: 'Contribute', checked: true },
  { label: 'Ingest', checked: false },
  { label: 'Produce', checked: false },
  { label: 'Secure', checked: false },
];

const RESULTS = [
  {
    title: 'SAML SSO Config',
    type: 'Guide',
    stage: 'Secure',
    desc: 'Mandatory SAML single sign-on enforcement guidelines, boundary protection rules, and enterprise token parameters for live workflows.',
  },
  {
    title: 'Dual Active-Active Ingest',
    type: 'Runbook',
    stage: 'Operate',
    desc: 'How to configure redundant stream capture endpoints with sub-second failover thresholds and automated health checks.',
  },
  {
    title: 'WebRTC Broadcast Ingestion',
    type: 'Reference',
    stage: 'Build',
    desc: 'Detailed API payload schemes and JSON requirements for deploying direct WHIP browser ingest pathways.',
  },
];

export default function SearchSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/search/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.78)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
          Search Current ZoikoStream Documentation
        </h2>

        <div className="flex w-full flex-col items-start gap-[32px] xl:flex-row">
          {/* Filter sidebar */}
          <div className="flex w-full flex-col items-start gap-[20px] rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[24px] xl:w-[280px] xl:shrink-0">
            <p className="whitespace-nowrap text-[14px] font-bold leading-normal text-white">FILTERS</p>
            <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="whitespace-nowrap text-[12px] font-bold leading-normal text-[#34d4ca]">
                MEDIA STAGE
              </p>
              {FILTERS.map((filter) => (
                <div key={filter.label} className="flex items-center gap-[8px]">
                  <span
                    className={`size-[14px] shrink-0 rounded-[3px] border border-solid border-[#aab3c4] ${
                      filter.checked ? 'bg-[#34d4ca]' : 'bg-transparent'
                    }`}
                  />
                  <p className="whitespace-nowrap font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                    {filter.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results panel */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[32px]">
            <div className="flex w-full items-center justify-between gap-[12px]">
              <p className="text-[14px] font-bold leading-normal text-[#34d4ca]">3 VERIFIED RESULTS FOUND</p>
              <p className="whitespace-nowrap font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                Sort by: Relevance
              </p>
            </div>
            <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
            <div className="flex w-full flex-col items-start gap-[16px]">
              {RESULTS.map((result) => (
                <div
                  key={result.title}
                  className="flex w-full flex-col items-start gap-[12px] rounded-[8px] border border-solid border-[#232b3a] bg-[#162235] p-[16px]"
                >
                  <div className="flex w-full flex-wrap items-center justify-between gap-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <p className="text-[16px] font-bold leading-normal text-white">{result.title}</p>
                      <span className="rounded-[4px] bg-[rgba(74,140,251,0.12)] px-[6px] py-[2px] text-[9px] font-bold leading-normal text-[#4a8cfb]">
                        {result.type}
                      </span>
                    </div>
                    <p className="whitespace-nowrap text-[11px] font-bold leading-normal text-[#34d4ca]">
                      {result.stage}
                    </p>
                  </div>
                  <p className="w-full font-inter text-[13px] font-normal leading-[18px] text-[#aab3c4]">
                    {result.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-end">
              <button
                type="button"
                className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[24px] py-[12px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
              >
                Open Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
