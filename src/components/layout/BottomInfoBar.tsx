"use client";

import { BRAND_CONFIG, getWhatsAppOrderUrl } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { Phone, MessageCircle, MapPin, Clock, Utensils, ShoppingBag } from "lucide-react";

export function BottomInfoBar() {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <>
      {/* ================================================================== */}
      {/* DESKTOP & TABLET: FIELDER NUTRITION BOTTOM INFO STRIP (SINGLE LINE) */}
      {/* ================================================================== */}
      <div className="bottom-info-bar fixed bottom-0 left-0 right-0 z-40 hidden sm:block bg-[#081a17]/95 backdrop-blur-xl border-0 py-2 px-4 lg:px-6 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#e4efe6] gap-4 whitespace-nowrap overflow-x-auto no-scrollbar">
          {/* Left Group */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0 whitespace-nowrap">
            <span className="flex items-center gap-2 font-semibold text-white whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83be42] animate-pulse shrink-0"></span>
              Pune&#x27;s Premier Clean-Eating Diet Bowls
            </span>
            <span className="text-[#83be42]/40 shrink-0">•</span>
            <a
              href={BRAND_CONFIG.socials.googlePresence}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#e4efe6]/85 hover:text-[#83be42] transition-colors cursor-pointer group font-medium whitespace-nowrap shrink-0"
              title="Open Google Maps location for Balance Diet Pune"
            >
              <MapPin className="w-3.5 h-3.5 text-[#83be42] group-hover:scale-110 transition-transform shrink-0" />
              <span className="hover:underline whitespace-nowrap">Shivsagar City, Sun City Rd, Anand Nagar, Pune</span>
            </a>
          </div>

          {/* Right Group */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-[#e4efe6]/80 whitespace-nowrap shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#83be42] shrink-0" />
              Lunch: 12–1:30 PM | Dinner: 7:30–9 PM
            </span>
            <span className="text-[#83be42]/40 shrink-0">•</span>
            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-white hover:text-[#83be42] transition-colors font-semibold whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#83be42] shrink-0" />
              {BRAND_CONFIG.phone}
            </a>
            <span className="text-[#83be42]/40 shrink-0">•</span>
            <a
              href={BRAND_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#83be42] hover:underline font-bold whitespace-nowrap shrink-0"
            >
              <InstagramIcon className="w-3.5 h-3.5 shrink-0" />
              @balance.diet.pune
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* MOBILE: S-FVOUR 5-BUTTON DOCK IN FIELDER NUTRITION COLORS          */}
      {/* ================================================================== */}
      <div className="mobile-nav-bar fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#081a17]/95 backdrop-blur-xl border-0 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl">
        <div className="grid grid-cols-5 gap-1.5 text-center">
          {/* 1. Call Now */}
          <a
            href={`tel:${BRAND_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-1.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-white/5 border-0 text-white active:bg-white/15 transition-all"
          >
            <Phone className="w-4 h-4 text-[#83be42]" />
            <span className="text-[10px] font-medium text-[#e4efe6] mt-0.5">Call Now</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={getWhatsAppOrderUrl("Hello BALANCE DIET Pune! 🥗 I would like to order a fresh diet bowl.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-[#83be42]/15 border-0 text-[#83be42] active:bg-[#83be42]/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-[#83be42]" />
            <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
          </a>

          {/* 3. Bowls Menu */}
          <a
            href="#menu"
            className="flex flex-col items-center justify-center py-1.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-white/5 border-0 text-white active:bg-white/15 transition-all"
          >
            <Utensils className="w-4 h-4 text-[#83be42]" />
            <span className="text-[10px] font-medium text-[#e4efe6] mt-0.5">Menu</span>
          </a>

          {/* 4. Diet Bag */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center justify-center py-1.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-white/5 border-0 text-white active:bg-white/15 relative cursor-pointer transition-all"
            aria-label="Open Diet Bag"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-[#83be42]" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-[#83be42] text-[#081a17] text-[8px] font-black flex items-center justify-center shadow-sm">
                  {totalCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-[#e4efe6] mt-0.5">Bag</span>
          </button>

          {/* 5. Order Slot */}
          <a
            href="#order-form"
            className="flex flex-col items-center justify-center py-1.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] font-extrabold active:scale-95 transition-all"
          >
            <Clock className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Order</span>
          </a>
        </div>
      </div>
    </>
  );
}
