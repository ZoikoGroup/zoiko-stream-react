import React from 'react';
import Link from 'next/link';

export default function EqualAccessAccommodationsSection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              EQUAL ACCESS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            Inclusion &amp; accommodations.
          </h2>

          <p className="text-gray-500 text-base font-normal     leading-relaxed max-w-3xl">
            ZoikoStream is committed to a fair and accessible hiring experience. Employment decisions are based on role-related qualifications, experience, performance, and lawful business requirements. If you need a reasonable accommodation for the application or interview process, use the accommodation route shown here.
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Bullet Points */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-start gap-3 text-sm text-gray-500 font-normal    ">
              <span className="text-gray-400 font-bold shrink-0">–</span>
              <p className="leading-relaxed">
                Final equal-employment language is jurisdiction-aware and approved for each market — not a single country&apos;s statement applied everywhere.
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-500 font-normal    ">
              <span className="text-gray-400 font-bold shrink-0">–</span>
              <p className="leading-relaxed">
                The accommodation flow collects only information necessary to arrange the adjustment. No diagnosis detail is required in the public form.
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-500 font-normal    ">
              <span className="text-gray-400 font-bold shrink-0">–</span>
              <p className="leading-relaxed">
                Images are not used as decorative proof of diversity, and people are never labeled by inferred demographic traits.
              </p>
            </div>
          </div>

          {/* Right Adjustment Request Box */}
          <div className="lg:col-span-5 p-7 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-5">
            <h3 className="text-zinc-900 text-base font-bold  ">
              Need an adjustment?
            </h3>
            <p className="text-gray-500 text-sm font-normal     leading-relaxed">
              Request a reasonable accommodation for any stage of the application, assessment, or interview process.
            </p>

            <div className="pt-2">
              <Link
                href="/talk-to-an-expert"
                className="w-full px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 rounded-lg text-sm font-semibold     hover:opacity-90 transition-opacity inline-block text-center"
              >
                Request a recruiting accommodation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
