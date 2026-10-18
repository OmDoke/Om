---
name: emilkowalski
description: >-
  A collection of UI/animation design skills by Emil Kowalski. Teaches the agent
  to write production-grade animations, pick trusted UI libraries, fix mobile web
  quirks, and stress-test layouts against edge cases.
---

# Emil Kowalski Skills

A curated set of AI agent skills by Emil Kowalski (author of Sonner, Vaul) that
level up how the agent writes frontend UI, animations, and interactions.

---

## Skills Included

### 1. `animate`
Helps the agent write smooth, physics-based UI animations.
- Only animate when it adds value (skip high-frequency or keyboard actions)
- Classify purpose: Feedback / Spatial / State / Delight / Explanation
- Use cheapest tool that works: CSS transition ? @starting-style ? CSS animation ? WAAPI ? motion.dev
- Only animate `transform` and `opacity` (GPU-accelerated)
- Never scale from 0 — use 0.9–0.97 + opacity: 0
- Duration: under 300ms. Entry = ease-out. Never ease-in on entry.

### 2. `pick-ui-library`
Forces the agent to pick trusted, well-maintained libraries instead of hand-rolling components.
- Unstyled accessible UI (dialogs, popovers, menus) ? `base-ui`
- Command menus (?K palettes) ? `cmdk`
- Toasts / notifications ? `Sonner`
- OTP / verification code inputs ? `input-otp`
- Checks `package.json` first to respect existing deps

### 3. `mobile-native`
Makes web apps feel native on mobile, not like a desktop site squeezed onto a phone.
- Sticky hover states ? use `(hover: hover)` media query
- Viewport height bug ? use `dvh` instead of `vh`
- Tap highlight flashes ? remove with CSS
- Form input zoom ? set font-size = 16px
- 300ms tap delay ? use `touch-action: manipulation`
- Safe area padding ? `env(safe-area-inset-*)`

### 4. `break-ui`
Stress-tests components with worst-case data to expose layout bugs.
- Long names (e.g. Aleksandra Wisniewska-Kowalczyk)
- Long unbreakable emails
- One-letter entries, zero items, huge counters (1,284+)
- Non-Latin text and emojis
- Generates an audit report with every broken layout + fix

### 5. `review-animations` / `improve-animations`
Audits existing animations in the codebase for:
- Layout thrashing (animating width/height/margin)
- Missing will-change or contain hints
- Janky transitions and poor easing curves

---

## How to Use

Tell the agent to activate a specific skill, e.g.:
- "Use the animate skill to add an entrance animation to this modal"
- "Use pick-ui-library to choose a toast component"
- "Use break-ui to stress-test the UserCard component"
- "Use mobile-native to fix mobile issues on this page"
