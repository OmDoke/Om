import { PERSONAL } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        marginTop: '3rem',
      }}
    >
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginBottom: 6,
        }}
      >
        {PERSONAL.name} · Full Stack Engineer · Java / Spring Boot · React / TypeScript · GenAI / RAG
      </div>
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        © {new Date().getFullYear()} {PERSONAL.name} · Pune, Maharashtra · Built with React & Vite
      </div>
    </footer>
  );
}
