import React from 'react';
import Link from 'next/link';
import {
  Layers,
  Video,
  Sparkles,
  Tag,
  FileText,
  Gauge,
  BookOpen,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

const DIRECTORY = [
  { title: 'Architecture', desc: 'Reference designs and patterns', href: '/resource-architecture', icon: Layers },
  { title: 'Video Tutorials', desc: 'Watch the workflow, then build it', href: '/resource-video-tutorial', icon: Video },
  { title: 'Webinars & Events', desc: 'Live sessions and replays', href: '/resource-webinar-and-events', icon: Sparkles },
  { title: 'Glossary', desc: 'Media and streaming terms defined', href: '/resource-glossary', icon: Tag },
  { title: 'Blog & Insights', desc: 'Operations, productivity, growth', href: '/resource-blogs-and-insights', icon: FileText },
  { title: 'Case Studies', desc: 'How real teams operate ZoikoStream', href: '/resource-case-studies', icon: FileText },
  { title: 'System Status', desc: 'Live uptime and incident history', href: '/resource-system-status', icon: Gauge },
  { title: 'Changelog', desc: 'Every shipped change, dated', href: '/resource-change-log', icon: BookOpen },
  { title: 'Release Notes', desc: 'What each release means for you', href: '/resource-release-notes', icon: FileText },
  { title: 'Security & Trust Center', desc: 'Certifications and compliance', href: '/resource-security-trust-center', icon: ShieldCheck },
  { title: 'Accessibility', desc: 'Our conformance and roadmap', href: '/resource-accessibility', icon: HelpCircle },
  { title: 'Help Center', desc: 'Step-by-step help and articles', href: '/resource-help-center', icon: HelpCircle },
];

export default function ResourceOverviewDirectorySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          All Resources Directory
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          Quick lookup across every resource category on the platform.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DIRECTORY.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="p-5 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between gap-4 hover:outline-teal-400/50 transition-all group shadow-md"
            >
              <div className="flex flex-col gap-3">
                <div className="size-10 bg-teal-400/10 rounded-lg flex justify-center items-center shrink-0">
                  <IconComponent className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-white text-base font-bold font-['Space_Grotesk'] group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
