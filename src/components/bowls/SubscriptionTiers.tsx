"use client";

import { useState } from "react";
import { SUBSCRIPTION_PLANS, BRAND_CONFIG } from "@/lib/constants";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";

export function SubscriptionTiers() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("workweek-6days");

  const currentPlan =
    SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[1];

  return (
    <section id="subscriptions" data-snap-section="true" className="relative w-full overflow-hidden py-10 sm:py-14 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-24 lg:px-8 xl:px-10 min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      {/* Section Background Landscape Image & Dual Gradient Mask with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=85"
          alt=""
          data-parallax="true"
          data-parallax-speed="0.28"
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
        data-speed="0.45"
        suppressHydrationWarning
        className="hidden md:block absolute right-12 top-24 pointer-events-none w-20 h-20 rounded-full bg-[#83be42]/10 blur-xl"
      />
      <div
        data-float
        data-speed="-0.3"
        suppressHydrationWarning
        className="hidden md:block absolute left-8 bottom-16 pointer-events-none w-16 h-16 rounded-full bg-[#83be42]/15 blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            data-reveal-heading
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            Meal <span className="text-[#83be42]">Subscriptions</span>
          </h2>
        </div>

        {/* Unified Frosted Glass Subscription Dashboard */}
        <div
          data-reveal-card
          data-tilt
          className="glass-panel rounded-tr-[42px] rounded-bl-[42px] rounded-tl-[16px] rounded-br-[16px] hover:rounded-tl-[42px] hover:rounded-br-[42px] hover:rounded-tr-[16px] hover:rounded-bl-[16px] p-6 sm:p-10 border-0 shadow-2xl relative transition-all duration-500"
        >
          {/* Tier Selector Ribbon */}
          <div
            data-reveal-group
            className="grid grid-cols-3 gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-tr-[24px] rounded-bl-[24px] rounded-tl-[8px] rounded-br-[8px] bg-[#081a17]/80 border-0 mb-6 sm:mb-8"
          >
            {SUBSCRIPTION_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  data-reveal-card
                  data-tilt
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`py-2.5 sm:py-3.5 px-2 sm:px-4 text-xs font-bold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 sm:gap-1 cursor-pointer text-center ${
                    isSelected
                      ? "rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] shadow-sm border-0 scale-[1.02]"
                      : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] text-[#e4efe6]/70 hover:text-white hover:bg-white/5 border-0"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 max-w-full">
                    <span className="text-[11px] sm:text-xs truncate">{plan.title}</span>
                    {plan.popular && (
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? "bg-[#081a17]" : "bg-[#83be42]"}`} />
                    )}
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-medium ${isSelected ? "text-[#081a17]/85" : "text-[#e4efe6]/60"}`}>
                    ₹{plan.price} ({plan.bowlsCount})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Plan Spotlight Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Details */}
            <div data-scrub-y="-10" className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                {currentPlan.badge && (
                  <span className="glass-pill px-3 py-1 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[4px] rounded-br-[4px] text-[10px] font-bold uppercase tracking-wider text-[#83be42] border-0">
                    {currentPlan.badge}
                  </span>
                )}
                <span className="text-xs text-[#83be42] font-bold">
                  {currentPlan.bowlsCount} Freshly Prepped Meals
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {currentPlan.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#e4efe6]/80 leading-relaxed max-w-xl">
                {currentPlan.subtitle}
              </p>

              {/* Checklist */}
              <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentPlan.features.map((feature, i) => (
                  <div
                    key={i}
                    data-reveal-card
                    data-tilt
                    className="glass-strip rounded-tr-[18px] rounded-bl-[18px] rounded-tl-[6px] rounded-br-[6px] hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-[6px] hover:rounded-bl-[6px] p-3 flex items-start gap-2.5 text-xs text-[#e4efe6] transition-all duration-300"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#83be42]/20 text-[#83be42] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pricing Pod */}
            <div
              data-scrub-y="12"
              data-reveal-card
              data-tilt
              className="lg:col-span-5 glass-strip rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[14px] rounded-br-[14px] hover:rounded-tl-[36px] hover:rounded-br-[36px] hover:rounded-tr-[14px] hover:rounded-bl-[14px] p-6 sm:p-8 border-0 text-center flex flex-col justify-between space-y-6 transition-all duration-500"
            >
              <div>
                <span className="text-xs text-[#83be42] uppercase tracking-wider font-bold block mb-1">
                  Total Subscription Price
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                    ₹{currentPlan.price}
                  </span>
                  <span className="text-xs text-[#e4efe6]/60">
                    / {currentPlan.bowlsCount} bowls
                  </span>
                </div>
                <p className="text-xs font-bold text-[#83be42] mt-2">
                  ₹{currentPlan.perMealPrice} per meal
                </p>
                <p className="text-[11px] text-[#e4efe6]/50 mt-1">
                  Free delivery across Pune • Insulated containers
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hi BALANCE DIET Pune! 🥗 I would like to subscribe to the ${currentPlan.title} (₹${currentPlan.price} for ${currentPlan.bowlsCount} bowls). Please share setup details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none hover:rounded-tl-[20px] hover:rounded-br-[20px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] shadow-md shadow-black/30 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-[#081a17]" />
                  <span>Confirm Subscription on WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#e4efe6]/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#83be42]" />
                  <span>Pause or reschedule anytime with 4 hours notice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
