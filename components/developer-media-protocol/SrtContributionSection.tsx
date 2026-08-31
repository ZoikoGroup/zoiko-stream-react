import React from 'react';
import Image from 'next/image';
import { CopyIcon, Eye } from 'lucide-react';

const srtScenarios = [
  'Operating in environments with variable packet loss or jitter.',
  'Need transport-level forward error correction.',
  'Broadcast-grade contribution over managed or semi-managed networks.',
  'Latency tolerance above sub-second range.',
];

export function SrtContributionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 11.png"
          alt="SRT Contribution Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 5" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            SRT contribution for workflows that need resilient transport across imperfect networks
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            SRT is an open-source transport designed to adapt to changing network conditions and recover packet loss. It uses caller, listener, and rendezvous modes — ZoikoStream supports the verified subset from the protocol registry.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-xl backdrop-blur-md">
              <h3 className="text-white text-xl font-bold font-mono">When to consider SRT</h3>
              <div className="flex flex-col gap-3.5">
                {srtScenarios.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-teal-400 -rotate-45" />
                    </div>
                    <span className="text-slate-400 text-sm leading-5">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-gray-800 rounded-r-lg border-l-4 border-teal-400 flex items-center gap-4">
              <div className="w-5 h-5 rounded border border-teal-400 flex items-center justify-center flex-shrink-0">
                <span className="text-teal-400 text-xs font-bold font-mono">i</span>
              </div>
              <p className="text-sm leading-5">
                <strong className="text-white font-bold">Protocol Fact: </strong>
                <span className="text-slate-400">
                  SRT documentation emphasizes loss recovery, latency tuning and caller/listener/rendezvous concepts.
                </span>
              </p>
            </div>
          </div>

          {/* Right Endpoint Card */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="w-full flex justify-between items-center">
              <span className="text-white text-base font-bold font-mono">VERIFIED ENDPOINT</span>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-400 text-xs font-bold font-mono uppercase">
                CALLER MODE
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold font-mono">SRT HOST</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center font-mono text-sm text-white">
                  <span>srt.ingest.zoikostream.com</span>
                  <span className="text-teal-400 cursor-pointer text-xs"><CopyIcon></CopyIcon></span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold font-mono">SRT PORT</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center font-mono text-sm text-white">
                  <span>9000</span>
                  <span className="text-teal-400 cursor-pointer text-xs"><CopyIcon></CopyIcon></span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold font-mono">STREAM ID</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center font-mono text-sm text-white">
                  <span>zs_str_caller_77x88y99z</span>
                  <span className="text-teal-400 cursor-pointer text-xs"><CopyIcon></CopyIcon></span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-400 text-xs font-bold font-mono">PASSPHRASE</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center font-mono text-sm text-slate-400">
                  <span className="tracking-widest">••••••••••••••••</span>
                  <div className="flex gap-2 ">
                    <span className="cursor-pointer"><Eye></Eye></span>
                    <span className="text-teal-400 cursor-pointer"><CopyIcon></CopyIcon></span>
                  </div>
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-xs font-mono">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px] font-bold">LATENCY</span>
                  <span className="text-teal-400 font-bold">120 ms</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px] font-bold">ENCRYPTION</span>
                  <span className="text-white font-bold">AES-256</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px] font-bold">CODECS</span>
                  <span className="text-white font-bold">H.264/HEVC</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex-1 px-4 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-sm font-bold font-mono">Open SRT setup</span>
              </div>
              <div className="flex-1 px-4 py-3.5 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
                <span className="text-white text-sm font-bold font-mono">Check qualification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
