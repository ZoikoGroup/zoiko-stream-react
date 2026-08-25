import React from 'react';
import Image from 'next/image';

export function NeedExplicitSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (10).png"
          alt="Need Explicit Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[48px]">
            Make the need explicit before the product claim
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Describe preservation requirements without hidden scoring or premature sales qualification.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (8 cols): 5 Steps */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Step 1 */}
            <div className="p-6 bg-gray-950 rounded-xl border-[1.5px] border-teal-400 flex flex-col gap-4">
              <span className="text-teal-400 text-xs font-bold ">STEP 1: WHAT MUST REMAIN USABLE?</span>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Source Media</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Replay Derivative</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Captions / Transcripts</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Metadata / Provenance</div>
                <div className="px-4 py-2 bg-teal-400 rounded-full text-gray-950 text-xs font-normal ">All options</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-4">
              <span className="text-slate-400 text-xs font-bold ">STEP 2: WHAT MUST REMAIN CONNECTED TO IT?</span>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Provenance</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Rights / Access Policy</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Accessibility Artifacts</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Operational History</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Retention Policy</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Integrity Evidence</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-4">
              <span className="text-slate-400 text-xs font-bold ">STEP 3: WHO CONTROLS ACCESS/CUSTODY?</span>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Customer-owned</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Shared Custody</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Third-party Custodian</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-white text-xs font-normal ">Requires Decision</div>
              </div>
            </div>

            {/* Step 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-3">
                <span className="text-slate-400 text-xs font-bold ">STEP 4: LIFECYCLE RULES</span>
                <span className="text-slate-400 text-xs font-normal ">Retention, Review, Hold, Transfer, disposition, unknown</span>
              </div>
              <div className="p-5 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-3">
                <span className="text-slate-400 text-xs font-bold ">STEP 5: EVIDENCE REVIEW</span>
                <span className="text-slate-400 text-xs font-normal ">Integrity checks, custody logs, storage evidence</span>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Requirements Summary */}
          <div className="lg:col-span-4 p-8 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-6 backdrop-blur-sm">
            <span className="text-teal-400 text-sm font-bold  tracking-wide">
              REQUIREMENTS SUMMARY
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-2xl font-bold ">Full-Lifecycle Governance</h3>
              <p className="text-slate-400 text-sm font-normal  leading-5">
                Based on your selections for preserving source media alongside critical accessibility files with customer-owned custody structures.
              </p>
            </div>
            <div className="w-full border-t border-gray-800" />
            <div className="flex flex-col gap-3">
              <span className="text-white text-sm font-bold ">Designated Features:</span>
              <ul className="text-slate-400 text-xs font-normal  leading-5 flex flex-col gap-1">
                <li>• Real-time cryptographically signed hashes</li>
                <li>• Cold-storage replication with weekly audit logs</li>
                <li>• SAML SSO strict access containment rules</li>
              </ul>
            </div>
            <div className="w-full border-t border-gray-800" />
            <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
              <span className="text-gray-950 text-base font-bold ">Apply to Sandbox Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
