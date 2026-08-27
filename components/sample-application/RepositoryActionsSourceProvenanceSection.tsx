import React from 'react';
import Image from 'next/image';

const repoActions = [
  {
    title: 'View Source',
    desc: 'Allowed when canonical repository URL is valid and public. Opens in a new tab with context.',
    img: '/images/sample-application/Rectangle (8).png',
  },
  {
    title: 'Clone Repository',
    desc: 'Allowed only when registry exposes a valid clone URL. Copy-to-clipboard with protocol options.',
    img: '/images/sample-application/Rectangle (9).png',
  },
  {
    title: 'Download Archive',
    desc: 'Versioned archive only from validated canonical URL. Integrity hash when available.',
    img: '/images/sample-application/Rectangle (10).png',
  },
];

export function RepositoryActionsSourceProvenanceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (3).png"
          alt="Repository Actions Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Repository actions and source provenance
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Trust comes from the ZoikoStream Sample Application Registry, not from a familiar host badge.
          </p>
        </div>

        {/* 3 Action Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {repoActions.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="w-full h-40 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
