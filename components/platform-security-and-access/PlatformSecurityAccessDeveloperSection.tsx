import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import codeEditorImg from '@/public/images/Zoiko Stream footer - Platform - Security-and-Access-Platform-Page/CodeEditorGraphic.png';

const WORKSPACE_ITEMS = [
  {
    title: 'Eligibility',
    desc: 'Criteria required to register and verify active developer profile identities.',
    linkText: 'Developer access docs',
    href: '/developer-access-page',
  },
  {
    title: 'Environments',
    desc: 'Access boundaries covering local testing sandbox, staging, and live production endpoints.',
    linkText: 'Developer access docs',
    href: '/developer-access-page',
  },
  {
    title: 'Credential Issuance',
    desc: 'How public/private key pairs and access tokens compile across verified workspaces.',
    linkText: 'Developer access docs',
    href: '/developer-access-page',
  },
  {
    title: 'Access Revocation',
    desc: 'Lifecycle parameters ensuring instant invalidation of workspace privileges.',
    linkText: 'Developer access docs',
    href: '/developer-access-page',
  },
];

const CREDENTIAL_ITEMS = [
  {
    title: 'Credential Type',
    desc: 'OAuth clients, server keys, or lightweight browser player tokens.',
    linkText: 'Authentication docs',
    href: '/authentication',
  },
  {
    title: 'Credential Scope',
    desc: 'Isolating keys to single stream ingest, stats readout, or broad admin scope.',
    linkText: 'Authentication docs',
    href: '/authentication',
  },
  {
    title: 'Secret Storage',
    desc: 'Safe cloud vaults and KMS decryption standards.',
    linkText: 'Authentication docs',
    href: '/authentication',
  },
  {
    title: 'Rotation & Revocation',
    desc: 'Automated expiry lifecycles for public-facing credentials.',
    linkText: 'Authentication docs',
    href: '/authentication',
  },
];

export default function PlatformSecurityAccessDeveloperSection() {
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
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Developer access and API credentials
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Developer workspace access is separate from API authorization. Exact credential mechanisms live in Authentication documentation.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Workspace & Developer Access */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                Workspace &amp; developer access
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Developer access eligibility, request state, and environment parameters are natively owned and managed by the Developer access authority.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {WORKSPACE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </span>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-teal-600 text-xs font-bold font-['Space_Grotesk'] hover:underline pt-0.5"
                  >
                    <span>→ {item.linkText}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: API and SDK Credential Boundary */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
              API and SDK credential boundary
            </h3>

            <div className="w-full p-6 bg-gray-950 rounded-xl flex flex-col gap-4 overflow-hidden shadow-2xl">
              <div className="w-full flex justify-between items-center">
                <span className="text-teal-400 text-xs font-bold font-['IBM_Plex_Mono']">
                  api_credentials.json
                </span>
                <span className="text-slate-400 opacity-60 text-xs font-normal font-['Space_Grotesk']">
                  SANDBOX MODE
                </span>
              </div>

              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={codeEditorImg}
                  alt="API Credentials Code Editor Graphic"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-slate-400 opacity-60 text-xs font-normal font-['Space_Grotesk']">
                Never enter real secrets in public demos.
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {CREDENTIAL_ITEMS.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </span>
                  <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-teal-600 text-xs font-bold font-['Space_Grotesk'] hover:underline pt-0.5"
                  >
                    <span>→ {item.linkText}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
