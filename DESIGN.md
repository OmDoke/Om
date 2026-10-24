# Design System — Conceptual Sketch

Style #9 from UX Planet's "50 Design Styles Every Designer Should Know": rough hand-drawn sketches that favour spontaneity over polish, giving a raw, behind-the-scenes feel. Core elements are pencil/ink lines, crosshatching and greyscale tones. On this portfolio that means **ink on cream paper, one green accent, hand-lettered notes**, closest to the Notion "Software should be beautiful" poster. It should still look like a credible engineering portfolio, not a children's book.

All tokens and classes live in [src/index.css](src/index.css). Reusable SVG strokes live in [src/components/Sketch.tsx](src/components/Sketch.tsx).

## 1. Color tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f4efe4` | Page background (plus an SVG grain texture on `body`) |
| `--paper-deep` | `#e9e1cf` | Recessed paper |
| `--card` | `#fbf8f1` | Card surface |
| `--ink` | `#1a1a1a` | Text, outlines, rules |
| `--ink-soft` | `#454545` | Body copy |
| `--ink-faint` | `#6b6b6b` | Meta text (AA on paper) |
| `--rule-faint` | `rgba(26,26,26,.2)` | Dashed dividers |
| `--accent` | `#1f7a45` | The **only** colour: notes, stamps, underlines, links |
| `--marker` | `#c9e4be` | Highlighter swipe, user chat bubbles, tape |

Rules:
- One accent. Never introduce a second hue. Project/brand colours in data are intentionally unused.
- Emoji icons go through `.mono-icon` (greyscale).
- Never use `--marker` as a text colour, only as a background.

## 2. Typography

| Role | Font | Notes |
|---|---|---|
| Section titles, notes, stamps, dates | **Caveat** 600–700 (`--font-hand`) | Hand-lettered. Large sizes only (≥1.1rem). |
| Headlines + body | **Space Grotesk** (`--font-sans`) | Clean grotesk keeps long text readable. |
| Labels, tags, metadata | **JetBrains Mono** (`--font-mono`) | Small, often uppercase + tracked. |

Never set paragraphs in Caveat. The hero `h1` stays in Space Grotesk, with a `.marker` swipe on the key phrase.

## 3. Primitives

| Class / component | What it draws |
|---|---|
| `.sketch-box` | Card: wobbly ink outline (`filter: url(#sketch-rough)` from `<SketchDefs/>`) and a crosshatched offset shadow. Add `.lift` for hover, `.flat` to drop the hatch. |
| `.btn` / `.btn-ink` / `.btn-quiet` / `.btn-sm` | Pen-outlined buttons with a hard offset shadow that presses in on `:active`. |
| `.chip` | Pen-drawn tag, slightly rotated per item. |
| `.stamp` | Rotated rubber-stamp label in accent. |
| `.hand-note` | Handwritten margin note in accent. |
| `.marker` | Highlighter swipe. Must be inline; wrap it in a plain `<span>` if its parent is flex. |
| `.tape` | Masking tape strip on top of a card. |
| `.margin-note`, `.sketch-list`, `.facts` | Project-card annotations: margin note, ✎ bullets, dashed "facts" box. |
| `<SectionHeader note title>` | Every section heading: note, hand-lettered title, scribbled underline. |
| `<Scribble/>`, `<CircleMark/>`, `<DoodleArrow/>` | Ink strokes that draw themselves when an ancestor gets `.visible` (or when given `className="drawn"`). |

Corners use the irregular radii `--wobble`, `--wobble-sm` and `--wobble-round`, never a uniform `border-radius`.

## 4. Layout

- Sections: `<section className="section">`, inside `.container` (max 1280px, 1.5rem / 4rem gutters).
- Grids: `.card-grid` with a `--col` min width (`min()` keeps it phone-safe). Four-item sets use 2×2 (`--col` ≥ 420px) to avoid orphans.
- Dividers: dashed `--rule-faint` inside cards, solid ink for structural rules (header, footer, card actions).
- Small deliberate rotations (≤1°) on flyer-like elements. Keep body text level.

## 5. Motion

Emil Kowalski standard: **under 300ms, ease-out (`--ease-out`), transform and opacity only.**
- `.reveal` + `useReveal()` fade-up on scroll.
- Ink strokes draw on in 450ms, the one decorative exception. The timeline pen line draws in 600ms.
- Everything is disabled under `prefers-reduced-motion`.

## 6. Do / Don't

**Do**
- Annotate: notes, arrows and circles that explain like a designer's notebook.
- Keep content scannable: the sketch layer decorates, the grotesk text informs.
- Reuse the primitives above instead of writing inline colours.

**Don't**
- Add gradients, glows, glassmorphism or drop shadows with blur.
- Use more than one accent colour, or hard-code hex values in components.
- Put handwritten fonts on paragraphs or small text.

## 7. Agent prompt guide

> "Build a component in the Conceptual Sketch style: cream paper background (`--paper`), black ink outlines using `.sketch-box`, one green accent (`--accent`) for handwritten Caveat notes and stamps, Space Grotesk body, JetBrains Mono labels, crosshatched shadows, no gradients or blur. Use `SectionHeader` for headings and the existing `.chip`, `.btn`, `.marker` classes."
