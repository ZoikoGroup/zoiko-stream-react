type MethodState = 'AVAILABLE' | 'CONDITIONAL' | 'CONFIRMATION REQ';

interface AccessMethod {
  title: string;
  description: string;
  state: MethodState;
}

const methods: AccessMethod[] = [
  {
    title: 'Credentialed Room',
    description: 'Entry requires a supported credential or authorized access instrument.',
    state: 'AVAILABLE',
  },
  {
    title: 'Authenticated Room',
    description: 'Entry depends on supported authentication before authorization.',
    state: 'CONDITIONAL',
  },
  {
    title: 'Named / Recipient Room',
    description: 'Eligibility from an approved recipient/member directory list.',
    state: 'AVAILABLE',
  },
  {
    title: 'Organization-Controlled',
    description: 'Access directly linked to org-managed identity / authorization policy.',
    state: 'CONFIRMATION REQ',
  },
  {
    title: 'Time-Windowed Room',
    description: 'Entry allowed exclusively during configured access window.',
    state: 'AVAILABLE',
  },
  {
    title: 'Replay-Private Room',
    description: 'Replay has its own independent authorization model and window.',
    state: 'CONDITIONAL',
  },
];

const stateStyles: Record<MethodState, string> = {
  AVAILABLE: 'bg-emerald-500/10 text-emerald-500',
  CONDITIONAL: 'bg-orange-300/10 text-orange-300',
  'CONFIRMATION REQ': 'bg-red-500/10 text-red-500',
};

export default function AccessMethodsSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.3), rgba(9, 9, 11, 0.3)), url('/images/private-streaming/methods-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Access methods &mdash; verified, not assumed.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Every method shows its current state. No silent defaults.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {methods.map((method) => (
          <article
            key={method.title}
            className="p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4"
          >
            <div className="w-full flex justify-between items-center gap-3">
              <h3 className="text-slate-100 text-base lg:text-lg font-bold">{method.title}</h3>
              <span
                className={`px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase shrink-0 whitespace-nowrap ${stateStyles[method.state]}`}
              >
                {method.state}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-5">{method.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
