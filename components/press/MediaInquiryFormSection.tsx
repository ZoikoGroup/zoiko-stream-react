'use client';

import React from 'react';

export function MediaInquiryFormSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-gray-200 flex justify-center items-center">
      <div className="w-full max-w-[760px] p-8 lg:p-12 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-start items-center gap-8 shadow-sm">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold  ">
            Working on a story?
          </h2>
          <p className="max-w-[500px] text-gray-500 text-sm font-normal   leading-6">
            Send a media inquiry with your topic, outlet and deadline. For non-media requests, use the appropriate ZoikoStream contact or support route.
          </p>
        </div>

        <form className="w-full flex flex-col gap-6 text-sm  " onSubmit={(e) => e.preventDefault()}>
          {/* Request Type */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-800 font-semibold">Request type *</label>
            <select className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 text-gray-800 outline-none">
              <option>Select a request type</option>
              <option>Interview request</option>
              <option>Statement request</option>
              <option>Asset access request</option>
              <option>General media inquiry</option>
            </select>
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">First name *</label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Last name *</label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none"
              />
            </div>
          </div>

          {/* Email & Outlet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Work / media email *</label>
              <input
                type="email"
                placeholder="name@outlet.com"
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Outlet / publication *</label>
              <input
                type="text"
                placeholder="Freelance or outlet name"
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Role & Topic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Role (optional)</label>
              <input
                type="text"
                placeholder="Reporter, producer, host..."
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Topic *</label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none"
              />
            </div>
          </div>

          {/* Deadline Date, Time & Timezone */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-4 flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Deadline date</label>
              <input
                type="text"
                placeholder="mm / dd / yyyy"
                className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 outline-none text-xs"
              />
            </div>
            <div className="sm:col-span-4 flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Deadline time</label>
              <input
                type="text"
                placeholder="-- : -- --"
                className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 outline-none text-xs"
              />
            </div>
            <div className="sm:col-span-4 flex flex-col gap-2">
              <label className="text-gray-800 font-semibold">Timezone</label>
              <input
                type="text"
                placeholder="e.g. America/New_York"
                className="w-full h-10 px-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-400 text-xs"
              />
            </div>
          </div>

          {/* Person requested */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-800 font-semibold">Person requested (optional)</label>
            <select className="w-full h-11 px-4 bg-white rounded-lg border border-zinc-200 text-gray-800 outline-none">
              <option>No preference</option>
              <option>Lennox McLeod (Founder & Exec Chairman)</option>
              <option>Marcus Ade (CTO)</option>
              <option>Sofia Bergström (VP Live Events)</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-800 font-semibold">Message *</label>
            <textarea
              rows={4}
              placeholder="Tell us about your story and what you need"
              className="w-full p-4 bg-white rounded-lg border border-zinc-200 outline-none placeholder:text-neutral-400 resize-none"
            />
          </div>

          {/* Privacy Box */}
          <div className="p-4 bg-white rounded-lg border border-zinc-200 text-xs text-gray-400 leading-5">
            By submitting this form, you acknowledge the Privacy Notice, which explains how we process your information to respond to your inquiry. Do not submit passwords, API keys, stream keys, access tokens, vulnerability details or confidential files through this form.
          </div>

          {/* Submit Button */}
          <div className="w-full h-11 bg-gradient-to-r from-teal-300 to-blue-400 rounded-lg flex justify-center items-center cursor-pointer shadow-xs">
            <span className="text-gray-800 text-base font-bold font-['Arial']">
              Send media inquiry
            </span>
          </div>
        </form>

        <div className="flex items-center gap-1 text-sm   pt-2">
          <span className="text-gray-400">Not a media request?</span>
          <span className="text-blue-400 font-semibold cursor-pointer">Use Contact →</span>
        </div>
      </div>
    </section>
  );
}
