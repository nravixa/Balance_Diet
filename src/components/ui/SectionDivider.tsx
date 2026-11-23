import React from "react";

interface SectionDividerProps {
  /** Flip vertically for bottom vs top placement */
  flip?: boolean;
  /** Flip horizontally for organic variation between sections */
  flipX?: boolean;
  /** Custom extra styling classes */
  className?: string;
  /** Variation: 1 = smooth river tide, 2 = coastal swell, 3 = deep lake ripples */
  variant?: 1 | 2 | 3;
}

export function SectionDivider({
  flip = false,
  flipX = false,
  className = "",
  variant = 1,
}: SectionDividerProps) {
  const transformClasses = [
    flip ? "rotate-180" : "",
    flipX ? "-scale-x-100" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      suppressHydrationWarning
      className={`w-full overflow-hidden leading-none pointer-events-none relative z-20 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-full h-8 sm:h-12 lg:h-16 overflow-hidden block ${transformClasses}`}
      >
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient
              id={`waterSpecular-${variant}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(131, 190, 66, 0.2)" />
              <stop offset="25%" stopColor="rgba(228, 239, 230, 0.45)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.85)" />
              <stop offset="75%" stopColor="rgba(131, 190, 66, 0.5)" />
              <stop offset="100%" stopColor="rgba(131, 190, 66, 0.2)" />
            </linearGradient>
          </defs>

          {/* Secondary Soft Depth Trace */}
          <path
            d={
              variant === 2
                ? "M0,38 C240,58 480,26 720,40 C960,54 1200,28 1440,38 L1440,90 L0,90 Z"
                : variant === 3
                ? "M0,45 C320,25 640,65 960,35 C1200,50 1360,30 1440,45 L1440,90 L0,90 Z"
                : "M0,42 C360,62 540,24 720,30 C900,36 1080,58 1440,42 L1440,90 L0,90 Z"
            }
            fill="rgba(131, 190, 66, 0.04)"
          />

          {/* Base Deep Foundation Wave */}
          <path
            d={
              variant === 2
                ? "M0,46 C240,26 480,58 720,48 C960,38 1200,60 1440,46 L1440,90 L0,90 Z"
                : variant === 3
                ? "M0,52 C320,32 640,70 960,45 C1200,60 1360,40 1440,52 L1440,90 L0,90 Z"
                : "M0,48 C360,24 540,58 720,54 C900,50 1080,30 1440,48 L1440,90 L0,90 Z"
            }
            fill="#081a17"
            className="section-divider-base transition-colors duration-300"
          />

          {/* Glistening Specular Surface Line */}
          <path
            d={
              variant === 2
                ? "M0,46 C240,26 480,58 720,48 C960,38 1200,60 1440,46"
                : variant === 3
                ? "M0,52 C320,32 640,70 960,45 C1200,60 1360,40 1440,52"
                : "M0,48 C360,24 540,58 720,54 C900,50 1080,30 1440,48"
            }
            stroke={`url(#waterSpecular-${variant})`}
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>
  );
}
