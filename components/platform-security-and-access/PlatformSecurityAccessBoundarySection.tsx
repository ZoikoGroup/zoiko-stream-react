import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Dot, ArrowRight } from 'lucide-react';
import section5Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-5bg.png';

const EXPLAINS = [
  'An approved principal must be established before protected actions',
  'Protected requests use approved credentials',
  'Session state may influence access where source-backed',
];

const DEFERS = [
  'Exact identity providers and verification flows',
  'Token/key/session types, formats and expiry',
  'MFA/SSO/passwordless scope and setup',
  'Secret issuance, storage and rotation',
];

export default function PlatformSecurityAccessBoundarySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-5bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section5Bg}
          alt="Boundary Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Identity and authentication boundary
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Authentication proves an approved principal and credential context. It does not by itself authorize a protected action.
          </p>
        </div>

        {/* 2 Column Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                What Security and Access explains
              </h3>
              <div className="flex flex-col gap-3">
                {EXPLAINS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="size-4 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 shrink-0">
                      <Check className="size-3 text-teal-400" />
                    </div>
                    <span className="text-slate-400 text-sm font-normal font-['Space_Grotesk']">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                What defers to Authentication docs
              </h3>
              <div className="flex flex-col gap-3">
                {DEFERS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                    <span className="text-slate-400 text-sm font-normal font-['Space_Grotesk']">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/authentication"
              className="inline-flex items-center gap-2 text-teal-400 text-sm font-bold font-['Space_Grotesk'] hover:underline pt-2"
            >
              <span>Read Authentication documentation</span>
              <ArrowRight className="size-4 text-teal-400" />
            </Link>
          </div>

          {/* Right Column Split Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] p-7 sm:p-8 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-6 shadow-2xl">
              <span className="text-slate-100 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                IDENTITY VS AUTHORIZATION SPLIT
              </span>

              <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 w-full p-4 bg-slate-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                    IDENTITY
                  </span>
                  <span className="text-slate-100 text-xs font-bold font-['Space_Grotesk']">
                    Authentication: Who are you?
                  </span>
                </div>

                <ArrowRight className="size-5 text-teal-400 shrink-0 transform rotate-90 sm:rotate-0" />

                <div className="flex-1 w-full p-4 bg-slate-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-2">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                    ACCESS CONTROL
                  </span>
                  <span className="text-slate-100 text-xs font-bold font-['Space_Grotesk']">
                    Authorization: What may you do?
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                Identity verification establishes identity context, whereas access policies independently validate resource permission rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
