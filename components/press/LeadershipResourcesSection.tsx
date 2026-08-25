import React from 'react';

const leaders = [
  {
    initials: 'LM',
    name: 'Lennox McLeod',
    title: 'Founder & Executive Chairman, Zoiko Group',
    desc: 'Group strategy, platform direction and executive governance across Zoiko Group and ZoikoStream.',
    topics: ['Company strategy', 'Industry outlook'],
    avatarGrad: 'from-indigo-500 to-blue-400',
  },
  {
    initials: 'MA',
    name: 'Marcus Ade',
    title: 'Chief Technology Officer',
    desc: 'Platform architecture, reliability engineering and how ZoikoStream operates at scale.',
    topics: ['Engineering', 'Reliability'],
    avatarGrad: 'from-teal-400 to-blue-400',
  },
  {
    initials: 'SB',
    name: 'Sofia Bergström',
    title: 'VP, Live Events',
    desc: 'Live Events production, broadcast readiness and high-stakes event operations.',
    topics: ['Live Events', 'Broadcast production'],
    avatarGrad: 'from-blue-400 to-indigo-500',
  },
];

export function LeadershipResourcesSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-gray-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
            LEADERSHIP RESOURCES
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold  ">
          Approved spokespeople.
        </h2>
        <p className="max-w-[700px] text-gray-500 text-base font-normal   leading-6">
          Only leaders approved for media exposure appear here. Topic areas indicate relevant expertise, not a promise of availability.
        </p>
      </div>

      {/* 3 Leader Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-between gap-6 shadow-xs"
          >
            <div className="flex flex-col gap-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${leader.avatarGrad} rounded-xl flex items-center justify-center`}>
                <span className="text-white text-lg font-bold  ">{leader.initials}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-800 text-base font-bold  ">{leader.name}</h3>
                <span className="text-indigo-500 text-xs font-semibold  ">{leader.title}</span>
              </div>
              <p className="text-gray-500 text-sm font-normal   leading-5">
                {leader.desc}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {leader.topics.map((t, tIdx) => (
                  <div key={tIdx} className="px-3 py-1 bg-slate-100 rounded-full">
                    <span className="text-gray-500 text-xs font-semibold  ">{t}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2.5 bg-white rounded-lg border border-zinc-200 w-fit cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="text-gray-800 text-sm font-semibold  ">Request an interview</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1216px] mx-auto flex justify-center pt-2">
        <span className="text-blue-400 text-base font-semibold   cursor-pointer">
          View full leadership page →
        </span>
      </div>
    </section>
  );
}
