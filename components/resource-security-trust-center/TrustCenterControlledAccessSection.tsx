import React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';

import bg13 from '@/public/images/resources-security-trust-center/section13 bg.png';

const STEPS = [
  { num: '01', title: 'Inspect Record', desc: 'Browse public evidence' },
  { num: '02', title: 'Review Rules', desc: 'Check requirements' },
  { num: '03', title: 'Submit Request', desc: 'Minimal info capture' },
  { num: '04', title: 'Verification', desc: 'Identity evaluated' },
  { num: '05', title: 'Access Decision', desc: 'Prompt authorization' },
  { num: '06', title: 'Secure Delivery', desc: 'Encrypted transfer' },
  { num: '07', title: 'Expiry', desc: 'Temporary scope' },
];

export default function TrustCenterControlledAccessSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg13}
          alt="Controlled Access Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Controlled evidence access
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            className="p-4 bg-zinc-900/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-2 hover:outline-teal-400/50 transition-all"
          >
            <div className="w-full flex justify-between items-center">
              <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                {step.num}
              </span>
              <Lock className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <h3 className="text-white text-xs font-bold font-['Space_Grotesk'] pt-1">
              {step.title}
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Inter']">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <span className="relative z-10 text-slate-500 text-xs font-normal font-['Inter']">
        Note: All public evidence metadata is visible before identity capture.
      </span>
    </section>
  );
}
