import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import bg5 from '@/public/images/resources-changelog/section-5bg.png';

export default function ChangelogCompleteRecordSection() {
  return (
    <section id="complete-record" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Complete Record Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Complete change record
        </h2>
      </div>

      {/* Record Card */}
      <div className="relative z-10 w-full p-6 sm:p-10 bg-zinc-900/95 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-8 shadow-xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-normal font-['Inter'] text-slate-500">
          <span>Resources</span>
          <span>/</span>
          <span>Changelog</span>
          <span>/</span>
          <span className="text-teal-400 font-semibold">ZSK-2849</span>
        </div>

        {/* Badges & Date */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="px-2 py-0.5 bg-red-400/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-red-400">
              <span className="text-red-400 text-xs font-bold font-['Inter']">
                BREAKING
              </span>
            </div>
            <div className="px-2 py-0.5 bg-gray-950 rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-800">
              <span className="text-slate-400 text-xs font-normal font-['Inter']">
                PLATFORM API V3
              </span>
            </div>
          </div>
          <span className="text-slate-500 text-xs font-normal font-['Inter']">
            Released Feb 24, 2026 · Effective Mar 30, 2026
          </span>
        </div>

        <h3 className="text-white text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Enforce TLS 1.3 Handshake Protocols across all Ingestion Edges
        </h3>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Detailed Sections */}
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              WHAT CHANGED
            </span>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              All secure video ingestion edges (RTMP over TLS / SRT over TLS) now reject incoming client handshakes utilizing TLS 1.0, 1.1, or 1.2 schemas. Ingress pipelines enforce immediate termination of compliant streams that fail the TLS 1.3 cipher negotiation.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              WHO IS AFFECTED
            </span>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Developer operations deploying continuous legacy capture setups or embedded hardware decoders that do not natively support modern TLS 1.3 protocol validation ladders.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              MIGRATION &amp; REPLACEMENT PATH
            </span>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Update downstream encoder operating frameworks or local pipeline parameters to target TLS 1.3 capabilities. Test connections against our pre-released sandbox endpoint sandbox-ingest.zoiko.io.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-2">
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              EFFECTIVE TIMING
            </span>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Currently deployed as elective inside sandbox environments. Rigid global production rollout on all public ingestion pathways is scheduled for March 30, 2026.
            </p>
          </div>
        </div>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Footer Links */}
        <div className="w-full flex flex-wrap items-center gap-8">
          <Link
            href="#rfc-spec"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-normal font-['Inter'] transition-colors"
          >
            <span>RFC-9147 Ingest Spec</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
          <Link
            href="#github-sample"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-normal font-['Inter'] transition-colors"
          >
            <span>GitHub Integration Sample</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
