interface PolicyRow {
  label: string;
  live: string;
  replay: string;
}

const policyRows: PolicyRow[] = [
  {
    label: 'State',
    live: 'Active (Encrypted stream ingestion live)',
    replay: 'Inactive (Requires separate publication review)',
  },
  {
    label: 'Owner',
    live: 'Event Administrator (Role-gated)',
    replay: 'Content Compliance Officer',
  },
  {
    label: 'Access Window',
    live: 'T-30 mins to T+45 mins post-event',
    replay: 'Defined post-review (Default: 30 days)',
  },
  {
    label: 'Credential Source',
    live: 'Approved Corporate SSO (SAML V2)',
    replay: 'Re-verified directory authentication',
  },
  {
    label: 'Inherits from',
    live: 'Initial Planning Brief Config',
    replay: 'Compliance Post-Event Audit Log',
  },
];

export default function LiveReplayPolicySection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Private live and private replay are not the same state.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          A private live room does not automatically create a private recording, replay entitlement,
          or retention policy.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-6 sm:p-10 bg-zinc-950 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-teal-400 rounded-full" />
            <h3 className="text-slate-100 text-base font-bold tracking-wide">LIVE ROOM POLICY</h3>
          </div>
          <dl className="w-full flex flex-col">
            {policyRows.map((row) => (
              <div
                key={row.label}
                className="w-full py-4 border-b border-gray-800 last:border-b-0 flex flex-wrap justify-between items-start gap-3"
              >
                <dt className="text-slate-400 text-sm">{row.label}</dt>
                <dd className="text-slate-100 text-sm text-right">{row.live}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-5 lg:pl-12 lg:border-l lg:border-gray-800">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <h3 className="text-slate-100 text-base font-bold tracking-wide">REPLAY POLICY</h3>
          </div>
          <dl className="w-full flex flex-col">
            {policyRows.map((row) => (
              <div
                key={row.label}
                className="w-full py-4 border-b border-gray-800 last:border-b-0 flex flex-wrap justify-between items-start gap-3"
              >
                <dt className="text-slate-400 text-sm">{row.label}</dt>
                <dd className="text-slate-100 text-sm text-right">{row.replay}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
