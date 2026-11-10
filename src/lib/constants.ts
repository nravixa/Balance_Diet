import type {
  BowlSubscription,
  ClinicBrandInfo,
  DietBowl,
  FaqItem,
} from "@/types";

export const BRAND_CONFIG: ClinicBrandInfo = {
  name: "BALANCE DIET",
  legalName: "Balance Diet Pune",
  tagline: "Pune's Premium Clean-Eating & High-Protein Diet Bowls",
  phone: "+91 9637173122",
  whatsapp: "919637173122",
  email: "orders@balancedietpune.com",
  address: {
    street: "A4, 301, Shivsagar City Phase 1, Sun City Road",
    locality: "Anand Nagar, Nimbaj Nagar (Sinhagad Road)",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411051",
    mapQuery:
      "A4, 301, Shivsagar City Phase 1, Anand Nagar, Sun City Road, Nimbaj Nagar, Pune, Maharashtra 411051",
    // Embed Google Maps centered on official Balance Diet Pune kitchen location
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Shivsagar+City+Phase+1,+Sun+City+Road,+Anand+Nagar,+Pune&z=15&output=embed",
  },
  socials: {
    instagram:
      "https://www.instagram.com/balance.diet.pune?obrf=cGFkaG54MzIzdWN6",
    facebook: "https://m.facebook.com/390645877460930/",
    googlePresence: "https://share.google/xNHgLgDujOFRhVASD",
    whatsapp: "https://wa.me/919637173122",
  },
  deliveryAreas: [
    "Kothrud",
    "Baner",
    "Wakad",
    "Viman Nagar",
    "Kalyani Nagar",
    "Hinjewadi (Ph 1, 2, 3)",
    "Aundh",
    "Shivaji Nagar / FC Road",
    "Koregaon Park",
    "Magarpatta City",
    "Bavdhan & Pashan",
    "Camp & Swargate",
  ],
  agency: {
    name: "NRAVIXA",
    url: "https://nravixa.vercel.app",
    label: "Designed & Engineered by NRAVIXA",
  },
};

export const DIET_BOWLS: DietBowl[] = [
  {
    id: "paneer-tikka-quinoa",
    name: "Tandoori Paneer Tikka Quinoa Bowl",
    category: "High Protein",
    badge: "Bestseller",
    description:
      "Char-grilled low-fat paneer marinated in roasted spices, quinoa, bell peppers, diced cucumber, and mint Greek yogurt dressing.",
    calories: 410,
    protein: 28,
    carbs: 34,
    fats: 12,
    weightGrams: 420,
    price: 249,
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    isVeg: true,
    ingredients: [
      "Low-fat Paneer",
      "Organic Quinoa",
      "Bell Peppers",
      "Greek Yogurt Mint Dressing",
      "Chia Seed Dust",
    ],
  },
  {
    id: "keto-avocado-goddess",
    name: "Keto Avocado Green Goddess Bowl",
    category: "Keto Bowls",
    badge: "Keto Certified",
    description:
      "Creamy Hass avocado slices, crisp baby spinach, steamed broccoli florets, zucchini noodles, toasted pumpkin seeds, edamame & cold-pressed herb vinaigrette.",
    calories: 380,
    protein: 16,
    carbs: 11,
    fats: 26,
    weightGrams: 390,
    price: 279,
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    isVeg: true,
    ingredients: [
      "Hass Avocado",
      "Broccoli Florets",
      "Baby Spinach",
      "Edamame",
      "Pumpkin & Sunflower Seeds",
    ],
  },
  {
    id: "herb-grilled-chicken-power",
    name: "Teriyaki Herb Grilled Chicken Bowl",
    category: "High Protein",
    badge: "Chef's Special",
    description:
      "Tender grilled lean chicken breast glazed in light ginger-tamari sauce, warm brown rice, steamed broccoli, sautéed mushrooms & toasted white sesame seeds.",
    calories: 460,
    protein: 42,
    carbs: 38,
    fats: 9,
    weightGrams: 440,
    price: 299,
    imageUrl:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80",
    isVeg: false,
    ingredients: [
      "Skinless Chicken Breast",
      "Steamed Brown Rice",
      "Button Mushrooms",
      "Sesame Glaze",
      "Spring Greens",
    ],
  },
  {
    id: "sprouted-moong-detox",
    name: "Sprouted Moong & Pomegranate Detox Bowl",
    category: "Weight Loss Low-Cal",
    badge: "Low Calorie",
    description:
      "Sprouted green moong, fresh pomegranate seeds, cucumbers, tomatoes, roasted peanuts, microgreens, and cold-pressed lemon-cumin dressing.",
    calories: 290,
    protein: 19,
    carbs: 32,
    fats: 6,
    weightGrams: 380,
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    isVeg: true,
    ingredients: [
      "Sprouted Green Moong",
      "Fresh Pomegranate",
      "Roasted Peanuts",
      "Cold-Pressed Lemon Dressing",
      "Microgreens",
    ],
  },
  {
    id: "mediterranean-falafel-hummus",
    name: "Mediterranean Falafel & Pink Beet Hummus Bowl",
    category: "Vegan & Green",
    badge: "Gut Health",
    description:
      "Air-baked herb falafels with pink beetroot hummus, spiced chickpeas, pickled red onions, Kalamata olives, and tahini-garlic dressing.",
    calories: 420,
    protein: 21,
    carbs: 46,
    fats: 14,
    weightGrams: 430,
    price: 269,
    imageUrl:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
    isVeg: true,
    ingredients: [
      "Baked Herb Falafel",
      "Pink Beet Hummus",
      "Spiced Kabuli Chana",
      "Kalamata Olives",
      "Pure Sesame Tahini",
    ],
  },
  {
    id: "zesty-paneer-bell-pepper-keto",
    name: "Zesty Paneer & Bell Pepper Keto Bowl",
    category: "Keto Bowls",
    badge: "Low Carb",
    description:
      "Sautéed malai paneer with crunchy tricolor bell peppers, broccoli, chia-flax seed crunch, and hung curd herb dressing with zero added sugar.",
    calories: 395,
    protein: 26,
    carbs: 12,
    fats: 24,
    weightGrams: 400,
    price: 259,
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
    isVeg: true,
    ingredients: [
      "Malai Paneer",
      "Tricolor Capsicum",
      "Broccoli Florets",
      "Roasted Flax Seeds",
      "Greek Yogurt Emulsion",
    ],
  },
];

export const SUBSCRIPTION_PLANS: BowlSubscription[] = [
  {
    id: "trial-pack",
    title: "3-Day Trial Pack",
    subtitle: "3 diet bowls delivered fresh over 3 days to test taste and quality",
    badge: "Trial Pack",
    bowlsCount: 3,
    price: 699,
    perMealPrice: 233,
    features: [
      "Pick any 3 bowls from the menu",
      "Free doorstep delivery across Pune",
      "Separate dressing containers included",
      "Choose lunch or dinner time slot",
    ],
  },
  {
    id: "workweek-6days",
    title: "6-Day Workweek Plan",
    subtitle: "Fresh lunch or dinner delivered Monday through Saturday",
    badge: "Most Popular",
    popular: true,
    bowlsCount: 6,
    price: 1399,
    perMealPrice: 233,
    features: [
      "Daily fresh delivery to office or home",
      "Set your calorie and protein targets",
      "Pause delivery anytime with 4 hours notice",
      "Priority delivery timing",
    ],
  },
  {
    id: "monthly-transformation",
    title: "24-Day Monthly Plan",
    subtitle: "24 fresh meals delivered across 4 weeks with weekly menu selection",
    badge: "Save ₹1,000+",
    bowlsCount: 24,
    price: 5199,
    perMealPrice: 216,
    features: [
      "24 freshly prepped diet bowls across 4 weeks",
      "Dietitian consultation and calorie planning",
      "Weekly menu customization",
      "Direct WhatsApp contact for pauses and changes",
      "Free delivery across all Pune delivery zones",
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Where does BALANCE DIET deliver in Pune?",
    answer:
      "We deliver fresh diet bowls across all major localities in Pune including Kothrud, Baner, Wakad, Viman Nagar, Kalyani Nagar, Hinjewadi (Phases 1, 2, 3), Aundh, Shivaji Nagar, Koregaon Park, Magarpatta City, and surrounding neighborhoods.",
  },
  {
    id: "faq-2",
    question: "How are the diet bowls prepared and delivered?",
    answer:
      "Every bowl is prepped each morning in our central Pune kitchen using fresh vegetables, grains, and lean proteins. Dressings are packed in separate containers so ingredients stay crisp until you are ready to eat.",
  },
  {
    id: "faq-3",
    question: "Can I customize the bowl for specific diet requirements?",
    answer:
      "Yes! You can choose Vegetarian, Non-Vegetarian, Low Carb, High Protein, or Keto. If you have allergies or ingredient preferences (no onion, no garlic, extra dressing, or substitute quinoa with brown rice), simply let us know when ordering on WhatsApp.",
  },
  {
    id: "faq-4",
    question: "How do subscriptions work? Can I pause delivery if I travel?",
    answer:
      "Yes, our subscriptions are 100% flexible. If you are traveling or working from home on a specific day, you can pause or resume deliveries with just a quick WhatsApp message to +91 9637173122 at least 4 hours in advance.",
  },
  {
    id: "faq-5",
    question: "What are the lunch and dinner delivery time windows?",
    answer:
      "Lunch orders are delivered fresh between 12:00 PM and 1:30 PM. Dinner orders are delivered between 7:30 PM and 9:00 PM right to your apartment doorstep or office security desk.",
  },
];

export function getWhatsAppOrderUrl(message?: string): string {
  const defaultText = encodeURIComponent(
    message ||
      "Hello BALANCE DIET! I would like to order a fresh diet bowl in Pune."
  );
  return `https://wa.me/${BRAND_CONFIG.whatsapp}?text=${defaultText}`;
}

export function generateBowlOrderMessage(bowl: DietBowl): string {
  const text = `Hi BALANCE DIET Pune! 🥗 I would like to order:
• Bowl: ${bowl.name}
• Category: ${bowl.category} (${bowl.isVeg ? "Veg" : "Non-Veg"})
• Price: ₹${bowl.price}
• Macros: ${bowl.calories} kcal | ${bowl.protein}g Protein | ${bowl.carbs}g Carbs

Please confirm delivery availability and estimated time slot.`;
  return encodeURIComponent(text);
}
