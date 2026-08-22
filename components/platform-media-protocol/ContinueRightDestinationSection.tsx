import React from 'react';
import Link from 'next/link';
import { Code2, Building2, UserCheck, Layers, ArrowRight } from 'lucide-react';

const destinations = [
  {
    title: 'Developer',
    desc: 'Quickstart, reference, auth, errors, changelog',
    action: 'View Developers',
    href: '/sdks',
    icon: Code2,
  },
  {
    title: 'Enterprise',
    desc: 'Architecture, security review, procurement',
    action: 'Talk to an expert',
    href: '/talk-to-an-expert',
    icon: Building2,
  },
  {
    title: 'Existing customer',
    desc: 'Docs, monitoring, status, support, workspace',
    action: 'Sign in',
    href: '/start-building',
    icon: UserCheck,
  },
  {
    title: 'Adjacent capability',
    desc: 'Live streaming, Real-time contribution, SDKs',
    action: 'Explore Platform',
    href: '/platform-recording-replay',
    icon: Layers,
  },
];

export default function ContinueRightDestinationSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Continue to the right destination
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Reach the next step based on your role and intent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dst, idx) => {
            const Icon = dst.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md hover:border-teal-500/50 transition-all group"
              >
                <div className="flex flex-col gap-4">
                  <div className="size-9 bg-blue-500/10 rounded-md flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                      {dst.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                      {dst.desc}
                    </p>
                  </div>
                </div>

                <Link
                  href={dst.href}
                  className="text-blue-600 text-base font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors flex items-center gap-1.5"
                >
                  <span>{dst.action}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
