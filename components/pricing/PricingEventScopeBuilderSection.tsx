'use client';

import React, { useState } from 'react';

export default function PricingEventScopeBuilderSection() {
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [audienceModel, setAudienceModel] = useState<string>('Public');
  const [recordingIntent, setRecordingIntent] = useState<string>('Yes');
  const [contributions, setContributions] = useState<string[]>([]);
  const [accessibility, setAccessibility] = useState<string[]>([]);
  const [supportNeed, setSupportNeed] = useState<string>('');

  const toggleContribution = (value: string) => {
    setContributions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleAccessibility = (value: string) => {
    setAccessibility((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const isFormFilled = eventType || audienceModel || recordingIntent;

  return (
    <section id="scope-builder" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-slate-50 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Event scope builder
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Sora'] leading-tight">
          Tell us about your event.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          These inputs shape the context sent with a quote request — they never infer urgency pricing, capacity guarantees, or entitlements.
        </p>
      </div>

      {/* Main Scope Builder Box */}
      <div className="w-full bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 p-6 sm:p-10 flex flex-col gap-8 shadow-xs">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column Controls */}
          <div className="flex flex-col gap-6">
            {/* Event Type */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Event type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full h-11 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 text-slate-800 text-sm font-normal font-['Inter'] focus:outline-none focus:border-blue-400"
              >
                <option value="">Select an event type</option>
                <option value="Concert / Festival">Concert / Festival</option>
                <option value="Conference / Multitrack">Conference / Multitrack</option>
                <option value="Corporate Broadcast">Corporate Broadcast</option>
                <option value="Worship / Ceremony">Worship / Ceremony</option>
                <option value="Sports Broadcast">Sports Broadcast</option>
              </select>
            </div>

            {/* Event Date */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Approximate event date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full h-11 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 text-slate-800 text-sm font-normal font-['Inter'] focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Audience Model */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Audience model
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {['Public', 'Private', 'Controlled access'].map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => setAudienceModel(model)}
                    className={`px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] text-xs font-semibold font-['Inter'] transition-colors flex items-center gap-2 ${
                      audienceModel === model
                        ? 'bg-blue-500 text-white outline-blue-500'
                        : 'bg-white text-gray-800 outline-zinc-200 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`size-3 rounded-full border ${
                        audienceModel === model
                          ? 'border-white bg-white'
                          : 'border-neutral-500 bg-white'
                      }`}
                    />
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Recording Intent */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Recording intent
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {['Yes', 'No', 'Unsure'].map((intent) => (
                  <button
                    key={intent}
                    type="button"
                    onClick={() => setRecordingIntent(intent)}
                    className={`px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] text-xs font-semibold font-['Inter'] transition-colors flex items-center gap-2 ${
                      recordingIntent === intent
                        ? 'bg-blue-500 text-white outline-blue-500'
                        : 'bg-white text-gray-800 outline-zinc-200 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`size-3 rounded-full border ${
                        recordingIntent === intent
                          ? 'border-white bg-white'
                          : 'border-neutral-500 bg-white'
                      }`}
                    />
                    {intent}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Controls */}
          <div className="flex flex-col gap-6">
            {/* Contribution Needs */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Contribution needs (select any)
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {['Remote contribution', 'Multi-camera', 'On-site production'].map((item) => {
                  const isChecked = contributions.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleContribution(item)}
                      className={`px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] text-xs font-semibold font-['Inter'] transition-colors flex items-center gap-2 ${
                        isChecked
                          ? 'bg-blue-500 text-white outline-blue-500'
                          : 'bg-white text-gray-800 outline-zinc-200 hover:bg-slate-100'
                      }`}
                    >
                      <div
                        className={`size-3 rounded-xs border ${
                          isChecked
                            ? 'border-white bg-white'
                            : 'border-neutral-500 bg-white'
                        }`}
                      />
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accessibility Needs */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Accessibility needs (select any)
              </label>
              <div className="flex flex-wrap items-center gap-3">
                {['Captions', 'Multi-language', 'Interpretation'].map((item) => {
                  const isChecked = accessibility.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAccessibility(item)}
                      className={`px-5 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] text-xs font-semibold font-['Inter'] transition-colors flex items-center gap-2 ${
                        isChecked
                          ? 'bg-blue-500 text-white outline-blue-500'
                          : 'bg-white text-gray-800 outline-zinc-200 hover:bg-slate-100'
                      }`}
                    >
                      <div
                        className={`size-3 rounded-xs border ${
                          isChecked
                            ? 'border-white bg-white'
                            : 'border-neutral-500 bg-white'
                        }`}
                      />
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Support Need */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-semibold font-['Inter']">
                Planning / support need
              </label>
              <select
                value={supportNeed}
                onChange={(e) => setSupportNeed(e.target.value)}
                className="w-full h-11 px-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 text-slate-800 text-sm font-normal font-['Inter'] focus:outline-none focus:border-blue-400"
              >
                <option value="">Select an option</option>
                <option value="Self-service with docs">Self-service with docs</option>
                <option value="Dedicated engineer support">Dedicated engineer support</option>
                <option value="Full managed production">Full managed production</option>
              </select>
            </div>

            {/* Scope Summary Box */}
            <div className="w-full p-6 bg-violet-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 flex flex-col gap-2">
              <h3 className="text-gray-800 text-base font-bold font-['Sora']">
                Your event scope summary
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {isFormFilled
                  ? `[${eventType || 'Event'}] · Audience: ${audienceModel} · Recording: ${recordingIntent}${
                      contributions.length ? ` · ${contributions.join(', ')}` : ''
                    }${accessibility.length ? ` · ${accessibility.join(', ')}` : ''}`
                  : 'Fill in the fields to build your scope summary.'}
              </p>
            </div>
          </div>
        </div>

        {/* Submit CTA & Subtext */}
        <div className="flex flex-col gap-3 pt-4 border-t border-zinc-200">
          <button className="w-full sm:w-80 px-5 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-[10px] text-gray-800 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity text-center">
            Request event quote with this scope
          </button>
          <span className="text-gray-400 text-xs font-normal font-['Inter']">
            This scope summary is planning context only — it is not an estimate, quote, or contract.
          </span>
        </div>
      </div>
    </section>
  );
}
