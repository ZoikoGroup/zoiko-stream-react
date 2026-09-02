import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import featuredImg from '@/public/images/resource-customer-stories/FeaturedImage.png';
import sarahAvatar from '@/public/images/resource-customer-stories/Ellipse.png';

export default function ResourceCustomerStoriesFeaturedSection() {
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

      {/* Header Title */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          How Meridian Broadcasting transformed live event delivery
        </h2>
      </div>

      {/* 2-Column Content Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Featured Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-gray-900 shadow-lg group">
          <Image
            src={featuredImg}
            alt="Meridian Broadcasting Live Production"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Details & Quote */}
        <div className="w-full flex flex-col justify-start items-start gap-6">
          {/* Organization Tag */}
          <div className="px-3 py-1.5 bg-slate-100 rounded-md inline-flex justify-start items-center">
            <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              MERIDIAN BROADCASTING | MEDIA & ENTERTAINMENT
            </span>
          </div>

          {/* Quote Statement */}
          <blockquote className="w-full text-slate-900 text-lg sm:text-xl font-normal font-['Space_Grotesk'] leading-relaxed">
            &quot;ZoikoStream changed how we think about live production. The reliability during our 50,000-viewer concert streams gave our engineering team confidence we never had before.&quot;
          </blockquote>

          {/* Author Person Box */}
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full overflow-hidden shrink-0 bg-slate-200">
              <Image
                src={sarahAvatar}
                alt="Sarah Chen"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                Sarah Chen
              </span>
              <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                VP of Engineering, Meridian Broadcasting
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Meridian Broadcasting adopted ZoikoStream to handle growing demand for multi-camera live concerts and sports broadcasts. Their journey from fragmented CDN management to a unified streaming platform reduced incident response time and improved viewer experience across 12 global regions.
          </p>

          {/* Link CTA */}
          <Link
            href="#"
            className="text-teal-400 hover:text-teal-300 text-base font-bold font-['Space_Grotesk'] flex items-center gap-2 transition-colors pt-2"
          >
            Read the full story <ArrowRight className="size-4 text-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
