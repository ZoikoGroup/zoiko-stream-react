'use client';

import SectionShell from './SectionShell';

interface RoutingStep {
  icon: string;
  title: string;
  caption: string;
}

const STEPS: RoutingStep[] = [
  {
    icon: '/images/platform-global-distribution/plus-circle.svg',
    title: 'Origin / source',
    caption: 'Workflow Begins',
  },
  {
    icon: '/images/platform-global-distribution/shield-white.svg',
    title: 'Policy gate',
    caption: 'Eligibility Filter',
  },
  {
    icon: '/images/platform-global-distribution/shuffle.svg',
    title: 'Route selection',
    caption: 'Dynamic Routing',
  },
  {
    icon: '/images/platform-global-distribution/play.svg',
    title: 'Delivery endpoint',
    caption: 'Secure Playback',
  },
  {
    icon: '/images/platform-global-distribution/check.svg',
    title: 'Evidence',
    caption: 'Compliance Logged',
  },
];

export default function RoutingPathSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-global-distribution/routing-path-bg.png"
      title="Routing and delivery path"
      subtitle="Route selection explained at a public-safe conceptual level."
    >
      <div className="rounded-2xl bg-zinc-900/80 p-6 outline-[1.5px] -outline-offset-[1.5px] outline-gray-700 sm:p-8">
        <ol className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="contents">
              <div className="flex flex-1 flex-col items-center gap-2 text-center">
                <span className="flex size-12 items-center justify-center rounded-3xl bg-slate-800 outline-1 -outline-offset-1 outline-gray-800">
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="size-5"
                  />
                </span>

                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-[10px] text-slate-400">{step.caption}</p>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-0.5 flex-1 bg-gray-800 lg:mt-6 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
