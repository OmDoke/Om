import { useEffect, useRef } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
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
          // technical matrix
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Technical Capabilities
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
          Engineered across the stack: production-ready Spring Boot microservices, component-driven React frontends, and retrieval-augmented LLM architectures.
        </p>

        <div
          ref={sectionRef}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </h3>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600,
                  }}
                >
                  {group.badge}
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  minHeight: '2.6rem',
                }}
              >
                {group.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: 'auto',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-hover)',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
