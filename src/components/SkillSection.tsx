import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const SkillSection = ({ title, skills, color = '#00F5FF' }: { title: string, skills: string[], color?: string }) => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h6" sx={{ fontFamily: "'Orbitron', sans-serif", color: color, mb: 3, textAlign: 'center', opacity: 0.8, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
       {title}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
      {skills.map((skill, i) => (
        <motion.div 
          key={skill} 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ delay: i * 0.03 }}
          whileHover={{ y: -5, scale: 1.05, boxShadow: `0 10px 20px ${color}22` }}
          style={{ position: 'relative' }}
        >
          <Box sx={{ 
            fontFamily: "'JetBrains Mono', monospace", px: 3, py: 1, 
            background: 'rgba(5, 10, 20, 0.4)', color: '#F0F4F8',
            border: `1px solid ${color}44`, borderRadius: '4px', position: 'relative', overflow: 'hidden',
            '&:hover': { borderColor: color, color: color }
          }}>
            {skill}
          </Box>
        </motion.div>
      ))}
    </Box>
  </Box>
);
