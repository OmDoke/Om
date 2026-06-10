import { PERSONAL } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #1e293b',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          color: '#94a3b8',
          fontSize: '0.9rem',
          marginBottom: 6,
        }}
      >
        Built with ♥ by {PERSONAL.name} · React · Spring Boot · Java · AI
      </div>
      <div
        style={{
          color: '#475569',
          fontSize: '0.78rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        © 2026 {PERSONAL.name}. All rights reserved.
      </div>
    </footer>
  );
}
