'use client';

interface State {
  name: string;
  description: string;
  dot: string;
}

const STATES: State[] = [
  { name: 'Not Evaluated', description: 'No authoritative policy check has been performed.', dot: 'bg-gray-500' },
  { name: 'Expired', description: 'Previously legitimate authority window has elapsed.', dot: 'bg-amber-500' },
  { name: 'Evaluating', description: 'Decision engine processes the policy inputs.', dot: 'bg-blue-500' },
  { name: 'Revoked', description: 'Authority parameters manually terminated by administrators.', dot: 'bg-red-500' },
  { name: 'Authorized', description: 'Playback permitted within full configured parameters.', dot: 'bg-emerald-500' },
  { name: 'Unavailable', description: 'Target resource is currently offline or unreachable.', dot: 'bg-gray-500' },
  { name: 'Limited', description: 'Playback allowed only with strict localized constraints.', dot: 'bg-amber-500' },
  { name: 'Conflict', description: 'Inconsistent directory policies or authority overlaps detected.', dot: 'bg-amber-500' },
  { name: 'Denied', description: 'Active evaluation policy strictly rejects playback request.', dot: 'bg-red-500' },
  { name: 'Unknown', description: 'State evaluation criteria failed to produce a valid outcome.', dot: 'bg-gray-500' },
];

export default function AuthorizationStateSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950">
      <img
        src="/images/platform-secure-playback/authorization-states-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Authorization State Model
          </h2>
          <p className="max-w-4xl text-base leading-7 text-slate-400 sm:text-lg">
            Design every meaningful state so denied, expired, unavailable, and unknown
            cannot collapse into a generic error.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-14">
          {STATES.map((state) => (
            <article
              key={state.name}
              className="flex items-center gap-4 rounded-lg border border-gray-800 bg-zinc-900 p-5"
            >
              <span className={`size-2.5 shrink-0 rounded-full ${state.dot}`} />

              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-bold text-white">{state.name}</h3>
                <p className="text-xs text-slate-400">{state.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
