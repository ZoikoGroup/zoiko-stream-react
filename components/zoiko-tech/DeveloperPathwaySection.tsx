import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DeveloperPathwaySection() {
  return (
    <section className="w-full bg-zinc-700 py-20 md:py-28 text-white border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-blue-400 rounded-full" />
              <span className="text-sky-300 text-xs font-bold     uppercase tracking-wider">
                Developer pathway
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold     text-white">
              Build on ZoikoStream.
            </h2>

            <p className="text-neutral-300 text-base md:text-lg font-normal     leading-relaxed">
              Use ZoikoStream developer resources to understand platform APIs, integration patterns, implementation guidance, and technical support pathways.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/sdks"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-slate-950 text-base font-semibold     hover:opacity-90 transition-opacity"
              >
                Explore Developers
              </Link>
              <Link
                href="/sdks"
                className="px-7 py-3.5 rounded-lg border border-white/30 text-white text-base font-semibold     hover:bg-white/10 transition-colors"
              >
                View API documentation
              </Link>
            </div>

            <Link
              href="/sdks"
              className="text-blue-300 text-base font-semibold     hover:underline pt-2"
            >
              Developer relations →
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[537px] h-[320px] md:h-[360px] rounded-xl overflow-hidden shadow-xl border border-zinc-600">
              <Image
                src="/images/zoiko-tech/Rectangle 4.png"
                alt="Developer Pathway Code Editor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
