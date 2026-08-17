interface TrustCard {
  icon: string;
  title: string;
  description: string;
}

const trustCards: TrustCard[] = [
  {
    icon: '/images/assured-event/shield-check.svg',
    title: 'Claims Governance',
    description: 'We only claim what’s proven. Audited metrics replace vague uptime marketing.',
  },
  {
    icon: '/images/assured-event/eye-off.svg',
    title: 'Data Minimization',
    description: 'We collect what we need to route your event feed, nothing more.',
  },
  {
    icon: '/images/assured-event/lock.svg',
    title: 'Security Boundaries',
    description: 'SAML SSO, TLS 1.3, and AES-256 encryption at rest and in transit.',
  },
  {
    icon: '/images/assured-event/headphones.svg',
    title: 'Support Boundaries',
    description: 'Engineers, not bots. Real-time support during your event window.',
  },
  {
    icon: '/images/assured-event/file-text.svg',
    title: 'Commercial Terms',
    description: 'Transparent event billing. No hidden platform overage fees.',
  },
  {
    icon: '/images/assured-event/globe.svg',
    title: 'Third-Party Transparency',
    description: 'Open CDN mapping and public status logs. Know exactly what we use.',
  },
];

export default function EnterpriseTrustSection() {
  return (
    <section className="w-full bg-gray-50 px-6 md:px-12 xl:px-[112px] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl p-6 sm:p-10 lg:p-14 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-10">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
            Enterprise trust without vague promises.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We run clean, deterministic live infrastructure. No hand-waving reliability claims, just
            transparent compliance boundaries.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map(({ icon, title, description }) => (
            <article
              key={title}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-3"
            >
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt="" aria-hidden className="w-[18px] h-[18px]" />
              </span>
              <h3 className="text-zinc-950 text-base font-bold">{title}</h3>
              <p className="text-slate-600 text-sm leading-6">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
