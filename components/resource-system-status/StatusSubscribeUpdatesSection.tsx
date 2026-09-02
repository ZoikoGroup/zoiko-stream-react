import React from 'react';
import Image from 'next/image';
import { Mail, Rss, Code } from 'lucide-react';

import bg7 from '@/public/images/resources-system-status/section-5bg.png';

export default function StatusSubscribeUpdatesSection() {
  return (
    <section id="subscribe" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="Subscribe Updates Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Subscribe to status updates
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Get notified when something changes. Operational notifications only — never marketing.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Channel 1: Email */}
        <div className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 p-6 sm:p-8 flex flex-col justify-between items-start gap-6">
          <div className="w-full flex justify-between items-center">
            <div className="p-2 bg-gray-800 rounded-md">
              <Mail className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              CHANNEL 01
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              Email alerts
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Get automatic email logs for critical incidents, performance degradations, and maintenance.
            </p>
          </div>

          <div className="w-full p-3 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-400 text-sm font-normal font-['Inter']">
            you@company.com
          </div>

          <button className="w-full py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>

        {/* Channel 2: Webhook */}
        <div className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 p-6 sm:p-8 flex flex-col justify-between items-start gap-6">
          <div className="w-full flex justify-between items-center">
            <div className="p-2 bg-gray-800 rounded-md">
              <Code className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              CHANNEL 02
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              Webhook delivery
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Instruct our telemetry pipeline to POST structured JSON payloads directly to your endpoint.
            </p>
          </div>

          <div className="w-full p-3 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-400 text-sm font-normal font-['Inter'] truncate">
            https://api.yourdomain.com/status
          </div>

          <button className="w-full py-3 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors">
            Configure Webhook
          </button>
        </div>

        {/* Channel 3: RSS Feed */}
        <div className="bg-zinc-900 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 p-6 sm:p-8 flex flex-col justify-between items-start gap-6">
          <div className="w-full flex justify-between items-center">
            <div className="p-2 bg-gray-800 rounded-md">
              <Rss className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              CHANNEL 03
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              RSS / Atom feed
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Subscribe through your preferred aggregator client or internal automated Slack RSS channels.
            </p>
          </div>

          <div className="w-full p-3 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-400 text-sm font-normal font-['Inter']">
            /status/feed.xml
          </div>

          <button className="w-full py-3 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors">
            Copy Feed URL
          </button>
        </div>
      </div>
    </section>
  );
}
