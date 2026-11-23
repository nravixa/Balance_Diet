"use client";

import { useState } from "react";
import { BRAND_CONFIG, DIET_BOWLS } from "@/lib/constants";
import type { OrderLeadFormData } from "@/types";
import { MessageCircle, CheckCircle, Send, MapPin, Clock, Phone, User, Utensils, Leaf } from "lucide-react";

export function OrderLeadForm({
  selectedBowlId = "paneer-tikka-quinoa",
}: {
  selectedBowlId?: string;
}) {
  const [formData, setFormData] = useState<OrderLeadFormData>({
    fullName: "",
    whatsappNumber: "",
    puneArea: "Kothrud",
    streetAddress: "",
    selectedBowlId: selectedBowlId,
    orderType: "single",
    deliverySlot: "lunch",
    specialNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.whatsappNumber || !formData.streetAddress) {
      alert("Please fill in your name, phone number, and delivery address.");
      return;
    }

    const selectedBowl = DIET_BOWLS.find((b) => b.id === formData.selectedBowlId);
    const bowlTitle = selectedBowl ? selectedBowl.name : "Custom Diet Bowl";
    const bowlPrice = selectedBowl ? `₹${selectedBowl.price}` : "Standard Rate";

    const orderSummary = `*🥗 NEW DIET BOWL ORDER / INQUIRY*
---------------------------------------
• *Name:* ${formData.fullName}
• *WhatsApp:* ${formData.whatsappNumber}
• *Pune Area:* ${formData.puneArea}
• *Delivery Address:* ${formData.streetAddress}
• *Selected Bowl:* ${bowlTitle} (${bowlPrice})
• *Plan Type:* ${
      formData.orderType === "single"
        ? "Single Meal Delivery"
        : formData.orderType === "weekly"
        ? "6-Day Workweek Subscription"
        : "Monthly 24-Day Plan"
    }
• *Delivery Slot:* ${
      formData.deliverySlot === "lunch"
        ? "Lunch (12:00 PM - 1:30 PM)"
        : "Dinner (7:30 PM - 9:00 PM)"
    }
${formData.specialNotes ? `• *Special Notes:* ${formData.specialNotes}\n` : ""}---------------------------------------
Please confirm delivery availability and payment details.`;

    const encodedUrl = `https://wa.me/${BRAND_CONFIG.whatsapp}?text=${encodeURIComponent(
      orderSummary
    )}`;

    setGeneratedWhatsAppUrl(encodedUrl);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(encodedUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="order-form"
      data-snap-section="true"
      className="relative w-full overflow-hidden py-14 sm:py-20 px-4 sm:pl-6 sm:pr-20 md:pl-8 md:pr-24 lg:px-8 xl:px-10 min-h-[calc(100dvh-3.5rem)] flex flex-col justify-center"
    >
      {/* Cinematic Culinary Background & Multiplane Parallax (Hero Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Primary Culinary Gourmet Bowl Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=75"
          alt=""
          loading="lazy"
          data-parallax="true"
          data-parallax-speed="0.25"
          data-parallax-scale="1.15"
          suppressHydrationWarning
          className="order-bowl-img w-full h-[125%] -top-[12%] relative object-cover object-[75%_center] lg:object-[82%_center] filter saturate-[1.15] contrast-[1.08] brightness-[0.98] dark:brightness-[0.92] opacity-100 dark:opacity-90 transition-opacity duration-300"
        />

        {/* Ambient Botanical Radial Glow around the gourmet bowl on the right */}
        <div
          data-parallax="true"
          data-parallax-speed="-0.15"
          suppressHydrationWarning
          className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_75%_45%,rgba(131,190,66,0.22),rgba(8,26,23,0))]"
        />

        {/* Left Form Contrast Shadow Shield (Ensures crisp readability for form on left) */}
        <div className="order-left-shield absolute inset-0 bg-gradient-to-r from-[#081a17] via-[#081a17]/95 sm:via-[#081a17]/85 to-transparent" />

        {/* Top & Bottom Cinematic Edge Vignettes */}
        <div className="order-top-vignette absolute inset-0 bg-gradient-to-t from-[#081a17] via-transparent to-[#081a17]/75" />
      </div>

      {/* Floating Ambient Parallax Element */}
      <div
        data-float
        data-speed="-0.3"
        suppressHydrationWarning
        className="hidden md:block absolute left-8 bottom-16 pointer-events-none w-16 h-16 rounded-full bg-[#83be42]/15 blur-2xl"
      />

      {/* Left-Aligned Container */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-xl xl:max-w-2xl w-full mr-auto ml-0">
          <div
            data-reveal-card
            data-no-tilt="true"
            data-tilt="false"
            className="glass-panel rounded-tr-[38px] rounded-bl-[38px] rounded-tl-[14px] rounded-br-[14px] hover:rounded-tl-[38px] hover:rounded-br-[38px] hover:rounded-tr-[14px] hover:rounded-bl-[14px] p-5 sm:p-7 md:p-8 border-0 shadow-2xl relative overflow-hidden transition-all duration-500"
          >
            {/* Header */}
            <div className="mb-4 sm:mb-5">
              <h2
                data-reveal-heading
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display"
              >
                Order a <span className="text-[#83be42]">Diet Bowl</span>
              </h2>
              <p data-reveal-text className="mt-1 text-xs text-[#e4efe6]/80">
                Enter your delivery details below to confirm your time slot on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 px-4 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#83be42]/20 border-0 text-[#83be42] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Order Ready on WhatsApp
                </h3>
                <p className="text-xs text-[#e4efe6]/80 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>! If WhatsApp did not open automatically, click below to send your order details.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-6 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#081a17]" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-6 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] text-xs font-semibold bg-[#0f302a] hover:bg-[#143e37] text-[#83be42] border-0 transition-all duration-300 cursor-pointer"
                  >
                    Order Another Bowl
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <User className="w-3 h-3 text-[#83be42]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl glass-input text-white placeholder-[#e4efe6]/40 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <Phone className="w-3 h-3 text-[#83be42]" />
                      <span>WhatsApp Mobile Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9822001122"
                      value={formData.whatsappNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsappNumber: e.target.value })
                      }
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl glass-input text-white placeholder-[#e4efe6]/40 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Pune Delivery Area */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <MapPin className="w-3 h-3 text-[#83be42]" />
                      <span>Delivery Area in Pune *</span>
                    </label>
                    <select
                      value={formData.puneArea}
                      onChange={(e) =>
                        setFormData({ ...formData, puneArea: e.target.value })
                      }
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl glass-input text-white text-xs focus:outline-none transition-colors"
                    >
                      {BRAND_CONFIG.deliveryAreas.map((area) => (
                        <option key={area} value={area} className="bg-[#081a17] text-white">
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Bowl */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <Utensils className="w-3 h-3 text-[#83be42]" />
                      <span>Select Your Diet Bowl *</span>
                    </label>
                    <select
                      value={formData.selectedBowlId}
                      onChange={(e) =>
                        setFormData({ ...formData, selectedBowlId: e.target.value })
                      }
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl glass-input text-white text-xs focus:outline-none transition-colors"
                    >
                      {DIET_BOWLS.map((bowl) => (
                        <option key={bowl.id} value={bowl.id} className="bg-[#081a17] text-white">
                          {bowl.name} - ₹{bowl.price} ({bowl.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Plan Type */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <span>Order / Subscription Type</span>
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, orderType: "single" })}
                        className={`py-2 px-1 text-center text-xs font-semibold border-0 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          formData.orderType === "single"
                            ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-bold"
                            : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#0f302a]/60 text-[#e4efe6]/70 hover:bg-[#0f302a]"
                        }`}
                      >
                        Single Bowl
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, orderType: "weekly" })}
                        className={`py-2 px-1 text-center text-xs font-semibold border-0 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          formData.orderType === "weekly"
                            ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-bold"
                            : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#0f302a]/60 text-[#e4efe6]/70 hover:bg-[#0f302a]"
                        }`}
                      >
                        6-Day Weekly
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, orderType: "monthly" })}
                        className={`py-2 px-1 text-center text-xs font-semibold border-0 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          formData.orderType === "monthly"
                            ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-bold"
                            : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#0f302a]/60 text-[#e4efe6]/70 hover:bg-[#0f302a]"
                        }`}
                      >
                        Monthly (24)
                      </button>
                    </div>
                  </div>

                  {/* Delivery Slot */}
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-[#e4efe6] mb-1">
                      <Clock className="w-3 h-3 text-[#83be42]" />
                      <span>Preferred Delivery Time Window</span>
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliverySlot: "lunch" })}
                        className={`py-2 text-center text-xs font-semibold border-0 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          formData.deliverySlot === "lunch"
                            ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-bold"
                            : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#0f302a]/60 text-[#e4efe6]/70 hover:bg-[#0f302a]"
                        }`}
                      >
                        Lunch (12 - 1:30 PM)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, deliverySlot: "dinner" })}
                        className={`py-2 text-center text-xs font-semibold border-0 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                          formData.deliverySlot === "dinner"
                            ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-bold"
                            : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#0f302a]/60 text-[#e4efe6]/70 hover:bg-[#0f302a]"
                        }`}
                      >
                        Dinner (7:30 - 9 PM)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#e4efe6] mb-1">
                    Exact Street Address / Landmark / Tech Park / Apartment &amp; Flat No. *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="e.g. Flat 402, Rohan Tarang, Wakad / WeWork Futura, Magarpatta"
                    value={formData.streetAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, streetAddress: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl glass-input text-white placeholder-[#e4efe6]/40 text-xs focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Dietary notes */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#e4efe6] mb-1">
                    Special Dietary Notes / Customizations (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. No raw onions, extra lemon vinaigrette on the side"
                    value={formData.specialNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, specialNotes: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl glass-input text-white placeholder-[#e4efe6]/40 text-xs focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none text-xs sm:text-sm font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] shadow-md shadow-black/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Leaf className="w-4 h-4 fill-current" />
                  <Send className="w-3.5 h-3.5 fill-[#081a17]" />
                  <span>Send Order via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
