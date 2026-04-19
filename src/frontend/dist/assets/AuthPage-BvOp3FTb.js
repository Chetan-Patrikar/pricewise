import { c as createLucideIcon, T as useAuth, l as useNavigate, r as reactExports, j as jsxRuntimeExports, Z as Zap, B as Badge, a as Button } from "./index-B4L6VRFV.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { S as Sparkles } from "./sparkles-BcHzT4DC.js";
import { T as Tag } from "./tag-DXKvSIid.js";
import { L as LogIn, C as Clock } from "./log-in-BkTNWwIk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
];
const BookmarkCheck = createLucideIcon("bookmark-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
];
const GitCompareArrows = createLucideIcon("git-compare-arrows", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const FEATURES = [
  {
    icon: BookmarkCheck,
    label: "Save your wishlist",
    desc: "Keep track of products you love across all platforms"
  },
  {
    icon: GitCompareArrows,
    label: "Track comparison history",
    desc: "Revisit your past comparisons anytime"
  },
  {
    icon: Tag,
    label: "Get personalized deals",
    desc: "AI-powered recommendations based on your interests"
  }
];
function AuthPage() {
  const { isAuthenticated, login, loginStatus } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);
  const isLoading = loginStatus === "logging-in";
  if (loginStatus === "initializing") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        "data-ocid": "auth.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground animate-pulse", children: "Checking authentication…" })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden",
      "data-ocid": "auth.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-secondary/5 blur-3xl" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24, scale: 0.97 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            className: "relative w-full max-w-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl shadow-elevated overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-gradient-to-r from-primary via-accent to-primary/60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Zap,
                      {
                        className: "w-4.5 h-4.5 text-primary-foreground",
                        strokeWidth: 2.5
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-bold text-foreground tracking-tight", children: [
                      "Price",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Wise" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "ml-auto bg-accent/15 text-accent border-accent/30 text-[10px] px-2 py-0.5 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5 mr-1" }),
                      "Smart Deals"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-2", children: "Sign in to PriceWise" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Save your wishlists, track prices, and get personalized deal recommendations — all in one place." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: FEATURES.map(({ icon: Icon, label, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.li,
                    {
                      initial: { opacity: 0, x: -12 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.15 + i * 0.08, duration: 0.35 },
                      className: "flex items-start gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-none mb-0.5", children: label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
                        ] })
                      ]
                    },
                    label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        onClick: login,
                        className: "w-full h-12 gap-2.5 text-sm font-semibold transition-smooth",
                        disabled: isLoading,
                        size: "lg",
                        "data-ocid": "auth.login_button",
                        children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" }),
                          "Signing in…"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4.5 h-4.5" }),
                          "Continue with Internet Identity"
                        ] })
                      }
                    ),
                    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "text-center text-xs text-muted-foreground",
                        "data-ocid": "auth.loading_state",
                        children: "Opening Internet Identity popup…"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border/50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-muted-foreground/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border/50" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/30 border border-border/40 p-4 flex gap-3 items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-0.5", children: "Decentralized & password-free" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Internet Identity uses your device's biometrics or security key — no passwords, no email, no data sold. Your identity stays fully under your control." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-muted-foreground mt-5", children: [
                    "© ",
                    (/* @__PURE__ */ new Date()).getFullYear(),
                    " PriceWise. By signing in, you accept our",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 hover:text-foreground cursor-pointer hover:underline transition-colors", children: "Terms" }),
                    " ",
                    "&",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 hover:text-foreground cursor-pointer hover:underline transition-colors", children: "Privacy Policy" }),
                    "."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.55 },
                  className: "flex items-center justify-center gap-2 mt-5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-muted-foreground/60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: "Typical sign-in takes less than 10 seconds" })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  AuthPage as default
};
