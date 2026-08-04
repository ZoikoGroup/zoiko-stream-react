'use client';

import { ArrowRight } from 'lucide-react';

const SECURITY_STEPS = [
  {
    title: 'Identity',
    description: 'Who or what may act.',
    disclaimer: 'No specific SSO or identity-provider integration implied.',
  },
  {
    title: 'Policy',
    description: 'What rules apply.',
    disclaimer: 'No coverage or enforcement promise beyond approval.',
  },
  {
    title: 'Playback authorization',
    description: 'Who may watch.',
    disclaimer: 'No unsupported token, DRM, or device claim.',
  },
  {
    title: 'Adaptive delivery',
    description: 'How delivery adapts.',
    disclaimer: 'No absolute quality or latency promise.',
  },
  {
    title: 'Distribution',
    description: 'Where approved delivery occurs.',
    disclaimer: 'Global is not proof of every geography.',
  },
  {
    title: 'Resilience',
    description: 'How failure is managed.',
    disclaimer: 'No uptime or failover claim without authority.',
  },
];

export default function SecuritySection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wide text-teal-400">
              SECURE AND DELIVER GLOBALLY
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl font-light text-slate-100 sm:text-4xl md:text-5xl">
            Trust, delivery, and resilience across every stream.
          </h2>

          <p className="font-['Space_Grotesk'] text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Use secure, global, and resilient only with nearby qualification or an inspectable evidence route.
            Marketing emphasis cannot substitute for approved fact.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-stretch justify-between gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:gap-2">
          {SECURITY_STEPS.map((step, index) => (
            <div key={step.title} className="flex w-full items-center lg:w-auto lg:flex-1">
              <div className="flex min-h-[160px] w-full flex-col justify-between rounded-lg border border-gray-800 bg-zinc-900 p-4 transition-colors hover:border-gray-700">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-sm font-light text-slate-100">{step.title}</h3>
                  <p className="mt-1 font-['Space_Grotesk'] text-xs text-slate-400">{step.description}</p>
                </div>

                <p className="mt-4 font-['IBM_Plex_Mono'] text-[11px] leading-4 text-slate-500">
                  {step.disclaimer}
                </p>
              </div>

              {index < SECURITY_STEPS.length - 1 && (
                <div className="hidden shrink-0 px-1 text-slate-500 lg:block">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
