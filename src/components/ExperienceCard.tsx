import { EXPERIENCE } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './Sketch';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section">
      <SectionHeader note="work history ↓" title="Industry Experience">
        Practical engineering experience shipping production user interfaces and maintaining enterprise workflows.
      </SectionHeader>

      <div ref={ref} className="reveal">
        {EXPERIENCE.map((item, i) => (
          <div key={i} className="timeline-row">
            {/* Vertical pen line */}
            {i < EXPERIENCE.length - 1 && <div className="timeline-line" />}

            <div className="timeline-dot" />

            <div className="timeline-date">{item.date}</div>

            <div className="sketch-box card" style={{ gap: 0, padding: '1.5rem' }}>
              <div className="card-title" style={{ fontSize: '1.15rem' }}>{item.role}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="card-body" style={{ fontSize: '0.88rem', lineHeight: 1.65 }}>
                {item.desc}
              </div>

              <div className="chip-row" style={{ marginTop: '1rem' }}>
                {item.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
