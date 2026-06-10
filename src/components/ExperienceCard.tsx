import { useEffect, useRef } from 'react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label">// journey</div>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          Building things that matter, one role at a time.
        </p>

        <div ref={ref} className="reveal">
          {EXPERIENCE.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '2rem',
                paddingBottom: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Vertical connector line */}
              {i < EXPERIENCE.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 136,
                    top: 20,
                    bottom: 0,
                    width: 1,
                    background: '#1e293b',
                  }}
                />
              )}

              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 128,
                  top: 6,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#6366f1',
                  border: '3px solid #080c14',
                  boxShadow: '0 0 0 4px rgba(99,102,241,0.2)',
                  zIndex: 2,
                }}
              />

              {/* Date column */}
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#475569',
                  fontFamily: 'JetBrains Mono, monospace',
                  textAlign: 'right',
                  paddingTop: 4,
                  lineHeight: 1.4,
                }}
              >
                {item.date}
              </div>

              {/* Content column */}
              <div style={{ paddingLeft: '2rem' }}>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    marginBottom: 2,
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    color: '#6366f1',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.company}
                </div>
                <div
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </div>

                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 5,
                    marginTop: '0.75rem',
                  }}
                >
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(6,182,212,0.1)',
                        border: '1px solid rgba(6,182,212,0.2)',
                        color: '#06b6d4',
                        borderRadius: 6,
                        padding: '2px 9px',
                        fontSize: '0.7rem',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
