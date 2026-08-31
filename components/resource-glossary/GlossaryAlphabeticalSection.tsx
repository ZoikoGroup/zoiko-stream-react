'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ExternalLink } from 'lucide-react';

const ALPHABET = [
  'ALL',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const SAMPLE_TERMS_S = [
  {
    term: 'SaaS',
    definition:
      'Software as a Service—cloud-based applications delivered over the internet.',
  },
  {
    term: 'Scalability',
    definition:
      'The ability of a system to handle increased load without compromising performance.',
  },
  {
    term: 'Scrum',
    definition:
      'An agile framework for managing work in short cycles (sprints) with roles and rituals.',
  },
  {
    term: 'SDK',
    definition:
      'Software Development Kit—tools, libraries, and docs to build on a platform.',
  },
  {
    term: 'SEO',
    definition:
      'Search Engine Optimization—improving visibility and ranking in search results.',
  },
  {
    term: 'Serverless',
    definition:
      'Cloud computing model where the provider manages infrastructure and scaling.',
  },
  {
    term: 'Sprint',
    definition:
      'A short, time-boxed iteration (usually 1–4 weeks) in Scrum to deliver work.',
  },
  {
    term: 'SQL',
    definition:
      'Structured Query Language—a standard language for managing relational databases.',
  },
  {
    term: 'Stakeholder',
    definition:
      'Anyone with an interest or concern in a project, product, or outcome.',
  },
];

export default function GlossaryAlphabeticalSection() {
  const [selectedLetter, setSelectedLetter] = useState('S');

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-20 border-b border-gray-200 flex flex-col justify-start items-start gap-8 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[523px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-2">
        <h2 className="text-gray-950 text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Browse alphabetically
        </h2>
        <p className="text-slate-600 text-base font-normal font-['Inter']">
          Select a letter to filter the complete terminology dictionary.
        </p>
      </div>

      {/* Alphabet Pills */}
      <div className="relative z-10 w-full flex flex-wrap justify-start items-start gap-2">
        {ALPHABET.map((letter) => {
          const isSelected = selectedLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`px-3.5 py-2.5 rounded-xl font-bold font-['Space_Grotesk'] text-sm transition-colors ${
                isSelected
                  ? 'bg-teal-400 text-gray-950 outline outline-1 outline-offset-[-1px] outline-teal-400'
                  : 'bg-slate-50 text-slate-600 outline outline-1 outline-offset-[-1px] outline-gray-200 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Count & Info */}
      <div className="relative z-10 w-full flex items-center gap-2 pt-2">
        <span className="text-gray-950 text-sm font-bold font-['Space_Grotesk']">
          {SAMPLE_TERMS_S.length} terms found for &quot;{selectedLetter}&quot;
        </span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
          Showing sample definitions
        </span>
      </div>

      {/* Definition Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SAMPLE_TERMS_S.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between items-start gap-3 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1 w-full">
              <h3 className="text-gray-950 text-base font-bold font-['Space_Grotesk']">
                {item.term}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-5 line-clamp-2">
                {item.definition}
              </p>
            </div>
            <Link
              href="#live-stream"
              className="inline-flex items-center gap-1.5 text-teal-500 hover:text-teal-600 transition-colors"
            >
              <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk']">
                View definition
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-500" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
