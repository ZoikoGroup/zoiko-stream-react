import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight, TextQuote } from 'lucide-react';
import section5Bg from '@/public/images/resource-customer-stories/section5bg.png';

import avatar1 from '@/public/images/resource-customer-stories/Ellipse (1).png';
import avatar2 from '@/public/images/resource-customer-stories/Ellipse (2).png';
import avatar3 from '@/public/images/resource-customer-stories/Ellipse (3).png';

const QUOTES = [
  {
    quote: "The migration was smoother than any CDN transition we have done in 15 years. ZoikoStream's documentation and developer experience made our engineering team self-sufficient within two weeks.",
    author: 'James Liu',
    role: 'Principal Engineer, Vanguard Sports Network',
    avatar: avatar1,
    href: '#',
  },
  {
    quote: "For our rural clinics, video quality is not a luxury - it is a diagnostic tool. ZoikoStream's adaptive bitrate ensured our specialists could see what they needed regardless of bandwidth.",
    author: 'Dr. Amara Osei',
    role: 'Chief Medical Officer, Lumina Health',
    avatar: avatar2,
    href: '#',
  },
  {
    quote: 'We went from managing five separate streaming vendors to one platform. Our operations team finally sleeps during live events.',
    author: 'Marcus Torres',
    role: 'Director of Operations, NovaForge Studios',
    avatar: avatar3,
    href: '#',
  },
];

export default function ResourceCustomerStoriesQuotesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-zinc-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section5Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section5Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Authentic voices from real teams
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Direct quotes from customers who approved their words for public sharing. No synthetic or composite quotes.
        </p>
      </div>

      {/* 3 Quote Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUOTES.map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-slate-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-start gap-7 hover:border-gray-700 transition-all"
          >
            <div className="flex flex-col gap-5">
              <TextQuote className="size-7 text-teal-400 shrink-0" />
              <p className="text-slate-100 text-base font-medium font-['Space_Grotesk'] leading-relaxed">
                {item.quote}
              </p>
            </div>

            <div className="w-full flex flex-col gap-4 mt-auto">
              <div className="w-full h-px bg-gray-800" />
              <div className="flex items-center gap-3">
                <div className="relative size-12 rounded-full overflow-hidden shrink-0 bg-slate-800">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <span className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                    {item.author}
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                    {item.role}
                  </span>
                </div>
              </div>

              <Link
                href={item.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1.5 transition-colors pt-1"
              >
                Read their full story <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
