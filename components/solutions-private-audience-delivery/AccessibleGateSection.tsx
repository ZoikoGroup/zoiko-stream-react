import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Accessibility, Captions, CircleQuestionMark, EyeOff, Keyboard, User } from 'lucide-react';

const accessibleCards = [
  {
    title: 'Access & Verification',
    desc: 'Fully keyboard operable interface. Form fields are programmatically labeled with distinct visual focus indicators and clear, plain-language error verification message states.',
    icon:Keyboard
  },
  {
    title: 'Player Controls',
    desc: 'Robust screen-reader control mapping. Supports standard keyboard shortkeys, screen reader aria-labels, customizable caption rendering, and multi-track secondary languages.',
    icon:Accessibility
  },
  {
    title: 'Captions & Languages',
    desc: 'Accessibility features are decoupled from authorization. Users can configure language preferences and subtitles immediately on load, before validation triggers.',
    icon:Captions
  },
  {
    title: 'Denial & Recovery',
    desc: 'Access failures are clearly vocalized by assistive technologies. Active focus management directs users instantly to safe, descriptive help and permission request forms.',
    icon:User
  },
  {
    title: 'Accessibility Help',
    desc: 'Direct path to accessibility specialists. Never gated behind marketing forms, sales workflows, or authentication prompts. Always public and always available.',
    icon:CircleQuestionMark
  },
  {
    title: 'Privacy Preservation',
    desc: 'Do not infer personal attributes like disability status, religion, or language from UI options. Choices are processed strictly locally for direct player rendering.',
    icon:EyeOff
  },
];

export function AccessibleGateSection() {
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
            Private access must not create an inaccessible gate
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Protected playback accessibility is not optional.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {accessibleCards.map((card, idx) => {
            const IconComponent=card.icon;
            return(
            <div
              key={idx}
              className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="text-slate-900 text-lg font-bold ">{card.title}</h3>
                <div className="w-6 h-6 flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <p className="text-slate-600 text-sm font-normal  leading-5">{card.desc}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
