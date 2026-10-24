export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="/" aria-label="Onkar Doke - Full Stack Engineer Portfolio" className="brand">
          <span className="brand-mark">OD</span>
          <span style={{ letterSpacing: '-0.01em' }}>Onkar Doke</span>
          <span className="hand-note">Pune</span>
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
