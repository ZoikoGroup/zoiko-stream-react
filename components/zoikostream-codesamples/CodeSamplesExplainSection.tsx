import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const CARDS = [
  {
    image: '/images/zoikostream-codesample/Image (2).png',
    section: 'EXPLAIN THE SAMPLE',
    tag: 'Purpose and steps',
    title: 'Purpose and steps without duplicating the API contract',
    description: 'A sample explains one approved task. It does not replace the API reference, authentication guidance, or the source of record.'
  },
  {
    image: '/images/zoikostream-codesample/Image (3).png',
    section: 'DEPENDENCIES / RUNTIME COMPATIBILITY',
    tag: 'Reproducible context',
    title: 'Reproducible language/runtime/dependency context',
    description: 'Runtime and dependency context must be reproducible and in review. SDK and API relationship is explained by the source of record.'
  },
  {
    image: '/images/zoikostream-codesample/Image (4).png',
    section: 'SECURITY / PRIVACY',
    tag: 'Synthetic data only',
    title: 'Unmistakable placeholders and synthetic data rules',
    description: 'Secret and customer-data protection is enforced through placeholders. Side-effect rules disable copy when impact is unknown or destructive.'
  },
  {
    image: '/images/zoikostream-codesample/Image (5).png',
    section: 'TROUBLESHOOTING / SUPPORT',
    tag: 'Canonical handoffs',
    title: 'Safe diagnostics and canonical Documentation handoffs',
    description: 'Use Documentation, API reference, Authentication, Webhooks, Media protocols, System status, and Support for safe diagnostics without invented retry values.'
  }
];

export default function CodeSamplesExplainSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-[#0A0D13] flex flex-col items-center overflow-hidden border-t border-slate-800">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-40">
        <div className="w-full h-full bg-[url('/images/zoikostream-codesamples/Hero-Graphic.png')] bg-cover bg-center mix-blend-screen opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              Explain the sample, dependencies, security, and support
            </h2>
            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              These sections explain how to read a sample, what makes it reproducible, how safety is enforced, and where to go when the sample is not enough.
            </p>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 p-5 rounded-xl border border-blue-500/20 bg-[#141A25] flex items-start gap-3 shadow-lg">
            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed">
              These sections are added to complete the document without duplicating the API contract or inventing technical facts.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CARDS.map((card, idx) => (
            <div key={idx} className="w-full bg-[#141A25] border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-slate-700 transition-colors">
              
              {/* Card Image */}
              <Image
                src={card.image}
                alt={`${card.section} illustration`}
                width={560}
                height={180}
                className="w-full h-44 object-cover"
              />
              
              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  {card.section}
                </span>
                
                <div className="w-fit px-2 py-1 bg-slate-800 rounded-md text-slate-300 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider mb-2">
                  {card.tag}
                </div>

                <h3 className="text-white text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-[13px] font-normal font-['Inter'] leading-relaxed flex-1 mt-1">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
