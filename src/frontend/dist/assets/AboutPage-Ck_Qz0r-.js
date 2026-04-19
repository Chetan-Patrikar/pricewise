import { c as createLucideIcon, j as jsxRuntimeExports, i as cn, r as reactExports, B as Badge, Z as Zap, L as Link, a as Button, H as Heart, b as Search, a1 as ue } from "./index-B4L6VRFV.js";
import { I as Input } from "./input-DBZ4hsPM.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { S as Star, T as TrendingDown } from "./trending-down-B3YFUVU9.js";
import { A as ArrowRight } from "./arrow-right-B82Xw2dQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Instant autocomplete with filters by category, brand, price range, and ratings. Find exactly what you need in seconds.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: ChartNoAxesColumn,
    title: "Price Comparison",
    desc: "Side-by-side price breakdowns from Amazon, Flipkart, eBay, and more. All data in one unified view.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: TrendingDown,
    title: "Best Deal Finder",
    desc: "AI automatically highlights the lowest price and best value product so you never miss a deal.",
    color: "text-chart-3",
    bg: "bg-chart-3/10"
  },
  {
    icon: Heart,
    title: "Wishlist",
    desc: "Save your favourite products and get notified the moment prices drop on the items you love.",
    color: "text-destructive",
    bg: "bg-destructive/10"
  }
];
const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Search",
    desc: "Type any product name into our smart search bar. Autocomplete suggestions guide you to the exact item you're looking for."
  },
  {
    step: "02",
    icon: ChartNoAxesColumn,
    title: "Compare",
    desc: "Instantly see prices from Amazon, Flipkart, eBay, and other top platforms side-by-side with ratings and discount badges."
  },
  {
    step: "03",
    icon: TrendingDown,
    title: "Save",
    desc: "Click the best deal and buy directly from the retailer — or track the price and wait for an even better offer."
  }
];
const STATS = [
  { value: "50+", label: "Products Tracked" },
  { value: "4", label: "Platforms" },
  { value: "100%", label: "Free to Use" }
];
const PLATFORMS = [
  { name: "Amazon", color: "bg-[#FF9900]/10 text-[#FF9900]", emoji: "📦" },
  { name: "Flipkart", color: "bg-[#2874F0]/10 text-[#2874F0]", emoji: "🛒" },
  { name: "eBay", color: "bg-[#E53238]/10 text-[#E53238]", emoji: "🏷️" },
  { name: "More Stores", color: "bg-primary/10 text-primary", emoji: "🌐" }
];
const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Comparison", to: "/comparison" },
  { label: "About", to: "/about" }
];
function AboutPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      ue.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      ue.success("Message sent! We'll get back to you within 24 hours. 🎉");
      setName("");
      setEmail("");
      setMessage("");
      setSubmitting(false);
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-card border-b border-border/50 py-20 px-4 overflow-hidden",
        "data-ocid": "about.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20",
              style: {
                background: "radial-gradient(circle, oklch(var(--primary)) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-10",
              style: {
                background: "radial-gradient(circle, oklch(var(--accent)) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto text-center relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 28 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-5 bg-primary/10 text-primary border-primary/30 px-3 py-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 mr-1.5" }),
                    "About PriceWise"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight tracking-tight", children: [
                    "Your smart companion for finding",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "the best deals" }),
                    " across the web"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed", children: "We believe everyone deserves to pay the right price. PriceWise aggregates real-time pricing from the world's top e-commerce platforms so you can compare, decide, and save effortlessly." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.25 },
                className: "flex flex-wrap justify-center gap-3 mt-8",
                children: PLATFORMS.map(({ name: pName, color, emoji }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium glass ${color}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
                      pName
                    ]
                  },
                  pName
                ))
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-b border-border/30 py-12 px-4",
        "data-ocid": "about.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-6", children: STATS.map(({ value, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "text-center",
            "data-ocid": `about.stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl font-bold text-primary mb-1", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-medium", children: label })
            ]
          },
          label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 px-4",
        "data-ocid": "about.mission_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-4 bg-accent/10 text-accent border-accent/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 mr-1" }),
                  "Our Mission"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight", children: "Helping you save money on every purchase" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "PriceWise was built for one simple reason: online shopping is fragmented. The same laptop might cost $100 more on Amazon than on Flipkart, yet most shoppers never know." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-6", children: [
                  "We pull live pricing from",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Amazon" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Flipkart" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "eBay" }),
                  ", and more — surfacing the lowest price, best ratings, and current discounts in a single, clean comparison view."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", "data-ocid": "about.mission_cta_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "gap-1.5",
                    "data-ocid": "about.mission_cta_button",
                    children: [
                      "Start Comparing ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
              className: "grid grid-cols-2 gap-4",
              children: [
                {
                  icon: Shield,
                  title: "100% Transparent",
                  desc: "No hidden fees. We never take commission."
                },
                {
                  icon: Zap,
                  title: "Real-time Data",
                  desc: "Prices refresh automatically so you see current deals."
                },
                {
                  icon: TrendingDown,
                  title: "Price History",
                  desc: "See 30-day trends and know when to buy."
                },
                {
                  icon: Heart,
                  title: "User-first",
                  desc: "Your wishlist, your data, always private."
                }
              ].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "glass rounded-xl p-4 shadow-subtle transition-smooth hover:shadow-elevated",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm mb-1", children: title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: desc })
                  ]
                },
                title
              ))
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-y border-border/30 py-16 px-4",
        "data-ocid": "about.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/30", children: "Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Everything you need to shop smarter" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: FEATURES.map(({ icon: Icon, title, desc, color, bg }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "glass-dark rounded-2xl p-6 shadow-subtle transition-smooth hover:shadow-elevated hover:-translate-y-1",
              "data-ocid": `about.feature_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${color}` })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-base mb-2", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
              ]
            },
            title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 px-4",
        "data-ocid": "about.how_it_works_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-accent/10 text-accent border-accent/30", children: "How It Works" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Three steps to the best deal" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-border/60",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: STEPS.map(({ step, icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.15 },
                className: "text-center relative",
                "data-ocid": `about.step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl glass shadow-elevated flex items-center justify-center mx-auto transition-smooth hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center", children: i + 1 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto", children: desc })
                ]
              },
              step
            )) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-y border-border/30 py-16 px-4",
        "data-ocid": "about.contact_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3 h-3 mr-1" }),
                  "Contact Us"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Get in touch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Questions, feedback, or just want to say hi? We'd love to hear from you." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                className: "md:col-span-2 space-y-5",
                children: [
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "hello@pricewise.ai"
                  },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                  {
                    icon: MapPin,
                    label: "Find Us",
                    value: "San Francisco, CA"
                  },
                  {
                    icon: MessageSquare,
                    label: "Live Chat",
                    value: "Mon–Fri, 9 AM – 5 PM PT"
                  }
                ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: value })
                  ] })
                ] }, label))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.1 },
                className: "md:col-span-3 glass-dark rounded-2xl p-6 shadow-elevated",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-5", children: "Send a Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "contact-name",
                          className: "block text-xs font-medium text-muted-foreground mb-1.5",
                          children: "Your Name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "contact-name",
                          placeholder: "Alex Johnson",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          "data-ocid": "about.contact_name_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "contact-email",
                          className: "block text-xs font-medium text-muted-foreground mb-1.5",
                          children: "Email Address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "contact-email",
                          type: "email",
                          placeholder: "you@example.com",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          "data-ocid": "about.contact_email_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "contact-message",
                          className: "block text-xs font-medium text-muted-foreground mb-1.5",
                          children: "Message"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          id: "contact-message",
                          placeholder: "Tell us what's on your mind...",
                          rows: 4,
                          value: message,
                          onChange: (e) => setMessage(e.target.value),
                          "data-ocid": "about.contact_message_textarea"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        className: "w-full gap-1.5",
                        disabled: submitting,
                        "data-ocid": "about.contact_submit_button",
                        children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin",
                              "aria-hidden": "true"
                            }
                          ),
                          "Sending…"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          "Send Message ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ] })
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "footer",
      {
        className: "bg-card border-t border-border/50 py-10 px-4",
        "data-ocid": "about.footer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl text-foreground", children: [
              "Price",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Wise" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "nav",
            {
              className: "flex flex-wrap justify-center gap-1",
              "aria-label": "Footer navigation",
              children: FOOTER_LINKS.map(({ label, to }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to,
                  className: "px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth",
                  "data-ocid": `about.footer_link.${label.toLowerCase()}`,
                  children: label
                },
                label
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center md:text-right", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". Built with love using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-primary hover:underline",
                children: "caffeine.ai"
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
}
export {
  AboutPage as default
};
