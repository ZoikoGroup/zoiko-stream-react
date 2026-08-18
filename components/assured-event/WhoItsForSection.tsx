interface AudienceCard {
  title: string;
  description: string;
  image: string;
}

const audiences: AudienceCard[] = [
  {
    title: 'High-stakes executive broadcast',
    description: 'Quarterly earnings or company-wide keynotes requiring zero failover delay.',
    image: '/images/assured-event/audience-executive-broadcast.png',
  },
  {
    title: 'Public or sensitive event',
    description: 'Government announcements or institutional releases backed by signed audits.',
    image: '/images/assured-event/audience-public-event.png',
  },
  {
    title: 'Complex multi-track program',
    description:
      'Simultaneous multi-lingual audio tracks and parallel stream routing configurations.',
    image: '/images/assured-event/audience-multi-track.png',
  },
  {
    title: 'Strict audience access',
    description: 'SAML SSO access gates, restricted private distribution list enforcement.',
    image: '/images/assured-event/audience-strict-access.png',
  },
  {
    title: 'Captions & alternative access',
    description: 'Deterministic live captions, sign language overlays, and screen-reader access.',
    image: '/images/assured-event/audience-captions.png',
  },
  {
    title: 'Commercial & support commitments',
    description: 'SLA response guarantees and direct hotlines to engineers during the window.',
    image: '/images/assured-event/audience-commercial.png',
  },
];

export default function WhoItsForSection() {
  return (
    <section
      className="w-full bg-slate-950 border-t border-b border-gray-800 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-12"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.9)), url('/images/assured-event/who-its-for-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold">Who Assured Event is for</h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          High-integrity live operations requiring deterministic outcomes rather than best-effort
          hoping.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((item) => (
          <article
            key={item.title}
            className="bg-zinc-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 overflow-hidden flex flex-col"
          >
            <div
              className="h-40 w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 bg-cover bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
              role="presentation"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-slate-100 text-base font-bold">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-5">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
