import React from 'react';

const routes = [
  { label: 'Privacy request', link: 'Privacy Rights →' },
  { label: 'Security issue', link: 'Vulnerability Disclosure →' },
  { label: 'Product issue', link: 'Support →' },
  { label: 'Accessibility barrier', link: 'Accessibility →' },
  { label: 'Legal notice', link: 'Legal →' },
  { label: 'General privacy question', link: 'Contact Privacy →' },
];

export function PrivacyHelpRoutesSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            NEED PRIVACY HELP?
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Find the right route.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-center gap-2 min-h-[96px] shadow-xs"
          >
            <span className="text-gray-400 text-xs font-normal">{route.label}</span>
            <span className="text-blue-400 text-sm font-bold cursor-pointer">{route.link}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
