import { useState, useRef, useEffect } from 'react';
import { Box, Fab, Paper, Typography, IconButton, TextField, CircularProgress, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE = 'https://neurosearch-backend-6uiz.onrender.com';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function NeuroChatWidget() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [warming, setWarming] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm Om's AI Assistant. Ask me anything about Om's skills, experience, or what roles they're looking for!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open, isMobile]);

  // Wake up the Render server the moment the chat panel is opened
  useEffect(() => {
    if (!open) return;
    setWarming(true);
    fetch(`${API_BASE}/`)
      .then(() => setWarming(false))
      .catch(() => setWarming(false));
  }, [open]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const personaLayer = `${userMsg} 
    (HIDDEN INSTRUCTION: You are Om's AI portfolio agent. Answer this extremely shortly, concisely, and conversationally in 2-3 sentences. Do not use giant bullet lists.)`;

    try {
      const res = await fetch(`${API_BASE}/api/chat/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: personaLayer, session_id: 'om-portfolio-chat' })
      });

      const data = await res.json();
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'ai', content: data.answer }]);
      } else if (res.status === 500 && data.detail?.includes('429')) {
        setMessages(prev => [...prev, { role: 'ai', content: "I'm getting a lot of questions right now! 😅 Please wait 30 seconds and try again." }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: 'Connection Error: ' + (data.detail || 'Unable to reach the AI engine.') }]);
      }
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'ai', content: `Network error: ${err?.message || String(err)}` }]);
    }

    setLoading(false);
  };

  // ── Responsive panel dimensions ──────────────────────────────────────────
  const panelStyles = isMobile
    ? {
        position: 'fixed' as const,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '82dvh',          // most of the viewport, above FAB
        borderRadius: '20px 20px 0 0',
        zIndex: 10000,
      }
    : {
        position: 'absolute' as const,
        bottom: 80,
        right: 0,
        width: 360,
        height: 520,
        borderRadius: '16px',
        zIndex: 'auto',
      };

  const wrapperStyles = isMobile
    ? { position: 'fixed' as const, bottom: 24, right: 20, zIndex: 9999 }
    : { position: 'fixed' as const, bottom: 32, right: 32, zIndex: 9999 };

  return (
    <Box sx={wrapperStyles}>
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile backdrop */}
            {isMobile && (
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'fixed', inset: 0,
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 9998,
                }}
                onClick={() => setOpen(false)}
              />
            )}

            <motion.div
              key="panel"
              initial={isMobile
                ? { opacity: 0, y: '100%' }
                : { opacity: 0, y: 50, scale: 0.92 }}
              animate={isMobile
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile
                ? { opacity: 0, y: '100%' }
                : { opacity: 0, y: 20, scale: 0.92 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{ ...panelStyles, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              <Paper
                elevation={isMobile ? 0 : 24}
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'inherit',
                  overflow: 'hidden',
                  border: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  bgcolor: 'background.paper',
                }}
              >
                {/* ── Header ── */}
                <Box sx={{
                  px: 2.5, py: 1.75,
                  bgcolor: '#0071e3',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexShrink: 0,
                  // Mobile: drag handle hint
                  ...(isMobile && {
                    borderRadius: '20px 20px 0 0',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 36,
                      height: 4,
                      borderRadius: '2px',
                      bgcolor: 'rgba(255,255,255,0.4)',
                    }
                  })
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: isMobile ? 1.5 : 0 }}>
                    <Box sx={{
                      width: 32, height: 32, borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '16px'
                    }}>🤖</Box>
                    <Box>
                      <Typography sx={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', lineHeight: 1.2 }}>
                        Om's AI Agent
                      </Typography>
                      {warming
                        ? <Typography sx={{ fontFamily: 'var(--font-text)', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Waking up...</Typography>
                        : <Typography sx={{ fontFamily: 'var(--font-text)', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Ask me anything ✦</Typography>
                      }
                    </Box>
                    {warming && <CircularProgress size={12} sx={{ color: 'rgba(255,255,255,0.7)' }} />}
                  </Box>
                  <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.85)', '&:hover': { color: '#fff' } }}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>

                {/* Warming banner */}
                {warming && (
                  <Box sx={{ px: 2, py: 0.75, bgcolor: '#fff8e1', borderBottom: '1px solid #ffe082', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="caption" sx={{ color: '#e65100', fontFamily: 'var(--font-text)' }}>
                      ⏳ AI server waking up, this may take ~15s on first load…
                    </Typography>
                  </Box>
                )}

                {/* ── Messages ── */}
                <Box sx={{
                  flexGrow: 1,
                  px: { xs: 2, sm: 2.5 },
                  py: 2,
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  bgcolor: '#f9f9fb',
                  WebkitOverflowScrolling: 'touch',   // smooth momentum on iOS
                }}>
                  {messages.map((m, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: { xs: '90%', sm: '85%' },
                        px: 2, py: 1.25,
                        borderRadius: '16px',
                        bgcolor: m.role === 'user' ? '#0071e3' : '#ffffff',
                        color: m.role === 'user' ? '#fff' : '#1d1d1f',
                        borderBottomRightRadius: m.role === 'user' ? '4px' : '16px',
                        borderBottomLeftRadius: m.role === 'ai' ? '4px' : '16px',
                        boxShadow: m.role === 'ai' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                      }}
                    >
                      <Typography sx={{ fontFamily: 'var(--font-text)', fontSize: { xs: '14px', sm: '13.5px' }, lineHeight: 1.5 }}>
                        {m.content}
                      </Typography>
                    </Box>
                  ))}
                  {loading && (
                    <Box sx={{ alignSelf: 'flex-start', px: 2, py: 1.25, borderRadius: '16px', borderBottomLeftRadius: '4px', bgcolor: '#ffffff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: 0.5, alignItems: 'center' }}>
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                          style={{ width: 6, height: 6, borderRadius: '50%', background: '#0071e3' }}
                        />
                      ))}
                    </Box>
                  )}
                  <div ref={messagesEndRef} />
                </Box>

                {/* ── Input Area ── */}
                <Box sx={{
                  px: { xs: 2, sm: 2 },
                  py: { xs: 1.5, sm: 1.5 },
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  gap: 1,
                  bgcolor: 'background.paper',
                  flexShrink: 0,
                  // safe area padding for iOS home indicator
                  pb: { xs: 'max(12px, env(safe-area-inset-bottom))', sm: 1.5 },
                }}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    placeholder={warming ? 'Waiting for server...' : 'Ask about Om…'}
                    value={input}
                    disabled={warming}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '24px',
                        fontSize: '14px',
                        fontFamily: 'var(--font-text)',
                        bgcolor: '#f5f5f7',
                        '& fieldset': { borderColor: 'transparent' },
                        '&:hover fieldset': { borderColor: 'rgba(0,0,0,0.15)' },
                        '&.Mui-focused fieldset': { borderColor: '#0071e3', borderWidth: '1.5px' },
                      }
                    }}
                  />
                  <IconButton
                    onClick={handleSend}
                    disabled={!input.trim() || loading || warming}
                    sx={{
                      bgcolor: input.trim() && !loading && !warming ? '#0071e3' : 'transparent',
                      color: input.trim() && !loading && !warming ? '#fff' : 'rgba(0,0,0,0.3)',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      alignSelf: 'center',
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: input.trim() && !loading && !warming ? '#0077ed' : 'transparent',
                      }
                    }}
                  >
                    <SendIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FAB Toggle */}
      <Tooltip title={open ? '' : "Chat with Om's AI"} placement="left">
        <Fab
          aria-label="chat"
          onClick={() => setOpen(!open)}
          sx={{
            bgcolor: '#0071e3',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(0, 113, 227, 0.4)',
            width: { xs: 52, sm: 56 },
            height: { xs: 52, sm: 56 },
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              bgcolor: '#0077ed',
              transform: 'scale(1.08)',
              boxShadow: '0 12px 36px rgba(0, 113, 227, 0.5)',
            }
          }}
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <CloseIcon />
                </motion.div>
              : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <ChatBubbleIcon />
                </motion.div>
            }
          </AnimatePresence>
        </Fab>
      </Tooltip>
    </Box>
  );
}
