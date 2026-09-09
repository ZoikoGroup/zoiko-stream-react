import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import section3Bg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/section-3bg.png';

const MODEL_LAYERS = [
  { num: 'LAYER 01', title: 'Principal', desc: 'Approved identity class', highlight: false },
  { num: 'LAYER 02', title: 'Authentication', desc: 'Credential assurance', highlight: false },
  { num: 'LAYER 03', title: 'Auth Context', desc: 'Resource & Policy scope', highlight: false },
  { num: 'LAYER 04', title: 'Protected Action', desc: 'Routing controller', highlight: true },
  { num: 'LAYER 05', title: 'Media Protection', desc: 'Secure playback layer', highlight: false },
  { num: 'LAYER 06', title: 'Evidence', desc: 'Audit log attribution', highlight: false },
  { num: 'LAYER 07', title: 'Lifecycle', desc: 'Revocation control', highlight: false },
];

export default function PlatformSecurityAccessModelSection() {
  return (
    <section id="security-model" className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden z-10">
      {/* Background Image section-3bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section3Bg}
          alt="Model Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-12">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            The security and access model
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            A layered architecture connecting identity, authorization, protected actions, evidence, and lifecycle management across the secure video workflow.
          </p>
        </div>

        {/* 7 Layer Pipeline Grid / Horizontal Scroll */}
        <div className="w-full p-6 sm:p-8 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-6 overflow-hidden shadow-2xl">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 items-center">
            {MODEL_LAYERS.map((layer, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`h-32 p-4 rounded-[10px] outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start gap-2 ${
                    layer.highlight
                      ? 'bg-slate-950 outline-teal-500'
                      : 'bg-slate-950 outline-gray-800'
                  }`}
                >
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                    {layer.num}
                  </span>
                  <span className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
                    {layer.title}
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-snug">
                    {layer.desc}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] pt-2 border-t border-gray-800">
            Each layer defers to its specialist authority for exact implementation details.
          </p>
        </div>
      </div>
    </section>
  );
}
