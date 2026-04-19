import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useComparison } from "@/hooks/useComparison";
import { useWishlist } from "@/hooks/useWishlist";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { to: "/products", label: "Products", icon: ShoppingBag },
  { to: "/comparison", label: "Compare", icon: BarChart3 },
  { to: "/about", label: "About", icon: null },
];

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated, login, logout } = useAuth();
  const { count: compareCount } = useComparison();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "pricewise";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          scrolled
            ? "glass-dark shadow-elevated border-b border-border/30"
            : "bg-card border-b border-border/50"
        }`}
        data-ocid="layout.header"
      >
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group"
            data-ocid="nav.logo"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-subtle group-hover:scale-105 transition-smooth">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Price<span className="text-accent">Wise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 ml-4"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
                activeProps={{ className: "text-foreground bg-secondary" }}
                data-ocid={`nav.${label.toLowerCase()}_link`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex-1" />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link to="/products" data-ocid="nav.search_button">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Button>
            </Link>

            <Link
              to="/comparison"
              className="relative"
              data-ocid="nav.compare_button"
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full"
                aria-label="Comparisons"
              >
                <BarChart3 className="h-4 w-4" />
                {compareCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] bg-accent text-accent-foreground border-0">
                    {compareCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {isAuthenticated && (
              <Link
                to="/dashboard"
                className="relative"
                data-ocid="nav.wishlist_button"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full"
                  aria-label="Wishlist"
                >
                  <Heart className="h-4 w-4" />
                  {wishlist.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] bg-destructive text-destructive-foreground border-0">
                      {wishlist.length}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}

            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 rounded-full"
                    aria-label="Profile"
                    data-ocid="nav.profile_button"
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="hidden md:flex text-xs"
                  data-ocid="nav.logout_button"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={login}
                className="hidden md:flex"
                data-ocid="nav.login_button"
              >
                Sign In
              </Button>
            )}

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Open menu"
              data-ocid="nav.mobile_menu_toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden glass-dark border-t border-border/30 px-4 py-3 flex flex-col gap-1"
            data-ocid="nav.mobile_menu"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
                data-ocid={`nav.mobile_${label.toLowerCase()}_link`}
              >
                {label}
              </Link>
            ))}
            {!isAuthenticated && (
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  login();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 w-full"
                data-ocid="nav.mobile_login_button"
              >
                Sign In
              </Button>
            )}
            {isAuthenticated && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="mt-2 w-full"
                data-ocid="nav.mobile_logout_button"
              >
                Sign Out
              </Button>
            )}
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 bg-background" data-ocid="layout.main">
        {children}
      </main>

      {/* Comparison Tray */}
      {compareCount > 0 && (
        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 glass-dark rounded-full px-5 py-3 flex items-center gap-3 shadow-elevated border border-primary/30"
          data-ocid="comparison.tray"
        >
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {compareCount} product{compareCount !== 1 ? "s" : ""} selected
          </span>
          <Link to="/comparison">
            <Button
              size="sm"
              className="h-7 rounded-full text-xs"
              data-ocid="comparison.tray_compare_button"
            >
              Compare Now
            </Button>
          </Link>
        </div>
      )}

      {/* Footer */}
      <footer
        className="bg-card border-t border-border/50 mt-auto"
        data-ocid="layout.footer"
      >
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  Price<span className="text-accent">Wise</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Smart price comparison across all major platforms. Find the best
                deals, track prices, and never overpay again.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Navigate
              </h4>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/products", label: "Products" },
                  { to: "/comparison", label: "Compare" },
                  { to: "/about", label: "About" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Account
              </h4>
              <ul className="space-y-2">
                {[
                  { to: "/auth", label: "Sign In" },
                  { to: "/dashboard", label: "Dashboard" },
                  { to: "/dashboard", label: "Wishlist" },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </span>
            <span>Smart Price Comparison — Always find the best deal.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
