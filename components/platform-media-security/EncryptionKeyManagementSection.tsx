import React from 'react';
import { HelpCircle, AlertCircle, Check, AlertTriangle } from 'lucide-react';

const questions = [
  { q: "What are the two 'ends'?", a: 'Name actual endpoints and intermediary access.' },
  { q: 'What media/data is covered?', a: 'Live, VOD, recordings, metadata, credentials separately.' },
  { q: 'At which lifecycle stages?', a: 'Contribute, Ingest, Produce, Secure, Deliver, Understand, Preserve.' },
  { q: 'Who controls keys?', a: 'Customer, platform, or third-party custody.' },
  { q: 'Can ZoikoStream decrypt/process?', a: "If yes, 'end-to-end' may be misleading." },
  { q: 'What breaks encryption continuity?', a: 'Transcoding, mixing, captioning, analytics.' },
  { q: 'What standards are used?', a: 'Only from current Engineering/Trust authority.' },
  { q: 'What evidence proves it?', a: 'Current technical source plus Trust review date.' },
];

export default function EncryptionKeyManagementSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Encryption and key management — qualified, not assumed
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Every protection statement requires defined endpoints, key custody, processing exceptions, and current evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Questions List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {questions.map((item, idx) => (
              <div
                key={idx}
                className="pb-3 border-b border-slate-200 flex items-start gap-4"
              >
                <div className="size-6 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <Check className="size-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {item.q}
                  </h3>
                  <p className="text-slate-600 text-base font-normal   leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Dark Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Encryption Standards Box */}
            <div className="p-8 bg-slate-900 rounded-2xl flex flex-col gap-5 text-white">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  Encryption standards
                </h3>
                <p className="text-slate-400 text-base font-normal   leading-relaxed">
                  Current evidence must reference a specific standard, key size, and lifecycle stage.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">AES minimum</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">AES-256-GCM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Key rotation</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">≤ 90 days</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Key custody</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">Customer or HSM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 text-sm font-normal  ">Evidence freshness</span>
                  <span className="text-teal-400 text-base font-bold font-['Space_Grotesk']">≤ 30 days</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-teal-400/20 flex flex-col gap-2">
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Evidence rule
                </span>
                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  Claim → Technical source → Trust review date → Lifecycle stage.
                </p>
              </div>
            </div>

            {/* Warning Rule Box */}
            <div className="p-8 bg-slate-900 rounded-2xl flex flex-col gap-4 text-white border border-gray-800">
              <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                <AlertTriangle className="size-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  Not generic security promises
                </h3>
                <p className="text-slate-400 text-base font-normal   leading-relaxed">
                  The visible descriptor <span className="text-teal-400 font-bold">&quot;Encryption end to end&quot;</span> is information scent, not evidence. Production copy must be backed by explicit endpoint, cryptographic, key-control, exception, and processing evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
