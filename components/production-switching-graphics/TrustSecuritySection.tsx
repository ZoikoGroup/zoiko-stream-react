import Link from 'next/link';

interface TrustColumn {
  icon: string;
  title: string;
  points: string[];
}

const columns: TrustColumn[] = [
  {
    icon: '/images/production-switching-graphics/lock.svg',
    title: 'Security & Privacy',
    points: [
      'Least privilege controls & role-gated switching',
      'Advanced session protection with active MFA options',
      'Zero credentials or environment secrets in public operator UI',
      'Total operational audit separation and immutable log trails',
      'Full TLS 1.3 encryption across all contribution and ingest feeds',
    ],
  },
  {
    icon: '/images/production-switching-graphics/accessibility.svg',
    title: 'Accessibility',
    points: [
      'Strict alignment to WCAG 2.2 AA presentation criteria',
      'Full operational keyboard navigation across mixer controls',
      'Non-color visual indicators for critical signal warnings',
      'Automated safe-zone margins preventing caption overlapping',
      'Reduced motion UI support options for viewer clients',
    ],
  },
  {
    icon: '/images/production-switching-graphics/shield-check.svg',
    title: 'Evidence & Compliance',
    points: [
      'Governed operational incident logs and run-of-show files',
      'Live health and network path telemetry freshness within <1s',
      'Data minimization practices: no automated user tracking',
      'Zero automated or predictive viewer behavior scoring',
      'Auditable change trails for graphic modifications',
    ],
  },
];

export default function TrustSecuritySection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-top bg-no-repeat px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.12), rgba(9, 9, 11, 0.12)), url('/images/production-switching-graphics/trust-security-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Security, resilience, and access are built into the stream.
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 shrink-0 bg-blue-500/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-blue-500/40 flex justify-center items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={column.icon} alt="" aria-hidden className="w-[18px] h-[18px]" />
              </span>
              <h3 className="text-slate-100 text-lg font-bold">{column.title}</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {column.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-blue-400 text-xs font-mono mt-0.5 shrink-0">√</span>
                  <span className="text-slate-300 text-sm leading-5">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl flex justify-center">
        <Link
          href="/talk-to-an-expert"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Talk to an expert
        </Link>
      </div>
    </section>
  );
}
