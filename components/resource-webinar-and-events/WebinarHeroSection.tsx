import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import bg11 from '@/public/images/resource-webinar-and-events/bg (11).png';

export default function WebinarHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[951px] px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/70 border-b border-gray-800 flex flex-col justify-center items-start gap-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg11}
          alt="Webinars and Events Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Column Content */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
          {/* Badge */}
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 bg-teal-400/10 inline-flex justify-start items-start">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
              WEBINARS AND EVENTS
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
              Learn live. Return to the replay when available.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Discover ZoikoStream webinars, technical sessions, workshops, and available replays for developers, operators, live-event teams, and organizations evaluating better video workflows.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-lg p-4 bg-gray-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-700 flex justify-start items-center gap-4">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by topic, workflow, event, or product area"
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-sm font-normal font-['Inter'] outline-none"
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-start items-center gap-6">
            <Link
              href="#browse-events"
              className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Browse all events
              </span>
            </Link>
            <Link
              href="/resource-video-tutorial"
              className="flex items-center gap-2 group"
            >
              <span className="text-white text-base font-bold font-['Space_Grotesk'] underline group-hover:text-teal-400 transition-colors">
                Explore Video tutorials
              </span>
              <ArrowRight className="w-4 h-4 text-white group-hover:text-teal-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Right Column Card */}
        <div className="w-full lg:w-[480px] p-6 sm:p-8 bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
          <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            UPCOMING SCHEDULE AT A GLANCE
          </span>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full p-4 bg-gray-800/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                    Interactive Grid Scaling
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                    Live Demo · Today 2PM PT
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 bg-gray-800/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-blue-500 rounded-full shrink-0" />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                    SSO Restricted Broadcasts
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                    Technical Session · Tomorrow 11AM PT
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 bg-gray-800/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-white text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                    API Cold Storage Setup
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                    Workshop · Sept 18
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Calendar className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              Sync Calendar Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
