import React from 'react';

const imgBg = "/images/webhooks/diagnostics-background.webp";

const telemetry = [
  { label: 'Event Name', value: 'stream.status.changed' },
  { label: 'Event ID', value: 'evt_synthetic_abc123' },
  { label: 'Delivery ID', value: 'del_synthetic_xyz789' },
  { label: 'Attempt Time', value: '2026-09-08T14:32:00Z' },
  { label: 'Response Status', value: '200 OK', highlight: true },
  { label: 'Retry Count', value: '0' },
];

const notes = [
  {
    title: 'Safe Identifiers',
    description: 'Share opaque event and delivery IDs. Never share secrets, signatures, or full payload body.',
    icon: (
      <>
        <circle cx="7" cy="7" r="5" strokeWidth="1.6" />
        <path d="M4.8 4.8l4.4 4.4" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Platform Health',
    description: 'Current incidents route to System Status. Protocol docs are not operational dashboards.',
    icon: <path d="M1.5 7h3l1.5-4 2 8 1.5-4h3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'Support Path',
    description: 'Developer support with redacted metadata and explicit secret-exclusion guidance.',
    icon: (
      <>
        <circle cx="7" cy="7" r="5" strokeWidth="1.6" />
        <path d="M5.6 5.4a1.5 1.5 0 112 1.4v.9" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7" cy="10" r="0.7" fill="#4c86ff" stroke="none" />
      </>
    ),
  },
];

export default function ObservabilitySection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Observability-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Delivery observability and diagnostics
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Safe delivery metadata for troubleshooting — without exposing secrets, payloads, or customer data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
          <div className="bg-[#181b21] flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full" data-name="Telemetry-Card">
            <p className="font-sans font-bold text-[#f1f5f9] text-[16px]">Telemetry Diagnostics</p>
            <div className="flex flex-col w-full">
              {telemetry.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-[#1e2530] border-solid flex flex-wrap gap-2 justify-between items-center py-[14px] w-full last:border-b-0"
                >
                  <span className="font-sans font-normal text-[#94a3b8] text-[12px]">{row.label}</span>
                  <span className={`font-mono font-normal text-[12px] break-all min-w-0 ${row.highlight ? 'text-[#00d4aa]' : 'text-[#f1f5f9]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            {notes.map((note) => (
              <div
                key={note.title}
                className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex gap-[16px] items-start p-[20px] rounded-[12px] w-full"
              >
                <div className="bg-[rgba(76,134,255,0.1)] flex items-center justify-center rounded-[8px] size-[28px] shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" stroke="#4c86ff" className="size-[14px]" aria-hidden>
                    {note.icon}
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px] items-start">
                  <p className="font-sans font-bold text-[#0a0d13] text-[15px]">{note.title}</p>
                  <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px]">{note.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
