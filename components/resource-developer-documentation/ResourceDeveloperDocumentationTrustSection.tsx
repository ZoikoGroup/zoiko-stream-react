  import React from 'react';
  import Image from 'next/image';
  import bg147 from '@/public/images/Organization-overview/bg (147).png';
  import { Link, RefreshCcw, Shield } from 'lucide-react';

  const TRUST_FEATURES = [
    {
      title: 'Current source authority',
      desc: 'Technical behavior, endpoints, schemas, and examples are published only from approved implementation sources. Unknown states are explicit.',
      icon: Shield,
    },
    {
      title: 'Lifecycle governance',
      desc: 'Every document carries a state — Current, Preview, Deprecated, Sunset, Superseded, Under review, or Unknown — driven by the registry.',
      icon: RefreshCcw,
    },
    {
      title: 'Dependency-aware freshness',
      desc: 'When auth, schema, SDK, or API changes, dependent docs and examples are automatically flagged for re-review.',
      icon: Link,
    },
  ];

  export default function ResourceDeveloperDocumentationTrustSection() {
    return (
      <section className="relative w-full  px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
        {/* Background Snippet */}
        <div className="absolute inset-0 pointer-events-none z-0 ">
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

        {/* Header */}
        <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
            Source-governed documentation you can trust
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Every page carries its technical scope, state, version, review date, and source authority — so you never act on stale or invented information.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="size-12 bg-sky-100 rounded-xl flex justify-center items-center shrink-0">
                  <Icon className="size-6 text-blue-700" />
                </div>

                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-7">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-6">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
