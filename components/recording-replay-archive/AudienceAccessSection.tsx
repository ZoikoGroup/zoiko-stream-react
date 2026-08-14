interface Bullet {
  label: string;
  text: string;
}

interface AccessCardData {
  icon: string;
  title: string;
  bgImage: string;
  overlay: string | null;
  hiddenBgImage?: string;
  description: string;
  bullets: Bullet[] | null;
  statusLabel: string;
  statusScheme: 'teal' | 'blue' | 'amber';
  minHeightClass?: string;
  transparentCard?: boolean;
}

const statusStyles: Record<AccessCardData['statusScheme'], { bg: string; color: string }> = {
  teal: { bg: '#f0fdf4', color: '#33d9c7' },
  blue: { bg: '#eef2ff', color: '#4c86ff' },
  amber: { bg: '#fffbeb', color: '#f3b65e' },
};

const cards: AccessCardData[] = [
  {
    icon: '/images/recording-replay-archive/audience-access/icon-circle-x.svg',
    title: 'Public access',
    bgImage: '/images/recording-replay-archive/audience-access/card-public-access.png',
    overlay: 'rgba(23,27,34,0.79)',
    description: 'Open stream routers with default global CDN caching.',
    bullets: [
      { label: 'Global:', text: ' Anyone can watch with no authentication required.' },
      { label: 'Cache:', text: ' CDN edge caching enabled for fast global delivery.' },
    ],
    statusLabel: 'ACTIVE',
    statusScheme: 'teal',
    minHeightClass: 'lg:h-[312px]',
  },
  {
    icon: '/images/recording-replay-archive/audience-access/icon-arrow-right-left.svg',
    title: 'Authenticated',
    bgImage: '/images/recording-replay-archive/audience-access/card-authenticated.png',
    overlay: null,
    description: 'Strict SAML 2.0 / OIDC enterprise portal gating.',
    bullets: null,
    statusLabel: 'SSO REQUIRED',
    statusScheme: 'blue',
    minHeightClass: 'lg:h-[312px]',
  },
  {
    icon: '/images/recording-replay-archive/audience-access/icon-calendar-range.svg',
    title: 'Invited',
    bgImage: '/images/recording-replay-archive/audience-access/card-invited.png',
    overlay: null,
    description: 'Custom single-use secure tokens with mandatory email validation.',
    bullets: [
      { label: 'Single-use:', text: ' Token expires after first successful login.' },
      { label: 'Email:', text: ' Validation required before access is granted.' },
    ],
    statusLabel: 'TOKEN REQUIRED',
    statusScheme: 'teal',
    minHeightClass: 'lg:h-[312px]',
  },
  {
    icon: '/images/recording-replay-archive/audience-access/icon-key-round.svg',
    title: 'Entitlement-based',
    bgImage: '/images/recording-replay-archive/audience-access/card-entitlement.png',
    overlay: 'rgba(23,27,34,0.73)',
    description: 'Integrated ticket, purchase, or paywall status checks.',
    bullets: null,
    statusLabel: 'RULES PENDING',
    statusScheme: 'amber',
    minHeightClass: 'lg:h-[304px]',
  },
  {
    icon: '/images/recording-replay-archive/audience-access/icon-shield.svg',
    title: 'Private/Controlled',
    bgImage: '/images/recording-replay-archive/audience-access/card-private-controlled.png',
    overlay: null,
    hiddenBgImage: '/images/recording-replay-archive/audience-access/card-private-controlled-hidden.png',
    description: 'Custom SSO groups and role-based replay access rules.',
    bullets: [
      { label: 'Groups:', text: ' SAML groups define who can reach the replay.' },
      { label: 'Roles:', text: ' Role-based access controls enforce replay visibility.' },
    ],
    statusLabel: 'SSO GROUPS',
    statusScheme: 'blue',
    minHeightClass: 'lg:h-[304px]',
    transparentCard: true,
  },
  {
    icon: '/images/recording-replay-archive/audience-access/icon-alert-circle.svg',
    title: 'Mixed/Needs review',
    bgImage: '/images/recording-replay-archive/audience-access/card-mixed-review.png',
    overlay: 'rgba(23,27,34,0.72)',
    description: 'Multiple rules are active; review the final authorization flow.',
    bullets: [
      { label: 'Review:', text: ' Confirm the final audience path before publish.' },
      { label: 'Override:', text: ' Explicit operator sign-off may be required.' },
    ],
    statusLabel: 'REVIEW REQUIRED',
    statusScheme: 'amber',
    minHeightClass: 'lg:h-[304px]',
    transparentCard: true,
  },
];

function AccessCard({ card }: { card: AccessCardData }) {
  const status = statusStyles[card.statusScheme];

  return (
    <div
      className={`relative flex flex-col gap-5 items-start p-8 rounded-xl border border-[#e5e7eb] overflow-hidden ${
        card.minHeightClass ?? ''
      } ${card.transparentCard ? '' : 'bg-[#f9fafb]'}`}
    >
      {/* Hidden decorative fallback layer (kept for parity with source; visually covered) */}
      {card.hiddenBgImage && (
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
          <img
            alt=""
            src={card.hiddenBgImage}
            className="absolute max-w-none object-cover opacity-40 size-full"
          />
          <div className="absolute inset-0 bg-[#f9fafb]" />
        </div>
      )}

      {/* Card background image + optional dark scrim */}
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
        <img alt="" src={card.bgImage} className="absolute max-w-none object-cover size-full" />
        {card.overlay && <div className="absolute inset-0" style={{ backgroundColor: card.overlay }} />}
      </div>

      {/* Title row */}
      <div className="relative flex gap-3 items-center w-full">
        <div className="flex items-start p-2 rounded-lg bg-white border border-[#e5e7eb] shrink-0">
          <img alt="" src={card.icon} className="size-5" />
        </div>
        <p className="font-bold text-white text-xl whitespace-nowrap">{card.title}</p>
      </div>

      {/* Details */}
      <div className="relative flex flex-col gap-3 items-start w-full">
        <p className="text-[#eef1f6] text-[14.5px] leading-[22px] w-full">{card.description}</p>

        {card.bullets && (
          <div className="flex flex-col gap-2 items-start w-full text-[13.5px]">
            {card.bullets.map((bullet) => (
              <p key={bullet.label} className="text-white w-full">
                <span>{'• '}</span>
                <span className="font-bold">{bullet.label}</span>
                <span>{bullet.text}</span>
              </p>
            ))}
          </div>
        )}

        <div
          className="flex gap-2.5 items-center p-3 rounded-md w-full border"
          style={{ backgroundColor: status.bg, borderColor: status.color }}
        >
          <div className="rounded shrink-0 size-2" style={{ backgroundColor: status.color }} />
          <p className="font-mono font-bold text-xs whitespace-nowrap" style={{ color: status.color }}>
            {card.statusLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AudienceAccessSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-14 items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat border-t border-b border-[#e5e7eb]"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/audience-access/section-bg.png')`,
      }}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#111827] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Control who watches, when, and how.
        </h2>
        <p className="text-[#374151] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          Live-to-replay transition is a deliberate policy decision, not an automatic handoff. Configure precise, secure access conditions before your event is published.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <AccessCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
