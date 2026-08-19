'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ManagedLifecycleSection() {
  const [activeStep, setActiveStep] = useState(4); // Default to Step 5 (Verify), which is index 4

  const steps = [
    {
      num: 1,
      title: 'Brief',
      owner: 'Shared',
      desc: 'Initial requirement collection'
    },
    {
      num: 2,
      title: 'Scope',
      owner: 'Shared',
      desc: 'Boundary & ownership signoff'
    },
    {
      num: 3,
      title: 'Plan',
      owner: 'Shared',
      desc: 'AV and network path map'
    },
    {
      num: 4,
      title: 'Prepare',
      owner: 'Customer',
      desc: 'Encoder prep & test targets'
    },
    {
      num: 5,
      title: 'Verify',
      owner: 'ZoikoStream',
      desc: 'SLA preflight signoff'
    },
    {
      num: 6,
      title: 'Go-live',
      owner: 'Shared',
      desc: 'Broadcast auto-arm state'
    },
    {
      num: 7,
      title: 'Operate',
      owner: 'ZoikoStream',
      desc: 'Sub-second active matrixing'
    },
    {
      num: 8,
      title: 'Handoff',
      owner: 'ZoikoStream',
      desc: 'Archive migration start'
    },
    {
      num: 9,
      title: 'Close',
      owner: 'Shared',
      desc: 'Access pruning and safety lock'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-250 border-t border-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image 
          src="/images/recording-replay-archive/viewer-states-bg.png" 
          alt="Topographic Background" 
          fill 
          className="object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight sm:leading-[60.80px]">
            Managed Event Lifecycle
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-normal font-spaceGrotesk leading-7">
            From initial operator brief to final archive closure, every live stream stage is verified.
          </p>
        </div>

        {/* Stepper and Cards Container */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Stepper Timeline Row - Desktop view (horizontal scroll or grid) */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[1000px] lg:min-w-0 w-full h-10 flex justify-start items-center relative">
              {steps.map((step, idx) => {
                const isPassedOrActive = idx <= activeStep;
                
                // Segment container bg determines gray background band for steps starting from dot 6 to 9 (idx 5 to 8)
                const isGrayBackground = idx >= 5;

                return (
                  <div 
                    key={step.num}
                    className={`flex-1 self-stretch flex justify-start items-center ${
                      isGrayBackground ? 'bg-gray-50' : ''
                    }`}
                  >
                    {/* Circle Dot Button */}
                    <button
                      onClick={() => setActiveStep(idx)}
                      className="flex justify-start items-center cursor-pointer bg-transparent border-none focus:outline-none z-10 select-none group"
                      title={`Go to step ${step.num}: ${step.title}`}
                    >
                      <div className="flex justify-start items-center">
                        <div 
                          className={`size-4 rounded-full transition-all duration-300 ${
                            isPassedOrActive 
                              ? 'bg-teal-400 ring-4 ring-teal-400/20 scale-110' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Connecting Line (drawn to the right of the dot, only if not the last step) */}
                    {idx < steps.length - 1 && (
                      <div 
                        className={`flex-1 h-0 border-2 transition-all duration-300 ${
                          isPassedOrActive
                            ? 'border-teal-400'
                            : 'border-gray-300'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards Row */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[1000px] lg:min-w-0 w-full grid grid-cols-9 gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full p-3 rounded-lg flex flex-col justify-start items-start gap-2 text-left cursor-pointer transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'bg-slate-800 text-white shadow-md transform -translate-y-0.5 border border-transparent'
                        : isCompleted
                        ? 'bg-white border border-gray-200 hover:border-teal-400/50'
                        : 'bg-white border border-gray-200 opacity-90 hover:border-gray-300'
                    }`}
                  >
                    {/* Number and Title */}
                    <div 
                      className={`text-xs font-bold font-spaceGrotesk ${
                        isActive
                          ? 'text-teal-400'
                          : isCompleted
                          ? 'text-teal-400'
                          : 'text-gray-900'
                      }`}
                    >
                      {step.num}. {step.title}
                    </div>

                    {/* Owner */}
                    <div 
                      className={`text-[10px] font-normal font-spaceGrotesk ${
                        isActive
                          ? 'text-gray-400'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.owner}
                    </div>

                    {/* Description */}
                    <div 
                      className={`text-[10px] font-normal font-spaceGrotesk leading-4 ${
                        isActive
                          ? 'text-zinc-300'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
