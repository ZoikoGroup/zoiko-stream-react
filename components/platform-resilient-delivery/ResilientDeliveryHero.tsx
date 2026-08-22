'use client';

interface FlowStep {
  label: string;
  status: string;
  accent: string;
}

const FLOW: FlowStep[] = [
  { label: '1. Normal Path', status: 'ACTIVE', accent: 'outline-teal-400 text-teal-400' },
  {
    label: '2. Degraded State Detected',
    status: 'OBSERVED',
    accent: 'outline-amber-500 text-amber-500',
  },
  {
    label: '3. Recovery & Reroute',
    status: 'ENGAGED',
    accent: 'outline-blue-500 text-blue-500',
  },
  {
    label: '4. Verified Outcome',
    status: 'SECURED',
    accent: 'outline-emerald-500 text-emerald-500',
  },
];

export default function ResilientDeliveryHero() {
  return (
    <section className="relative isolate w-full border-b border-gray-800 bg-slate-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/platform-resilient-delivery/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-28 xl:px-28">
        <div className="flex flex-col items-start gap-8">
          <span className="rounded-[100px] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-teal-400 outline-1 -outline-offset-1 outline-teal-400">
            Resilient Delivery
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Plan for delivery when conditions change or fail
          </h1>

          <p className="text-base leading-8 text-slate-400 lg:text-xl">
            Resilient Delivery explains how ZoikoStream handles supported delivery
            failure scenarios: what can be observed, which recovery or fallback paths
            may be available, how outcomes are verified, and where current service
            state and evidence live.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-teal-400 to-blue-500 px-7 py-3.5 text-base font-bold text-slate-950">
              Explore resilience model
            </span>

            <span className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-bold text-white outline-1 -outline-offset-1 outline-slate-400">
              System Status →
            </span>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-zinc-900/80 p-6 outline-[1.5px] -outline-offset-[1.5px] outline-gray-800 sm:p-8">
          <h2 className="text-center text-lg font-bold text-white">
            RECOVERY STATE FLOW
          </h2>

          <ol className="mt-5 flex flex-col gap-3">
            {FLOW.map((step) => (
              <li
                key={step.label}
                className={`flex items-center justify-between gap-4 rounded-lg p-3 outline-1 -outline-offset-1 ${step.accent}`}
              >
                <span className="text-sm font-semibold text-white">{step.label}</span>
                <span className="font-mono text-xs">{step.status}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
