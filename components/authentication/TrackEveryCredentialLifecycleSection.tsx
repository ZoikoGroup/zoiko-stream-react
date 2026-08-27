import React from 'react';
import Image from 'next/image';

const lifecycles = [
  {
    title: 'Active',
    desc: 'Credential is live and authorized. Actions: Monitor usage logs, audit source IP addresses, and restrict scope to minimal endpoints.',
    img: '/images/authentication/card-image (47).png',
  },
  {
    title: 'Rotating',
    desc: 'Grace period overlaps active usage. Actions: Configure automated replacement schedules and deploy fallback endpoints to ensure zero downtime.',
    img: '/images/authentication/card-image (48).png',
  },
  {
    title: 'Expiring',
    desc: 'Within threshold boundary for lifecycle update. Actions: Trigger warning telemetry, issue admin alert notifications, prepare fallback keys.',
    img: '/images/authentication/card-image (49).png',
  },
  {
    title: 'Expired',
    desc: 'Exceeded valid lease duration window. Actions: Reject all ingress handshakes immediately with specific invalid token exception codes.',
    img: '/images/authentication/card-image (50).png',
  },
  {
    title: 'Revoked',
    desc: 'Manually disabled by system administrators. Actions: Permanent blacklisting of credential hash and immediate session termination.',
    img: '/images/authentication/card-image (51).png',
  },
  {
    title: 'Compromised',
    desc: 'Leaked or subject to suspicious access. Actions: Execute emergency hot shutdown, isolate dependent pipelines, initiate forensic auditing.',
    img: '/images/authentication/card-image (52).png',
  },
];

export function TrackEveryCredentialLifecycleSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (13).png"
          alt="Track Every Credential Lifecycle Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Track every credential from creation to retirement
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Active, rotating, expiring, expired, revoked, compromised — lifecycle is explicit.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifecycles.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-950/90 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl hover:border-gray-700 transition-colors backdrop-blur-sm min-h-[320px]"
            >
              <div className="w-full h-36 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400 text-base font-normal leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
