'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function DescribeImpactOccurrenceSection() {
  const [whatHappened, setWhatHappened] = useState(
    'Live stream freezes intermittently while audio continues'
  );
  const [whenStarted, setWhenStarted] = useState('Today, during active testing');
  const [happensEveryTime, setHappensEveryTime] = useState(
    'Often (At least 3 times during session)'
  );
  const [whoAffected, setWhoAffected] = useState(
    'Some users (reported by external QA observers)'
  );
  const [canContinue, setCanContinue] = useState(
    'Partly (with audio fallback)'
  );
  const [hasStopped, setHasStopped] = useState(
    'Still happening (during live encoder spikes)'
  );
  const [frequency, setFrequency] = useState(
    'Intermittent spikes (every 5-10 minutes)'
  );

  return (
    <section className="relative w-full bg-[#040813] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Server Telemetry Room Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#040813]/85 via-[#040813]/40 to-[#040813]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight mb-2.5">
            Describe the impact and occurrence.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-inter">
            Impact selections are operational context only. They are not contractual severity, SLA level, or guaranteed queue position.
          </p>
        </div>

        {/* Stacked Form Fields */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Field 1: What happened? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              What happened?
            </label>
            <div className="relative">
              <select
                aria-label="What happened?"
                value={whatHappened}
                onChange={(e) => setWhatHappened(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Live stream freezes intermittently while audio continues" className="bg-[#050b14] text-slate-200">
                  Live stream freezes intermittently while audio continues
                </option>
                <option value="Complete audio and video blackout" className="bg-[#050b14] text-slate-200">
                  Complete audio and video blackout
                </option>
                <option value="Player controls unresponsive to click" className="bg-[#050b14] text-slate-200">
                  Player controls unresponsive to click
                </option>
                <option value="Encoder handshake rejection (SRT/RTMP)" className="bg-[#050b14] text-slate-200">
                  Encoder handshake rejection (SRT/RTMP)
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 2: When did it start? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              When did it start?
            </label>
            <div className="relative">
              <select
                aria-label="When did it start?"
                value={whenStarted}
                onChange={(e) => setWhenStarted(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Today, during active testing" className="bg-[#050b14] text-slate-200">
                  Today, during active testing
                </option>
                <option value="Within the last hour" className="bg-[#050b14] text-slate-200">
                  Within the last hour
                </option>
                <option value="Over 24 hours ago" className="bg-[#050b14] text-slate-200">
                  Over 24 hours ago
                </option>
                <option value="Since latest SDK version release" className="bg-[#050b14] text-slate-200">
                  Since latest SDK version release
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 3: Does it happen every time? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Does it happen every time?
            </label>
            <div className="relative">
              <select
                aria-label="Does it happen every time?"
                value={happensEveryTime}
                onChange={(e) => setHappensEveryTime(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Often (At least 3 times during session)" className="bg-[#050b14] text-slate-200">
                  Often (At least 3 times during session)
                </option>
                <option value="Always (100% reproducible)" className="bg-[#050b14] text-slate-200">
                  Always (100% reproducible)
                </option>
                <option value="Rarely / Intermittent" className="bg-[#050b14] text-slate-200">
                  Rarely / Intermittent
                </option>
                <option value="Once Only" className="bg-[#050b14] text-slate-200">
                  Once Only
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 4: Who is affected? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Who is affected?
            </label>
            <div className="relative">
              <select
                aria-label="Who is affected?"
                value={whoAffected}
                onChange={(e) => setWhoAffected(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Some users (reported by external QA observers)" className="bg-[#050b14] text-slate-200">
                  Some users (reported by external QA observers)
                </option>
                <option value="All viewers across regions" className="bg-[#050b14] text-slate-200">
                  All viewers across regions
                </option>
                <option value="Single administrative operator" className="bg-[#050b14] text-slate-200">
                  Single administrative operator
                </option>
                <option value="Specific ISP / Regional cluster" className="bg-[#050b14] text-slate-200">
                  Specific ISP / Regional cluster
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 5: Can you continue working? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Can you continue working?
            </label>
            <div className="relative">
              <select
                aria-label="Can you continue working?"
                value={canContinue}
                onChange={(e) => setCanContinue(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Partly (with audio fallback)" className="bg-[#050b14] text-slate-200">
                  Partly (with audio fallback)
                </option>
                <option value="Yes (minor cosmetic issue)" className="bg-[#050b14] text-slate-200">
                  Yes (minor cosmetic issue)
                </option>
                <option value="No (completely blocked)" className="bg-[#050b14] text-slate-200">
                  No (completely blocked)
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 6: Has it stopped? */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Has it stopped?
            </label>
            <div className="relative">
              <select
                aria-label="Has it stopped?"
                value={hasStopped}
                onChange={(e) => setHasStopped(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Still happening (during live encoder spikes)" className="bg-[#050b14] text-slate-200">
                  Still happening (during live encoder spikes)
                </option>
                <option value="Stopped, but root cause unknown" className="bg-[#050b14] text-slate-200">
                  Stopped, but root cause unknown
                </option>
                <option value="Only happens during high-bitrate scenes" className="bg-[#050b14] text-slate-200">
                  Only happens during high-bitrate scenes
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Field 7: Error message or code (if any) */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Error message or code (if any)
            </label>
            <input
              type="text"
              placeholder="e.g., Error code: ERR_SRG_DECODE"
              className="w-full bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Field 8: Frequency */}
          <div>
            <label className="block text-slate-300 text-xs sm:text-[13px] font-medium mb-1.5 font-inter">
              Frequency
            </label>
            <div className="relative">
              <select
                aria-label="Frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full appearance-none bg-[#050b14]/90 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors pr-10 cursor-pointer shadow-lg"
              >
                <option value="Intermittent spikes (every 5-10 minutes)" className="bg-[#050b14] text-slate-200">
                  Intermittent spikes (every 5-10 minutes)
                </option>
                <option value="Continuous throughout entire session" className="bg-[#050b14] text-slate-200">
                  Continuous throughout entire session
                </option>
                <option value="Periodic (every hour)" className="bg-[#050b14] text-slate-200">
                  Periodic (every hour)
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
