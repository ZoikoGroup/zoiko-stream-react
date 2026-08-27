import React from 'react';
import Image from 'next/image';

const gates = [
  {
    title: 'Asset Visible',
    desc: 'Asset entry initialized on the metadata cluster. ID is queryable on API.',
  },
  {
    title: 'Metadata Editable',
    desc: 'Write-lock released. Operational parameters and keys accept overrides.',
  },
  {
    title: 'Playback Reference Usable',
    desc: 'Master manifest generated. Relative chunk paths resolved successfully.',
  },
  {
    title: 'Protected Playback Usable',
    desc: 'AES protection key mapped. Authorization tokens verifying correctly.',
  },
  {
    title: 'Player Integration',
    desc: 'Player telemetry modules bound. Active stats reports tracking ready.',
  },
  {
    title: 'Delete Allowed',
    desc: 'Compliance lock absent. No regulatory rules prevent asset deletion.',
  },
  {
    title: 'Automation Safe',
    desc: 'Process validated against pipeline rules. Webhooks active for tasks.',
  },
];

export function KnowWhatIsSafeToDoSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (11).png"
          alt="Know What Is Safe Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Know exactly what is safe to do — and why.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Deterministic capability gates. Instead of guessing progress states, inspect explicit verification telemetry for each target operational path.
          </p>
        </div>

        {/* 7 Verified Gates List */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
          {gates.map((gate, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="p-2 bg-teal-400/10 rounded-md border border-teal-400/20 shrink-0">
                  <span className="text-teal-400 text-xs font-bold">✓</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold">{gate.title}</h3>
                  <p className="text-slate-400 text-xs">{gate.desc}</p>
                </div>
              </div>

              <div className="px-2.5 py-1 bg-teal-400/5 rounded-full border border-teal-400 shrink-0">
                <span className="text-teal-400 text-xs font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
