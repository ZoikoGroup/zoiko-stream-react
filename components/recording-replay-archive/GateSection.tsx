interface GateRow {
  item: string;
  ready: string;
  fallback: string;
  bg: string | null;
}

const gateRows: GateRow[] = [
  {
    item: 'Capture truth',
    ready: 'Capture completed with exact length matched',
    fallback: 'Warn operator, review ingest logs for package drops',
    bg: null,
  },
  {
    item: 'Content review',
    ready: 'Event producer signed off on raw capture content',
    fallback: 'Hold replay, notify review inbox',
    bg: '/images/recording-replay-archive/gate/row-bg-content-review.png',
  },
  {
    item: 'Audience access',
    ready: 'SAML portal configurations locked',
    fallback: 'Lock stream, block public router immediately',
    bg: null,
  },
  {
    item: 'Accessibility',
    ready: 'Captions processed and safe-area checked',
    fallback: "Allow silent fallback, tag 'Audio Only'",
    bg: '/images/recording-replay-archive/gate/row-bg-accessibility.png',
  },
  {
    item: 'Rights/privacy',
    ready: 'Talent consents archived in catalog',
    fallback: 'Keep private, flag legal review needed',
    bg: '/images/recording-replay-archive/gate/row-bg-rights-privacy.png',
  },
  {
    item: 'Metadata/context',
    ready: 'Agenda timestamps and speaker credits matched',
    fallback: 'Apply raw placeholder timestamps',
    bg: '/images/recording-replay-archive/gate/row-bg-metadata.png',
  },
  {
    item: 'Publication state',
    ready: 'Manual or scheduled timing is armed',
    fallback: "Hold in 'Draft' workspace state",
    bg: '/images/recording-replay-archive/gate/row-bg-publication.png',
  },
  {
    item: 'Lifecycle',
    ready: 'Archive retention triggers configured',
    fallback: 'Assign Default 30-Day Purge',
    bg: '/images/recording-replay-archive/gate/row-bg-lifecycle.png',
  },
];

export default function GateSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#232b3a] flex flex-col gap-14 items-start px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-25">
      {/* Base section background image (hidden beneath solid fill, kept for parity with source) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src="/images/recording-replay-archive/gate/section-bg-base.png"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[#0a0d13]" />
      </div>

      {/* GateBg overlay: visible background image + light scrim */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src="/images/recording-replay-archive/gate/section-bg-overlay.png"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.22)]" />
      </div>

      {/* Section header */}
      <div className="relative flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Replay readiness gate
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          The gate operates as a sequential checklist. If any dependency is unresolved, we execute the defined fallback behavior immediately rather than risking raw exposure.
        </p>
      </div>

      {/* Gate table */}
      <div className="relative flex flex-col items-start w-full rounded-2xl border border-[#232b3a] overflow-hidden">
        {/* Table header */}
        <div className="hidden sm:flex gap-6 items-start w-full p-5 bg-[rgba(18,22,37,0.95)] border-b border-[#232b3a]">
          <p className="font-mono font-bold text-[#eef1f6] text-xs w-[180px] shrink-0">GATE ITEM</p>
          <p className="font-mono font-bold text-[#33d9c7] text-xs flex-1 min-w-0">READY CONDITION</p>
          <p className="font-mono font-bold text-[#f3b65e] text-xs flex-1 min-w-0">IF UNRESOLVED FALLBACK</p>
        </div>

        {gateRows.map((row) => (
          <div
            key={row.item}
            className="relative flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-center w-full p-5 border-b border-[#232b3a] last:border-b-0"
          >
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              {row.bg && (
                // eslint-disable-next-line @next/next/no-img-element
                <img alt="" src={row.bg} className="absolute max-w-none object-cover size-full" />
              )}
              <div className="absolute inset-0 bg-[rgba(16,21,30,0.97)]" />
            </div>

            <p className="relative font-bold text-[#eef1f6] text-sm w-full sm:w-[180px] shrink-0">
              {row.item}
            </p>

            <div className="relative flex flex-1 min-w-0 gap-2 items-center">
              <img
                alt=""
                src="/images/recording-replay-archive/gate/check-circle.svg"
                className="size-4 shrink-0"
              />
              <p className="flex-1 min-w-0 text-[#aab3c4] text-[13px]">{row.ready}</p>
            </div>

            <div className="relative flex flex-1 min-w-0 gap-2 items-center">
              <img
                alt=""
                src="/images/recording-replay-archive/gate/alert-circle-amber.svg"
                className="size-4 shrink-0"
              />
              <p className="flex-1 min-w-0 text-[#aab3c4] text-[13px]">{row.fallback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
