"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/lib/constants";
import { Calculator, MessageCircle, Leaf } from "lucide-react";

interface BmiResult {
  bmi: number;
  category: string;
  recommendation: string;
  colorClass: string;
}

export function BmiCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [feet, setFeet] = useState<number | "">(5);
  const [inches, setInches] = useState<number | "">(7);
  const [weightKg, setWeightKg] = useState<number | "">(68);
  const [result, setResult] = useState<BmiResult | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feet || !weightKg) return;

    const totalInches = Number(feet) * 12 + Number(inches || 0);
    const heightMeters = totalInches * 0.0254;
    const bmiValue = Number(
      (Number(weightKg) / (heightMeters * heightMeters)).toFixed(1)
    );

    // Asian Indian cut-offs (ICMR guidelines)
    if (bmiValue < 18.5) {
      setResult({
        bmi: bmiValue,
        category: "Underweight",
        recommendation:
          "Target nutrient-dense superfood bowls like Warm Quinoa & Roasted Veggie Bowl with extra paneer/protein to build lean mass safely.",
        colorClass: "bg-amber-500/20 text-amber-300",
      });
    } else if (bmiValue < 23) {
      setResult({
        bmi: bmiValue,
        category: "Normal / Healthy Weight",
        recommendation:
          "Maintain your healthy weight! Our Balanced Macro Bowls and Greek Feta Salad keep your daily fiber, vitamins, and energy balanced without food coma.",
        colorClass: "bg-[#83be42]/20 text-[#83be42]",
      });
    } else if (bmiValue < 25) {
      setResult({
        bmi: bmiValue,
        category: "Overweight (Mild)",
        recommendation:
          "A deficit-friendly 6-day subscription of High-Protein Grilled Paneer / Tofu Bowls (380-440 kcal) helps trim body fat while preserving lean muscle.",
        colorClass: "bg-orange-500/20 text-orange-300",
      });
    } else {
      setResult({
        bmi: bmiValue,
        category: "Obese (ICMR Range)",
        recommendation:
          "Start our Keto & Low-Carb Meal Plan: zero refined sugars, strict portion control, and fiber-rich greens to boost insulin sensitivity.",
        colorClass: "bg-rose-500/20 text-rose-300",
      });
    }
  };

  return (
    <div
      id="bmi-checker"
      data-reveal-card
      data-tilt
      className="w-full max-w-xl mx-auto glass-panel rounded-tr-[38px] rounded-bl-[38px] rounded-tl-[14px] rounded-br-[14px] hover:rounded-tl-[38px] hover:rounded-br-[38px] hover:rounded-tr-[14px] hover:rounded-bl-[14px] p-6 sm:p-8 border-0 shadow-2xl transition-all duration-500"
    >
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white font-display text-balance">
          Find Bowls for Your <span className="text-[#83be42]">BMI Range</span>
        </h3>
        <p className="text-xs text-[#e4efe6]/75 mt-1">
          Enter your height and weight to see recommendations based on Indian health guidelines.
        </p>
      </div>

      <form onSubmit={calculateBmi} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#e4efe6] mb-1.5">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                  gender === "female"
                    ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] border-0"
                    : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#081a17]/70 text-[#e4efe6]/70 border-0 hover:text-white"
                }`}
              >
                Female
              </button>
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                  gender === "male"
                    ? "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-none rounded-br-none hover:rounded-tl-[14px] hover:rounded-br-[14px] hover:rounded-tr-none hover:rounded-bl-none bg-[#83be42] text-[#081a17] border-0"
                    : "rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] bg-[#081a17]/70 text-[#e4efe6]/70 border-0 hover:text-white"
                }`}
              >
                Male
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#e4efe6] mb-1.5">
              Height (ft &amp; in)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  id="height-ft"
                  type="number"
                  min="3"
                  max="8"
                  step="0.1"
                  required
                  value={feet}
                  onChange={(e) =>
                    setFeet(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="w-full px-3 py-2.5 pr-7 rounded-xl glass-input text-white text-base sm:text-xs focus:outline-none"
                  placeholder="5"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#83be42] pointer-events-none">
                  ft
                </span>
              </div>
              <div className="relative">
                <input
                  id="height-in"
                  type="number"
                  min="0"
                  max="11"
                  value={inches}
                  onChange={(e) =>
                    setInches(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="w-full px-3 py-2.5 pr-7 rounded-xl glass-input text-white text-base sm:text-xs focus:outline-none"
                  placeholder="7"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#83be42] pointer-events-none">
                  in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="weight-kg" className="block text-xs font-semibold text-[#e4efe6] mb-1.5">
            Weight (kg)
          </label>
          <div className="relative">
            <input
              id="weight-kg"
              type="number"
              min="20"
              max="250"
              step="0.1"
              required
              value={weightKg}
              onChange={(e) =>
                setWeightKg(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full px-3 py-2.5 pr-8 rounded-xl glass-input text-white text-base sm:text-xs focus:outline-none"
              placeholder="e.g. 68"
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#83be42] pointer-events-none">
              kg
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-[#83be42] hover:bg-[#6caa3f] text-[#081a17] font-extrabold rounded-tr-[18px] rounded-bl-[18px] rounded-tl-none rounded-br-none hover:rounded-tl-[18px] hover:rounded-br-[18px] hover:rounded-tr-none hover:rounded-bl-none shadow-md shadow-black/30 transition-all duration-300 text-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
        >
          <Leaf className="w-3.5 h-3.5 fill-current" />
          <Calculator className="w-3.5 h-3.5" />
          <span>Calculate BMI &amp; View Recommendation</span>
        </button>
      </form>

      {result && (
        <div className="mt-5 pt-5 border-t border-white/10 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#83be42] font-semibold">
                Your BMI Score
              </p>
              <p className="text-2xl font-extrabold text-white">
                {result.bmi}{" "}
                <span className="text-xs font-normal text-[#e4efe6]/60">kg/m²</span>
              </p>
            </div>
            <span
              className={`px-3 py-1 text-xs font-bold rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[3px] rounded-br-[3px] ${result.colorClass}`}
            >
              {result.category}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-[#e4efe6]/85 bg-[#081a17]/80 p-3.5 rounded-tr-[14px] rounded-bl-[14px] rounded-tl-[4px] rounded-br-[4px] border-0">
            {result.recommendation}
          </p>

          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsapp}?text=${encodeURIComponent(
              `Hi BALANCE DIET Pune! 🥗 I used your website BMI tool. My BMI is ${result.bmi} (${result.category}). Which diet bowl or subscription plan do you suggest for my goal?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/15 text-white text-xs font-bold rounded-tr-[16px] rounded-bl-[16px] rounded-tl-none rounded-br-none hover:rounded-tl-[16px] hover:rounded-br-[16px] hover:rounded-tr-none hover:rounded-bl-none transition-all duration-300 shadow-md border-0 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#83be42]" />
            <span>Chat With Nutritionist on WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
}
