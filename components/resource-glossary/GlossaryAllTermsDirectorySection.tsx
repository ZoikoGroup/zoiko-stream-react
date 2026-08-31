import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const DIRECTORY_TERMS = [
  {
    term: 'WebRTC',
    tag: 'Protocols',
    definition:
      'Web Real-Time Communication. An open-source project providing web browsers and mobile applications with real-time communication APIs without plugins.',
  },
  {
    term: 'RTMP',
    tag: 'Ingest',
    definition:
      'Real-Time Messaging Protocol. Originally developed by Macromedia for streaming audio, video and data over the internet, historically standard for ingest.',
  },
  {
    term: 'Frame Rate',
    tag: 'Media',
    definition:
      'The frequency at which consecutive images (frames) are captured or displayed in a stream, typically measured in frames per second (fps).',
  },
  {
    term: 'Keyframe',
    tag: 'Compression',
    definition:
      'Also known as an I-frame. A video frame that contains a complete image, serving as the reference point for subsequent delta frames.',
  },
  {
    term: 'Manifest',
    tag: 'Delivery',
    definition:
      'A text file (like an .m3u8 index) that lists available stream variations, resolutions, and the sequence of video segment paths for player parsing.',
  },
  {
    term: 'Buffer',
    tag: 'Playback',
    definition:
      'The temporary segment storage loaded ahead of the current playback timeline to mitigate momentary network dips and packet lag.',
  },
];

export default function GlossaryAllTermsDirectorySection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 pt-24 pb-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-12">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Browse all glossary terms.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          The canonical current-term directory — search, filter by topic, or scroll A–Z.
        </p>
      </div>

      {/* Filter Header Bar */}
      <div className="w-full p-4 bg-gray-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 bg-gray-900 flex items-center gap-2 cursor-pointer">
            <span className="text-white text-sm font-normal font-['Inter']">
              Filter by Topic: All
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 bg-gray-900 flex items-center gap-2 cursor-pointer">
            <span className="text-white text-sm font-normal font-['Inter']">
              Sort: Alphabetical (A-Z)
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
        <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
          142 DEFINITIONS FOUND
        </span>
      </div>

      {/* Terms List */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {DIRECTORY_TERMS.map((item, index) => (
          <div
            key={index}
            className="w-full p-6 bg-gray-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:outline-gray-700 transition-colors"
          >
            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="flex items-center gap-4">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.term}
                </h3>
                <div className="px-2 py-0.5 bg-gray-950 rounded-sm">
                  <span className="text-teal-400 text-xs font-semibold font-['Inter']">
                    {item.tag}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {item.definition}
              </p>
            </div>
            <div className="p-3 bg-gray-950 rounded-lg shrink-0 flex justify-center items-center cursor-pointer hover:bg-gray-900 transition-colors">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
