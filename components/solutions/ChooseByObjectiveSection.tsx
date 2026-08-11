'use client';

import Image from 'next/image';

interface ObjectiveItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const OBJECTIVES: ObjectiveItem[] = [
  {
    id: 'build-video',
    number: '01',
    title: 'Build video into a product',
    description:
      'Programmable video experiences inside an application or service.',
    imageSrc: '/images/solutions/BackgroundBorder (3).png',
    imageAlt: 'Build video into a product preview',
  },
  {
    id: 'broadcast-globally',
    number: '02',
    title: 'Broadcast globally',
    description:
      'Operate one-to-many distribution for audiences across approved regions and channels.',
    imageSrc: '/images/solutions/BackgroundBorder (4).png',
    imageAlt: 'Broadcast globally preview',
  },
  {
    id: 'secure-enterprise',
    number: '03',
    title: 'Secure enterprise video',
    description:
      'Protect private or controlled media access with policy and governance.',
    imageSrc: '/images/solutions/BackgroundBorder (5).png',
    imageAlt: 'Secure enterprise video preview',
  },
  {
    id: 'accessible-multilingual',
    number: '04',
    title: 'Accessible and multilingual video',
    description:
      'Improve access through approved caption, language, and inclusive-delivery capabilities.',
    imageSrc: '/images/solutions/BackgroundBorder (6).png',
    imageAlt: 'Accessible and multilingual video preview',
  },
  {
    id: 'record-replay-preserve',
    number: '05',
    title: 'Record, replay, and preserve',
    description:
      'Carry live media into durable replay, asset management, analytics, and retention workflows.',
    imageSrc: '/images/solutions/BackgroundBorder (7).png',
    imageAlt: 'Record, replay, and preserve preview',
  },
  {
    id: 'managed-live-events',
    number: '06',
    title: 'Run managed Live Events',
    description:
      'Use ZoikoStream Live Events for professionally managed, scheduled broadcasts.',
    imageSrc: '/images/solutions/BackgroundBorder (8).png',
    imageAlt: 'Run managed Live Events preview',
  },
];

export default function ChooseByObjectiveSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        
        {/* Header Block */}
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-normal uppercase tracking-wide text-blue-500">
              CHOOSE BY OBJECTIVE
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            What result are you trying to achieve?
          </h2>

          <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Six outcomes, each with its own implementation path and evidence boundary.
          </p>
        </div>

        {/* Objectives Rows */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800">
          {OBJECTIVES.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-12 ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text Area */}
                <div className="flex flex-1 flex-col gap-2.5">
                  <span className="text-xs font-normal uppercase tracking-wide text-blue-500">
                    {item.number} / OBJECTIVE
                  </span>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Media Preview Container */}
                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-2xl border border-neutral-300 dark:border-gray-800 bg-slate-200 dark:bg-slate-800 shadow-sm">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}