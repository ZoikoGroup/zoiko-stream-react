import React from 'react';

const corpusItems = [
  {
    title: 'Concepts',
    desc: 'How the platform model works before you write code.',
    useWhen: 'Use when: orienting →',
  },
  {
    title: 'Tutorials',
    desc: 'A bounded task, start to finish, with a working result.',
    useWhen: 'Use when: first integration →',
  },
  {
    title: 'Guides',
    desc: 'Solve a real workflow that spans multiple surfaces.',
    useWhen: 'Use when: building a feature →',
  },
  {
    title: 'Reference',
    desc: 'Exact endpoints, fields, schemas, and contracts.',
    useWhen: 'Use when: implementing precisely →',
  },
  {
    title: 'Troubleshooting',
    desc: 'Resolve a specific symptom using current evidence.',
    useWhen: 'Use when: something\'s wrong →',
  },
  {
    title: 'Runbooks',
    desc: 'Operate the system in production over time.',
    useWhen: 'Use when: running in production →',
  },
  {
    title: 'Release notes',
    desc: 'What changed, when, and what applies to you.',
    useWhen: 'Use when: checking impact →',
  },
];

export function UnderstandCorpusSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Title Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              UNDERSTAND THE CORPUS
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Know what kind of answer you need.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Concepts explain how it works. Tutorials teach a bounded task. Guides solve a workflow. Reference defines exact contracts. Troubleshooting resolves symptoms. Runbooks support operation. Release notes explain change.
          </p>
        </div>

        {/* Phase Header Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-xs">
            <span className="text-gray-500 text-xs font-mono font-semibold uppercase tracking-wider">
              GET STARTED
            </span>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-xs">
            <span className="text-gray-500 text-xs font-mono font-semibold uppercase tracking-wider">
              BUILD
            </span>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-xs">
            <span className="text-gray-500 text-xs font-mono font-semibold uppercase tracking-wider">
              OPERATE
            </span>
          </div>
        </div>

        {/* 7 Corpus Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corpusItems.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between gap-5 shadow-xs hover:border-blue-400 transition-colors"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-base font-bold">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-5">{item.desc}</p>
              </div>
              <span className="text-blue-600 text-xs font-semibold hover:underline cursor-pointer">
                {item.useWhen}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
