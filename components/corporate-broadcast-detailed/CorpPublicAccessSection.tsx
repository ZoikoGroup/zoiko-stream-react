'use client';

import React from 'react';

export default function CorpPublicAccessSection() {
  const accesses = [
    {
      title: 'Internal/Authenticated',
      desc: 'SSO credentials strictly matched to corporate directories.',
      img: '/images/corporate-broadcast-detailed/Rectangle (30).png'
    },
    {
      title: 'Invited/Restricted',
      desc: 'Invite-only links with domain limitations and dynamic passcodes.',
      img: '/images/corporate-broadcast-detailed/Rectangle (31).png'
    },
    {
      title: 'Public',
      desc: 'Open global scale broadcasting for product announcements.',
      img: '/images/corporate-broadcast-detailed/Rectangle (32).png'
    },
    {
      title: 'Mixed Hybrid',
      desc: 'SSO authentication for internal teams, public links for external.',
      img: '/images/corporate-broadcast-detailed/Rectangle (33).png'
    },
    {
      title: 'Needs Review Mode',
      desc: 'Hold traffic until security reviews and approves registration.',
      img: '/images/corporate-broadcast-detailed/Rectangle (34).png'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold   leading-[60.80px]">
            Audience access and viewer experience
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-7">
            Define who can watch and how they authenticate. ZoikoStream supports SSO-locked internal broadcasts, invite-only restricted sessions, fully public streams, and hybrid combinations — each with distinct security controls and audit trails.
          </p>
        </div>

        {/* Access Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {accesses.map((acc, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="w-full h-44 overflow-hidden relative bg-slate-900">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none" 
                  src={acc.img} 
                  alt={acc.title} 
                />
              </div>
              <div className="self-stretch p-6 flex flex-col justify-start items-start gap-3">
                <h3 className="text-slate-900 text-lg font-bold  ">
                  {acc.title}
                </h3>
                <p className="self-stretch text-slate-600 text-sm font-normal   leading-relaxed">
                  {acc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
