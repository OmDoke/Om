import type { CSSProperties } from 'react';
import { FaGithub as Github, FaExternalLinkAlt as ExternalLink, FaLock as Lock } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './Sketch';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section">
      <SectionHeader note="engineering portfolio ↓" title="Production & Systems Projects">
        Real architectures with verified codebases — from Spring Boot microservices with automated unit test suites to production RAG pipelines and enterprise editorial tools.
      </SectionHeader>

      <div ref={ref} className="reveal card-grid" style={{ '--col': '480px' } as CSSProperties}>
        {PROJECTS.map((p) => (
          <article key={p.title} className="sketch-box lift card">
            {/* Header: Tag & Role */}
            <div className="card-row">
              <span className="project-tag">{p.tag}</span>
              <span className="meta-mono">{p.role}</span>
            </div>

            <h3 className="card-title" style={{ fontSize: '1.3rem' }}>{p.title}</h3>

            {/* Problem statement as a margin note */}
            <div className="margin-note">
              <span className="hand-note">problem solved →</span>
              {p.problem}
            </div>

            {/* Architectural decisions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="meta-mono" style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, color: 'var(--ink)' }}>
                Technical Decisions & Architecture
              </div>
              <ul className="sketch-list">
                {p.architecture.map((dec, i) => (
                  <li key={i}>{dec}</li>
                ))}
              </ul>
            </div>

            {/* Measured Metrics Box */}
            <div className="facts">
              <strong>Facts: </strong>
              {p.metrics}
            </div>

            {/* Tech stack badges */}
            <div className="chip-row">
              {p.stack.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>

            {/* Action Links */}
            <div className="card-actions">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-sm">
                  <Github /> View Codebase
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-ink">
                  <ExternalLink /> Live Demo
                </a>
              )}
              {p.isInternal && (
                <span className="meta-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Lock /> Proprietary Enterprise Tool (HT Labs)
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
