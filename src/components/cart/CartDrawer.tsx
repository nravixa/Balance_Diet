"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG } from "@/lib/constants";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function CartDrawer() {
  const {
    items,
    totalCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedArea, setSelectedArea] = useState("Kothrud");
  const [deliverySlot, setDeliverySlot] = useState<"lunch" | "dinner">("lunch");

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (item, index) =>
          `${index + 1}. *${item.bowl.name}* (x${item.quantity}) - ₹${
            item.bowl.price * item.quantity
          }`
      )
      .join("\n");

    const message = `*🥗 BALANCE DIET PUNE - NEW BAG ORDER*
---------------------------------------
${itemsSummary}
---------------------------------------
• *Subtotal:* ₹${subtotal}
• *Doorstep Delivery:* FREE (Pune)
• *Total Payable:* ₹${subtotal}

*Customer Details:*
• *Name:* ${customerName || "Customer"}
• *WhatsApp:* ${customerPhone || "Provided on chat"}
• *Pune Area:* ${selectedArea}
• *Delivery Slot:* ${
      deliverySlot === "lunch" ? "Lunch (12:00 - 1:30 PM)" : "Dinner (7:30 - 9:00 PM)"
    }
---------------------------------------
Please confirm preparation & estimated delivery time.`;

    const encoded = `https://wa.me/${BRAND_CONFIG.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    if (typeof window !== "undefined") {
      window.open(encoded, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Floating Bag Pill (Shown when cart has items) */}
      {totalCount > 0 && !isCartOpen && (
        <div className="fixed bottom-16 right-4 sm:bottom-14 sm:right-8 z-50 animate-bounce">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 py-3 px-5 rounded-tr-[20px] rounded-bl-[20px] rounded-tl-none rounded-br-none hover:rounded-tl-[20px] hover:rounded-br-[20px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] font-extrabold shadow-xl shadow-black/40 border-0 hover:bg-[#6caa3f] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#081a17] text-[#83be42] font-black text-[10px] flex items-center justify-center">
                {totalCount}
              </span>
            </div>
            <div className="text-left text-xs font-bold leading-tight">
              <div>View Bag ({totalCount})</div>
              <div className="text-[11px] text-[#081a17]/80">₹{subtotal} • Checkout</div>
            </div>
          </button>
        </div>
      )}

      {/* Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Slide-over Panel */}
          <div className="cart-drawer-panel relative w-full max-w-md bg-[#081a17]/98 text-[#e4efe6] border-0 shadow-2xl flex flex-col h-full z-10 animate-fadeIn">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0f302a]/80">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#83be42]" />
                <h3 className="font-bold text-white text-base font-display">
                  Your Diet Bag ({totalCount})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#e4efe6]/70 hover:text-white bg-[#081a17] border-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bag Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#0f302a] text-[#83be42] mx-auto flex items-center justify-center border-0">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-[#e4efe6]/60 max-w-xs mx-auto">
                    Select a diet bowl from the menu to add it to your bag.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      const menuEl = document.getElementById("menu");
                      menuEl?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 py-2.5 px-5 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] mt-3 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>Browse Bowls Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item.bowl.id}
                        className="p-3 rounded-tr-[24px] rounded-bl-[24px] rounded-tl-[8px] rounded-br-[8px] hover:rounded-tl-[24px] hover:rounded-br-[24px] hover:rounded-tr-[8px] hover:rounded-bl-[8px] glass-panel border-0 flex items-center gap-3 transition-all duration-300"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.bowl.imageUrl}
                          alt={item.bowl.name}
                          className="w-16 h-16 rounded-tr-[16px] rounded-bl-[16px] rounded-tl-[6px] rounded-br-[6px] object-cover flex-shrink-0 border-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h5 className="text-xs font-bold text-white truncate font-display">
                              {item.bowl.name}
                            </h5>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.bowl.id)}
                              className="text-[#e4efe6]/40 hover:text-rose-400 p-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[10px] text-[#83be42] font-bold">
                            ₹{item.bowl.price} each • {item.bowl.calories} kcal
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5 bg-[#081a17] border-0 rounded-lg p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.bowl.id, item.quantity - 1)
                                }
                                className="w-6 h-6 rounded flex items-center justify-center text-[#e4efe6]/70 hover:text-white hover:bg-white/10 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.bowl.id, item.quantity + 1)
                                }
                                className="w-6 h-6 rounded flex items-center justify-center text-[#e4efe6]/70 hover:text-white hover:bg-white/10 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="text-xs font-bold text-white">
                              ₹{item.bowl.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Quick Details for Checkout */}
                  <div className="p-4 rounded-tr-[28px] rounded-bl-[28px] rounded-tl-[10px] rounded-br-[10px] bg-[#0f302a]/80 border-0 space-y-3 pt-4">
                    <p className="text-xs font-bold text-white">
                      Delivery Details (Pune)
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name (Optional)"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl glass-input text-white placeholder-[#e4efe6]/40 focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl glass-input text-white placeholder-[#e4efe6]/40 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-[#e4efe6]/70 flex items-center gap-1 mb-1 font-semibold">
                          <MapPin className="w-2.5 h-2.5 text-[#83be42]" /> Area
                        </label>
                        <select
                          value={selectedArea}
                          onChange={(e) => setSelectedArea(e.target.value)}
                          className="w-full px-2 py-1.5 text-xs rounded-lg glass-input text-white focus:outline-none"
                        >
                          {BRAND_CONFIG.deliveryAreas.map((area) => (
                            <option key={area} value={area} className="bg-[#081a17]">
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-[#e4efe6]/70 flex items-center gap-1 mb-1 font-semibold">
                          <Clock className="w-2.5 h-2.5 text-[#83be42]" /> Slot
                        </label>
                        <select
                          value={deliverySlot}
                          onChange={(e) =>
                            setDeliverySlot(e.target.value as "lunch" | "dinner")
                          }
                          className="w-full px-2 py-1.5 text-xs rounded-lg glass-input text-white focus:outline-none"
                        >
                          <option value="lunch" className="bg-[#081a17]">
                            Lunch (12 - 1:30 PM)
                          </option>
                          <option value="dinner" className="bg-[#081a17]">
                            Dinner (7:30 - 9 PM)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-5 border-t border-white/10 bg-[#081a17] space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#e4efe6]/70">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#e4efe6]/70">
                    <span>Doorstep Delivery (Pune)</span>
                    <span className="font-semibold text-[#83be42]">FREE</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                    <span>Total Amount</span>
                    <span className="text-base text-[#83be42]">₹{subtotal}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 px-4 rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none text-xs font-extrabold text-[#081a17] bg-[#83be42] hover:bg-[#6caa3f] shadow-md shadow-black/30 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-[#081a17]" />
                  <span>Order Entire Bag on WhatsApp (₹{subtotal})</span>
                </button>

                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full text-center text-[11px] text-[#e4efe6]/50 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
