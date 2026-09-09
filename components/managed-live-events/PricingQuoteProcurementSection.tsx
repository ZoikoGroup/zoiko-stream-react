import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function PricingQuoteProcurementSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Pricing, quote & procurement
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Transparent commercial authority — public pricing first when
            available
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Public Pricing */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/9.png"
                alt="Public Pricing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Public Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Access the baseline platform costs instantly. Simple, tiered
                billing metrics accessible directly without any mandatory
                corporate form walls.
              </p>
            </div>
          </div>

          {/* Card 2: Quote-Based Service */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/10.png"
                alt="Quote-Based Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Quote-Based Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Get a custom configured estimate matching your physical AV
                inputs, SLA agreements, stream failover paths, and multi-lingual
                requirements.
              </p>
            </div>
          </div>

          {/* Card 3: Enterprise Procurement */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 backdrop-blur-md overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
            <div className="relative w-full h-48 bg-slate-900">
              <Image
                src="/images/event/11.png"
                alt="Enterprise Procurement"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-slate-950 mb-3">
                Enterprise Procurement
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Accelerate custom compliance structures with structured Master
                Services Agreements (MSA), strict NDAs, and corporate payment
                pathways.
              </p>
            </div>
          </div>
        </div>

        {/* Bullet Notes List */}
        <div className="space-y-3 mb-10 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p>
              No invented Basic/Pro/Enterprise marketing packages — clear
              itemized scope strictly bound to SLA.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p>
              No hidden minimum spend barriers without verified, active service
              component deployment terms.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p>
              Reschedule and cancellation policies are mapped strictly to your
              current legal contract parameters.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-b from-teal-400 via-sky-400 to-blue-500 hover:brightness-105 transition-all shadow-md"
          >
            Review Live Events pricing
          </button>
        </div>
      </div>
    </section>
  );
}
