'use client';

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Prepare',
    description:
      'Source resources & active viewer context maps are initialized prior to transmission.',
  },
  {
    number: '02',
    title: 'Request',
    description:
      'Playback attempt context payload is submitted to the central authorization endpoint.',
  },
  {
    number: '03',
    title: 'Evaluate',
    description:
      'Evaluated synchronously against policy parameters, geo-fences, and temporal windows.',
  },
  {
    number: '04',
    title: 'Decide',
    description:
      'Decision outcome state (Allowed, Denied, etc.) resolved with secure crypto signatures.',
  },
  {
    number: '05',
    title: 'Initialize',
    description:
      'Client player or session parses authorized token and requests CDN stream segments.',
  },
  {
    number: '06',
    title: 'Refresh',
    description:
      'Periodic heartbeat tokens re-verify active eligibility to sustain playback seamlessly.',
  },
  {
    number: '07',
    title: 'End',
    description:
      'Active session explicitly terminates or reaches hard temporal expiry parameters.',
  },
  {
    number: '08',
    title: 'Evidence',
    description:
      'Immutable forensic ledger logs the closed transaction path for organizational auditing.',
  },
];

export default function LifecycleSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200 bg-white">
      <img
        src="/images/platform-secure-playback/lifecycle-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Playback Request Lifecycle
          </h2>
          <p className="max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
            Make request and decision state explicit so retry, expiration, and unknown
            outcomes are safe.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="flex flex-col gap-3 rounded-xl border-[1.5px] border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-[100px] bg-gradient-to-b from-teal-400 to-blue-500 text-xs font-bold text-white">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              </div>

              <p className="text-xs leading-5 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
