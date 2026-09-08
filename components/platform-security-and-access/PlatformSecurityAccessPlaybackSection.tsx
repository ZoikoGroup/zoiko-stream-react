import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section9Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-9bg.png';
import mediaStackGraphic from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/MediaStackGraphic.png';

const PLAYBACK_CONTROLS = [
  'Playback Authorization',
  'Audience Access Policies',
  'Domain & Embed Restrictions',
  'Content Protection',
  'Token Expiry & Revocation',
];

export default function PlatformSecurityAccessPlaybackSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-9bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section9Bg}
          alt="Playback Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Secure playback and audience access
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Playback authorization is a media-security specialist contract separate from platform and administrator authorization.
          </p>
        </div>

        {/* 2 Column Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
            <h3 className="text-slate-100 text-base sm:text-lg font-bold font-['Space_Grotesk']">
              Content / Resource → Access Policy → Playback Authorization → Player / Delivery
            </h3>

            <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
              ZoikoStream supports source-approved secure playback controls. Exact mechanisms, token types, domain restrictions, and content protection technologies are documented by the Secure playback authority.
            </p>

            <div className="w-full flex flex-col gap-3">
              {PLAYBACK_CONTROLS.map((title, idx) => (
                <div
                  key={idx}
                  className="w-full p-3 bg-zinc-900/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex justify-between items-center gap-4"
                >
                  <span className="text-slate-100 text-xs font-bold font-['Space_Grotesk']">
                    {title}
                  </span>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk'] shrink-0">
                    Only if current source confirms.
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/developer-secure-playback"
              className="inline-flex items-center gap-2 text-teal-400 text-base font-bold font-['Space_Grotesk'] hover:underline pt-2"
            >
              <span>Read Secure Playback documentation</span>
              <ArrowRight className="size-4 text-teal-400" />
            </Link>
          </div>

          {/* Right Column Box: MEDIA SECURITY ARCHITECTURE */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] p-6 sm:p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-5 shadow-2xl">
              <span className="text-slate-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                MEDIA SECURITY ARCHITECTURE
              </span>

              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={mediaStackGraphic}
                  alt="Media Security Architecture Graphic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
