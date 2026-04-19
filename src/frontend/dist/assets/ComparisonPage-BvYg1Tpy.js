import { c as createLucideIcon, m as useComparison, l as useNavigate, r as reactExports, n as useComparisonStore, j as jsxRuntimeExports, C as ChartColumn, L as Link, a as Button, B as Badge, X } from "./index-B4L6VRFV.js";
import { S as SAMPLE_PRODUCTS, C as Check, P as PLATFORM_COLORS, b as PLATFORM_ICONS, E as ExternalLink } from "./index-J61HW4zR.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { T as Trash2 } from "./trash-2-BSMLLGGm.js";
import { T as TrendingDown, S as Star } from "./trending-down-B3YFUVU9.js";
import { A as AnimatePresence } from "./index-YAD6EM98.js";
import { T as Tag } from "./tag-DXKvSIid.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function getLowestInStockPrice(product) {
  const inStock = product.platforms.filter((p) => p.inStock);
  const list = inStock.length > 0 ? inStock : product.platforms;
  return Math.min(...list.map((p) => p.price));
}
function StarRating({ rating, count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `w-3.5 h-3.5 ${s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : s - 0.5 <= rating ? "fill-amber-400/50 text-amber-400" : "text-muted-foreground/30"}`
      },
      s
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
      rating.toFixed(1),
      " · ",
      count.toLocaleString(),
      " reviews"
    ] })
  ] });
}
function PlatformRow({
  pp,
  isBestPrice
}) {
  const color = PLATFORM_COLORS[pp.platform] ?? "#6B7280";
  const icon = PLATFORM_ICONS[pp.platform] ?? "🛍️";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-lg border p-2.5 transition-smooth ${isBestPrice ? "border-accent/50 bg-accent/5" : "border-border/40 bg-muted/20"} ${!pp.inStock ? "opacity-60" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold truncate", style: { color }, children: pp.platform })
          ] }),
          isBestPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/20 text-accent border-accent/30 text-[9px] px-1.5 py-0 h-4 border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-2.5 h-2.5 mr-0.5" }),
            "Best"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1.5 flex-wrap mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-sm font-bold ${isBestPrice ? "text-accent" : "text-foreground"}`,
              children: [
                "$",
                pp.price.toFixed(2)
              ]
            }
          ),
          pp.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground line-through", children: [
              "$",
              pp.originalPrice.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-destructive/10 text-destructive border-destructive/20 border text-[9px] px-1 py-0 h-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2 h-2 mr-0.5" }),
              pp.discount,
              "% off"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-[10px] flex items-center gap-1 font-medium ${pp.inStock ? "text-emerald-500" : "text-muted-foreground"}`,
              children: [
                pp.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                pp.inStock ? "In Stock" : "Out of Stock"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: isBestPrice ? "default" : "outline",
              disabled: !pp.inStock,
              className: "h-6 px-2 text-[10px] gap-1",
              onClick: () => pp.buyNowUrl && window.open(pp.buyNowUrl, "_blank"),
              "data-ocid": "comparison.buy_now_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5" }),
                "Buy Now"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function EmptySlot({ index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center min-h-[360px] rounded-xl border-2 border-dashed border-border/40 bg-muted/10 p-6 text-center transition-smooth hover:border-primary/40 hover:bg-primary/5",
      "data-ocid": `comparison.empty_slot.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Add a product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "text-xs gap-1.5",
            "data-ocid": "comparison.add_product_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              "Browse Products"
            ]
          }
        ) })
      ]
    }
  );
}
function ProductColumn({
  product,
  index,
  isWinner,
  lowestPrice,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { delay: index * 0.08, duration: 0.3 },
      className: `relative flex flex-col rounded-xl border p-4 ${isWinner ? "border-accent/60 bg-accent/5 ring-2 ring-accent/25 shadow-elevated" : "border-border/50 bg-card"}`,
      "data-ocid": `comparison.product_card.${index + 1}`,
      children: [
        isWinner && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent text-accent-foreground text-[10px] border-0 shadow-sm px-2 gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-2.5 h-2.5" }),
          "Best Deal"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onRemove(product.id),
            className: "absolute top-2 right-2 w-6 h-6 rounded-full bg-muted/60 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center transition-smooth",
            "aria-label": `Remove ${product.title}`,
            "data-ocid": `comparison.remove_button.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.title,
            className: "w-28 h-28 object-contain",
            onError: (e) => {
              e.target.src = "/assets/images/placeholder.svg";
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-xs text-foreground line-clamp-2 mb-1 text-center leading-snug", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 justify-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] px-1.5 py-0 h-4", children: product.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0 h-4", children: product.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StarRating,
          {
            rating: product.averageRating,
            count: product.reviewCount
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-xl font-bold font-display ${isWinner ? "text-accent" : "text-foreground"}`,
              children: [
                "$",
                lowestPrice.toFixed(2)
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "lowest price" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: product.platforms.map((pp) => {
          const isBestPrice = pp.price === lowestPrice && pp.inStock;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            PlatformRow,
            {
              pp,
              isBestPrice
            },
            `${product.id}-${pp.platform}`
          );
        }) })
      ]
    },
    product.id
  );
}
function ComparisonPage() {
  var _a, _b;
  const { selectedIds, removeProduct, clearAll } = useComparison();
  const navigate = useNavigate();
  const [copied, setCopied] = reactExports.useState(false);
  const addProductRef = reactExports.useCallback(
    (id) => useComparisonStore.getState().addProduct(id),
    []
  );
  reactExports.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idsParam = params.get("ids");
    if (!idsParam) return;
    const ids = idsParam.split(",").map((s) => s.trim()).filter(Boolean);
    for (const id of ids) {
      const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
      if (product) {
        addProductRef(id);
      }
    }
  }, [addProductRef]);
  reactExports.useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedIds.length > 0) {
      url.searchParams.set("ids", selectedIds.join(","));
    } else {
      url.searchParams.delete("ids");
    }
    window.history.replaceState(null, "", url.toString());
  }, [selectedIds]);
  const selectedProducts = reactExports.useMemo(
    () => selectedIds.map((id) => SAMPLE_PRODUCTS.find((p) => p.id === id)).filter((p) => Boolean(p)),
    [selectedIds]
  );
  const lowestPrices = reactExports.useMemo(
    () => selectedProducts.map(getLowestInStockPrice),
    [selectedProducts]
  );
  const winnerIdx = reactExports.useMemo(() => {
    if (lowestPrices.length === 0) return -1;
    return lowestPrices.indexOf(Math.min(...lowestPrices));
  }, [lowestPrices]);
  const handleShare = reactExports.useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("ids", selectedIds.join(","));
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  }, [selectedIds]);
  const handleClearAll = reactExports.useCallback(() => {
    clearAll();
    navigate({ to: "/comparison" });
  }, [clearAll, navigate]);
  if (selectedProducts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-[70vh] flex flex-col items-center justify-center text-center p-8",
        "data-ocid": "comparison.empty_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.4 },
            className: "flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-10 h-10 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Compare Products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-sm leading-relaxed", children: "Select up to 4 products from the listings and see them side-by-side with real-time pricing across all platforms." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "gap-2",
                  "data-ocid": "comparison.browse_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                    "Browse Products"
                  ]
                }
              ) })
            ]
          }
        )
      }
    );
  }
  const emptySlots = Math.max(0, 2 - selectedProducts.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "comparison.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border/50 sticky top-0 z-20 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Product Comparison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          selectedProducts.length,
          " of 4 products · comparing across",
          " ",
          [
            ...new Set(
              selectedProducts.flatMap(
                (p) => p.platforms.map((pp) => pp.platform)
              )
            )
          ].length,
          " ",
          "platforms"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleShare,
            className: "gap-1.5 text-xs",
            "data-ocid": "comparison.share_button",
            children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-accent" }),
              "Copied!"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" }),
              "Share"
            ] })
          }
        ),
        selectedProducts.length < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "gap-1.5 text-xs",
            "data-ocid": "comparison.add_more_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Product"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: handleClearAll,
            className: "gap-1.5 text-xs text-muted-foreground hover:text-destructive",
            "data-ocid": "comparison.clear_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
              "Clear All"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-7xl mx-auto px-4 py-8",
        style: {
          minWidth: `${Math.max(selectedProducts.length + emptySlots, 2) * 240 + 60}px`
        },
        children: [
          winnerIdx >= 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -8 },
              animate: { opacity: 1, y: 0 },
              className: "mb-6 p-3 rounded-xl bg-accent/10 border border-accent/25 flex items-center gap-3",
              "data-ocid": "comparison.winner_banner",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                    "Best Deal:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: (_a = selectedProducts[winnerIdx]) == null ? void 0 : _a.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Lowest price at $",
                    (_b = lowestPrices[winnerIdx]) == null ? void 0 : _b.toFixed(2),
                    " —",
                    " ",
                    lowestPrices[winnerIdx] !== void 0 && lowestPrices[1] !== void 0 && winnerIdx !== 1 ? `saves $${(Math.max(...lowestPrices) - lowestPrices[winnerIdx]).toFixed(2)} vs most expensive` : "great value across all categories"
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid gap-4",
              style: {
                gridTemplateColumns: `repeat(${selectedProducts.length + emptySlots}, minmax(220px, 1fr))`
              },
              children: [
                selectedProducts.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProductColumn,
                  {
                    product,
                    index: i,
                    isWinner: i === winnerIdx,
                    lowestPrice: lowestPrices[i],
                    onRemove: removeProduct
                  },
                  product.id
                )),
                Array.from(
                  { length: emptySlots },
                  (_, i) => selectedProducts.length + i
                ).map((slotIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(EmptySlot, { index: slotIdx + 1 }, `empty-slot-${slotIdx}`))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4 },
              className: "mt-8 flex items-center justify-center gap-3 text-xs text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Share this comparison —",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "underline underline-offset-2 hover:text-foreground transition-colors",
                      onClick: handleShare,
                      "data-ocid": "comparison.share_link",
                      children: "copy link"
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  ComparisonPage as default
};
