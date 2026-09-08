import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Info } from 'lucide-react';
import section1Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-1bg.png';

const LAYERS = [
  { num: '01', title: 'Principal', desc: 'Identity context declaration', highlight: true },
  { num: '02', title: 'Authentication', desc: 'Credential assurance boundary verification', highlight: false },
  { num: '03', title: 'Authorization', desc: 'Access control scope check', highlight: false },
  { num: '04', title: 'Protected Action', desc: 'Target gateway routing logic', highlight: false },
  { num: '05', title: 'Evidence', desc: 'Cryptographic security verification logs', highlight: false },
  { num: '06', title: 'Lifecycle', desc: 'Automatic expiry and revocation events', highlight: false },
];

export default function PlatformSecurityAccessHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-center overflow-hidden z-10">
      {/* Background Image section-1bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section1Bg}
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[66px]">
            Control access to video workflows without turning security into guesswork.
          </h1>

          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            ZoikoStream Security and access explains how approved identity, authorization, playback protection, developer access, scope, revocation and evidence fit together across supported video workflows. Exact authentication methods, roles, permissions and security controls remain source-governed.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#security-model"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-sm sm:text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
            >
              Explore Security Model
            </Link>
            <Link
              href="/authentication"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-sm sm:text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors text-center"
            >
              Read Authentication Docs
            </Link>
          </div>

          <div className="w-full pt-2 flex items-center gap-2">
            <Info className="size-4 text-slate-400 shrink-0" />
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              Authentication methods, credential types, and playback protection capabilities are documented by their specialist authorities.
            </p>
          </div>
        </div>

        {/* Right Layered Model Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] p-6 sm:p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 shadow-2xl overflow-hidden">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-100 text-xs sm:text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                SECURITY ARCHITECTURE REFERENCE
              </span>
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                LAYERED MODEL
              </span>
            </div>

            <div className="w-full flex flex-col gap-2">
              {LAYERS.map((layer, idx) => (
                <div
                  key={idx}
                  className={`w-full p-4 rounded-lg outline outline-1 outline-offset-[-1px] flex items-center gap-4 transition-all ${
                    layer.highlight
                      ? 'bg-teal-500/10 outline-teal-500'
                      : 'bg-slate-950 outline-gray-800'
                  }`}
                >
                  <div
                    className={`size-8 rounded-2xl flex items-center justify-center shrink-0 ${
                      layer.highlight ? 'bg-teal-400 text-slate-950' : 'bg-gray-800 text-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold font-['Space_Grotesk']">{layer.num}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
                      {layer.title}
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                      {layer.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
