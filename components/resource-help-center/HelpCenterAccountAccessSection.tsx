import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

import bg7 from '@/public/images/resource-help-center/section-7bg (2).png';
import img68 from '@/public/images/resource-help-center/card-image (68).png';
import img69 from '@/public/images/resource-help-center/card-image (69).png';
import img70 from '@/public/images/resource-help-center/card-image (70).png';
import img71 from '@/public/images/resource-help-center/card-image (71).png';

const ACCOUNT_HELP = [
  {
    title: 'Password & Login Recovery',
    description:
      'Retrieve lost credentials, reset corporate login options, or verify sensitive account markers.',
    image: img68,
  },
  {
    title: 'Team & Permissions',
    description:
      'Configure role-based access controls, manage department seats, and audits log permissions.',
    image: img69,
  },
  {
    title: 'API Key Management',
    description:
      'Create, rotate, and securely store operational developer token keys in compliance boundaries.',
    image: img70,
  },
  {
    title: 'Billing & Plan',
    description:
      'Manage billing structures, invoice logs, active payment methods, and current platform usage limits.',
    image: img71,
  },
];

export default function HelpCenterAccountAccessSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Account & Access Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Account and access help
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACCOUNT_HELP.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-32 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Security Safeguard Banner */}
      <div className="relative z-10 w-full px-6 py-4 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3 shadow-md">
        <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
        <p className="text-sm font-normal font-['Inter'] leading-relaxed">
          <span className="text-white font-bold">Security Safeguard: </span>
          <span className="text-slate-400">
            Sensitive account recovery is strictly handled in the authenticated support flow. Help desk operators will never request security tokens or password configurations.
          </span>
        </p>
      </div>
    </section>
  );
}
