'use client';

interface Location {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

const LOCATIONS: Location[] = [
  {
    image: '/images/contact-us/hq-sacramento.png',
    alt: 'United States flags on a high-rise office building facade',
    eyebrow: 'Headquarters',
    title: 'Sacramento, California, United States',
    description:
      'ZoikoStream maintains a presence in the United States. Specific office details are published here once approved by Corporate and Legal.',
  },
  {
    image: '/images/contact-us/hq-london.png',
    alt: 'Aerial view of Tower Bridge and the London skyline',
    eyebrow: 'European headquarters',
    title: 'London, United Kingdom',
    description:
      'ZoikoStream maintains a presence in Europe. Specific office details are published here once approved by Corporate and Legal.',
  },
];

export default function CompanyLocationsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-8 lg:pt-44 lg:pb-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Company presence
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Company locations.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {LOCATIONS.map((location) => (
            <article key={location.title} className="flex flex-col">
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-50">
                <img
                  src={location.image}
                  alt={location.alt}
                  className="size-full object-cover"
                />
              </div>

              <span className="mt-6 text-xs font-bold uppercase leading-5 tracking-wide text-blue-400">
                {location.eyebrow}
              </span>

              <h3 className="mt-1 text-xl font-bold leading-8 text-neutral-700">
                {location.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {location.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
