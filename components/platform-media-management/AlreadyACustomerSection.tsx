import React from 'react';
import Image from 'next/image';
import { LogIn, FileText, Activity, HelpCircle } from 'lucide-react';

const customerItems = [
  {
    title: 'Sign In',
    desc: 'Return to your media workspace directly.',
    icon: LogIn,
  },
  {
    title: 'Documentation',
    desc: 'Current guides, API references, and changelogs.',
    icon: FileText,
  },
  {
    title: 'System Status',
    desc: 'Real-time platform health and incident updates.',
    icon: Activity,
  },
  {
    title: 'Support',
    desc: 'Account-specific help with context preservation.',
    icon: HelpCircle,
  },
];

export default function AlreadyACustomerSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (84).png"
          alt="Already a Customer Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Already a customer?
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Continue your work without interruption
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-4 hover:border-teal-400/40 transition-colors"
              >
                <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
