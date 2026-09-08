import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const LIFECYCLE_ITEMS = [
  {
    title: 'Periodic Review',
    desc: 'Only if current access-governance source defines. Recurrent audit gates evaluate active accounts regularly.',
  },
  {
    title: 'Unused Access',
    desc: 'Do not infer risk from usage metrics. Inactive session profiles remain blocked natively rather than assumed safe.',
  },
  {
    title: 'Offboarding',
    desc: 'Account/workspace authority owns operational process. Instant teardown triggers invalidate keys across downstream CDN edges.',
  },
  {
    title: 'Historical Evidence',
    desc: 'Access removed while audit evidence retained separately. Log structures record transactional traces securely for long-term audits.',
  },
];

export default function PlatformSecurityAccessLifecycleSection() {
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
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Access lifecycle and revocation
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Access is stateful and revocable. Review, expiry, and revocation follow source-governed semantics.
          </p>
        </div>

        {/* 4 Items 2x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {LIFECYCLE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col gap-2 shadow-xs"
            >
              <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
