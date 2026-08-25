import Image from 'next/image';

const LADDER = [
  { label: 'Pending', desc: 'Job registered, awaiting GPU slot allocation.', color: '#9CA3AF' },
  { label: 'Ready', desc: 'Transcoder online, active ingest path verified.', color: '#10B981' },
  { label: 'Partial', desc: 'Backup stream active, primary packet loss detected.', color: '#F59E0B' },
  { label: 'Failed', desc: 'Stream aborted. Immediate recovery triggered.', color: '#EF4444' },
  { label: 'Unknown', desc: 'Handshake signature mismatch or stale ping state.', color: '#6B7280' },
  { label: 'Duplicate', desc: 'Redundant connection signature ignored.', color: '#3B82F6' },
  { label: 'Delayed', desc: 'CDN pop latency exceeding threshold limit.', color: '#8B5CF6' },
  { label: 'Recovering', desc: 'Rerouting traffic through secondary pop network.', color: '#34D4CA' },
  { label: 'Stale', desc: 'No heartbeats received for over 45 seconds.', color: '#4B5563' },
];

const CHECKLIST = [
  'Observe authoritative state via webhook callbacks',
  'Reconcile partial outcomes with background retries',
  'Handle unknown signatures safely with fallback rules',
  'Implement retry with idempotency tokens',
];

export default function AsyncStateSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/async-state/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.78)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Events, Async State &amp; Failure Handling — Build for Reality
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Success is a state transition, not just a 2xx. Architect resilient pipelines with explicit status
            handlers.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-[40px] xl:flex-row xl:items-start">
          {/* Async State Ladder */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[20px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-white">Async State Ladder</p>
            <div className="flex w-full flex-col items-start gap-[12px]">
              {LADDER.map((item) => (
                <div key={item.label} className="flex w-full items-center gap-[12px]">
                  <span
                    className="size-[8px] shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex min-w-px flex-1 flex-col items-start gap-[2px]">
                    <p className="text-[13px] font-bold leading-normal text-white">{item.label}</p>
                    <p className="w-full font-inter text-[12px] font-normal leading-normal text-[#aab3c4]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Handling Matrix */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#232b3a] bg-[#10151e] p-[32px] xl:w-[440px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-white">Event Handling Matrix</p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex w-full items-start gap-[12px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/developers-overview/async-state/icon-check.svg"
                    alt=""
                    className="mt-[1px] size-[16px] shrink-0"
                  />
                  <p className="min-w-px flex-1 font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-0 w-full border-t border-solid border-[#232b3a]" />

            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="text-[13px] font-bold leading-normal text-white">TELEMETRY TELEGRAM</p>
              <div className="relative h-[80px] w-full overflow-hidden rounded-[8px]">
                <Image
                  src="/images/developers-overview/async-state/telemetry.png"
                  alt=""
                  fill
                  className="pointer-events-none object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-start justify-center gap-[16px]">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
          >
            View Webhooks &amp; Events
          </button>
        </div>
      </div>
    </section>
  );
}
