import { BRAND_CONFIG } from "@/lib/constants";
import { MapPin, Clock, ShieldCheck, ExternalLink, Phone, Sun, Moon } from "lucide-react";

export function DeliveryMapSection() {
  return (
    <section id="delivery-map" data-snap-section="true" className="relative w-full overflow-hidden py-8 sm:py-10 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-24 lg:px-8 xl:px-10 min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      {/* Section Background Landscape Image & Dual Gradient Mask with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=85"
          alt=""
          data-parallax="true"
          data-parallax-speed="0.26"
          data-parallax-scale="1.12"
          suppressHydrationWarning
          className="w-full h-[125%] -top-[12%] relative object-cover object-center filter saturate-[0.85] contrast-[1.1] opacity-30"
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

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div
          data-reveal-card
          data-tilt
          className="glass-panel rounded-tr-[42px] rounded-bl-[42px] rounded-tl-[16px] rounded-br-[16px] hover:rounded-tl-[42px] hover:rounded-br-[42px] hover:rounded-tr-[16px] hover:rounded-bl-[16px] p-5 sm:p-7 md:p-8 border-0 shadow-2xl overflow-hidden transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Details */}
            <div data-scrub-y="-10" className="lg:col-span-5 space-y-4">
              <div>
                <h2
                  data-reveal-heading
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display leading-[1.15]"
                >
                  Doorstep Delivery <span className="text-[#83be42]">Across Pune</span>
                </h2>
                <p data-reveal-text className="text-xs sm:text-sm text-[#e4efe6]/80 mt-2 leading-relaxed">
                  Fresh diet bowls prepped daily and delivered across Kothrud, Baner, Wakad, Hinjewadi, Viman Nagar, Kalyani Nagar, and surrounding Pune hubs in custom insulated thermal packaging.
                </p>
              </div>

              {/* Delivery Windows Card */}
              <div
                data-reveal-card
                data-tilt
                className="glass-strip rounded-tr-[24px] rounded-bl-[24px] rounded-tl-[8px] rounded-br-[8px] p-3.5 sm:p-4 space-y-2.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#83be42]" />
                    <span className="font-bold">Daily Delivery Windows</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#83be42] font-semibold bg-[#83be42]/15 px-2 py-0.5 rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[3px] rounded-br-[3px] border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83be42] animate-pulse" />
                    Dispatches Daily
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="bg-[#081a17]/70 p-2.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] border-0">
                    <span className="text-[#83be42] font-bold text-[11px] flex items-center gap-1.5 mb-0.5">
                      <Sun className="w-3.5 h-3.5 text-[#83be42]" />
                      <span>Lunch Slot</span>
                    </span>
                    <span className="text-white font-extrabold text-xs block">12:00 – 1:30 PM</span>
                    <span className="text-[10px] text-[#e4efe6]/60 block mt-0.5">Office &amp; Home</span>
                  </div>

                  <div className="bg-[#081a17]/70 p-2.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] border-0">
                    <span className="text-[#83be42] font-bold text-[11px] flex items-center gap-1.5 mb-0.5">
                      <Moon className="w-3.5 h-3.5 text-[#83be42]" />
                      <span>Dinner Slot</span>
                    </span>
                    <span className="text-white font-extrabold text-xs block">7:30 – 9:00 PM</span>
                    <span className="text-[10px] text-[#e4efe6]/60 block mt-0.5">Evening Fuel</span>
                  </div>
                </div>
              </div>

              {/* Delivery Guarantees */}
              <div data-reveal-group className="grid grid-cols-2 gap-2 text-xs">
                <div
                  data-reveal-card
                  data-tilt
                  className="glass-strip rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] px-3 py-2 flex items-center gap-2 border-0"
                >
                  <span className="w-4 h-4 rounded-full bg-[#83be42]/20 text-[#83be42] flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-[11px] font-medium text-[#e4efe6]">Insulated thermal bags</span>
                </div>

                <div
                  data-reveal-card
                  data-tilt
                  className="glass-strip rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] px-3 py-2 flex items-center gap-2 border-0"
                >
                  <span className="w-4 h-4 rounded-full bg-[#83be42]/20 text-[#83be42] flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-[11px] font-medium text-[#e4efe6]">Free delivery in Pune</span>
                </div>
              </div>

              {/* Action Buttons with Leaf Design */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href={BRAND_CONFIG.socials.googlePresence}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Business Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`tel:${BRAND_CONFIG.phone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:text-[#83be42] bg-white/[0.06] hover:bg-white/10 border-0 transition-all cursor-pointer"
                >
                  <Phone className="w-3 h-3 text-[#83be42]" />
                  <span>+91 9637173122</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed */}
            <div
              data-scrub-y="10"
              data-reveal-card
              data-tilt
              className="lg:col-span-7 h-64 sm:h-72 lg:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border-0 shadow-2xl relative bg-[#081a17]"
            >
              <iframe
                src={BRAND_CONFIG.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BALANCE DIET Pune Delivery Map"
                className="w-full h-full"
              />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#081a17]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border-0 flex items-center justify-between text-xs text-[#e4efe6]">
                <div className="flex items-center gap-2 min-w-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#83be42] shrink-0" />
                  <span className="truncate text-[10px] sm:text-[11px] font-medium">
                    Kitchen Hub: Shivsagar City, Sun City Rd, Anand Nagar, Pune
                  </span>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#83be42] text-[11px] shrink-0 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#83be42] animate-pulse" />
                  Pune, MH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
