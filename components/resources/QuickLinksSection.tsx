'use client';

import Link from 'next/link';

interface QuickLinkItem {
  title: string;
  description: string;
  href: string;
  icon: 'case-studies' | 'system-status' | 'changelog' | 'trust-center';
}

const QUICK_LINKS: QuickLinkItem[] = [
  {
    title: 'Case Studies',
    description: 'See how industry leaders build with ZoikoStream.',
    href: '/case-studies',
    icon: 'case-studies',
  },
  {
    title: 'System Status',
    description: 'Real-time operational state and global network health.',
    href: '/status',
    icon: 'system-status',
  },
  {
    title: 'Changelog',
    description: 'The latest API updates, features, and technical releases.',
    href: '/changelog',
    icon: 'changelog',
  },
  {
    title: 'Trust Center',
    description: 'Security protocols, compliance reports, and privacy policies.',
    href: '/trust-center',
    icon: 'trust-center',
  },
];

export default function QuickLinksSection() {
  return (
    <section className="w-full border-t border-slate-700 bg-slate-950 px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-4 rounded-xl bg-gray-800/80 p-6 border border-slate-700/60 transition-all duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              {/* Icon Container */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-700 transition-colors group-hover:bg-slate-700">
                {item.icon === 'case-studies' && (
                   <img className="h-6 w-6 " src="/images/resources/Icon (4).png" />

                )}
                {item.icon === 'system-status' && (
                  <img className="h-6 w-6 " src="/images/resources/Icon (5).png" />
                )}
                {item.icon === 'changelog' && (
                 <img className="h-6 w-6 " src="/images/resources/Icon (6).png" />
                )}
                {item.icon === 'trust-center' && (
                  <img className="h-6 w-6 " src="/images/resources/Icon (7).png" />
                )}
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1">
                <h3 className="  text-base font-normal leading-6 text-indigo-100 transition-colors group-hover:text-sky-300">
                  {item.title}
                </h3>
                <p className="  text-sm font-normal leading-6 text-neutral-300">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}