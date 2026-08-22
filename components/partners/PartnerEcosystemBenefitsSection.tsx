import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import handshakeImg from '@/public/images/partners/Business handshake.png';

const pillars = [
  { title: 'Build', desc: 'Access public developer resources and, where eligible, partner-specific technical enablement to build or validate relevant integrations.' },
  { title: 'Deliver', desc: 'Coordinate on customer implementations or live-event needs when the relationship type and opportunity support joint engagement.' },
  { title: 'Go to market', desc: 'Eligible partners may receive approved ecosystem visibility, solution storytelling, or joint go-to-market opportunities under applicable program rules.' },
  { title: 'Grow', desc: 'Create repeatable customer value around ZoikoStream. Benefits such as leads, revenue, or exclusivity are not universal or guaranteed.' },
];

export default function PartnerEcosystemBenefitsSection() {
  return (
    <section className="w-full bg-zinc-700 text-white py-20 border-b border-gray-800" id="apply-partner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        {/* Top Header & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-blue-400 rounded-full" />
              <span className="text-sky-300 text-xs font-bold   uppercase tracking-wider">
                PARTNER WITH ZOIKOSTREAM
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
              Bring complementary expertise to the ZoikoStream ecosystem.
            </h2>

            <p className="text-neutral-300 text-base font-normal   leading-relaxed max-w-xl">
              We look for organizations that can create clear customer value through technology, implementation, live-event, operational, or strategic ecosystem capabilities.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-600">
              <Image
                src={handshakeImg}
                alt="Partner Business Handshake"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className="p-6 bg-neutral-600 rounded-xl border border-zinc-600 flex flex-col gap-3 h-48 justify-between"
            >
              <h3 className="text-white text-base font-bold  ">
                {pil.title}
              </h3>
              <p className="text-neutral-300 text-xs font-normal   leading-relaxed">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg text-gray-800 text-base font-semibold   hover:opacity-90 transition-opacity"
          >
            Start a partner application
          </Link>
        </div>
      </div>
    </section>
  );
}
