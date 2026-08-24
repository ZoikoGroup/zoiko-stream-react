import React from 'react';
import Image from 'next/image';

const workflows = [
  {
    title: 'Lecture / Class Session',
    desc: 'Presenter-led live or scheduled learning session; may need controlled audience, captions and replay.',
    img: '/images/Education-Page/Rectangle  (69).png',
  },
  {
    title: 'Cohort / Private Session',
    desc: 'Known or restricted participant group; access and privacy requirements are explicit.',
    img: '/images/Education-Page/Rectangle  (70).png',
  },
  {
    title: 'Training / Webinar',
    desc: 'Instructional or professional development media; live or on-demand delivery options.',
    img: '/images/Education-Page/Rectangle  (71).png',
  },
  {
    title: 'Institutional Communication',
    desc: 'Leadership, orientation, town hall, internal briefing or organization-wide update.',
    img: '/images/Education-Page/Rectangle  (72).png',
  },
  {
    title: 'Public Program / Lecture',
    desc: 'Public-facing educational or cultural program where accessibility and continuity matter.',
    img: '/images/Education-Page/Rectangle  (73).png',
  },
  {
    title: 'Ceremony / Event',
    desc: 'Graduation, commencement, awards or similar scheduled high-concurrency event.',
    img: '/images/Education-Page/Rectangle  (74).png',
  },
  {
    title: 'On-Demand Learning Library',
    desc: 'Recorded assets for continuing access; metadata, accessibility, and retention decisions.',
    img: '/images/Education-Page/Rectangle  (75).png',
  },
  {
    title: 'Not Sure',
    desc: 'Show a transparent requirement checklist and unresolved state to find your perfect fit.',
    img: '/images/Education-Page/Rectangle  (76).png',
  },
];

export function EducationWorkflowSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (190).png"
          alt="Education Workflows Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Choose the education workflow that fits.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Select the workflow that matches your institutional needs. You can combine or change at any time without losing policy controls.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-40 bg-zinc-950">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
