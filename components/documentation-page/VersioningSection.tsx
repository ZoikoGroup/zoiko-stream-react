import Image from 'next/image';

const ROWS = [
  {
    feature: 'Dual Active-Active Ingest',
    v24: { text: 'Supported', color: '#34d4ca' },
    v20: { text: 'Manual Setup Only', color: '#aab3c4' },
    v18: { text: 'Unsupported', color: '#ef4444' },
  },
  {
    feature: 'SAML SSO Policy Gating',
    v24: { text: 'Fully Enforced', color: '#34d4ca' },
    v20: { text: 'Supported', color: '#aab3c4' },
    v18: { text: 'Token-Only Auth', color: '#ef4444' },
  },
  {
    feature: 'Ephemeral CDN Key Generation',
    v24: { text: 'Sub-Second Auto', color: '#34d4ca' },
    v20: { text: 'Minute Caching', color: '#aab3c4' },
    v18: { text: 'Manual Creation Required', color: '#ef4444' },
  },
];

export default function VersioningSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/versioning/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.84)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Technical Documentation Is Only Useful When You Know What Version It Describes
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Verify protocol consistency boundaries, deprecated API headers, and future migration paths
            instantly.
          </p>
        </div>

        {/* Version header mockup */}
        <div className="flex w-full flex-col items-start rounded-[12px] border border-solid border-[#232b3a] bg-[#162235] p-[24px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-x-[16px] gap-y-[12px]">
            <div className="flex flex-wrap items-center gap-[16px]">
              <p className="whitespace-nowrap text-[14px] font-bold leading-normal text-white">
                DOCUMENTATION TARGET
              </p>
              <div className="flex items-start rounded-[6px] border border-solid border-[#232b3a] bg-[#10151e] px-[12px] py-[6px]">
                <p className="whitespace-nowrap text-[13px] font-normal leading-normal text-[#34d4ca]">
                  API Version v2.4 (Active Ingest) ▾
                </p>
              </div>
            </div>
            <p className="font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
              Published: February 2026 · Next Scheduled Review: May 2026
            </p>
          </div>
        </div>

        {/* Deprecation banner */}
        <div className="flex w-full flex-col items-start gap-[8px] rounded-[8px] border border-solid border-[#f59e0b] bg-[#fef3c7] p-[20px]">
          <p className="text-[13px] font-bold leading-normal text-[#b45309]">
            API VERSION v1.8 DEPRECATION NOTICE
          </p>
          <p className="w-full font-inter text-[12px] font-normal leading-[18px] text-[#d97706]">
            Legacy ingestion endpoints (`/v1/ingest/*`) are officially deprecated and scheduled for
            sunset on December 31, 2026. Please prepare code migration pipelines using standard v2.4 REST
            payloads.
          </p>
        </div>

        {/* Compatibility table */}
        <div className="w-full overflow-hidden rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)]">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[760px]">
              {/* Header */}
              <div className="flex w-full items-start gap-[12px] bg-[#141e33] p-[12px] text-[13px] font-bold text-white">
                <p className="w-[220px] shrink-0">Feature / Ingest API</p>
                <p className="min-w-px flex-1">v2.4 (Latest)</p>
                <p className="min-w-px flex-1">v2.0</p>
                <p className="min-w-px flex-1">v1.8 (Deprecated)</p>
              </div>
              {/* Rows */}
              {ROWS.map((row) => (
                <div
                  key={row.feature}
                  className="flex w-full items-center gap-[12px] border-b border-solid border-[#232b3a] p-[16px]"
                >
                  <p className="w-[220px] shrink-0 font-inter text-[14px] font-bold text-white">
                    {row.feature}
                  </p>
                  <p className="min-w-px flex-1 font-inter text-[13px] font-normal" style={{ color: row.v24.color }}>
                    {row.v24.text}
                  </p>
                  <p className="min-w-px flex-1 font-inter text-[13px] font-normal" style={{ color: row.v20.color }}>
                    {row.v20.text}
                  </p>
                  <p className="min-w-px flex-1 font-inter text-[13px] font-normal" style={{ color: row.v18.color }}>
                    {row.v18.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
        >
          View Changelog
        </button>
      </div>
    </section>
  );
}
