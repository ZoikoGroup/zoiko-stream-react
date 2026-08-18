interface ResponsibilityRow {
  category: string;
  zoiko: string;
  zoikoLead?: boolean;
  customer: string;
  customerLead?: boolean;
  venue: string;
  description: string;
}

const responsibilityRows: ResponsibilityRow[] = [
  {
    category: 'Service Scope Definition',
    zoiko: '✓ Lead',
    zoikoLead: true,
    customer: 'Informed',
    venue: '-',
    description: 'ZoikoStream defines stream technical targets based on briefing.',
  },
  {
    category: 'Dependency Readiness',
    zoiko: 'Informed',
    customer: '✓ Lead',
    customerLead: true,
    venue: 'Support',
    description: 'Customer verifies and secures local bandwidth pipeline.',
  },
  {
    category: 'Go-Live Decision',
    zoiko: 'Joint',
    customer: '✓ Final Sign-off',
    customerLead: true,
    venue: 'Informed',
    description: 'Customer provides the final sign-off to push active feed.',
  },
  {
    category: 'Incident Response',
    zoiko: '✓ SLA Action',
    zoikoLead: true,
    customer: 'Escalation',
    venue: 'Local support',
    description: 'ZoikoStream drives core delivery incident actions on CDN.',
  },
  {
    category: 'Evidence Archival',
    zoiko: '✓ Automatic',
    zoikoLead: true,
    customer: 'Verification',
    venue: '-',
    description: 'System locks tamper-proof log summary to the portal.',
  },
];

export default function ResponsibilitySection() {
  return (
    <section className="relative w-full bg-gray-50 border-t border-b border-slate-200 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-[100px] w-[500px] h-[500px] opacity-5 bg-blue-500 rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Responsibility and decision rights.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Clear matrices eliminate communication overhead. Every critical operational domain has a
          single, unambiguous owner.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl overflow-x-auto rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200">
        <table className="w-full min-w-[900px] border-collapse bg-white text-left">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-4 w-64 text-zinc-950 text-xs font-bold">Operational Category</th>
              <th className="p-4 w-44 text-teal-400 text-xs font-bold">ZoikoStream</th>
              <th className="p-4 w-44 text-blue-500 text-xs font-bold">Customer</th>
              <th className="p-4 w-44 text-slate-600 text-xs font-bold">Venue-Partner</th>
              <th className="p-4 text-slate-600 text-xs font-bold">Shared Alignment Description</th>
            </tr>
          </thead>
          <tbody>
            {responsibilityRows.map((row) => (
              <tr key={row.category} className="border-b border-slate-200 last:border-b-0">
                <td className="p-4 text-zinc-950 text-sm font-bold align-middle">{row.category}</td>
                <td
                  className={`p-4 text-xs align-middle ${
                    row.zoikoLead ? 'text-teal-400 font-bold' : 'text-slate-600'
                  }`}
                >
                  {row.zoiko}
                </td>
                <td
                  className={`p-4 text-xs align-middle ${
                    row.customerLead ? 'text-blue-500 font-bold' : 'text-slate-600'
                  }`}
                >
                  {row.customer}
                </td>
                <td className="p-4 text-slate-600 text-xs align-middle">{row.venue}</td>
                <td className="p-4 text-slate-600 text-xs align-middle">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
