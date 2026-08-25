import React from 'react';
import Image from 'next/image';

export function AccessibleVideoGuidanceSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            CONTEXT
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Accessible video guidance.
        </h2>
      </div>

      {/* 2 Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-xs">
          <div className="w-full h-80 relative bg-slate-100">
            <Image
              src="/images/accessibility/Video playback with captions.png"
              alt="Captions, transcripts & audio description"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-700 text-base font-bold">
              Captions, transcripts & audio description
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-6">
              Availability of captions, transcripts and audio description depends on the feature and who configured or uploaded the content — ZoikoStream and event organizers or content owners may each be responsible depending on the workflow.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-xs">
          <div className="w-full h-80 relative bg-slate-100">
            <Image
              src="/images/accessibility/Person using a keyboard.png"
              alt="Keyboard, screen reader & contrast"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-700 text-base font-bold">
              Keyboard, screen reader & contrast
            </h3>
            <p className="text-gray-500 text-sm font-normal leading-6">
              ZoikoStream&apos;s interface and platform components are our direct responsibility. If keyboard navigation, screen reader support or contrast create a barrier, report it here so it reaches the right product or web team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
