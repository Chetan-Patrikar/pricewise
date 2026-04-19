# Design Brief

## Purpose & Context
Premium e-commerce intelligence platform — users search, compare, and track prices across multiple retailers. Design balances luxury (refined typography, elevated UI) with clear functionality (information hierarchy, accessibility). Glassmorphism creates modern premium feel while maintaining clarity.

## Tone & Aesthetic
Modern premium tech — sophisticated, intelligent, trustworthy. Geometric display typography paired with warm readable body text. Smooth micro-interactions and hover effects create sense of quality. No corporate coldness; approachable and inviting.

## Differentiation
**Glassmorphic cards with backdrop blur** create depth and premium perception. **Vibrant teal accent** signals deals and best prices — instantly draws attention. **Animated price badges** and sparkline indicators communicate real-time data. **Dual-mode parity** (light/dark) maintains premium feel in both contexts.

## Color Palette (OKLCH)

| Token | Light (L C H) | Dark (L C H) | Purpose |
|-------|---------------|-------------|---------|
| **Primary** | 0.42 0.25 255 (Indigo) | 0.72 0.25 255 (Bright Indigo) | Brand, CTAs, focus states |
| **Accent** | 0.65 0.22 190 (Teal) | 0.68 0.22 190 (Bright Teal) | "Best deal" badges, highlights |
| **Background** | 0.98 0.01 0 (Off-white) | 0.11 0.02 245 (Deep navy) | Canvas, primary surface |
| **Card** | 0.97 0.02 0 (White) | 0.14 0.03 240 (Frosted blue) | Glassmorphic card surfaces |
| **Foreground** | 0.15 0.02 245 (Near-black) | 0.94 0.01 0 (Off-white) | Body text, default text |
| **Muted** | 0.92 0.02 0 (Light grey) | 0.22 0.02 0 (Dark grey) | Secondary text, borders |
| **Destructive** | 0.56 0.25 15 (Red-orange) | 0.62 0.24 15 (Bright red) | Delete, warnings, errors |

## Typography

| Use | Font | Size | Weight | Purpose |
|-----|------|------|--------|---------|
| **Display** | Fraunces (serif) | 32–48px | 700 | Hero headlines, major sections |
| **Body** | General Sans (sans) | 14–16px | 400–500 | Content, descriptions, UI labels |
| **Mono** | Geist Mono | 12–14px | 400 | Code, price display, technical data |

Line height: 1.6 (body), 1.2 (display). Letter spacing: normal (body), +0.02em (display).

## Elevation & Depth

| Level | Style | Use |
|-------|-------|-----|
| **Base** | Flat, `bg-background` | Page background |
| **Elevated 1** | `glass` class, `shadow-subtle` | Card backgrounds, sidebars |
| **Elevated 2** | `glass-dark`, `shadow-elevated` | Hover states, modals, overlays |
| **Interactive** | `backdrop-filter: blur(12px)`, border accent | Buttons, inputs, focus rings |

## Structural Zones

| Zone | Token | Treatment | Detail |
|------|-------|-----------|--------|
| **Header** | `bg-card`, `glass` | Frosted glass with subtle border-b | Search bar, filters, mode toggle |
| **Main Content** | `bg-background` | Clean canvas | Product grid, comparison tables |
| **Product Card** | `bg-card`, `glass`, `shadow-elevated` | Glassmorphic, hover floats | Image, title, prices, badges |
| **Sidebar** | `bg-sidebar`, `glass` | Frosted, narrower cards | Category filters, saved items |
| **Footer** | `bg-muted/20`, `border-t` | Subtle, low emphasis | Links, copyright |

## Spacing & Rhythm

- **Grid**: 8px base unit. Margins: 16px (sm), 24px (md), 32px (lg), 48px (xl).
- **Padding**: Cards 16–24px. Buttons 8–12px H, 12–16px V.
- **Density**: Generous breathing room for premium feel. Never cramped.
- **Responsive**: Mobile-first. 1 column (mobile), 2 (tablet), 3–4 (desktop).

## Component Patterns

- **Price Badge**: `badge-accent` class; teal, animated pulse-gentle on hover.
- **CTA Buttons**: Primary indigo, rounded-lg, shadow-elevated, hover-lift via scale.
- **Search Input**: glass morphism, accent border on focus, placeholder foreground-muted.
- **Price Comparison Card**: Glassmorphic, 3–4 platform rows, highlight "best deal" in accent.
- **Wishlist Toggle**: Heart icon, accent color on active, smooth transition.

## Motion & Choreography

- **Base Transition**: `transition-smooth` (0.3s cubic-bezier 0.4 0 0.2 1) — all interactive elements.
- **Hover**: Subtle lift (scale 1.02), shadow-elevated, slight blur intensification.
- **Float Animation**: `animate-float` — applies to "trending deals" cards (3s infinite).
- **Pulse Accent**: `animate-pulse-gentle` — price drop indicators (2s infinite).
- **Page Enter**: Staggered fade + slide for product grid (via React key/delay).

## Constraints & Gotchas

- **No raw hex/rgb**: All colors via OKLCH CSS vars. No arbitrary Tailwind color classes.
- **Glassmorphism limits**: Ensure text contrast >= AA. Dark mode uses higher blur (16px) for readability.
- **Responsive images**: Product thumbnails scale; never crop/distort. Use `object-cover` + fixed aspect ratio.
- **Dark mode toggle**: Persisted to localStorage. Class `.dark` applies to `<html>` or body. Avoid inline `style="color: ..."`.
- **Performance**: Glassmorphism (blur) can be expensive on mobile. Use `will-change: backdrop-filter` sparingly, test on low-end devices.

## Signature Detail

**Animated price sparkline** in comparison cards — micro line chart showing 7-day price trend, using chart accent colors. Signals real-time intelligence without overwhelming. Creates visual richness and builds trust in data.

---

*Dark mode palette tuned for readability. Indigo L increased to 0.72, card L to 0.14 for sufficient contrast. Glassmorphism blur intensity increased (16px vs 12px) to maintain legibility in low-lightness context.*
