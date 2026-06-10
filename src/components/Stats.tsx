import { useEffect, useRef } from 'react';
import { STATS } from '../data/portfolioData';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: '1rem 2rem 3.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        ref={ref}
        className="reveal stats-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="card"
            style={{
              padding: '1.5rem 1rem',
              textAlign: 'center',
              borderRadius: 12,
            }}
          >
            <div
              className="gradient-text"
              style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1 }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#475569',
                marginTop: 6,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
