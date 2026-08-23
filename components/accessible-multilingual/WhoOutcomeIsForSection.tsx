import React from 'react';
import Image from 'next/image';

import card48 from '@/public/images/accessible-multilingual/card-image (48).png';
import card49 from '@/public/images/accessible-multilingual/card-image (49).png';
import card50 from '@/public/images/accessible-multilingual/card-image (50).png';
import card51 from '@/public/images/accessible-multilingual/card-image (51).png';
import card52 from '@/public/images/accessible-multilingual/card-image (52).png';
import card53 from '@/public/images/accessible-multilingual/card-image (53).png';

const audiences = [
  {
    title: 'Developers & Product Teams',
    desc: 'Embedded live/VOD experiences needing track selection, player accessibility, API awareness, and durable replay.',
    image: card48,
  },
  {
    title: 'Enterprises',
    desc: 'Internal or controlled broadcasts needing reliable captions, language governance, review ownership, and support escalation.',
    image: card49,
  },
  {
    title: 'Media & Communications',
    desc: 'Broadcast and communications workflows requiring multilingual delivery, caption quality, and accessible player experiences.',
    image: card50,
  },
  {
    title: 'Education',
    desc: 'Learning content where caption quality, readable controls, replay access, and accessible alternatives are essential.',
    image: card51,
  },
  {
    title: 'Public & Civic Institutions',
    desc: 'Public information media requiring caption compliance, language access, and accessible delivery.',
    image: card52,
  },
  {
    title: 'Faith & Community / Live Events',
    desc: 'Community broadcasts and scheduled events needing caption readiness, language planning, and replay preservation.',
    image: card53,
  },
];

export default function WhoOutcomeIsForSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Who This Outcome Is For
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Operating context, not demographic assumptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-44 bg-slate-100">
                <Image
                  src={aud.image}
                  alt={aud.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-xl font-bold  ">
                  {aud.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
