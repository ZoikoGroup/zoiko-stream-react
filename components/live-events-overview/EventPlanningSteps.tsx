'use client';

import React from 'react';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

export default function EventPlanningSteps() {
  const steps: Step[] = [
    {
      stepNumber: 1,
      title: 'Brief',
      description: 'What is happening, when, and who watches?',
    },
    {
      stepNumber: 2,
      title: 'Operating scope',
      description: 'Self-managed, managed, or mixed path',
    },
    {
      stepNumber: 3,
      title: 'Contribution & production',
      description: 'How sources arrive and production type',
    },
    {
      stepNumber: 4,
      title: 'Audience',
      description: 'Who may watch and access bounds',
    },
    {
      stepNumber: 5,
      title: 'Accessibility & language',
      description: 'Captions and inclusive viewing',
    },
    {
      stepNumber: 6,
      title: 'Resilience & support',
      description: 'Contingency and escalation paths',
    },
    {
      stepNumber: 7,
      title: 'Replay / archive',
      description: 'What remains after event',
    },
  ];

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 text-zinc-900 dark:text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-start items-start gap-10 lg:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold   leading-tight">
            Know what needs to be decided before the event goes live
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg font-normal   leading-relaxed">
            A structured planning sequence keeps decisions visible — from brief to replay.
          </p>
        </div>

        {/* Steps Sequence Grid/Flex Container */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.stepNumber} className="flex flex-col justify-start items-start gap-4">
                {/* Step Indicator Header with Connecting Line */}
                <div className="w-full flex items-center gap-2">
                  <div className="w-7 h-7 bg-gray-950 dark:bg-slate-800 rounded-2xl flex justify-center items-center shrink-0">
                    <span className="text-cyan-400 text-xs font-bold  ">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Connecting Line (hidden on the last item for desktop) */}
                  <div
                    className={`flex-1 h-0.5 bg-gray-200 dark:bg-slate-700 ${
                      isLast ? 'hidden lg:hidden' : 'block lg:block'
                    }`}
                  />
                </div>

                {/* Step Text Content */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h3 className="text-zinc-900 dark:text-white text-base font-bold   leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm font-normal   leading-6">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}