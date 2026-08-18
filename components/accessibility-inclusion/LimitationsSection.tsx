interface DetailRow {
  label: string;
  value: string;
  tone?: 'link' | 'success';
}

const limitationRows: DetailRow[] = [
  { label: 'Impact:', value: 'High-latency rendering on local braille streams' },
  { label: 'Affected users:', value: 'Tactile terminal output audience' },
  { label: 'Workaround/Alt:', value: 'Deploy dedicated SRT-TXT fallback pathway', tone: 'link' },
  { label: 'Owner:', value: 'Alex T. (Inclusion Desk)' },
  { label: 'Last review date:', value: 'March 12, 2026' },
];

const alternativeRows: DetailRow[] = [
  { label: 'Purpose:', value: 'Fallback live translation when auto-audio fails' },
  { label: 'Eligibility:', value: 'All multi-lingual and non-hearing accounts' },
  { label: 'Instructions:', value: "Toggle 'AUX V3 Player' in audio panel configuration" },
  { label: 'Owner:', value: 'Sarah K. (Operations Center)' },
  { label: 'Status:', value: 'Verified and Operational', tone: 'success' },
];

function DetailList({ rows }: { rows: DetailRow[] }) {
  return (
    <dl className="w-full flex flex-col gap-2.5">
      {rows.map((row) => (
        <div key={row.label} className="w-full flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
          <dt className="w-full sm:w-36 shrink-0 text-gray-500 text-sm">{row.label}</dt>
          <dd
            className={`flex-1 text-sm ${
              row.tone === 'link'
                ? 'text-blue-600 underline'
                : row.tone === 'success'
                  ? 'text-emerald-600 font-medium'
                  : 'text-zinc-950'
            }`}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function LimitationsSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Known limitations stay visible. Alternatives stay planned.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Incomplete states are shown with impact, workaround, owner, and review date &mdash; never
          hidden for polish.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col">
          <div
            className="h-52 w-full bg-slate-200 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/accessibility-inclusion/card-known-limitation.png')`,
            }}
            role="presentation"
          />
          <div className="p-6 flex flex-col gap-4">
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <h3 className="text-zinc-950 text-lg font-bold">Known Limitation Card</h3>
              <span className="px-2.5 py-1 bg-red-500/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-red-400 text-red-500 text-[10px] font-bold uppercase tracking-wide">
                Flagged
              </span>
            </div>
            <DetailList rows={limitationRows} />
          </div>
        </article>

        <article className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col">
          <div
            className="h-52 w-full bg-slate-200 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/accessibility-inclusion/card-alternative-access-path.png')`,
            }}
            role="presentation"
          />
          <div className="p-6 flex flex-col gap-4">
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <h3 className="text-zinc-950 text-lg font-bold">Alternative Access Path</h3>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-emerald-400 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
                Standby
              </span>
            </div>
            <DetailList rows={alternativeRows} />
          </div>
        </article>
      </div>
    </section>
  );
}
