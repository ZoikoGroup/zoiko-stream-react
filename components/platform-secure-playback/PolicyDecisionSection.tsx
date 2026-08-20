'use client';

interface Stage {
  label: string;
  description: string;
}

const STAGES: Stage[] = [
  { label: '01. Request', description: 'Identity & target media ID requested.' },
  { label: '02. Inputs', description: 'Active context, player, environment & geography.' },
  { label: '03. Engine', description: 'Policy parameters evaluated against active rules.' },
  { label: '04. Decision', description: 'Allow, Deny, Expired, or Limited state.' },
  { label: '05. Response', description: 'Player load, secure token & cryptographic audit trail.' },
];

export default function PolicyDecisionSection() {
  return (
    <section
      id="playback-policy-model"
      className="relative w-full scroll-mt-24 overflow-hidden border-y border-gray-800 bg-gray-950"
    >
      <img
        src="/images/platform-secure-playback/policy-decision-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Playback Policy &amp; Decision Model
          </h2>
          <p className="max-w-4xl text-base leading-7 text-slate-400 sm:text-lg">
            See how a playback decision is formed conceptually while keeping internal
            rule logic private.
          </p>
        </div>

        <ol className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {STAGES.map((stage, index) => (
            <li key={stage.label} className="contents">
              <div className="flex-1 rounded-[10px] border border-gray-800 bg-zinc-900 p-5">
                <p className="text-sm font-bold uppercase text-teal-400">
                  {stage.label}
                </p>
                <p className="mt-2.5 text-xs leading-5 text-slate-400">
                  {stage.description}
                </p>
              </div>

              {index < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-auto h-6 w-0.5 shrink-0 bg-teal-400 lg:h-0.5 lg:w-6"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
