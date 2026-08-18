interface CloseoutMetric {
  label: string;
  value: string;
  tone?: 'teal' | 'blue' | 'amber';
}

const closeoutMetrics: CloseoutMetric[] = [
  { label: 'Final Event State', value: 'Completed Successfully' },
  { label: 'Scope Outcome', value: '5/5 Categories Met' },
  { label: 'Verification History', value: '100% Passed pre-air', tone: 'teal' },
  { label: 'Incident Resolution', value: '100% Resolved in SLA', tone: 'teal' },
  { label: 'Commitment Evidence', value: 'Log Signed (SHA-256)', tone: 'blue' },
  { label: 'Accessibility Outcome', value: 'EN/ES Captions Certified' },
  { label: 'Recording / Replay Outcome', value: 'VOD Packaged within 4h' },
  { label: 'Operational Lessons', value: '1 Advisory recorded', tone: 'amber' },
];

const toneStyles: Record<NonNullable<CloseoutMetric['tone']>, string> = {
  teal: 'text-teal-500',
  blue: 'text-blue-500',
  amber: 'text-amber-500',
};

export default function EvidenceCloseoutSection() {
  return (
    <section className="w-full bg-gray-50 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Evidence and closeout.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Assured Event secures permanent operational records, ensuring you have deterministic proof
          of SLA compliance and delivery metrics.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-5 sm:p-6 bg-white rounded-2xl border border-blue-500 flex flex-col gap-5">
        <div className="w-full flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/assured-event/archive.svg"
                alt=""
                aria-hidden
                className="w-4 h-4"
              />
            </span>
            <div className="flex flex-col">
              <h3 className="text-zinc-950 text-base font-bold">
                Event Closeout &amp; Evidence Certificate
              </h3>
              <span className="text-slate-500 text-xs">
                ID: ARCH-2025-0815 &bull; Summer Music Festival
              </span>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-emerald-900 rounded-full text-teal-400 text-[10px] font-bold uppercase tracking-wider">
            Certified Closeout
          </span>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {closeoutMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1"
            >
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                {metric.label}
              </span>
              <span
                className={`text-sm font-bold ${metric.tone ? toneStyles[metric.tone] : 'text-zinc-950'}`}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="self-start px-5 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/assured-event/download.svg"
            alt=""
            aria-hidden
            className="w-4 h-4 brightness-0 invert"
          />
          Export Cryptographic Evidence Package
        </button>
      </div>
    </section>
  );
}
