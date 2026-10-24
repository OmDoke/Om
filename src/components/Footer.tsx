import { PERSONAL } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="hand-note">thanks for scrolling ✎</div>
      <div className="text-muted" style={{ fontSize: '0.9rem', marginBottom: 6 }}>
        {PERSONAL.name} · Full Stack Engineer · Java / Spring Boot · React / TypeScript · GenAI / RAG
      </div>
      <div className="meta-mono">
        © {new Date().getFullYear()} {PERSONAL.name} · Pune, Maharashtra · Built with React & Vite
      </div>
    </footer>
  );
}
