'use client';

import { useState, type FormEvent } from 'react';

// --- DATA DEFINITIONS ---

const EVENT_CATEGORIES = [
  { id: 'memorials', label: 'Memorials' },
  { id: 'worship', label: 'Worship' },
  { id: 'weddings', label: 'Weddings & celebrations' },
  { id: 'graduations', label: 'Graduations' },
  { id: 'civic', label: 'Civic events' },
  { id: 'corporate', label: 'Corporate broadcasts' },
  { id: 'conferences', label: 'Conferences' },
];

const WORKFLOW_PILLS = [
  'Event setup',
  'Contribution',
  'Production',
  'Captions',
  'Translation',
  'Secure delivery',
  'Audience access',
  'Moderation',
  'Recording',
  'Replay',
  'Analytics',
  'Event resilience',
];

// --- COMPONENT ---

export default function ZoikoStreamLiveEvents() {
  const [activeCategory, setActiveCategory] = useState('memorials');
  const [formData, setFormData] = useState({
    eventType: 'Memorial',
    eventDate: '',
    email: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle step 1 submission logic
  };

  return (
    <section className="w-full bg-slate-100 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100 py-16 px-6 sm:px-10 lg:px-20   transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-3.5 max-w-[750px]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-normal   uppercase tracking-wide">
              ZOIKOSTREAM LIVE EVENTS
            </span>
          </div>

          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight">
            Professionally managed live events, from first signal to lasting replay.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed">
            Create, manage, broadcast, secure, record, replay, and preserve important occasions for global audiences through one coordinated live-event workflow.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white border-transparent shadow-sm'
                    : 'bg-white text-slate-600 border-gray-300 hover:border-gray-400 dark:bg-zinc-900 dark:text-slate-400 dark:border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Feature Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <h3 className="text-zinc-900 dark:text-white text-xl sm:text-2xl font-bold  ">
              Bring people together when presence is not possible.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Deliver respectful and secure memorial broadcasts with controlled audience access, remote participation, captions, translation, recording, replay, and professionally managed support.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[592/370] overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-md">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                src="/images/home/div.ar-16-10 (3).png"
                alt="ZoikoStream Live Event Preview"
              />
            </div>
          </div>

        </div>

        {/* Workflow Capabilities Tags */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {WORKFLOW_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 bg-gray-900 text-slate-400 rounded-full border border-gray-800 text-xs font-normal  "
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Assured Event Info Box */}
          <div className="lg:col-span-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 flex flex-col justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-3">
              <h4 className="text-zinc-900 dark:text-white text-lg font-bold  ">
                Assured Event
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Additional resilience for events that cannot be repeated. Assured Event options provide enhanced preparation, contribution redundancy, operational oversight, and event-continuity measures for high-consequence broadcasts.
              </p>
            </div>

            <div>
              <a
                href="#assured-event"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[10px] border border-gray-800 dark:border-gray-700 text-zinc-900 dark:text-white font-semibold text-base hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Discuss an Assured Event →
              </a>
            </div>
          </div>

          {/* Event Request Wizard Form */}
          <div className="lg:col-span-6 bg-zinc-900 rounded-2xl border border-gray-800 p-8 flex flex-col gap-6 text-slate-100 shadow-xl">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-xs font-normal  ">
                Step 1 of 2 — Tell us about the occasion
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Event Type */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-sm font-semibold">
                  Event type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full h-11 px-4 bg-gray-900 border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
                >
                  <option value="Memorial">Memorial</option>
                  <option value="Worship">Worship</option>
                  <option value="Wedding">Weddings & celebrations</option>
                  <option value="Graduation">Graduations</option>
                  <option value="Civic">Civic events</option>
                  <option value="Corporate">Corporate broadcasts</option>
                  <option value="Conference">Conferences</option>
                </select>
              </div>

              {/* Event Date */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-sm font-semibold flex items-center gap-1.5">
                  <span>Event date</span>
                  <span className="text-slate-500 font-normal">(or Date not confirmed)</span>
                </label>
                <input
                  type="text"
                  placeholder="Date not confirmed"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full h-11 px-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-sm font-semibold">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 mt-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 text-slate-950 text-base font-semibold rounded-[10px] transition-opacity cursor-pointer"
              >
                Continue
              </button>

            </form>

            <p className="text-gray-500 text-xs font-normal leading-relaxed">
              Information submitted is used to route and respond to your request under ZoikoStream&apos;s privacy practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
