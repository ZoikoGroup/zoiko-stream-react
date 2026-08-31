import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Handshake } from 'lucide-react';

import bg15 from '@/public/images/resource-webinar-and-events/bg (33).png';

export default function WebinarExpertContactCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/90 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 sm:gap-16 overflow-hidden">
      {/* Background Image - bg (15).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg15}
          alt="Talk to Expert Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[52px]">
          Talk to a ZoikoStream expert.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
          After exploring our events, replays, and resources - if you need custom architecture guidance, enterprise integration support, or want to discuss your specific video workflow requirements, our team is here to help.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact-us"
            className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
              Talk to an Expert
            </span>
          </Link>
          <Link
            href="/about-us"
            className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
          >
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Schedule a Demo
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full lg:w-[480px] h-80 p-8 sm:p-10 bg-gray-800/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-center items-center gap-6 text-center shrink-0">
        <div className="relative size-16 flex justify-center items-center">
          <Handshake className="w-12 h-12 text-teal-400" />
        </div>
        <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
          Platform Solution Engineering
        </h3>
        <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
          Dedicated team setup, compliance mapping, and custom performance architectures ready for validation.
        </p>
      </div>
    </section>
  );
}
