import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/hooks/useComparison";
import { useWishlist } from "@/hooks/useWishlist";
import { PLATFORM_COLORS } from "@/types";
import type { PlatformPrice, Product } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Check,
  ExternalLink,
  Heart,
  Star,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
  index?: number;
  showCompareButton?: boolean;
}

function getBestDeal(platforms: PlatformPrice[]): PlatformPrice | null {
  const inStock = platforms.filter((p) => p.inStock);
  if (inStock.length === 0) return platforms[0] ?? null;
  return inStock.reduce(
    (best, p) => (p.price < best.price ? p : best),
    inStock[0],
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

export default function ProductCard({
  product,
  index = 0,
  showCompareButton = true,
}: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isSelected, toggleComparison, canAdd } = useComparison();

  const wishlisted = isInWishlist(product.id);
  const inComparison = isSelected(product.id);
  const bestDeal = getBestDeal(product.platforms);
  const bestPrice = bestDeal?.price ?? 0;
  const maxDiscount = Math.max(...product.platforms.map((p) => p.discount));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative rounded-xl overflow-hidden border transition-smooth cursor-pointer
        ${
          inComparison
            ? "border-primary/60 ring-2 ring-primary/30 bg-card shadow-elevated"
            : "border-border/60 bg-card hover:border-border hover:shadow-elevated"
        }`}
      data-ocid={`product.item.${index + 1}`}
    >
      {/* Wishlist + Compare buttons */}
      <div className="absolute top-3 right-3 z-10 flex gap-1.5">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-smooth backdrop-blur-sm border ${
            wishlisted
              ? "bg-red-500/20 border-red-400/50 text-red-400"
              : "bg-card/80 border-border/50 text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
          }`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-ocid={`product.wishlist_button.${index + 1}`}
        >
          <Heart
            className={`w-3.5 h-3.5 ${wishlisted ? "fill-red-400" : ""}`}
          />
        </button>

        {showCompareButton && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleComparison(product);
            }}
            disabled={!inComparison && !canAdd}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-smooth backdrop-blur-sm border ${
              inComparison
                ? "bg-primary/20 border-primary/50 text-primary"
                : "bg-card/80 border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/10 disabled:opacity-40 disabled:cursor-not-allowed"
            }`}
            aria-label={
              inComparison ? "Remove from comparison" : "Add to comparison"
            }
            data-ocid={`product.compare_button.${index + 1}`}
          >
            {inComparison ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <BarChart3 className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {/* Discount badge */}
      {maxDiscount > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 border-0">
            <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
            {maxDiscount}% OFF
          </Badge>
        </div>
      )}

      <Link to="/product/$id" params={{ id: product.id }} className="block">
        {/* Image */}
        <div className="relative h-48 bg-muted/30 overflow-hidden flex items-center justify-center p-4">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-contain group-hover:scale-105 transition-smooth"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/images/placeholder.svg";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-[10px] mb-1.5">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
              {product.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {product.brand}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <RatingStars rating={product.averageRating} />
            <span className="text-xs font-medium text-foreground">
              {product.averageRating}
            </span>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Prices by platform */}
          <div className="space-y-1.5 mb-3">
            {product.platforms.slice(0, 3).map((pp, i) => {
              const isBest = pp.platform === bestDeal?.platform;
              return (
                <div
                  key={`${pp.platform}-${i}`}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-smooth ${
                    isBest
                      ? "bg-accent/15 border border-accent/30"
                      : "bg-muted/30 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: PLATFORM_COLORS[pp.platform] }}
                    />
                    <span
                      className={`font-medium ${isBest ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {pp.platform}
                    </span>
                    {isBest && (
                      <Badge className="text-[9px] px-1 py-0 bg-accent text-accent-foreground border-0 leading-none">
                        BEST
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {!pp.inStock && (
                      <span className="text-[9px] text-muted-foreground">
                        OOS
                      </span>
                    )}
                    <span
                      className={`font-bold ${isBest ? "text-accent" : "text-foreground"}`}
                    >
                      ${pp.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Best price summary */}
          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <div>
              <p className="text-[10px] text-muted-foreground">Best Price</p>
              <p className="text-lg font-bold text-foreground font-display">
                ${bestPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-1.5">
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs rounded-lg"
                onClick={(e) => e.stopPropagation()}
                data-ocid={`product.view_button.${index + 1}`}
              >
                View
              </Button>
              <Button
                size="sm"
                className="h-7 text-xs rounded-lg bg-primary hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (bestDeal?.buyNowUrl)
                    window.open(bestDeal.buyNowUrl, "_blank");
                }}
                data-ocid={`product.buy_button.${index + 1}`}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Buy
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
