import React from 'react';
import Image from 'next/image';
import {
  Play,
  RefreshCw,
  Lock,
  Clock,
  Eye,
  XCircle,
  AlertCircle,
  HelpCircle,
  Shield,
  EyeClosed,
  EyeOff,
  LineChart,
  LineStyle,
  LineStyleIcon,
  Slash,
} from 'lucide-react';

const viewerStates = [
  {
    title: 'Available',
    desc: 'Approved player with title, captions, and support',
    icon: Play,
  },
  {
    title: 'Processing',
    desc: 'Replay not yet available, authoritative state only',
    icon: RefreshCw,
  },
  {
    title: 'Restricted',
    desc: 'Access required, no private metadata exposed',
    icon: Shield,
  },
  {
    title: 'Expired',
    desc: 'Access window ended, approved next route',
    icon: Clock,
  },
  {
    title: 'Unpublished',
    desc: 'Replay not currently published',
    icon: EyeOff,
  },
  {
    title: 'No Replay',
    desc: 'No replay offered, clear statement',
    icon: AlertCircle,
  },
  {
    title: 'Error',
    desc: 'Plain-language error with retry and support',
    icon: Slash,
  },
  {
    title: 'Unknown',
    desc: 'State cannot be confirmed, no stale cache',
    icon: HelpCircle,
  },
];

export default function ViewerStatesSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (65).png"
          alt="Viewer States Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Every viewer state is handled with clarity
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal  ">
            Public-safe recovery for every possible replay condition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viewerStates.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4 hover:border-teal-400/50 transition-colors"
              >
                <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold  ">
                    {st.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                    {st.desc}
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
