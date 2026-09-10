import React from 'react';
import Link from 'next/link';

export default function VersioningSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Versioning &amp; schema evolution
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Version event contracts deliberately.
        </h2>

        <div className="flex flex-col lg:flex-row gap-[64px] w-full mt-6">
          {/* Left: Timeline */}
          <div className="relative w-full lg:w-[480px] pl-6 border-l-2 border-solid border-[#dde2ea] flex flex-col gap-[32px]">
            <div className="relative">
              <div className="absolute -left-[31px] top-[6px] w-[10px] h-[10px] rounded-full bg-[#1f9d6f]" />
              <span className="inline-flex h-[19px] items-center rounded-full bg-[#eafaf3] px-[12px] font-inter text-[10.5px] font-bold text-[#1f9d6f] mb-2">v1 &middot; Current</span>
              <p className="font-inter text-[13.5px] leading-[21.87px] text-[#63697a]">
                Introduced Jan 2026. Additive optional fields may be added without a version bump.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[31px] top-[6px] w-[10px] h-[10px] rounded-full bg-[#9aa1ae]" />
              <span className="inline-flex h-[19px] items-center rounded-full bg-[#f1f4f8] px-[12px] font-inter text-[10.5px] font-bold text-[#63697a] mb-2">Preview features</span>
              <p className="font-inter text-[13.5px] leading-[21.87px] text-[#63697a]">
                Preview event types may change before becoming Stable &mdash; pin to Stable events for production-critical workflows.
              </p>
            </div>
          </div>

          {/* Right: Text box */}
          <div className="flex w-full lg:w-[480px] flex-col gap-[20px] justify-center">
            <p className="font-inter text-[14px] leading-[22.68px] text-[#63697a]">
              <span className="font-bold">Compatibility guidance:</span> tolerate additive unknown fields and ignore fields you don't recognize unless the current schema contract requires strict validation.
            </p>
            <p className="font-inter text-[14px] leading-[22.68px] text-[#63697a]">
              Breaking changes require a versioned event contract or an approved migration mechanism &mdash; never a silent field removal.
            </p>
            <Link href="#" className="font-inter text-[13.5px] font-semibold text-[#5b8def] hover:underline mt-2">
              Review changelog &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
