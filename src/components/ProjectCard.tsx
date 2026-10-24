import { useEffect, useRef } from 'react';
import { FaGithub as Github, FaExternalLinkAlt as ExternalLink, FaLock as Lock } from 'react-icons/fa';
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
    <section id="projects" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
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
          // engineering portfolio
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Production & Systems Projects
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
          Real architectures with verified codebases — from Spring Boot microservices with automated unit test suites to production RAG pipelines and enterprise editorial tools.
        </p>

        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              {/* Header: Tag & Role */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    backgroundColor: `${p.color}18`,
                    color: p.color,
                    border: `1px solid ${p.color}35`,
                    borderRadius: '6px',
                    padding: '3px 9px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.tag}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {p.role}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.015em',
                }}
              >
                {p.title}
              </h3>

              {/* Problem statement */}
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.9rem',
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: 'var(--text-primary)' }}>Problem Solved: </strong>
                {p.problem}
              </div>

              {/* Architectural decisions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.2rem' }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    fontWeight: 600,
                  }}
                >
                  Technical Decisions & Architecture:
                </div>
                <ul
                  style={{
                    paddingLeft: '1.15rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  {p.architecture.map((dec, i) => (
                    <li key={i}>{dec}</li>
                  ))}
                </ul>
              </div>

              {/* Measured Metrics Box */}
              <div
                style={{
                  marginTop: 'auto',
                  backgroundColor: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '6px',
                  padding: '0.55rem 0.8rem',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                  lineHeight: 1.4,
                }}
              >
                <strong>📊 Facts: </strong>
                {p.metrics}
              </div>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.25rem' }}>
                {p.stack.map((tech) => (
                  <span
                    key={tech}
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
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: '0.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border)',
                  alignItems: 'center',
                }}
              >
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      backgroundColor: 'var(--bg)',
                      border: '1px solid var(--border)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      fontWeight: 500,
                    }}
                  >
                    <Github /> View Codebase
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent)',
                      fontSize: '0.82rem',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      fontWeight: 600,
                    }}
                  >
                    <ExternalLink /> Live Demo
                  </a>
                )}
                {p.isInternal && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      backgroundColor: 'var(--bg)',
                      border: '1px solid var(--border)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <Lock /> Proprietary Enterprise Tool (HT Labs)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
