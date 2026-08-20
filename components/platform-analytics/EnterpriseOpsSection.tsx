import Image from 'next/image';

const roles = [
  {
    role: 'Med-Ops Owner',
    view: 'View: All Data',
    export: 'Export: Approved CSV/JSON',
  },
  {
    role: 'Compliance Reviewer',
    view: 'View: Anonymized Only',
    export: 'Export: Audited PDF',
  },
  {
    role: 'Core Developer',
    view: 'View: None (Raw Logs Only)',
    export: 'Export: Raw Event Streams',
  },
  {
    role: 'Auditor',
    view: 'View: Lineage Evidence Logs',
    export: 'Export: Cryptographic Hashes',
  },
];

const evidenceStats = [
  { label: 'SLA Compliance Status', value: '99.99% Met', color: 'text-[#10b981]' },
  { label: 'Asset Classification', value: 'Highly Restricted', color: 'text-[#34d4ca]' },
  { label: 'Retention Window', value: '7 Years (Regulated)', color: 'text-[#4a8cfb]' },
];

export default function EnterpriseOpsSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/enterprise-ops-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.81)] inset-0" />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
          <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
            Enterprise operations and evidence
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
            Manage permissions, compliance pipelines, and programmatic export scopes.
          </p>
        </div>

        {/* Ops Content */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] items-stretch xl:items-center relative shrink-0 w-full">
          {/* Matrix Panel */}
          <div className="bg-[#101626] border border-[#1e293b] border-solid flex flex-1 flex-col gap-4 xl:gap-[16px] items-start leading-[normal] min-w-px p-6 xl:p-[24px] relative rounded-[12px] w-full">
            <p className="font-spaceGrotesk font-bold relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Role & Permission Scope
            </p>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {roles.map((row) => (
                <div
                  key={row.role}
                  className="border border-[#1e293b] border-solid flex flex-col sm:flex-row items-start p-[12px] relative shrink-0 w-full gap-2 sm:gap-0"
                >
                  <div className="flex flex-1 flex-col gap-[2px] items-start min-w-px relative whitespace-nowrap">
                    <p className="font-spaceGrotesk font-bold relative shrink-0 text-[13px] text-white">
                      {row.role}
                    </p>
                    <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#aab3c4] text-[11px]">
                      {row.view}
                    </p>
                  </div>
                  <p className="flex-1 font-spaceGrotesk font-normal min-w-px relative text-[#34d4ca] text-[12px]">
                    {row.export}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Mockup */}
          <div className="bg-[rgba(16,22,38,0.8)] border border-[#1e293b] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[24px] relative rounded-[12px] shrink-0 w-full xl:w-[500px]">
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Cryptographic Evidence Package
            </p>
            <div className="flex flex-col font-spaceGrotesk font-normal gap-[10px] items-start leading-[normal] relative shrink-0 text-[13px] w-full">
              {evidenceStats.map((stat) => (
                <div key={stat.label} className="flex items-start justify-between relative shrink-0 w-full">
                  <p className="relative shrink-0 text-[#707a8c]">{stat.label}</p>
                  <p className={`relative shrink-0 ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-b flex from-[#34d4ca] items-center justify-center px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4a8cfb] w-full">
              <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[13px] whitespace-nowrap">
                Export Audited PDF Statement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
