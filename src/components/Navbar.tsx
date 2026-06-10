import { useState, useEffect } from 'react';
import { PERSONAL } from '../data/portfolioData';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: scrolled
          ? 'rgba(8,12,20,0.92)'
          : 'rgba(8,12,20,0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid #1e293b'
          : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontWeight: 700,
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.01em',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {PERSONAL.nickname.toLowerCase()}.doke
      </span>

      {/* Nav links */}
      <div className="nav-links" style={{ display: 'flex', gap: '1.75rem' }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            id={`nav-${link.toLowerCase()}`}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'color 0.2s',
              fontFamily: 'Space Grotesk, sans-serif',
              padding: '2px 0',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = '#f1f5f9')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = '#94a3b8')
            }
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
