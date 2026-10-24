export default function Navbar() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', backgroundColor: 'rgba(24, 24, 27, 0.85)' }}>
      <div className="container nav-container">
        <a
          href="/"
          aria-label="Onkar Doke - Full Stack Engineer Portfolio"
          style={{
            fontWeight: 700,
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '2.1rem',
              height: '2.1rem',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              fontWeight: 800,
              fontSize: '0.9rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            OD
          </div>
          <span style={{ letterSpacing: '-0.01em' }}>Onkar Doke</span>
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              color: '#34d399',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '2px 6px',
              borderRadius: '4px',
            }}
          >
            Pune
          </span>
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
