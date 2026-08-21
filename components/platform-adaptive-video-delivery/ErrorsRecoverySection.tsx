'use client';

import SectionShell from './SectionShell';

interface FailureState {
  dot: string;
  title: string;
  description: string;
  route: string;
}

const STATES: FailureState[] = [
  {
    dot: 'bg-red-500',
    title: 'Unsupported media/environment',
    description:
      'Client player or browser runtime fails to satisfy required codecs or secure embed parameters.',
    route: 'READ COMPATIBILITY DOCUMENTATION / ACCESS SANDBOX',
  },
  {
    dot: 'bg-red-500',
    title: 'Authorization failure',
    description:
      'synchronous client session validation strictly denied by upstream corporate policies. Do not mislabel as network failure.',
    route: 'REVIEW SECURE PLAYBACK AUTHORIZATION MODEL',
  },
  {
    dot: 'bg-red-500',
    title: 'Network constrained',
    description:
      'Measured connection throughput dips below the minimum required delivery bitrate.',
    route: 'RETRY ACTION / ADAPTIVE FALLBACK PATH',
  },
  {
    dot: 'bg-red-500',
    title: 'Delivery degraded',
    description:
      'Live stream chunk transmission is experiencing edge packet loss or CDN origin latency spikes.',
    route: 'CHECK ZOIKOPLATFORM STATUS PAGE',
  },
  {
    dot: 'bg-red-500',
    title: 'No eligible path',
    description:
      'All qualified delivery tracks and secure player environments are currently unavailable for this context.',
    route: 'ROUTE TO SUPPORT / SYSTEM STEWARD',
  },
  {
    dot: 'bg-red-500',
    title: 'Unknown/conflict',
    description:
      'Telemetry reporting is stale or inconsistent policy overlapping configurations detected.',
    route: 'CONTACT SYSTEM ADMINISTRATOR',
  },
  {
    dot: 'bg-red-500',
    title: 'Recovery pending',
    description:
      'Delivery path recovery has been initiated, but cryptographic transaction outcome state is not yet confirmed.',
    route: 'RE-EVALUATE MUTABLE PLAYBACK EVIDENCE',
  },
  {
    dot: 'bg-gray-500',
    title: 'Service Incident',
    description: 'Central policy evaluation cluster or edge CDN servers unreachable.',
    route: 'CHECK STATUS PAGE',
  },
];

export default function ErrorsRecoverySection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-adaptive-video-delivery/errors-recovery-bg.png"
      title="Errors, degradation, and recovery"
      subtitle="Make loss of capability visible and actionable."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {STATES.map((state) => (
          <article
            key={state.title}
            className="flex flex-col gap-3 rounded-xl bg-slate-50 p-6 outline-1 -outline-offset-1 outline-slate-200"
          >
            <div className="flex items-center gap-2.5">
              <span className={`size-2.5 shrink-0 rounded-full ${state.dot}`} />
              <h3 className="text-base font-bold text-slate-900">{state.title}</h3>
            </div>

            <p className="text-sm leading-5 text-slate-600">{state.description}</p>

            <span className="font-mono text-xs font-bold text-teal-500">
              {state.route}
            </span>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-3 rounded-xl bg-emerald-50 px-6 py-5 outline-1 -outline-offset-1 outline-emerald-200">
        <img
          src="/images/platform-adaptive-video-delivery/info.svg"
          alt=""
          aria-hidden="true"
          className="size-5 shrink-0"
        />
        <p className="text-sm font-bold leading-6 text-slate-900">
          Unavailable and unknown are not embarrassing states to hide. They are
          necessary to prevent false confidence.
        </p>
      </div>
    </SectionShell>
  );
}
