import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchProducts, useSearchSuggestions } from "@/hooks/useProducts";
import { CATEGORIES, SAMPLE_PRODUCTS } from "@/types";
import type { SearchQuery } from "@/types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  PackageSearch,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/* ─────────────────────────────── constants ─────────────────────────────── */

const SORT_OPTIONS = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "discount", label: "Biggest Discount" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

const BRANDS = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.brand))).sort();

const PRICE_MAX_CAP = 3000;
const RATING_OPTIONS = [4.5, 4, 3.5, 3] as const;

/* ─────────────────────────── URL param helpers ──────────────────────────── */

interface FiltersState {
  q: string;
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: SortValue;
}

function defaultFilters(): FiltersState {
  return {
    q: "",
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: PRICE_MAX_CAP,
    minRating: 0,
    sort: "relevance",
  };
}

/* ──────────────────────── subcomponent: FilterSection ───────────────────── */

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground"
      >
        {title}
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────── subcomponent: StarRow ─────────────────────── */

function StarRow({
  rating,
  selected,
  onToggle,
}: { rating: number; selected: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm transition-smooth ${
        selected
          ? "bg-primary/15 text-foreground font-medium"
          : "hover:bg-muted/50 text-muted-foreground"
      }`}
      data-ocid={`products.rating_filter.${rating}`}
    >
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3 h-3 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
      <span className="text-xs">{rating}+ stars</span>
    </button>
  );
}

/* ─────────────────────────── subcomponent: PriceSlider ─────────────────── */

function PriceRangeSlider({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: {
  minPrice: number;
  maxPrice: number;
  onMinChange: (v: number) => void;
  onMaxChange: (v: number) => void;
}) {
  const minPct = (minPrice / PRICE_MAX_CAP) * 100;
  const maxPct = (maxPrice / PRICE_MAX_CAP) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>${minPrice.toLocaleString()}</span>
        <span>${maxPrice.toLocaleString()}</span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute inset-x-0 h-1.5 bg-muted rounded-full" />
        <div
          className="absolute h-1.5 bg-primary rounded-full"
          style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
        />
        {/* Min thumb */}
        <input
          type="range"
          min={0}
          max={PRICE_MAX_CAP}
          step={50}
          value={minPrice}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v < maxPrice) onMinChange(v);
          }}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-5 z-20"
          data-ocid="products.min_price_slider"
        />
        {/* Max thumb */}
        <input
          type="range"
          min={0}
          max={PRICE_MAX_CAP}
          step={50}
          value={maxPrice}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v > minPrice) onMaxChange(v);
          }}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-5 z-10"
          data-ocid="products.max_price_slider"
        />
        {/* Visual thumbs */}
        <div
          className="absolute w-4 h-4 rounded-full bg-primary border-2 border-background shadow-elevated z-30 pointer-events-none"
          style={{ left: `calc(${minPct}% - 8px)` }}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-primary border-2 border-background shadow-elevated z-30 pointer-events-none"
          style={{ left: `calc(${maxPct}% - 8px)` }}
        />
      </div>
      <div className="flex gap-2">
        <Input
          type="number"
          min={0}
          max={maxPrice}
          step={50}
          value={minPrice}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v >= 0 && v < maxPrice) onMinChange(v);
          }}
          className="h-7 text-xs text-center px-1"
          data-ocid="products.min_price_input"
        />
        <span className="self-center text-xs text-muted-foreground">–</span>
        <Input
          type="number"
          min={minPrice}
          max={PRICE_MAX_CAP}
          step={50}
          value={maxPrice}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v > minPrice && v <= PRICE_MAX_CAP) onMaxChange(v);
          }}
          className="h-7 text-xs text-center px-1"
          data-ocid="products.max_price_input"
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════ main page ══════════════════════════════ */

export default function ProductsPage() {
  // ── Read URL search params ────────────────────────────────────────────
  const rawSearch = useSearch({ strict: false }) as Record<
    string,
    string | undefined
  >;
  const navigate = useNavigate();

  const parseFiltersFromUrl = useCallback((): FiltersState => {
    return {
      q: rawSearch.q ?? "",
      categories: rawSearch.category
        ? rawSearch.category.split(",").filter(Boolean)
        : [],
      brands: rawSearch.brand ? rawSearch.brand.split(",").filter(Boolean) : [],
      minPrice: rawSearch.minPrice ? Number(rawSearch.minPrice) : 0,
      maxPrice: rawSearch.maxPrice ? Number(rawSearch.maxPrice) : PRICE_MAX_CAP,
      minRating: rawSearch.minRating ? Number(rawSearch.minRating) : 0,
      sort: (rawSearch.sort as SortValue) ?? "relevance",
    };
  }, [
    rawSearch.q,
    rawSearch.category,
    rawSearch.brand,
    rawSearch.minPrice,
    rawSearch.maxPrice,
    rawSearch.minRating,
    rawSearch.sort,
  ]);

  const [filters, setFilters] = useState<FiltersState>(parseFiltersFromUrl);
  const [inputTerm, setInputTerm] = useState(filters.q);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // ── Sync URL → state when URL changes externally ──────────────────────
  useEffect(() => {
    const parsed = parseFiltersFromUrl();
    setFilters(parsed);
    setInputTerm(parsed.q);
  }, [parseFiltersFromUrl]);

  // ── Write filters to URL ──────────────────────────────────────────────
  const pushFilters = useCallback(
    (next: FiltersState) => {
      const params: Record<string, string> = {};
      if (next.q) params.q = next.q;
      if (next.categories.length) params.category = next.categories.join(",");
      if (next.brands.length) params.brand = next.brands.join(",");
      if (next.minPrice > 0) params.minPrice = String(next.minPrice);
      if (next.maxPrice < PRICE_MAX_CAP)
        params.maxPrice = String(next.maxPrice);
      if (next.minRating > 0) params.minRating = String(next.minRating);
      if (next.sort !== "relevance") params.sort = next.sort;
      navigate({ to: "/products", search: params });
    },
    [navigate],
  );

  const updateFilter = useCallback(
    <K extends keyof FiltersState>(key: K, value: FiltersState[K]) => {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };
        pushFilters(next);
        return next;
      });
    },
    [pushFilters],
  );

  // ── Toggle helpers ────────────────────────────────────────────────────
  const toggleCategory = (cat: string) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    updateFilter("categories", next);
  };

  const toggleBrand = (brand: string) => {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    updateFilter("brands", next);
  };

  const clearFilters = () => {
    const def = defaultFilters();
    setFilters(def);
    setInputTerm("");
    navigate({ to: "/products", search: {} });
  };

  // ── Build search query for hook ───────────────────────────────────────
  const searchQuery = useMemo<SearchQuery>(
    () => ({
      searchTerm: filters.q || undefined,
      category:
        filters.categories.length === 1 ? filters.categories[0] : undefined,
      brand: filters.brands.length === 1 ? filters.brands[0] : undefined,
      minPrice: filters.minPrice > 0 ? filters.minPrice : undefined,
      maxPrice: filters.maxPrice < PRICE_MAX_CAP ? filters.maxPrice : undefined,
      minRating: filters.minRating > 0 ? filters.minRating : undefined,
    }),
    [filters],
  );

  const { data: rawProducts, isLoading } = useSearchProducts(searchQuery);
  const { data: suggestions } = useSearchSuggestions(inputTerm);

  // ── Multi-brand / multi-category client-side filtering ────────────────
  const products = useMemo(() => {
    let list = rawProducts ?? [];
    if (filters.categories.length > 1) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.brands.length > 1) {
      list = list.filter((p) => filters.brands.includes(p.brand));
    }
    // Sort
    if (filters.sort === "price_asc") {
      list = [...list].sort(
        (a, b) =>
          Math.min(...a.platforms.map((p) => p.price)) -
          Math.min(...b.platforms.map((p) => p.price)),
      );
    } else if (filters.sort === "price_desc") {
      list = [...list].sort(
        (a, b) =>
          Math.min(...b.platforms.map((p) => p.price)) -
          Math.min(...a.platforms.map((p) => p.price)),
      );
    } else if (filters.sort === "rating") {
      list = [...list].sort((a, b) => b.averageRating - a.averageRating);
    } else if (filters.sort === "newest") {
      list = [...list].sort((a, b) => Number(b.id) - Number(a.id));
    } else if (filters.sort === "discount") {
      list = [...list].sort(
        (a, b) =>
          Math.max(...b.platforms.map((p) => p.discount)) -
          Math.max(...a.platforms.map((p) => p.discount)),
      );
    }
    return list;
  }, [rawProducts, filters.categories, filters.brands, filters.sort]);

  const hasActiveFilters =
    !!filters.q ||
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.minPrice > 0 ||
    filters.maxPrice < PRICE_MAX_CAP ||
    filters.minRating > 0;

  const activeFilterCount = [
    filters.q ? 1 : 0,
    filters.categories.length,
    filters.brands.length,
    filters.minPrice > 0 || filters.maxPrice < PRICE_MAX_CAP ? 1 : 0,
    filters.minRating > 0 ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  /* ── Sidebar panel ──────────────────────────────────────────────────── */
  const SidebarPanel = () => (
    <aside
      className="w-full lg:w-64 shrink-0 space-y-1"
      data-ocid="products.filter_panel"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="h-5 px-1.5 text-[10px] bg-primary text-primary-foreground border-0">
              {activeFilterCount}
            </Badge>
          )}
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-muted-foreground hover:text-destructive transition-smooth"
            data-ocid="products.clear_filter_button"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="glass rounded-xl p-4 space-y-1 divide-y divide-border/40">
        {/* Category */}
        <FilterSection title="Category">
          <div className="space-y-1.5 mt-1">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <Checkbox
                  id={`cat-${cat}`}
                  checked={filters.categories.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
                  data-ocid={`products.category_checkbox.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                />
                <Label
                  htmlFor={`cat-${cat}`}
                  className="text-xs cursor-pointer text-muted-foreground hover:text-foreground transition-smooth select-none"
                >
                  {cat}
                </Label>
              </div>
            ))}
          </div>
        </FilterSection>

        <div className="pt-1">
          <FilterSection title="Brand">
            <div className="space-y-1.5 mt-1 max-h-48 overflow-y-auto pr-1">
              {BRANDS.map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                    data-ocid={`products.brand_checkbox.${brand.toLowerCase().replace(/\s+/g, "_")}`}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-xs cursor-pointer text-muted-foreground hover:text-foreground transition-smooth select-none"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </FilterSection>
        </div>

        <div className="pt-1">
          <FilterSection title="Price Range">
            <div className="mt-2">
              <PriceRangeSlider
                minPrice={filters.minPrice}
                maxPrice={filters.maxPrice}
                onMinChange={(v) => updateFilter("minPrice", v)}
                onMaxChange={(v) => updateFilter("maxPrice", v)}
              />
            </div>
          </FilterSection>
        </div>

        <div className="pt-1">
          <FilterSection title="Min Rating">
            <div className="mt-1 space-y-0.5">
              {RATING_OPTIONS.map((r) => (
                <StarRow
                  key={r}
                  rating={r}
                  selected={filters.minRating === r}
                  onToggle={() =>
                    updateFilter("minRating", filters.minRating === r ? 0 : r)
                  }
                />
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </aside>
  );

  /* ── Render ────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-background" data-ocid="products.page">
      {/* ── Top bar ── */}
      <div className="sticky top-16 z-30 bg-card/80 backdrop-blur-md border-b border-border/50 shadow-subtle">
        <div className="container max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
          {/* Mobile filter toggle */}
          <button
            type="button"
            onClick={() => setSidebarOpen((v) => !v)}
            className="lg:hidden flex items-center gap-2 px-3 h-9 rounded-lg border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-smooth"
            data-ocid="products.mobile_filter_toggle"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge className="h-4 px-1 text-[10px] bg-primary text-primary-foreground border-0">
                {activeFilterCount}
              </Badge>
            )}
          </button>

          {/* Search bar */}
          <div className="relative flex-1 min-w-0" ref={searchRef}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search products, brands, categories..."
              className="pl-10 h-9 bg-background/80 text-sm pr-8"
              value={inputTerm}
              onChange={(e) => {
                setInputTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateFilter("q", inputTerm);
                  setShowSuggestions(false);
                }
                if (e.key === "Escape") setShowSuggestions(false);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 180)}
              data-ocid="products.search_input"
            />
            {inputTerm && (
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => {
                  setInputTerm("");
                  updateFilter("q", "");
                }}
                data-ocid="products.search_clear_button"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <AnimatePresence>
              {showSuggestions && suggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-xl shadow-elevated overflow-hidden z-50"
                  data-ocid="products.autocomplete_dropdown"
                >
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-secondary/70 transition-smooth text-left"
                      onMouseDown={() => {
                        setInputTerm(s);
                        updateFilter("q", s);
                        setShowSuggestions(false);
                      }}
                    >
                      <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                      <span className="truncate">{s}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:block whitespace-nowrap">
              Sort by
            </span>
            <div className="flex gap-1 flex-wrap">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => updateFilter("sort", opt.value)}
                  className={`px-2.5 h-8 rounded-lg text-xs font-medium transition-smooth whitespace-nowrap ${
                    filters.sort === opt.value
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                  data-ocid={`products.sort_${opt.value}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile sidebar drawer ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-72 z-50 bg-card border-r border-border/60 overflow-y-auto p-4 lg:hidden"
              data-ocid="products.mobile_filter_drawer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-foreground">Filters</span>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-muted/40 text-muted-foreground"
                  data-ocid="products.close_filter_drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <SidebarPanel />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8 items-start">
          {/* Sidebar — desktop only */}
          <div className="hidden lg:block sticky top-32 self-start">
            <SidebarPanel />
          </div>

          {/* Results area */}
          <div className="flex-1 min-w-0">
            {/* Result header */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <p
                  className="text-sm text-muted-foreground"
                  data-ocid="products.result_count"
                >
                  {isLoading ? (
                    <Skeleton className="h-4 w-28 inline-block" />
                  ) : (
                    <>
                      <span className="font-semibold text-foreground">
                        {products.length}
                      </span>{" "}
                      product{products.length !== 1 ? "s" : ""} found
                    </>
                  )}
                </p>

                {/* Active filter chips */}
                {filters.categories.map((cat) => (
                  <Badge
                    key={cat}
                    variant="secondary"
                    className="text-xs gap-1 cursor-pointer"
                    onClick={() => toggleCategory(cat)}
                    data-ocid={`products.active_category_chip.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {cat}
                    <X className="w-2.5 h-2.5" />
                  </Badge>
                ))}
                {filters.brands.map((brand) => (
                  <Badge
                    key={brand}
                    variant="secondary"
                    className="text-xs gap-1 cursor-pointer"
                    onClick={() => toggleBrand(brand)}
                    data-ocid={`products.active_brand_chip.${brand.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {brand}
                    <X className="w-2.5 h-2.5" />
                  </Badge>
                ))}
                {filters.minRating > 0 && (
                  <Badge
                    variant="secondary"
                    className="text-xs gap-1 cursor-pointer"
                    onClick={() => updateFilter("minRating", 0)}
                    data-ocid="products.active_rating_chip"
                  >
                    {filters.minRating}+ ★
                    <X className="w-2.5 h-2.5" />
                  </Badge>
                )}
                {(filters.minPrice > 0 || filters.maxPrice < PRICE_MAX_CAP) && (
                  <Badge
                    variant="secondary"
                    className="text-xs gap-1 cursor-pointer"
                    onClick={() => {
                      updateFilter("minPrice", 0);
                      updateFilter("maxPrice", PRICE_MAX_CAP);
                    }}
                    data-ocid="products.active_price_chip"
                  >
                    ${filters.minPrice}–${filters.maxPrice}
                    <X className="w-2.5 h-2.5" />
                  </Badge>
                )}
              </div>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-1.5 text-muted-foreground hover:text-destructive"
                  onClick={clearFilters}
                  data-ocid="products.clear_all_button"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear all filters
                </Button>
              )}
            </div>

            <Separator className="mb-6 opacity-50" />

            {/* Loading skeletons */}
            {isLoading ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                data-ocid="products.loading_state"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`skel-${i + 1}`}
                    className="rounded-xl border border-border/60 overflow-hidden bg-card"
                  >
                    <Skeleton className="h-48 w-full rounded-none" />
                    <div className="p-4 space-y-2.5">
                      <Skeleton className="h-4 w-1/3 rounded-md" />
                      <Skeleton className="h-5 w-4/5 rounded-md" />
                      <Skeleton className="h-3.5 w-1/4 rounded-md" />
                      <Skeleton className="h-3 w-2/5 rounded-md" />
                      <Skeleton className="h-14 w-full rounded-md" />
                      <div className="flex justify-between">
                        <Skeleton className="h-7 w-16 rounded-md" />
                        <Skeleton className="h-7 w-24 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              /* Empty state */
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center py-20 px-4"
                data-ocid="products.empty_state"
              >
                <div className="w-24 h-24 rounded-2xl bg-muted/40 flex items-center justify-center mb-6 shadow-subtle">
                  <PackageSearch className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No products match your filters
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mb-6">
                  Try broadening your search or removing some filters to
                  discover more products.
                </p>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={clearFilters}
                  data-ocid="products.empty_clear_button"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </Button>
              </motion.div>
            ) : (
              /* Product grid */
              <motion.div
                key={`grid-${products.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                data-ocid="products.list"
              >
                {products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
