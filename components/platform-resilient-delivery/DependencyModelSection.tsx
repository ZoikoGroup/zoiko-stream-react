'use client';

import SectionShell from './SectionShell';

interface Dependency {
  icon: string;
  iconBg: string;
  tag: string;
  title: string;
  description: string;
}

const DEPENDENCIES: Dependency[] = [
  {
    icon: '/images/platform-resilient-delivery/cpu-blue.svg',
    iconBg: 'bg-blue-500/10',
    tag: 'PRODUCT / ENG / SRE',
    title: 'ZoikoStream component',
    description:
      'Name public-safe capability or service role rather than raw microservice labels.',
  },
  {
    icon: '/images/platform-resilient-delivery/cloud.svg',
    iconBg: 'bg-teal-400/10',
    tag: 'INFRA / SECURITY / LEGAL',
    title: 'Third-party infrastructure',
    description:
      'Disclose provider and specific role only when officially approved.',
  },
  {
    icon: '/images/platform-resilient-delivery/users.svg',
    iconBg: 'bg-amber-500/10',
    tag: 'CUSTOMER + PRODUCT',
    title: 'Customer environment',
    description:
      'Explain shared-responsibility boundary clearly with explicit support limits.',
  },
  {
    icon: '/images/platform-resilient-delivery/globe-red.svg',
    iconBg: 'bg-red-500/10',
    tag: 'ADAPTIVE DELIVERY / SUPPORT',
    title: 'Network / ISP / device',
    description:
      'Describe external condition class to assist adaptive delivery tuning.',
  },
  {
    icon: '/images/platform-resilient-delivery/shield.svg',
    iconBg: 'bg-violet-500/10',
    tag: 'ACCESS CONTROL / SECURITY',
    title: 'Identity / authorization',
    description:
      'Keep policy and authentication failures distinct from physical delivery failure.',
  },
  {
    icon: '/images/platform-resilient-delivery/activity-pink.svg',
    iconBg: 'bg-pink-500/10',
    tag: 'LIVE EVENTS / OPS',
    title: 'Event/production dependency',
    description:
      'Separate managed-event failures from platform-wide capabilities.',
  },
];

export default function DependencyModelSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-resilient-delivery/dependency-model-bg.png"
      title="Dependency and responsibility model"
      subtitle="Make dependencies and ownership visible without disclosing private architecture or silently shifting responsibility."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEPENDENCIES.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-4 rounded-xl bg-zinc-900/80 p-6 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-4 shrink-0"
                />
              </span>

              <span className="shrink-0 rounded-sm bg-teal-400/15 px-2.5 py-1 font-mono text-[10px] font-bold text-teal-300">
                {item.tag}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white">{item.title}</h3>

            <p className="text-sm leading-5 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
