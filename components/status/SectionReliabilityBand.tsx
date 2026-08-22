import React from 'react';

const imgReliabilityBand = "/images/status/reliability-band-bg.png";

export default function SectionReliabilityBand() {
  return (
    <div className="relative rounded-[16px] overflow-hidden">
      <img
        alt="Independently hosted infrastructure representing status page reliability."
        className="absolute inset-0 size-full object-cover"
        src={imgReliabilityBand}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(43,45,53,0.92) 0%, rgba(43,45,53,0.72) 55%, rgba(43,45,53,0.4) 100%)",
        }}
      />
      <div className="relative p-[30px] py-[40px] lg:py-[30px]">
        <h2 className="font-sora font-bold text-white text-[17px] tracking-[-0.17px] m-0 mb-[16px] max-w-[420px]">
          Built to stay reachable when it matters most.
        </h2>
        <p className="font-inter font-normal text-[#d6d9e2] text-[13px] leading-[1.55] m-0 max-w-[470px]">
          This status page is hosted independently from the primary ZoikoStream application, so you can check service health even during a broader platform incident.
        </p>
      </div>
    </div>
  );
}
