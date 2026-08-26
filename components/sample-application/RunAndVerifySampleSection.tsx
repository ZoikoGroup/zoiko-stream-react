import React from 'react';
import Image from 'next/image';

const runSteps = [
  {
    step: 1,
    title: 'Confirm prerequisites',
    desc: 'Verify Node.js/Go environments and active ZoikoStream project tokens.',
    status: 'Ready',
    img: '/images/sample-application/Rectangle (12).png',
  },
  {
    step: 2,
    title: 'Configure local system',
    desc: 'Create local .env secure variables from repository example template.',
    status: 'Ready',
    img: '/images/sample-application/Rectangle (13).png',
  },
  {
    step: 3,
    title: 'Install dependencies',
    desc: 'Package manager checks security hashes and installs required modules.',
    status: 'Ready',
    img: '/images/sample-application/Rectangle (14).png',
  },
  {
    step: 4,
    title: 'Build project bundles',
    desc: 'Automatic compilation step verifies integrity and bundles frontend client.',
    status: 'Ready',
    img: '/images/sample-application/Rectangle (15).png',
  },
  {
    step: 5,
    title: 'Run application',
    desc: 'Execute verified local runtime server and trigger media connection.',
    status: 'Running',
    img: '/images/sample-application/Rectangle (16).png',
  },
  {
    step: 6,
    title: 'Verify real outcomes',
    desc: 'Check visual stream player and assure correct low-latency telemetry.',
    status: 'Confirmed',
    img: '/images/sample-application/Rectangle (17).png',
  },
  {
    step: 7,
    title: 'Inspect platform state',
    desc: 'Confirm ZoikoStream cloud portal console resources match local triggers.',
    status: 'Synchronized',
    img: '/images/sample-application/Rectangle (18).png',
  },
];

export function RunAndVerifySampleSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sample-application/bg (4).png"
          alt="Run and Verify Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Run and verify the sample
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Seven steps from clone to confirmed execution.
          </p>
        </div>

        {/* 7 Step Cards Grid (2-column layout) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {runSteps.map((st) => (
            <div
              key={st.step}
              className="p-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center justify-between gap-4 shadow-lg backdrop-blur-md"
            >
              <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                <Image
                  src={st.img}
                  alt={st.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-7 h-7 bg-teal-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-teal-400 text-sm font-bold font-mono">{st.step}</span>
              </div>

              <div className="flex-1 flex flex-col gap-0.5">
                <h3 className="text-white text-base font-bold">{st.title}</h3>
                <p className="text-slate-400 text-xs font-normal leading-4">{st.desc}</p>
              </div>

              <div className="px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex-shrink-0">
                <span className="text-emerald-500 text-xs font-bold font-mono">{st.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
