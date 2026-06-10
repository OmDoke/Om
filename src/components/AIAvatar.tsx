import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpeech } from '../hooks/useSpeech';
import { PERSONAL } from '../data/portfolioData';

// ── Spoken scripts ─────────────────────────────────────────────────────────────
const GREETING =
  "Hi there! I'm Onkar Doke's AI assistant. He's a CDAC-certified Full-Stack Developer from Pune, India. Explore his portfolio — or ask me anything about his MERN stack skills, Java experience, or projects!";

const INTRO =
  "Hi! I'm the AI assistant for Onkar Doke, also known as Om. Onkar is a CDAC-certified Full-Stack Developer based in Pune, Maharashtra. He specialises in the MERN stack — MongoDB, Express, React, and Node.js — and also has solid experience with Java and Spring Boot for backend development. He's currently a React Developer Intern at HT Labs, building the OTTplay CMS used by editorial teams daily. He's open to Full-Stack MERN, Java Full-Stack, and Java Backend roles. Reach out to him!";

const SKILLS_SCRIPT =
  "Onkar is a strong MERN stack developer — React.js at 88 percent, Node.js and Express.js at 85 percent, MongoDB at 83 percent, and JavaScript at 88 percent. He uses Redux Toolkit for state management and is very comfortable with JWT authentication, Docker, and CI/CD pipelines. On the Java side, he's proficient in Java and Spring Boot for backend and full-stack roles. CDAC certified in 2025!";

const PROJECTS_SCRIPT =
  "Onkar's key projects include SmartBank — a full MERN banking platform with JWT security, MongoDB aggregation pipelines, Docker containerisation, and GitHub Actions CI/CD deployed to Render. He also built a Waste Management App with real-time Socket.io tracking and geospatial MongoDB queries. At HT Labs, he's building the OTTplay CMS — a production React platform used by editorial teams. He also has Java Spring Boot backend projects in his portfolio!"

// ── Bar animation durations ────────────────────────────────────────────────────
const BAR_DURATIONS = [0.5, 0.7, 0.4, 0.8, 0.6];

interface AIAvatarProps {
  onSpeak?: (text: string) => void;
}

export default function AIAvatar({ onSpeak }: AIAvatarProps) {
  const [isSpeaking, setIsSpeaking]     = useState(false);
  const [photoError, setPhotoError]     = useState(false);
  const [greeted, setGreeted]           = useState(false);
  // showTap: true = show the "tap to hear" pulse prompt
  const [showTap, setShowTap]           = useState(true);
  const [bubbleText, setBubbleText]     = useState(
    "👋 Hi! Click the avatar to hear Om's greeting!"
  );
  const { speak, stop } = useSpeech();
  const greetedRef = useRef(false); // guard against double-fire in StrictMode

  // ── Strategy: wait for a user gesture, then speak ────────────────────────────
  // Browsers block speechSynthesis.speak() without prior user interaction.
  // We listen for the FIRST click/keydown on the page and speak the greeting.
  useEffect(() => {
    const handler = () => {
      if (greetedRef.current) return;
      greetedRef.current = true;
      setGreeted(true);
      setShowTap(false);
      triggerGreeting();
      // Remove listeners after first fire
      window.removeEventListener('click', handler);
      window.removeEventListener('keydown', handler);
    };

    window.addEventListener('click', handler, { passive: true });
    window.addEventListener('keydown', handler, { passive: true });

    return () => {
      window.removeEventListener('click', handler);
      window.removeEventListener('keydown', handler);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function triggerGreeting() {
    setBubbleText(GREETING);
    onSpeak?.(GREETING);
    speak(
      GREETING,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  }

  function handleSpeak(text: string) {
    setShowTap(false);
    setBubbleText(text);
    onSpeak?.(text);
    speak(
      text,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  }

  function handleStop() {
    stop();
    setIsSpeaking(false);
    setBubbleText('Stopped. Click a button to hear about Om!');
  }

  // Click directly on the avatar also counts as the gesture + triggers greeting
  function handleAvatarClick() {
    if (!greetedRef.current) {
      greetedRef.current = true;
      setGreeted(true);
      setShowTap(false);
      triggerGreeting();
    } else {
      handleSpeak(INTRO);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
      }}
    >
      {/* ── AVATAR CIRCLE ──────────────────────────────────────────────────── */}
      <div
        className="avatar-wrapper-size"
        style={{ position: 'relative', width: 280, height: 280 }}
      >
        {/* "Tap to hear" pulsing prompt — shown before first interaction */}
        <AnimatePresence>
          {showTap && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0.6, 1, 0.6], y: [0, -4, 0] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: -36,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '5px 12px',
                borderRadius: 20,
                whiteSpace: 'nowrap',
                zIndex: 10,
                pointerEvents: 'none',
                letterSpacing: '0.05em',
              }}
            >
              🔊 Click anywhere to hear Om's intro
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating wrapper */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={handleAvatarClick}
          title="Click to hear Om's greeting"
        >
          {/* Spinning conic ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #6366f1)',
              WebkitMask: 'radial-gradient(circle, transparent 124px, black 126px)',
              mask:        'radial-gradient(circle, transparent 124px, black 126px)',
              zIndex: 1,
            }}
          />

          {/* "Tap to hear" outer glow ring (only before greeting) */}
          <AnimatePresence>
            {showTap && (
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  border: '2px solid rgba(99,102,241,0.5)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>

          {/* Photo / initials circle */}
          <div
            className="avatar-face-size"
            style={{
              position: 'absolute',
              inset: 4,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #1e293b',
              zIndex: 2,
              background: 'linear-gradient(135deg, #0d1220, #131929)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!photoError ? (
              <img
                src={PERSONAL.photo}
                alt={PERSONAL.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                OD
              </div>
            )}
          </div>

          {/* Speaking pulse ring */}
          <AnimatePresence>
            {isSpeaking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [1, 1.04, 1] }}
                exit={{ opacity: 0 }}
                transition={{
                  scale: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  border: '3px solid #06b6d4',
                  boxShadow:
                    '0 0 20px rgba(6,182,212,0.6), inset 0 0 20px rgba(6,182,212,0.1)',
                  zIndex: 3,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── AUDIO VISUALISER BARS ───────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 4,
          height: 32,
          opacity: isSpeaking ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        {BAR_DURATIONS.map((dur, i) => (
          <motion.div
            key={i}
            animate={isSpeaking ? { height: ['6px', '28px', '6px'] } : { height: '6px' }}
            transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            style={{ width: 5, background: '#06b6d4', borderRadius: 3, minHeight: 6 }}
          />
        ))}
      </div>

      {/* ── SPEECH BUBBLE ───────────────────────────────────────────────────── */}
      <motion.div
        key={bubbleText}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: '#111827',
          border: '1px solid #1e293b',
          borderRadius: '16px 16px 16px 4px',
          padding: '1rem 1.25rem',
          maxWidth: 320,
          fontSize: '0.875rem',
          color: '#94a3b8',
          lineHeight: 1.6,
          minHeight: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {bubbleText}
      </motion.div>

      {/* ── QUICK-ACTION BUTTONS ─────────────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: '🎙 Introduce Om', script: INTRO },
          { label: '💡 Skills',       script: SKILLS_SCRIPT },
          { label: '🚀 Projects',     script: PROJECTS_SCRIPT },
        ].map((btn) => (
          <button
            key={btn.label}
            className="ai-btn"
            onClick={() => handleSpeak(btn.script)}
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#6366f1',
              borderRadius: 8,
              padding: '6px 14px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            {btn.label}
          </button>
        ))}
        <button
          onClick={handleStop}
          style={{
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.25)',
            color: '#ef4444',
            borderRadius: 8,
            padding: '6px 14px',
            fontSize: '0.78rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'Space Grotesk, sans-serif',
          }}
        >
          ⏹ Stop
        </button>
      </div>

      {/* ── "greeted" status (dev info, invisible in prod) ──────────────────── */}
      {greeted && (
        <span style={{ fontSize: 0, position: 'absolute', pointerEvents: 'none' }}>
          greeted
        </span>
      )}
    </div>
  );
}
