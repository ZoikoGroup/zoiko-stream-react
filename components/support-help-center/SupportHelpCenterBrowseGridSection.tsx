'use client';

import React, { useState } from 'react';

const ARTICLES = [
  {
    category: 'Account & Access',
    title: 'Reset your password',
    desc: 'Reset your password from the sign-in page using your account email — no account access is required to start a reset.',
    subtext: 'Applies to: All accounts · Reviewed 2026-08-10',
  },
  {
    category: 'Account & Access',
    title: 'Update your account email address',
    desc: 'Update your email address from Account settings — you will need to confirm the change from the new address.',
    subtext: 'Applies to: All accounts · Reviewed 2026-07-28',
  },
  {
    category: 'Account & Access',
    title: 'Manage team members and roles',
    desc: 'Add, remove, or change the role of a team member from Account settings → Team, if your role has permission to manage members.',
    subtext: 'Applies to: Team and Enterprise accounts · Reviewed 2026-08-02',
  },
  {
    category: 'Account & Access',
    title: 'Enable two-factor authentication',
    desc: 'Turn on two-factor authentication from Account settings → Security to add a verification step at sign-in.',
    subtext: 'Applies to: All accounts · Reviewed 2026-08-14',
  },
  {
    category: 'Billing & Usage',
    title: 'Understand your invoice',
    desc: 'Each invoice line maps to a usage dimension and billing period, visible in Account settings → Billing → Invoices.',
    subtext: 'Applies to: Billed accounts · Reviewed 2026-08-05',
  },
  {
    category: 'Billing & Usage',
    title: 'Update your payment method',
    desc: 'Add or change your payment method from Account settings → Billing → Payment methods.',
    subtext: 'Applies to: Billed accounts · Reviewed 2026-07-30',
  },
  {
    category: 'Billing & Usage',
    title: 'Download past invoices',
    desc: 'Every past invoice is available as a PDF from Account settings → Billing → Invoices.',
    subtext: 'Applies to: Billed accounts · Reviewed 2026-06-18',
  },
  {
    category: 'Live Events',
    title: 'Plan a live event — overview',
    desc: 'Planning a ZoikoStream Live Event starts with the two-step planning form, covering event basics and then production detail.',
    subtext: 'Applies to: Live Events customers · Reviewed 2026-08-16',
  },
  {
    category: 'Live Events',
    title: "Troubleshoot a live event that hasn't started",
    desc: "If your event hasn't gone live at the scheduled time, check contribution connection status before assuming a platform issue.",
    subtext: 'Applies to: Live Events customers · Reviewed 2026-08-11',
  },
  {
    category: 'Live Events',
    title: 'Access recordings after a live event',
    desc: 'If recording was enabled for your event, the replay becomes available once processing completes — this is not immediate.',
    subtext: 'Applies to: Live Events with recording enabled · Reviewed 2026-07-22',
  },
  {
    category: 'Playback & Delivery',
    title: 'Why is my live stream not showing as live?',
    desc: 'A stream shows "live" only once the platform has received and validated an active signal — creating the stream resource does not make it live by itself.',
    subtext: 'Applies to: Live streaming API, all plans · Reviewed 2026-08-18',
  },
  {
    category: 'Playback & Delivery',
    title: 'Fix video playback errors',
    desc: "Most playback errors fall into three categories: the asset isn't ready, access was denied, or the player/network failed — each needs a different fix.",
    subtext: 'Applies to: All playback surfaces · Reviewed 2026-08-09',
  },
  {
    category: 'Playback & Delivery',
    title: 'Understand playback access policies',
    desc: 'Public, protected/signed, and DRM-gated are the three access policies available, and they determine who can view your content.',
    subtext: 'Applies to: All playback surfaces · Reviewed 2026-07-25',
  },
  {
    category: 'Developer & API',
    title: 'Find your API credentials',
    desc: 'API credentials are generated from Developer access in your account, separately for test and live environments.',
    subtext: 'Applies to: Self-service eligible accounts · Reviewed 2026-08-13',
  },
  {
    category: 'Developer & API',
    title: 'Understand rate limit errors (429)',
    desc: "A 429 response means you've exceeded the current request-rate ceiling for that endpoint — back off and retry using the documented interval.",
    subtext: 'Applies to: All API surfaces · Reviewed 2026-08-06',
  },
  {
    category: 'Developer & API',
    title: 'Verify a webhook signature',
    desc: 'Every webhook payload is signed — verify the signature before trusting the payload, using your endpoint secret.',
    subtext: 'Applies to: Webhook subscribers · Reviewed 2026-07-19',
  },
  {
    category: 'Security & Privacy',
    title: 'Report a security vulnerability',
    desc: 'Security vulnerabilities go to a dedicated security reporting channel — not the general Report an issue route.',
    subtext: 'Applies to: All users · Reviewed 2026-08-01',
  },
  {
    category: 'Security & Privacy',
    title: 'Understand data retention',
    desc: 'Retention periods vary by data type — account data, usage logs, and stored media each follow different, source-defined schedules.',
    subtext: 'Applies to: All accounts · Reviewed 2026-06-30',
  },
  {
    category: 'Security & Privacy',
    title: 'Manage your privacy preferences',
    desc: 'Privacy and communication preferences are managed from Account settings → Privacy.',
    subtext: 'Applies to: All accounts · Reviewed 2026-07-14',
  },
];

const CATEGORIES = [
  'All categories',
  'Account & Access',
  'Billing & Usage',
  'Live Events',
  'Playback & Delivery',
  'Developer & API',
  'Security & Privacy',
];

export default function SupportHelpCenterBrowseGridSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All categories');

  const filteredArticles =
    activeCategory === 'All categories'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-8 overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Browse help
        </h2>
        <span className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono']">
          19 articles
        </span>
      </div>

      {/* Category Pills */}
      <div className="w-full flex flex-wrap items-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium font-['Inter'] transition-colors ${
              activeCategory === cat
                ? 'bg-zinc-900 text-white'
                : 'bg-white text-gray-500 outline outline-1 outline-offset-[-1px] outline-gray-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 19 Help Cards Grid (2 Columns) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {filteredArticles.map((art, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col gap-2">
              <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-tight">
                {art.category}
              </span>
              <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                {art.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {art.desc}
              </p>
            </div>

            <span className="text-slate-500 text-[11px] font-normal font-['IBM_Plex_Mono'] pt-2">
              {art.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
