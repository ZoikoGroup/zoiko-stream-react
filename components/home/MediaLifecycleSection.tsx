'use client';

import Image from 'next/image';
import { useState } from 'react';

const LIFECYCLE_STAGES = [
  { id: 1, name: '1. Contribute', label: 'Contribute' },
  { id: 2, name: '2. Ingest', label: 'Ingest' },
  { id: 3, name: '3. Produce', label: 'Produce' },
  { id: 4, name: '4. Secure', label: 'Secure' },
  { id: 5, name: '5. Deliver', label: 'Deliver' },
  { id: 6, name: '6. Understand', label: 'Understand' },
  { id: 7, name: '7. Preserve', label: 'Preserve' },
];

export default function MediaLifecycleSection() {
  const [activeStage, setActiveStage] = useState(1);

  const currentStage = LIFECYCLE_STAGES.find((stage) => stage.id === activeStage);

  return (
    <section className="w-full bg-[#eef1f6] px-6 py-16 text-slate-900 transition-colors duration-200 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10">
        <div className="flex max-w-[760px] flex-col items-start gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="  text-xs uppercase tracking-[0.22em] text-blue-500">
              The complete media lifecycle
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-[32px]">
            From first signal to lasting replay.
          </h2>

          <p className="max-w-[720px]   text-base leading-relaxed text-slate-500 sm:text-sm">
            Manage the complete journey of live and on-demand media through one secure, observable, and globally
            distributed platform.
          </p>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-2">
          {LIFECYCLE_STAGES.map((stage) => {
            const isActive = activeStage === stage.id;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                }`}
              >
                {stage.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[490px] overflow-hidden rounded-2xl border border-neutral-300 bg-slate-800 text-white shadow-sm lg:col-span-12">
            <Image
              src="/images/home/div.ar-2-1.png"
              alt="Annotated pipeline background"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-black/30" />

            <div className="absolute left-10 top-6 max-w-[320px] lg:left-auto lg:right-[14%] lg:top-8">
              <h3 className="  text-2xl font-semibold text-white">
                {currentStage?.label}
              </h3>
              <p className="mt-2 max-w-[280px]   text-base leading-relaxed text-slate-200">
                Bring in professional, remote, browser, mobile, or application-based media sources.
              </p>
            </div>

            

            <div className="absolute bottom-5 right-5 w-[39%] min-w-[240px] max-w-[440px] overflow-hidden rounded-2xl">
              <Image
                src="/images/home/div.ar-1-12x.png"
                alt="Source tiles and verified signal state"
                width={240}
                height={130}
                className="h-[320px] w-[320px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="pt-1">
          <a
            href="#capabilities"
            className="inline-flex items-center gap-1.5   text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600"
          >
            Explore all platform capabilities <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
