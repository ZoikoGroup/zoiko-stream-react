'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FileText,
  Gauge,
  HelpCircle,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Tag,
  Video,
  type LucideIcon,
} from 'lucide-react';

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const LEARN_ITEMS: MenuItem[] = [
  { title: 'Resources overview', description: 'Start here, by audience or topic', href: '/resources', icon: BookOpen },
  { title: 'Guides', description: 'Step-by-step implementation help', href: '/resources', icon: FileText },
  { title: 'Architecture', description: 'Reference designs and patterns', href: '/resources', icon: Layers },
  { title: 'Video tutorials', description: 'Watch the workflow, then build it', href: '/resources', icon: Video },
  { title: 'Webinars and events', description: 'Live sessions and replays', href: '/resources', icon: Sparkles },
  { title: 'Glossary', description: 'Media and streaming terms, defined', href: '/resources', icon: Tag },
  { title: 'Blog and insights', description: 'Operations, productivity, growth', href: '/resources', icon: FileText },
];

const PROOF_ITEMS: MenuItem[] = [
  { title: 'Case studies', description: 'How real teams operate ZoikoStream', href: '/resources', icon: FileText },
  { title: 'Customer stories', description: 'In their own words', href: '/resources', icon: MessageSquare },
  { title: 'System status', description: 'Live uptime and incident history', href: '/resources', icon: Gauge },
  { title: 'Changelog', description: 'Every shipped change, dated', href: '/resources', icon: BookOpen },
  { title: 'Release notes', description: 'What each release means for you', href: '/resources', icon: FileText },
  { title: 'Security and Trust Center', description: 'Certifications and practices', href: '/resources', icon: ShieldCheck },
  { title: 'Accessibility', description: 'Our conformance and roadmap', href: '/resources', icon: HelpCircle },
];

const SUPPORT_ITEMS: MenuItem[] = [
  { title: 'Help Center', description: 'Step-by-step help and articles', href: '/', icon: HelpCircle },
  { title: 'Contact support', description: 'Open a ticket or start a chat', href: '/', icon: MessageSquare },
  { title: 'Developer documentation', description: 'Technical references and guides', href: '/', icon: BookOpen },
  { title: 'API reference', description: 'Endpoints, params, examples', href: '/developers', icon: FileText },
  { title: 'Live Events planning guide', description: 'Book and prepare with confidence', href: '/live-event-guide', icon: Video },
  { title: 'Service updates', description: 'Maintenance and change notices', href: '/resources', icon: Gauge },
  { title: 'Community resources', description: 'Connect with other builders', href: '/resources', icon: Sparkles },
];

const POPULAR_TAGS = ['Getting started', 'Security & Trust', 'Case studies', 'Accessibility', 'Status page'];

export default function ResourcesDropdown() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] dark:border-gray-700 dark:bg-gray-900 dark:shadow-[0_22px_70px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-5 dark:border-gray-800">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-sky-50 text-cyan-600 shadow-sm sm:h-10 sm:w-10 dark:border-cyan-900/40 dark:bg-cyan-950/40 dark:text-cyan-400">
            <BookOpen className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[15px] font-extrabold leading-tight text-slate-900 sm:text-[17px] dark:text-white">Resources</h2>
            <p className="max-w-2xl text-[10px] leading-4.5 text-slate-500 sm:text-[11px] sm:leading-5 dark:text-gray-400">
              Practical guidance for building and operating better video.
            </p>
          </div>
        </div>

        <Link
          href="/resources"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 px-3 py-2 text-[10px] font-bold text-cyan-700 transition-colors hover:bg-slate-50 sm:px-4 sm:text-[11px] dark:border-gray-700 dark:text-cyan-400 dark:hover:bg-gray-800"
        >
          Overview
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="max-h-[calc(100vh-165px)] overflow-y-auto overscroll-contain scrollbar-none">
        <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-800">
          <MenuColumn title="Learn" items={LEARN_ITEMS} accentClassName="text-cyan-700 dark:text-cyan-400" />
          <MenuColumn title="Proof & updates" items={PROOF_ITEMS} accentClassName="text-cyan-700 dark:text-cyan-400" />
          <MenuColumn title="Support" items={SUPPORT_ITEMS} accentClassName="text-cyan-700 dark:text-cyan-400" />

          <aside className="bg-slate-900 p-4 md:col-span-1 dark:bg-black">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 text-white shadow-lg sm:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl sm:h-36 sm:w-36"
              />

              <div className="relative z-10 space-y-4">
                <div className="flex h-24 items-center justify-center rounded-xl p-3 sm:h-28">
                 <img src="/images/header/OverlayBorder (1).png"></img>
                </div>

                <div className="space-y-2">
                  <div className='flex flex-row'>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-300 sm:text-[10px]">
                    Guide · 8 minread
                  </p>
                  <p className="text-[10px] font-bold uppercase  text-white/50 sm:text-[9px]">
                    Updated Jul2026
                  </p></div>
                  <h3 className="max-w-[11rem] text-[12px] font-extrabold leading-snug sm:text-[14px]">
                    Designing resilient live streaming architecture.
                  </h3>
                  <p className="text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
                    A complete walkthrough of contribution, failover and adaptive delivery for high-stakes broadcasts.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
                <div className="space-y-2.5">
                  <Link
                    href="/resources"
                    className="flex items-center justify-between text-[10px] font-bold text-white transition-colors hover:text-cyan-300 sm:text-[11px]"
                  >
                    <span>View Resource Center</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/about-us"
                    className="flex items-center justify-between text-[10px] font-semibold text-slate-300 transition-colors hover:text-white sm:text-[11px]"
                  >
                    <span>Get a demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full min-h-[64px] border-t border-slate-100 bg-white px-4 py-4 flex flex-wrap items-center gap-3 sm:px-9 dark:border-gray-800 dark:bg-gray-900">
          <span className="mr-2 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-gray-500">
            Popular
          </span>

          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="flex h-8 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-gray-500" />
              <span>{tag}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-4 py-4 sm:px-8 md:flex-row md:items-center md:justify-between dark:border-gray-800 dark:bg-gray-800/60">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
              <HelpCircle className="h-3.5 w-3.5 text-slate-500 dark:text-gray-400" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-900 sm:text-[13px] dark:text-white">
                Not sure where to start?
              </h4>
              <p className="text-[10px] text-slate-600 sm:text-[11px] dark:text-gray-400">
                We&apos;ll help you find the right route through ZoikoStream.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-900 sm:gap-6 sm:text-[11px] dark:text-white">
            <Link href="/resources" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-700 dark:hover:text-cyan-400">
              <BookOpen className="h-3 w-3 text-cyan-700 dark:text-cyan-400" />
              Resources overview
            </Link>
            <Link href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-700 dark:hover:text-cyan-400">
              <Tag className="h-3 w-3 text-cyan-700 dark:text-cyan-400" />
              View pricing
            </Link>
            <Link href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-700 dark:hover:text-cyan-400">
              <MessageSquare className="h-3 w-3 text-cyan-700 dark:text-cyan-400" />
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuColumn({
  title,
  items,
  accentClassName,
}: {
  title: string;
  items: MenuItem[];
  accentClassName: string;
}) {
  return (
    <section className="space-y-2.5 p-4 sm:p-5">
      <span className={`block px-2 text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px] ${accentClassName}`}>
        {title}
      </span>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-2 rounded-xl p-1.5 transition-colors hover:bg-cyan-50/70 sm:gap-2.5 sm:p-2 dark:hover:bg-cyan-950/30"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-100 bg-sky-50 text-cyan-600 transition-colors group-hover:border-cyan-200 group-hover:bg-white dark:border-cyan-900/40 dark:bg-cyan-950/40 dark:text-cyan-400 dark:group-hover:border-cyan-800 dark:group-hover:bg-gray-900">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-700 sm:text-[12px] dark:text-white dark:group-hover:text-cyan-400">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[9px] font-medium leading-4 text-slate-500 sm:text-[10px] dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-500" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
