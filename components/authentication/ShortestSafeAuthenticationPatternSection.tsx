import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const steps = [
  'Confirm credential method (e.g. zk_prod_ API Key vs signed Token)',
  'Retrieve secrets safely from a designated vault, never from static config files',
  'Build payload request object using the mandatory timestamp envelope headers',
  'Send only over TLS-approved endpoint transport layers, checking certificates',
  'Inspect result payloads, noting returned scopes and rate limit headers',
  'Remove debugging exposures, verifying credentials never escape into platform logs',
  'Verify integration state by hitting the ZoikoStream ping validation service',
];

const patterns = [
  {
    title: 'Safe Request Pattern',
    desc: 'Pass credentials strictly inside custom HTTP headers, never inside query parameters.',
    img: '/images/authentication/Req-Card-Image.png',
  },
  {
    title: 'Transport Security',
    desc: 'All requests require strict TLS 1.3 protocol layers. Non-secure requests reject instantly.',
    img: '/images/authentication/Req-Card-Image (1).png',
  },
  {
    title: 'Debug Cleanup',
    desc: 'Ensure your developer interceptors strip auth tokens before printing payloads to terminal.',
    img: '/images/authentication/Req-Card-Image (2).png',
  },
];

export function ShortestSafeAuthenticationPatternSection() {
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
            The shortest safe authentication pattern
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Seven steps from credential retrieval to a verified, safe API request.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 7 Steps */}
          <div className="flex flex-col gap-2">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-3 bg-white/90 rounded-lg border border-gray-200 flex items-center gap-4 shadow-2xs backdrop-blur-sm"
              >
                <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-900 text-xs font-bold font-mono">{idx + 1}</span>
                </div>
                <span className="text-slate-900 text-xs font-normal leading-4">{st}</span>
              </div>
            ))}
          </div>

          {/* Right Code Example Card */}
          <div className="p-6 bg-slate-900 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-xl">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-xs font-bold font-mono">CURL PATTERN EXAMPLES</span>
              <span className="text-teal-400 text-xs font-mono">SHELL</span>
            </div>

            <div className="p-4 bg-slate-950 rounded border border-gray-800 font-mono text-xs text-white leading-relaxed overflow-x-auto">
              curl -X POST https://api.zoikostream.com/v1/sessions \<br />
              &nbsp;&nbsp;-H &quot;Authorization: Bearer zk_prod_...&quot; \<br />
              &nbsp;&nbsp;-d &apos;&#123; &quot;scope&quot;: &quot;playback:read&quot; &#125;&apos;
            </div>
          </div>
        </div>

        {/* Bottom 3 Pattern Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {patterns.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full h-28 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
