import React from 'react';

export default function PlanningPathSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-950 text-white transition-colors duration-200 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            From preparation to replay — a clear planning path
          </h2>
          <p className="text-gray-350 text-base sm:text-lg">
            Each stage has a defined outcome so nothing is left to assumption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Step 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                1
              </div>
              <div className="hidden lg:block flex-1 h-0.5 bg-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Prepare</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Event basics, audience, accessibility, recording, and support needs are captured.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                2
              </div>
              <div className="hidden lg:block flex-1 h-0.5 bg-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Confirm</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Published capability and setup requirements are matched to the brief.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                3
              </div>
              <div className="hidden lg:block flex-1 h-0.5 bg-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Test</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The approved source/access flow can be checked before the event.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                4
              </div>
              <div className="hidden lg:block flex-1 h-0.5 bg-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Go live</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The event begins through the approved operating path.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                5
              </div>
              <div className="hidden lg:block flex-1 h-0.5 bg-gray-800" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Support</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Issues route to the active-event support path.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                6
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-base font-bold">Replay or close</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Recording/replay/retention follows the organizer's approved configuration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
