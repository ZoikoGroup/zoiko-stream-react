interface ReadinessRow {
  title: string;
  description: string;
  state: string;
  variant: 'current' | 'partial' | 'revalidate';
}

interface InstanceRow {
  label: string;
  value: string;
  highlight?: boolean;
}

const readinessRows: ReadinessRow[] = [
  {
    title: 'Room Policy',
    description: 'Access bounds, time scopes and security compliance metrics enforced',
    state: 'CURRENT',
    variant: 'current',
  },
  {
    title: 'Membership Source',
    description: 'Corporate directory and user metadata synchronized with gate',
    state: 'CURRENT',
    variant: 'current',
  },
  {
    title: 'Access Credentials',
    description: 'SAML assertion config or custom token parameters',
    state: 'PARTIAL',
    variant: 'partial',
  },
  {
    title: 'Gate Verification',
    description: 'Required periodic check during viewing active windows',
    state: 'REVALIDATION REQ',
    variant: 'revalidate',
  },
];

const instanceRows: InstanceRow[] = [
  { label: 'Authorized Members', value: '14,230 accounts synced', highlight: true },
  { label: 'Configured Gate Type', value: 'SAML Single Sign-On' },
  { label: 'Active Ingest Points', value: 'Primary + Secondary Backup' },
];

const stateStyles: Record<ReadinessRow['variant'], string> = {
  current: 'bg-emerald-500/10 text-emerald-500',
  partial: 'bg-orange-300/10 text-orange-300',
  revalidate: 'bg-red-500/10 text-red-500',
};

export default function RoomControlPanelSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          See your private room before you commit.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Enterprise-grade room operations &mdash; not a generic padlock.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl bg-zinc-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden">
        <div className="p-4 sm:p-6 bg-zinc-900 border-b border-gray-800 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-orange-300 rounded-full" />
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">ZOIKOSTREAM</span>
              <span className="text-slate-500">/</span>
              <span className="text-teal-400 font-bold">PRIVATE ROOM CONTROL</span>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-orange-300/10 rounded-sm text-orange-300 text-xs font-bold uppercase">
            Needs review
          </span>
        </div>

        <div className="p-4 sm:p-6 flex flex-col lg:flex-row items-start gap-6">
          <div className="flex-1 w-full flex flex-col gap-3">
            <h3 className="text-slate-100 text-sm font-bold">ROOM ACCESS READINESS STATUS</h3>
            {readinessRows.map((row) => (
              <div
                key={row.title}
                className="w-full p-4 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-wrap justify-between items-center gap-3"
              >
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <span className="text-slate-100 text-sm font-bold">{row.title}</span>
                  <span className="text-slate-400 text-xs">{row.description}</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-sm text-xs font-bold uppercase shrink-0 ${stateStyles[row.variant]}`}
                >
                  {row.state}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-96 shrink-0 p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-5">
            <h3 className="text-slate-100 text-base font-bold">ROOM INSTANCE DETECTED</h3>
            <div className="w-full flex flex-col gap-3">
              {instanceRows.map((row) => (
                <div key={row.label} className="w-full flex justify-between items-start gap-3">
                  <span className="text-slate-400 text-xs">{row.label}</span>
                  <span
                    className={`text-xs font-mono text-right ${row.highlight ? 'text-teal-400' : 'text-slate-100'}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="w-full h-24 rounded-lg bg-zinc-950 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/private-streaming/wave.png')` }}
              role="presentation"
            />
            <p className="text-slate-500 text-xs">
              Every room policy edit is digitally signed and audited against the target live
              configuration dynamically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
