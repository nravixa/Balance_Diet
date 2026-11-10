import Link from "next/link";
import { getWhatsAppOrderUrl } from "@/lib/constants";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080f15] text-[#dadee1] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="glass-panel max-w-lg w-full rounded-3xl p-8 sm:p-12 text-center border border-[#b9d8e1]/20 shadow-2xl relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#447f98]/20 border border-[#629bb5]/30 text-[#d6ebf3] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#b9d8e1]" />
          <span>BALANCE DIET Pune</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-white font-display tracking-tight">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-[#b9d8e1] font-display mt-2">
          Bowl Not Found
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#dadee1]/70 leading-relaxed">
          The page or diet bowl you are looking for is either off today&apos;s prep menu or has moved. Let&apos;s get you back to our fresh daily bowls!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#447f98] to-[#629bb5] hover:opacity-95 text-white flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Fresh Bowls</span>
          </Link>

          <a
            href={getWhatsAppOrderUrl("Hello BALANCE DIET! I am looking for your daily diet bowl menu.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-[#0d1720] hover:bg-[#121f2b] text-[#b9d8e1] border border-[#b9d8e1]/20 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
