import React from 'react';
import Image from 'next/image';

const accessSteps = [
  {
    num: '01',
    title: 'Credential Type',
    desc: 'Symmetric Bearer Tokens wrapped in server-side authorization headers.',
  },
  {
    num: '02',
    title: 'Scope / Permission',
    desc: 'Granular read-only metrics scopes (e.g. analytics:read:qos, analytics:read:viewership).',
  },
  {
    num: '03',
    title: 'Environment Boundary',
    desc: 'Rigid segregation between production analytics pipelines and staging/development keys.',
  },
  {
    num: '04',
    title: 'Rotation / Revocation',
    desc: 'Automated rotation cycles and single-click credential revocation protocols.',
  },
];

const authSnippet = `curl -X POST https://api.zoikostream.com/v1/analytics \\
  -H "Authorization: Bearer $ZOIKO_ANALYTICS_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset": "viewership_raw",
    "scope": "viewership:read"
  }'`;

export function QueryAnalyticsLeastPrivilegeSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (22).png"
          alt="Query Analytics Least Privilege Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Query analytics with least-privilege access
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Analytics access is authenticated and permission-scoped. Use approved server-side credentials and request only the datasets your integration is authorized to read.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 4 Steps */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {accessSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-800 rounded-xl border border-gray-800 flex items-center gap-5 shadow-md"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                  <span className="text-teal-400 text-xs font-bold font-mono">{st.num}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-mono">{st.title}</h3>
                  <p className="text-slate-400 text-sm leading-5">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Payload & Warning */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-md">
            <h3 className="text-white text-lg font-bold font-mono">API Authentication Payload</h3>

            <div className="p-5 bg-gray-950 rounded-lg font-mono text-xs text-teal-400 leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{authSnippet}</pre>
            </div>

            <div className="w-full h-px bg-gray-800" />

            <div className="p-4 bg-orange-600/10 rounded-lg border border-orange-600/30 flex items-start gap-3">
              <span className="text-orange-500 font-bold text-sm">⚠</span>
              <p className="text-orange-500 text-xs leading-5">
                <strong>WARNING:</strong> Never embed privileged analytics credentials in public browser code, HTML, mobile bundles, or logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
