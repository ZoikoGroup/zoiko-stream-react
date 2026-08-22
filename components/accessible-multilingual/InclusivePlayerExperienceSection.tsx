import React from 'react';
import Image from 'next/image';
import { Play, Volume2, FileText, Maximize2 } from 'lucide-react';

import rect113 from '@/public/images/accessible-multilingual/Rectangle (113).png';
import rect114 from '@/public/images/accessible-multilingual/Rectangle (114).png';
import rect115 from '@/public/images/accessible-multilingual/Rectangle (115).png';
import rect116 from '@/public/images/accessible-multilingual/Rectangle (116).png';
import playerBg from '@/public/images/accessible-multilingual/video-display-area.png';

const playerFeatures = [
  {
    title: 'Keyboard Operability',
    desc: 'All media controls work flawlessly without pointer devices. Features a logical tab sequence, focus lock inside modal dialogues, and zero keyboard trapping states.',
    image: rect113,
  },
  {
    title: 'Screen Reader Semantics',
    desc: 'Interactive player buttons expose precise semantic names and state indicators. Active caption track updates are read sequentially by accessible screen readers.',
    image: rect114,
  },
  {
    title: 'Caption Readability',
    desc: 'Strict high-contrast backgrounds with custom sizing controls. Dynamic text scaling ensures captions remain legible and wrapped perfectly on multi-screen zoom states.',
    image: rect115,
  },
  {
    title: 'Touch Accessibility',
    desc: 'Target components sized to the minimum required 44x44px bounding box. Expansive margin boundaries ensure buttons avoid accidental triggers on compact devices.',
    image: rect116,
  },
];

export default function InclusivePlayerExperienceSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-[173px] -top-[110px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] right-[-100px] bottom-[-200px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Inclusive Player &amp; Viewer Experience
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed">
            Controls must be usable
          </p>
        </div>

        {/* Player Controls Interactive Mockup */}
        <div className="p-6 bg-slate-950 rounded-[20px] shadow-2xl flex flex-col gap-4 overflow-hidden border border-slate-800">
          {/* Main Video Screen Container */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden bg-slate-900 flex items-end justify-center">
            <Image
              src={playerBg}
              alt="Live Video Stream Preview"
              fill
              className="object-cover opacity-60"
            />

           
          </div>

          {/* Controls Bar */}
          <div className="pt-3 flex flex-wrap justify-between items-center gap-4 text-white">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <button type="button" aria-label="Play video" className="text-white hover:text-teal-400 transition-colors">
                <Play className="size-5 fill-white" />
              </button>
              <button type="button" aria-label="Adjust volume" className="text-white hover:text-teal-400 transition-colors">
                <Volume2 className="size-5" />
              </button>
              <span className="text-white text-xs font-normal  ">
                04:12 / 10:00
              </span>
            </div>

            {/* Center Focus Badge */}
            <div className="px-3 py-1.5 bg-slate-800 rounded-sm outline outline-2 outline-offset-[-2px] outline-teal-400 text-teal-400 text-xs font-bold  ">
              KEYBOARD FOCUS TAB TARGET: CAPTION TOGGLE
            </div>

            {/* Right Controls & Language Selector */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="px-2.5 py-1 bg-gray-800 rounded-sm outline outline-1 outline-offset-[-1px] outline-teal-400 text-white text-xs font-bold  ">
                AD ACTIVE
              </div>

              {/* Select Language Dropdown Menu */}
              <div className="w-48 p-2.5 bg-slate-900 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col gap-1.5 shadow-lg">
                <span className="text-teal-400 text-[10px] font-bold   uppercase tracking-wider">
                  SELECT LANGUAGE
                </span>
                <div className="p-2 bg-slate-800 rounded-sm flex justify-between items-center text-teal-400 text-xs font-normal  ">
                  <span>English (US)</span>
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                </div>
                <div className="px-2 py-1 text-white text-xs font-normal   hover:text-teal-300 cursor-pointer">
                  Español (ES)
                </div>
                <div className="px-2 py-1 text-white text-xs font-normal   hover:text-teal-300 cursor-pointer">
                  Français (FR)
                </div>
                <div className="px-2 py-1 text-white text-xs font-normal   hover:text-teal-300 cursor-pointer">
                  Deutsch (DE)
                </div>
              </div>

              {/* Interactive Transcript & Fullscreen */}
              <div className="flex items-center gap-1.5 cursor-pointer text-white hover:text-teal-400 transition-colors">
                <FileText className="size-4" />
                <span className="text-xs font-bold   underline">
                  Interactive Transcript
                </span>
              </div>

              <button type="button" aria-label="Toggle fullscreen" className="text-white hover:text-teal-400 transition-colors">
                <Maximize2 className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playerFeatures.map((pf, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-40 bg-slate-100">
                <Image
                  src={pf.image}
                  alt={pf.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-900 text-lg font-bold  ">
                  {pf.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                  {pf.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
