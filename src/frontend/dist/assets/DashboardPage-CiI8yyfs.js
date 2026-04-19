import { c as createLucideIcon, r as reactExports, U as useDirection, u as useControllableState, j as jsxRuntimeExports, d as Primitive, V as useId, W as Root, Y as Item, f as composeEventHandlers, P as Presence, _ as createRovingFocusGroupScope, h as createContextScope, i as cn, T as useAuth, v as useWishlist, n as useComparisonStore, l as useNavigate, H as Heart, C as ChartColumn, B as Badge, $ as User, L as Link, a as Button, S as ShoppingBag } from "./index-B4L6VRFV.js";
import { P as ProductCard } from "./ProductCard-CeTc8PNo.js";
import { S as Separator } from "./separator-D7iV9_92.js";
import { S as SAMPLE_PRODUCTS, E as ExternalLink } from "./index-J61HW4zR.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { L as LogIn, C as Clock } from "./log-in-BkTNWwIk.js";
import { T as Trash2 } from "./trash-2-BSMLLGGm.js";
import { P as Package } from "./package-DYPHjv0i.js";
import "./trending-down-B3YFUVU9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
function abbreviatePrincipal(principal) {
  return principal.slice(0, 8);
}
function formatTimestamp(ts) {
  const date = new Date(ts);
  const now = Date.now();
  const diff = now - ts;
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  if (diff < 6048e5) return `${Math.floor(diff / 864e5)}d ago`;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function getMemberSince() {
  return (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
}
function UnauthenticatedView({ login }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "min-h-[70vh] flex flex-col items-center justify-center text-center p-8",
      "data-ocid": "dashboard.unauthenticated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl glass border border-primary/20 flex items-center justify-center mb-6 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-10 h-10 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Sign In to Your Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-md leading-relaxed", children: "Track your wishlist, browse comparison history, and manage your account — all in one place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: login,
              className: "gap-2 px-6",
              "data-ocid": "dashboard.login_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
                "Sign In with Internet Identity"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "gap-2",
              "data-ocid": "dashboard.browse_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                "Browse Products"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function StatItem({
  icon: Icon,
  label,
  value,
  colorClass,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.07 },
      className: "flex items-center gap-3 px-5 py-4 bg-card border border-border/60 rounded-xl",
      "data-ocid": `dashboard.stat.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0 ${colorClass}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4.5 h-4.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-foreground leading-none", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
        ] })
      ]
    }
  );
}
function WishlistTab({
  wishlist,
  removeFromWishlist
}) {
  const wishlistProducts = SAMPLE_PRODUCTS.filter(
    (p) => wishlist.includes(p.id)
  );
  if (wishlistProducts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "rounded-xl border border-border/60 border-dashed p-14 text-center",
        "data-ocid": "dashboard.wishlist.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground mb-1", children: "Your wishlist is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Click the heart icon on any product to save it here for later" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              "data-ocid": "dashboard.wishlist.browse_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Browse Products"
              ]
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-5", children: [
      wishlistProducts.length,
      " saved product",
      wishlistProducts.length !== 1 ? "s" : ""
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5", children: wishlistProducts.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative group",
        "data-ocid": `dashboard.wishlist.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => removeFromWishlist(product.id),
              className: "absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-smooth\n                flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/90 text-destructive-foreground\n                text-xs font-medium backdrop-blur-sm shadow-lg",
              "aria-label": `Remove ${product.title} from wishlist`,
              "data-ocid": `dashboard.wishlist.remove_button.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                "Remove"
              ]
            }
          )
        ]
      },
      product.id
    )) })
  ] });
}
function ComparisonHistoryTab({
  history,
  onRestore,
  onClearHistory
}) {
  const navigate = useNavigate();
  function handleRestore(record) {
    onRestore(record);
    navigate({ to: "/comparison" });
  }
  if (history.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "rounded-xl border border-border/60 border-dashed p-14 text-center",
        "data-ocid": "dashboard.history.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground mb-1", children: "No comparison history yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Compare products side-by-side and your sessions will appear here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              "data-ocid": "dashboard.history.browse_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Find Products to Compare"
              ]
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        history.length,
        " comparison session",
        history.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: onClearHistory,
          className: "text-xs text-muted-foreground hover:text-destructive gap-1.5",
          "data-ocid": "dashboard.history.clear_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
            "Clear All"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "dashboard.history.list", children: history.map((record, i) => {
      const products = SAMPLE_PRODUCTS.filter(
        (p) => record.productIds.includes(p.id)
      );
      const knownCount = products.length;
      const totalCount = record.productIds.length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -12 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.06 },
          className: "group bg-card border border-border/60 rounded-xl p-4 flex items-center gap-4\n                hover:border-primary/40 hover:shadow-elevated transition-smooth cursor-pointer",
          onClick: () => handleRestore(record),
          "data-ocid": `dashboard.history.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2 shrink-0", children: [
              products.slice(0, 4).map((p, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg border-2 border-background bg-muted overflow-hidden",
                  style: { zIndex: 4 - j },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: p.imageUrl,
                      alt: p.title,
                      className: "w-full h-full object-contain p-1",
                      onError: (e) => {
                        e.target.src = "/assets/images/placeholder.svg";
                      }
                    }
                  )
                },
                p.id
              )),
              totalCount > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-10 h-10 rounded-lg border-2 border-background bg-muted flex items-center justify-center text-xs text-muted-foreground font-semibold", children: [
                "+",
                totalCount - 4
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                totalCount,
                " product",
                totalCount !== 1 ? "s" : "",
                " compared",
                knownCount < totalCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
                  " ",
                  "(",
                  knownCount,
                  " available)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  formatTimestamp(record.timestamp)
                ] }),
                products.slice(0, 2).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] py-0 px-1.5 hidden sm:inline-flex",
                    children: p.brand
                  },
                  p.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "shrink-0 gap-1.5 opacity-0 group-hover:opacity-100 transition-smooth text-xs",
                onClick: (e) => {
                  e.stopPropagation();
                  handleRestore(record);
                },
                "data-ocid": `dashboard.history.restore_button.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
                  "Restore"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-smooth" })
          ]
        },
        record.id
      );
    }) })
  ] });
}
function AccountTab({
  principal,
  logout,
  wishlistCount,
  historyCount
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl space-y-6", "data-ocid": "dashboard.account.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Internet Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Authenticated" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-xs", children: "Active" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-medium", children: "Principal ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-muted/50 rounded-lg px-3 py-2.5 font-mono text-xs text-foreground break-all select-all border border-border/40",
            "data-ocid": "dashboard.account.principal",
            children: principal ?? "—"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-lg p-3 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: wishlistCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Saved Products" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-lg p-3 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: historyCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Comparisons Done" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
          "Member since ",
          getMemberSince()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "destructive",
            size: "sm",
            onClick: logout,
            className: "gap-1.5 text-xs",
            "data-ocid": "dashboard.account.logout_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
              "Sign Out"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border/60 rounded-xl divide-y divide-border/40", children: [
      {
        label: "Browse all products",
        to: "/products",
        icon: ShoppingBag
      },
      {
        label: "Compare products",
        to: "/comparison",
        icon: ChartColumn
      },
      { label: "About PriceWise", to: "/about", icon: Package }
    ].map(({ label, to, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-smooth cursor-pointer group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-smooth" })
    ] }) }, to)) })
  ] });
}
function DashboardPage() {
  const { isAuthenticated, principal, login, logout } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { history, restoreFromHistory, clearHistory } = useComparisonStore();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
  }, [isAuthenticated]);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(UnauthenticatedView, { login });
  }
  const shortId = principal ? abbreviatePrincipal(principal) : "—";
  const STATS = [
    {
      icon: Heart,
      label: "Wishlisted",
      value: wishlist.length,
      colorClass: "text-red-400"
    },
    {
      icon: ChartColumn,
      label: "Comparisons",
      value: history.length,
      colorClass: "text-primary"
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: getMemberSince(),
      colorClass: "text-accent"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "dashboard.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border/50 px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -12 },
          animate: { opacity: 1, y: 0 },
          className: "flex items-start justify-between flex-wrap gap-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/30 text-xs gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
                "Dashboard"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground leading-tight", children: [
                "Welcome back,",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-mono text-2xl md:text-3xl", children: [
                  shortId,
                  "…"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Your personalized deal tracking hub" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5",
                  "data-ocid": "dashboard.browse_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
                    "Browse Products"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/comparison", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "gap-1.5",
                  "data-ocid": "dashboard.comparison_link",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5" }),
                    "Compare Now"
                  ]
                }
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { ...stat, index: i }, stat.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-6xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "wishlist", "data-ocid": "dashboard.tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8 h-10", "data-ocid": "dashboard.tabs.list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "wishlist",
            className: "gap-1.5 text-xs sm:text-sm",
            "data-ocid": "dashboard.tabs.wishlist",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5" }),
              "Wishlist",
              wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 h-4.5 px-1.5 text-[10px] bg-red-500/20 text-red-400 border-red-400/30", children: wishlist.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "history",
            className: "gap-1.5 text-xs sm:text-sm",
            "data-ocid": "dashboard.tabs.history",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-3.5 h-3.5" }),
              "Comparison History",
              history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-1 h-4.5 px-1.5 text-[10px] bg-primary/20 text-primary border-primary/30", children: history.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "account",
            className: "gap-1.5 text-xs sm:text-sm",
            "data-ocid": "dashboard.tabs.account",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
              "Account"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "wishlist", "data-ocid": "dashboard.wishlist.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        WishlistTab,
        {
          wishlist,
          removeFromWishlist
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "history", "data-ocid": "dashboard.history.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ComparisonHistoryTab,
        {
          history,
          onRestore: (record) => {
            restoreFromHistory(record);
            navigate({ to: "/comparison" });
          },
          onClearHistory: clearHistory
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "account", "data-ocid": "dashboard.account.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccountTab,
        {
          principal,
          logout,
          wishlistCount: wishlist.length,
          historyCount: history.length
        }
      ) })
    ] }) })
  ] });
}
export {
  DashboardPage as default
};
