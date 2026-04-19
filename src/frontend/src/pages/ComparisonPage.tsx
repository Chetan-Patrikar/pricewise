import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/hooks/useComparison";
import { useComparisonStore } from "@/store/comparisonStore";
import { PLATFORM_COLORS, PLATFORM_ICONS, SAMPLE_PRODUCTS } from "@/types";
import type { Platform, PlatformPrice, Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  Check,
  Copy,
  ExternalLink,
  Plus,
  Share2,
  Star,
  Tag,
  Trash2,
  TrendingDown,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";

// ── helpers ──────────────────────────────────────────────────────────────────

function getLowestInStockPrice(product: Product): number {
  const inStock = product.platforms.filter((p) => p.inStock);
  const list = inStock.length > 0 ? inStock : product.platforms;
  return Math.min(...list.map((p) => p.price));
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3.5 h-3.5 ${
              s <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : s - 0.5 <= rating
                  ? "fill-amber-400/50 text-amber-400"
                  : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground">
        {rating.toFixed(1)} · {count.toLocaleString()} reviews
      </span>
    </div>
  );
}

function PlatformRow({
  pp,
  isBestPrice,
}: {
  pp: PlatformPrice;
  isBestPrice: boolean;
}) {
  const color = PLATFORM_COLORS[pp.platform as Platform] ?? "#6B7280";
  const icon = PLATFORM_ICONS[pp.platform as Platform] ?? "🛍️";

  return (
    <div
      className={`rounded-lg border p-2.5 transition-smooth ${
        isBestPrice
          ? "border-accent/50 bg-accent/5"
          : "border-border/40 bg-muted/20"
      } ${!pp.inStock ? "opacity-60" : ""}`}
    >
      {/* Platform header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-base leading-none">{icon}</span>
          <span className="text-xs font-bold truncate" style={{ color: color }}>
            {pp.platform}
          </span>
        </div>
        {isBestPrice && (
          <Badge className="bg-accent/20 text-accent border-accent/30 text-[9px] px-1.5 py-0 h-4 border shrink-0">
            <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
            Best
          </Badge>
        )}
      </div>

      {/* Price block */}
      <div className="flex items-end gap-1.5 flex-wrap mb-2">
        <span
          className={`text-sm font-bold ${isBestPrice ? "text-accent" : "text-foreground"}`}
        >
          ${pp.price.toFixed(2)}
        </span>
        {pp.discount > 0 && (
          <>
            <span className="text-[10px] text-muted-foreground line-through">
              ${pp.originalPrice.toFixed(2)}
            </span>
            <Badge className="bg-destructive/10 text-destructive border-destructive/20 border text-[9px] px-1 py-0 h-4">
              <Tag className="w-2 h-2 mr-0.5" />
              {pp.discount}% off
            </Badge>
          </>
        )}
      </div>

      {/* Stock + Buy */}
      <div className="flex items-center justify-between gap-1.5">
        <span
          className={`text-[10px] flex items-center gap-1 font-medium ${
            pp.inStock ? "text-emerald-500" : "text-muted-foreground"
          }`}
        >
          {pp.inStock ? (
            <Check className="w-3 h-3" />
          ) : (
            <X className="w-3 h-3" />
          )}
          {pp.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <Button
          size="sm"
          variant={isBestPrice ? "default" : "outline"}
          disabled={!pp.inStock}
          className="h-6 px-2 text-[10px] gap-1"
          onClick={() => pp.buyNowUrl && window.open(pp.buyNowUrl, "_blank")}
          data-ocid="comparison.buy_now_button"
        >
          <ExternalLink className="w-2.5 h-2.5" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}

// ── empty slot ────────────────────────────────────────────────────────────────

function EmptySlot({ index }: { index: number }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[360px] rounded-xl border-2 border-dashed border-border/40 bg-muted/10 p-6 text-center transition-smooth hover:border-primary/40 hover:bg-primary/5"
      data-ocid={`comparison.empty_slot.${index}`}
    >
      <div className="w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center mb-3">
        <Plus className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-xs text-muted-foreground mb-3">Add a product</p>
      <Link to="/products">
        <Button
          size="sm"
          variant="outline"
          className="text-xs gap-1.5"
          data-ocid="comparison.add_product_link"
        >
          <Plus className="w-3 h-3" />
          Browse Products
        </Button>
      </Link>
    </div>
  );
}

// ── product column header ─────────────────────────────────────────────────────

function ProductColumn({
  product,
  index,
  isWinner,
  lowestPrice,
  onRemove,
}: {
  product: Product;
  index: number;
  isWinner: boolean;
  lowestPrice: number;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className={`relative flex flex-col rounded-xl border p-4 ${
        isWinner
          ? "border-accent/60 bg-accent/5 ring-2 ring-accent/25 shadow-elevated"
          : "border-border/50 bg-card"
      }`}
      data-ocid={`comparison.product_card.${index + 1}`}
    >
      {/* Best deal banner */}
      {isWinner && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-accent text-accent-foreground text-[10px] border-0 shadow-sm px-2 gap-1">
            <TrendingDown className="w-2.5 h-2.5" />
            Best Deal
          </Badge>
        </div>
      )}

      {/* Remove */}
      <button
        type="button"
        onClick={() => onRemove(product.id)}
        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-muted/60 hover:bg-destructive/20 hover:text-destructive flex items-center justify-center transition-smooth"
        aria-label={`Remove ${product.title}`}
        data-ocid={`comparison.remove_button.${index + 1}`}
      >
        <X className="w-3 h-3" />
      </button>

      {/* Image */}
      <div className="flex justify-center mb-3 pt-2">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-28 h-28 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
      </div>

      {/* Title + brand */}
      <h3 className="font-semibold text-xs text-foreground line-clamp-2 mb-1 text-center leading-snug">
        {product.title}
      </h3>

      {/* Badges */}
      <div className="flex flex-wrap gap-1 justify-center mb-3">
        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
          {product.brand}
        </Badge>
        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
          {product.category}
        </Badge>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating
          rating={product.averageRating}
          count={product.reviewCount}
        />
      </div>

      {/* Best price summary */}
      <div className="text-center mb-4">
        <span
          className={`text-xl font-bold font-display ${isWinner ? "text-accent" : "text-foreground"}`}
        >
          ${lowestPrice.toFixed(2)}
        </span>
        <p className="text-[10px] text-muted-foreground">lowest price</p>
      </div>

      {/* Platform rows */}
      <div className="flex flex-col gap-2">
        {product.platforms.map((pp) => {
          const isBestPrice = pp.price === lowestPrice && pp.inStock;
          return (
            <PlatformRow
              key={`${product.id}-${pp.platform}`}
              pp={pp}
              isBestPrice={isBestPrice}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────

export default function ComparisonPage() {
  const { selectedIds, removeProduct, clearAll } = useComparison();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Seed comparison from ?ids= URL param on mount (enables shared comparison links)
  // addProduct is a stable Zustand action; useRef avoids re-running the effect
  const addProductRef = useCallback(
    (id: string) => useComparisonStore.getState().addProduct(id),
    [],
  );
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idsParam = params.get("ids");
    if (!idsParam) return;
    const ids = idsParam
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    for (const id of ids) {
      const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
      if (product) {
        addProductRef(id);
      }
    }
  }, [addProductRef]);

  // Sync URL params when selection changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedIds.length > 0) {
      url.searchParams.set("ids", selectedIds.join(","));
    } else {
      url.searchParams.delete("ids");
    }
    window.history.replaceState(null, "", url.toString());
  }, [selectedIds]);

  const selectedProducts = useMemo(
    () =>
      selectedIds
        .map((id) => SAMPLE_PRODUCTS.find((p) => p.id === id))
        .filter((p): p is Product => Boolean(p)),
    [selectedIds],
  );

  const lowestPrices = useMemo(
    () => selectedProducts.map(getLowestInStockPrice),
    [selectedProducts],
  );

  const winnerIdx = useMemo(() => {
    if (lowestPrices.length === 0) return -1;
    return lowestPrices.indexOf(Math.min(...lowestPrices));
  }, [lowestPrices]);

  const handleShare = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("ids", selectedIds.join(","));
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [selectedIds]);

  const handleClearAll = useCallback(() => {
    clearAll();
    navigate({ to: "/comparison" });
  }, [clearAll, navigate]);

  // ── empty state ──────────────────────────────────────────────────────────

  if (selectedProducts.length === 0) {
    return (
      <div
        className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8"
        data-ocid="comparison.empty_state"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Compare Products
          </h2>
          <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
            Select up to 4 products from the listings and see them side-by-side
            with real-time pricing across all platforms.
          </p>
          <Link to="/products">
            <Button
              size="lg"
              className="gap-2"
              data-ocid="comparison.browse_button"
            >
              <Plus className="w-4 h-4" />
              Browse Products
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── comparison view ──────────────────────────────────────────────────────

  const emptySlots = Math.max(0, 2 - selectedProducts.length);

  return (
    <div className="bg-background min-h-screen" data-ocid="comparison.page">
      {/* Page header */}
      <div className="bg-card border-b border-border/50 sticky top-0 z-20 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Product Comparison
            </h1>
            <p className="text-xs text-muted-foreground">
              {selectedProducts.length} of 4 products · comparing across{" "}
              {
                [
                  ...new Set(
                    selectedProducts.flatMap((p) =>
                      p.platforms.map((pp) => pp.platform),
                    ),
                  ),
                ].length
              }{" "}
              platforms
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="gap-1.5 text-xs"
              data-ocid="comparison.share_button"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </>
              )}
            </Button>

            {selectedProducts.length < 4 && (
              <Link to="/products">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-xs"
                  data-ocid="comparison.add_more_button"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Product
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="gap-1.5 text-xs text-muted-foreground hover:text-destructive"
              data-ocid="comparison.clear_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All
            </Button>
          </div>
        </div>
      </div>

      {/* Comparison table — horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <div
          className="container max-w-7xl mx-auto px-4 py-8"
          style={{
            minWidth: `${Math.max(selectedProducts.length + emptySlots, 2) * 240 + 60}px`,
          }}
        >
          {/* Winner callout */}
          {winnerIdx >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-3 rounded-xl bg-accent/10 border border-accent/25 flex items-center gap-3"
              data-ocid="comparison.winner_banner"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <TrendingDown className="w-4 h-4 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  Best Deal:{" "}
                  <span className="text-accent">
                    {selectedProducts[winnerIdx]?.title}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Lowest price at ${lowestPrices[winnerIdx]?.toFixed(2)} —{" "}
                  {lowestPrices[winnerIdx] !== undefined &&
                  lowestPrices[1] !== undefined &&
                  winnerIdx !== 1
                    ? `saves $${(Math.max(...lowestPrices) - lowestPrices[winnerIdx]).toFixed(2)} vs most expensive`
                    : "great value across all categories"}
                </p>
              </div>
            </motion.div>
          )}

          {/* Product columns grid */}
          <AnimatePresence mode="popLayout">
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${selectedProducts.length + emptySlots}, minmax(220px, 1fr))`,
              }}
            >
              {selectedProducts.map((product, i) => (
                <ProductColumn
                  key={product.id}
                  product={product}
                  index={i}
                  isWinner={i === winnerIdx}
                  lowestPrice={lowestPrices[i]}
                  onRemove={removeProduct}
                />
              ))}

              {/* Empty slots */}
              {Array.from(
                { length: emptySlots },
                (_, i) => selectedProducts.length + i,
              ).map((slotIdx) => (
                <EmptySlot key={`empty-slot-${slotIdx}`} index={slotIdx + 1} />
              ))}
            </div>
          </AnimatePresence>

          {/* Share footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-3 text-xs text-muted-foreground"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>
              Share this comparison —{" "}
              <button
                type="button"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
                onClick={handleShare}
                data-ocid="comparison.share_link"
              >
                copy link
              </button>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
