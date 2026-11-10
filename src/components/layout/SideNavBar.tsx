"use client";

import { useState, useEffect } from "react";
import { BRAND_CONFIG, getWhatsAppOrderUrl } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import {
  CalendarCheck,
  Calendar,
  ShoppingBag,
  Phone,
  MapPin,
  ArrowUp,
  MessageCircle,
  Utensils,
} from "lucide-react";

export function SideNavBar() {
  const { totalCount, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setShowScrollTop(rect.bottom < 120);
      } else {
        setShowScrollTop(window.scrollY > 400);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Quick Action Side Navigation"
      className="hidden sm:block fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
    >
      {/* Main Floating Botanical Leaf Dock */}
      <div
        className="bg-gradient-to-b from-[#0f302a]/95 via-[#143e37]/95 to-[#0f302a]/95 text-[#e4efe6] backdrop-blur-2xl rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[12px] rounded-br-[12px] hover:rounded-tl-[36px] hover:rounded-br-[36px] hover:rounded-tr-[12px] hover:rounded-bl-[12px] p-2 sm:p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)] border-0 flex flex-col items-center gap-2 sm:gap-2.5 transition-all duration-500 select-none max-h-[85vh] overflow-y-auto no-scrollbar w-[54px] sm:w-[58px]"
      >
        {/* 1. WhatsApp Booking */}
        <a
          href={getWhatsAppOrderUrl("Hello BALANCE DIET Pune! 🥗 I would like to book a fresh diet bowl delivery.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
          title="WhatsApp Booking"
        >
          <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[5px] rounded-br-[5px] group-hover:rounded-tl-[14px] group-hover:rounded-br-[14px] group-hover:rounded-tr-[5px] group-hover:rounded-bl-[5px] bg-[#83be42] text-[#081a17] flex items-center justify-center shadow-sm transition-all duration-300">
            <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
            {/* Green Online Badge */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#83be42] rounded-full ring-2 ring-[#081a17] shadow-sm animate-pulse" />
          </div>
          <span className="text-[8.5px] sm:text-[9px] font-bold text-[#83be42] tracking-tighter mt-0.5 leading-[1.05] max-w-[50px]">
            WhatsApp Booking
          </span>
        </a>

        {/* 2. Bowls Menu */}
        <button
          type="button"
          onClick={() => scrollToSection("menu")}
          className="group flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
          title="Browse Bowls Menu"
        >
          <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-[#83be42] group-hover:text-white">
            <Utensils className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
          <span className="text-[8.5px] sm:text-[9px] font-bold text-[#e4efe6] tracking-tighter mt-0.5 leading-[1.05] max-w-[50px]">
            Bowls Menu
          </span>
        </button>

        {/* 3. Online Booking */}
        <button
          type="button"
          onClick={() => scrollToSection("order-form")}
          className="group flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
          title="Online Order Booking"
        >
          <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-[#83be42] group-hover:text-white">
            <CalendarCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
          <span className="text-[8.5px] sm:text-[9px] font-bold text-[#e4efe6] tracking-tighter mt-0.5 leading-[1.05] max-w-[50px]">
            Online Booking
          </span>
        </button>

        {/* 3. Kitchen Hours */}
        <button
          type="button"
          onClick={() => scrollToSection("delivery-map")}
          className="group flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
          title="Kitchen & Delivery Hours"
        >
          <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-[#83be42] group-hover:text-white">
            <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
          <span className="text-[8.5px] sm:text-[9px] font-bold text-[#e4efe6] tracking-tighter mt-0.5 leading-[1.05] max-w-[50px]">
            Kitchen Hours
          </span>
        </button>

        {/* 4. Diet Bag */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="group flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer relative"
          title="View Your Diet Bag"
        >
          <div className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 flex items-center justify-center text-[#83be42] group-hover:text-white">
            <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2]" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#83be42] text-[#081a17] text-[8px] font-extrabold flex items-center justify-center shadow-sm">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[8.5px] sm:text-[9px] font-bold text-[#e4efe6] tracking-tighter mt-0.5 leading-[1.05] max-w-[50px]">
            Diet Bag
          </span>
        </button>

        {/* Divider */}
        <div className="w-6 h-[1px] bg-[rgba(131,190,66,0.2)] my-0.5" />

        {/* Compact Botanical Leaf Action Buttons */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Instagram Leaf Button */}
          <a
            href={BRAND_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[12px] hover:rounded-br-[12px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-[#83be42] text-[#081a17] hover:bg-[#6caa3f] flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>

          {/* Phone Call Leaf Button */}
          <a
            href={`tel:${BRAND_CONFIG.phone}`}
            aria-label="Call +91 9637173122"
            className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[12px] hover:rounded-br-[12px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-[#83be42] text-[#081a17] hover:bg-[#6caa3f] flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Location Pin Leaf Button */}
          <button
            type="button"
            onClick={() => scrollToSection("delivery-map")}
            aria-label="View Pune Delivery Map"
            className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] hover:rounded-tl-[12px] hover:rounded-br-[12px] hover:rounded-tr-[4px] hover:rounded-bl-[4px] bg-[#83be42] text-[#081a17] hover:bg-[#6caa3f] flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>

          {/* Scroll To Top Leaf Button (Hidden when inside hero section) */}
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[3px] rounded-br-[3px] hover:rounded-tl-[10px] hover:rounded-br-[10px] hover:rounded-tr-[3px] hover:rounded-bl-[3px] bg-[#83be42]/20 text-[#83be42] hover:bg-[#83be42] hover:text-[#081a17] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-fadeIn"
              title="Back to Top"
            >
              <ArrowUp className="w-3 h-3 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
