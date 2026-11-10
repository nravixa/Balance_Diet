import type { SVGProps } from "react";

export function BrandLogoMark({
  className = "w-8 h-8",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 35 35"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Top circle / gem */}
      <circle cx="17.2" cy="5.2" r="3.9" />

      {/* Left vertical pillar */}
      <rect x="1.5" y="2" width="4.2" height="27" />

      {/* Right vertical pillar */}
      <rect x="27.5" y="13.5" width="4.2" height="15.5" />

      {/* Upper diagonal fold */}
      <polygon points="1.5,2 17.2,17 27.5,8 29.5,10.5 17.2,21 5.7,9.5" />

      {/* Lower chevron fold with bottom spear */}
      <polygon points="5.7,18 17.2,33 27.5,22.5 24,19 17.2,26.5 9.5,17.5" />
    </svg>
  );
}

export function BrandLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <BrandLogoMark className="brand-mark w-7 h-7 sm:w-8 sm:h-8 text-white flex-shrink-0 transition-colors" />
      {showText && (
        <span className="brand-logo-text font-bold text-sm sm:text-base tracking-[0.24em] uppercase text-white font-sans whitespace-nowrap transition-colors">
          BALANCE DIET
        </span>
      )}
    </div>
  );
}

