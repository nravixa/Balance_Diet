export type BowlCategory =
  | "All"
  | "High Protein"
  | "Keto Bowls"
  | "Vegan & Green"
  | "Weight Loss Low-Cal";

export interface DietBowl {
  id: string;
  name: string;
  category: BowlCategory;
  badge?: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  weightGrams: number;
  price: number;
  imageUrl: string;
  isVeg: boolean;
  ingredients: string[];
}

export interface CartItem {
  bowl: DietBowl;
  quantity: number;
}

export interface BowlSubscription {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  bowlsCount: number;
  price: number;
  perMealPrice: number;
  features: string[];
}

export interface OrderLeadFormData {
  fullName: string;
  whatsappNumber: string;
  puneArea: string;
  streetAddress: string;
  selectedBowlId: string;
  orderType: "single" | "weekly" | "monthly";
  deliverySlot: "lunch" | "dinner";
  specialNotes?: string;
}

export interface ClinicBrandInfo {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    mapQuery: string;
    googleMapsEmbedUrl: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    googlePresence: string;
    whatsapp: string;
  };
  deliveryAreas: string[];
  agency: {
    name: string;
    url: string;
    label: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BmiResult {
  bmi: number;
  category: "Underweight" | "Normal Weight" | "Overweight" | "Obese";
  colorClass: string;
  recommendation: string;
}
