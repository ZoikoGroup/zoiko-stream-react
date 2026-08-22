import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  KeyRound,
  Radio,
  RefreshCw,
  FileCheck,
} from 'lucide-react';

const layers = [
  {
    title: 'Identity',
    question: 'Who or what is acting?',
    desc: 'Cryptographic assertions tied directly to active directory credentials.',
    icon: UserCheck,
  },
  {
    title: 'Policy',
    question: 'What rules apply?',
    desc: 'Strict verification of rights, consent, geographical constraints, and licenses.',
    icon: ShieldCheck,
  },
  {
    title: 'Authorization',
    question: 'May playback proceed?',
    desc: 'Real-time state tracking issuing single-use decryption keys.',
    icon: KeyRound,
  },
  {
    title: 'Delivery',
    question: 'How does media reach the viewer?',
    desc: 'Adaptive video transit buffered programmatically at edge nodes.',
    icon: Radio,
  },
  {
    title: 'Continuity',
    question: 'What happens when conditions fail?',
    desc: 'Automated route switches, preservation states, and hold overrides.',
    icon: RefreshCw,
  },
  {
    title: 'Protection + Evidence',
    question: 'What protects and proves claims?',
    desc: 'Durable signed logs establishing absolute actor accountability.',
    icon: FileCheck,
  },
];

export default function HowSecureDeliveryWorksSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-gray-950 leading-tight">
            How Secure Delivery Works
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal   max-w-3xl">
            Six connected layers from identity to evidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={idx}
                className="min-h-[240px] p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all flex flex-col gap-4 group"
              >
                <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-gray-950 text-lg font-bold   group-hover:text-teal-600 transition-colors">
                    {layer.title}
                  </h3>
                  <span className="text-blue-500 text-xs font-semibold  ">
                    {layer.question}
                  </span>
                  <p className="text-slate-600 text-xs font-normal   leading-relaxed pt-1">
                    {layer.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
