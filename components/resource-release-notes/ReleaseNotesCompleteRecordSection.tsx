import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, FileText, Video, Code2, TriangleAlert, Code, BookOpen, GitMergeConflict, GitMergeIcon, GitPullRequest } from 'lucide-react';

import bg5 from '@/public/images/resource-release-notes/section-5bg.png';

export default function ReleaseNotesCompleteRecordSection() {
  return (
    <section id="complete-release-record" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Complete Release Record Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Complete release record
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          View the detailed breakdown of the v4.0 Adaptive Bitrate Engine deployment.
        </p>
      </div>

      {/* Record White Card */}
      <div className="relative z-10 w-full p-6 sm:p-12 bg-white rounded-2xl flex flex-col justify-start items-start gap-8 shadow-2xl">
        {/* Breadcrumb */}
        <div className="text-xs font-normal font-['Inter']">
          <span className="text-slate-500">Resources &gt; Release Notes &gt; </span>
          <span className="text-slate-900 font-semibold">Adaptive Bitrate Engine v4.0</span>
        </div>

        {/* Header Badges & Title */}
        <div className="w-full pb-6 border-b border-gray-200 flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="px-2.5 py-1 bg-blue-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500/30">
              <span className="text-blue-600 text-xs font-semibold font-['Inter']">
                New Capability
              </span>
            </div>
            <div className="px-2.5 py-1 bg-amber-100 rounded-full outline outline-1 outline-offset-[-1px] outline-amber-500">
              <span className="text-amber-800 text-xs font-semibold font-['Inter']">
                Action Recommended
              </span>
            </div>
          </div>

          <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
            Adaptive Bitrate Engine v4.0
          </h3>

          <div className="w-full flex flex-wrap items-center gap-6 text-xs font-normal font-['Inter']">
            <div>
              <span className="text-slate-900 font-bold">Published: </span>
              <span className="text-slate-600">Feb 24, 2026</span>
            </div>
            <div>
              <span className="text-slate-900 font-bold">Effective Date: </span>
              <span className="text-slate-600">March 1, 2026</span>
            </div>
            <div>
              <span className="text-slate-900 font-bold">Product Area: </span>
              <span className="text-slate-600">Video Ingest &amp; Encoding</span>
            </div>
            <div>
              <span className="text-slate-900 font-bold">Audience: </span>
              <span className="text-slate-600">Developers &amp; Sysadmins</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-12">
          {/* Left Column Details */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Direct Summary
              </h4>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                The v4.0 release introduces automated machine-learning adjustments to stream ingestion transcode algorithms. By analyzing motion vector density in real-time, the encoder dynamically scales active transcode layers, protecting overall stream quality on constrained delivery segments while saving network compute bounds.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                What&apos;s New &amp; Changed
              </h4>
              <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed space-y-1">
                <p>• Implemented ML-driven transcode layer scaling.</p>
                <p>• Added native fallback logic to H.265 / HEVC stream schemas.</p>
                <p>• Upgraded SRT protocol handlers for better packet recovery on lossy networks.</p>
                <p>• Fixed minor audio track drift on ultra-low latency playback sessions.</p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <h4 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Who Is Affected
              </h4>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                All active developers utilizing our primary transcode APIs, ingest SRT connections, or deploying custom live video pipelines on the ZoikoStream cloud network.
              </p>
            </div>

            <div className="w-full p-4 bg-slate-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                CORRECTION HISTORY
              </span>
              <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-relaxed">
                • Feb 25, 2026: Corrected Typo in API webhook payload documentation example.
              </p>
            </div>
          </div>

          {/* Right Column Migration Box & Related Resources */}
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-6 shrink-0">
            {/* Migration Box */}
            <div className="w-full p-6 bg-stone-50 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-red-500/30 flex flex-col justify-start items-start gap-4">
              <div className="flex items-center gap-2">
                <TriangleAlert className="w-5 h-5 text-red-500" />
                <h4 className="text-red-800 text-base font-bold font-['Space_Grotesk']">
                  Migration &amp; Action
                </h4>
              </div>
              <p className="text-red-800 text-xs font-normal font-['Inter'] leading-relaxed">
                Active integrations must ensure player SDKs are upgraded to v3.2+ to seamlessly receive H.265 fallback layers without playback interruptions.
              </p>
              <div className="w-full pt-3 border-t border-red-500/10">
                <span className="text-red-800 text-xs font-semibold font-['Inter']">
                  Deadline: June 1, 2026
                </span>
              </div>
            </div>

            {/* Related Resources Box */}
            <div className="w-full p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] tracking-wider uppercase">
                RELATED RESOURCES
              </span>

              <Link
                href="/api-reference"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-xs font-semibold font-['Inter'] underline transition-colors"
              >
                <Code className="w-3.5 h-3.5 text-blue-600" />
                <span>API Reference Guide</span>
              </Link>

              <Link
                href="/developer-documentation"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-xs font-semibold font-['Inter'] underline transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Player Integration Tutorial</span>
              </Link>

              <Link
                href="/resource-change-log"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-xs font-semibold font-['Inter'] underline transition-colors"
              >
                <GitPullRequest className="w-3.5 h-3.5 text-blue-600" />
                <span>Git Changelog #4829</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
