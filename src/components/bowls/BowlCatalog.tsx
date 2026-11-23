"use client";

import { useState } from "react";
import type { BowlCategory, DietBowl } from "@/types";
import { DIET_BOWLS, BRAND_CONFIG, generateBowlOrderMessage } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import {
  MessageCircle,
  Flame,
  Dumbbell,
  Plus,
} from "lucide-react";

const CATEGORIES: BowlCategory[] = [
  "All",
  "High Protein",
  "Keto Bowls",
  "Vegan & Green",
  "Weight Loss Low-Cal",
];

export function BowlCatalog() {
  const [activeCategory, setActiveCategory] = useState<BowlCategory>("All");
  const [selectedBowl, setSelectedBowl] = useState<DietBowl>(DIET_BOWLS[0]);
  const { addToCart } = useCart();

  const filteredBowls =
    activeCategory === "All"
      ? DIET_BOWLS
      : DIET_BOWLS.filter((b) => b.category === activeCategory);

  return (
    <section id="menu" data-snap-section="true" className="relative w-full overflow-hidden py-8 sm:py-12 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-24 lg:px-8 xl:px-10 min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      {/* Section Background Landscape Image & Dual Gradient Mask with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=70"
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

      {/* Floating Ambient Depth Elements */}
      <div
        data-float
        data-speed="0.4"
        suppressHydrationWarning
        className="hidden md:block absolute right-8 top-16 pointer-events-none w-16 h-16 rounded-full bg-[#83be42]/10 blur-xl"
      />
      <div
        data-float
        data-speed="-0.3"
        suppressHydrationWarning
        className="hidden md:block absolute left-6 bottom-20 pointer-events-none w-20 h-20 rounded-full bg-[#83be42]/15 blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2
            data-reveal-heading
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            Daily <span className="text-[#83be42]">Diet Bowls</span> Menu
          </h2>

          {/* Category Filter Pills with Dynamic Leaf Design on Active */}
          <div
            data-reveal-group
            className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1.5 px-1 sm:flex-wrap sm:justify-center mt-5 sm:mt-6"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  data-reveal-card
                  data-tilt
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] shadow-sm border-0 scale-105"
                      : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] glass-pill text-[#e4efe6]/75 hover:text-white border-0"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Editorial Bento Layout - Both Left & Right Cards in One Single Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Interactive Glass Culinary Stream */}
          <div
            data-scrub-y="-14"
            className="lg:col-span-5 flex flex-col justify-between min-h-[460px] sm:h-[485px] lg:h-[490px]"
          >
            <div className="flex items-center justify-between text-xs text-[#e4efe6]/60 px-2 pb-1.5 shrink-0">
              <span>Available Bowls ({filteredBowls.length})</span>
            </div>

            <div data-reveal-group className="space-y-1.5 overflow-y-auto no-scrollbar pr-0.5 flex-1 pb-1">
              {filteredBowls.map((bowl) => {
                const isSelected = selectedBowl.id === bowl.id;
                return (
                  <div
                    key={bowl.id}
                    data-reveal-card
                    data-tilt
                    onClick={() => setSelectedBowl(bowl)}
                    className={`glass-strip rounded-tr-[22px] rounded-bl-[22px] rounded-tl-[6px] rounded-br-[6px] hover:rounded-tl-[22px] hover:rounded-br-[22px] hover:rounded-tr-[6px] hover:rounded-bl-[6px] p-2 sm:py-2 sm:px-2.5 cursor-pointer flex items-center justify-between gap-2.5 group transition-all duration-300 border-0 ${
                      isSelected
                        ? "active bg-[#143e37] shadow-sm"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={bowl.imageUrl}
                        alt={bowl.name}
                        data-img-zoom
                        className="w-10 h-10 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              bowl.isVeg ? "bg-[#83be42]" : "bg-rose-400"
                            }`}
                          />
                          <span className="text-[9px] uppercase font-bold tracking-wider text-[#83be42] truncate">
                            {bowl.category}
                          </span>
                        </div>
                        <h3
                          className={`text-xs font-bold truncate transition-colors font-display ${
                            isSelected
                              ? "text-[#83be42]"
                              : "text-white group-hover:text-[#a4db65]"
                          }`}
                        >
                          {bowl.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[10px] text-[#e4efe6]/65 mt-0.5">
                          <span>{bowl.calories} kcal</span>
                          <span>•</span>
                          <span className="text-[#83be42] font-semibold">
                            {bowl.protein}g protein
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Quick Add Button */}
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-extrabold text-white">
                        ₹{bowl.price}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(bowl);
                        }}
                        className="px-2 py-0.5 rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[3px] rounded-br-[3px] hover:rounded-tl-[10px] hover:rounded-br-[10px] hover:rounded-tr-[3px] hover:rounded-bl-[3px] text-[10px] font-bold bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] shadow-sm transition-all flex items-center gap-1 cursor-pointer hover:scale-105"
                        title="Add to Diet Bag"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>Bag</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Spotlight Theater (Same Single Frame) */}
          <div
            data-scrub-y="14"
            data-reveal-card
            data-tilt
            className="lg:col-span-7 glass-panel rounded-tr-[42px] rounded-bl-[42px] rounded-tl-[16px] rounded-br-[16px] hover:rounded-tl-[42px] hover:rounded-br-[42px] hover:rounded-tr-[16px] hover:rounded-bl-[16px] p-4 sm:p-5 border-0 shadow-2xl relative flex flex-col justify-between min-h-[460px] sm:h-[485px] lg:h-[490px] transition-all duration-500"
          >
            {/* Spotlight Dish Header */}
            <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/10 shrink-0">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {selectedBowl.badge && (
                    <span className="glass-pill px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-[#83be42] border-0">
                      {selectedBowl.badge}
                    </span>
                  )}
                  <span className="text-[10px] sm:text-xs text-[#83be42] font-bold">
                    {selectedBowl.weightGrams}g Portion Size
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-extrabold text-white font-display truncate">
                  {selectedBowl.name}
                </h3>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-[#e4efe6]/60 block leading-tight">Price per Bowl</span>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  ₹{selectedBowl.price}
                </span>
              </div>
            </div>

            {/* Spotlight Body: Image & Nutrition Split */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center my-auto py-1">
              {/* Image & Embedded Floating Macros */}
              <div className="sm:col-span-6 flex flex-col gap-2">
                <div className="relative h-40 sm:h-48 lg:h-52 w-full rounded-2xl overflow-hidden border-0 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedBowl.imageUrl}
                    alt={selectedBowl.name}
                    data-img-zoom
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 h-auto bg-gradient-to-t from-[#081a17]/90 via-transparent to-transparent" />
                  <div className="macro-pill-overlay absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-white px-2.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border-0">
                    <span className="flex items-center gap-1 text-[#83be42]">
                      <Flame className="w-3 h-3 text-[#83be42]" />
                      {selectedBowl.calories} kcal
                    </span>
                    <span className="flex items-center gap-1 text-white" style={{ color: "#ffffff" }}>
                      <Dumbbell className="w-3 h-3 text-[#83be42]" />
                      <span style={{ color: "#ffffff" }}>{selectedBowl.protein}g protein</span>
                    </span>
                  </div>
                </div>

                {/* Macro Badges: Carbs & Fats */}
                <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
                  <div className="glass-panel py-1 px-2 rounded-xl border-0">
                    <span className="text-[9px] text-[#e4efe6]/60 block">Carbs</span>
                    <span className="font-bold text-white text-[11px]">{selectedBowl.carbs}g</span>
                  </div>
                  <div className="glass-panel py-1 px-2 rounded-xl border-0">
                    <span className="text-[9px] text-[#e4efe6]/60 block">Healthy Fats</span>
                    <span className="font-bold text-white text-[11px]">{selectedBowl.fats}g</span>
                  </div>
                </div>
              </div>

              {/* Description & Ingredients */}
              <div className="sm:col-span-6 flex flex-col justify-between space-y-2.5">
                <p className="text-[11px] sm:text-xs text-[#e4efe6]/85 line-clamp-3 leading-relaxed">
                  {selectedBowl.description}
                </p>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#83be42] block mb-1">
                    Key Ingredients:
                  </span>
                  <div className="flex flex-wrap gap-1 max-h-[60px] overflow-hidden">
                    {selectedBowl.ingredients.slice(0, 5).map((ing, i) => (
                      <span
                        key={i}
                        className="glass-pill px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] text-[#e4efe6] border-0"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Dual Action Triggers with Leaf Button Styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2.5 border-t border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => addToCart(selectedBowl)}
                className="py-2.5 px-3 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] shadow-md shadow-black/30 flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Bag (₹{selectedBowl.price})</span>
              </button>

              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsapp}?text=${generateBowlOrderMessage(
                  selectedBowl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border-0 shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95 text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#83be42]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
