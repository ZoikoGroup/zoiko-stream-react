import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import heroImg from '@/public/images/carrers/Rectangle 5.png';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
                CAREERS AT ZOIKOSTREAM
              </span>
            </div>

            <h1 className="text-4xl md:text-4xl font-bold   text-slate-100 leading-tight">
              Build what ZoikoStream depends on.
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal    leading-relaxed">
              Join the teams building, operating, securing, supporting, and growing ZoikoStream — including the Live Events capabilities used for high-stakes, real-time experiences.
            </p>

            <div className="pt-2">
              <Link
                href="#roles"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity inline-block"
              >
                View open roles
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-800 max-w-md">
              <p className="text-slate-500 text-xs font-normal    leading-relaxed">
                Employment terms, location eligibility, work arrangement, and employing entity are stated on each job posting.
              </p>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <Image
                src={heroImg}
                alt="Careers at ZoikoStream"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
