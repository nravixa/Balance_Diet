"use client";

import { useState, useEffect } from "react";
import { BRAND_CONFIG, getWhatsAppOrderUrl } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  Phone,
  Menu,
  X,
  ShoppingBag,
  MessageCircle,
  MapPin,
  Clock,
  Utensils,
  CalendarCheck,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

const NAV_LINKS = [
  { id: "hero", label: "Home", href: "#hero", icon: ArrowRight },
  { id: "menu", label: "Bowls Menu", href: "#menu", icon: Utensils },
  { id: "subscriptions", label: "Subscriptions", href: "#subscriptions", icon: CalendarCheck },
  { id: "order-form", label: "Order Form", href: "#order-form", icon: ArrowRight },
  { id: "delivery-map", label: "Delivery Map", href: "#delivery-map", icon: MapPin },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      const footerEl = document.getElementById("footer");
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        setInFooter(rect.top < window.innerHeight - 60);
      }

      const sections = NAV_LINKS.map((l) => ({
        id: l.id,
        el: document.getElementById(l.id),
      }));

      const scrollPos = scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && scrollPos >= sec.el.offsetTop) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
      <header className="pointer-events-auto max-w-7xl mx-auto transition-all duration-300 relative flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4 py-2 bg-transparent border-0 shadow-none">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="BALANCE DIET - Home"
          className={`flex items-center group shrink-0 select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inFooter
              ? "opacity-0 -translate-x-8 pointer-events-none scale-90"
              : "opacity-100 translate-x-0 pointer-events-auto scale-100 hover:scale-105"
          }`}
        >
          <BrandLogo />
        </a>

        {/* Center: Botanical Leaf Floating Nav Track (Desktop Only) */}
        <div
          className={`hidden lg:flex items-center gap-1 nav-track p-1.5 shadow-sm backdrop-blur-xl transition-all duration-500 border-0 rounded-tr-[30px] rounded-bl-[30px] rounded-tl-[10px] rounded-br-[10px] hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:rounded-tr-[10px] hover:rounded-bl-[10px] ${
            isScrolled
              ? "bg-gradient-to-r from-[#0f302a]/95 via-[#143e37]/95 to-[#0f302a]/95 shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
              : "bg-[#0f302a]/80 shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
          }`}
        >
          <nav className="flex items-center gap-1 text-xs font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "nav-active bg-[#83be42] text-[#081a17] font-bold shadow-sm rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none"
                      : "text-[#e4efe6]/85 hover:text-white hover:bg-white/[0.08] rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Actions: Desktop & Tablet */}
        <div
          className={`hidden sm:flex items-center gap-2 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inFooter
              ? "opacity-0 translate-x-8 pointer-events-none scale-90"
              : "opacity-100 translate-x-0 pointer-events-auto scale-100"
          }`}
        >
          {/* Dual Segmented Dark / Bright Mode Toggle Button */}
          <div
            className="theme-mode-toggle flex items-center p-0.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[6px] rounded-br-[6px] bg-white/[0.08] hover:bg-white/12 border-0 shadow-sm backdrop-blur-md transition-all duration-300"
            role="group"
            aria-label="Theme mode selector"
            suppressHydrationWarning
          >
            <button
              type="button"
              onClick={() => setTheme("light")}
              aria-label="Switch to bright mode"
              title="Switch to Bright Mode"
              suppressHydrationWarning
              className={`h-8 sm:h-9 px-2 sm:px-2.5 rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[4px] rounded-br-[4px] flex items-center gap-1.5 text-xs transition-all duration-300 cursor-pointer ${
                theme === "light"
                  ? "bg-[#83be42] text-[#081a17] font-bold shadow-sm scale-[1.02]"
                  : "text-[#e4efe6]/85 hover:text-white hover:bg-white/10"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[11px] font-semibold">Bright</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-label="Switch to dark mode"
              title="Switch to Dark Mode"
              suppressHydrationWarning
              className={`h-8 sm:h-9 px-2 sm:px-2.5 rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[4px] rounded-br-[4px] flex items-center gap-1.5 text-xs transition-all duration-300 cursor-pointer ${
                theme === "dark"
                  ? "bg-[#83be42] text-[#081a17] font-bold shadow-sm scale-[1.02]"
                  : "text-[#0c2621] dark:text-[#e4efe6]/85 font-bold hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[11px] font-bold">Dark</span>
            </button>
          </div>

          {/* Leaf Drop Glass Call Icon Button */}
          <a
            href={`tel:${BRAND_CONFIG.phone}`}
            aria-label="Call +91 9637173122"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[6px] rounded-br-[6px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[6px] hover:rounded-bl-[6px] bg-white/[0.08] hover:bg-white/15 border-0 flex items-center justify-center text-white hover:text-[#83be42] shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
            title="Call Pune Helpline"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Quick Diet Bag Button for Tablet (lg:hidden) */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Diet Bag"
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[6px] rounded-br-[6px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[6px] hover:rounded-bl-[6px] bg-black/5 dark:bg-white/[0.08] hover:bg-black/10 dark:hover:bg-white/15 border-0 flex items-center justify-center text-[#081a17] dark:text-white hover:text-[#83be42] shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md relative cursor-pointer"
            title="View Diet Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#83be42]" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#83be42] text-[#081a17] text-[9px] font-black flex items-center justify-center shadow-md">
                {totalCount}
              </span>
            )}
          </button>

          {/* Tablet Menu Drawer Toggle Button (Visible between sm and lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden h-9 sm:h-10 px-3 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[6px] rounded-br-[6px] hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-[6px] hover:rounded-bl-[6px] flex items-center gap-1.5 text-xs font-bold bg-[#83be42]/20 hover:bg-[#83be42]/30 active:bg-[#83be42]/35 text-[#081a17] dark:text-[#83be42] border-0 transition-all shadow-sm cursor-pointer backdrop-blur-md"
            title="Open Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#081a17] dark:text-[#83be42]" />
            ) : (
              <Menu className="w-4 h-4 text-[#081a17] dark:text-[#83be42]" />
            )}
            <span className="text-[11px] font-bold text-[#081a17] dark:text-[#83be42]">Menu</span>
          </button>

          {/* Fielder Nutrition Leaf Button Design */}
          <a
            href={getWhatsAppOrderUrl("Hello BALANCE DIET! 🥗 I would like to order a fresh diet bowl.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-4.5 py-2 rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] font-bold text-xs items-center gap-2 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Order a Diet Bowl</span>
            <div className="w-4 h-4 rounded-full bg-[#081a17] text-[#83be42] flex items-center justify-center text-[10px] font-black">
              →
            </div>
          </a>
        </div>

        {/* Mobile Header Quick Actions */}
        <div
          className={`flex sm:hidden items-center gap-2 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inFooter
              ? "opacity-0 translate-x-6 pointer-events-none scale-90"
              : "opacity-100 translate-x-0 pointer-events-auto scale-100"
          }`}
        >
          {/* Quick Theme Toggle Button (Mobile) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to Bright Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Bright Mode" : "Dark Mode"}
            suppressHydrationWarning
            className="w-9 h-9 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 active:bg-black/15 dark:active:bg-white/20 backdrop-blur-md border-0 text-[#83be42] transition-all shadow-sm cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#83be42]" />
            ) : (
              <Moon className="w-4 h-4 text-[#081a17]" />
            )}
          </button>

          {/* Quick Cart Bag Button with Live Counter */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Diet Bag"
            className="w-9 h-9 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 active:bg-black/15 dark:active:bg-white/20 backdrop-blur-md border-0 text-[#081a17] dark:text-white transition-all shadow-sm relative cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#83be42]" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#83be42] text-[#081a17] text-[9px] font-black flex items-center justify-center shadow-md">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] flex items-center justify-center text-[#081a17] dark:text-white bg-[#83be42]/20 dark:bg-white/10 hover:bg-[#83be42]/30 dark:hover:bg-white/15 active:bg-[#83be42]/35 dark:active:bg-white/20 backdrop-blur-md border-0 transition-all shadow-sm cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#081a17] dark:text-[#83be42]" />
            ) : (
              <Menu className="w-4 h-4 text-[#081a17] dark:text-[#83be42]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer (Elevated Frosted Glass Sheet) */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer pointer-events-auto lg:hidden max-w-7xl mx-auto mt-2 p-4 sm:p-5 rounded-tr-[32px] rounded-bl-[32px] rounded-tl-xl rounded-br-xl bg-[#081a17]/95 backdrop-blur-2xl border-0 shadow-2xl space-y-4 animate-fadeIn">
          {/* Kitchen Hub Status */}
          <div className="flex items-center justify-between text-[11px] text-[#e4efe6] pb-2 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#83be42] animate-pulse" />
              <span className="font-semibold text-white">Central Kitchen Open</span>
            </span>
            <span className="text-[#83be42]">Lunch &amp; Dinner Slots</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 text-xs font-medium">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="p-3 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:bg-white/10 active:bg-white/15 text-white flex items-center justify-between transition-colors border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#83be42]" />
                    <span className="font-semibold">{link.label}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                </a>
              );
            })}
          </nav>

          {/* Operational Hours & Area Note */}
          <div className="p-3 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none bg-white/5 border-0 text-[11px] space-y-1 text-[#e4efe6]">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#83be42]" />
              <span>Lunch 12–1:30 PM • Dinner 7:30–9 PM</span>
            </div>
            <div className="flex items-center gap-2 text-[#e4efe6]/80">
              <MapPin className="w-3.5 h-3.5 text-[#83be42]" />
              <span>Sun City Road, Anand Nagar, Pune - 411051</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="flex items-center justify-center gap-1.5 py-3 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-bold bg-white/10 hover:bg-white/15 text-white border-0 active:scale-95 transition-all text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#83be42]" />
              <span>Call Helpline</span>
            </a>
            <a
              href={getWhatsAppOrderUrl("Hello BALANCE DIET Pune! 🥗 I want to order a fresh diet bowl.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] shadow-md shadow-black/30 active:scale-95 transition-all text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#081a17]" />
              <span>Order WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
