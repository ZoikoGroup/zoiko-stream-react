'use client';

interface BoundaryRow {
  need: string;
  owner: string;
}

const ROWS: BoundaryRow[] = [
  { need: '1. Authenticate application/user', owner: 'DEVELOPERS AUTH / ACCESS CONTROL' },
  { need: '2. Request playback authorization', owner: 'SECURE PLAYBACK TECHNICAL DOCS / API' },
  { need: '3. Initialize player', owner: 'DEVELOPERS PLAYER INTEGRATION' },
  { need: '4. Handle denial/expiry', owner: 'ERROR HANDLING / SECURE PLAYBACK DOCS' },
  { need: '5. Refresh/revoke', owner: 'SECURE PLAYBACK DOCS' },
  { need: '6. Protect artifacts/secrets', owner: 'SECURITY / AUTHENTICATION DOCS' },
  { need: '7. Observe events/analytics', owner: 'WEBHOOKS / ANALYTICS API' },
  { need: '8. Check compatibility', owner: 'PLAYER SUPPORT DOCUMENTATION' },
];

export default function DeveloperBoundarySection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-800 bg-gray-950">
      <img
        src="/images/platform-secure-playback/dev-boundary-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-gray-950/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Developer Implementation Boundary
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-400">
            Orient technical users to real implementation authority without forking
            documentation.
          </p>
        </div>

        <div className="mt-12">
          {/* Column headings */}
          <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wide text-slate-400">
              Developer need
            </span>
            <span className="hidden font-mono text-xs font-bold uppercase tracking-wide text-slate-400 sm:block">
              Authoritative owner
            </span>
          </div>

          {/* Rows */}
          {ROWS.map((row) => (
            <div
              key={row.need}
              className="flex flex-col gap-3 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-base font-bold text-white">{row.need}</span>

              <span className="inline-flex w-fit max-w-full rounded border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 font-mono text-[11px] font-bold uppercase leading-5 tracking-wide text-blue-300 sm:shrink-0 sm:text-xs">
                {row.owner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
