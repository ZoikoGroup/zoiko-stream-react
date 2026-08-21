import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Link2, OctagonAlert, Search, Share2, Terminal } from 'lucide-react';

export default function DeveloperHandoffSection() {
  const cards = [
    {
      title: 'Object Read',
      description:
        'Access immutable metadata identities, permissions, and active configurations via stable GET requests.',
      icon:Code
    },
    {
      title: 'Mutation API',
      description:
        'Idempotent POST/PUT pathways with cryptographically signed actor verification and concurrent safety checks.',
        icon:Terminal
    },
    {
      title: 'Search & List',
      description:
        'Permission-aware query processing with pagination, deep field filtering, and cache-freshness parameters.',
       icon:Search
    },
    {
      title: 'Events & Webhooks',
      description:
        'Approved custom event publishers mapping state transitions, workflow blockages, and deletion lifecycles.',
        icon:Share2
    },
    {
      title: 'External Mapping',
      description:
        'Reconciliation engine keeping local identities synced dynamically with third-party MAMs, CMSs, or CDNs.',
        icon:Link2
    },
    {
      title: 'Error Handling',
      description:
        'Predictable, structured, and typed API response payloads containing precise request correlation keys.',
        icon:OctagonAlert
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 border-b border-slate-200 py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-28 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Developer and integration handoff
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Stable object identity and approved integration paths
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const Icon=card.icon;
              return(
              <div
                key={idx}
                className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col gap-3 hover:border-slate-300 transition-colors"
              >
                <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <div className="size-5 relative flex items-center justify-center">
                    <Icon className="w-4 h-5 text-blue-500 " />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            
            );
            })}
          </div>

          {/* Right Console & Terminal Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {/* API Response Console */}
              <div className="p-6 bg-slate-900 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl">
                <div className="pb-3 border-b border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 bg-red-500 rounded-full" />
                    <span className="size-2.5 bg-amber-500 rounded-full" />
                    <span className="size-2.5 bg-emerald-500 rounded-full" />
                    <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] ml-1">
                      API Response Console
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                    JSON Payload
                  </span>
                </div>
                <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
                  <span className="text-violet-400">&#123;</span>
                  <br />
                  <span className="text-sky-400">  &quot;urn&quot;: &quot;urn:zoiko:record:7a92bf3d&quot;,</span>
                  <br />
                  <span className="text-sky-400">  &quot;version&quot;: &quot;v2.4&quot;,</span>
                  <br />
                  <span className="text-sky-400">  &quot;governance_state&quot;: &quot;GOVERNED&quot;,</span>
                  <br />
                  <span className="text-sky-400">  &quot;rehearsal_verified&quot;: true,</span>
                  <br />
                  <span className="text-sky-400">  &quot;active_whitelists&quot;: [</span>
                  <br />
                  <span className="text-teal-400">    &quot;oidc-corporate-main&quot;</span>
                  <br />
                  <span className="text-sky-400">  ],</span>
                  <br />
                  <span className="text-sky-400">  &quot;legal_hold&quot;: false</span>
                  <br />
                  <span className="text-violet-400">&#125;</span>
                </pre>
              </div>

              {/* Terminal / Curl Box */}
              <div className="p-4 bg-slate-900 rounded-xl border border-gray-800 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="size-2 bg-red-500 rounded-full" />
                    <span className="size-2 bg-amber-500 rounded-full" />
                    <span className="size-2 bg-emerald-500 rounded-full" />
                    <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] ml-1">
                      Terminal
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                    curl
                  </span>
                </div>
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <span className="text-gray-200">$ curl -X GET https://api.zoiko.dev/v1/records/7a92bf3d</span>
                  <span className="text-sky-400">&gt; GET /v1/records/7a92bf3d HTTP/1.1</span>
                  <span className="text-sky-400">&gt; Authorization: Bearer YOUR_API_KEY</span>
                  <span className="text-teal-400">&lt; HTTP/1.1 200 OK</span>
                  <span className="text-violet-400">&lt; Content-Type: application/json</span>
                </div>
              </div>

              {/* API Response Mini Box */}
              <div className="p-4 bg-slate-900 rounded-xl border border-gray-800 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200 text-xs font-bold font-['Space_Grotesk']">
                    API Response
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                    200 OK
                  </span>
                </div>
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <span className="text-sky-400">&quot;status&quot;: &quot;ok&quot;,</span>
                  <span className="text-sky-400">&quot;data&quot;: &#123;</span>
                  <span className="text-teal-400">  &quot;id&quot;: &quot;rec_7a92bf3d&quot;,</span>
                  <span className="text-teal-400">  &quot;name&quot;: &quot;main-identity&quot;,</span>
                  <span className="text-teal-400">  &quot;created_at&quot;: &quot;2026-01-18T14:30:00Z&quot;</span>
                  <span className="text-sky-400">&#125;,</span>
                  <span className="text-sky-400">&quot;request_id&quot;: &quot;req_9f2a1c&quot;</span>
                </div>
              </div>

              {/* Graphic Graphic Placeholder / Image */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-900 border border-gray-800">
                <Image
                  src="/images/platform-media-managemnt/DevGraphic.png"
                  alt="Developer Graphic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/docs"
                className="px-7 py-3.5 rounded-lg border border-slate-900 text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:bg-slate-100 transition-colors"
              >
                View developer resources
              </Link>
              <Link
                href="/build"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Start building
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}