import React from "react";
import Image from "next/image";

export default function SecurityAudiencePrivacySection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Security, audience access & privacy
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Specialist-owned boundaries for every event
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-44 bg-slate-900">
              <Image
                src="/images/event/2.png"
                alt="Private/restricted audience"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Private/restricted audience
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Enforce rigorous, source-controlled playback and audience access
                decisions. Block external leaks natively.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-44 bg-slate-900">
              <Image
                src="/images/event/3.png"
                alt="Admin & service team access"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Admin & service team access
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Strict, source-controlled authorization pathways ensuring only
                vetted engineering staff monitor active streams.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-44 bg-slate-900">
              <Image
                src="/images/event/4.png"
                alt="Guest & speaker data"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Guest & speaker data
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Minimum necessary metadata collection, protecting participant
                privacy and aligning with strict regional regulations.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-44 bg-slate-900">
              <Image
                src="/images/event/5.png"
                alt="Compliance & evidence"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Compliance & evidence
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Generate undeniable, real-time audit logs and security posture
                compliance data directly from our secure Trust registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
