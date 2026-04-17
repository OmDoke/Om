import { useState, useRef, useEffect } from 'react';
import { Box, Fab, Paper, Typography, IconButton, TextField, CircularProgress, Tooltip } from '@mui/material';
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
  const [open, setOpen] = useState(false);
  const [warming, setWarming] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm Om's AI Assistant. Ask me anything about Om's skills, experience, or what roles they are looking for!" }
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

  // Wake up the Render server the moment the chat panel is opened
  useEffect(() => {
    if (!open) return;
    setWarming(true);
    fetch(`${API_BASE}/`)
      .then(() => setWarming(false))
      .catch(() => setWarming(false)); // silently fail, user will retry
  }, [open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    // Provide a hidden instruction wrapper sent only to the AI
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
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: 'Connection Error: Unable to reach the AI engine.' }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "The AI server is waking up from sleep! ⏳ Please wait 30 seconds and try again — this only happens on the first message." }]);
    }
    
    setLoading(false);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 9999 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', bottom: 80, right: 0 }}
          >
            <Paper 
              elevation={24} 
              sx={{ 
                width: 350, 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Header */}
              <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h6" fontWeight="bold">Om's AI Agent</Typography>
                  {warming && <CircularProgress size={14} sx={{ color: 'primary.contrastText' }} />}
                </Box>
                <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'inherit' }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
              {warming && (
                <Box sx={{ px: 2, py: 0.75, bgcolor: 'warning.light', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="caption" color="warning.dark">⏳ Waking up AI server, please wait a moment...</Typography>
                </Box>
              )}

              {/* Chat Body */}
              <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5, bgcolor: 'background.paper' }}>
                {messages.map((m, idx) => (
                  <Box 
                    key={idx} 
                    sx={{ 
                      alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '85%',
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: m.role === 'user' ? 'primary.main' : 'action.selected',
                      color: m.role === 'user' ? 'primary.contrastText' : 'text.primary',
                      borderBottomRightRadius: m.role === 'user' ? 4 : 16,
                      borderBottomLeftRadius: m.role === 'ai' ? 4 : 16,
                    }}
                  >
                    <Typography variant="body2">{m.content}</Typography>
                  </Box>
                ))}
                {loading && (
                  <Box sx={{ alignSelf: 'flex-start', p: 1.5, borderRadius: 2, bgcolor: 'action.selected', borderBottomLeftRadius: 4 }}>
                    <CircularProgress size={16} />
                  </Box>
                )}
                <div ref={messagesEndRef} />
              </Box>

              {/* Input Area */}
              <Box sx={{ p: 1.5, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1, bgcolor: 'background.paper' }}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder={warming ? 'Waiting for server to wake up...' : 'Ask a question...'}
                  value={input}
                  disabled={warming}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <IconButton color="primary" onClick={handleSend} disabled={!input.trim() || loading || warming}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <Tooltip title="Chat with Om's AI">
        <Fab 
          color="primary" 
          aria-label="chat" 
          onClick={() => setOpen(!open)}
          sx={{ boxShadow: 12, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}
        >
          {open ? <CloseIcon /> : <ChatBubbleIcon />}
        </Fab>
      </Tooltip>
    </Box>
  );
}
