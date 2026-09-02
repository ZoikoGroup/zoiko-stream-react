import React from 'react';
import Image from 'next/image';
import { ModalType } from './SupportHelpCenterModals';
import bg13 from '@/public/images/support-help-center/cta image.jpg';

interface CtaSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function SupportHelpCenterCtaSection({ onOpenModal }: CtaSectionProps) {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-zinc-950 flex items-center justify-center overflow-hidden z-10 min-h-[380px]">
      {/* Background Image */}
      {bg13 && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
          <Image src={bg13} alt="CTA Background" fill className="object-cover" priority />
        </div>
      )}

      {/* Dark Gradient Overlay (Fades out image on the right so text is super crisp) */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/30 via-zinc-950/80 to-zinc-950/98 pointer-events-none z-0" />

      {/* Radial Teal Glow */}
      <div className="absolute inset-0 bg-radial-[at_15%_20%] from-teal-400/10 to-teal-400/0 pointer-events-none z-0" />

      {/* Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left spacer column so background image is visible on the left */}
        <div className="hidden lg:block lg:col-span-5" />

        {/* Right column containing text and action buttons */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
              STILL STUCK?
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[44px]">
            If this didn&apos;t solve it, a person can help.
          </h2>

          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-xl">
            Support is here whether or not you&apos;re evaluating anything commercial — there&apos;s no sales gate on getting help.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenModal('contact')}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
            >
              Contact support
            </button>
            <button
              onClick={() => onOpenModal('status')}
              className="px-7 py-3.5 bg-zinc-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-white transition-colors cursor-pointer"
            >
              System status
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
