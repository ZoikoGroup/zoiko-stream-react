import React from 'react';
import Image from 'next/image';

import bg115 from '@/public/images/accessible-multilingual/bg (115).png';

const terms = [
  {
    title: 'Captions',
    tag: 'SPEECH + NON-SPEECH',
    desc: 'Synchronized text description of all auditory information, including dialogue, sound effects, speaker identification, and atmospheric audio cues.',
  },
  {
    title: 'Subtitles',
    tag: 'DIALOGUE & TRANSLATION',
    desc: "Primarily spoken dialogue translated into the viewer's target language. Assumes the viewer can hear but does not understand the source language.",
  },
  {
    title: 'Transcript',
    tag: 'ASYNCHRONOUS TEXT',
    desc: 'A text alternative readable outside of normal video playback. Crucial for keyboard-only indexing, offline review, and archival compliance.',
  },
  {
    title: 'Audio Description',
    tag: 'VISUAL NARRATION',
    desc: 'A separate audio track narrating essential visual information during natural pauses in dialogue. Key for visually impaired audiences.',
  },
  {
    title: 'Sign-Language',
    tag: 'PICTURE-IN-PICTURE',
    desc: 'A synchronized sign-language video overlay or separate player feed to support native deaf communication paths natively.',
  },
];

export default function CaptionsTerminologySection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg115}
          alt="Captions Terminology Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Captions Are Not Just Subtitles
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Terminology &amp; content alternatives.
          </p>
        </div>

        {/* 5 Terminology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {terms.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-xl font-bold  ">
                  {t.title}
                </h3>
                <span className="text-teal-400 text-xs font-bold  ">
                  {t.tag}
                </span>
              </div>

              <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box */}
        <div className="p-8 bg-gray-800/90 rounded-xl border border-gray-800 backdrop-blur-md flex justify-between items-center">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h4 className="text-white text-lg font-bold  ">
              Unsure which content alternatives your workflow requires?
            </h4>
            <p className="text-slate-400 text-sm font-normal   leading-relaxed">
              Our compliance engineering team provides deterministic matching against ADA Title III and WCAG AA benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
