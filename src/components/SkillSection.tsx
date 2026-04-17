import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const SkillSection = ({ title, skills, color = '#ffffff', theme = 'dark' }: { title: string, skills: string[], color?: string, theme?: 'dark' | 'light' }) => (
  <Box sx={{ mb: 6 }}>
    <Typography sx={{ fontFamily: "var(--font-display)", color: color, mb: 3, textAlign: 'center', fontSize: '21px', fontWeight: 600, letterSpacing: '0.231px' }}>
       {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
      {skills.map((skill, i) => (
        <motion.div 
          key={skill} 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.02 }}
        >
          <Box sx={{ 
            fontFamily: "var(--font-text)", 
            px: 2, 
            py: 0.5, 
            background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', 
            color: theme === 'dark' ? '#ffffff' : '#1d1d1f',
            borderRadius: '8px', 
            fontSize: '14px',
            letterSpacing: '-0.224px',
          }}>
            {skill}
          </Box>
        </motion.div>
      ))}
    </Box>
  </Box>
);
