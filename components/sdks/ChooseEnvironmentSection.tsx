'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface SdkCard {
  title: string;
  status: string;
  description: string;
  version: string;
  image: string;
}

const tabs = ['All SDKs', 'Client-side', 'Server-side', 'Community'];

const cards: SdkCard[] = [
  {
    title: 'JavaScript SDK',
    status: 'PROSTABLE',
    description: 'Browser & Node.js client',
    version: 'v4.2.1',
    image: '/images/sdks/card-javascript.png',
  },
  {
    title: 'Python SDK',
    status: 'PRODUCTION',
    description: 'Server-side pipelines & Django',
    version: 'v3.8.0',
    image: '/images/sdks/card-python.png',
  },
  {
    title: 'Swift SDK',
    status: 'ACTIVE',
    description: 'Native iOS & iPadOS apps',
    version: 'v2.5.3',
    image: '/images/sdks/card-swift.png',
  },
];

export default function ChooseEnvironmentSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      className="relative w-full flex flex-col gap-12 items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/sdks/environment-bg.png')` }}
    >
      <div className="flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#0a0d13] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Choose your environment
        </h2>
        <p className="text-[#4f5e74] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Access native wrappers built to manage core signaling, network transit, and edge audio-video buffering.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full border text-[13px] whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#e0f2fe] border-[#3b82f6] text-[#1d4ed8] font-bold'
                    : 'bg-transparent border-[#e5e7eb] text-[#4f5e74] font-medium hover:border-[#3b82f6]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 border border-[#e5e7eb] rounded-lg px-4 py-2 w-full sm:w-[320px]">
          <Search className="size-3.5 text-[#9ca3af] shrink-0" />
          <input
            type="text"
            placeholder="Filter runtime or platform..."
            className="w-full text-[13px] text-[#0a0d13] placeholder:text-[#9ca3af] outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start rounded-2xl border border-[#e2e8f0] overflow-hidden"
          >
            <div className="relative w-full h-[160px] shrink-0">
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 items-start w-full p-5 bg-white">
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-[#0a0d13] text-lg whitespace-nowrap">{card.title}</p>
                <span className="px-2 py-0.5 rounded bg-[#d1fae5] font-mono font-bold text-[#065f46] text-[9px] whitespace-nowrap">
                  {card.status}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <p className="text-[#4f5e74] text-sm">{card.description}</p>
                <p className="font-mono text-[#9ca3af] text-xs">Latest stable: {card.version}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
