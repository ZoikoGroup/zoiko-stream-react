import React from 'react';

const mediaResources = [
  { code: 'Fx', title: 'Company facts', desc: 'Verified & current', color: 'bg-blue-400' },
  { code: 'Lg', title: 'Logos & marks', desc: 'Approved variants', color: 'bg-zinc-700' },
  { code: 'Pi', title: 'Product imagery', desc: 'Current screenshots', color: 'bg-teal-400' },
  { code: 'Ld', title: 'Leadership resources', desc: 'Bios & headshots', color: 'bg-indigo-500' },
  { code: 'Nr', title: 'Newsroom', desc: 'Official announcements', color: 'bg-violet-500' },
  { code: 'Mc', title: 'Contact media team', desc: 'Press inquiries only', color: 'bg-slate-600' },
];

export function MediaResourcesJumpSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-16 bg-slate-50 border-b border-gray-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold    uppercase tracking-wider">
            MEDIA RESOURCES
          </span>
        </div>
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold   ">
          Jump to what you need.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {mediaResources.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-white rounded-2xl border border-zinc-200 flex flex-col items-center justify-center gap-3 text-center shadow-xs hover:shadow-md transition-shadow cursor-pointer min-h-[176px]"
          >
            <div className={`w-9 h-9 ${item.color} rounded-lg flex items-center justify-center`}>
              <span className="text-white text-xs font-bold   ">{item.code}</span>
            </div>
            <h3 className="text-gray-800 text-sm font-bold    leading-snug">{item.title}</h3>
            <span className="text-gray-400 text-xs font-normal   ">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
