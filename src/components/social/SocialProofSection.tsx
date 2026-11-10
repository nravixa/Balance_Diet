import { BRAND_CONFIG } from "@/lib/constants";
import { Star, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon, GoogleIcon } from "@/components/ui/BrandIcons";

export function SocialProofSection() {
  return (
    <section
      id="social-proof"
      data-snap-section="true"
      className="relative w-full overflow-hidden py-14 sm:py-20 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-20 lg:px-8 xl:px-10 min-h-[calc(100vh-3.5rem)] flex flex-col justify-center"
    >
      {/* Section Background Landscape Image & Dual Gradient Mask with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=85"
          alt=""
          data-parallax="true"
          data-parallax-speed="0.25"
          data-parallax-scale="1.12"
          suppressHydrationWarning
          className="w-full h-[125%] -top-[12%] relative object-cover object-center filter saturate-[0.85] contrast-[1.1] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081a17] via-[#081a17]/85 to-[#081a17]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a17]/95 via-[#081a17]/50 to-[#081a17]/95" />
      </div>

      {/* Floating Ambient Parallax Elements */}
      <div
        data-float
        data-speed="0.4"
        suppressHydrationWarning
        className="hidden md:block absolute right-10 top-16 pointer-events-none w-16 h-16 rounded-full bg-[#83be42]/10 blur-xl"
      />
      <div
        data-float
        data-speed="-0.3"
        suppressHydrationWarning
        className="hidden md:block absolute left-8 bottom-16 pointer-events-none w-20 h-20 rounded-full bg-[#83be42]/15 blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Editorial Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2
            data-reveal-heading
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            Trusted by <span className="text-[#83be42]">Pune&#39;s Clean Eaters</span>
          </h2>
          <p
            data-reveal-text
            className="mt-2 text-xs sm:text-sm text-[#e4efe6]/80 max-w-xl mx-auto"
          >
            Verified community ratings and daily diet bowl stories from health enthusiasts across Pune.
          </p>
        </div>

        {/* Master Panoramic Social & Reviews Bento Container */}
        <div
          data-reveal-card
          data-tilt
          className="glass-panel rounded-tr-[42px] rounded-bl-[42px] rounded-tl-[16px] rounded-br-[16px] hover:rounded-tl-[42px] hover:rounded-br-[42px] hover:rounded-tr-[16px] hover:rounded-bl-[16px] p-5 sm:p-7 lg:p-8 border-0 shadow-2xl relative overflow-hidden transition-all duration-500"
        >
          <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* 1. Google Reviews Card (Unified Botanical Theme) */}
            <a
              href={BRAND_CONFIG.socials.googlePresence}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-card
              data-tilt
              className="glass-strip rounded-tr-[28px] rounded-bl-[28px] rounded-tl-[10px] rounded-br-[10px] hover:rounded-tl-[28px] hover:rounded-br-[28px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 border-0 cursor-pointer"
            >
              <div>
                {/* Header: Rating & Brand */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#83be42]/20 flex items-center justify-center text-[#83be42] shadow-sm shrink-0">
                      <GoogleIcon className="w-4.5 h-4.5 text-[#83be42]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-white font-display truncate">
                        Google Reviews
                      </h3>
                      <div className="flex items-center gap-1.5 text-[#83be42] text-[11px] font-bold">
                        <span>5.0</span>
                        <div className="flex items-center gap-0.5 text-[#83be42]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#83be42]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#83be42]/70 group-hover:text-white transition-colors shrink-0 ml-2" />
                </div>

                {/* Description */}
                <p className="text-xs text-[#e4efe6]/75 mt-1 leading-relaxed">
                  Customer ratings, kitchen hygiene, and verified feedback for our central Pune cloud kitchen.
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#83be42]">
                <span>Read 250+ Pune Reviews</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </a>

            {/* 2. Instagram Community Card (Unified Botanical Theme) */}
            <a
              href={BRAND_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-card
              data-tilt
              className="glass-strip rounded-tr-[28px] rounded-bl-[28px] rounded-tl-[10px] rounded-br-[10px] hover:rounded-tl-[28px] hover:rounded-br-[28px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 border-0 cursor-pointer"
            >
              <div>
                {/* Header: Handle & Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#83be42]/20 flex items-center justify-center text-[#83be42] shadow-sm shrink-0">
                      <InstagramIcon className="w-5 h-5 text-[#83be42]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-white font-display truncate">
                        Instagram
                      </h3>
                      <span className="text-[11px] text-[#83be42] font-semibold truncate block">
                        @balance.diet.pune
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#83be42]/70 group-hover:text-white transition-colors shrink-0 ml-2" />
                </div>

                {/* Description */}
                <p className="text-xs text-[#e4efe6]/75 mt-1 leading-relaxed">
                  Daily bowl prep videos, farm-fresh ingredient unboxing, and customer meal stories.
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#83be42]">
                <span>10K+ Pune Followers</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  Watch Prep &rarr;
                </span>
              </div>
            </a>

            {/* 3. Facebook & Kitchen Updates Card (Unified Botanical Theme) */}
            <a
              href={BRAND_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-card
              data-tilt
              className="glass-strip rounded-tr-[28px] rounded-bl-[28px] rounded-tl-[10px] rounded-br-[10px] hover:rounded-tl-[28px] hover:rounded-br-[28px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 border-0 cursor-pointer md:col-span-2 lg:col-span-1"
            >
              <div>
                {/* Header: Title & Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#83be42]/20 flex items-center justify-center text-[#83be42] shadow-sm shrink-0">
                      <FacebookIcon className="w-5 h-5 text-[#83be42]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-white font-display truncate">
                        Facebook Community
                      </h3>
                      <span className="text-[11px] text-[#83be42] font-semibold truncate block">
                        Weekly Rotating Menus
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#83be42]/70 group-hover:text-white transition-colors shrink-0 ml-2" />
                </div>

                {/* Description */}
                <p className="text-xs text-[#e4efe6]/75 mt-1 leading-relaxed">
                  Weekly rotating diet menus, subscription schedule updates, and kitchen announcements.
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#83be42]">
                <span>Official Page &amp; Slots</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
