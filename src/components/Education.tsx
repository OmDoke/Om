import type { CSSProperties } from 'react';
import { FaGraduationCap as GraduationCap, FaAward as Award } from 'react-icons/fa';
import { EDUCATION } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './Sketch';

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section">
      <SectionHeader note="credentials ↓" title="Education & Certifications">
        Formal post-graduate engineering credential and computer engineering degree from Pune institutions.
      </SectionHeader>

      <div ref={ref} className="reveal card-grid" style={{ '--col': '340px' } as CSSProperties}>
        {EDUCATION.map((item) => (
          <div key={item.degree} className="sketch-box lift card">
            <div className="card-row">
              <div className="hand-note" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '1.35rem' }}>
                <GraduationCap style={{ fontSize: '1.05rem' }} />
                <span>{item.period}</span>
              </div>
              <span className="stamp">{item.location}</span>
            </div>

            <div>
              <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{item.degree}</h3>
              <div className="card-sub">{item.institution}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
              <Award style={{ color: 'var(--accent)', flexShrink: 0 }} />
              {/* extra span keeps the marker inline so it follows wrapped lines */}
              <span>
                <span className="marker">{item.highlight}</span>
              </span>
            </div>

            <p className="card-body">{item.details}</p>

            <div className="chip-row" style={{ marginTop: 'auto' }}>
              {item.courses.map((course) => (
                <span key={course} className="chip">{course}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
