import React from 'react';
import Image from 'next/image';

const assetItems = [
  {
    title: 'Primary wordmark',
    info: 'SVG · PNG — v2.1 · Aug 2026',
    status: 'CURRENT',
    badgeCls: 'bg-white/95 text-gray-800',
    type: 'download',
    img: '/images/press/Rectangle 3.png',
    imgBg: 'bg-gray-200',
    imgContain: true,
  },
  {
    title: 'Platform dashboard — current UI',
    info: 'PNG · JPG — v4.0 · Aug 2026',
    status: 'CURRENT',
    badgeCls: 'bg-white/95 text-gray-800',
    type: 'download',
    img: '/images/press/Analytics dashboard.png',
    imgBg: 'bg-slate-100',
    imgContain: false,
  },
  {
    title: 'Live Events production visual',
    info: 'PNG · JPG — v1.3 · Aug 2026',
    status: 'CURRENT',
    badgeCls: 'bg-white/95 text-gray-800',
    type: 'download',
    img: '/images/press/image 3.png',
    imgBg: 'bg-slate-100',
    imgContain: false,
  },
  {
    title: 'Product & office b-roll',
    info: 'MP4 — request required',
    status: 'REQUEST ONLY',
    badgeCls: 'bg-gray-800 text-white',
    type: 'request',
    img: '/images/press/image 4.png',
    imgBg: 'bg-slate-100',
    imgContain: false,
  },
  {
    title: 'Media-safe architecture diagram',
    info: 'SVG — request required',
    status: 'REQUEST ONLY',
    badgeCls: 'bg-gray-800 text-white',
    type: 'request',
    img: '/images/press/image 5.png',
    imgBg: 'bg-slate-100',
    imgContain: false,
  },
  {
    title: 'Leadership headshots',
    info: 'JPG — see Leadership resources below',
    status: 'CURRENT',
    badgeCls: 'bg-white/95 text-gray-800',
    type: 'link',
    img: '/images/press/image 6.png',
    imgBg: 'bg-slate-100',
    imgContain: false,
  },
];

const filters = ['All', 'Logos', 'Product', 'Live Events', 'Leadership'];

export function MediaAssetLibrarySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-gray-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
            MEDIA ASSET LIBRARY
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold  ">
          Approved, current assets only.
        </h2>
        <p className="max-w-[700px] text-gray-500 text-base font-normal   leading-6">
          Every asset shows its status and version. Request-only items route through the media inquiry form — no direct download.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap items-center gap-3">
        {filters.map((f, idx) => (
          <div
            key={idx}
            className={`px-5 py-2 rounded-full text-xs font-semibold   cursor-pointer ${
              idx === 0
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 border border-zinc-200 hover:bg-slate-100'
            }`}
          >
            {f}
          </div>
        ))}
      </div>

      {/* 6 Asset Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {assetItems.map((asset, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow"
          >
            {/* Image Box */}
            <div className={`w-full h-60 relative ${asset.imgBg} flex items-center justify-center p-4`}>
              <div className={`px-3 py-1 absolute top-3 left-3 rounded-full text-[10px] font-bold   uppercase tracking-wide z-10 ${asset.badgeCls}`}>
                {asset.status}
              </div>
              <Image
                src={asset.img}
                alt={asset.title}
                fill
                className={asset.imgContain ? 'object-contain p-6' : 'object-cover'}
              />
            </div>

            {/* Content Box */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-gray-800 text-base font-bold  ">{asset.title}</h3>
              <span className="text-gray-400 text-xs font-normal  ">{asset.info}</span>

              <div className="pt-2 flex items-center gap-4">
                {asset.type === 'download' && (
                  <>
                    <div className="px-4 py-2 bg-white rounded-lg border border-zinc-200 cursor-pointer hover:bg-slate-100">
                      <span className="text-gray-800 text-xs font-bold font-['Arial']">Download</span>
                    </div>
                    <span className="text-blue-400 text-xs font-semibold   cursor-pointer">
                      View guidance
                    </span>
                  </>
                )}

                {asset.type === 'request' && (
                  <span className="text-blue-400 text-xs font-semibold   cursor-pointer">
                    Request access →
                  </span>
                )}

                {asset.type === 'link' && (
                  <span className="text-blue-400 text-xs font-semibold   cursor-pointer">
                    View leadership →
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
