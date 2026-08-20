'use client';

interface ReceiptRow {
  label: string;
  value: string;
  valueClass: string;
}

const RECEIPT_ROWS: ReceiptRow[] = [
  {
    label: 'Decision Reference',
    value: 'urn:zoiko:decision:4b8c9d2f',
    valueClass: 'text-teal-400',
  },
  {
    label: 'Resource Context',
    value: 'stream:live_pay_per_view_event_8f',
    valueClass: 'text-slate-300',
  },
  {
    label: 'Policy Version/State',
    value: 'Policy: corporate-internal-restrict',
    valueClass: 'text-slate-300',
  },
  {
    label: 'Decision Result',
    value: 'AUTHORIZED (Allow)',
    valueClass: 'text-emerald-400',
  },
  {
    label: 'Timestamp/Freshness',
    value: '2026-03-20T13:04:12Z / Exp 2hr',
    valueClass: 'text-slate-300',
  },
  {
    label: 'Reason Category',
    value: 'OIDC_WHITELIST_MATCH',
    valueClass: 'text-slate-300',
  },
  {
    label: 'Authority/Evidence Source',
    value: 'urn:zoiko:registry:issuer-primary',
    valueClass: 'text-slate-300',
  },
  {
    label: 'Change History',
    value: 'None (Durable Grant)',
    valueClass: 'text-slate-300',
  },
];

export default function AuditabilitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src="/images/platform-secure-playback/auditability-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Evidence, Auditability &amp; Decision Records
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-600">
            Make secure-playback trust reconstructable without leaking audience
            identities, artifacts, or sensitive policy.
          </p>
        </div>

        {/* Audit receipt */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-gray-950 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold text-white">
                  Cryptographic Audit Receipt #7E9C
                </h3>
                <span className="rounded bg-slate-700 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-slate-300">
                  Playback Record
                </span>
              </div>

              <p className="mt-1.5 break-all font-mono text-xs text-slate-400">
                ID: urn:zoiko:playback:7e9c321a-46fe-88e1-f4e2bb5a48d90
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 rounded-[100px] bg-teal-400/15 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-teal-300 ring-1 ring-teal-400/40">
              Verified Playback Decision
            </span>
          </div>

          {/* Rows */}
          <div className="mt-6 overflow-x-auto">
            <dl className="min-w-[520px] rounded-lg bg-slate-800/60">
              {RECEIPT_ROWS.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-6 px-5 py-3.5 ${
                    index !== RECEIPT_ROWS.length - 1
                      ? 'border-b border-white/5'
                      : ''
                  }`}
                >
                  <dt className="text-sm text-slate-300">{row.label}</dt>
                  <dd
                    className={`text-right font-mono text-sm ${row.valueClass}`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
