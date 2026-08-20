'use client';

interface ChangeMode {
  tag: string;
  tagClass: string;
  title: string;
  description: string;
}

const CHANGE_MODES: ChangeMode[] = [
  {
    tag: 'EXPIRY',
    tagClass: 'bg-amber-500/10 text-amber-500',
    title: 'Natural Expiry',
    description:
      'Authorization ceases gracefully after the pre-approved validity window elapses.',
  },
  {
    tag: 'RESOURCE',
    tagClass: 'bg-red-500/10 text-red-500',
    title: 'Resource State Change',
    description:
      'Media state changes to restricted, archived, or deleted instantly terminate key deliveries.',
  },
  {
    tag: 'POLICY',
    tagClass: 'bg-blue-500/10 text-blue-500',
    title: 'Policy Change',
    description:
      'A policy update evaluated on the fly immediately propagates to active and future playback pools.',
  },
  {
    tag: 'SECURITY',
    tagClass: 'bg-emerald-500/10 text-emerald-500',
    title: 'Security Response',
    description:
      'Anomalous behavior patterns trigger immediate playback block rules to protect content.',
  },
  {
    tag: 'ENTITLEMENT',
    tagClass: 'bg-teal-400/10 text-teal-400',
    title: 'Entitlement Shift',
    description:
      "Active directory group changes or role revoking recalculate the viewer's permission mid-stream.",
  },
  {
    tag: 'UNKNOWN',
    tagClass: 'bg-gray-500/10 text-gray-400',
    title: 'Unknown State',
    description:
      'Fallback protocols apply conservative deny rules when the current authority cannot be confirmed.',
  },
];

export default function ExpiryRevocationSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950">
      <img
        src="/images/platform-secure-playback/expiry-revocation-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Expiry, Revocation &amp; Mid-Playback Change
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-400">
            Define how authority can change after playback begins without inventing
            enforcement timing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-12">
          {CHANGE_MODES.map((mode) => (
            <article
              key={mode.tag}
              className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-zinc-900/80 p-6 sm:flex-row sm:items-center"
            >
              <span
                className={`inline-flex w-fit shrink-0 rounded-sm px-2 py-1 font-mono text-xs font-bold ${mode.tagClass}`}
              >
                {mode.tag}
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-7 text-white">
                  {mode.title}
                </h3>
                <p className="text-sm leading-5 text-slate-400">{mode.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
