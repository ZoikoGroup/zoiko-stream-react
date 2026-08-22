import React from 'react';
import Link from 'next/link';

export default function TwoWaysInSection() {
  return (
    <section className="w-full bg-slate-50 py-20 border-b border-gray-200 text-slate-900" id="choose-path">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              TWO WAYS IN
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            Choose your path.
          </h2>
        </div>

        {/* 2 Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Find a partner */}
          <div className="p-8 bg-white rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <span className="text-indigo-500 text-xs font-bold   uppercase tracking-wide">
                I NEED EXPERTISE
              </span>
              <h3 className="text-gray-800 text-xl font-bold  ">
                Find a partner
              </h3>
              <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                Find implementation, integration, live production, and adjacent technology expertise for your ZoikoStream use case.
              </p>
            </div>

            <div>
              <Link
                href="#expertise"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-gray-800 text-base font-semibold   hover:opacity-90 transition-opacity inline-block"
              >
                Find a partner
              </Link>
            </div>
          </div>

          {/* Card 2: Become a partner */}
          <div className="p-8 bg-white rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow" id="become-partner">
            <div className="flex flex-col gap-3">
              <span className="text-indigo-500 text-xs font-bold   uppercase tracking-wide">
                I WANT TO PARTNER
              </span>
              <h3 className="text-gray-800 text-xl font-bold  ">
                Become a partner
              </h3>
              <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                Tell us what your organization does and how you believe we can create customer value together.
              </p>
            </div>

            <div>
              <Link
                href="#apply-partner"
                className="px-7 py-3.5 rounded-lg border border-gray-800 text-gray-800 text-base font-semibold   hover:bg-gray-800 hover:text-white transition-colors inline-block"
              >
                Become a partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
