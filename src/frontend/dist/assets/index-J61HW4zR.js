import { c as createLucideIcon } from "./index-B4L6VRFV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const CATEGORIES = [
  "Electronics",
  "Smartphones",
  "Laptops",
  "Audio",
  "TVs",
  "Cameras",
  "Gaming",
  "Home Appliances",
  "Fashion",
  "Books"
];
const PLATFORM_COLORS = {
  Amazon: "#FF9900",
  Flipkart: "#2874F0",
  eBay: "#E53238",
  BestBuy: "#003087",
  Walmart: "#0071CE",
  Other: "#6B7280"
};
const PLATFORM_ICONS = {
  Amazon: "🛒",
  Flipkart: "🏪",
  eBay: "🔖",
  BestBuy: "🏬",
  Walmart: "🏢",
  Other: "🛍️"
};
const SAMPLE_PRODUCTS = [
  {
    id: "1",
    title: "Samsung Galaxy S24 Ultra",
    description: "The ultimate Galaxy experience with 200MP camera, S Pen, and Snapdragon 8 Gen 3.",
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
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 1249.99,
        originalPrice: 1299.99,
        discount: 4,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 1219,
        originalPrice: 1299.99,
        discount: 6,
        buyNowUrl: "#",
        inStock: false
      }
    ],
    priceHistory: generatePriceHistory(1299.99, 1199.99)
  },
  {
    id: "2",
    title: "Apple MacBook Air M3 (15-inch)",
    description: "Supercharged by M3 chip with 18-hour battery life and stunning Liquid Retina display.",
    category: "Laptops",
    brand: "Apple",
    imageUrl: "/assets/generated/apple-macbook-air-m3.dim_600x500.jpg",
    averageRating: 4.8,
    reviewCount: 1923,
    tags: ["M3 Chip", "18hr Battery", "Liquid Retina", "MagSafe"],
    platforms: [
      {
        platform: "Amazon",
        price: 1299,
        originalPrice: 1399,
        discount: 7,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 1349.99,
        originalPrice: 1399,
        discount: 4,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 1399,
        originalPrice: 1399,
        discount: 0,
        buyNowUrl: "#",
        inStock: true
      }
    ],
    priceHistory: generatePriceHistory(1399, 1299)
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise cancellation with 30-hour battery and crystal-clear call quality.",
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
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "eBay",
        price: 259,
        originalPrice: 399.99,
        discount: 35,
        buyNowUrl: "#",
        inStock: true
      }
    ],
    priceHistory: generatePriceHistory(399.99, 279.99)
  },
  {
    id: "4",
    title: 'LG C3 Series 65" OLED TV',
    description: "Evo OLED panel with perfect blacks, Dolby Vision IQ, and NVIDIA G-Sync compatibility.",
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
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 1599.99,
        originalPrice: 2499.99,
        discount: 36,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 1549,
        originalPrice: 2499.99,
        discount: 38,
        buyNowUrl: "#",
        inStock: false
      }
    ],
    priceHistory: generatePriceHistory(2499.99, 1496.99)
  },
  {
    id: "5",
    title: 'iPad Pro 13" M4',
    description: "The thinnest Apple product ever with Ultra Retina XDR display and Apple Pencil Pro support.",
    category: "Electronics",
    brand: "Apple",
    imageUrl: "/assets/generated/ipad-pro-m4.dim_600x500.jpg",
    averageRating: 4.7,
    reviewCount: 743,
    tags: ["M4 Chip", "OLED Display", "Apple Pencil Pro", "Thunderbolt 4"],
    platforms: [
      {
        platform: "Amazon",
        price: 999,
        originalPrice: 1099,
        discount: 9,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 1099,
        originalPrice: 1099,
        discount: 0,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "eBay",
        price: 949,
        originalPrice: 1099,
        discount: 14,
        buyNowUrl: "#",
        inStock: true
      }
    ],
    priceHistory: generatePriceHistory(1099, 949)
  },
  {
    id: "6",
    title: "NVIDIA GeForce RTX 4070 Ti",
    description: "Ada Lovelace architecture with DLSS 3 and ray tracing for next-gen gaming performance.",
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
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 749.99,
        originalPrice: 799.99,
        discount: 6,
        buyNowUrl: "#",
        inStock: false
      },
      {
        platform: "eBay",
        price: 679,
        originalPrice: 799.99,
        discount: 15,
        buyNowUrl: "#",
        inStock: true
      }
    ],
    priceHistory: generatePriceHistory(799.99, 679)
  },
  {
    id: "7",
    title: "Sony Alpha A7 IV Mirrorless Camera",
    description: "Full-frame 33MP sensor with 4K 60fps video, real-time tracking AF, and 10fps burst.",
    category: "Cameras",
    brand: "Sony",
    imageUrl: "/assets/generated/sony-a7iv.dim_600x500.jpg",
    averageRating: 4.8,
    reviewCount: 2103,
    tags: ["Full-Frame", "33MP", "4K 60fps", "IBIS", "Dual SD"],
    platforms: [
      {
        platform: "Amazon",
        price: 2498,
        originalPrice: 2799,
        discount: 11,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "BestBuy",
        price: 2599.99,
        originalPrice: 2799,
        discount: 7,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "eBay",
        price: 2350,
        originalPrice: 2799,
        discount: 16,
        buyNowUrl: "#",
        inStock: true
      }
    ],
    priceHistory: generatePriceHistory(2799, 2350)
  },
  {
    id: "8",
    title: "Dyson V15 Detect Absolute",
    description: "Laser illumination detects microscopic dust. Intelligent suction auto-adjusts to floor type.",
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
        inStock: true
      },
      {
        platform: "Walmart",
        price: 699,
        originalPrice: 749.99,
        discount: 7,
        buyNowUrl: "#",
        inStock: true
      },
      {
        platform: "eBay",
        price: 599,
        originalPrice: 749.99,
        discount: 20,
        buyNowUrl: "#",
        inStock: false
      }
    ],
    priceHistory: generatePriceHistory(749.99, 599)
  }
];
function generatePriceHistory(startPrice, endPrice) {
  const points = [];
  const days = 30;
  const today = /* @__PURE__ */ new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const progress = (days - i) / days;
    const basePrice = startPrice - (startPrice - endPrice) * progress;
    const noise = (Math.random() - 0.5) * startPrice * 0.05;
    points.push({
      date: date.toISOString().split("T")[0],
      price: Math.round((basePrice + noise) * 100) / 100
    });
  }
  return points;
}
export {
  Check as C,
  ExternalLink as E,
  PLATFORM_COLORS as P,
  SAMPLE_PRODUCTS as S,
  CATEGORIES as a,
  PLATFORM_ICONS as b
};
