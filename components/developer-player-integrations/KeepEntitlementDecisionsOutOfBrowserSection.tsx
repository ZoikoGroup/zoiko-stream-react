import React from 'react';
import Image from 'next/image';

export function KeepEntitlementDecisionsOutOfBrowserSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-player-integration/bg (11).png"
          alt="Keep Entitlement Decisions Out Of Browser Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Keep entitlement decisions and signing authority out of the browser.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Security tokens generated directly on the client represent a severe architectural failure. Pass dynamic stream configurations safely.
          </p>
        </div>

        {/* 2 Path Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Public Playback Path */}
          <div className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col shadow-xl">
            <div className="w-full h-44 relative bg-slate-900">
              <Image
                src="/images/developer-player-integration/Rectangle (13).png"
                alt="Public Playback Path"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <h3 className="text-white text-xl font-bold">Public Playback Path</h3>
              </div>
              <p className="text-slate-400 text-sm leading-5">
                Application receives approved public source URLs and attaches through selected player path directly without proxy steps or signing overhead.
              </p>
            </div>
          </div>

          {/* Card 2: Protected Playback Path */}
          <div className="bg-zinc-900/80 rounded-2xl border border-blue-500 overflow-hidden flex flex-col shadow-xl">
            <div className="w-full h-44 relative bg-slate-900">
              <Image
                src="/images/developer-player-integration/Rectangle (14).png"
                alt="Protected Playback Path"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-white text-xl font-bold">Protected Playback Path</h3>
              </div>
              <p className="text-slate-400 text-sm leading-5">
                Browser requests dynamic tokens. Backend evaluates entitlement pipelines, generates browser-safe credentials, and serves restricted media playlist files.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">
              Read Secure playback specification
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
