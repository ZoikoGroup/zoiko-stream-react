import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Layers, Video, Code, ArrowUpRight } from 'lucide-react';

const RELATED_TERMS = ['Latency', 'Ingest', 'RTMP', 'HLS', 'CDN'];

export default function GlossaryTermDeepDiveSection() {
  return (
    <section
      id="live-stream"
      className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden"
    >
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] left-[1068px] top-[620px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2">
        <Link
          href="/resources"
          className="text-slate-600 hover:text-slate-900 text-xs font-medium font-['Space_Grotesk']"
        >
          Resources
        </Link>
        <span className="text-slate-400 text-xs font-medium font-['Space_Grotesk']">
          →
        </span>
        <Link
          href="/resource-glossary"
          className="text-slate-600 hover:text-slate-900 text-xs font-medium font-['Space_Grotesk']"
        >
          Glossary
        </Link>
        <span className="text-slate-400 text-xs font-medium font-['Space_Grotesk']">
          →
        </span>
        <span className="text-teal-600 text-xs font-bold font-['Space_Grotesk']">
          Live Stream
        </span>
      </div>

      {/* Term Header */}
      <div className="relative z-10 w-full flex flex-col gap-6">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60.80px]">
            Live Stream
          </h2>
          <div className="px-3.5 py-1.5 bg-teal-400 rounded-full">
            <span className="text-slate-950 text-xs font-bold font-['Space_Grotesk']">
              FOUNDATIONAL TERM
            </span>
          </div>
        </div>
        <div className="w-full h-0 border-b border-gray-200" />
      </div>

      {/* Definition & Details Grid */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-start items-start gap-12 sm:gap-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col gap-3 w-full">
            <span className="text-slate-600 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              DEFINITION
            </span>
            <p className="text-slate-900 text-lg font-normal font-['Space_Grotesk'] leading-7">
              A continuous transmission of audio and video data from a source to one or more viewers in near real-time, where the content is consumed as it arrives rather than downloaded in full before playback.
            </p>
          </div>

          <div className="w-full p-5 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-2">
            <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] uppercase">
              ALSO KNOWN AS:
            </span>
            <span className="text-slate-900 text-base font-medium font-['Space_Grotesk']">
              livestream, live broadcast, real-time stream
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <span className="text-slate-600 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              WHY IT MATTERS
            </span>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-6">
              Live streaming forms the infrastructure base of modern interactive experiences, virtual town halls, and broadcast operations. Unlike VOD, it requires optimized low-latency ingest, instant transcoding, and distributed edge buffering to survive connection context fluctuations.
            </p>
          </div>
        </div>

        {/* Right Column Sidebar */}
        <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-8 shrink-0">
          {/* Related Terms */}
          <div className="w-full p-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 bg-white flex flex-col justify-start items-start gap-4">
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] uppercase">
              RELATED TERMS
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {RELATED_TERMS.map((term, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <span className="text-slate-600 text-xs font-medium font-['Space_Grotesk']">
                    {term}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specification Details */}
          <div className="w-full p-6 bg-slate-50 rounded-2xl flex flex-col justify-start items-start gap-4">
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk'] uppercase">
              SPECIFICATION DETAILS
            </span>
            <div className="w-full flex flex-col justify-start items-start gap-3 text-xs">
              <div>
                <span className="text-slate-900 font-bold font-['Inter']">
                  Standard Protocol:{' '}
                </span>
                <span className="text-slate-600 font-normal font-['Inter']">
                  SRT / RTMPS
                </span>
              </div>
              <div>
                <span className="text-slate-900 font-bold font-['Inter']">
                  Playback Formats:{' '}
                </span>
                <span className="text-slate-600 font-normal font-['Inter']">
                  HLS / LL-HLS / WebRTC
                </span>
              </div>
              <div>
                <span className="text-slate-900 font-bold font-['Inter']">
                  Latency Budget:{' '}
                </span>
                <span className="text-slate-600 font-normal font-['Inter']">
                  Sub-second to 5 seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Sub-block */}
      <div className="relative z-10 w-full flex flex-col gap-6 pt-6">
        <span className="text-slate-600 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
          LEARN MORE ABOUT LIVE STREAM IMPLEMENTATION
        </span>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/resource-architecture"
            className="p-6 bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(10,17,34,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-full flex justify-between items-center">
              <div className="size-10 bg-sky-100 rounded-lg flex justify-center items-center">
                <Layers className="w-5 h-5 text-blue-700" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                Architecture Guide
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-4">
                System design patterns for globally distributed ingest
              </p>
            </div>
          </Link>

          <Link
            href="/resource-video-tutorial"
            className="p-6 bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(10,17,34,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-full flex justify-between items-center">
              <div className="size-10 bg-sky-100 rounded-lg flex justify-center items-center">
                <Video className="w-5 h-5 text-blue-700" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                Video Tutorials
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-4">
                Step-by-step walkthroughs of pipeline setups
              </p>
            </div>
          </Link>

          <Link
            href="/developer-documentation"
            className="p-6 bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(10,17,34,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-full flex justify-between items-center">
              <div className="size-10 bg-sky-100 rounded-lg flex justify-center items-center">
                <Code className="w-5 h-5 text-blue-700" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                API Reference
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-4">
                Native client-side and server-side SDK parameters
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
