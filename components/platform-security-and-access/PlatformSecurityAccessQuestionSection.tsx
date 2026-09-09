import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Code2, Shield, Users, Bug, UserX, ArrowRight, Lock, TriangleAlert, User } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const QUESTIONS = [
  {
    icon:Lock,
    title: 'How do I authenticate?',
    desc: 'Credential and authentication mechanism details live in Authentication docs.',
    href: '/authentication',
  },
  {
    icon: Code2,
    title: 'How do I get developer access?',
    desc: 'Workspace and developer access eligibility in Developer access.',
    href: '/developer-access-page',
  },
  {
    icon: Shield,
    title: 'How do I protect playback?',
    desc: 'Audience and playback authorization details in Secure playback.',
    href: '/developer-secure-playback',
  },
  {
    icon: Users,
    title: 'Who can access this resource?',
    desc: 'Customer-specific effective access requires authenticated account admin.',
    href: '/live-events-overview',
  },
  {
    icon: TriangleAlert,
    title: 'I found a vulnerability',
    desc: 'Report through Responsible disclosure — always separate and ungated.',
    href: '/contact-us',
  },
  {
    icon: User,
    title: 'I cannot access my account',
    desc: 'Sign in or contact Support for account recovery.',
    href: '/support-help-center',
  },
];

export default function PlatformSecurityAccessQuestionSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white border-b border-slate-200 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Choose your security question
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Different roles need different answers. Pick the path that matches your current intent.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUESTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="p-6 bg-slate-50/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-between items-start gap-4 hover:outline-blue-500 hover:shadow-md transition-all group min-h-[220px]"
              >
                <div className="w-full flex flex-col gap-4">
                  <div className="size-12 bg-blue-500/10 rounded-[10px] flex items-center justify-center text-blue-500 shrink-0">
                    <Icon className="size-6 text-blue-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk'] group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 inline-flex items-center gap-1">
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                    Learn more
                  </span>
                  <ArrowRight className="size-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
