import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  CircleAlert } from 'lucide-react';
import section5Bg from '@/public/images/resource-contact-support/section-5bg.png';

export default function ResourceContactSupportReviewSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 lg:py-28 bg-black/80 flex flex-col justify-start items-center gap-14 overflow-hidden z-10 border-b border-gray-800">
      {/* Background Image */}
      {section5Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section5Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col justify-start items-center text-center gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Review before you submit
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Confirm your request details. You can edit any field before submitting.
        </p>
      </div>

      {/* Summary Card */}
      <div className="relative z-10 w-full max-w-2xl p-8 bg-gray-800 rounded-2xl shadow-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-6">
        <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
          SUMMARY SPECIFICATION
        </span>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                SUPPORT CATEGORY
              </span>
              <span className="text-white text-base font-bold font-['Space_Grotesk']">
                Developer & API Support
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                CONTACT CHANNEL
              </span>
              <span className="text-white text-base font-bold font-['Space_Grotesk']">
                email (Response within 1h)
              </span>
            </div>
          </div>

          <div className="w-full h-0 border-b border-gray-800" />

          <div className="flex flex-col gap-1.5">
            <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
              SUBMITTED TEXT PREVIEW
            </span>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed italic">
              &quot;Attempting to initialize the Swift SDK (v2.5.3) on iOS 17 yields a TLS handshake failure during signaling negotiation on TCP Port 443...&quot;
            </p>
          </div>

          <div className="w-full h-0 border-b border-gray-800" />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                ATTACHMENTS LISTED
              </span>
              <span className="text-blue-500 text-xs font-normal font-['Inter']">
                • console_diagnostics.log (122KB)
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">
                ENVIRONMENT
              </span>
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                iOS 17 Client App
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Privacy Warning Box */}
        <div className="w-full p-3 bg-orange-600/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-600/20 flex items-center gap-2.5">
          <CircleAlert className="size-4 text-orange-400 shrink-0" />
          <span className="text-orange-400 text-xs font-normal font-['Space_Grotesk'] leading-6">
            Privacy reminder: Remove any secrets or sensitive data before submission.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Link
            href="#support-form"
            className="w-full sm:flex-1 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] text-center hover:bg-white/10 transition-colors"
          >
            Edit request
          </Link>
          <Link
            href="#confirmation"
            className="w-full sm:flex-1 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] text-center hover:opacity-90 transition-opacity"
          >
            Submit request
          </Link>
        </div>

        <span className="w-full text-center text-gray-500 text-xs font-normal font-['Space_Grotesk']">
          Repeated submission will not create duplicate cases.
        </span>
      </div>
    </section>
  );
}
