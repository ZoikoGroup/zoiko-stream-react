import Link from 'next/link';

interface RouteRow {
  need: string;
  destination: string;
  href: string;
  current?: boolean;
}

const routes: RouteRow[] = [
  {
    need: 'I need invite-only, ticketed, or general access control',
    destination: 'Secure audience access',
    href: '/secure-audience-access',
  },
  {
    need: 'I need a dedicated closed, credentialed viewing room',
    destination: 'Private streaming',
    href: '/private-streaming',
    current: true,
  },
  {
    need: 'I need failure planning and recovery',
    destination: 'Event resilience',
    href: '/event-resilience',
  },
  {
    need: 'I need highest-assurance tier and commitments',
    destination: 'Assured Event',
    href: '/assured-event',
  },
  {
    need: 'I need accessibility program design',
    destination: 'Accessibility & inclusion',
    href: '/accessibility-inclusion',
  },
];

export default function DestinationRouterSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Find the right destination for your access needs.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Different security requirements demand tailored architectures.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        {routes.map((route) =>
          route.current ? (
            <div
              key={route.need}
              className="w-full px-6 py-5 bg-zinc-950 rounded-xl flex flex-wrap justify-between items-center gap-3"
            >
              <span className="text-slate-100 text-sm sm:text-base font-bold">{route.need}</span>
              <div className="flex items-center gap-3">
                <span className="text-teal-400 text-sm sm:text-base font-bold">
                  {route.destination}
                </span>
                <span className="px-2 py-0.5 bg-teal-400/10 rounded-sm text-teal-400 text-[10px] font-bold uppercase tracking-wide">
                  Current path
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/private-streaming/arrow-right.svg"
                  alt=""
                  aria-hidden
                  className="w-4 h-4 brightness-0 invert"
                />
              </div>
            </div>
          ) : (
            <Link
              key={route.need}
              href={route.href}
              className="group w-full px-6 py-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-wrap justify-between items-center gap-3 transition-colors hover:bg-slate-100"
            >
              <span className="text-slate-900 text-sm sm:text-base font-bold">{route.need}</span>
              <div className="flex items-center gap-3">
                <span className="text-slate-500 text-sm sm:text-base group-hover:text-slate-900 transition-colors">
                  {route.destination}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/private-streaming/arrow-right.svg"
                  alt=""
                  aria-hidden
                  className="w-4 h-4"
                />
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
