interface Stage {
  number: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  { number: '01', title: 'Scope Room', description: 'Set membership parameters and boundaries.' },
  {
    number: '02',
    title: 'Confirm Access',
    description: 'Select and audit authorized entry credentials.',
  },
  {
    number: '03',
    title: 'Prepare Directory',
    description: 'Sync corporate user databases securely.',
  },
  { number: '04', title: 'Verify Gate', description: 'Simulate and stress-test the viewer gateway.' },
  { number: '05', title: 'Go-Live Review', description: 'Final policy approval by administrators.' },
  { number: '06', title: 'Operate', description: 'Deliver live stream with active session checks.' },
  {
    number: '07',
    title: 'Close & Replay',
    description: 'Enforce separate policy bounds on archive.',
  },
];

export default function LifecycleSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.4), rgba(9, 9, 11, 0.4)), url('/images/private-streaming/lifecycle-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          From scope to closure &mdash; every stage is visible.
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {stages.map((stage) => (
          <article
            key={stage.number}
            className="p-5 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-3"
          >
            <div className="w-full flex justify-between items-center">
              <span className="text-teal-400 text-lg font-bold font-mono">{stage.number}</span>
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
            </div>
            <h3 className="text-slate-100 text-base font-bold">{stage.title}</h3>
            <p className="text-slate-400 text-xs leading-4">{stage.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
