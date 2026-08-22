import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

const playbackQuestions = [
  {
    q: 'Are playback tokens signed with short expirations?',
    a: 'Enforce asymmetric HMAC/RSA signatures with strict time-to-live thresholds (e.g., ≤15m) to block link extraction.',
  },
  {
    q: 'Which multi-DRM configurations are supported?',
    a: 'Deliver scoped licenses tailored for native Google Widevine, Apple FairPlay, and Microsoft PlayReady decrypters.',
  },
  {
    q: 'How is geographic and domain fencing verified?',
    a: 'Validate real-time edge mapping for geo-location IP restrictions and strict HTTP Referrer allowlists.',
  },
  {
    q: 'Are concurrent stream counts actively throttled?',
    a: 'Enforce per-session heartbeat handshakes to prevent bulk credential sharing and account abuse.',
  },
  {
    q: 'What mechanisms handle active stream revocation?',
    a: 'Propagate instant token blacklisting across edge CDNs under 5 seconds during active piracy detections.',
  },
  {
    q: 'Is forensic watermarking enabled at playhead?',
    a: 'Dynamically embed session-specific invisible metadata into the transcoded video segments per client connection.',
  },
];

export default function PlaybackAuthorizationContentProtectionSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Playback authorization and content protection
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Enforce multi-layered client verification, cryptographic token handshakes, and strict concurrency boundaries before delivering decryptable media keys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Q&As */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {playbackQuestions.map((item, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-slate-200 flex items-start gap-4"
              >
                <div className="size-6 bg-sky-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {item.q}
                  </h3>
                  <p className="text-slate-600 text-base font-normal   leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Dark Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Standards Box */}
            <div className="p-8 bg-slate-900 rounded-2xl flex flex-col gap-5 text-white">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  Playback standards
                </h3>
                <p className="text-slate-400 text-base font-normal   leading-relaxed">
                  Every secure playback session is validated at the edge against these primary security baselines.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Required DRM standard</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">Widevine L1 / FairPlay</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Token signature algorithm</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">RS256 (Asymmetric)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Token expiry window</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">≤ 15 minutes</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Revocation latency</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">≤ 5 seconds</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Default stream concurrency</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">3 concurrent streams</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-teal-400/20 flex flex-col gap-2">
                <span className="text-white text-base font-bold font-['Space_Grotesk']">
                  Revocation clause
                </span>
                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  Token validation occurs at every chunk request, ensuring revocation takes effect almost instantly.
                </p>
              </div>
            </div>

            {/* Referrer Defense Rule Box */}
            <div className="p-8 bg-slate-900 rounded-2xl flex flex-col gap-4 text-white border border-gray-800">
              <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                <AlertTriangle className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  Referrer defense rule
                </h3>
                <p className="text-slate-400 text-base font-normal   leading-relaxed">
                  The visible descriptor <span className="text-teal-400 font-bold">&quot;Referrer checking&quot;</span> is insufficient. Production integrations must require signed playback tokens to prevent browser header spoofing and hotlinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
