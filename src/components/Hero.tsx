import { motion } from 'framer-motion';
import AIAvatar from './AIAvatar';
import { PERSONAL } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '7rem 2rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: 1100,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* ── LEFT — Text ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Availability badge */}
          <div className="hero-badge-wrap" style={{ display: 'flex', marginBottom: '1.5rem' }}>
            <motion.div
              className="hero-badge"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(99,102,241,0.2)',
                  '0 0 0 8px rgba(99,102,241,0)',
                  '0 0 0 0 rgba(99,102,241,0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: '0.8rem',
                color: '#6366f1',
              }}
            >
              <motion.span
                className="blink-dot"
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: '#10b981',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              Available for opportunities
            </motion.div>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">{PERSONAL.name}</span>
            <br />
            {PERSONAL.title}
          </h1>

          {/* Tagline */}
          <p
            style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              marginBottom: '2rem',
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            {PERSONAL.tagline}
          </p>

          {/* CTA buttons */}
          <div
            className="hero-ctas"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button
              id="hero-view-projects"
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              ✦ View Projects
            </button>
            <button
              id="hero-lets-talk"
              className="btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Let's Talk →
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT — AI Avatar ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <AIAvatar />
        </motion.div>
      </div>
    </section>
  );
}
