import { Navbar } from "@/components/layout/Navbar";
import { SideNavBar } from "@/components/layout/SideNavBar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BowlCatalog } from "@/components/bowls/BowlCatalog";
import { SubscriptionTiers } from "@/components/bowls/SubscriptionTiers";
import { OrderLeadForm } from "@/components/forms/OrderLeadForm";
import { DeliveryMapSection } from "@/components/map/DeliveryMapSection";
import { SocialProofSection } from "@/components/social/SocialProofSection";
import { BmiCalculator } from "@/components/calculators/BmiCalculator";
import { Footer } from "@/components/layout/Footer";
import { BottomInfoBar } from "@/components/layout/BottomInfoBar";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { AutoSectionSnapper } from "@/components/common/AutoSectionSnapper";
import { getWhatsAppOrderUrl } from "@/lib/constants";
import {
  MessageCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#081a17] text-[#e4efe6] selection:bg-[#83be42] selection:text-[#081a17] relative overflow-x-hidden">
      {/* Scrollable Floating Pill Navbar with S-Fvour Glass Effect */}
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* ================================================================== */}
        {/* HERO SECTION: CLEAN FIELDER NUTRITION ATMOSPHERE                   */}
        {/* ================================================================== */}
        <section id="hero" data-snap-section="true" className="relative w-full overflow-hidden min-h-[calc(100vh-3.5rem)] flex flex-col justify-center pt-24 sm:pt-28 pb-12">
          {/* Aesthetically Present Dark Culinary Hero Background & Multiplane Parallax */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Primary Cinematic Gourmet Bowl Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80"
              alt="Fresh Gourmet Diet Bowl"
              data-parallax="true"
              data-parallax-speed="0.25"
              data-parallax-scale="1.15"
              suppressHydrationWarning
              className="hero-bowl-img w-full h-[125%] -top-[12%] relative object-cover object-[75%_center] lg:object-[82%_center] filter saturate-[1.2] contrast-[1.08] brightness-[1.02] dark:brightness-[0.98] opacity-100 dark:opacity-95 transition-opacity duration-300"
            />

            {/* Ambient Botanical Radial Glow around the gourmet bowl */}
            <div
              data-parallax="true"
              data-parallax-speed="-0.15"
              suppressHydrationWarning
              className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_75%_45%,rgba(131,190,66,0.2),rgba(8,26,23,0))]"
            />

            {/* Left Typography Contrast Shield: Guarantees 100% crisp readability for headline & CTA buttons */}
            <div className="hero-left-shield absolute inset-0 bg-gradient-to-r from-[#081a17] via-[#081a17]/95 sm:via-[#081a17]/80 to-transparent" />

            {/* Top & Bottom Cinematic Edge Vignettes: Seamless fade into Navbar and next section */}
            <div className="hero-top-vignette absolute inset-0 bg-gradient-to-t from-[#081a17] via-transparent to-[#081a17]/75" />
          </div>

          <div
            data-float
            data-speed="-0.3"
            suppressHydrationWarning
            className="absolute left-6 lg:left-14 bottom-16 pointer-events-none w-16 h-16 rounded-full bg-[#83be42]/10 blur-2xl"
          />

          <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
            <div className="max-w-3xl space-y-5 sm:space-y-6 z-10">
              <h1
                data-reveal-heading
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight"
              >
                <span className="block reveal-line">Fresh Diet</span>
                <span className="block reveal-line">Bowls,</span>
                <span className="block reveal-line text-[#83be42]">Delivered Daily.</span>
              </h1>

              <p
                data-reveal-text
                className="text-sm sm:text-base text-[#e4efe6]/80 max-w-xl leading-relaxed font-sans font-normal"
              >
                High-protein, calorie-counted lunch and dinner bowls made fresh every morning.
                Delivered across Kothrud, Baner, Wakad, Viman Nagar, Hinjewadi, and surrounding Pune areas.
              </p>

              {/* Action Buttons with 3D Tilt and Stagger Reveal */}
              <div data-reveal-group className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#menu"
                  data-reveal-card
                  data-tilt
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-tr-[26px] rounded-bl-[26px] rounded-tl-none rounded-br-none hover:rounded-tl-[26px] hover:rounded-br-[26px] hover:rounded-tr-none hover:rounded-bl-none text-xs sm:text-sm font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] shadow-md shadow-black/40 active:scale-95 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
                >
                  <span>View Menu</span>
                  <div className="w-6 h-6 rounded-full bg-[#081a17] text-[#83be42] flex items-center justify-center text-xs font-black">
                    →
                  </div>
                </a>

                <a
                  href={getWhatsAppOrderUrl("Hello BALANCE DIET Pune! I would like to order a diet bowl.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal-card
                  data-tilt
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 active:bg-white/15 backdrop-blur-md border-0 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#83be42]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Wave Divider 1 */}
        <SectionDivider variant={1} className="-mt-6 sm:-mt-8" />

        {/* Bowls Catalog Section */}
        <BowlCatalog />

        {/* Section Wave Divider 2 */}
        <SectionDivider variant={2} flipX className="-mt-6 sm:-mt-8" />

        {/* Daily & Monthly Subscriptions */}
        <SubscriptionTiers />

        {/* Section Wave Divider 3 */}
        <SectionDivider variant={3} className="-mt-6 sm:-mt-8" />

        {/* Delivery Order Form */}
        <OrderLeadForm />

        {/* Section Wave Divider 4 */}
        <SectionDivider variant={1} flipX className="-mt-6 sm:-mt-8" />

        {/* Pune Delivery Map & Kitchen Hub */}
        <DeliveryMapSection />

        {/* Section Wave Divider 5 */}
        <SectionDivider variant={2} className="-mt-6 sm:-mt-8" />

        {/* BMI & Calorie Calculator */}
        <section id="bmi-calculator" data-snap-section="true" className="relative w-full overflow-hidden py-20 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-24 lg:px-8 xl:px-10">
          {/* Section Background Landscape Image & Dual Gradient Mask with Parallax */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=70"
              alt=""
              loading="lazy"
              data-parallax="true"
              data-parallax-speed="0.25"
              data-parallax-scale="1.12"
              suppressHydrationWarning
              className="w-full h-[125%] -top-[12%] relative object-cover object-center filter saturate-[0.85] contrast-[1.1] opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#081a17] via-[#081a17]/85 to-[#081a17]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081a17]/95 via-[#081a17]/50 to-[#081a17]/95" />
          </div>

          {/* Floating Atmospheric Parallax Elements */}
          <div
            data-float
            data-speed="0.35"
            suppressHydrationWarning
            className="hidden md:block absolute right-12 top-20 pointer-events-none w-20 h-20 rounded-full bg-[#83be42]/10 blur-xl"
          />
          <div
            data-float
            data-speed="-0.25"
            suppressHydrationWarning
            className="hidden md:block absolute left-10 bottom-24 pointer-events-none w-14 h-14 rounded-full bg-[#83be42]/15 blur-lg"
          />

          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2
                data-reveal-heading
                className="text-3xl sm:text-4xl font-extrabold text-white font-display"
              >
                Calculate Your BMI &amp; Calorie Target
              </h2>
              <p data-reveal-text className="text-xs sm:text-sm text-[#e4efe6]/75 mt-2">
                Based on Indian Council of Medical Research (ICMR) health guidelines.
              </p>
            </div>
            <BmiCalculator />
          </div>
        </section>

        {/* Section Wave Divider 6 */}
        <SectionDivider variant={3} flipX className="-mt-6 sm:-mt-8" />

        {/* Panoramic Social Proof Ribbon */}
        <SocialProofSection />
      </main>

      {/* Automatic Idle Section Alignment Snapper (3-second timer) */}
      <AutoSectionSnapper />

      {/* Floating Side Capsule Navigation */}
      <SideNavBar />

      {/* Interactive Cart / Diet Bag Drawer */}
      <CartDrawer />

      {/* Footer with NRAVIXA Credits */}
      <Footer />

      {/* Fixed Bottom Info & Announcement Bar (Goes with scroll like s-fvour.vercel.app) */}
      <BottomInfoBar />
    </div>
  );
}
