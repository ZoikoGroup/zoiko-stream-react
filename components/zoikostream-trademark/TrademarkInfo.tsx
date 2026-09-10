import React from 'react';

export default function TrademarkInfo() {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="text-[10px]">●</span> LEGAL · TRADEMARK & BRAND
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1F2B] mb-6 tracking-tight">
          Trademark & Brand Guidelines
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-3xl mb-12">
          These guidelines explain how to correctly reference ZoikoStream's name and marks, when logo use is permitted, and how to request permission for uses this page doesn't already cover.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm py-5 border-y border-gray-100">
          <span className="text-[#1A1F2B] font-semibold">Status: <span className="text-gray-400 font-normal">Current</span></span>
          <span className="text-[#1A1F2B] font-semibold">Version: <span className="text-gray-400 font-normal">1.4</span></span>
          <span className="text-[#1A1F2B] font-semibold">Effective: <span className="text-gray-400 font-normal">Apr 10, 2026</span></span>
          <span className="text-[#1A1F2B] font-semibold">Last reviewed: <span className="text-gray-400 font-normal">Aug 2026</span></span>
        </div>
      </div>
    </section>
  );
}
