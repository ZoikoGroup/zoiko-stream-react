import React from 'react';
import Image from 'next/image';
import {  Key, Copy, EyeOff, CheckCircle2, TriangleAlert } from 'lucide-react';

export function StoreCredentialsSafelySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (19).png"
          alt="Store Credentials Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Store Credentials Safely — Never Expose Secrets
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Secure authorization requires server-to-server operations. Local variables should never be committed into client-side code repositories.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: Environment Configuration */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-bold tracking-wide uppercase">
                ENVIRONMENT CONFIGURATION
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-normal">ZOIKO_API_SECRET_KEY</span>
              <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center">
                <span className="text-slate-400 text-base font-normal tracking-widest">
                  ••••••••••••••••••••••••••••••••••••••••
                </span>
                <div className="flex items-center gap-3">
                  <EyeOff className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                  <Copy className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-normal">Usage in local config (.env)</span>
              <div className="p-4 bg-gray-950 rounded-lg font-mono text-xs text-teal-400 leading-relaxed border border-gray-800/80">
                # Load safe credential token<br />
                ZOIKO_API_KEY=&quot;zk_live_...&quot;<br />
                ZOIKO_SECRET_TOKEN=&quot;{"{{SECRET_ENV_VAR}}"}&quot;
              </div>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-gray-950 text-base font-bold">Open Authentication</span>
            </div>
          </div>

          {/* Right Side: Security Warning & Best Practices */}
          <div className="flex flex-col gap-8">
            {/* Warning Box */}
            <div className="p-6 bg-red-900/20 rounded-xl border border-red-900/50 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <TriangleAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
                <h3 className="text-red-300 text-base font-bold">CRITICAL SECURITY WARNING</h3>
              </div>
              <p className="text-red-300 text-sm font-normal leading-5">
                Never expose ZOIKO_SECRET_TOKEN in client-side codebases, local storage, analytics platforms, or public URLs. If compromised, unauthorized clients can hijack your live billing limits and stream endpoints.
              </p>
            </div>

            {/* Best Practice Guidance */}
            <div className="flex flex-col gap-4">
              <span className="text-slate-400 text-sm font-bold tracking-wide uppercase">BEST PRACTICE GUIDANCE</span>
              <div className="text-slate-400 text-base font-normal leading-6 space-y-3">
                <div className="flex items-start gap-2">
                  <p>
                    1. **Environment Variables: Always store token parameters in the host operating environment variables.2. **Backend Delegation:Initiate the Create Stream call from your secure application server, not directly from web applications.
                    3. **Token Rotation:Rotate keys regularly inside the ZoikoStream trust center.
                  </p>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
