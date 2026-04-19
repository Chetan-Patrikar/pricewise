import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import {
  BookmarkCheck,
  Clock,
  GitCompareArrows,
  Lock,
  LogIn,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const FEATURES = [
  {
    icon: BookmarkCheck,
    label: "Save your wishlist",
    desc: "Keep track of products you love across all platforms",
  },
  {
    icon: GitCompareArrows,
    label: "Track comparison history",
    desc: "Revisit your past comparisons anytime",
  },
  {
    icon: Tag,
    label: "Get personalized deals",
    desc: "AI-powered recommendations based on your interests",
  },
];

export default function AuthPage() {
  const { isAuthenticated, login, loginStatus } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);

  const isLoading = loginStatus === "logging-in";

  if (loginStatus === "initializing") {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        data-ocid="auth.loading_state"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            Checking authentication…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden"
      data-ocid="auth.page"
    >
      {/* Background decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md"
      >
        {/* Glassmorphism card */}
        <div className="glass-dark rounded-2xl shadow-elevated overflow-hidden">
          {/* Card header with accent stripe */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary/60" />

          <div className="p-8 sm:p-10">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-elevated">
                <Zap
                  className="w-4.5 h-4.5 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display text-2xl font-bold text-foreground tracking-tight">
                Price<span className="text-accent">Wise</span>
              </span>
              <Badge className="ml-auto bg-accent/15 text-accent border-accent/30 text-[10px] px-2 py-0.5 shrink-0">
                <Sparkles className="w-2.5 h-2.5 mr-1" />
                Smart Deals
              </Badge>
            </div>

            {/* Headline */}
            <div className="mb-8">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-2">
                Sign in to PriceWise
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Save your wishlists, track prices, and get personalized deal
                recommendations — all in one place.
              </p>
            </div>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-8">
              {FEATURES.map(({ icon: Icon, label, desc }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Login CTA */}
            <div className="space-y-3">
              <Button
                onClick={login}
                className="w-full h-12 gap-2.5 text-sm font-semibold transition-smooth"
                disabled={isLoading}
                size="lg"
                data-ocid="auth.login_button"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Signing in…
                  </>
                ) : (
                  <>
                    <LogIn className="w-4.5 h-4.5" />
                    Continue with Internet Identity
                  </>
                )}
              </Button>

              {isLoading && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-center text-xs text-muted-foreground"
                  data-ocid="auth.loading_state"
                >
                  Opening Internet Identity popup…
                </motion.p>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border/50" />
              <Lock className="w-3.5 h-3.5 text-muted-foreground/60" />
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Privacy note */}
            <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-0.5">
                  Decentralized &amp; password-free
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Internet Identity uses your device's biometrics or security
                  key — no passwords, no email, no data sold. Your identity
                  stays fully under your control.
                </p>
              </div>
            </div>

            <p className="text-center text-[11px] text-muted-foreground mt-5">
              © {new Date().getFullYear()} PriceWise. By signing in, you accept
              our{" "}
              <span className="text-foreground/80 hover:text-foreground cursor-pointer hover:underline transition-colors">
                Terms
              </span>{" "}
              &amp;{" "}
              <span className="text-foreground/80 hover:text-foreground cursor-pointer hover:underline transition-colors">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-center gap-2 mt-5"
        >
          <Clock className="w-3.5 h-3.5 text-muted-foreground/60" />
          <p className="text-xs text-muted-foreground/60">
            Typical sign-in takes less than 10 seconds
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
