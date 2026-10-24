import { useEffect, useRef } from 'react';
import { FaGraduationCap as GraduationCap, FaAward as Award } from 'react-icons/fa';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
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
    <section id="education" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
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
          // credentials
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Education & Certifications
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
          Formal post-graduate engineering credential and computer engineering degree from Pune institutions.
        </p>

        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {EDUCATION.map((item) => (
            <div
              key={item.degree}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--accent)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <GraduationCap style={{ fontSize: '1.1rem' }} />
                  <span>{item.period}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#34d399',
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {item.location}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.degree}
                </h3>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  {item.institution}
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <Award />
                <span>{item.highlight}</span>
              </div>

              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.details}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {item.courses.map((course) => (
                  <span
                    key={course}
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                      borderRadius: '5px',
                      padding: '2px 8px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {course}
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
