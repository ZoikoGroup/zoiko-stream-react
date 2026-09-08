import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LINKS = [
  {
    title: 'Legal hub',
    href: '/legal',
  },
  {
    title: 'Privacy Notice',
    href: '/privacy',
  },
  {
    title: 'Responsible disclosure',
    href: '/responsible-disclosure',
  },
];

export default function MobileRelatedLinksSection() {
  return (
    <section className="block md:hidden relative w-full bg-white py-12 px-4 sm:px-6 border-t border-slate-200/80">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
          Related
        </h2>

        <div className="space-y-4">
          {LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:border-slate-300 active:bg-slate-50 transition-all duration-150"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">
                  {item.title}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-700 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
