import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Search } from 'lucide-react';

const tags = ['TownHall', 'SAML-Secure', 'Retention:Infinite', 'Marketing'];

export function OrganizeSearchManageInformationSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Organize, search, and manage asset information.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Assign custom keys, inject administrative references, bind structured tag models, and locate recorded media instantly using search scopes.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Metadata Editor Mockup */}
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-xl font-bold">Metadata Editor Mockup</h3>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold">Asset Title</span>
              <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-sm">
                weekly_keynote_9103.mp4
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold">External Reference (Billing/ID)</span>
              <div className="p-3 bg-white rounded-md border border-gray-200 text-slate-900 text-sm">
                project-ref-id-992-corp
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold">Structured Tags</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-200 rounded text-slate-600 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="flex justify-end gap-3">
              <div className="px-4 py-2.5 rounded-md border border-gray-200 text-slate-600 text-xs font-bold cursor-pointer">
                Reset Fields
              </div>
              <div className="px-4 py-2.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md text-slate-950 text-xs font-bold cursor-pointer shadow-sm">
                Update Metadata
              </div>
            </div>
          </div>

          {/* Right Column: Search Scopes */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-xl font-bold">Search Scopes</h3>
            <p className="text-slate-600 text-sm leading-5">
              ZoikoStream database engine supports advanced filters for high-speed indexing across billions of chunks. Use specific properties to limit processing overhead.
            </p>
            <div className="w-full h-px bg-gray-200" />

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-500 text-xs"><Search></Search></span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-slate-900 text-base font-bold">Key-Value matching</h4>
                  <p className="text-slate-600 text-xs leading-4">
                    Match custom key parameters associated with individual recordings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-500 text-xs"><Search></Search></span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-slate-900 text-base font-bold">Operational origin filtering</h4>
                  <p className="text-slate-600 text-xs leading-4">
                    Limit query context by origin live stream tags or tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
