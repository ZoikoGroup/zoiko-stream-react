'use client';

import Link from 'next/link';

interface FeatureCard {
  title: string;
  description: string;
}

const OPERATE_FEATURES: FeatureCard[] = [
  {
    title: 'Control',
    description: 'How operators coordinate approved workflows and responsibilities.',
  },
  {
    title: 'Health',
    description: 'How teams understand stream state and exceptions.',
  },
  {
    title: 'Access',
    description: 'How authorized people and audiences are governed.',
  },
  {
    title: 'Recording',
    description: 'How live work continues into replay and preservation.',
  },
  {
    title: 'Accessibility',
    description: 'How captions and translation support reach.',
  },
  {
    title: 'Evidence',
    description: 'How consequential operations remain inspectable.',
  },
  {
    title: 'Analytics',
    description: 'How teams understand operation and audience outcomes.',
  },
];

export default function EnterpriseOperateSection() {
  return (
    <section className="w-full bg-gray-200 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wide text-blue-500">
              FOR ENTERPRISE OPERATORS
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl font-light leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Operate enterprise media with one connected system.
          </h2>

          <p className="font-['Space_Grotesk'] text-base font-normal leading-relaxed text-gray-500 sm:text-lg">
            Coordinate control, health, access, recording, accessibility, and analytics across every critical
            workflow, without stitching together disconnected tools.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/platform/Background+Border (1).png"
            alt="Enterprise operations overview"
            className="block h-auto w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {OPERATE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="font-['Space_Grotesk'] text-sm font-light text-zinc-900">{feature.title}</h3>
                <p className="mt-2 font-['Space_Grotesk'] text-sm font-normal leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/contact-expert"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-gray-800 px-6 py-3.5 font-['Space_Grotesk'] text-base font-normal text-zinc-900 transition-colors hover:bg-gray-300"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
