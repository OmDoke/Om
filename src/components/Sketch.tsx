import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

// ── Conceptual Sketch primitives ─────────────────────────────────────────────
// Ink strokes use pathLength={1} so CSS can "draw" them with stroke-dashoffset.

// Rendered once in App: the displacement filter that makes ink borders wobble.
export function SketchDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter id="sketch-rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export function Scribble({ className = '' }: { className?: string }) {
  return (
    <svg className={`ink scribble ${className}`} viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 10 C 55 4, 110 14, 165 8 S 255 5, 297 9" pathLength={1} />
    </svg>
  );
}

export function CircleMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`ink circle-mark ${className}`} viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M70 6 C 30 3, 5 14, 6 31 C 7 50, 40 57, 70 55 C 100 53, 116 42, 114 27 C 112 12, 90 4, 52 8" pathLength={1} />
    </svg>
  );
}

export function DoodleArrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`ink doodle-arrow ${className}`} viewBox="0 0 90 60" aria-hidden="true">
      <path d="M6 6 C 10 34, 34 50, 78 46" pathLength={1} />
      <path d="M66 36 L79 46 L64 54" pathLength={1} />
    </svg>
  );
}

export function SectionHeader({ note, title, children }: { note: string; title: string; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="section-head">
      <div className="hand-note">{note}</div>
      <h2 className="section-title">
        <span className="title-ink">
          {title}
          <Scribble />
        </span>
      </h2>
      <p className="section-lede">{children}</p>
    </div>
  );
}
