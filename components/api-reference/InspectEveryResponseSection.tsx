import React from 'react';
import Image from 'next/image';

const statusCodes = [
  { code: '200 OK', cls: 'bg-emerald-500/10 border-emerald-500 text-emerald-500' },
  { code: '400 BAD REQUEST', cls: 'bg-red-500/10 border-red-500 text-red-500' },
  { code: '401 UNAUTHORIZED', cls: 'bg-red-500/10 border-red-500 text-red-500' },
];

const schemaFields = [
  { field: 'active_viewers', type: 'integer (int64) · non-nullable' },
  { field: 'latency_ms', type: 'integer · nullable' },
];

const responseFeatures = [
  {
    title: 'Schema Explorer',
    desc: 'Toggle between hierarchical tree diagrams and granular flat property tables easily.',
    img: '/images/developer-api-reference/card-image (16).png',
  },
  {
    title: 'Field Lifecycle',
    desc: 'Granular property timeline highlights fields that were recently added or marked deprecated.',
    img: '/images/developer-api-reference/card-image (17).png',
  },
  {
    title: 'Recursive References',
    desc: 'Deeply circular object definitions are parsed and displayed clearly without infinite loops.',
    img: '/images/developer-api-reference/card-image (18).png',
  },
];

export function InspectEveryResponseSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (4).png"
          alt="Inspect Every Response Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Inspect every response and object contract
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Status codes, response headers, schemas, nullability, enums, nesting, and field-level constraints.
          </p>
        </div>

        {/* HTTP Status Codes Schema Card */}
        <div className="w-full p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <span className="text-white text-base font-bold tracking-wide">
              HTTP STATUS CODES SCHEMA
            </span>
            <div className="flex items-center gap-2">
              {statusCodes.map((s, idx) => (
                <div key={idx} className={`px-2.5 py-0.5 rounded border text-xs font-mono ${s.cls}`}>
                  {s.code}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
            {schemaFields.map((f, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-800/80 rounded-md border border-gray-700/60 flex justify-between items-center"
              >
                <span className="text-white text-xs font-mono font-bold">{f.field}</span>
                <span className="text-slate-400 text-xs font-mono">{f.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {responseFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-36 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
