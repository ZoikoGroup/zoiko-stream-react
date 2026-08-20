'use client';

interface ResourceCard {
  title: string;
  description: string;
  image: string;
}

const RESOURCES: ResourceCard[] = [
  {
    title: 'Media Resource',
    description:
      'Type, identifier class, active lifecycle state, owner records, and configured rights or sensitivity thresholds.',
    image: '/images/platform-secure-playback/resource-media.png',
  },
  {
    title: 'Audience Context',
    description:
      'Public, invited, or organization-level authentication modes; active directory state, and playback permission scope.',
    image: '/images/platform-secure-playback/resource-audience.png',
  },
  {
    title: 'Playback Environment',
    description:
      'Programmatic player properties, secure embed containers, native application metadata, browser context, and device class.',
    image: '/images/platform-secure-playback/resource-environment.png',
  },
  {
    title: 'Origin & Embedding',
    description:
      'Whitelisted domain mapping, web application origins, nested frame sandboxing, and secure platform referral handshakes.',
    image: '/images/platform-secure-playback/resource-origin.png',
  },
  {
    title: 'Temporal Context',
    description:
      'Precise epoch of request initiation, active ticketing window, session duration limit, and hard resource expiration thresholds.',
    image: '/images/platform-secure-playback/resource-temporal.png',
  },
  {
    title: 'Policy Reference',
    description:
      'Applied corporate policy version, regulatory state markers, security compliance targets, and cryptographically verified proof.',
    image: '/images/platform-secure-playback/resource-policy.png',
  },
];

export default function ResourceContextSection() {
  return (
    <section className="w-full border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Playback Resource &amp; Context Model
          </h2>
          <p className="max-w-4xl text-base leading-7 text-slate-500 sm:text-lg">
            Define what the decision is about without assuming a player, token, DRM,
            or delivery design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="aspect-[389/200] w-full overflow-hidden bg-slate-950">
                <img
                  src={resource.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2.5 px-6 pb-7 pt-6">
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  {resource.title}
                </h3>
                <p className="text-sm leading-5 text-slate-500">
                  {resource.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
