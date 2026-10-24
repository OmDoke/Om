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
    <section id="experience" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-inner">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}
        >
          // work history
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Industry Experience
        </h2>
        <p
          className="text-muted"
          style={{
            fontSize: '1rem',
            maxWidth: '680px',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}
        >
          Practical engineering experience shipping production user interfaces and maintaining enterprise workflows.
        </p>

        <div ref={ref} className="reveal">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="timeline-row">
              {/* Vertical connector line */}
              {i < EXPERIENCE.length - 1 && <div className="timeline-line" />}

              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Date column (high contrast) */}
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  paddingTop: 4,
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {item.date}
              </div>

              {/* Content column */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 4,
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.company}
                </div>
                <div
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
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
                    gap: 6,
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        borderRadius: 6,
                        padding: '3px 9px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
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
