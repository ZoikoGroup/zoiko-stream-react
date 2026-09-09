import React from "react";
import Image from "next/image";

export default function EventEvidenceProofSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Event evidence & proof
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Approved evidence only — synthetic or rights-cleared
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Enterprise Event Architecture */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/15.png"
                alt="Enterprise Event Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Enterprise Event Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Fully source-approved setup patterns mapping complex local
                  physical encoders directly to our secure global cloud
                  distribution fabric.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:underline inline-block"
              >
                View details
              </a>
            </div>
          </div>

          {/* Card 2: Event Delivery Evidence */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/16.png"
                alt="Event Delivery Evidence"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Event Delivery Evidence
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Actual performance charts indicating real-time concurrent load
                  peaks, secure SAML login timelines, and complete latency
                  sweeps.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:underline inline-block"
              >
                View details
              </a>
            </div>
          </div>

          {/* Card 3: Operational Proof */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/17.png"
                alt="Operational Proof"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  Operational Proof
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Vetted infrastructure failover results mapping automatic
                  switching transitions when primary local WAN pipelines
                  encounter drop issues.
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:underline inline-block"
              >
                View details
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
          * No invented event proof. Customer names, specific event details,
          real-world metrics, and live dashboards require explicit rights
          clearing and private data scrubbing beforehand.
        </p>
      </div>
    </section>
  );
}
