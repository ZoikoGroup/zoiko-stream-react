import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function ReviewTransferSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl text-left w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Review What Will Transfer
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Before submission, review every field grouped by category. Edit or remove any item. See the destination that receives your request and what does not transfer.
          </p>
        </div>

        {/* Center Staged Plan Summary Card */}
        <div className="w-full max-w-[800px] p-6 sm:p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 shadow-sm space-y-6">
          <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
            Staged Plan Summary
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
              <span className="text-slate-600 font-bold">Basic Intent</span>
              <span className="text-zinc-950 font-medium">Boutique Product Launch — Oct 14, 2026</span>
            </div>
            <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
              <span className="text-slate-600 font-bold">Target Scale</span>
              <span className="text-zinc-950 font-medium">Level 3: Global Stadium Tier — 2,500+ Viewers</span>
            </div>
            <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
              <span className="text-slate-600 font-bold">Assurance Needs</span>
              <span className="text-zinc-950 font-medium">Secondary cellular failover checks requested</span>
            </div>
            <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-1 text-xs font-['Space_Grotesk']">
              <span className="text-slate-600 font-bold">Reporting Category</span>
              <span className="text-zinc-950 font-medium">Aggregate region analytics (Privacy Compliant)</span>
            </div>
          </div>

          {/* Warning Box: What does NOT transfer */}
          <div className="p-4 bg-stone-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-red-200 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-red-600 text-sm font-bold font-['Space_Grotesk']">
                What does NOT transfer
              </h4>
              <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                Passwords, API secrets, stream keys, private local venue URLs, attendee lists, or unnecessary confidential event details are blocked and will be deleted.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              className="px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Submit event plan
            </button>
            <button
              type="button"
              className="px-8 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 text-zinc-950 text-base font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors"
            >
              Modify fields
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
