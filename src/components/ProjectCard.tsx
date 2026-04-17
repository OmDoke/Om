import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ height: '100%' }}
    >
      <Box sx={{
        background: '#ffffff',
        p: { xs: 4, md: 5 }, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '12px', 
        position: 'relative', 
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 4px 20px', // Very subtle shadow
      }}>
        
        <Typography sx={{ fontFamily: "var(--font-display)", color: 'var(--text-dark)', mb: 1, fontWeight: 600, fontSize: '28px', letterSpacing: '0.196px', lineHeight: 1.14 }}>
          {project.title}
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-text)", color: 'var(--text-dark-secondary)', mb: 2, fontWeight: 600, fontSize: '17px', letterSpacing: '-0.374px' }}>
          {project.subtitle}
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-text)", color: 'var(--text-dark-secondary)', flexGrow: 1, mb: 4, fontSize: '17px', lineHeight: 1.47, letterSpacing: '-0.374px' }}>
          {project.desc}
        </Typography>
        
        <Box sx={{ bgcolor: 'var(--bg-light)', px: 2, py: 1.5, borderRadius: '8px', mb: 3 }}>
          <Typography sx={{ fontSize: '14px', fontFamily: "var(--font-text)", color: 'var(--text-dark)', fontWeight: 600, letterSpacing: '-0.224px' }}>
            Impact: <span style={{ fontWeight: 400 }}>{project.impact}</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {project.tech.map((t: string) => (
            <Box key={t} sx={{ bgcolor: 'var(--bg-light)', color: 'var(--text-dark-secondary)', px: 1.5, py: 0.5, borderRadius: '4px', fontFamily: "var(--font-text)", fontSize: '12px', letterSpacing: '-0.12px' }}>
              {t}
            </Box>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mt: 'auto' }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--apple-link-blue)', textDecoration: 'none', fontFamily: 'var(--font-text)', fontSize: '14px', display: 'inline-flex', alignItems: 'center' }}>
            Source Code <span style={{ marginLeft: 6, fontSize: '12px' }}>&gt;</span>
          </a>
          <span style={{ color: 'var(--text-dark-tertiary)', fontFamily: 'var(--font-text)', fontSize: '14px' }}>
            Demo (Locked)
          </span>
        </Box>
      </Box>
    </motion.div>
  );
};
