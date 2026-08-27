'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const installCmds: Record<string, string> = {
  npm: 'npm install @zoikostream/sdk-node@3.4.1 --save-exact',
  yarn: 'yarn add @zoikostream/sdk-node@3.4.1 --exact',
  pnpm: 'pnpm add @zoikostream/sdk-node@3.4.1 --save-exact',
};

export function InstallAndPinSection() {
  const [activeTab, setActiveTab] = useState<'npm' | 'yarn' | 'pnpm'>('npm');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmds[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (3).png"
          alt="Install and Pin Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Install and pin — reproducible setup from verified data.
          </h2>
        </div>

        {/* Code Command Container */}
        <div className="w-full bg-zinc-900 rounded-xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
          <div className="px-4 py-3 bg-slate-900 flex items-center gap-2 border-b border-gray-800">
            {(['npm', 'yarn', 'pnpm'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-zinc-900 text-teal-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 bg-gray-950 flex justify-between items-center font-mono text-sm text-white">
            <span>{installCmds[activeTab]}</span>
            <button
              onClick={handleCopy}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded border border-gray-800 text-teal-400 transition-colors cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-normal">
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span>
              Package Source: <strong className="text-white font-bold">npm Registry</strong>
            </span>
            <span>
              Version Policy: <strong className="text-white font-bold">Exact Pin (Suggested)</strong>
            </span>
            <span>
              Verified against <strong className="text-teal-400 font-bold">source origin</strong> today
            </span>
          </div>

          <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-gray-800 text-white text-xs font-mono font-bold cursor-pointer">
            Version: 3.4.1 (Latest) ▾
          </div>
        </div>
      </div>
    </section>
  );
}
