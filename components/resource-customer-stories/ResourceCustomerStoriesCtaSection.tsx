import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import meetingRoomImg from '@/public/images/resource-customer-stories/Meeting-Room-Image.png';

const BULLETS = [
  'Personalized demo based on your streaming use case',
  'Architecture review for your scale and region requirements',
  'Implementation timeline and migration planning',
  'Enterprise pricing and support tier configuration',
];

export default function ResourceCustomerStoriesCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* 2 Column Container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Form Action */}
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-4">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
              Ready to see how ZoikoStream works for your team?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
              Connect with our solutions team for a personalized walkthrough based on your use case, scale, and infrastructure requirements.
            </p>
          </div>

          {/* Bullets List */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {BULLETS.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="size-5 bg-teal-400/10 rounded-md flex justify-center items-center shrink-0">
                  <Check className="size-3.5 text-teal-400" />
                </div>
                <span className="text-slate-900 text-base font-medium font-['Space_Grotesk']">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button & Subtext */}
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <Link
              href="/talk-to-an-expert"
              className="w-full sm:w-64 px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center text-zinc-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Talk to an Expert
            </Link>
            <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
              Available for qualified enterprise evaluations.
            </span>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[432px] rounded-3xl overflow-hidden  group">
          <Image
            src={meetingRoomImg}
            alt="Meeting Room Evaluation"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
