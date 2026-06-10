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
    m.includes('mern') ||
    m.includes('java') ||
    m.includes('react') ||
    m.includes('node') ||
    m.includes('mongo') ||
    m.includes('stack')
  )
    return AI_RESPONSES.skills;
  if (
    m.includes('project') ||
    m.includes('build') ||
    m.includes('smartbank') ||
    m.includes('ottplay') ||
    m.includes('waste') ||
    m.includes('spring') ||
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
    m.includes('phone') ||
    m.includes('whatsapp') ||
    m.includes('number') ||
    m.includes('github')
  )
    return AI_RESPONSES.contact;
  if (
    m.includes('available') ||
    m.includes('open') ||
    m.includes('looking') ||
    m.includes('hire') ||
    m.includes('freelance') ||
    m.includes('collaborat') ||
    m.includes('opportunit')
  )
    return AI_RESPONSES.available;
  return AI_RESPONSES.default;
}


const CONTACT_LINKS = [
  {
    icon: '📱',
    label: 'Phone / WhatsApp',
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
  },
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
    value: 'github.com/onkardoke',
    href: PERSONAL.github,
  },
];

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: "Hey there! 👋 I'm Onkar's AI assistant. Ask me about his MERN skills, projects, or availability!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const { speak } = useSpeech();
  const sectionRef = useRef<HTMLDivElement>(null);
  // Skip scrollIntoView on first render — only scroll when new messages arrive
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
    }, 600);
  };

  return (
    <section
      id="contact"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)',
      }}
    >
      <div className="section-inner">
        <div className="section-label">// connect</div>
        <h2 className="section-title">Let's Build Something</h2>

        <div
          ref={sectionRef}
          className="reveal contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT — Contact links ─────────────────────────────────────── */}
          <div>
            <p
              style={{
                color: '#94a3b8',
                marginBottom: '1.5rem',
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. Let's talk!
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="card contact-link"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderRadius: 16,
                    transition: 'all 0.25s',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(99,102,241,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#475569',
                        marginBottom: 3,
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.06em',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#f1f5f9',
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — AI Chat widget ────────────────────────────────────── */}
          <div
            style={{
              background: '#111827',
              border: '1px solid #1e293b',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {/* Chat header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid #1e293b',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#fff',
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
                    color: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  AI Om {isSpeaking && '🔊'}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    marginTop: 2,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 6,
                      height: 6,
                      background: '#10b981',
                      borderRadius: '50%',
                    }}
                  />
                  Online now
                </div>
              </div>
            </div>

            {/* Messages area */}
            <div
              className="chat-messages"
              style={{
                padding: '1rem',
                height: 230,
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
                    maxWidth: '80%',
                    padding: '0.6rem 1rem',
                    borderRadius:
                      m.role === 'ai'
                        ? '4px 12px 12px 12px'
                        : '12px 12px 4px 12px',
                    fontSize: '0.85rem',
                    lineHeight: 1.55,
                    alignSelf:
                      m.role === 'ai' ? 'flex-start' : 'flex-end',
                    background:
                      m.role === 'ai'
                        ? '#131929'
                        : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: '#f1f5f9',
                    wordBreak: 'break-word' as const,
                  }}
                >
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    background: '#131929',
                    borderRadius: '4px 12px 12px 12px',
                    padding: '0.6rem 1rem',
                    fontSize: '0.85rem',
                    color: '#475569',
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
                borderTop: '1px solid #1e293b',
                display: 'flex',
                gap: 8,
              }}
            >
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  background: '#0d1220',
                  border: '1px solid #1e293b',
                  color: '#f1f5f9',
                  borderRadius: 8,
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.85rem',
                  outline: 'none',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = '#6366f1')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = '#1e293b')
                }
              />
              <button
                id="chat-send"
                className="send-btn"
                onClick={sendChat}
                style={{
                  background: '#6366f1',
                  border: 'none',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 500,
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
