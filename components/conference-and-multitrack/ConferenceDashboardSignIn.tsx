'use client';

import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ConferenceDashboardSignIn() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-14  text-zinc-900  transition-colors duration-250"
                  style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (23).png')" }}
>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-center items-center"
>
        
        {/* Title block */}
        <div className="flex flex-col gap-4 max-w-3xl items-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Access your conference dashboard
          </h2>
          <p className="text-[#AAB3C4] text-base sm:text-lg font-normal font-spaceGrotesk max-w-2xl">
            Sign in with your corporate credentials to manage sessions, monitor tracks, and review replay states.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-xl p-8 sm:p-10 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col justify-start items-start gap-6 text-left transition-all">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-slate-900 text-2xl sm:text-3xl font-bold font-spaceGrotesk leading-tight">
              Sign in to ZoikoStream Conferences
            </h3>
            <p className="text-slate-650 text-sm sm:text-base font-normal font-spaceGrotesk leading-relaxed">
              Enter your corporate credentials to manage your multi-track event dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            {/* Input field */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="noc-work-email" className="text-slate-900 text-sm font-bold font-spaceGrotesk">
                Work email
              </label>
              <input
                id="noc-work-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full h-12 px-4 bg-white text-slate-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm font-spaceGrotesk leading-6"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-white text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none flex justify-center items-center"
            >
              {submitted ? 'Accessing Dashboard...' : 'Access Conference Dashboard'}
            </button>
          </form>

          {/* Footer note */}
          <div className="flex items-start gap-2 text-left w-full border-t border-gray-100 pt-4">
            <ShieldCheck className="size-4 text-teal-500 shrink-0 mt-0.5" />
            <span className="text-slate-600 text-xs font-normal font-spaceGrotesk leading-relaxed">
              Use the account your organization approved. Authorization is log-audited.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
