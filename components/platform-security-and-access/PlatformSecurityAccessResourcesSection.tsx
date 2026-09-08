import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, ShieldUser, LockOpen } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const RESOURCES = [
  { title: 'Streams & Media Assets', desc: 'Live and on-demand video content' },
  { title: 'Workspaces & Accounts', desc: 'Organizational boundaries' },
  { title: 'API Objects & Endpoints', desc: 'Developer-accessible resources' },
  { title: 'Playback Sessions', desc: 'Audience-facing delivery' },
  { title: 'Configuration & Administration', desc: 'Platform settings' },
];

const ACTIONS = [
  { title: 'View / Read', desc: 'Access without modification' },
  { title: 'Create / Change', desc: 'Modify protected resources' },
  { title: 'Publish / Deliver', desc: 'Make content available' },
  { title: 'Approve', desc: 'Authorize consequential changes' },
  { title: 'Export / Share', desc: 'Move data outside boundary' },
  { title: 'Administer / Revoke', desc: 'Manage access itself' },
];

export default function PlatformSecurityAccessResourcesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white border-b border-slate-200 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Protected resources and action classes
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Source-backed resource types and action classes that the authorization model governs across the video lifecycle.
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Protected Resources */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                <ShieldUser className="size-5 text-blue-500" />
              </div>
              <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                Protected Resources
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {RESOURCES.map((item, idx) => (
                <div
                  key={idx}
                  className="pl-4 py-1.5 border-l-[3px] border-teal-500 flex flex-col gap-1"
                >
                  <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Action Classes */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                <LockOpen className="size-5 text-blue-500" />
              </div>
              <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                Action Classes
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {ACTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="pl-4 py-1.5 border-l-[3px] border-teal-500 flex flex-col gap-1"
                >
                  <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
