import { BRAND_CONFIG } from "@/lib/constants";
import { BrandLogoMark } from "@/components/ui/BrandLogo";
import { MapPin, Phone, MessageCircle, ExternalLink, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden select-none pb-16 sm:pb-14 md:pb-8"
    >
      {/* ================================================================== */}
      {/* 1. MISTY SAHYADRI LANDSCAPE BACKDROP & CELESTIAL SUN GLOW          */}
      {/* ================================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/warli-landscape-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.04]"
        />
        {/* Living Morning Sun Radiant Glow */}
        <div
          aria-hidden="true"
          className="absolute left-[34%] top-[57%] -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(254,215,170,0.6)_0%,rgba(245,158,11,0.2)_45%,transparent_75%)] anim-warli-sun-glow pointer-events-none blur-xl"
        />
      </div>

      {/* Living Soaring Bird Flock across the Mountain Valley (Unclipped Open Sky) */}
      <div
        className="absolute left-[44%] sm:left-[48%] top-[38%] sm:top-[42%] pointer-events-none select-none z-5 anim-warli-birds"
        aria-hidden="true"
      >
        <svg
          className="w-16 sm:w-22 h-8 sm:h-11 text-[#143e37]/80"
          viewBox="0 0 100 50"
          fill="currentColor"
        >
          <path
            d="M5 25 Q 15 15 25 22 Q 35 15 45 25 Q 35 20 25 24 Q 15 20 5 25 Z"
            opacity="0.85"
          />
          <path
            d="M35 15 Q 43 7 51 13 Q 59 7 67 15 Q 59 11 51 14 Q 43 11 35 15 Z"
            opacity="0.75"
            transform="scale(0.85) translate(10, -5)"
          />
          <path
            d="M55 22 Q 62 16 69 21 Q 76 16 83 22 Q 76 19 69 21 Q 62 19 55 22 Z"
            opacity="0.65"
            transform="scale(0.7) translate(30, 8)"
          />
        </svg>
      </div>

      {/* ================================================================== */}
      {/* 2. TOP TIER: EDITORIAL NAVIGATION (3 BALANCED COLUMNS)            */}
      {/* ================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 pt-6 sm:pt-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-2 md:order-1 lg:order-1 lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <BrandLogoMark className="w-8 h-8 text-white flex-shrink-0 drop-shadow-[0_2px_10px_rgba(5,18,16,0.7)]" />
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-[0.22em] uppercase text-white font-sans block leading-tight [text-shadow:0_2px_10px_rgba(5,18,16,0.7)]">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-white font-bold block [text-shadow:0_1px_6px_rgba(5,18,16,0.7)]">
                  PORTION • NUTRITION • PUNE
                </span>
              </div>
            </div>

            <p className="text-xs text-white font-medium leading-relaxed max-w-sm [text-shadow:0_1px_6px_rgba(5,18,16,0.65)]">
              Fresh, portion-controlled diet bowls prepped daily in Pune with
              whole grains, vegetables, and lean proteins.
            </p>

            {/* Circular Emerald Social Action Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#143e37] text-white hover:bg-[#0f302a] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#143e37] text-white hover:bg-[#0f302a] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRAND_CONFIG.socials.googlePresence}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Presence"
                className="w-8 h-8 rounded-full bg-[#143e37] text-white hover:bg-[#0f302a] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#143e37] text-white hover:bg-[#0f302a] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:order-3 lg:order-2 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#143e37]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#1e3a38]/85 font-medium">
              <li>
                <a href="#menu" className="hover:text-black transition-colors">
                  Diet Bowls Menu
                </a>
              </li>
              <li>
                <a href="#subscriptions" className="hover:text-black transition-colors">
                  Subscriptions
                </a>
              </li>
              <li>
                <a href="#order-form" className="hover:text-black transition-colors">
                  Order Form
                </a>
              </li>
              <li>
                <a href="#delivery-map" className="hover:text-black transition-colors">
                  Delivery Coverage
                </a>
              </li>
            </ul>
          </div>

          {/* Local Operations */}
          <div className="md:col-span-1 md:order-2 lg:order-3 lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#143e37]">
              Local Operations
            </h4>
            <div className="space-y-2 text-xs text-[#1e3a38]/85 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#143e37] shrink-0 mt-0.5" />
                <span>
                  {BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city} - {BRAND_CONFIG.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#143e37] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="hover:text-black">
                  {BRAND_CONFIG.phone} • Helpline
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#143e37] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  WhatsApp: +91 9637173122
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1e3a38]/85 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#143e37] shrink-0" />
                <span>Lunch: 12–1:30 PM | Dinner: 7:30–9 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 3. LIVING WARLI FOLK ART ANIMATION STAGE ("LIVING MOVIE")          */}
      {/* ================================================================== */}
      <div className="relative w-full z-10 pointer-events-none select-none mt-auto">
        <div className="relative w-full h-[210px] sm:h-[250px] md:h-[300px] overflow-hidden">
          {/* A. Stationary Tribal Geometric Ground Border */}
          <div
            className="absolute inset-x-0 bottom-0 h-[35px] bg-repeat-x bg-bottom"
            style={{ backgroundImage: "url('/warli/border.png')" }}
          />

          {/* B. Stationary Village Life Elements */}
          {/* Left Bush */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/warli/leftBush.png"
            alt=""
            className="absolute left-[1%] bottom-[29px] h-10 sm:h-12 object-contain"
          />

          {/* Left Village Celebration Dancers */}
          <div className="absolute left-[4%] sm:left-[5%] bottom-[29px] anim-warli-left-dancers">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/warli/leftDancers.png"
              alt=""
              className="h-14 sm:h-18 object-contain"
            />
          </div>

          {/* Village Hut with Curling Hearth Smoke */}
          <div className="absolute left-[11%] sm:left-[13%] bottom-[29px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/warli/hut.png"
              alt=""
              className="h-18 sm:h-24 object-contain"
            />
            {/* Hearth Smoke curling from thatched roof */}
            <div className="absolute left-[56%] top-2">
              <div className="anim-warli-smoke-1 w-2 h-2 rounded-full bg-white/40 blur-[1px]" />
              <div className="anim-warli-smoke-2 w-2.5 h-2.5 rounded-full bg-white/35 blur-[1px]" />
            </div>
          </div>

          {/* Stationary Harvest Crops (Wheat/Bajra) with wind sway */}
          <div className="absolute left-[50%] sm:left-[53%] bottom-[29px] anim-warli-crops">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/warli/crops.png"
              alt=""
              className="h-12 sm:h-16 object-contain"
            />
          </div>

          {/* Stationary Mid Bush */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/warli/midBush.png"
            alt=""
            className="absolute left-[68%] sm:left-[70%] bottom-[29px] h-12 sm:h-15 object-contain"
          />

          {/* Stationary Celebration Dancers with rhythmic sway */}
          <div className="absolute left-[75%] sm:left-[78%] bottom-[29px] anim-warli-dancers">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/warli/dancers.png"
              alt=""
              className="h-16 sm:h-20 object-contain"
            />
          </div>

          {/* C. Living Characters Walking Across the Village Road! */}
          {/* 1. Sacred Bullock trotting along the path */}
          <div className="absolute left-0 bottom-[29px] anim-warli-bullock">
            <div className="anim-warli-bullock-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/bullock.png"
                alt=""
                className="h-18 sm:h-22 object-contain"
              />
            </div>
          </div>

          {/* 2. Water Bearer (Woman with Pot on head) walking */}
          <div className="absolute left-0 bottom-[29px] anim-warli-woman">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/waterWoman.png"
                alt=""
                className="h-20 sm:h-24 object-contain"
              />
            </div>
          </div>

          {/* 3. Procession Villager 1 (staff/stick) */}
          <div className="absolute left-0 bottom-[29px] anim-warli-walker1">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/walker1.png"
                alt=""
                className="h-14 sm:h-17 object-contain"
              />
            </div>
          </div>

          {/* 4. Procession Villager 2 (basket) */}
          <div className="absolute left-0 bottom-[29px] anim-warli-walker2">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/walker2.png"
                alt=""
                className="h-14 sm:h-17 object-contain"
              />
            </div>
          </div>

          {/* 5. Family and Child Walking */}
          <div className="absolute left-0 bottom-[29px] anim-warli-family">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/childFamily.png"
                alt=""
                className="h-15 sm:h-18 object-contain"
              />
            </div>
          </div>

          {/* 6. Procession Villager 3 (offering) */}
          <div className="absolute left-0 bottom-[29px] anim-warli-walker3">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/walker3.png"
                alt=""
                className="h-14 sm:h-17 object-contain"
              />
            </div>
          </div>

          {/* 7. Temple Procession Walkers */}
          <div className="absolute left-0 bottom-[29px] anim-warli-temple-walkers">
            <div className="anim-warli-walk-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/warli/templeWalkers.png"
                alt=""
                className="h-20 sm:h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 4. DEFAULT BOTTOM BAR DESIGN ON SAME POSITION                      */}
      {/* ================================================================== */}
      <div className="relative z-10 bg-[#051210]/95 text-[#e4efe6] px-4 sm:px-6 py-3 border-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#e4efe6]/70">
          <p>© 2026 {BRAND_CONFIG.name}. All rights reserved.</p>

          {/* DEFAULT NRAVIXA Presence Leaf Badge */}
          <a
            href={BRAND_CONFIG.agency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-4 py-1.5 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] hover:bg-[#6caa3f] border-0 text-[#081a17] font-semibold text-xs transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Designed &amp; Engineered with</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nravixa-cat.png"
              alt="Cat"
              className="w-5 h-5 object-contain inline-block shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
            />
            <span>by</span>
            <span className="font-extrabold text-[#081a17] underline decoration-[#081a17] transition-colors inline-flex items-center gap-1">
              <span>{BRAND_CONFIG.agency.name}</span>
              <ExternalLink className="w-2.5 h-2.5 stroke-[2.5]" />
            </span>
          </a>

          <p className="text-[11px] text-[#e4efe6]/50 text-center md:text-right">
            Handcrafted daily in Pune. Doorstep delivery only.
          </p>
        </div>
      </div>
    </footer>
  );
}
