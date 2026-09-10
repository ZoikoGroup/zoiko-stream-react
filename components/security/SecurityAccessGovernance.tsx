import React from 'react';
import Image from 'next/image';

export default function SecurityAccessGovernance() {
  return (
    <section className="w-full relative bg-slate-50 py-20 lg:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* Decorative Background Blurs */}
      <div className="absolute size-[520px] right-[10%] bottom-[10%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none -z-0" />
      <div className="absolute size-96 left-[-5%] top-[-5%] bg-teal-400/10 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[48px]">
            Source-backed access governance and application security
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
            Enforce robust authentication boundaries and stream-level application safety rules across every transmission.
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="flex flex-col md:flex-row justify-start items-start gap-8">
          
          {/* Identity & Access */}
          <div className="flex-1 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col overflow-hidden">
            <div className="self-stretch h-48 relative overflow-hidden">
              <Image
                src="/images/security/Access.png"
                alt="Identity & Access"
                fill
                className="object-cover"
              />
            </div>
            <div className="self-stretch p-8 flex flex-col justify-start items-start gap-4">
              <div className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
                Identity &amp; Access
              </div>
              <div className="self-stretch text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-5">
                ZoikoStream integrates seamlessly with enterprise SAML SSO whitelists. Set least-privilege admin roles, enforce hardware-backed MFA security limits, and mandate temporary credential delegation rules.
              </div>
              <div className="text-teal-500 text-sm font-bold font-['Space_Grotesk']">
                Review access credentials documentation &rarr;
              </div>
            </div>
          </div>

          {/* Application, API & Media Delivery */}
          <div className="flex-1 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col overflow-hidden">
            <div className="self-stretch h-48 relative overflow-hidden">
              <Image
                src="/images/security/Api.png"
                alt="Application, API & Media Delivery"
                fill
                className="object-cover"
              />
            </div>
            <div className="self-stretch p-8 flex flex-col justify-start items-start gap-4">
              <div className="text-slate-100 text-xl font-bold font-['Space_Grotesk']">
                Application, API &amp; Media Delivery
              </div>
              <div className="self-stretch text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-5">
                Secure your real-time video stream handshakes using encrypted RTMPS, SRT with pre-shared keys, or low-latency WHIP. Ensure client SDK code sandboxing protects playback and blocks token spoofing.
              </div>
              <div className="text-blue-500 text-sm font-bold font-['Space_Grotesk']">
                Explore API security profiles &rarr;
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
