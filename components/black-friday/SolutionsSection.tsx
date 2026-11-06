'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { IMG, gutterWidth, ribbonContent } from './shared';

const solutions = [
  {
    tab: 'Conferences',
    title: 'Conferences & summits',
    body: 'Run multi-session events that reach far beyond the venue, with interactive stages for every track.',
    points: ['Multi-track scheduling and session pages', 'Live Q&A, polls and networking', 'Sponsor branding and lead capture'],
    image: 'solution-conferences.webp',
    alt: 'Microphone on a lit stage in front of a virtual audience',
  },
  {
    tab: 'Corporate',
    title: 'Corporate broadcasts',
    body: 'Bring every office together for all-hands, launches and town halls with secure, on-brand streams.',
    points: ['Single sign-on and private access', 'Moderated Q&A for leadership', 'Recordings ready for on-demand replay'],
    image: 'studio-desk.webp',
    alt: 'Broadcast desk with microphone, laptop and camera',
  },
  {
    tab: 'Education',
    title: 'Lectures & classrooms',
    body: 'Teach live to learners anywhere, then keep every session available for revision and catch-up.',
    points: ['Captions and multi-language support', 'Interactive polls and quizzes', 'Course-level access controls'],
    image: 'studio-desk.webp',
    alt: 'Streaming setup with microphone and laptop',
  },
  {
    tab: 'Worship & Faith',
    title: 'Services & gatherings',
    body: 'Reach members who can’t attend in person and keep your community connected every week.',
    points: ['Simple weekly scheduling', 'Integrated online giving', 'Archive services for later viewing'],
    image: 'hero-concert.webp',
    alt: 'Audience gathered in front of a lit stage',
  },
  {
    tab: 'Entertainment',
    title: 'Concerts & live shows',
    body: 'Sell virtual tickets to fans worldwide and deliver the energy of the front row in full HD.',
    points: ['Paid access and pay-per-view', 'Real-time reactions and chat', 'Multi-camera production support'],
    image: 'hero-concert.webp',
    alt: 'Band performing live in front of a large crowd',
  },
];

/* Figma frame 1440×805: eyebrow y75 · tabs y228–266 · card y297–737 (1124×440) ·
   left ribbon 130×493 @ x0,y0 · right ribbon 158×508 @ x1282,y297 (card top → section bottom). */
export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const s = solutions[active];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] pb-[68px] pt-[75px]">
      <Image
        src={`${IMG}/sale-ribbon-cropped.webp`}
        alt=""
        width={130}
        height={493}
        style={{ width: gutterWidth(130, 28), height: 'auto' }}
        className="pointer-events-none absolute left-0 top-0 hidden lg:block"
      />

      <div className={ribbonContent}>
        <p className="text-center text-xs font-bold leading-4 tracking-[0.14em] text-violet-400">SOLUTIONS</p>
        <h2 className="mt-[14px] text-center text-[26px] font-extrabold leading-10 tracking-tight text-slate-50 sm:text-[30px]">
          Built for every kind of live event.
        </h2>
        <p className="mt-[14px] text-center text-base leading-6 text-gray-400">
          One platform, tuned to the way your audience shows up.
        </p>

        <div role="tablist" aria-label="Event types" className="mt-[42px] flex flex-wrap justify-center gap-2.5">
          {solutions.map((item, i) => (
            <button
              key={item.tab}
              type="button"
              role="tab"
              id={`bf-tab-${i}`}
              aria-selected={i === active}
              aria-controls="bf-solution-panel"
              onClick={() => setActive(i)}
              className={`h-[38px] rounded-full px-[18px] text-sm font-medium transition ${
                i === active
                  ? 'bg-gradient-to-r from-[#2fb6a6] to-[#3b7fd8] text-white'
                  : 'border border-[#2a2c38] text-gray-300 hover:border-gray-500 hover:text-white'
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-[31px]">
        <Image
          src={`${IMG}/sale-ribbon-tall.webp`}
          alt=""
          width={158}
          height={508}
          style={{ width: gutterWidth(158), height: 'auto' }}
          className="pointer-events-none absolute right-0 top-0 hidden lg:block"
        />

        <div className={ribbonContent}>
          <div
            id="bf-solution-panel"
            role="tabpanel"
            aria-labelledby={`bf-tab-${active}`}
            className="grid items-center gap-8 rounded-[20px] border border-[#1f2130] bg-[#0f1017] p-6 sm:p-[41px] lg:min-h-[440px] lg:grid-cols-[1fr_minmax(0,478px)] lg:gap-10"
          >
            <div>
              <h3 className="text-2xl font-bold leading-8 text-white">{s.title}</h3>
              <p className="mt-[18px] max-w-[460px] text-[15px] leading-6 text-gray-400">{s.body}</p>
              <ul className="mt-[22px] flex flex-col gap-[13px]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm leading-5 text-gray-300">
                    <Check className="size-[15px] shrink-0 text-emerald-400" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[478/357] overflow-hidden rounded-[14px] border border-violet-400/20">
              <Image
                key={s.tab}
                src={`${IMG}/${s.image}`}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 478px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
