import { useState, useRef, useEffect } from 'react';
import { PERSONAL, AI_RESPONSES } from '../data/portfolioData';
import { useSpeech } from '../hooks/useSpeech';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

function getAIResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (
    m.includes('skill') ||
    m.includes('tech') ||
    m.includes('know') ||
    m.includes('language') ||
    m.includes('java') ||
    m.includes('spring') ||
    m.includes('react') ||
    m.includes('node') ||
    m.includes('stack')
  )
    return AI_RESPONSES.skills;
  if (
    m.includes('project') ||
    m.includes('build') ||
    m.includes('smartbank') ||
    m.includes('neurosearch') ||
    m.includes('ottplay') ||
    m.includes('careeros') ||
    m.includes('work')
  )
    return AI_RESPONSES.projects;
  if (
    m.includes('experience') ||
    m.includes('career') ||
    m.includes('job') ||
    m.includes('intern') ||
    m.includes('cdac') ||
    m.includes('ht lab') ||
    m.includes('elite')
  )
    return AI_RESPONSES.experience;
  if (
    m.includes('contact') ||
    m.includes('email') ||
    m.includes('reach') ||
    m.includes('linkedin') ||
    m.includes('github')
  )
    return AI_RESPONSES.contact;
  if (
    m.includes('available') ||
    m.includes('open') ||
    m.includes('looking') ||
    m.includes('hire') ||
    m.includes('full-time') ||
    m.includes('collaborat') ||
    m.includes('opportunit')
  )
    return AI_RESPONSES.available;
  return AI_RESPONSES.default;
}

const ALL_CONTACT_LINKS = [
  {
    icon: '📧',
    label: 'Email',
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/onkar-doke',
    href: PERSONAL.linkedin,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/OmDoke',
    href: PERSONAL.github,
  },
  {
    icon: '📍',
    label: 'Location',
    value: PERSONAL.location,
    href: '#',
  },
];

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: "Hey there! 👋 I'm Onkar's AI assistant. Ask me about his Java/Spring Boot backend work, React experience at HT Labs Pune, or his RAG systems!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const { speak } = useSpeech();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sendChat = () => {
    const msg = input.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getAIResponse(msg);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'ai', text: reply }]);
      speak(
        reply,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }, 450);
  };

  return (
    <section id="contact" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-inner">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}
        >
          // connect
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Get In Touch
        </h2>
        <p
          className="text-muted"
          style={{
            fontSize: '1rem',
            maxWidth: '680px',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}
        >
          Open to full-time Software Engineer, Java Backend, and Full Stack roles in Pune (on-site / hybrid) or remote.
        </p>

        <div ref={sectionRef} className="reveal responsive-contact-grid">
          {/* ── LEFT — Contact links ─────────────────────────────────────── */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {ALL_CONTACT_LINKS.filter((c) => Boolean(c.value)).map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') || c.href === '#' ? undefined : '_blank'}
                  rel="noreferrer"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderRadius: '12px',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        marginBottom: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — AI Assistant widget ─────────────────────────────────── */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Chat header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  flexShrink: 0,
                }}
              >
                OD
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  Onkar's Assistant {isSpeaking && '🔊'}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    marginTop: 2,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 6,
                      height: 6,
                      background: 'var(--accent)',
                      borderRadius: '50%',
                    }}
                  />
                  Online · Verified Facts
                </div>
              </div>
            </div>

            {/* Messages area */}
            <div
              className="chat-messages"
              style={{
                padding: '1rem',
                height: 240,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    maxWidth: '85%',
                    padding: '0.65rem 1rem',
                    borderRadius:
                      m.role === 'ai'
                        ? '4px 12px 12px 12px'
                        : '12px 12px 4px 12px',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    alignSelf: m.role === 'ai' ? 'flex-start' : 'flex-end',
                    backgroundColor:
                      m.role === 'ai'
                        ? 'var(--bg)'
                        : 'var(--accent)',
                    color:
                      m.role === 'ai'
                        ? 'var(--text-primary)'
                        : '#090d16',
                    fontWeight: m.role === 'user' ? 600 : 400,
                    border:
                      m.role === 'ai'
                        ? '1px solid var(--border)'
                        : 'none',
                    wordBreak: 'break-word',
                  }}
                >
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px 12px 12px 12px',
                    padding: '0.6rem 1rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ letterSpacing: 3 }}>···</span>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input row */}
            <div
              style={{
                padding: '0.75rem 1rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                gap: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <input
                id="chat-input"
                aria-label="Ask a question about Onkar's skills or projects"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                placeholder="Ask about Spring Boot, RAG, or experience..."
                style={{
                  flex: 1,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  borderRadius: 8,
                  padding: '0.55rem 0.85rem',
                  fontSize: '16px',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              <button
                id="chat-send"
                className="send-btn"
                aria-label="Send message"
                onClick={sendChat}
                style={{
                  backgroundColor: 'var(--accent)',
                  border: 'none',
                  color: '#090d16',
                  borderRadius: 8,
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'background 0.2s',
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
