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
      data-parallax="true"
      data-parallax-speed="0.12"
      suppressHydrationWarning
      className={`w-full overflow-hidden leading-none pointer-events-none relative z-20 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative w-full h-10 sm:h-14 lg:h-18 overflow-hidden block ${transformClasses}`}
      >
        {/* Layer 1: Background Water Ripple (Flowing Left - 22s cycle) */}
        <div className="absolute inset-0 w-[200%] h-full animate-water-slow">
          <svg
            viewBox="0 0 2880 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path
              d="M0,58 C360,34 540,68 720,64 C900,60 1080,38 1440,58 C1800,34 1980,68 2160,64 C2340,60 2520,38 2880,58 L2880,90 L0,90 Z"
              fill="rgba(255, 255, 255, 0.02)"
            />
          </svg>
        </div>

        {/* Layer 2: Middle Water Cross-Current (Drifting Right - 16s cycle) */}
        <div className="absolute inset-0 w-[200%] h-full animate-water-medium">
          <svg
            viewBox="0 0 2880 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path
              d="M0,42 C360,62 540,24 720,30 C900,36 1080,58 1440,42 C1800,62 1980,24 2160,30 C2340,36 2520,58 2880,42 L2880,90 L0,90 Z"
              fill="rgba(131, 190, 66, 0.04)"
            />
            {/* Secondary Water Surface Trace */}
            <path
              d="M0,42 C360,62 540,24 720,30 C900,36 1080,58 1440,42 C1800,62 1980,24 2160,30 C2340,36 2520,58 2880,42"
              stroke="rgba(131, 190, 66, 0.25)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Layer 3: Foreground Liquid Water Surface + Shimmering Specular Waterline (Flowing Left - 11s cycle + bobbing) */}
        <div className="absolute inset-0 w-[200%] h-full animate-water-fast animate-water-bob">
          <svg
            viewBox="0 0 2880 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <defs>
              {/* Natural Water Surface Reflection Gradient in Fielder Emerald and Leaf Green */}
              <linearGradient
                id={`waterSpecular-${variant}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(131, 190, 66, 0.25)" />
                <stop offset="25%" stopColor="rgba(228, 239, 230, 0.6)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="75%" stopColor="rgba(131, 190, 66, 0.65)" />
                <stop offset="100%" stopColor="rgba(131, 190, 66, 0.25)" />
              </linearGradient>
            </defs>

            {/* Base Deep Forest Green Foundation Wave */}
            <path
              d="M0,48 C360,24 540,58 720,54 C900,50 1080,30 1440,48 C1800,24 1980,58 2160,54 C2340,50 2520,30 2880,48 L2880,90 L0,90 Z"
              fill="#081a17"
              className="section-divider-base transition-colors duration-300"
            />

            {/* Glistening Water Surface Line */}
            <path
              d="M0,48 C360,24 540,58 720,54 C900,50 1080,30 1440,48 C1800,24 1980,58 2160,54 C2340,50 2520,30 2880,48"
              stroke={`url(#waterSpecular-${variant})`}
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
