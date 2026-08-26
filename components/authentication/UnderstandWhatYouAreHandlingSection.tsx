import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const handlingDetails = [
  {
    title: 'Secret Material',
    desc: 'Never expose raw secrets. Masks automatically in admin panel logs.',
    img: '/images/authentication/Info-Card-Image.png',
  },
  {
    title: 'Public Identifier',
    desc: 'Prefix identifying key type and creation epoch safely in developer workspaces.',
    img: '/images/authentication/Info-Card-Image (1).png',
  },
  {
    title: 'Environment Badge',
    desc: 'Embedded flags ensuring keys mapped for development reject prod traffic.',
    img: '/images/authentication/Info-Card-Image (2).png',
  },
  {
    title: 'Expiration Metadata',
    desc: 'Hard timeouts requiring clean key rotation parameters before client disconnects.',
    img: '/images/authentication/Info-Card-Image (3).png',
  },
];

export function UnderstandWhatYouAreHandlingSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Understand what you are handling
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Public identifiers vs secret material — display rules, masking, safe storage, and environment metadata.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card: Token Anatomy */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <span className="text-slate-900 text-sm font-bold tracking-wide uppercase font-mono">
              TOKEN ANATOMY SCHEMA
            </span>

            <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2 font-mono text-xs shadow-2xs">
              <span className="text-blue-500 font-bold">zk_prod_</span>
              <span className="text-slate-900 font-bold">9f8a3c...</span>
              <span className="text-slate-400 line-through">••••••••••••</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0" />
                <span className="text-slate-600 text-xs font-normal">
                  Public Prefix (zk_prod) — Safe to display in dashboard contexts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-amber-600 rounded-full flex-shrink-0" />
                <span className="text-slate-600 text-xs font-normal">
                  Secret Payload — Redacted after initial creation step
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Detail Items */}
          <div className="flex flex-col gap-4">
            {handlingDetails.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50/90 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm backdrop-blur-sm"
              >
                <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold">{item.title}</h3>
                  <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
