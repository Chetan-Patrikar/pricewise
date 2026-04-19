import { v as useWishlist, m as useComparison, j as jsxRuntimeExports, H as Heart, C as ChartColumn, B as Badge, L as Link, a as Button } from "./index-B4L6VRFV.js";
import { C as Check, P as PLATFORM_COLORS, E as ExternalLink } from "./index-J61HW4zR.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { T as TrendingDown, S as Star } from "./trending-down-B3YFUVU9.js";
function getBestDeal(platforms) {
  const inStock = platforms.filter((p) => p.inStock);
  if (inStock.length === 0) return platforms[0] ?? null;
  return inStock.reduce(
    (best, p) => p.price < best.price ? p : best,
    inStock[0]
  );
}
function RatingStars({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: `w-3 h-3 ${star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`
    },
    star
  )) });
}
function ProductCard({
  product,
  index = 0,
  showCompareButton = true
}) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isSelected, toggleComparison, canAdd } = useComparison();
  const wishlisted = isInWishlist(product.id);
  const inComparison = isSelected(product.id);
  const bestDeal = getBestDeal(product.platforms);
  const bestPrice = (bestDeal == null ? void 0 : bestDeal.price) ?? 0;
  const maxDiscount = Math.max(...product.platforms.map((p) => p.discount));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.08 },
      className: `group relative rounded-xl overflow-hidden border transition-smooth cursor-pointer
        ${inComparison ? "border-primary/60 ring-2 ring-primary/30 bg-card shadow-elevated" : "border-border/60 bg-card hover:border-border hover:shadow-elevated"}`,
      "data-ocid": `product.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 z-10 flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(product.id);
              },
              className: `w-8 h-8 rounded-full flex items-center justify-center transition-smooth backdrop-blur-sm border ${wishlisted ? "bg-red-500/20 border-red-400/50 text-red-400" : "bg-card/80 border-border/50 text-muted-foreground hover:text-red-400 hover:bg-red-500/10"}`,
              "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
              "data-ocid": `product.wishlist_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  className: `w-3.5 h-3.5 ${wishlisted ? "fill-red-400" : ""}`
                }
              )
            }
          ),
          showCompareButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleComparison(product);
              },
              disabled: !inComparison && !canAdd,
              className: `w-8 h-8 rounded-full flex items-center justify-center transition-smooth backdrop-blur-sm border ${inComparison ? "bg-primary/20 border-primary/50 text-primary" : "bg-card/80 border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed"}`,
              "aria-label": inComparison ? "Remove from comparison" : "Add to comparison",
              "data-ocid": `product.compare_button.${index + 1}`,
              children: inComparison ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        maxDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-2.5 h-2.5 mr-0.5" }),
          maxDiscount,
          "% OFF"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: { id: product.id }, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-48 bg-muted/30 overflow-hidden flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.title,
              className: "h-full w-full object-contain group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] mb-1.5", children: product.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-foreground leading-snug line-clamp-2 min-h-[2.5rem]", children: product.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: product.brand })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RatingStars, { rating: product.averageRating }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: product.averageRating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "(",
                product.reviewCount.toLocaleString(),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-3", children: product.platforms.slice(0, 3).map((pp, i) => {
              const isBest = pp.platform === (bestDeal == null ? void 0 : bestDeal.platform);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-smooth ${isBest ? "bg-accent/15 border border-accent/30" : "bg-muted/30 border border-transparent"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-2 h-2 rounded-full shrink-0",
                          style: { backgroundColor: PLATFORM_COLORS[pp.platform] }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `font-medium ${isBest ? "text-foreground" : "text-muted-foreground"}`,
                          children: pp.platform
                        }
                      ),
                      isBest && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[9px] px-1 py-0 bg-accent text-accent-foreground border-0 leading-none", children: "BEST" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      !pp.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: "OOS" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `font-bold ${isBest ? "text-accent" : "text-foreground"}`,
                          children: [
                            "$",
                            pp.price.toFixed(2)
                          ]
                        }
                      )
                    ] })
                  ]
                },
                `${pp.platform}-${i}`
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Best Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-foreground font-display", children: [
                  "$",
                  bestPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs rounded-lg",
                    onClick: (e) => e.stopPropagation(),
                    "data-ocid": `product.view_button.${index + 1}`,
                    children: "View"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-xs rounded-lg bg-primary hover:bg-primary/90",
                    onClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (bestDeal == null ? void 0 : bestDeal.buyNowUrl)
                        window.open(bestDeal.buyNowUrl, "_blank");
                    },
                    "data-ocid": `product.buy_button.${index + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 mr-1" }),
                      "Buy"
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};
