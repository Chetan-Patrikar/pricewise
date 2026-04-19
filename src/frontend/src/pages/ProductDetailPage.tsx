import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useComparison } from "@/hooks/useComparison";
import { useProduct, useProducts } from "@/hooks/useProducts";
import { useWishlist } from "@/hooks/useWishlist";
import { PLATFORM_COLORS, PLATFORM_ICONS, SAMPLE_PRODUCTS } from "@/types";
import type { PlatformPrice } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BarChart3,
  Check,
  CheckCircle2,
  ExternalLink,
  Heart,
  Package,
  ShoppingCart,
  Star,
  Tag,
  TrendingDown,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ── helpers ── */
function getBestDeal(platforms: PlatformPrice[]): PlatformPrice | null {
  const inStock = platforms.filter((p) => p.inStock);
  if (inStock.length === 0) return platforms[0] ?? null;
  return inStock.reduce(
    (best, p) => (p.price < best.price ? p : best),
    inStock[0],
  );
}

function RatingStars({
  rating,
  size = "md",
}: { rating: number; size?: "sm" | "md" }) {
  const cls = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${cls} ${
            s <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : s - 0.5 <= rating
                ? "fill-amber-400/50 text-amber-400"
                : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

/* ── loading skeleton ── */
function DetailSkeleton() {
  return (
    <div
      className="container max-w-7xl mx-auto px-4 py-8"
      data-ocid="product_detail.loading_state"
    >
      <Skeleton className="h-5 w-32 mb-8" />
      <div className="grid lg:grid-cols-[3fr_2fr] gap-10 mb-12">
        <Skeleton className="h-[480px] rounded-2xl" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-9 w-3/4" />
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <div className="flex gap-2">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
      </div>
      <Skeleton className="h-64 w-full rounded-2xl mb-12" />
      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-48 w-56 shrink-0 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

/* ── 404 state ── */
function NotFoundState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8"
      data-ocid="product_detail.error_state"
    >
      <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-5 shadow-elevated">
        <Package className="w-10 h-10 text-muted-foreground" />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Product Not Found
      </h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        This product doesn't exist or may have been removed. Browse our catalog
        to find great deals.
      </p>
      <Link to="/products">
        <Button data-ocid="product_detail.browse_button">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Browse Products
        </Button>
      </Link>
    </motion.div>
  );
}

/* ── main component ── */
export default function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const { data: product, isLoading } = useProduct(id);
  const { data: allProducts } = useProducts();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isSelected, toggleComparison, canAdd } = useComparison();

  if (isLoading) return <DetailSkeleton />;
  if (!product) return <NotFoundState />;

  const wishlisted = isInWishlist(product.id);
  const inComparison = isSelected(product.id);
  const bestDeal = getBestDeal(product.platforms);
  const maxDiscount = Math.max(...product.platforms.map((p) => p.discount));
  const minPrice = Math.min(
    ...product.platforms.filter((p) => p.inStock).map((p) => p.price),
  );

  const similarProducts = (allProducts ?? SAMPLE_PRODUCTS)
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const sortedPlatforms = [...product.platforms].sort(
    (a, b) => a.price - b.price,
  );

  const priceMin = product.priceHistory
    ? Math.min(...product.priceHistory.map((p) => p.price))
    : 0;
  const priceMax = product.priceHistory
    ? Math.max(...product.priceHistory.map((p) => p.price))
    : 0;

  return (
    <div className="bg-background min-h-screen" data-ocid="product_detail.page">
      {/* Breadcrumb bar */}
      <div className="bg-card border-b border-border/50 px-4 py-3">
        <div className="container max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="product_detail.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            Products
          </Link>
          <span className="text-border">/</span>
          <span className="text-muted-foreground">{product.category}</span>
          <span className="text-border">/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {product.title}
          </span>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* ── Hero section: 60/40 layout ── */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 mb-12">
          {/* Image panel (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative glass rounded-2xl overflow-hidden flex items-center justify-center p-10 min-h-[400px] shadow-elevated"
            data-ocid="product_detail.image_panel"
          >
            {maxDiscount > 0 && (
              <div className="absolute top-5 left-5 z-10">
                <Badge className="bg-accent text-accent-foreground border-0 font-bold text-sm px-3 py-1 shadow-md">
                  <TrendingDown className="w-3.5 h-3.5 mr-1.5" />
                  Up to {maxDiscount}% OFF
                </Badge>
              </div>
            )}
            <motion.img
              src={product.imageUrl}
              alt={product.title}
              className="max-h-[380px] w-full object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
          </motion.div>

          {/* Details panel (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
            data-ocid="product_detail.info_panel"
          >
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs font-semibold">
                {product.category}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs font-semibold text-muted-foreground border-border"
              >
                {product.brand}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <RatingStars rating={product.averageRating} />
              <span className="font-bold text-foreground">
                {product.averageRating}
              </span>
              <span className="text-muted-foreground text-sm">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-1.5 mb-6"
              data-ocid="product_detail.tags"
            >
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Best price hero block */}
            <div className="rounded-2xl border border-accent/40 bg-accent/8 p-5 mb-5 glass-dark">
              <div className="flex items-start justify-between mb-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Best Price Available
                </p>
                <Badge className="bg-accent text-accent-foreground border-0 text-xs font-bold">
                  🏆 Best Deal
                </Badge>
              </div>
              <p className="font-display text-4xl font-black text-accent mb-1">
                ${minPrice.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">
                on{" "}
                <span className="font-semibold text-foreground">
                  {bestDeal?.platform}
                </span>
                {bestDeal && bestDeal.originalPrice > bestDeal.price && (
                  <>
                    {" "}
                    ·{" "}
                    <s className="opacity-70">
                      ${bestDeal.originalPrice.toFixed(2)}
                    </s>
                    <span className="ml-1.5 text-accent font-semibold">
                      Save $
                      {(bestDeal.originalPrice - bestDeal.price).toFixed(2)}
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                className="flex-1 min-w-[140px] gap-2"
                onClick={() => {
                  if (bestDeal?.buyNowUrl)
                    window.open(bestDeal.buyNowUrl, "_blank");
                }}
                data-ocid="product_detail.buy_button"
              >
                <ShoppingCart className="w-4 h-4" />
                Buy at {bestDeal?.platform}
                <ExternalLink className="w-3 h-3" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toggleWishlist(product.id)}
                className={
                  wishlisted
                    ? "border-rose-400/60 text-rose-400 bg-rose-500/10 hover:bg-rose-500/20"
                    : "hover:border-rose-400/40 hover:text-rose-400"
                }
                aria-label={
                  wishlisted ? "Remove from wishlist" : "Add to wishlist"
                }
                data-ocid="product_detail.wishlist_button"
              >
                <Heart
                  className={`w-4 h-4 ${wishlisted ? "fill-rose-400" : ""}`}
                />
              </Button>
              <Button
                variant={inComparison ? "default" : "outline"}
                size="icon"
                onClick={() => toggleComparison(product)}
                disabled={!inComparison && !canAdd}
                aria-label={
                  inComparison ? "Remove from comparison" : "Add to comparison"
                }
                data-ocid="product_detail.compare_button"
              >
                {inComparison ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <BarChart3 className="w-4 h-4" />
                )}
              </Button>
            </div>
            {!inComparison && !canAdd && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Max 4 products in comparison
              </p>
            )}
          </motion.div>
        </div>

        {/* ── Price Comparison Table ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
          data-ocid="product_detail.platforms_section"
        >
          <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full inline-block" />
            Price Comparison Across Platforms
          </h2>

          <div className="glass rounded-2xl overflow-hidden border border-border/60 shadow-elevated">
            {/* Table header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-0 px-5 py-3 border-b border-border/50 bg-muted/30">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Platform
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-right">
                Price
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-right hidden sm:block">
                Original
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-center hidden sm:block">
                Discount
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-center">
                Stock
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground text-right">
                Action
              </span>
            </div>

            {/* Table rows */}
            {sortedPlatforms.map((pp, idx) => {
              const isBest = pp.platform === bestDeal?.platform;
              return (
                <motion.div
                  key={pp.platform}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-0 items-center px-5 py-4 border-b border-border/30 last:border-b-0 transition-smooth ${
                    isBest
                      ? "bg-accent/8 border-l-2 border-l-accent"
                      : "hover:bg-muted/20"
                  }`}
                  data-ocid={`product_detail.platform_row.${idx + 1}`}
                >
                  {/* Platform name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 border border-border/30"
                      style={{
                        backgroundColor: `${PLATFORM_COLORS[pp.platform]}15`,
                      }}
                    >
                      {PLATFORM_ICONS[pp.platform]}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground text-sm truncate">
                          {pp.platform}
                        </span>
                        {isBest && (
                          <Badge className="bg-accent text-accent-foreground border-0 text-[10px] font-bold px-1.5 leading-none shrink-0">
                            BEST PRICE
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Current price */}
                  <div className="text-right">
                    <span
                      className={`font-bold font-display text-base ${
                        isBest ? "text-accent" : "text-foreground"
                      }`}
                    >
                      ${pp.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Original price */}
                  <div className="text-right hidden sm:block">
                    {pp.originalPrice > pp.price ? (
                      <span className="text-xs text-muted-foreground line-through">
                        ${pp.originalPrice.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </div>

                  {/* Discount */}
                  <div className="text-center hidden sm:block">
                    {pp.discount > 0 ? (
                      <Badge
                        variant="outline"
                        className="text-[10px] font-bold text-accent border-accent/40 bg-accent/8 px-1.5"
                      >
                        -{pp.discount}%
                      </Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </div>

                  {/* Stock */}
                  <div className="flex justify-center">
                    {pp.inStock ? (
                      <div className="flex items-center gap-1 text-emerald-500">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-medium hidden lg:inline">
                          In Stock
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <XCircle className="w-4 h-4" />
                        <span className="text-xs font-medium hidden lg:inline">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Buy Now */}
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      variant={isBest ? "default" : "outline"}
                      className={`gap-1.5 text-xs ${isBest ? "bg-accent hover:bg-accent/90 text-accent-foreground border-0" : ""}`}
                      disabled={!pp.inStock}
                      onClick={() => {
                        if (pp.buyNowUrl) window.open(pp.buyNowUrl, "_blank");
                      }}
                      data-ocid={`product_detail.buy_now_button.${idx + 1}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {pp.inStock ? "Buy Now" : "Unavailable"}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Price History Chart ── */}
        {product.priceHistory && product.priceHistory.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl border border-border/60 p-6 mb-12 shadow-elevated"
            data-ocid="product_detail.price_history_section"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full inline-block" />
                Price History (Last 30 Days)
              </h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>
                  Low:{" "}
                  <span className="text-accent font-bold">
                    ${priceMin.toFixed(0)}
                  </span>
                </span>
                <span>
                  High:{" "}
                  <span className="text-foreground font-bold">
                    ${priceMax.toFixed(0)}
                  </span>
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart
                data={product.priceHistory}
                margin={{ left: 0, right: 16, top: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(var(--border))"
                  opacity={0.5}
                />
                <XAxis
                  dataKey="date"
                  tick={{
                    fontSize: 10,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  tickFormatter={(v: string) => v.slice(5)}
                  interval="preserveStartEnd"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fontSize: 10,
                    fill: "oklch(var(--muted-foreground))",
                  }}
                  tickFormatter={(v: number) => `$${v}`}
                  width={56}
                  axisLine={false}
                  tickLine={false}
                  domain={["auto", "auto"]}
                />
                <Tooltip
                  contentStyle={{
                    background: "oklch(var(--popover))",
                    border: "1px solid oklch(var(--border))",
                    borderRadius: "10px",
                    fontSize: "12px",
                    backdropFilter: "blur(12px)",
                  }}
                  labelStyle={{
                    color: "oklch(var(--foreground))",
                    fontWeight: 600,
                  }}
                  formatter={(value: number) => [
                    `$${value.toFixed(2)}`,
                    "Price",
                  ]}
                />
                <ReferenceLine
                  y={priceMin}
                  stroke="oklch(var(--accent))"
                  strokeDasharray="4 4"
                  opacity={0.6}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="oklch(var(--chart-2))"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{
                    r: 5,
                    fill: "oklch(var(--chart-2))",
                    strokeWidth: 0,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.section>
        )}

        {/* ── Similar Products Horizontal Scroll ── */}
        {similarProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-ocid="product_detail.similar_section"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-foreground/40 rounded-full inline-block" />
                Similar Products
              </h2>
              <Link
                to="/products"
                className="text-sm text-accent hover:underline transition-smooth"
              >
                View All
              </Link>
            </div>

            <div
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin"
              style={{ scrollbarWidth: "none" }}
            >
              {similarProducts.map((sim, idx) => {
                const simBest = getBestDeal(sim.platforms);
                const simMaxDiscount = Math.max(
                  ...sim.platforms.map((p) => p.discount),
                );
                return (
                  <Link
                    key={sim.id}
                    to="/product/$id"
                    params={{ id: sim.id }}
                    data-ocid={`product_detail.similar_item.${idx + 1}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.07 }}
                      whileHover={{ y: -4 }}
                      className="w-56 shrink-0 glass rounded-xl overflow-hidden border border-border/60 hover:border-accent/40 hover:shadow-elevated transition-smooth group cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative h-36 bg-muted/30 flex items-center justify-center p-3 overflow-hidden">
                        {simMaxDiscount > 0 && (
                          <div className="absolute top-2 left-2 z-10">
                            <Badge className="bg-accent text-accent-foreground border-0 text-[9px] font-bold px-1.5 py-0.5">
                              -{simMaxDiscount}%
                            </Badge>
                          </div>
                        )}
                        <img
                          src={sim.imageUrl}
                          alt={sim.title}
                          className="h-full w-full object-contain group-hover:scale-105 transition-smooth"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/assets/images/placeholder.svg";
                          }}
                        />
                      </div>

                      {/* Info */}
                      <div className="p-3">
                        <p className="font-semibold text-xs text-foreground line-clamp-2 leading-snug mb-1 min-h-[2.5rem]">
                          {sim.title}
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <RatingStars rating={sim.averageRating} size="sm" />
                          <span className="text-[10px] text-muted-foreground">
                            ({sim.reviewCount.toLocaleString()})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-display font-bold text-accent text-base">
                            ${simBest?.price.toFixed(2)}
                          </p>
                          <span className="text-[10px] text-muted-foreground">
                            {simBest?.platform}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
