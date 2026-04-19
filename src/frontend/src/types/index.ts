export type Platform =
  | "Amazon"
  | "Flipkart"
  | "eBay"
  | "BestBuy"
  | "Walmart"
  | "Other";

export interface PlatformPrice {
  platform: Platform;
  price: number;
  originalPrice: number;
  discount: number;
  buyNowUrl: string;
  inStock: boolean;
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  imageUrl: string;
  platforms: PlatformPrice[];
  averageRating: number;
  reviewCount: number;
  tags: string[];
  priceHistory?: PriceHistoryPoint[];
}

export interface SearchQuery {
  searchTerm?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}

export interface ComparisonRecord {
  id: string;
  productIds: string[];
  timestamp: number;
}

export interface UserProfile {
  userId: string;
  wishlist: string[];
  comparisonHistory: ComparisonRecord[];
}

export const CATEGORIES = [
  "Electronics",
  "Smartphones",
  "Laptops",
  "Audio",
  "TVs",
  "Cameras",
  "Gaming",
  "Home Appliances",
  "Fashion",
  "Books",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PLATFORM_COLORS: Record<Platform, string> = {
  Amazon: "#FF9900",
  Flipkart: "#2874F0",
  eBay: "#E53238",
  BestBuy: "#003087",
  Walmart: "#0071CE",
  Other: "#6B7280",
};

export const PLATFORM_ICONS: Record<Platform, string> = {
  Amazon: "🛒",
  Flipkart: "🏪",
  eBay: "🔖",
  BestBuy: "🏬",
  Walmart: "🏢",
  Other: "🛍️",
};

// Sample data for the app
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Samsung Galaxy S24 Ultra",
    description:
      "The ultimate Galaxy experience with 200MP camera, S Pen, and Snapdragon 8 Gen 3.",
    category: "Smartphones",
    brand: "Samsung",
    imageUrl: "/assets/generated/samsung-galaxy-s24-ultra.dim_600x500.jpg",
    averageRating: 4.7,
    reviewCount: 2847,
    tags: ["5G", "S Pen", "200MP Camera", "AI Features"],
    platforms: [
      {
        platform: "Amazon",
        price: 1199.99,
        originalPrice: 1299.99,
        discount: 8,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 1249.99,
        originalPrice: 1299.99,
        discount: 4,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "Walmart",
        price: 1219.0,
        originalPrice: 1299.99,
        discount: 6,
        buyNowUrl: "#",
        inStock: false,
      },
    ],
    priceHistory: generatePriceHistory(1299.99, 1199.99),
  },
  {
    id: "2",
    title: "Apple MacBook Air M3 (15-inch)",
    description:
      "Supercharged by M3 chip with 18-hour battery life and stunning Liquid Retina display.",
    category: "Laptops",
    brand: "Apple",
    imageUrl: "/assets/generated/apple-macbook-air-m3.dim_600x500.jpg",
    averageRating: 4.8,
    reviewCount: 1923,
    tags: ["M3 Chip", "18hr Battery", "Liquid Retina", "MagSafe"],
    platforms: [
      {
        platform: "Amazon",
        price: 1299.0,
        originalPrice: 1399.0,
        discount: 7,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 1349.99,
        originalPrice: 1399.0,
        discount: 4,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "Walmart",
        price: 1399.0,
        originalPrice: 1399.0,
        discount: 0,
        buyNowUrl: "#",
        inStock: true,
      },
    ],
    priceHistory: generatePriceHistory(1399.0, 1299.0),
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Headphones",
    description:
      "Industry-leading noise cancellation with 30-hour battery and crystal-clear call quality.",
    category: "Audio",
    brand: "Sony",
    imageUrl: "/assets/generated/sony-wh1000xm5.dim_600x500.jpg",
    averageRating: 4.6,
    reviewCount: 5204,
    tags: ["ANC", "30hr Battery", "Hi-Res Audio", "Multipoint"],
    platforms: [
      {
        platform: "Amazon",
        price: 279.99,
        originalPrice: 399.99,
        discount: 30,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "eBay",
        price: 259.0,
        originalPrice: 399.99,
        discount: 35,
        buyNowUrl: "#",
        inStock: true,
      },
    ],
    priceHistory: generatePriceHistory(399.99, 279.99),
  },
  {
    id: "4",
    title: 'LG C3 Series 65" OLED TV',
    description:
      "Evo OLED panel with perfect blacks, Dolby Vision IQ, and NVIDIA G-Sync compatibility.",
    category: "TVs",
    brand: "LG",
    imageUrl: "/assets/generated/lg-c3-oled-tv.dim_600x500.jpg",
    averageRating: 4.9,
    reviewCount: 892,
    tags: ["OLED", "4K", "Dolby Vision", "G-Sync", "120Hz"],
    platforms: [
      {
        platform: "Amazon",
        price: 1496.99,
        originalPrice: 2499.99,
        discount: 40,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 1599.99,
        originalPrice: 2499.99,
        discount: 36,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "Walmart",
        price: 1549.0,
        originalPrice: 2499.99,
        discount: 38,
        buyNowUrl: "#",
        inStock: false,
      },
    ],
    priceHistory: generatePriceHistory(2499.99, 1496.99),
  },
  {
    id: "5",
    title: 'iPad Pro 13" M4',
    description:
      "The thinnest Apple product ever with Ultra Retina XDR display and Apple Pencil Pro support.",
    category: "Electronics",
    brand: "Apple",
    imageUrl: "/assets/generated/ipad-pro-m4.dim_600x500.jpg",
    averageRating: 4.7,
    reviewCount: 743,
    tags: ["M4 Chip", "OLED Display", "Apple Pencil Pro", "Thunderbolt 4"],
    platforms: [
      {
        platform: "Amazon",
        price: 999.0,
        originalPrice: 1099.0,
        discount: 9,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 1099.0,
        originalPrice: 1099.0,
        discount: 0,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "eBay",
        price: 949.0,
        originalPrice: 1099.0,
        discount: 14,
        buyNowUrl: "#",
        inStock: true,
      },
    ],
    priceHistory: generatePriceHistory(1099.0, 949.0),
  },
  {
    id: "6",
    title: "NVIDIA GeForce RTX 4070 Ti",
    description:
      "Ada Lovelace architecture with DLSS 3 and ray tracing for next-gen gaming performance.",
    category: "Gaming",
    brand: "NVIDIA",
    imageUrl: "/assets/generated/rtx-4070-ti.dim_600x500.jpg",
    averageRating: 4.5,
    reviewCount: 1567,
    tags: ["DLSS 3", "Ray Tracing", "12GB GDDR6X", "PCIe 4.0"],
    platforms: [
      {
        platform: "Amazon",
        price: 699.99,
        originalPrice: 799.99,
        discount: 13,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 749.99,
        originalPrice: 799.99,
        discount: 6,
        buyNowUrl: "#",
        inStock: false,
      },
      {
        platform: "eBay",
        price: 679.0,
        originalPrice: 799.99,
        discount: 15,
        buyNowUrl: "#",
        inStock: true,
      },
    ],
    priceHistory: generatePriceHistory(799.99, 679.0),
  },
  {
    id: "7",
    title: "Sony Alpha A7 IV Mirrorless Camera",
    description:
      "Full-frame 33MP sensor with 4K 60fps video, real-time tracking AF, and 10fps burst.",
    category: "Cameras",
    brand: "Sony",
    imageUrl: "/assets/generated/sony-a7iv.dim_600x500.jpg",
    averageRating: 4.8,
    reviewCount: 2103,
    tags: ["Full-Frame", "33MP", "4K 60fps", "IBIS", "Dual SD"],
    platforms: [
      {
        platform: "Amazon",
        price: 2498.0,
        originalPrice: 2799.0,
        discount: 11,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "BestBuy",
        price: 2599.99,
        originalPrice: 2799.0,
        discount: 7,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "eBay",
        price: 2350.0,
        originalPrice: 2799.0,
        discount: 16,
        buyNowUrl: "#",
        inStock: true,
      },
    ],
    priceHistory: generatePriceHistory(2799.0, 2350.0),
  },
  {
    id: "8",
    title: "Dyson V15 Detect Absolute",
    description:
      "Laser illumination detects microscopic dust. Intelligent suction auto-adjusts to floor type.",
    category: "Home Appliances",
    brand: "Dyson",
    imageUrl: "/assets/generated/dyson-v15.dim_600x500.jpg",
    averageRating: 4.6,
    reviewCount: 3421,
    tags: ["Laser Detect", "HEPA Filter", "60min Battery", "LCD Display"],
    platforms: [
      {
        platform: "Amazon",
        price: 649.99,
        originalPrice: 749.99,
        discount: 13,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "Walmart",
        price: 699.0,
        originalPrice: 749.99,
        discount: 7,
        buyNowUrl: "#",
        inStock: true,
      },
      {
        platform: "eBay",
        price: 599.0,
        originalPrice: 749.99,
        discount: 20,
        buyNowUrl: "#",
        inStock: false,
      },
    ],
    priceHistory: generatePriceHistory(749.99, 599.0),
  },
];

function generatePriceHistory(
  startPrice: number,
  endPrice: number,
): PriceHistoryPoint[] {
  const points: PriceHistoryPoint[] = [];
  const days = 30;
  const today = new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const progress = (days - i) / days;
    const basePrice = startPrice - (startPrice - endPrice) * progress;
    const noise = (Math.random() - 0.5) * startPrice * 0.05;
    points.push({
      date: date.toISOString().split("T")[0],
      price: Math.round((basePrice + noise) * 100) / 100,
    });
  }
  return points;
}
