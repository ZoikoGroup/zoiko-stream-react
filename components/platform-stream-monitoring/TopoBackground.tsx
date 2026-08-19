import React from 'react';

/**
 * Faint topographic contour texture used behind the light sections of the
 * Stream monitoring page. Purely decorative.
 */
export default function TopoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#0d1117" strokeOpacity="0.06" strokeWidth="1.2">
          {Array.from({ length: 14 }).map((_, i) => {
            const o = i * 34;
            return (
              <path
                key={i}
                d={`M-120 ${120 + o} C 180 ${40 + o}, 320 ${260 + o}, 620 ${180 + o} S 1080 ${20 + o}, 1560 ${150 + o}`}
              />
            );
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const o = i * 26;
            return (
              <path
                key={`b-${i}`}
                d={`M-120 ${640 + o} C 240 ${580 + o}, 460 ${760 + o}, 780 ${660 + o} S 1200 ${520 + o}, 1560 ${620 + o}`}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
