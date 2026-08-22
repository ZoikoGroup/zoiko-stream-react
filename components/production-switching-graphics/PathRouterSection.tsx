import Link from 'next/link';

interface RouteRow {
  need: string;
  destination: string;
  href: string;
  current?: boolean;
}

const routes: RouteRow[] = [
  {
    need: 'Need ZoikoStream to operate the whole event',
    destination: 'Managed Live Event Streaming',
    href: '/managed-live-event-streaming',
  },
  {
    need: 'Need remote presenters or remote feeds',
    destination: 'Remote Contribution Tools',
    href: '/remote-contribution-landing',
  },
  {
    need: 'Need to plan sources, switching, cues, graphics',
    destination: 'Production, Switching & Graphics',
    href: '/production-switching-graphics',
    current: true,
  },
  {
    need: 'Need controlled viewing/authentication',
    destination: 'Secure Audience Access',
    href: '/secure-audience-access',
  },
  {
    need: 'Need captions or multiple languages',
    destination: 'Captions & Languages Platform',
    href: '/captions-and-languages',
  },
  {
    need: 'Need replay, archive, or retention',
    destination: 'Recording, Replay & Archive',
    href: '/recording-replay-archive',
  },
  {
    need: 'Need stronger resilience planning',
    destination: 'Event Resilience Framework',
    href: '/event-resilience',
  },
  {
    need: 'Not sure what I need for our setup',
    destination: 'Planning & Briefing Session',
    href: '/plan-a-live-event',
  },
];

export default function PathRouterSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full lg:max-w-[720px] flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Find the right path for your event.
          </h2>
          <p className="text-gray-500 text-base leading-6">
            Not sure where to start? Use this guide to find the right ZoikoStream destination. We
            match requirements to specialized capabilities.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        {routes.map((route) =>
          route.current ? (
            <div
              key={route.need}
              className="w-full px-6 py-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-teal-400 flex flex-wrap justify-between items-center gap-3"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-sm">{route.need}</span>
                <span className="text-teal-500 text-base font-bold">{route.destination}</span>
              </div>
              <span aria-hidden className="text-teal-500 text-sm">
                &rarr;
              </span>
            </div>
          ) : (
            <Link
              key={route.need}
              href={route.href}
              className="group w-full px-6 py-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 hover:outline-gray-400 flex flex-wrap justify-between items-center gap-3 transition-colors"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-sm">{route.need}</span>
                <span className="text-zinc-900 text-base font-bold">{route.destination}</span>
              </div>
              <span aria-hidden className="text-blue-500 text-sm">
                &rarr;
              </span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
