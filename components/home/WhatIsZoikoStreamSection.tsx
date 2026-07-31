import Image from 'next/image';

export default function WhatIsZoikoStreamSection() {
  return (
    <section className="flex w-full items-center justify-center bg-slate-100 px-6 py-16 transition-colors duration-200 dark:bg-slate-900 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-8 lg:flex-1">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="  text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
              One media platform
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-4xl">
            What is ZoikoStream
          </h2>

          <div className="flex max-w-[580px] flex-col gap-6   text-xm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xm">
            <p>
              ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform, operated within
              Zoiko Tech and powered by Zoiko Cloud. It gives developers programmable APIs, SDKs, and media
              protocols, while giving enterprise operators managed workflows for live broadcasting, secure delivery,
              captions, translation, recording, replay, analytics, and resilient media operations.
            </p>
            <p>
              Use one platform for the technical foundation behind a video product, the operating environment behind
              an enterprise broadcast, or the complete lifecycle of a professionally managed live event.
            </p>
          </div>

          <button
            type="button"
            className="group flex items-center justify-center gap-2 rounded-[10px] border border-gray-800 px-6 py-3.5   text-base font-semibold text-zinc-900 transition-colors duration-200 hover:bg-zinc-900 hover:text-white dark:border-gray-200 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            <span>Explore the ZoikoStream platform</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div className="flex w-full items-center justify-center lg:flex-1">
          <div className="w-full max-w-[590px] overflow-hidden rounded-2xl border border-neutral-300 shadow-lg dark:border-neutral-700">
            <Image
              src="/images/home/div.ar-4-3.png"
              alt="ZoikoStream Platform Overview"
              width={590}
              height={443}
              className="aspect-[590/443] h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
