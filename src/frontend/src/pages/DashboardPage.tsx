import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import { useComparisonStore } from "@/store/comparisonStore";
import { type ComparisonRecord, SAMPLE_PRODUCTS } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  Calendar,
  Clock,
  ExternalLink,
  Heart,
  LogIn,
  LogOut,
  Package,
  RotateCcw,
  ShoppingBag,
  Trash2,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

function abbreviatePrincipal(principal: string): string {
  return principal.slice(0, 8);
}

function formatTimestamp(ts: number): string {
  const date = new Date(ts);
  const now = Date.now();
  const diff = now - ts;
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 604_800_000) return `${Math.floor(diff / 86_400_000)}d ago`;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getMemberSince(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// ─── Unauthenticated gate ────────────────────────────────────────────────────

function UnauthenticatedView({ login }: { login: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8"
      data-ocid="dashboard.unauthenticated"
    >
      <div className="w-20 h-20 rounded-2xl glass border border-primary/20 flex items-center justify-center mb-6 shadow-elevated">
        <User className="w-10 h-10 text-primary" />
      </div>
      <h2 className="font-display text-3xl font-bold text-foreground mb-3">
        Sign In to Your Dashboard
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
        Track your wishlist, browse comparison history, and manage your account
        — all in one place.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          onClick={login}
          className="gap-2 px-6"
          data-ocid="dashboard.login_button"
        >
          <LogIn className="w-4 h-4" />
          Sign In with Internet Identity
        </Button>
        <Link to="/products">
          <Button
            variant="outline"
            className="gap-2"
            data-ocid="dashboard.browse_button"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse Products
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Stats bar ───────────────────────────────────────────────────────────────

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  colorClass: string;
  index: number;
}

function StatItem({
  icon: Icon,
  label,
  value,
  colorClass,
  index,
}: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="flex items-center gap-3 px-5 py-4 bg-card border border-border/60 rounded-xl"
      data-ocid={`dashboard.stat.${index + 1}`}
    >
      <div
        className={`w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0 ${colorClass}`}
      >
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div>
        <p className="font-display text-xl font-bold text-foreground leading-none">
          {value}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

// ─── Wishlist tab ────────────────────────────────────────────────────────────

function WishlistTab({
  wishlist,
  removeFromWishlist,
}: {
  wishlist: string[];
  removeFromWishlist: (id: string) => void;
}) {
  const wishlistProducts = SAMPLE_PRODUCTS.filter((p) =>
    wishlist.includes(p.id),
  );

  if (wishlistProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-xl border border-border/60 border-dashed p-14 text-center"
        data-ocid="dashboard.wishlist.empty_state"
      >
        <Heart className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
        <p className="text-base font-semibold text-foreground mb-1">
          Your wishlist is empty
        </p>
        <p className="text-sm text-muted-foreground mb-5">
          Click the heart icon on any product to save it here for later
        </p>
        <Link to="/products">
          <Button
            size="sm"
            variant="outline"
            data-ocid="dashboard.wishlist.browse_button"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
            Browse Products
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-5">
        {wishlistProducts.length} saved product
        {wishlistProducts.length !== 1 ? "s" : ""}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {wishlistProducts.map((product, i) => (
          <div
            key={product.id}
            className="relative group"
            data-ocid={`dashboard.wishlist.item.${i + 1}`}
          >
            <ProductCard product={product} index={i} />
            <button
              type="button"
              onClick={() => removeFromWishlist(product.id)}
              className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-smooth
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/90 text-destructive-foreground
                text-xs font-medium backdrop-blur-sm shadow-lg"
              aria-label={`Remove ${product.title} from wishlist`}
              data-ocid={`dashboard.wishlist.remove_button.${i + 1}`}
            >
              <Trash2 className="w-3 h-3" />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Comparison History tab ──────────────────────────────────────────────────

interface ComparisonHistoryTabProps {
  history: ComparisonRecord[];
  onRestore: (record: ComparisonRecord) => void;
  onClearHistory: () => void;
}

function ComparisonHistoryTab({
  history,
  onRestore,
  onClearHistory,
}: ComparisonHistoryTabProps) {
  const navigate = useNavigate();

  function handleRestore(record: ComparisonRecord) {
    onRestore(record);
    navigate({ to: "/comparison" });
  }

  if (history.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-xl border border-border/60 border-dashed p-14 text-center"
        data-ocid="dashboard.history.empty_state"
      >
        <BarChart3 className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
        <p className="text-base font-semibold text-foreground mb-1">
          No comparison history yet
        </p>
        <p className="text-sm text-muted-foreground mb-5">
          Compare products side-by-side and your sessions will appear here
        </p>
        <Link to="/products">
          <Button
            size="sm"
            variant="outline"
            data-ocid="dashboard.history.browse_button"
          >
            <Package className="w-3.5 h-3.5 mr-1.5" />
            Find Products to Compare
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-muted-foreground">
          {history.length} comparison session{history.length !== 1 ? "s" : ""}
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearHistory}
          className="text-xs text-muted-foreground hover:text-destructive gap-1.5"
          data-ocid="dashboard.history.clear_button"
        >
          <Trash2 className="w-3 h-3" />
          Clear All
        </Button>
      </div>
      <div className="space-y-3" data-ocid="dashboard.history.list">
        {history.map((record, i) => {
          const products = SAMPLE_PRODUCTS.filter((p) =>
            record.productIds.includes(p.id),
          );
          const knownCount = products.length;
          const totalCount = record.productIds.length;

          return (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="group bg-card border border-border/60 rounded-xl p-4 flex items-center gap-4
                hover:border-primary/40 hover:shadow-elevated transition-smooth cursor-pointer"
              onClick={() => handleRestore(record)}
              data-ocid={`dashboard.history.item.${i + 1}`}
            >
              {/* Thumbnails */}
              <div className="flex -space-x-2 shrink-0">
                {products.slice(0, 4).map((p, j) => (
                  <div
                    key={p.id}
                    className="w-10 h-10 rounded-lg border-2 border-background bg-muted overflow-hidden"
                    style={{ zIndex: 4 - j }}
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/assets/images/placeholder.svg";
                      }}
                    />
                  </div>
                ))}
                {totalCount > 4 && (
                  <div className="w-10 h-10 rounded-lg border-2 border-background bg-muted flex items-center justify-center text-xs text-muted-foreground font-semibold">
                    +{totalCount - 4}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {totalCount} product{totalCount !== 1 ? "s" : ""} compared
                  {knownCount < totalCount && (
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      ({knownCount} available)
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatTimestamp(record.timestamp)}
                  </span>
                  {products.slice(0, 2).map((p) => (
                    <Badge
                      key={p.id}
                      variant="secondary"
                      className="text-[10px] py-0 px-1.5 hidden sm:inline-flex"
                    >
                      {p.brand}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Restore CTA */}
              <Button
                size="sm"
                variant="outline"
                className="shrink-0 gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRestore(record);
                }}
                data-ocid={`dashboard.history.restore_button.${i + 1}`}
              >
                <RotateCcw className="w-3 h-3" />
                Restore
              </Button>
              <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-smooth" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Account tab ─────────────────────────────────────────────────────────────

function AccountTab({
  principal,
  logout,
  wishlistCount,
  historyCount,
}: {
  principal: string | null;
  logout: () => void;
  wishlistCount: number;
  historyCount: number;
}) {
  return (
    <div className="max-w-xl space-y-6" data-ocid="dashboard.account.panel">
      {/* Identity card */}
      <div className="bg-card border border-border/60 rounded-xl p-6">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Internet Identity</p>
              <p className="text-xs text-muted-foreground">Authenticated</p>
            </div>
          </div>
          <Badge className="bg-accent/15 text-accent border-accent/30 text-xs">
            Active
          </Badge>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            Principal ID
          </p>
          <div
            className="bg-muted/50 rounded-lg px-3 py-2.5 font-mono text-xs text-foreground break-all select-all border border-border/40"
            data-ocid="dashboard.account.principal"
          >
            {principal ?? "—"}
          </div>
        </div>

        <Separator className="my-5" />

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/30 rounded-lg p-3 text-center border border-border/40">
            <p className="font-display text-2xl font-bold text-foreground">
              {wishlistCount}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Saved Products
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center border border-border/40">
            <p className="font-display text-2xl font-bold text-foreground">
              {historyCount}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Comparisons Done
            </p>
          </div>
        </div>

        <Separator className="my-5" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            Member since {getMemberSince()}
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={logout}
            className="gap-1.5 text-xs"
            data-ocid="dashboard.account.logout_button"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="bg-card border border-border/60 rounded-xl divide-y divide-border/40">
        {[
          {
            label: "Browse all products",
            to: "/products" as const,
            icon: ShoppingBag,
          },
          {
            label: "Compare products",
            to: "/comparison" as const,
            icon: BarChart3,
          },
          { label: "About PriceWise", to: "/about" as const, icon: Package },
        ].map(({ label, to, icon: Icon }) => (
          <Link key={to} to={to}>
            <div className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-smooth cursor-pointer group">
              <div className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                <span className="text-sm text-foreground">{label}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-smooth" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { isAuthenticated, principal, login, logout } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { history, restoreFromHistory, clearHistory } = useComparisonStore();
  const navigate = useNavigate();

  // Redirect to /auth if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      // Show unauthenticated view instead of hard redirect
      // (redirect on navigate would prevent the nice unauthenticated UI)
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <UnauthenticatedView login={login} />;
  }

  const shortId = principal ? abbreviatePrincipal(principal) : "—";

  const STATS = [
    {
      icon: Heart,
      label: "Wishlisted",
      value: wishlist.length,
      colorClass: "text-red-400",
    },
    {
      icon: BarChart3,
      label: "Comparisons",
      value: history.length,
      colorClass: "text-primary",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: getMemberSince(),
      colorClass: "text-accent",
    },
  ];

  return (
    <div className="bg-background min-h-screen" data-ocid="dashboard.page">
      {/* Hero header */}
      <div className="bg-card border-b border-border/50 px-4 py-10">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start justify-between flex-wrap gap-5"
          >
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/30 text-xs gap-1.5">
                <User className="w-3 h-3" />
                Dashboard
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Welcome back,{" "}
                <span className="text-primary font-mono text-2xl md:text-3xl">
                  {shortId}…
                </span>
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Your personalized deal tracking hub
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <Link to="/products">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  data-ocid="dashboard.browse_button"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Browse Products
                </Button>
              </Link>
              <Link to="/comparison">
                <Button
                  size="sm"
                  className="gap-1.5"
                  data-ocid="dashboard.comparison_link"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  Compare Now
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs content */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="wishlist" data-ocid="dashboard.tabs">
          <TabsList className="mb-8 h-10" data-ocid="dashboard.tabs.list">
            <TabsTrigger
              value="wishlist"
              className="gap-1.5 text-xs sm:text-sm"
              data-ocid="dashboard.tabs.wishlist"
            >
              <Heart className="w-3.5 h-3.5" />
              Wishlist
              {wishlist.length > 0 && (
                <Badge className="ml-1 h-4.5 px-1.5 text-[10px] bg-red-500/20 text-red-400 border-red-400/30">
                  {wishlist.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="gap-1.5 text-xs sm:text-sm"
              data-ocid="dashboard.tabs.history"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Comparison History
              {history.length > 0 && (
                <Badge className="ml-1 h-4.5 px-1.5 text-[10px] bg-primary/20 text-primary border-primary/30">
                  {history.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="gap-1.5 text-xs sm:text-sm"
              data-ocid="dashboard.tabs.account"
            >
              <User className="w-3.5 h-3.5" />
              Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wishlist" data-ocid="dashboard.wishlist.section">
            <WishlistTab
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          </TabsContent>

          <TabsContent value="history" data-ocid="dashboard.history.section">
            <ComparisonHistoryTab
              history={history}
              onRestore={(record) => {
                restoreFromHistory(record);
                navigate({ to: "/comparison" });
              }}
              onClearHistory={clearHistory}
            />
          </TabsContent>

          <TabsContent value="account" data-ocid="dashboard.account.section">
            <AccountTab
              principal={principal}
              logout={logout}
              wishlistCount={wishlist.length}
              historyCount={history.length}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
