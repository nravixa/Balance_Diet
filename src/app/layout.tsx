import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND_CONFIG } from "@/lib/constants";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

const proximaFont = Montserrat({
  variable: "--font-proxima",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://balancedietpune.com"
  ),
  title: {
    default: "BALANCE DIET | Fresh Clean-Eating & High-Protein Bowls in Pune",
    template: "%s | BALANCE DIET Pune",
  },
  description:
    "Order fresh, nutritionist-curated healthy diet bowls delivered to your doorstep in Pune. High-protein, keto, and low-calorie options across Kothrud, Baner, Wakad, Viman Nagar & Hinjewadi.",
  keywords: [
    "Diet Bowl Delivery Pune",
    "Healthy Food Delivery Pune",
    "Salad Bowl Pune",
    "Keto Food Pune",
    "High Protein Meal Pune",
    "Diet Food Delivery Hinjewadi",
    "Healthy Lunch Box Pune",
    "Balance Diet Pune",
    "Meal Subscription Pune",
  ],
  authors: [
    { name: "BALANCE DIET Pune" },
    { name: "NRAVIXA", url: "https://nravixa.vercel.app" },
  ],
  creator: "NRAVIXA",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://balancedietpune.com",
    title: "BALANCE DIET Pune | Fresh Diet Bowls & Healthy Meals",
    description:
      "Fresh chef-crafted diet bowls delivered daily across Pune. High-protein, keto, and nutrient-dense meals made with zero preservatives.",
    siteName: "BALANCE DIET Pune",
  },
  twitter: {
    card: "summary_large_image",
    title: "BALANCE DIET Pune | Diet Bowls Delivered Fresh",
    description:
      "Clean-eating diet bowls, fresh salads & daily meal subscriptions in Pune. Order directly on WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: BRAND_CONFIG.name,
  legalName: BRAND_CONFIG.legalName,
  description:
    "Local diet bowl seller and healthy meal preparation service delivering clean, high-protein bowls and meal subscriptions across Pune.",
  url: "https://balancedietpune.com",
  telephone: BRAND_CONFIG.phone,
  email: BRAND_CONFIG.email,
  priceRange: "₹₹",
  servesCuisine: ["Healthy", "Salads", "Diet Food", "Keto", "High Protein"],
  hasMap: BRAND_CONFIG.address.googleMapsEmbedUrl,
  sameAs: [
    BRAND_CONFIG.socials.instagram,
    BRAND_CONFIG.socials.facebook,
    BRAND_CONFIG.socials.googlePresence,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND_CONFIG.address.street,
    addressLocality: BRAND_CONFIG.address.locality,
    addressRegion: BRAND_CONFIG.address.state,
    postalCode: BRAND_CONFIG.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4755,
    longitude: 73.8189,
  },
  areaServed: BRAND_CONFIG.deliveryAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: `${area}, Pune`,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${proximaFont.variable} ${sansFont.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                if (window.location.hash) {
                  history.replaceState(null, '', window.location.pathname + window.location.search);
                }
                window.scrollTo(0, 0);
                const savedTheme = localStorage.getItem('balance_diet_theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#081a17] text-[#e4efe6] selection:bg-[#83be42] selection:text-[#081a17] transition-colors duration-300">
        <CartProvider>
          <ThemeProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
