import React from 'react';
import Image from 'next/image';

const dimensions = [
  { name: 'device_category', type: 'Categorical' },
  { name: 'geo_country', type: 'ISO-3166-1' },
  { name: 'content_id', type: 'String ID' },
  { name: 'player_version', type: 'Semantic Version' },
  { name: 'browser_name', type: 'Categorical' },
];

export function SegmentResultsWithDimensionsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (16).png"
          alt="Segment Results Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Segment results with dimensions you can trust.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Use dimensions to narrow or group results. Availability, operators, privacy class, and compatibility are source-governed.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Standard Supported Dimensions */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold  ">Standard Supported Dimensions</h3>
            <div className="flex flex-col gap-3">
              {dimensions.map((dim, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="text-white text-base font-bold  ">{dim.name}</span>
                  </div>
                  <span className="text-slate-400 text-xs  ">Type: {dim.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Segment Builder */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-lg font-bold  ">Visual Segment Builder</h3>
            <p className="text-slate-400 text-sm leading-5">
              Verify how query boundaries are constructed. Applied filter criteria dynamically segment query output.
            </p>
            <div className="w-full h-px bg-gray-800" />

            <div className="flex flex-col gap-3  ">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold uppercase">Field</span>
                <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 text-white text-sm">
                  geo_country
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold uppercase">Operator</span>
                <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 text-white text-sm">
                  IN (Set Match)
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold uppercase">Value</span>
                <div className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 text-white text-sm">
                  [&apos;US&apos;, &apos;CA&apos;, &apos;GB&apos;]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
