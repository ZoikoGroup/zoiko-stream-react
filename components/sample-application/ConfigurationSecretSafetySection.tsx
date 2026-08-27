import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const safetyPoints = [
  {
    title: 'Placeholder-only environment files',
    desc: 'Configuration templates (.env.example) use clear mocks instead of valid credentials.',
  },
  {
    title: 'No real secrets in source',
    desc: 'Rigorous static analysis verifies that no real API keys are ever committed to repository files.',
  },
  {
    title: 'Credential rotation guidance',
    desc: 'Interactive instructions guide you through securely setting up local system secrets.',
  },
  {
    title: 'Minimum-scope tokens',
    desc: 'Recommended configurations utilize token scopes restricted purely to the sample application needs.',
  },
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 bg-teal-400/10 rounded-xl border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export function ConfigurationSecretSafetySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Configuration and secret safety
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Sample code must never contain real credentials. Environment templates use placeholders only.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: 4 Safety Points */}
          <div className="flex flex-col gap-6">
            {safetyPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold">{pt.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-5">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Card: .ENV.EXAMPLE SECURE TEMPLATE */}
          <div className="bg-slate-50/90 rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-start items-start shadow-sm backdrop-blur-sm">
            <div className="w-full h-44 relative bg-slate-900">
              <Image
                src="/images/sample-application/Rectangle (11).png"
                alt="Secure Template Image"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 w-full flex flex-col gap-4">
              <span className="text-slate-600 text-base font-bold font-mono uppercase">
                .ENV.EXAMPLE SECURE TEMPLATE
              </span>

              <div className="p-3 bg-gray-950 rounded-lg flex flex-col gap-2 font-mono text-xs text-slate-400">
                <span>ZOIKO_API_ENDPOINT=&quot;https://api.zoikostream.com/v3&quot;</span>
                <span className="text-teal-400">ZOIKO_PLAYER_TOKEN=&quot;&lt;YOUR_VERIFIED_PLAYER_TOKEN&gt;&quot;</span>
                <span className="text-teal-400">ZOIKO_INGEST_KEY=&quot;&lt;PLACEHOLDER_INGEST_KEY&gt;&quot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
