import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  'Technology & Integration',
  'Solutions & Implementation',
  'Live Events & Production',
  'Strategic Infrastructure & Alliances',
];

export default function FindRightExpertiseSection() {
  return (
    <section className="w-full bg-white py-20 border-b border-gray-200 text-slate-900" id="expertise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold    uppercase tracking-wider">
              FIND THE RIGHT EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold    text-gray-800 leading-tight">
            Find the right expertise for your use case.
          </h2>

          <p className="text-gray-500 text-base font-normal    leading-relaxed max-w-3xl">
            Search by company, capability, integration, region, or partner type. Our directory is growing — tell us what you need and our team will route you to the right expertise.
          </p>
        </div>

        {/* 2-Column Card Box */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative w-full h-[380px] bg-slate-100">
            <Image
              src="/images/partners/Team collaborating on.png"
              alt="Team collaborating expertise"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 p-8 md:p-10 flex flex-col gap-6">
            <h3 className="text-gray-800 text-xl font-bold   ">
              Tell us what you need
            </h3>

            <p className="text-gray-500 text-base font-normal    leading-relaxed">
              ZoikoStream&apos;s governed partner directory is being built out. Rather than show placeholder or unverified listings, tell us your capability, region, and use case and our team will route you to qualified, approved expertise.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-100 rounded-full border border-zinc-200 text-gray-800 text-xs font-semibold   "
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-gray-800 text-base font-semibold    hover:opacity-90 transition-opacity inline-block"
              >
                Tell us what you need
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
