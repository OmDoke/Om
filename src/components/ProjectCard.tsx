import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
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
    <section
      id="projects"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)',
      }}
    >
      <div className="section-inner">
        <div className="section-label">// portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Real products solving real problems — from AI-powered search to
          full-stack platforms.
        </p>

        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="card"
              style={{
                padding: '1.5rem',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {/* Tag badge */}
              <div
                style={{
                  display: 'inline-block',
                  background: `${p.color}22`,
                  color: p.color,
                  borderRadius: 6,
                  padding: '3px 10px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  fontFamily: 'JetBrains Mono, monospace',
                  width: 'fit-content',
                }}
              >
                {p.tag}
              </div>

              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {p.desc}
              </p>

              {/* Stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: '#131929',
                      border: '1px solid #1e293b',
                      color: '#94a3b8',
                      borderRadius: 6,
                      padding: '3px 9px',
                      fontSize: '0.72rem',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 8, marginTop: '0.25rem' }}>
                <a
                  href={p.demo}
                  className="project-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    color: '#6366f1',
                    fontSize: '0.8rem',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    padding: '5px 12px',
                    borderRadius: 8,
                    transition: 'all 0.2s',
                    fontWeight: 500,
                  }}
                >
                  ↗ Live Demo
                </a>
                <a
                  href={p.repo}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    color: '#6366f1',
                    fontSize: '0.8rem',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    padding: '5px 12px',
                    borderRadius: 8,
                    transition: 'all 0.2s',
                    fontWeight: 500,
                  }}
                >
                  ⚙ GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
