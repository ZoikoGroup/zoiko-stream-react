import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Building, CircleQuestionMark, Clock, Info, Layers, Phone, Ticket, UserPlus, Users } from 'lucide-react';

const audienceTypes = [
  {
    title: 'Internal/Organization',
    desc: 'People associated with an organization. Bound by active employee directories, enterprise identities, or SAML credentials.',
    icon:Building
  },
  {
    title: 'Invited External',
    desc: 'Named guests, partners, contractors. Verified on arrival via temporary tokens, email passcodes, or external identity providers.',
    icon:UserPlus
  },
  {
    title: 'Customer/Member',
    desc: 'Defined customer or member cohort. Authenticated through standard application portals or external entitlement databases.',
    icon:Users
  },
  {
    title: 'Event Registrants',
    desc: 'Defined event audience. Matched dynamic ticket IDs, registration forms, or temporary guestlist databases.',
    icon:Ticket
  },
  {
    title: 'Mixed Audience',
    desc: 'Different segments need different rules. Combines employee directories with pre-approved external vendor sheets.',
    icon:Layers
  },
  {
    title: 'Restricted/Embargoed',
    desc: 'Limited by policy, timing, or rights. Playback restricted to distinct timeboxes, geofenced areas, or specific legal states.',
    icon:Clock
  },
  {
    title: 'Not Sure',
    desc: 'Requirements are unresolved. Work with a Zoiko designer to map active directory structures to entitlement endpoints.',
    icon:CircleQuestionMark
  },
];

export function AudienceIntentSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Start with who should watch
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Keep audience intent explicit, reversible and separate from technology.
          </p>
        </div>

        {/* 7 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {audienceTypes.map((aud, idx) => {
            const Icon=aud.icon;
            return(
            <div
              key={idx}
              className="p-7 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-6 h-6 flex items-center justify-center">
            <Icon className="w-6 h-6 text-black " />
              </div>
              <h3 className="text-slate-900 text-lg font-bold ">
                {aud.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal  leading-5">
                {aud.desc}
              </p>
            </div>
          )})}
        </div>

        {/* Security Standard Bar */}
        <div className="w-full p-5 bg-teal-50 rounded-lg border border-teal-100 flex items-start gap-3">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-teal-400 " />
          </div>
          <div className="text-sm ">
            <span className="text-slate-900 font-bold">Security Standard:</span>
            <span className="text-slate-600 font-normal">
              {' '}No audience type is ever inferred purely from network domains, IP addresses, or client behavior parameters. Explicit policy mappings are required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
