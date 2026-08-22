'use client';

import SectionShell from './SectionShell';

interface PathType {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const PATHS: PathType[] = [
  {
    image: '/images/platform-resilient-delivery/path-retry.png',
    alt: 'Circular loading indicator at 73 percent',
    title: 'Retry',
    description:
      'Repeat a bounded operation when documentation and state permit.',
  },
  {
    image: '/images/platform-resilient-delivery/path-fallback.png',
    alt: 'Diverging neon light paths',
    title: 'Fallback',
    description: 'Use an alternate supported behavior with stated tradeoffs.',
  },
  {
    image: '/images/platform-resilient-delivery/path-reroute.png',
    alt: 'Network of rerouted connections',
    title: 'Reroute',
    description:
      'Use another approved delivery/processing path where supported.',
  },
  {
    image: '/images/platform-resilient-delivery/path-alternate-source.png',
    alt: 'Rows of data center server racks',
    title: 'Alternate source',
    description: 'Use another authorized media/source/recording if available.',
  },
  {
    image: '/images/platform-resilient-delivery/path-operator-assisted.png',
    alt: 'Operator working at a wall of control screens',
    title: 'Operator-assisted',
    description: 'Authorized human action may stabilize or restore service.',
  },
  {
    image: '/images/platform-resilient-delivery/path-no-available-path.png',
    alt: 'Dark corridor reading void state, null connection',
    title: 'No available path',
    description:
      'No approved recovery path currently produces the required outcome.',
  },
];

export default function ContinuityPathsSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-resilient-delivery/continuity-paths-bg.png"
      title="Continuity path types"
      subtitle="Neutral categories that can render supported, unavailable, conditional, or unknown."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATHS.map((path) => (
          <article
            key={path.title}
            className="flex flex-col overflow-hidden rounded-xl bg-zinc-900/80 outline-1 -outline-offset-1 outline-gray-800"
          >
            <img
              src={path.image}
              alt={path.alt}
              className="h-40 w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-lg font-bold text-white">{path.title}</h3>
              <p className="text-sm leading-5 text-slate-400">{path.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
