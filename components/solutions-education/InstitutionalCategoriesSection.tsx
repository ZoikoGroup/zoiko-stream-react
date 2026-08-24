import React from 'react';

const categories = [
  {
    title: 'Ceremony & Commencement',
    desc: 'Graduations, convocations, or high-concurrency public relations keynotes. Event type alone does not trigger managed costs.',
  },
  {
    title: 'High-Consequence Delivery',
    desc: 'Enterprise and platform redundancy. Assured Event structures are deployed only where your current Live Events authority authorizes.',
  },
  {
    title: 'Date Not Confirmed',
    desc: 'Operational planning inquiry remains completely risk-free. We never imply booking availability from a compliance evaluation.',
  },
  {
    title: 'Sensitive & Private Streams',
    desc: 'Minimum required collection principle enforced. We collect only what is necessary to negotiate security and SSO handoffs.',
  },
];

export function InstitutionalCategoriesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] bottom-[-100px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-gray-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Common institutional event categories
          </h2>
          <p className="text-gray-500 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Use these categories to help frame the operational scope and planning requirements for your broadcast.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-gray-900 text-lg font-bold font-['Space_Grotesk']">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
