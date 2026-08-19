import { Archive, Calendar, Download, Scale, Shield, Trash2, LucideIcon } from 'lucide-react';

// Explicitly type the dictionary using LucideIcon
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Archive,
  Shield,
  Download,
  Trash2,
  Scale,
};


const policies = [
  {
    badge: "GOVERNED",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-500",
    title: "Retention Policy Options",
    description: "Approved retention policy options applied to specific scopes. Establish owner visibility, continuous governance, and systematic review routines.",
    scope: "SCOPE: TENANT-WIDE",
    icon: "Calendar"
  },
  {
    badge: "COMPLIANT",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-500",
    title: "Archive & Preservation",
    description: "Establish structural preservation relationships where explicitly approved. Secure offline cold storage with zero active durability or immutable claims.",
    scope: "SCOPE: COLD-STORE",
    icon: "Archive"
  },
  {
    badge: "REVOCATION",
    badgeBg: "bg-red-500/10",
    badgeText: "text-red-500",
    title: "Restriction & Withdrawal",
    description: "Enable immediate capability to restrict active use or stop external playback once authorized by high-tier corporate security roles.",
    scope: "SCOPE: EDGE-CDNS",
    icon: "Shield"
  },
  {
    badge: "SECURE",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-500",
    title: "Approved Export Paths",
    description: "Facilitate governed export of high-definition master assets. Restrict downloads to explicitly permitted client accounts with log verification.",
    scope: "SCOPE: EGR-SIGN",
    icon: "Download"
  },
  {
    badge: "PURGE-READY",
    badgeBg: "bg-red-500/10",
    badgeText: "text-red-500",
    title: "Actionable Deletion",
    description: "Execute permanent, zero-trace asset deletion requests. Preserves a cryptographically signed cryptographic receipt proving final system execution.",
    scope: "SCOPE: ORCHESTRATOR",
    icon: "Trash2"
  },
  {
    badge: "HELD",
    badgeBg: "bg-amber-600/10",
    badgeText: "text-amber-600",
    title: "Legal Hold & Dispute",
    description: "Active dispute flags or legal hold commands completely override ordinary scheduled disposition parameters to lock media state.",
    scope: "SCOPE: GLOBAL-LOCK",
    icon: "Scale"
  },
];

export default function PreserveChangeSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-t border-b border-gray-200 flex flex-col gap-14 overflow-hidden">
      <div className="flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Preserve, change, or remove
        </h2>
        <p className="text-slate-600 text-lg font-normal leading-7">
          Retention, export, and deletion under authorized policy
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Policies 1-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.slice(0, 3).map((policy) => {
            const IconComponent = iconMap[policy.icon];
            return (
              <div key={policy.title} className="p-7 bg-white rounded-2xl border border-gray-200 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-blue-500">
                    {IconComponent && <IconComponent size={24} strokeWidth={2} />}
                  </div>
                  <div className={`px-2 py-1 ${policy.badgeBg} rounded-sm`}>
                    <span className={`${policy.badgeText} text-xs font-bold uppercase tracking-wide`}>
                      {policy.badge}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-zinc-950 text-base font-bold leading-6">{policy.title}</p>
                  <p className="text-slate-600 text-sm font-normal leading-5">{policy.description}</p>
                </div>
                <div className="border-t border-gray-200" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-bold">{policy.scope}</span>
                  <span className="text-blue-500 text-xs font-bold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Policies 4-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.slice(3).map((policy) => {
            const IconComponent = iconMap[policy.icon];
            return (
              <div key={policy.title} className="p-7 bg-white rounded-2xl border border-gray-200 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-blue-500">
                    {IconComponent && <IconComponent size={24} strokeWidth={2} />}
                  </div>
                  <div className={`px-2 py-1 ${policy.badgeBg} rounded-sm`}>
                    <span className={`${policy.badgeText} text-xs font-bold uppercase tracking-wide`}>
                      {policy.badge}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-zinc-950 text-base font-bold leading-6">{policy.title}</p>
                  <p className="text-slate-600 text-sm font-normal leading-5">{policy.description}</p>
                </div>
                <div className="border-t border-gray-200" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-bold">{policy.scope}</span>
                  <span className="text-blue-500 text-xs font-bold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
