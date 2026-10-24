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
        padding: '1rem 0 3.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        ref={ref}
        className="reveal stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              padding: '1.5rem 1.25rem',
              textAlign: 'center',
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                lineHeight: 1,
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginTop: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
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
