'use client';

interface ContextItem {
  title: string;
  description: string;
}

interface ContextColumn {
  eyebrow: string;
  eyebrowClass: string;
  heading: string;
  items: ContextItem[];
}

const COLUMNS: ContextColumn[] = [
  {
    eyebrow: 'REAL-TIME INGEST',
    eyebrowClass: 'text-teal-400',
    heading: 'Live Playback',
    items: [
      {
        title: 'Who may join?',
        description:
          'Participation is validated directly against current whitelisted directories or specific audience scopes.',
      },
      {
        title: 'When may playback start?',
        description:
          'Evaluating active scheduling windows prevents pre-event leakage or post-broadcast access.',
      },
      {
        title: 'What if authority changes?',
        description:
          'Real-time revocation or expiry triggers an immediate stream teardown for unauthorized players.',
      },
      {
        title: 'What if stream fails?',
        description:
          'Separates policy authorization checks from temporary CDN physical delivery or network transit issues.',
      },
      {
        title: 'Recording & replay limits?',
        description:
          'Live participation authority does not automatically inherit permission to consume recorded VOD archives.',
      },
      {
        title: 'Private events?',
        description:
          'Enforces context verification loops strictly at the perimeter using privacy-by-default logic blocks.',
      },
    ],
  },
  {
    eyebrow: 'ARCHIVED MEDIA',
    eyebrowClass: 'text-blue-500',
    heading: 'Video on Demand & Replay',
    items: [
      {
        title: 'Asset readiness checks',
        description:
          "Resource 'ready' status represents transcoding success; it is never treated as active playback authorization.",
      },
      {
        title: 'Rights & publication parameters',
        description:
          "Being 'published' allows search visibility; it does not grant default playback to unauthenticated viewers.",
      },
      {
        title: 'Current request evaluations',
        description:
          'Every distinct play attempt forces fresh contextual compliance checks against historical policies.',
      },
      {
        title: 'Sharing vs. embedding permissions',
        description:
          'View, share, embed, and download capabilities are treated as distinct, non-overlapping programmatic entitlements.',
      },
      {
        title: 'Expiration and withdrawal',
        description:
          'The physical asset lifetime and user authorization window can expire independently of each other.',
      },
      {
        title: 'Replay after Live Events',
        description:
          'Transitioning live sessions to static VOD archives requires explicit, fresh operational privileges.',
      },
    ],
  },
];

export default function LiveVodContextSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src="/images/platform-secure-playback/live-vod-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Live &amp; VOD Playback Context
          </h2>
          <p className="max-w-4xl text-base leading-6 text-slate-600">
            Qualify authorization for time-sensitive live sessions and preserve asset
            readiness as separate states.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {COLUMNS.map((column) => (
            <div
              key={column.heading}
              className="flex flex-col rounded-2xl bg-gray-950 p-6 sm:p-8"
            >
              <span
                className={`font-mono text-xs font-bold uppercase tracking-wide ${column.eyebrowClass}`}
              >
                {column.eyebrow}
              </span>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {column.heading}
              </h3>

              <dl className="mt-8 flex flex-col gap-6">
                {column.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <dt className="text-sm font-bold text-white">{item.title}</dt>
                    <dd className="text-sm leading-6 text-slate-400">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
