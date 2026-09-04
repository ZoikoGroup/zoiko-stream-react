'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SCOPES = [
  'All Updates',
  'Live Streaming',
  'VOD',
  'Analytics',
  'Webhooks',
  'Player SDK',
  'Infrastructure',
];

export default function NotificationSubscriptionSection() {
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['All Updates']);
  const [email, setEmail] = useState('');
  const [authorized, setAuthorized] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const toggleScope = (scope: string) => {
    if (scope === 'All Updates') {
      setSelectedScopes(['All Updates']);
      return;
    }
    const filtered = selectedScopes.filter((s) => s !== 'All Updates');
    if (filtered.includes(scope)) {
      const updated = filtered.filter((s) => s !== scope);
      setSelectedScopes(updated.length === 0 ? ['All Updates'] : updated);
    } else {
      setSelectedScopes([...filtered, scope]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Get notified about planned service changes
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Subscribe for real-time operational notifications. Your consent is explicitly managed and completely separate from our marketing mailing systems.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-5">
              Configure Notification Policy
            </h3>

            {subscribed ? (
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 text-center">
                <span className="font-bold text-teal-900 text-base block mb-1">
                  Subscription Active!
                </span>
                <p className="text-xs text-teal-700">
                  We sent a confirmation link to <span className="font-mono font-bold">{email || 'your email'}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Email Address */}
                <div className="mb-5">
                  <label className="text-xs font-bold text-slate-700 mb-1.5 block">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineering@yourcompany.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                {/* Scope Pills */}
                <div className="mb-5">
                  <label className="text-xs font-bold text-slate-700 mb-2 block">
                    Operational Scope
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SCOPES.map((scope) => {
                      const isSelected = selectedScopes.includes(scope);
                      return (
                        <button
                          key={scope}
                          type="button"
                          onClick={() => toggleScope(scope)}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                            isSelected
                              ? 'bg-[#27c3a7] text-[#06181f] font-semibold shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                          }`}
                        >
                          {scope}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Authorization Checkbox */}
                <div className="mb-6 flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="auth-check"
                    checked={authorized}
                    onChange={(e) => setAuthorized(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 accent-teal-600"
                  />
                  <label htmlFor="auth-check" className="text-xs text-slate-600 cursor-pointer">
                    I authorize ZoikoStream to send automated infrastructure alerts regarding this scope.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!authorized}
                  className="w-full bg-gradient-to-r from-[#27c3a7] to-[#3b82f6] hover:opacity-95 text-white font-bold text-sm py-3 rounded-lg shadow-md transition-all text-center disabled:opacity-50"
                >
                  Subscribe to Service Updates
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Subscription Services Card */}
          <div className="lg:col-span-5 bg-slate-100/90 rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg border-b border-slate-200/80 pb-4">
              Subscription Services
            </h3>

            {/* Block 1 */}
            <div>
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">
                CALENDAR EXPORT
              </span>
              <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                You can import our structural operational windows directly into your internal monitoring tooling via our synced calendar feed.
              </p>
              <Link
                href="/zoikostream-status"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
              >
                <span>Download iCal Feed (v1.0)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Block 2 */}
            <div className="pt-2 border-t border-slate-200/80">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">
                SELF-MANAGEMENT
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need to change your notification preferences? Use the unique link included at the footer of every system email to securely unsubscribe or re-route messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
