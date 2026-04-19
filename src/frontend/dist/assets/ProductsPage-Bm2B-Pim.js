import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Presence, d as Primitive, u as useControllableState, e as useComposedRefs, f as composeEventHandlers, g as useSize, h as createContextScope, i as cn, k as useSearch, l as useNavigate, B as Badge, b as Search, X, a as Button } from "./index-B4L6VRFV.js";
import { P as ProductCard } from "./ProductCard-CeTc8PNo.js";
import { C as Check, a as CATEGORIES, S as SAMPLE_PRODUCTS } from "./index-J61HW4zR.js";
import { I as Input } from "./input-DBZ4hsPM.js";
import { P as Primitive$1, S as Separator } from "./separator-D7iV9_92.js";
import { b as useSearchProducts, a as useSearchSuggestions, S as Skeleton } from "./useProducts-Dd6Y_mVu.js";
import { A as AnimatePresence } from "./index-YAD6EM98.js";
import { m as motion } from "./proxy-CxQJ6vxD.js";
import { S as Star } from "./trending-down-B3YFUVU9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
];
const PackageSearch = createLucideIcon("package-search", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive$1.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const SORT_OPTIONS = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low → High" },
  { value: "price_desc", label: "Price: High → Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "discount", label: "Biggest Discount" }
];
const BRANDS = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.brand))).sort();
const PRICE_MAX_CAP = 3e3;
const RATING_OPTIONS = [4.5, 4, 3.5, 3];
function defaultFilters() {
  return {
    q: "",
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: PRICE_MAX_CAP,
    minRating: 0,
    sort: "relevance"
  };
}
function FilterSection({
  title,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground",
        children: [
          title,
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-3", children })
      },
      "content"
    ) })
  ] });
}
function StarRow({
  rating,
  selected,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: onToggle,
      className: `flex items-center gap-2 w-full rounded-md px-2 py-1.5 text-sm transition-smooth ${selected ? "bg-primary/15 text-foreground font-medium" : "hover:bg-muted/50 text-muted-foreground"}`,
      "data-ocid": `products.rating_filter.${rating}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: `w-3 h-3 ${s <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`
          },
          s
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
          rating,
          "+ stars"
        ] })
      ]
    }
  );
}
function PriceRangeSlider({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange
}) {
  const minPct = minPrice / PRICE_MAX_CAP * 100;
  const maxPct = maxPrice / PRICE_MAX_CAP * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "$",
        minPrice.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "$",
        maxPrice.toLocaleString()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-5 flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-1.5 bg-muted rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute h-1.5 bg-primary rounded-full",
          style: { left: `${minPct}%`, right: `${100 - maxPct}%` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: PRICE_MAX_CAP,
          step: 50,
          value: minPrice,
          onChange: (e) => {
            const v = Number(e.target.value);
            if (v < maxPrice) onMinChange(v);
          },
          className: "absolute inset-0 w-full opacity-0 cursor-pointer h-5 z-20",
          "data-ocid": "products.min_price_slider"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "range",
          min: 0,
          max: PRICE_MAX_CAP,
          step: 50,
          value: maxPrice,
          onChange: (e) => {
            const v = Number(e.target.value);
            if (v > minPrice) onMaxChange(v);
          },
          className: "absolute inset-0 w-full opacity-0 cursor-pointer h-5 z-10",
          "data-ocid": "products.max_price_slider"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute w-4 h-4 rounded-full bg-primary border-2 border-background shadow-elevated z-30 pointer-events-none",
          style: { left: `calc(${minPct}% - 8px)` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute w-4 h-4 rounded-full bg-primary border-2 border-background shadow-elevated z-30 pointer-events-none",
          style: { left: `calc(${maxPct}% - 8px)` }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          min: 0,
          max: maxPrice,
          step: 50,
          value: minPrice,
          onChange: (e) => {
            const v = Number(e.target.value);
            if (v >= 0 && v < maxPrice) onMinChange(v);
          },
          className: "h-7 text-xs text-center px-1",
          "data-ocid": "products.min_price_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-center text-xs text-muted-foreground", children: "–" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "number",
          min: minPrice,
          max: PRICE_MAX_CAP,
          step: 50,
          value: maxPrice,
          onChange: (e) => {
            const v = Number(e.target.value);
            if (v > minPrice && v <= PRICE_MAX_CAP) onMaxChange(v);
          },
          className: "h-7 text-xs text-center px-1",
          "data-ocid": "products.max_price_input"
        }
      )
    ] })
  ] });
}
function ProductsPage() {
  const rawSearch = useSearch({ strict: false });
  const navigate = useNavigate();
  const parseFiltersFromUrl = reactExports.useCallback(() => {
    return {
      q: rawSearch.q ?? "",
      categories: rawSearch.category ? rawSearch.category.split(",").filter(Boolean) : [],
      brands: rawSearch.brand ? rawSearch.brand.split(",").filter(Boolean) : [],
      minPrice: rawSearch.minPrice ? Number(rawSearch.minPrice) : 0,
      maxPrice: rawSearch.maxPrice ? Number(rawSearch.maxPrice) : PRICE_MAX_CAP,
      minRating: rawSearch.minRating ? Number(rawSearch.minRating) : 0,
      sort: rawSearch.sort ?? "relevance"
    };
  }, [
    rawSearch.q,
    rawSearch.category,
    rawSearch.brand,
    rawSearch.minPrice,
    rawSearch.maxPrice,
    rawSearch.minRating,
    rawSearch.sort
  ]);
  const [filters, setFilters] = reactExports.useState(parseFiltersFromUrl);
  const [inputTerm, setInputTerm] = reactExports.useState(filters.q);
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const parsed = parseFiltersFromUrl();
    setFilters(parsed);
    setInputTerm(parsed.q);
  }, [parseFiltersFromUrl]);
  const pushFilters = reactExports.useCallback(
    (next) => {
      const params = {};
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
    [navigate]
  );
  const updateFilter = reactExports.useCallback(
    (key, value) => {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };
        pushFilters(next);
        return next;
      });
    },
    [pushFilters]
  );
  const toggleCategory = (cat) => {
    const next = filters.categories.includes(cat) ? filters.categories.filter((c) => c !== cat) : [...filters.categories, cat];
    updateFilter("categories", next);
  };
  const toggleBrand = (brand) => {
    const next = filters.brands.includes(brand) ? filters.brands.filter((b) => b !== brand) : [...filters.brands, brand];
    updateFilter("brands", next);
  };
  const clearFilters = () => {
    const def = defaultFilters();
    setFilters(def);
    setInputTerm("");
    navigate({ to: "/products", search: {} });
  };
  const searchQuery = reactExports.useMemo(
    () => ({
      searchTerm: filters.q || void 0,
      category: filters.categories.length === 1 ? filters.categories[0] : void 0,
      brand: filters.brands.length === 1 ? filters.brands[0] : void 0,
      minPrice: filters.minPrice > 0 ? filters.minPrice : void 0,
      maxPrice: filters.maxPrice < PRICE_MAX_CAP ? filters.maxPrice : void 0,
      minRating: filters.minRating > 0 ? filters.minRating : void 0
    }),
    [filters]
  );
  const { data: rawProducts, isLoading } = useSearchProducts(searchQuery);
  const { data: suggestions } = useSearchSuggestions(inputTerm);
  const products = reactExports.useMemo(() => {
    let list = rawProducts ?? [];
    if (filters.categories.length > 1) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.brands.length > 1) {
      list = list.filter((p) => filters.brands.includes(p.brand));
    }
    if (filters.sort === "price_asc") {
      list = [...list].sort(
        (a, b) => Math.min(...a.platforms.map((p) => p.price)) - Math.min(...b.platforms.map((p) => p.price))
      );
    } else if (filters.sort === "price_desc") {
      list = [...list].sort(
        (a, b) => Math.min(...b.platforms.map((p) => p.price)) - Math.min(...a.platforms.map((p) => p.price))
      );
    } else if (filters.sort === "rating") {
      list = [...list].sort((a, b) => b.averageRating - a.averageRating);
    } else if (filters.sort === "newest") {
      list = [...list].sort((a, b) => Number(b.id) - Number(a.id));
    } else if (filters.sort === "discount") {
      list = [...list].sort(
        (a, b) => Math.max(...b.platforms.map((p) => p.discount)) - Math.max(...a.platforms.map((p) => p.discount))
      );
    }
    return list;
  }, [rawProducts, filters.categories, filters.brands, filters.sort]);
  const hasActiveFilters = !!filters.q || filters.categories.length > 0 || filters.brands.length > 0 || filters.minPrice > 0 || filters.maxPrice < PRICE_MAX_CAP || filters.minRating > 0;
  const activeFilterCount = [
    filters.q ? 1 : 0,
    filters.categories.length,
    filters.brands.length,
    filters.minPrice > 0 || filters.maxPrice < PRICE_MAX_CAP ? 1 : 0,
    filters.minRating > 0 ? 1 : 0
  ].reduce((a, b) => a + b, 0);
  const SidebarPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      className: "w-full lg:w-64 shrink-0 space-y-1",
      "data-ocid": "products.filter_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-primary" }),
            "Filters",
            activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "h-5 px-1.5 text-[10px] bg-primary text-primary-foreground border-0", children: activeFilterCount })
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: clearFilters,
              className: "text-xs text-muted-foreground hover:text-destructive transition-smooth",
              "data-ocid": "products.clear_filter_button",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 space-y-1 divide-y divide-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mt-1", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                id: `cat-${cat}`,
                checked: filters.categories.includes(cat),
                onCheckedChange: () => toggleCategory(cat),
                "data-ocid": `products.category_checkbox.${cat.toLowerCase().replace(/\s+/g, "_")}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: `cat-${cat}`,
                className: "text-xs cursor-pointer text-muted-foreground hover:text-foreground transition-smooth select-none",
                children: cat
              }
            )
          ] }, cat)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mt-1 max-h-48 overflow-y-auto pr-1", children: BRANDS.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                id: `brand-${brand}`,
                checked: filters.brands.includes(brand),
                onCheckedChange: () => toggleBrand(brand),
                "data-ocid": `products.brand_checkbox.${brand.toLowerCase().replace(/\s+/g, "_")}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: `brand-${brand}`,
                className: "text-xs cursor-pointer text-muted-foreground hover:text-foreground transition-smooth select-none",
                children: brand
              }
            )
          ] }, brand)) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Price Range", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PriceRangeSlider,
            {
              minPrice: filters.minPrice,
              maxPrice: filters.maxPrice,
              onMinChange: (v) => updateFilter("minPrice", v),
              onMaxChange: (v) => updateFilter("maxPrice", v)
            }
          ) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Min Rating", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-0.5", children: RATING_OPTIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            StarRow,
            {
              rating: r,
              selected: filters.minRating === r,
              onToggle: () => updateFilter("minRating", filters.minRating === r ? 0 : r)
            },
            r
          )) }) }) })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "products.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-30 bg-card/80 backdrop-blur-md border-b border-border/50 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSidebarOpen((v) => !v),
          className: "lg:hidden flex items-center gap-2 px-3 h-9 rounded-lg border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-smooth",
          "data-ocid": "products.mobile_filter_toggle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
            "Filters",
            activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "h-4 px-1 text-[10px] bg-primary text-primary-foreground border-0", children: activeFilterCount })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-0", ref: searchRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search products, brands, categories...",
            className: "pl-10 h-9 bg-background/80 text-sm pr-8",
            value: inputTerm,
            onChange: (e) => {
              setInputTerm(e.target.value);
              setShowSuggestions(true);
            },
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                updateFilter("q", inputTerm);
                setShowSuggestions(false);
              }
              if (e.key === "Escape") setShowSuggestions(false);
            },
            onFocus: () => setShowSuggestions(true),
            onBlur: () => setTimeout(() => setShowSuggestions(false), 180),
            "data-ocid": "products.search_input"
          }
        ),
        inputTerm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth",
            onClick: () => {
              setInputTerm("");
              updateFilter("q", "");
            },
            "data-ocid": "products.search_clear_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSuggestions && suggestions && suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
            className: "absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-xl shadow-elevated overflow-hidden z-50",
            "data-ocid": "products.autocomplete_dropdown",
            children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-secondary/70 transition-smooth text-left",
                onMouseDown: () => {
                  setInputTerm(s);
                  updateFilter("q", s);
                  setShowSuggestions(false);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: s })
                ]
              },
              s
            ))
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block whitespace-nowrap", children: "Sort by" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 flex-wrap", children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => updateFilter("sort", opt.value),
            className: `px-2.5 h-8 rounded-lg text-xs font-medium transition-smooth whitespace-nowrap ${filters.sort === opt.value ? "bg-primary text-primary-foreground" : "border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
            "data-ocid": `products.sort_${opt.value}`,
            children: opt.label
          },
          opt.value
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden",
          onClick: () => setSidebarOpen(false)
        },
        "overlay"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          transition: { type: "spring", damping: 28, stiffness: 300 },
          className: "fixed top-0 left-0 h-full w-72 z-50 bg-card border-r border-border/60 overflow-y-auto p-4 lg:hidden",
          "data-ocid": "products.mobile_filter_drawer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Filters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSidebarOpen(false),
                  className: "p-1.5 rounded-lg hover:bg-muted/40 text-muted-foreground",
                  "data-ocid": "products.close_filter_drawer",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarPanel, {})
          ]
        },
        "drawer"
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block sticky top-32 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarPanel, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5 flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-muted-foreground",
                "data-ocid": "products.result_count",
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28 inline-block" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: products.length }),
                  " ",
                  "product",
                  products.length !== 1 ? "s" : "",
                  " found"
                ] })
              }
            ),
            filters.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs gap-1 cursor-pointer",
                onClick: () => toggleCategory(cat),
                "data-ocid": `products.active_category_chip.${cat.toLowerCase().replace(/\s+/g, "_")}`,
                children: [
                  cat,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                ]
              },
              cat
            )),
            filters.brands.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs gap-1 cursor-pointer",
                onClick: () => toggleBrand(brand),
                "data-ocid": `products.active_brand_chip.${brand.toLowerCase().replace(/\s+/g, "_")}`,
                children: [
                  brand,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                ]
              },
              brand
            )),
            filters.minRating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs gap-1 cursor-pointer",
                onClick: () => updateFilter("minRating", 0),
                "data-ocid": "products.active_rating_chip",
                children: [
                  filters.minRating,
                  "+ ★",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                ]
              }
            ),
            (filters.minPrice > 0 || filters.maxPrice < PRICE_MAX_CAP) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs gap-1 cursor-pointer",
                onClick: () => {
                  updateFilter("minPrice", 0);
                  updateFilter("maxPrice", PRICE_MAX_CAP);
                },
                "data-ocid": "products.active_price_chip",
                children: [
                  "$",
                  filters.minPrice,
                  "–$",
                  filters.maxPrice,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                ]
              }
            )
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 gap-1.5 text-muted-foreground hover:text-destructive",
              onClick: clearFilters,
              "data-ocid": "products.clear_all_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
                "Clear all filters"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-6 opacity-50" }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",
            "data-ocid": "products.loading_state",
            children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl border border-border/60 overflow-hidden bg-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3 rounded-md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-4/5 rounded-md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-1/4 rounded-md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-2/5 rounded-md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-md" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-16 rounded-md" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-24 rounded-md" })
                    ] })
                  ] })
                ]
              },
              `skel-${i + 1}`
            ))
          }
        ) : products.length === 0 ? (
          /* Empty state */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.35 },
              className: "flex flex-col items-center text-center py-20 px-4",
              "data-ocid": "products.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-2xl bg-muted/40 flex items-center justify-center mb-6 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageSearch, { className: "w-12 h-12 text-muted-foreground/50" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: "No products match your filters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mb-6", children: "Try broadening your search or removing some filters to discover more products." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "gap-2",
                    onClick: clearFilters,
                    "data-ocid": "products.empty_clear_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                      "Clear all filters"
                    ]
                  }
                )
              ]
            }
          )
        ) : (
          /* Product grid */
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5",
              "data-ocid": "products.list",
              children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }, product.id))
            },
            `grid-${products.length}`
          )
        )
      ] })
    ] }) })
  ] });
}
export {
  ProductsPage as default
};
