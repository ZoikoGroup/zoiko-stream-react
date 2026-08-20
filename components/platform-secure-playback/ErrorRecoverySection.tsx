'use client';

interface ErrorClass {
  title: string;
  description: string;
  action: string;
  dot: string;
}

const ERROR_CLASSES: ErrorClass[] = [
  {
    title: 'Not Authenticated',
    description: 'Actor identity has not been verified by directory group policies.',
    action: 'RE-ROUTE TO OIDC FLOW',
    dot: 'bg-red-500',
  },
  {
    title: 'Not Entitled / Denied',
    description: 'Authentication succeeded but playback rights are strictly withheld.',
    action: 'CONTACT DEPT STEWARD',
    dot: 'bg-red-500',
  },
  {
    title: 'Expired / Revoked',
    description: 'Previously valid session key has reached hard temporal boundaries.',
    action: 'RE-EVALUATE CONTEXT',
    dot: 'bg-red-500',
  },
  {
    title: 'Invalid Request',
    description:
      'programmatic parameters fail structural or cryptographic integrity checks.',
    action: 'RESOLVE API VERSION',
    dot: 'bg-amber-500',
  },
  {
    title: 'Resource Offline',
    description: 'Target stream route is inactive or transition state is in progress.',
    action: 'CHECK WORKFLOW STATE',
    dot: 'bg-amber-500',
  },
  {
    title: 'Player Unsupported',
    description: 'Device capabilities or client browser fail to satisfy DRM rules.',
    action: 'VERIFY COMPATIBILITY',
    dot: 'bg-gray-500',
  },
  {
    title: 'Service Incident',
    description: 'Central policy evaluation cluster or edge CDN servers unreachable.',
    action: 'CHECK STATUS PAGE',
    dot: 'bg-gray-500',
  },
  {
    title: 'Unknown Outcome',
    description: 'State evaluation failure. Interrupted connection left unresolved.',
    action: 'RE-AUTHENTICATE SECURELY',
    dot: 'bg-gray-500',
  },
];

export default function ErrorRecoverySection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950">
      <img
        src="/images/platform-secure-playback/error-recovery-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Error, Denial &amp; Recovery Model
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-400">
            Give each error class a safe response without exposing security internals
            or encouraging unsafe retries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ERROR_CLASSES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border border-gray-800 bg-zinc-900/70 p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className={`size-2 shrink-0 rounded-full ${item.dot}`} />
                <h3 className="text-base font-bold text-white">{item.title}</h3>
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {item.description}
              </p>

              <p className="mt-4 font-mono text-xs tracking-wide text-teal-400">
                {item.action}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
