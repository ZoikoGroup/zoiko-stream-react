import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const accessControlOwns = [
  'Actor and principal validation against directory groups',
  'Organizational policy evaluations (geography, time-windows)',
  'Temporal lifecycle limits and automatic expiries',
  'Delegation of authority boundaries',
  'Forensic cryptographical receipt compilation',
];

const securePlaybackOwns = [
  'Verification of play session authorization on edge CDN servers',
  'Watermarking, domain lock, and referrer header assertions',
  'AES-128 and DRM token decryption key delivery',
  'Player state monitoring and immediate stream termination',
  'Tamper-proof embed security configurations',
];

export default function WhereAccessControlEndsSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (87).png"
          alt="Architectural Boundaries Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Where Access Control Ends &amp; Secure Playback Begins
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Separate architectural domains ensure high performance and tamper-proof security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Access Control Owns */}
          <div className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold  ">
              Access Control Owns:
            </h3>

            <div className="flex flex-col gap-3">
              {accessControlOwns.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                  <span className="text-slate-300 text-sm font-normal  ">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Playback Owns */}
          <div className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold  ">
              Secure Playback Owns:
            </h3>

            <div className="flex flex-col gap-3">
              {securePlaybackOwns.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-2 bg-blue-500 rounded-full shrink-0" />
                  <span className="text-slate-300 text-sm font-normal  ">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <Link
            href="/platform-secure-playback"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <span>Explore Secure Playback</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
