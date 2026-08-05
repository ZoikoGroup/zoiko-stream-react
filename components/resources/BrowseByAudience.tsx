'use client';

import Link from 'next/link';

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  accentColor: string; // Tailwind color class for bullets and icons
  bgColor: string;
  items: string[];
}

const AUDIENCE_DATA: AudienceCard[] = [
  {
    id: 'developers',
    title: 'Developers',
    description:
      'Build, integrate, and extend video infrastructure with our developer-first APIs and SDKs.',
    accentColor: 'text-sky-300 bg-sky-300',
    bgColor: 'bg-sky-300/10 text-sky-300',
    items: [
      'API Reference & SDKs',
      'Integration Guides',
      'Webhooks & Event Handling',
      'Quickstarts',
    ],
  },
  {
    id: 'enterprise-operators',
    title: 'Enterprise Operators',
    description:
      'Manage scale, ensure compliance, and monitor global broadcast health and resilience.',
    accentColor: 'text-pink-500 bg-pink-500',
    bgColor: 'bg-pink-500/10 text-pink-500',
    items: [
      'Architecture Patterns',
      'Security & Compliance',
      'Cost Optimization',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'live-events',
    title: 'Live Events',
    description:
      'Deliver flawless live experiences with ultra-low latency and interactive broadcast tools.',
    accentColor: 'text-blue-400 bg-blue-400',
    bgColor: 'bg-blue-400/10 text-blue-400',
    items: [
      'Latency Optimization',
      'Hardware Encoders',
      'Redundancy Planning',
      'Interactive Features',
    ],
  },
];

export default function BrowseByAudience() {
  return (
    <section className="w-full bg-slate-950 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10">
        
        {/* Section Header with Divider */}
        <div className="flex w-full items-center justify-start gap-4">
          <h2 className="shrink-0   text-base font-normal leading-6 text-indigo-100">
            Browse by Audience
          </h2>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* Audience Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE_DATA.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col justify-start rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 transition-colors group-hover:bg-slate-700/80`}
              >
                {/* Custom Icon / Graphic per card type */}
                {card.id === 'developers' && (
                  <img className="h-6 w-6 " src="/images/resources/Icon (8).png" />
                )}
                {card.id === 'enterprise-operators' && (
                  <img className="h-6 w-6 " src="/images/resources/Icon (9).png" />
                )}
                {card.id === 'live-events' && (
                  <img className="h-6 w-6 " src="/images/resources/Icon (10).png" />
                )}
              </div>

              {/* Title */}
              <h3 className="pt-6   text-lg font-bold leading-6 text-indigo-100">
                {card.title}
              </h3>

              {/* Description */}
              <p className="min-h-[5rem] pt-1.5   text-sm font-normal leading-6 text-neutral-300">
                {card.description}
              </p>

              {/* Features / Links List */}
              <ul className="flex flex-col gap-3 pt-4">
                {card.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    {/* Color Accent Indicator Dot */}
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        card.accentColor.split(' ')[1]
                      }`}
                    />
                    <Link
                      href={`/resources#${card.id}`}
                      className="  text-sm font-normal text-neutral-300 transition-colors hover:text-white hover:underline focus:outline-none"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}