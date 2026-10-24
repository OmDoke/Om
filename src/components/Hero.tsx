import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Envelope } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import { PERSONAL } from '../data/portfolioData';
import { DoodleArrow, Scribble } from './Sketch';

const MANIFEST = [
  {
    label: 'Backend service',
    status: '33 tests passed ✓',
    name: 'Spring Boot 3 · Java 17',
    detail: '22 REST Endpoints · Redis Session Auth · BCrypt · MySQL',
  },
  {
    label: 'RAG pipeline',
    status: 'MMR top-8',
    name: 'FastAPI · LangChain · Pinecone',
    detail: '3072-dim Embeddings · Recursive Splitter (1000/200)',
  },
  {
    label: 'Production CMS',
    status: 'HT Labs Pune',
    name: 'React · Redux Toolkit · TypeScript',
    detail: 'OTTplay Editorial CMS · Reusable Component Architecture',
  },
];

export default function Hero() {
  return (
    <section className="container" id="about">
      <div className="hero-layout">
        <div className="hero-content fade-in-up">
          <div className="status-note">
            <span className="status-dot" />
            Open to full-time roles · Pune / Remote
          </div>

          <h1 className="heading-1">
            <span className="marker">Full Stack Engineer:</span> Java/Spring Boot, React, and RAG systems
          </h1>

          <p className="text-muted hero-lede">
            I build secure Spring Boot backends and ship React frontends and LLM pipelines on top. CDAC PG-DAC 2025 · React/TypeScript at HT Labs (OTTplay).
          </p>

          <div className="cta-row">
            <div className="cta-hint" aria-hidden="true">
              <DoodleArrow className="drawn" />
              <span className="hand-note">start here</span>
            </div>
            <a href="#projects" className="btn btn-ink">
              View Projects ↓
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              Download Resume ↗
            </a>
            <a href="mailto:onkardoke9696@gmail.com" className="btn btn-quiet">
              <Envelope /> Contact
            </a>
          </div>

          <div className="social-links">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Github /> GitHub (OmDoke)
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin /> LinkedIn
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="social-link">
              <Envelope /> {PERSONAL.email}
            </a>
          </div>
        </div>

        {/* Taped flyer: the stack, written up as a ruled table */}
        <div className="fade-in-up" style={{ animationDelay: '0.08s', width: '100%', maxWidth: '430px' }}>
          <div className="sketch-box manifest">
            <span className="tape" aria-hidden="true" />
            <div className="manifest-head">
              <span className="manifest-title">the stack, sketched</span>
              <span className="manifest-file">systems-manifest.json</span>
            </div>

            {MANIFEST.map((item) => (
              <div key={item.label} className="manifest-row">
                <div className="manifest-row-top">
                  <span className="manifest-label">{item.label}</span>
                  <span className="manifest-status">{item.status}</span>
                </div>
                <div className="manifest-name">{item.name}</div>
                <div className="manifest-detail">{item.detail}</div>
              </div>
            ))}

            <div className="manifest-foot">
              <span>Docker Compose: 4 services</span>
              <span className="stamp">CDAC Certified 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="fade-in-up" style={{ animationDelay: '0.14s', marginBottom: '3.5rem' }}>
        <div className="activity-head">
          <h2 className="activity-title title-ink">
            Engineering Activity
            <Scribble className="drawn" />
          </h2>
          <span className="meta-mono">github.com/OmDoke</span>
        </div>
        <div className="sketch-box flat graph-container">
          <GitHubCalendar
            username="OmDoke"
            theme={{
              light: ['#e6dfcf', '#c9e4be', '#8fc18a', '#4a9a62', '#1f7a45'],
              dark: ['#e6dfcf', '#c9e4be', '#8fc18a', '#4a9a62', '#1f7a45'],
            }}
            colorScheme="light"
            labels={{ totalCount: '{{count}} contributions in the last year' }}
          />
        </div>
      </div>
    </section>
  );
}
