'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Layers,
  HelpCircle,
  BarChart3,
  Activity,
  ChevronRight,
} from 'lucide-react';

interface RouterItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const ROUTER_ITEMS: RouterItem[] = [
  {
    id: 'authentication',
    title: 'Authentication',
    subtitle:
      'Credential types, token lifecycle, scope/permissions, signing - owned by the Authentication authority.',
    href: '/authentication',
    icon: ShieldCheck,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'documentation',
    title: 'Developer Documentation',
    subtitle:
      'Task-oriented guides, concepts, prerequisites, procedural implementation context.',
    href: '/developer-documentation',
    icon: FileText,
    iconBg: 'bg-cyan-50 border-cyan-100',
    iconColor: 'text-cyan-500',
  },
  {
    id: 'sdks',
    title: 'SDKs & Libraries',
    subtitle:
      'Official library catalog, installation, compatibility, coverage, and lifecycle.',
    href: '/developer-sdk',
    icon: Layers,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    subtitle:
      'Cross-cutting recovery and remediation guidance beyond operation-specific errors.',
    href: '/faqs-and-support',
    icon: HelpCircle,
    iconBg: 'bg-teal-50 border-teal-100',
    iconColor: 'text-teal-500',
  },
  {
    id: 'rate-limits',
    title: 'Rate Limits & Quotas',
    subtitle:
      'Current limit policy, operational guidance, and backoff strategies.',
    href: '/developers-rate-limits',
    icon: BarChart3,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'status-changelog',
    title: 'System Status & Changelog',
    subtitle:
      'Real-time operational health, implementation-level change history, and deprecation notices.',
    href: '/zoikostream-status',
    icon: Activity,
    iconBg: 'bg-teal-50 border-teal-100',
    iconColor: 'text-teal-500',
  },
];

export default function AuthorityRoutingSection() {
  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Route to the right authority, every time
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            When implementation questions go beyond the API contract, ZoikoStream routes you to the exact authority.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Support Hub Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <span className="font-mono text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-3 block">
              SUPPORT HUB
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Find the right authority
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
              Each API implementation question belongs to a specific domain. Use this directory to navigate to the correct source of truth.
            </p>

            {/* Inner Callout Box */}
            <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-900 mb-1">
                Need immediate help?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Contact our support team with your API key and a redacted request payload for the fastest resolution.
              </p>
              <Link
                href="/contact-us"
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-xs py-2.5 rounded-lg transition-colors text-center block shadow-sm"
              >
                Open Support Ticket
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Authority Router Cards */}
          <div className="lg:col-span-8 space-y-4">
            {ROUTER_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-blue-200/90 transition-all duration-200"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`p-3 rounded-xl border ${item.iconBg} ${item.iconColor} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-base sm:text-[17px] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
