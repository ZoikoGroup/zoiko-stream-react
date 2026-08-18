interface ScopeCategory {
  id: string;
  label: string;
  detail: string;
  owner: string;
  state: 'Verified' | 'Action Required';
}

interface EvidenceLog {
  time: string;
  message: string;
}

const scopeCategories: ScopeCategory[] = [
  {
    id: 'S1',
    label: 'Event Context',
    detail: 'Concert parameters locked',
    owner: 'Sarah K',
    state: 'Verified',
  },
  {
    id: 'S2',
    label: 'Audience Gate',
    detail: 'SAML Integration ready',
    owner: 'Alex T',
    state: 'Verified',
  },
  {
    id: 'S3',
    label: 'Ingest Source',
    detail: 'Backup latency needs test',
    owner: 'John D',
    state: 'Action Required',
  },
  {
    id: 'S4',
    label: 'Access & Privacy',
    detail: 'Retention policies defined',
    owner: 'Maya W',
    state: 'Verified',
  },
];

const evidenceLogs: EvidenceLog[] = [
  { time: '14:32', message: 'Main endpoint ping stable at 24ms' },
  { time: '13:05', message: 'SSL handshake verified (SHA-256)' },
  { time: '11:15', message: 'Backup channel configuration logged' },
];

const stateStyles: Record<ScopeCategory['state'], string> = {
  Verified: 'bg-emerald-900 text-teal-400',
  'Action Required': 'bg-amber-900 text-amber-500',
};

export default function ControlCenterSection() {
  return (
    <section className="relative w-full bg-white border-b border-slate-200 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[100px] top-[525px] w-[700px] h-96 opacity-10 bg-teal-400 rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Built on operational truth, not marketing promises.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Real-time planning configuration mapping scope validation status and blockers before they
          reach live air.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 bg-teal-400 rounded-md flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/assured-event/box.svg"
                alt=""
                aria-hidden
                className="w-[11px] h-[11px]"
              />
            </span>
            <h3 className="text-zinc-950 text-sm sm:text-base font-bold">
              Assured Event Control Center &mdash; Summer Music Festival 2025
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-500 text-xs font-bold">Critical Blockers (2)</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col lg:flex-row items-start gap-6">
          {/* Verified scope categories */}
          <div className="flex-1 w-full flex flex-col gap-4">
            <h4 className="text-zinc-950 text-base font-bold">Verified Scope Categories</h4>
            <div className="w-full bg-slate-200 rounded-lg flex flex-col gap-px overflow-hidden">
              {scopeCategories.map((row) => (
                <div
                  key={row.id}
                  className="w-full p-4 bg-white flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <span className="w-full sm:w-44 text-zinc-950 text-sm font-bold shrink-0">
                    {row.id} {row.label}
                  </span>
                  <span className="flex-1 text-slate-600 text-xs">{row.detail}</span>
                  <span className="w-full sm:w-24 text-slate-600 text-xs shrink-0">{row.owner}</span>
                  <span
                    className={`self-start px-2.5 py-1 rounded-full text-xs font-bold shrink-0 ${stateStyles[row.state]}`}
                  >
                    {row.state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-launch evidence */}
          <div className="w-full lg:w-96 shrink-0 flex flex-col gap-4">
            <h4 className="text-zinc-950 text-base font-bold">Pre-Launch Evidence</h4>
            <div className="w-full flex flex-col gap-2">
              {evidenceLogs.map((log) => (
                <div
                  key={log.time}
                  className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-1"
                >
                  <div className="w-full flex justify-between items-start">
                    <span className="text-teal-400 text-xs font-medium">SYSTEM LOG</span>
                    <span className="text-slate-600 text-xs">{log.time}</span>
                  </div>
                  <span className="text-zinc-950 text-xs">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
