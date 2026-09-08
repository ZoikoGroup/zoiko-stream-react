import React from 'react';
import Image from 'next/image';
import section7Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-7bg.png';
import iconPlaceholder0 from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/IconPlaceholder.png';
import iconPlaceholder1 from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/IconPlaceholder (1).png';
import iconPlaceholder2 from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/IconPlaceholder (2).png';

const CARDS = [
  {
    image: iconPlaceholder0,
    title: 'View ≠ Edit',
    desc: 'Read access does not imply create, publish, share, export, delete or administer.',
  },
  {
    image: iconPlaceholder1,
    title: 'One ≠ All',
    desc: 'Access to one stream, asset, or environment does not imply access to all resources.',
  },
  {
    image: iconPlaceholder2,
    title: 'Client ≠ Admin',
    desc: 'Player or client access does not imply API, workspace, or administrative access.',
  },
];

export default function PlatformSecurityAccessLeastPrivilegeSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-7bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section7Bg}
          alt="Least Privilege Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Least privilege and scope boundaries
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Access is bounded, not universal. Requested, granted, and effective access remain distinct where the owning product supports those states.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-900/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-start items-start gap-4 shadow-xl hover:outline-teal-400/50 transition-all"
            >
              <div className="relative w-full h-24 rounded-lg overflow-hidden bg-slate-950/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-slate-400 opacity-60 text-sm font-normal font-['Space_Grotesk']">
          * Unknown or incomplete scope fails closed in public claims.
        </p>
      </div>
    </section>
  );
}
