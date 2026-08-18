type CheckState = 'Pass' | 'Partial' | 'Fail';

interface VerificationRow {
  item: string;
  state: CheckState;
  version: string;
  evidence: string;
}

interface ChangeRequest {
  title: string;
  impact: 'Minor' | 'Critical';
  action: string;
}

const verificationRows: VerificationRow[] = [
  { item: 'Ingest redundancy', state: 'Pass', version: 'v2.1', evidence: 'Checklist #CC-842' },
  { item: 'Latency validation', state: 'Pass', version: 'v2.1', evidence: 'Ping log #PL-309' },
  { item: 'Token encryption', state: 'Partial', version: 'v2.0', evidence: 'Pending keygen #KG-5' },
  { item: 'On-site backup line', state: 'Fail', version: 'v1.9', evidence: 'No local failover seen' },
];

const changeQueue: ChangeRequest[] = [
  {
    title: 'Modify target latency to 12ms',
    impact: 'Minor',
    action: 'Requires fresh ping loop v2.2 test run',
  },
  {
    title: 'Swap principal RTMP endpoint URL',
    impact: 'Critical',
    action: 'Forces invalidation of all S3 credentials',
  },
  {
    title: 'Add BSL translation overlay signer',
    impact: 'Minor',
    action: 'Requires accessory input setup review',
  },
];

const checkStyles: Record<CheckState, string> = {
  Pass: 'bg-emerald-900 text-teal-400',
  Partial: 'bg-amber-900 text-amber-500',
  Fail: 'bg-rose-950 text-rose-500',
};

const impactStyles: Record<ChangeRequest['impact'], string> = {
  Minor: 'bg-gray-800 text-slate-300',
  Critical: 'bg-amber-900 text-amber-500',
};

export default function VerificationChangeSection() {
  return (
    <section
      className="w-full bg-slate-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.35)), url('/images/assured-event/verification-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Verification and change control.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Continuous validation loop tracking test status alongside material changes in real time.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-start gap-8">
        {/* Operational path verification */}
        <div className="flex-1 w-full flex flex-col gap-4">
          <h3 className="text-slate-100 text-lg font-bold">Operational Path Verification</h3>
          <div className="w-full overflow-x-auto rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800">
            <table className="w-full min-w-[520px] border-collapse bg-zinc-950 text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 w-36 text-slate-100 text-xs font-bold">Check Item</th>
                  <th className="p-3 w-20 text-slate-100 text-xs font-bold">State</th>
                  <th className="p-3 w-16 text-slate-100 text-xs font-bold">Version</th>
                  <th className="p-3 text-slate-100 text-xs font-bold">Evidence Link</th>
                </tr>
              </thead>
              <tbody>
                {verificationRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-800 last:border-b-0">
                    <td className="p-3 text-slate-100 text-xs font-bold align-middle">{row.item}</td>
                    <td className="p-3 align-middle">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${checkStyles[row.state]}`}
                      >
                        {row.state}
                      </span>
                    </td>
                    <td className="p-3 text-slate-400 text-xs align-middle">{row.version}</td>
                    <td className="p-3 text-blue-500 text-xs font-bold align-middle">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active change queue */}
        <div className="flex-1 w-full flex flex-col gap-4">
          <h3 className="text-slate-100 text-lg font-bold">Active Change Queue</h3>
          <div className="w-full flex flex-col gap-3">
            {changeQueue.map((change) => (
              <div
                key={change.title}
                className="w-full p-4 bg-zinc-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2"
              >
                <div className="w-full flex justify-between items-start gap-3">
                  <span className="text-slate-100 text-sm font-bold">{change.title}</span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${impactStyles[change.impact]}`}
                  >
                    {change.impact}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">
                  <span className="text-slate-300 font-medium">Revalidation Action:</span>{' '}
                  {change.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
