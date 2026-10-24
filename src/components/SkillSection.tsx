import type { CSSProperties } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './Sketch';

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section">
      <SectionHeader note="technical matrix ↓" title="Technical Capabilities">
        Engineered across the stack: production-ready Spring Boot microservices, component-driven React frontends, and retrieval-augmented LLM architectures.
      </SectionHeader>

      <div ref={ref} className="reveal card-grid" style={{ '--col': '420px' } as CSSProperties}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="sketch-box lift card">
            <div className="card-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
              <h3 className="card-title">{group.category}</h3>
              <span className="stamp">{group.badge}</span>
            </div>

            <p className="card-body" style={{ minHeight: '2.6rem' }}>
              {group.description}
            </p>

            <div className="chip-row" style={{ marginTop: 'auto' }}>
              {group.skills.map((skill) => (
                <span key={skill.name} className="chip skill-chip">
                  <span className="mono-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
