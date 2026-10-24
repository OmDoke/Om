import { STATS } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { CircleMark } from './Sketch';

export default function Stats() {
  const ref = useReveal<HTMLDivElement>(0.2);

  return (
    <section style={{ padding: '1rem 0 3.5rem' }}>
      <div ref={ref} className="reveal sketch-box stats-sheet">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-num">
              {s.num}
              <CircleMark />
            </span>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
