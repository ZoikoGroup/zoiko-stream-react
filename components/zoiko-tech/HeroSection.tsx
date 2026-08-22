import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-slate-100 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-bold   uppercase tracking-wider">
                Company / Zoiko Tech
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-slate-900 leading-tight md:leading-[56px]">
              The technology <br/>company behind ZoikoStream.
            </h1>

            <p className="text-slate-600 text-base md:text-lg font-normal   leading-relaxed">
              Zoiko Tech builds, operates, secures, and evolves ZoikoStream. Its teams steward the platform engineering and product capabilities that support on-demand video, streaming workflows, developer experiences, and Live Events.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/sdks"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-semibold   hover:opacity-90 transition-opacity"
              >
                Explore Developers
              </Link>
              <Link
                href="/platform-overview"
                className="px-7 py-3.5 rounded-lg border border-gray-800 text-slate-900 text-base font-semibold   hover:bg-slate-200/50 transition-colors"
              >
                See how ZoikoStream fits
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[537px] h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/zoiko-tech/bg (104).png"
                alt="Zoiko Tech Office"
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
