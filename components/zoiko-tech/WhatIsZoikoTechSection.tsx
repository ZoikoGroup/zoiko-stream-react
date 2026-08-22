import React from 'react';
import Image from 'next/image';

export default function WhatIsZoikoTechSection() {
  return (
    <section className="w-full bg-white py-16 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 border-l-4 border-teal-400 bg-slate-50/50 rounded-r-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold   text-slate-900">
              What is Zoiko Tech?
            </h2>
            <p className="text-slate-600 text-base font-normal   leading-relaxed">
              Zoiko Tech is the technology company behind ZoikoStream. It is responsible for the platform&apos;s product and engineering stewardship, while ZoikoStream is the streaming platform itself and Zoiko Cloud provides shared technology and infrastructure that supports the platform. Live Events is a specialized ZoikoStream capability.
            </p>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Customer-specific legal-provider, data-processing, security, and service commitments are defined by the applicable agreements, notices, and trust documentation.
            </p>
          </div>

          <div className="relative w-72 h-36 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white">
            <Image
              src="/images/zoiko-tech/image 1.png"
              alt="Zoiko Tech Logo Visual"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
