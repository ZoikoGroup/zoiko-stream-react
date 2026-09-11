import React from 'react';

type IconProps = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 16 16',
  'aria-hidden': true,
};

export function RepoIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 13.5V3a1.5 1.5 0 011.5-1.5H13v10H4.5A1.5 1.5 0 003 13a1.5 1.5 0 001.5 1.5H13" />
      <path d="M6 11.5v3l1-.8 1 .8v-3" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 14.5c-3 .9-3-1.5-4.2-1.8M10 14.5v-2.3a2 2 0 00-.6-1.6c2-.2 4.1-1 4.1-4.4a3.4 3.4 0 00-.9-2.4 3.2 3.2 0 00-.1-2.4s-.7-.2-2.4.9a8.3 8.3 0 00-4.2 0C4.2 1.2 3.5 1.4 3.5 1.4a3.2 3.2 0 00-.1 2.4 3.4 3.4 0 00-.9 2.4c0 3.4 2.1 4.2 4.1 4.4a2 2 0 00-.6 1.6v2.3" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 1.5l5 2v4c0 3.2-2.1 5.9-5 7-2.9-1.1-5-3.8-5-7v-4l5-2z" />
      <path d="M5.8 8l1.6 1.6L10.4 6.6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 2.5h4.5V7M13.5 2.5L7.5 8.5M12 9.5v3.5a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h3.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="6.2" />
      <path d="M5.5 8.2l1.7 1.7 3.4-3.6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

export function XCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="6.2" />
      <path d="M6 6l4 4M10 6l-4 4" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 4h11M2.5 8h11M2.5 12h11" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6.5" cy="5" r="2.8" />
      <path d="M1.5 14c.5-2.8 2.5-4.3 5-4.3 1.2 0 2.3.3 3.1 1M11 13l1.5 1.5 2.5-3" />
    </svg>
  );
}

export function HandoffIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 3v10M5.5 8h8M10.5 5l3 3-3 3" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9.5 1.5H4a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V5l-3.5-3.5z" />
      <path d="M9.5 1.5V5H13M6 9.5l1.4 1.4L10 8.3" />
    </svg>
  );
}

export function BranchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="4.5" cy="3.5" r="1.5" />
      <circle cx="4.5" cy="12.5" r="1.5" />
      <circle cx="11.5" cy="5" r="1.5" />
      <path d="M4.5 5v6M11.5 6.5c0 2.5-2.5 3-7 4" />
    </svg>
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13.5 8a5.5 5.5 0 11-1.6-3.9M13.5 2.5v2.5H11" />
    </svg>
  );
}
