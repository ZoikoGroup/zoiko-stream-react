import Image from 'next/image';
import React from 'react';

const ROLES = [
  {
    img: 'role-0.png',
    title: 'Workspace Member',
    desc: 'Read-only access to standard pipelines. Perfect for general analytics views.',
  },
  {
    img: 'role-1.png',
    title: 'Developer',
    desc: 'Full CRUD on APIs and key configurations. Recommended for active product integration.',
  },
  {
    img: 'role-2.png',
    title: 'Admin',
    desc: 'Unrestricted control over team settings, billing matrices, and security models.',
  },
];

const PERMISSIONS = [
  { action: 'Read streams', member: '✓', memberColor: 'text-[#33d9c7]', dev: '✓', devColor: 'text-[#33d9c7]', admin: '✓', adminColor: 'text-[#33d9c7]' },
  { action: 'Create client keys', member: '-', memberColor: 'text-[#4f5e74]', dev: '✓', devColor: 'text-[#33d9c7]', admin: '✓', adminColor: 'text-[#33d9c7]' },
  { action: 'Delete workspaces', member: '-', memberColor: 'text-[#4f5e74]', dev: '-', devColor: 'text-[#4f5e74]', admin: '✓', adminColor: 'text-[#33d9c7]' },
];

export default function RolesPermissionsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/roles-permissions/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-180px] top-[-54px] size-[420px]">
        <Image src="/images/developer-access-page/roles-permissions/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-180px] right-[-108px] size-[520px]">
        <Image src="/images/developer-access-page/roles-permissions/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Roles, permissions, and least privilege
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Product-native role and permission names from a verified Role and Permission Registry.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc]"
            >
              <div className="relative h-[160px] w-full shrink-0">
                <Image
                  src={`/images/developer-access-page/roles-permissions/${role.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                <h3 className="w-full text-[18px] font-bold leading-normal text-[#0f1b2d]">
                  {role.title}
                </h3>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-white p-[24px]">
          <div className="flex w-full items-start gap-[12px] bg-[#f8fafc] p-[12px] text-[13px] font-bold text-[#0f1b2d]">
            <p className="w-[120px] shrink-0 sm:w-[300px]">Platform Action</p>
            <p className="flex-1 text-center">Workspace Member</p>
            <p className="flex-1 text-center">Developer</p>
            <p className="flex-1 text-center">Admin</p>
          </div>

          <div className="flex w-full flex-col">
            {PERMISSIONS.map((perm, idx) => (
              <div
                key={perm.action}
                className={`flex w-full items-center gap-[12px] p-[16px] ${
                  idx !== PERMISSIONS.length - 1 ? 'border-b border-solid border-[#e1e6eb]' : ''
                }`}
              >
                <p className="w-[120px] shrink-0 text-[13px] font-bold text-[#0f1b2d] sm:w-[300px] sm:text-[14px]">
                  {perm.action}
                </p>
                <p className={`flex-1 text-center text-[16px] font-bold ${perm.memberColor}`}>
                  {perm.member}
                </p>
                <p className={`flex-1 text-center text-[16px] font-bold ${perm.devColor}`}>
                  {perm.dev}
                </p>
                <p className={`flex-1 text-center text-[16px] font-bold ${perm.adminColor}`}>
                  {perm.admin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
