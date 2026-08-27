import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const collectionFeatures = [
  {
    title: 'Cursor Pagination',
    desc: 'Consistent, database-index backed pagination. Safely avoid duplicated or skipped items during constant stream mutations.',
    img: '/images/developer-api-reference/card-image (26).png',
  },
  {
    title: 'Filter Operators',
    desc: 'Strictly typed and validated filter queries. Restrict datasets instantly utilizing exact matching or range bounding.',
    img: '/images/developer-api-reference/card-image (27).png',
  },
  {
    title: 'Sort & Order',
    desc: 'Explicit ordering parameters indexed specifically to prevent unexpected query evaluation pauses at high volume scale.',
    img: '/images/developer-api-reference/card-image (28).png',
  },
  {
    title: 'Time Semantics',
    desc: 'Standard ISO 8601 millisecond-precision timestamps. Consistent timezone parsing guarantees global logging precision.',
    img: '/images/developer-api-reference/card-image (29).png',
  },
];

export function NavigateCollectionsSection() {
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
            Navigate collections with precision
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Cursor, token, offset, filters, sort keys, and time semantics — documented per operation to ensure fluid dataset traversal.
          </p>
        </div>

        {/* Pagination Spec Box */}
        <div className="w-full bg-slate-50/90 rounded-2xl border border-gray-200 overflow-hidden shadow-sm backdrop-blur-sm">
          <div className="p-3 bg-slate-200/80 border-b border-gray-200 grid grid-cols-4 gap-3 text-slate-900 text-xs font-bold font-mono">
            <span>Cursor Token</span>
            <span>Page Limit</span>
            <span>Active Filter</span>
            <span>Sort Order</span>
          </div>
          <div className="p-4 grid grid-cols-4 gap-3 items-center text-xs font-mono">
            <span className="text-slate-900 font-bold">cur_next_77fa2b</span>
            <span className="text-slate-600">Limit: 50 items</span>
            <span className="text-slate-600">status == &apos;active&apos;</span>
            <span className="text-slate-600">created_at desc</span>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-slate-50/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm min-h-[260px]"
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
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
