import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const paramsBreakdown = [
  { param: 'Authorization', spec: 'required · header · string', req: true },
  { param: 'stream_id', spec: 'required · path · uuid', req: true },
  { param: 'force_stop', spec: 'optional · query · boolean', req: false },
];

const paramTypes = [
  {
    title: 'Path Parameters',
    desc: 'Extract dynamic identifiers directly from URL maps strictly validated as UUIDs.',
    img: '/images/developer-api-reference/card-image (12).png',
  },
  {
    title: 'Query Parameters',
    desc: 'Fined-tuned controls for pagination, ordering, filters, and optional returns.',
    img: '/images/developer-api-reference/card-image (13).png',
  },
  {
    title: 'Request Headers',
    desc: 'Authentication tokens, payload scopes, cache parameters, and trace IDs.',
    img: '/images/developer-api-reference/card-image (14).png',
  },
  {
    title: 'Request Body Schema',
    desc: 'Complete JSON schemas with exact enums, nesting limits, and field properties.',
    img: '/images/developer-api-reference/card-image (15).png',
  },
];

export function ConstructRequestsPrecisionSection() {
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
            Construct requests with precision
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Headers, path, query, and body parameters — required, optional, conditional, validated.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-slate-900 text-3xl font-bold">Rigorous contract validation</h3>
            <p className="text-slate-600 text-base font-normal leading-6">
              Every parameter listed is explicitly typed, bounded, and mapped back to strict validation schemas. Instead of guessing boundary values or format demands, construct your payloads from real-time validated specifications.
            </p>
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-gray-950 text-base font-bold">Explore Parameter Spec</span>
            </div>
          </div>

          {/* Right Card: Parameter Type Breakdown */}
          <div className="p-6 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 text-sm font-bold tracking-wide uppercase">
                PARAMETER TYPE BREAKDOWN
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {paramsBreakdown.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-md border border-gray-200 flex justify-between items-center shadow-2xs"
                >
                  <span className="text-slate-900 text-xs font-bold font-mono">{p.param}</span>
                  <span className={`text-xs font-mono ${p.req ? 'text-red-600' : 'text-slate-600'}`}>
                    {p.spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Parameter Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paramTypes.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm min-h-[240px]"
              >
                <div className="w-full h-28 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-slate-900 text-base font-bold">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
