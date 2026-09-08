'use client';

import React, { useState } from 'react';

export default function ManagePrivacyChoicesSection() {
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleRejectAll = () => {
    setFunctional(false);
    setAnalytics(false);
    setAdvertising(false);
  };

  const handleAcceptAll = () => {
    setFunctional(true);
    setAnalytics(true);
    setAdvertising(true);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section id="manage-preferences" className="relative w-full bg-[#f0f4f8] py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            YOUR CHOICE, SAVED EXPLICITLY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Manage privacy choices.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Nothing here is preselected by design — toggle only what you want, then save. You can return and change this anytime.
        </p>

        {/* Form Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 max-w-5xl shadow-sm">
          <div className="space-y-6">
            {/* 1. Strictly necessary */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="pr-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Strictly necessary
                </h3>
                <p className="text-xs text-slate-500 mb-1 leading-relaxed">
                  Required for sign-in, security, and core site functionality.
                </p>
                <span className="text-[11px] font-mono text-slate-400">
                  Always active — cannot be turned off
                </span>
              </div>

              {/* Locked Active Toggle */}
              <div className="w-12 h-6 bg-[#2dd4bf] rounded-full p-0.5 flex items-center justify-end cursor-not-allowed shrink-0 shadow-inner">
                <div className="w-5 h-5 bg-white rounded-full shadow-md" />
              </div>
            </div>

            {/* 2. Functional */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="pr-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Functional
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Remembers language, theme, and playback preferences.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setFunctional(!functional)}
                className={`w-12 h-6 rounded-full p-0.5 flex items-center transition-colors shrink-0 cursor-pointer shadow-inner ${
                  functional ? 'bg-[#2dd4bf] justify-end' : 'bg-slate-300 justify-start'
                }`}
                aria-pressed={functional}
              >
                <div className="w-5 h-5 bg-white rounded-full shadow-md" />
              </button>
            </div>

            {/* 3. Analytics */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="pr-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Analytics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Helps us understand aggregate usage patterns to improve the product.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAnalytics(!analytics)}
                className={`w-12 h-6 rounded-full p-0.5 flex items-center transition-colors shrink-0 cursor-pointer shadow-inner ${
                  analytics ? 'bg-[#2dd4bf] justify-end' : 'bg-slate-300 justify-start'
                }`}
                aria-pressed={analytics}
              >
                <div className="w-5 h-5 bg-white rounded-full shadow-md" />
              </button>
            </div>

            {/* 4. Advertising */}
            <div className="flex items-center justify-between gap-4 pb-6">
              <div className="pr-4">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Advertising
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Used to measure and improve marketing campaign effectiveness.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAdvertising(!advertising)}
                className={`w-12 h-6 rounded-full p-0.5 flex items-center transition-colors shrink-0 cursor-pointer shadow-inner ${
                  advertising ? 'bg-[#2dd4bf] justify-end' : 'bg-slate-300 justify-start'
                }`}
                aria-pressed={advertising}
              >
                <div className="w-5 h-5 bg-white rounded-full shadow-md" />
              </button>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="border-t border-slate-200/90 pt-6 mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:opacity-95 text-[#06181f] text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
              >
                Save preferences
              </button>
            </div>

            {saved && (
              <span className="text-xs font-semibold text-emerald-600 animate-fade-in">
                ✓ Preferences updated successfully
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
