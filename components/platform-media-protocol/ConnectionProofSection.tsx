import React from 'react';
import Image from 'next/image';

const stagesRow1 = [
  { num: 1, title: 'Confirm source & workflow', desc: 'Validate target camera, encoder, or player profile.' },
  { num: 2, title: 'Select verified path', desc: 'Select corresponding registry mapping criteria.' },
  { num: 3, title: 'Obtain endpoint & access', desc: 'Request secure ingress routing points.' },
  { num: 4, title: 'Configure', desc: 'Set latency buffers, bitrates, and keyframes.' },
];

const stagesRow2 = [
  { num: 5, title: 'Connect', desc: 'Initiate verified technical protocol handshake.' },
  { num: 6, title: 'Inspect & diagnose', desc: 'Track live connection health indicators.' },
  { num: 7, title: 'Recover', desc: 'Leverage automatic fallback path when failure hits.' },
  { num: 8, title: 'Continue', desc: 'Verify cryptographic state history.' },
];

export default function ConnectionProofSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-protocol/bg (92).png"
          alt="Connection Proof Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Connection proof — connect safely with verified evidence
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Every configuration example is source-controlled, tested, profile-specific, and dated.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stagesRow1.map((st, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-900/90 rounded-xl border border-gray-800 flex flex-col gap-4 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="size-7 bg-teal-400 rounded-full flex items-center justify-center text-slate-950 text-xs font-bold font-['Space_Grotesk']">
                    {st.num}
                  </div>
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                    STAGE {st.num}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {st.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stagesRow2.map((st, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-900/90 rounded-xl border border-gray-800 flex flex-col gap-4 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="size-7 bg-teal-400 rounded-full flex items-center justify-center text-slate-950 text-xs font-bold font-['Space_Grotesk']">
                    {st.num}
                  </div>
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                    STAGE {st.num}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {st.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
