import Image from 'next/image';

const PATHWAYS = [
  {
    title: 'Developers',
    description:
      'Build video into your product. Use APIs, SDKs, media protocols, and self-service tools to add live, real-time, and on-demand video without building the underlying media infrastructure yourself.',
    features: ['Video APIs', 'SDKs', 'Live and on-demand workflows', 'Secure playback', 'Analytics', 'Global delivery'],
    buttonText: 'Start building',
    href:"/start-building",
    imageSrc: '/images/home/div.ar-16-10.png',
  },
  {
    title: 'Enterprise',
    description:
      'Operate critical media with confidence. Coordinate contribution, production, access, delivery, recording, replay, and analytics through controlled workflows designed for secure and resilient operations.',
    features: [
      'Managed broadcasting',
      'Operational control',
      'Access governance',
      'Captions and translation',
      'Recording and replay',
      'Enterprise analytics',
    ],
    buttonText: 'Explore enterprise solutions',
    href:"#",
    imageSrc: '/images/home/div.ar-16-10 (1).png',
  },

  {
    title: 'Live Events',
    description:
      'Deliver live moments that cannot be repeated. ZoikoStream Live Events brings production, secure delivery, accessibility, moderation, recording, replay, and event resilience into one professionally managed lifecycle.',
    features: [
      'Scheduled broadcasts',
      'Remote contribution',
      'Secure audience access',
      'Moderation',
      'Recording and replay',
      'Assured Event options',
    ],
    buttonText: 'Plan a live event',
    href:"/plan-a-live-event",
    imageSrc: '/images/home/div.ar-16-10 (2).png',
  },
];

export default function PathwaysSection() {
  return (
    <section className="w-full bg-slate-100 px-6 py-16 transition-colors duration-200 dark:bg-slate-900 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
        <div className="flex max-w-[700px] flex-col items-start gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="  text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Built around how you work
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
            One platform. Three ways to move video forward.
          </h2>

          <p className="  text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Build with programmable media infrastructure, operate secure enterprise broadcasts, or deliver
            professionally managed live events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-800 dark:bg-zinc-950 sm:p-7"
            >
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-gray-100 dark:border-neutral-700 dark:bg-gray-800">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={335}
                    height={210}
                    className="aspect-[335/210] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="min-h-[112px]   text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm">
                    {card.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3.5 pt-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-blue-500" />
                      <span className="  text-sm font-normal leading-snug text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a href={card.href}>
                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-[10px] border border-gray-800 px-6 py-3.5   text-xs font-semibold text-zinc-900 transition-colors duration-200 hover:bg-zinc-900 hover:text-white dark:border-gray-200 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                >
                  <span>{card.buttonText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
