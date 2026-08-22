'use client';

interface Location {
  eyebrow: string;
  name: string;
  image: string;
  alt: string;
}

const LOCATIONS: Location[] = [
  {
    eyebrow: 'Headquarters',
    name: 'Sacramento, California, United States',
    image: '/images/zoiko-group/hq-sacramento.png',
    alt: 'US flags on an office tower, representing the United States headquarters',
  },
  {
    eyebrow: 'European headquarters',
    name: 'London, United Kingdom',
    image: '/images/zoiko-group/hq-london.png',
    alt: 'The London skyline along the Thames, representing the European headquarters',
  },
];

export default function GlobalPresenceSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Public locations
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Global presence.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {LOCATIONS.map((location) => (
            <article key={location.name} className="flex flex-col">
              <div className="w-full overflow-hidden bg-slate-50">
                <img
                  src={location.image}
                  alt={location.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="mt-6 text-xs font-bold uppercase leading-5 tracking-wide text-blue-400">
                {location.eyebrow}
              </span>

              <h3 className="mt-2 text-lg font-bold leading-8 text-neutral-700 sm:text-xl">
                {location.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <span className="inline-flex w-full items-center justify-center rounded-[10px] border border-neutral-700 px-7 py-4 text-sm font-semibold text-neutral-700 sm:w-auto">
            Contact us
          </span>

          <span className="text-center text-sm font-semibold leading-6 text-blue-400 underline decoration-blue-400 underline-offset-4 sm:text-left">
            Visit Zoiko Group →
          </span>
        </div>
      </div>
    </section>
  );
}
