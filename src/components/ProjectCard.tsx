import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ height: '100%' }}
    >
      <Box sx={{
        background: 'rgba(5, 10, 20, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 245, 255, 0.2)',
        boxShadow: '0 0 30px rgba(0,245,255,0.05)',
        p: 4, height: '100%', display: 'flex', flexDirection: 'column',
        borderRadius: 2, position: 'relative', overflow: 'hidden',
        '&:hover': {
          borderColor: '#00F5FF',
          boxShadow: '0 0 40px rgba(0,245,255,0.2)',
        }
      }}>
        {/* Glow effect at corners */}
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', background: 'linear-gradient(135deg, transparent, #00F5FF33)', zIndex: 1 }} />
        
        <Typography variant="h5" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 1, fontWeight: 700, textShadow: '0 0 10px #00F5FF' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#7B2FFF', mb: 2, fontWeight: 600 }}>
          {project.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Sora', sans-serif", color: '#E8F4FD', flexGrow: 1, mb: 3, fontSize: '0.95rem', opacity: 0.9 }}>
          {project.desc}
        </Typography>
        
        <Box sx={{ bgcolor: 'rgba(0, 245, 255, 0.05)', px: 2, py: 1, borderRadius: 1, mb: 3, border: '1px dashed #00F5FF33' }}>
          <Typography sx={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: '#00F5FF' }}>
            {project.impact}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {project.tech.map((t: string) => (
            <Chip key={t} label={t} sx={{ bgcolor: 'rgba(5, 10, 20, 0.8)', color: '#7B2FFF', border: '1px solid rgba(123, 47, 255, 0.3)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }} />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            href={project.github} target="_blank" 
            startIcon={<GitHubIcon />}
            sx={{ color: '#00F5FF', fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem', border: '1px solid #00F5FF22', '&:hover': { bgcolor: 'rgba(0,245,255,0.1)', textShadow: '0 0 10px #00F5FF' } }}
          >
            Source Code
          </Button>
          <Button 
            disabled
            sx={{ color: '#7B2FFF33', fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem', border: '1px solid #7B2FFF11' }}
          >
            View Demo (Locked)
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};
