import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Envelope } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import { PERSONAL } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="container" id="about">
      <div className="hero-layout" style={{ alignItems: 'center', marginBottom: '3.5rem' }}>
        <div className="hero-content fade-in-up">
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.4rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: '#34d399',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
            />
            Open to full-time roles · Pune / Remote
          </div>

          <h1
            className="heading-1"
            style={{
              marginBottom: '1.25rem',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.025em',
            }}
          >
            Full Stack Engineer: Java/Spring Boot, React, and RAG systems
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '38rem',
            }}
          >
            I build secure Spring Boot backends and ship React frontends and LLM pipelines on top. CDAC PG-DAC 2025 · React/TypeScript at HT Labs (OTTplay).
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#projects"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#090d16',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
              }}
            >
              View Projects ↓
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                padding: '0.75rem 1.6rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Download Resume ↗
            </a>
            <a
              href="mailto:onkardoke9696@gmail.com"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Envelope /> Contact
            </a>
          </div>

          <div className="social-links" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
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

        {/* Clean Engineering Architecture Snapshot Card (Replacing Isometric Wireframe) */}
        <div
          className="fade-in-up"
          style={{
            animationDelay: '0.08s',
            width: '100%',
            maxWidth: '430px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '1.5rem',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
          }}
        >
          {/* Card Header: Terminal Dots */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border)',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
              }}
            >
              systems-manifest.json
            </span>
          </div>

          {/* Architecture Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.75rem 0.9rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  // BACKEND SERVICE
                </span>
                <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                  ● 33 tests passed
                </span>
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Spring Boot 3 · Java 17
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                22 REST Endpoints · Redis Session Auth · BCrypt · MySQL
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.75rem 0.9rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#a78bfa' }}>
                  // RAG PIPELINE
                </span>
                <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                  ● MMR Top-8
                </span>
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                FastAPI · LangChain · Pinecone
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                3072-dim Embeddings · Recursive Splitter (1000/200)
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.75rem 0.9rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#34d399' }}>
                  // PRODUCTION CMS
                </span>
                <span style={{ fontSize: '0.7rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  HT Labs Pune
                </span>
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                React · Redux Toolkit · TypeScript
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                OTTplay Editorial CMS · Reusable Component Architecture
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
            >
              <span>Docker Compose: 4 services</span>
              <span style={{ color: 'var(--accent)' }}>CDAC Certified (2025)</span>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="fade-in-up" style={{ animationDelay: '0.14s', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: 0 }}>
            Engineering Activity
          </h2>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            github.com/OmDoke
          </span>
        </div>
        <div className="graph-container">
          <GitHubCalendar
            username="OmDoke"
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#27272a', '#064e3b', '#047857', '#059669', '#10b981'],
            }}
            colorScheme="dark"
            labels={{ totalCount: '{{count}} contributions in the last year' }}
          />
        </div>
      </div>
    </section>
  );
}
