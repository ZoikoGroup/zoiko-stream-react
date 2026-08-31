import React from 'react';
import Image from 'next/image';

const matrixRows = [
  {
    characteristic: 'Source Class',
    rtmps: 'Broadcaster (OBS/Hardware)',
    srt: 'Hardware Encoder / Studio',
    whip: 'Browser (WebRTC) / Software',
  },
  {
    characteristic: 'Transport Model',
    rtmps: 'TCP (Session Based)',
    srt: 'UDP (ARQ / ARQ+FEC)',
    whip: 'UDP / TCP Fallback',
  },
  {
    characteristic: 'Network Resilience',
    rtmps: 'Standard TCP buffer',
    srt: 'Excellent (ARQ recovery)',
    srtCls: 'text-teal-400 font-semibold',
    whip: 'Good (NACK/FEC)',
  },
  {
    characteristic: 'Latency Class',
    rtmps: '2.0s – 5.0s (Normal)',
    srt: '200ms – 1.0s (Low)',
    whip: 'Sub-500ms (Ultra-Low)',
    whipCls: 'text-teal-400 font-semibold',
  },
  {
    characteristic: 'Firewall',
    rtmps: 'Easy (Single Port 443)',
    rtmpsCls: 'text-teal-400 font-semibold',
    srt: 'Needs open UDP ports',
    whip: 'STUN/TURN required',
  },
  {
    characteristic: 'Security Model',
    rtmps: 'TLS Encryption',
    srt: 'AES 128/256 Key',
    whip: 'SRTP / DTLS Encryption',
  },
  {
    characteristic: 'Reconnection',
    rtmps: 'Encoder-managed',
    srt: 'Seamless Auto-Recovery',
    srtCls: 'text-teal-400 font-semibold',
    whip: 'ICE restart standard',
  },
  {
    characteristic: 'Browser Support',
    rtmps: 'None (needs server proxy)',
    srt: 'None (Plugin/Native only)',
    whip: 'Native (Full WebRTC)',
    whipCls: 'text-teal-400 font-semibold',
  },
  {
    characteristic: 'Qualification Status',
    rtmps: 'ZoikoStream verified',
    rtmpsCls: 'text-teal-400 font-semibold',
    srt: 'ZoikoStream verified',
    srtCls: 'text-teal-400 font-semibold',
    whip: 'ZoikoStream verified',
    whipCls: 'text-teal-400 font-semibold',
  },
];

export function ProtocolDecisionMatrixSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 10.png"
          alt="Protocol Decision Matrix Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Protocol decision matrix
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Compare the protocol characteristics that matter to your contribution workflow.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 p-6 flex flex-col overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="p-4 bg-slate-900 border-b-2 border-gray-800 grid grid-cols-12 text-xs font-bold font-mono text-white">
            <div className="col-span-3">CHARACTERISTIC</div>
            <div className="col-span-3 text-center text-teal-400">RTMPS</div>
            <div className="col-span-3 text-center text-blue-500">SRT</div>
            <div className="col-span-3 text-center text-violet-500">WHIP</div>
          </div>

          <div className="divide-y divide-gray-800">
            {matrixRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold text-white">{row.characteristic}</div>
                <div className={`col-span-3 text-center ${row.rtmpsCls || 'text-slate-400'}`}>
                  {row.rtmps}
                </div>
                <div className={`col-span-3 text-center ${row.srtCls || 'text-slate-400'}`}>
                  {row.srt}
                </div>
                <div className={`col-span-3 text-center ${row.whipCls || 'text-slate-400'}`}>
                  {row.whip}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="p-4 pt-6 grid grid-cols-12 gap-3 items-center">
            <div className="col-span-3" />
            <div className="col-span-3 flex justify-center">
              <div className="px-4 py-2.5 rounded-md border border-teal-400 text-teal-400 text-xs font-bold font-mono cursor-pointer hover:bg-teal-400/10 transition-colors">
                Open RTMPS setup
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <div className="px-4 py-2.5 rounded-md border border-blue-500 text-blue-500 text-xs font-bold font-mono cursor-pointer hover:bg-blue-500/10 transition-colors">
                Open SRT setup
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <div className="px-4 py-2.5 rounded-md border border-violet-500 text-violet-500 text-xs font-bold font-mono cursor-pointer hover:bg-violet-500/10 transition-colors">
                Open WHIP setup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
