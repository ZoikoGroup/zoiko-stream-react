import React from 'react';
import Image from 'next/image';

const provenanceItems = [
  'Official relationship: Packages authored solely by ZoikoStream Core',
  'Package registry verified: Cryptographically signed via Sigstore',
  'Source repository verified: Active SLSA Level 3 compliance rules',
  'Identity consistency: Direct code linkage back to verified commits',
];

export function PackageProvenanceSecuritySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (7).png"
          alt="Package Provenance Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Package provenance, security, and supply-chain trust.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every artifact we publish includes automated signature validation pipelines to guarantee integrity.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Checklist Box */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-xl font-bold font-mono">Verification Checklist &amp; Signatures</h3>
            <div className="flex flex-col gap-4">
              {provenanceItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-teal-400/20 border border-teal-400 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-1 border-l-2 border-b-2 border-teal-400 -rotate-45" />
                  </div>
                  <span className="text-white text-sm leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Reporting Card */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-lg font-bold font-mono">Vulnerability Reporting</h3>
            <p className="text-slate-400 text-sm leading-6">
              If you discover a security issue or package irregularity, please submit a diagnostic report immediately using our encrypted vulnerability ingestion service.
            </p>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold font-mono text-center cursor-pointer hover:border-white transition-colors w-fit">
              Report Vulnerability
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
