import React from 'react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import Image from 'next/image';
const pillars = [
  {
    badge: 'WORKFLOW PURPOSED',
    title: '1. Purpose',
    subtitle: 'What is the media for?',
    desc: 'Explicitly declared workflow mapping + academic purpose label. Prevents scope creep and arbitrary collection.',
  },
  {
    badge: 'BOUNDARY ENFORCED',
    title: '2. Audience',
    subtitle: 'Who is intended to watch?',
    desc: 'Clear demarcation profiles: Public, Institution-only, Cohort, External guest, or strictly Undecided.',
  },
  {
    badge: 'OWNERSHIP DECLARED',
    title: '3. Authority',
    subtitle: 'Who controls the record?',
    desc: 'Designated roles for who may create, publish, record, retain, or completely withdraw video streams.',
  },
  {
    badge: 'FERPA / GDPR ALIGNED',
    title: '4. Access & Privacy',
    subtitle: 'What consent is required?',
    desc: 'Token-gated authorization logs with clear attendee consent records and strict compliance retention.',
  },
  {
    badge: 'WCAG 2.1 AA TARGET',
    title: '5. Accessibility',
    subtitle: 'What options are needed?',
    desc: 'Track readiness matrix supporting ASL, multiple subtitle profiles, descriptive audio, and keyboard focus.',
  },
  {
    badge: 'CONTINUITY ASSURED',
    title: '6. Live-to-Replay',
    subtitle: 'What remains true later?',
    desc: 'Guaranteed continuity of access logs, metadata, and accessibility tracks after the live event closes.',
  },
  {
    badge: 'AUDITABLE ARCHIVE',
    title: '7. Evidence & Support',
    subtitle: 'Who verifies truth?',
    desc: 'Cryptographically inspectable provenance reports, verified ownership reviews, and real-time operations health.',
  },
];

export function OperatingContractSection() {
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
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            The Education Media Operating Contract
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Seven pillars that govern every education and institutional media workflow — from declared purpose through evidence and support.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="px-2 py-1 bg-indigo-50 rounded-sm inline-flex justify-start items-start">
                <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk']">
                  {item.badge}
                </span>
              </div>
              <div className="flex flex-col justify-start items-start gap-1.5">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
