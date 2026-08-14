interface OptionCard {
  title: string;
  badgeLabel: string;
  badgeColor: string;
  description: string;
}

const options: OptionCard[] = [
  {
    title: 'Live Only',
    badgeLabel: 'CONFIRMED',
    badgeColor: '#4c86ff',
    description: 'This event is planned as live-only.',
  },
  {
    title: 'Recording Requested',
    badgeLabel: 'PENDING',
    badgeColor: '#f3b65e',
    description: 'Recording requested - confirmation required.',
  },
  {
    title: 'Recording Configured',
    badgeLabel: 'CONFIGURED',
    badgeColor: '#10b981',
    description: 'Do not claim success before capture.',
  },
  {
    title: 'Replay Requested',
    badgeLabel: 'GATE ACTIVE',
    badgeColor: '#f3b65e',
    description: 'Audience/access/accessibility still need review.',
  },
  {
    title: 'Archive Request',
    badgeLabel: 'UNDER REVIEW',
    badgeColor: '#707a8c',
    description: 'No retention promise until policy confirmed.',
  },
  {
    title: 'Unsure/Needs Review',
    badgeLabel: 'ACTION NEEDED',
    badgeColor: '#ef4444',
    description: 'Keep uncertainty visible on the dashboard.',
  },
];

export default function ArchitectureSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#232b3a] flex flex-col gap-14 items-start px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-25">
      {/* Base section background image (hidden beneath solid fill, kept for parity with source) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src="/images/recording-replay-archive/architecture/section-bg-base.png"
          className="absolute max-w-none object-cover opacity-30 size-full"
        />
        <div className="absolute inset-0 bg-[#0a0d13]" />
      </div>

      {/* ArchitectureBg overlay: visible background image + dark scrim */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src="/images/recording-replay-archive/architecture/section-bg-overlay.png"
          className="absolute max-w-none object-cover size-full"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.75)]" />
      </div>

      {/* Section header */}
      <div className="relative flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Every event starts with an explicit decision
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          Our architecture prevents default assumptions. Select the post-event intention directly inside the planning brief.
        </p>
      </div>

      {/* Options grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {options.map((option) => (
          <div
            key={option.title}
            className="flex flex-col gap-4 items-start p-6 rounded-xl border border-[#232b3a] bg-[#10151e]"
          >
            <div className="flex items-center justify-between w-full">
              <p className="font-bold text-[#eef1f6] text-base">{option.title}</p>
              <div
                className="flex items-start px-2 py-1 rounded shrink-0 bg-[rgba(28,46,71,0.94)] border"
                style={{ borderColor: option.badgeColor }}
              >
                <p className="font-mono font-bold text-[10px] whitespace-nowrap" style={{ color: option.badgeColor }}>
                  {option.badgeLabel}
                </p>
              </div>
            </div>
            <p className="text-[#aab3c4] text-[13px] leading-[18px] w-full">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
