import { useState, useRef, useEffect } from 'react';
import { PERSONAL, AI_RESPONSES } from '../data/portfolioData';
import { useSpeech } from '../hooks/useSpeech';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './Sketch';

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
  const sectionRef = useReveal<HTMLDivElement>();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    <section id="contact" className="container section">
      <SectionHeader note="connect ↓" title="Get In Touch">
        Open to full-time Software Engineer, Java Backend, and Full Stack roles in Pune (on-site / hybrid) or remote.
      </SectionHeader>

      <div ref={sectionRef} className="reveal responsive-contact-grid">
        {/* ── LEFT — Contact links ─────────────────────────────────────── */}
        <div className="contact-list">
          {ALL_CONTACT_LINKS.filter((c) => Boolean(c.value)).map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') || c.href === '#' ? undefined : '_blank'}
              rel="noreferrer"
              className="sketch-box lift contact-link"
            >
              <div className="contact-icon mono-icon">{c.icon}</div>
              <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── RIGHT — AI Assistant widget ─────────────────────────────────── */}
        <div className="sketch-box chat">
          {/* Chat header */}
          <div className="chat-head">
            <span className="brand-mark">OD</span>
            <div>
              <div className="chat-name">Onkar's Assistant {isSpeaking && '🔊'}</div>
              <div className="chat-status">
                <span className="status-dot" />
                online · verified facts
              </div>
            </div>
          </div>

          {/* Messages area */}
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role === 'ai' ? 'bubble-ai' : 'bubble-user'}`}>
                {m.text}
              </div>
            ))}
            {isTyping && <div className="bubble bubble-ai bubble-typing">···</div>}
            <div ref={endRef} />
          </div>

          {/* Input row */}
          <div className="chat-input-row">
            <input
              id="chat-input"
              className="chat-input"
              aria-label="Ask a question about Onkar's skills or projects"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
              placeholder="ask about Spring Boot, RAG, or experience..."
            />
            <button id="chat-send" className="btn btn-sm btn-ink" aria-label="Send message" onClick={sendChat}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
