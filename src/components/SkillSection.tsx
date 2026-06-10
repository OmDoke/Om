import { useEffect, useRef } from 'react';
import { SKILLS } from '../data/portfolioData';

export default function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.classList.add('visible');
          // Stagger-animate each progress bar
          grid
            .querySelectorAll<HTMLDivElement>('.skill-fill')
            .forEach((bar, i) => {
              const level = SKILLS[i]?.level ?? 80;
              setTimeout(() => {
                bar.style.width = level + '%';
              }, 100 + i * 60);
            });
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(grid);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">// expertise</div>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub">
          A stack built for shipping production-grade, AI-powered applications
          end to end.
        </p>

        <div
          ref={gridRef}
          id="skillsGrid"
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="card skill-card"
              style={{
                padding: '1rem',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                transition: 'all 0.25s',
              }}
            >
              <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>
                {skill.icon}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#f1f5f9',
                }}
              >
                {skill.name}
              </div>
              {/* Progress bar track */}
              <div
                style={{
                  height: 3,
                  background: '#131929',
                  borderRadius: 2,
                  overflow: 'hidden',
                  marginTop: 2,
                }}
              >
                <div
                  className="skill-fill"
                  style={{
                    height: '100%',
                    width: '0%',
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                    borderRadius: 2,
                    transition: 'width 1s ease',
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#475569',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
