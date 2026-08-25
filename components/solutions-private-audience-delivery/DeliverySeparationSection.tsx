import React from 'react';
import Image from 'next/image';
import { Globe, Link, Server, Tv2 } from 'lucide-react';

const deliveryCards = [
  { title: 'Playback Surface', desc: 'App destination bounded strictly by cryptographically signed policies.' ,icon:Tv2},
  { title: 'Embed Controls', desc: 'Domain constraints are secondary layers, never replacing user entitlement checks.',icon:Globe },
  { title: 'Distribution', desc: 'Separated CDN delivery profiles isolated from administrative control nodes.',icon:Server },
  { title: 'Link Handling', desc: 'Obscure links are not secure. Systematic verification is strictly required on load.',icon:Link },
];

export function DeliverySeparationSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (5).png"
          alt="Delivery Separation Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Keep where video is delivered separate from who watches
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Embed restrictions are not audience authorization.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryCards.map((card, idx) => {
            const IconComponent =card.icon;
            return(
            <div
              key={idx}
              className="p-5 bg-zinc-900 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-700 transition-colors backdrop-blur-sm min-h-[176px]"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-white text-base font-bold ">{card.title}</h3>
              <p className="text-slate-400 text-xs font-normal  leading-5">{card.desc}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
