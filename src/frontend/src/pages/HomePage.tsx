import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts, useSearchSuggestions } from "@/hooks/useProducts";
import { SAMPLE_PRODUCTS } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Home,
  Laptop,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Search as SearchIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// ────────────── Static data ──────────────

const TRENDING_SEARCHES = [
  "iPhone 15 Pro",
  "RTX 4090",
  "MacBook Pro M3",
  "Sony XM5",
  "Dyson V15",
  "LG OLED TV",
];

interface CategoryItem {
  label: string;
  icon: ReactNode;
  color: string;
  query: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    label: "Electronics",
    icon: <Laptop className="w-6 h-6" />,
    color: "from-indigo-500/20 to-primary/10 border-primary/30 text-primary",
    query: "Electronics",
  },
  {
    label: "Clothing",
    icon: <Shirt className="w-6 h-6" />,
    color: "from-pink-500/20 to-rose-500/10 border-rose-400/30 text-rose-400",
    query: "Fashion",
  },
  {
    label: "Home & Kitchen",
    icon: <Home className="w-6 h-6" />,
    color:
      "from-amber-500/20 to-orange-500/10 border-amber-400/30 text-amber-400",
    query: "Home Appliances",
  },
  {
    label: "Sports",
    icon: <Dumbbell className="w-6 h-6" />,
    color:
      "from-green-500/20 to-teal-500/10 border-green-400/30 text-green-400",
    query: "Sports",
  },
  {
    label: "Books",
    icon: <BookOpen className="w-6 h-6" />,
    color:
      "from-purple-500/20 to-violet-500/10 border-purple-400/30 text-purple-400",
    query: "Books",
  },
  {
    label: "Beauty",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-accent/20 to-teal-500/10 border-accent/30 text-accent",
    query: "Beauty",
  },
];

// ────────────── Sub-components ──────────────

function HeroSearchBar() {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { data: suggestions = [] } = useSearchSuggestions(term);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function go(q: string) {
    setOpen(false);
    window.location.href = `/products?q=${encodeURIComponent(q)}`;
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown")
      setActive((v) => Math.min(v + 1, suggestions.length - 1));
    else if (e.key === "ArrowUp") setActive((v) => Math.max(v - 1, -1));
    else if (e.key === "Enter") {
      if (active >= 0 && suggestions[active]) go(suggestions[active]);
      else if (term.trim()) go(term.trim());
    } else if (e.key === "Escape") setOpen(false);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1 group">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground transition-smooth group-focus-within:text-accent" />
          <Input
            placeholder="Search products, electronics, brands..."
            className="pl-12 h-14 text-base bg-card/80 backdrop-blur-sm border-border/60 rounded-2xl focus-visible:ring-accent/50 focus-visible:border-accent/60 shadow-elevated"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onFocus={() => term.length >= 2 && setOpen(true)}
            onKeyDown={handleKey}
            data-ocid="home.search_input"
          />
        </div>
        <Button
          size="lg"
          className="h-14 px-8 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated shrink-0"
          onClick={() => term.trim() && go(term.trim())}
          data-ocid="home.search_button"
        >
          Search
        </Button>
      </div>

      {/* Autocomplete dropdown */}
      {open && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 right-0 mt-2 z-50 glass-dark rounded-xl border border-border/40 shadow-elevated overflow-hidden"
          data-ocid="home.autocomplete_dropdown"
        >
          {suggestions.map((s, i) => (
            <button
              key={s}
              type="button"
              onMouseDown={() => go(s)}
              onMouseEnter={() => setActive(i)}
              className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-smooth ${
                active === i
                  ? "bg-accent/20 text-accent"
                  : "text-foreground hover:bg-secondary/60"
              }`}
              data-ocid={`home.autocomplete_item.${i + 1}`}
            >
              <SearchIcon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              {s}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function CategoryCard({
  cat,
  index,
}: {
  cat: CategoryItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
    >
      <Link to="/products" data-ocid={`home.category.${index + 1}`}>
        <div
          className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border bg-gradient-to-br glass transition-smooth cursor-pointer hover:scale-105 hover:shadow-elevated ${cat.color}`}
        >
          <div className="w-14 h-14 rounded-xl bg-card/60 backdrop-blur-sm flex items-center justify-center transition-smooth group-hover:bg-card/90">
            {cat.icon}
          </div>
          <span className="text-sm font-semibold text-foreground text-center leading-tight">
            {cat.label}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function DealsCarousel() {
  const { data: products, isLoading } = useProducts();
  const scrollRef = useRef<HTMLDivElement>(null);

  const dealProducts = (products ?? SAMPLE_PRODUCTS)
    .map((p) => ({
      ...p,
      maxDiscount: Math.max(...p.platforms.map((pl) => pl.discount)),
    }))
    .sort((a, b) => b.maxDiscount - a.maxDiscount)
    .slice(0, 6);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative" data-ocid="home.deals_carousel">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {isLoading
          ? [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[280px] rounded-xl border border-border/60 overflow-hidden"
                data-ocid={`home.deals_loading.${i}`}
              >
                <Skeleton className="h-44 w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-8 w-full" />
                </div>
              </div>
            ))
          : dealProducts.map((product, i) => (
              <div key={product.id} className="snap-start shrink-0 w-[280px]">
                <ProductCard product={product} index={i} />
              </div>
            ))}
      </div>
      {/* Scroll controls */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full glass-dark border border-border/50 flex items-center justify-center shadow-elevated hover:bg-secondary transition-smooth hidden sm:flex"
        aria-label="Scroll left"
        data-ocid="home.deals_scroll_left"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full glass-dark border border-border/50 flex items-center justify-center shadow-elevated hover:bg-secondary transition-smooth hidden sm:flex"
        aria-label="Scroll right"
        data-ocid="home.deals_scroll_right"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>
    </div>
  );
}

// ────────────── Main Page ──────────────

export default function HomePage() {
  const { data: products, isLoading } = useProducts();

  const trendingProducts = (products ?? SAMPLE_PRODUCTS)
    .filter((p) => p.averageRating >= 4.6)
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 8);

  return (
    <div className="flex flex-col" data-ocid="home.page">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-card border-b border-border/40 py-24 px-4"
        data-ocid="home.hero_section"
      >
        {/* Animated gradient layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,oklch(var(--background)/0.4)_100%)]" />
        </div>

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-accent/40 shadow-subtle"
            >
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-sm font-medium text-accent">
                Smart Price Comparison Engine
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-5 leading-[1.05] tracking-tight">
              Find the Best Deals
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                Across All Platforms
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Find the best deals across all platforms — Amazon, Best Buy,
              Walmart, eBay and more. Track price history and never overpay
              again.
            </p>

            {/* Hero search */}
            <HeroSearchBar />

            {/* Trending badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mt-5"
            >
              <span className="text-xs text-muted-foreground pt-1.5 shrink-0">
                Trending:
              </span>
              {TRENDING_SEARCHES.map((term, i) => (
                <a
                  key={term}
                  href={`/products?q=${encodeURIComponent(term)}`}
                  data-ocid={`home.trending.${i + 1}`}
                >
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary/20 hover:text-primary transition-smooth text-xs px-3 py-1 rounded-full"
                  >
                    {term}
                  </Badge>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Deals Carousel ── */}
      <section
        className="bg-background py-16 px-4 border-b border-border/30"
        data-ocid="home.featured_deals_section"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                  Hot Deals
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Featured Deals Today
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Hand-picked products with the deepest discounts right now
              </p>
            </motion.div>
            <Link to="/products" data-ocid="home.deals_view_all_link">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-xl"
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
          <DealsCarousel />
        </div>
      </section>

      {/* ── Category Quick Access ── */}
      <section
        className="bg-muted/30 py-16 px-4 border-b border-border/30"
        data-ocid="home.categories_section"
      >
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <Badge
              variant="secondary"
              className="mb-3 text-xs font-semibold uppercase tracking-wider"
            >
              <ShoppingBag className="w-3 h-3 mr-1" />
              Browse by Category
            </Badge>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Explore deals across all product categories
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.label} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Products ── */}
      <section
        className="bg-background py-16 px-4 border-b border-border/30"
        data-ocid="home.trending_section"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Highly Rated
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Trending Products
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Top-rated products loved by thousands of buyers
              </p>
            </motion.div>
            <Link to="/products" data-ocid="home.trending_view_all_link">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-xl"
              >
                See All
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              data-ocid="home.trending_loading_state"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 overflow-hidden"
                >
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              data-ocid="home.trending_products_list"
            >
              {trendingProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Comparison CTA Banner ── */}
      <section
        className="bg-card py-20 px-4"
        data-ocid="home.comparison_cta_section"
      >
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl glass-dark border border-primary/30 px-8 md:px-16 py-14 text-center shadow-elevated"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-primary fill-primary/30" />
              </motion.div>

              <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 font-semibold">
                Side-by-Side Comparison
              </Badge>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Compare products side-by-side
                <br />
                <span className="text-accent">to find the best deal</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base leading-relaxed">
                Add up to 4 products and compare prices, ratings, features, and
                platform availability in a single view. Make smarter buying
                decisions.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/comparison" data-ocid="home.cta_compare_button">
                  <Button
                    size="lg"
                    className="rounded-2xl px-8 h-13 bg-primary hover:bg-primary/90 shadow-elevated font-semibold"
                  >
                    Start Comparing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/products" data-ocid="home.cta_browse_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl px-8 h-13 border-border/60 hover:bg-secondary font-semibold"
                  >
                    Browse All Products
                  </Button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/30">
                {[
                  { value: "500+", label: "Products Tracked" },
                  { value: "6", label: "Major Platforms" },
                  { value: "30 days", label: "Price History" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
