import React from 'react';
import Link from 'next/link';

const principles = [
  { title: 'Ownership', desc: 'Take responsibility for outcomes, not just assigned tasks.' },
  { title: 'Urgency with precision', desc: 'Move quickly without treating accuracy, reliability, or controls as optional.' },
  { title: 'Integrity', desc: 'Say what is true, surface risk early, and protect trust even when the answer is inconvenient.' },
  { title: 'Courage', desc: 'Challenge weak assumptions, raise hard issues, and make decisions with conviction and evidence.' },
  { title: 'Trust with verification', desc: 'Give people room to act while validating the systems and evidence that matter.' },
  { title: 'Continuous improvement', desc: 'Learn from data, incidents, feedback, and delivery — then make the next version better.' },
  { title: 'One Group', desc: 'Work across product, engineering, commercial, operations, and corporate boundaries toward the same outcome.' },
  { title: 'Inclusion with accountability', desc: 'Respect different perspectives while holding everyone to clear, consistent standards.' },
];

export default function OperatingExpectationsSection() {
  return (
    <section className="w-full bg-zinc-950 py-20 border-b border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              OPERATING EXPECTATIONS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-slate-100 leading-tight">
            How we work.
          </h2>

          <p className="text-slate-400 text-base font-normal    leading-relaxed max-w-3xl">
            Principles candidates can test against their own working style. See the full doctrine on{' '}
            <Link href="/about-us" className="text-teal-400 font-semibold hover:underline">
              Purpose &amp; principles →
            </Link>
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col justify-between gap-3 h-40"
            >
              <h3 className="text-slate-100 text-base font-bold  ">
                {p.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal    leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
