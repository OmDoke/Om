import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpeech } from '../hooks/useSpeech';
import { PERSONAL } from '../data/portfolioData';
import { CircleMark } from './Sketch';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
      {/* ── AVATAR — ink portrait inside a hand-drawn ring ──────────────────── */}
      <div className="avatar-wrapper-size" style={{ position: 'relative', width: 280, height: 280 }}>
        {/* "Tap to hear" handwritten prompt — shown before first interaction */}
        <AnimatePresence>
          {showTap && (
            <motion.div
              className="hand-note"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0.6, 1, 0.6], y: [0, -4, 0] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: -44,
                left: '50%',
                x: '-50%',
                whiteSpace: 'nowrap',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              click anywhere to hear Om's intro ↓
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating wrapper */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer' }}
          onClick={handleAvatarClick}
          title="Click to hear Om's greeting"
        >
          {/* Photo / initials, printed in greyscale ink */}
          <div className="avatar-portrait avatar-face-size">
            {!photoError ? (
              <img src={PERSONAL.photo} alt={PERSONAL.name} onError={() => setPhotoError(true)} />
            ) : (
              <div className="brand-mark" style={{ width: 'auto', height: 'auto', border: 'none', fontSize: '4.5rem' }}>
                OD
              </div>
            )}
          </div>

          {/* Pen ring — redraws while speaking */}
          <CircleMark key={isSpeaking ? 'speaking' : 'idle'} className="drawn avatar-ring" />
        </motion.div>
      </div>

      {/* ── AUDIO VISUALISER — pen strokes ──────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 5,
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
            style={{ width: 4, background: 'var(--ink)', borderRadius: 3, minHeight: 6 }}
          />
        ))}
      </div>

      {/* ── SPEECH BUBBLE ───────────────────────────────────────────────────── */}
      <motion.div
        key={bubbleText}
        className="sketch-box flat speech-bubble"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {bubbleText}
      </motion.div>

      {/* ── QUICK-ACTION BUTTONS ─────────────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: '🎙 Introduce Om', script: INTRO },
          { label: '💡 Skills',       script: SKILLS_SCRIPT },
          { label: '🚀 Projects',     script: PROJECTS_SCRIPT },
        ].map((btn) => (
          <button key={btn.label} className="btn btn-sm ai-btn" onClick={() => handleSpeak(btn.script)}>
            {btn.label}
          </button>
        ))}
        <button className="btn btn-sm btn-quiet" onClick={handleStop}>
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
