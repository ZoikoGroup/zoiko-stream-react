import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PeopleEcosystemSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              People &amp; ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            Work with Zoiko Tech.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 Careers */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group">
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-72 bg-slate-100">
                <Image
                  src="/images/zoiko-tech/Team.png"
                  alt="Build technology team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-8 flex flex-col gap-3">
                <h3 className="text-slate-900 text-xl font-bold    ">
                  Build technology that powers ZoikoStream.
                </h3>
                <p className="text-slate-600 text-base font-normal     leading-relaxed">
                  Explore open roles across engineering, product, security, operations, design, and related disciplines.
                </p>
              </div>
            </div>

            <div className="p-8 pt-6">
              <Link
                href="/company-overview"
                className="px-6 py-3.5 rounded-lg border border-slate-800 text-slate-900 text-base font-semibold     hover:bg-slate-200/60 transition-colors inline-block"
              >
                View Careers
              </Link>
            </div>
          </div>

          {/* Card 2 Partners */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group">
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-72 bg-slate-100">
                <Image
                  src="/images/zoiko-tech/Business.png"
                  alt="Integrate and build with us"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-8 flex flex-col gap-3">
                <h3 className="text-slate-900 text-xl font-bold    ">
                  Integrate, implement, and build with us.
                </h3>
                <p className="text-slate-600 text-base font-normal     leading-relaxed">
                  Find the appropriate path for technology, implementation, commercial, and ecosystem partnerships.
                </p>
              </div>
            </div>

            <div className="p-8 pt-6">
              <Link
                href="/company-overview"
                className="px-6 py-3.5 rounded-lg border border-slate-800 text-slate-900 text-base font-semibold     hover:bg-slate-200/60 transition-colors inline-block"
              >
                Explore Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
