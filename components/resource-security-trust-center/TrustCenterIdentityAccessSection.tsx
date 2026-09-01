import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg7 from '@/public/images/resources-security-trust-center/section-7bg.png';
import img6 from '@/public/images/resources-security-trust-center/Rectangle (6).png';
import img7 from '@/public/images/resources-security-trust-center/Rectangle (7).png';
import img8 from '@/public/images/resources-security-trust-center/Rectangle (8).png';

const CARDS = [
  {
    title: 'Authentication Concepts',
    description:
      'Enforce MFA, temporary identity scopes, and cryptographic access parameters across all user roles.',
    image: img6,
  },
  {
    title: 'Access Control Governance',
    description:
      'Enforce MFA, temporary identity scopes, and cryptographic access parameters across all user roles.',
    image: img7,
  },
  {
    title: 'Administrative Security',
    description:
      'Enforce MFA, temporary identity scopes, and cryptographic access parameters across all user roles.',
    image: img8,
  },
];

export default function TrustCenterIdentityAccessSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Identity & Access Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Identity, access, and admin governance
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Link
                href="/developer-documentation"
                className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] pt-2 transition-colors"
              >
                <span>Link to Technical Authority</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
