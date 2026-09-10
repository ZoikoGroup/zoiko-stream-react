import React from 'react';

export default function DiscoverEventsSection() {
  const categories = [
    { name: 'All domains', active: true },
    { name: 'Stream', active: false },
    { name: 'Recording & assets', active: false },
    { name: 'Playback', active: false },
    { name: 'Account & integration', active: false }
  ];

  const events = [
    {
      name: 'stream.session.started',
      desc: 'A live stream session moved into a broadcasting state.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'stream.session.ended',
      desc: 'A live stream session ended, gracefully or unexpectedly.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'stream.session.failed',
      desc: 'A live stream session failed to start or was interrupted.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'recording.asset.ready',
      desc: 'A recorded asset finished processing and is available for retrieval.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'recording.asset.failed',
      desc: 'Recording processing failed for an asset.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'playback.session.started',
      desc: 'A viewer session began playback of a stream or asset.',
      tags: [{ label: 'Preview', type: 'preview' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'playback.error.reported',
      desc: 'A player reported a playback error during a session.',
      tags: [{ label: 'Preview', type: 'preview' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'webhook.endpoint.disabled',
      desc: 'A webhook endpoint was automatically disabled after sustained failures.',
      tags: [{ label: 'Stable', type: 'stable' }, { label: 'v1', type: 'version' }]
    },
    {
      name: 'account.usage.threshold_reached',
      desc: 'Account usage crossed a configured threshold.',
      tags: [{ label: 'Preview', type: 'preview' }, { label: 'v1', type: 'version' }]
    }
  ];

  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Discover events
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Find the events that match your workflow.
        </h2>

        <p className="w-full max-w-[850px] font-inter text-[15px] font-normal leading-[24.3px] text-[#63697a] mb-6">
          Subscribe only to the events your integration needs. Selected events are shown before you activate an endpoint.
        </p>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap items-center gap-[10px] mb-[10px]">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`flex items-center justify-center rounded-[8px] border border-solid px-[15px] py-[8px] text-[12.5px] font-semibold transition-colors ${
                cat.active
                  ? 'border-[#2b2e35] bg-[#2b2e35] text-white'
                  : 'border-[#dde2ea] bg-white text-[#2b2e35] hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[12px] border border-solid border-[#dde2ea] bg-white p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-mono text-[13.5px] font-bold text-[#2b2e35] mb-3">
                {event.name}
              </h3>
              <p className="font-inter text-[13px] font-normal leading-[20px] text-[#63697a] mb-6 flex-1">
                {event.desc}
              </p>
              <div className="flex items-center gap-[8px] mt-auto">
                {event.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`inline-flex items-center justify-center rounded-[6px] px-[8px] py-[3px] text-[10.5px] font-bold uppercase tracking-[0.5px] ${
                      tag.type === 'stable'
                        ? 'bg-[#eafaf3] text-[#128a5b]'
                        : tag.type === 'preview'
                        ? 'bg-[#fff5eb] text-[#b07b1a]'
                        : 'bg-[#f1f4f8] text-[#63697a]'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-inter text-[13.5px] italic text-[#9aa1ae]">
          Event names shown are illustrative for this design mockup and must be confirmed against the current ZoikoStream Event Registry before implementation.
        </p>
      </div>
    </section>
  );
}
