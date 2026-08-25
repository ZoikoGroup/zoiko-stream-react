'use client';

import React from 'react';
import Image from 'next/image';

export function AccessibilityFormSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/accessibility/bg.jpg"
          alt="Form Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-10 text-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
          <span className="text-teal-300 text-xs font-bold uppercase tracking-wider">
            ACCESSIBILITY FORM
          </span>
        </div>

        <h2 className="text-white text-3xl lg:text-4xl font-bold">
          Report a barrier or request accessibility help.
        </h2>

        <p className="max-w-[640px] text-neutral-300 text-base font-normal leading-6">
          Describe what happened, where it happened, or what you need to access ZoikoStream. Information about assistive technology is optional.
        </p>

        {/* Form Container Card */}
        <div className="w-full max-w-[720px] p-8 lg:p-10 bg-white rounded-2xl text-left flex flex-col gap-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-blue-400 text-xs font-bold tracking-wide">Step 1 of 3</span>
            <h3 className="text-neutral-700 text-xl font-bold">What do you need?</h3>
            <p className="text-gray-500 text-sm font-normal">
              Choose the option that best matches what you need. You can change it later.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-teal-400 rounded-xs flex-shrink-0" />
            <span className="text-neutral-700 text-sm font-normal">
              You do not need to tell us about a disability, diagnosis or medical condition.
            </span>
          </div>

          <form className="flex flex-col gap-6 text-sm" onSubmit={(e) => e.preventDefault()}>
            {/* Request Type */}
            <div className="flex flex-col gap-2">
              <label className="text-neutral-700 font-semibold">Request type *</label>
              <select className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 text-neutral-700 outline-none">
                <option>Report an accessibility barrier</option>
                <option>Request accessibility help</option>
                <option>Accessible format request</option>
                <option>Live Event accessibility</option>
                <option>Something else</option>
              </select>
              <span className="text-gray-400 text-xs font-normal">
                Choose the option that best matches what you need. You can change it later.
              </span>
            </div>

            {/* What happened */}
            <div className="flex flex-col gap-2">
              <label className="text-neutral-700 font-semibold">What happened or what do you need? *</label>
              <textarea
                rows={4}
                placeholder="Tell us what you were trying to do and what made it difficult or impossible."
                className="w-full p-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-500 resize-none"
              />
              <span className="text-gray-400 text-xs font-normal">
                Tell us what you were trying to do and what made it difficult or impossible. You do not need to describe a disability.
              </span>
            </div>

            {/* Assistive technology */}
            <div className="flex flex-col gap-2">
              <label className="text-neutral-700 font-semibold">
                Assistive technology or access method <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. screen reader, keyboard-only, voice input, magnification, captions, reduced motion"
                className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-500 text-xs"
              />
              <span className="text-gray-400 text-xs font-normal">
                If useful, tell us about a screen reader, keyboard-only use, voice input, magnification, captions, reduced motion or another access method. This is optional.
              </span>
            </div>

            {/* No response checkbox */}
            <div className="p-3.5 bg-slate-50 rounded-lg flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-neutral-500" />
              <span className="text-neutral-700 text-sm font-medium">I do not need a response.</span>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-neutral-700 font-semibold">
                Email <span className="text-gray-400 font-normal">(optional if no response needed)</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-500"
              />
            </div>

            {/* Warning Box */}
            <div className="p-4 bg-orange-50 rounded-lg border border-red-200 text-xs text-stone-600 leading-5">
              Do not include medical records, diagnoses, passwords, payment information, stream keys, access tokens, private event links or security vulnerability details.
            </div>

            <p className="text-gray-400 text-xs font-normal leading-5">
              We use the information you provide to review, route and respond to your accessibility request. See Privacy Notice.
            </p>

            <div className="w-full h-12 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex justify-center items-center cursor-pointer shadow-xs">
              <span className="text-white text-base font-semibold">Continue</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
