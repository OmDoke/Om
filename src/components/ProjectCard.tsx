import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Box sx={{
        background: '#ffffff',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 16px',
      }}>
        {/* Badge */}
        {project.badge && (
          <Box sx={{ mb: 1.5 }}>
            <Chip
              label={project.badge}
              size="small"
              sx={{
                bgcolor: 'rgba(0, 113, 227, 0.08)',
                color: '#0071e3',
                fontFamily: 'var(--font-text)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.3px',
                height: '20px',
                border: '1px solid rgba(0, 113, 227, 0.18)'
              }}
            />
          </Box>
        )}

        <Typography sx={{ fontFamily: 'var(--font-display)', color: 'var(--text-dark)', mb: 0.25, fontWeight: 600, fontSize: '20px', letterSpacing: '0.1px', lineHeight: 1.2 }}>
          {project.title}
        </Typography>
        <Typography sx={{ fontFamily: 'var(--font-text)', color: 'var(--text-dark-tertiary)', mb: 1.5, fontWeight: 400, fontSize: '12px', letterSpacing: '-0.1px' }}>
          {project.subtitle}
        </Typography>
        <Typography sx={{ fontFamily: 'var(--font-text)', color: 'var(--text-dark-secondary)', mb: 2, fontSize: '13.5px', lineHeight: 1.55, letterSpacing: '-0.2px' }}>
          {project.desc}
        </Typography>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            {project.highlights.map((h: string, i: number) => (
              <Box key={i} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                <Box sx={{ width: 3.5, height: 3.5, borderRadius: '50%', bgcolor: '#0071e3', mt: '6px', flexShrink: 0 }} />
                <Typography sx={{ fontFamily: 'var(--font-text)', color: 'var(--text-dark-tertiary)', fontSize: '12.5px', lineHeight: 1.5, letterSpacing: '-0.15px' }}>
                  {h}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Impact */}
        <Box sx={{ bgcolor: 'var(--bg-light)', px: 1.5, py: 1, borderRadius: '6px', mb: 2 }}>
          <Typography sx={{ fontSize: '12px', fontFamily: 'var(--font-text)', color: 'var(--text-dark)', fontWeight: 600, letterSpacing: '-0.15px', lineHeight: 1.5 }}>
            Impact: <span style={{ fontWeight: 400, color: 'var(--text-dark-secondary)' }}>{project.impact}</span>
          </Typography>
        </Box>

        {/* Tech Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
          {project.tech.map((t: string) => (
            <Box key={t} sx={{ bgcolor: 'var(--bg-light)', color: 'var(--text-dark-secondary)', px: 1.25, py: 0.25, borderRadius: '4px', fontFamily: 'var(--font-text)', fontSize: '11px', letterSpacing: '-0.1px', border: '1px solid rgba(0,0,0,0.06)' }}>
              {t}
            </Box>
          ))}
        </Box>

        {/* Footer Link */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--apple-link-blue)', textDecoration: 'none', fontFamily: 'var(--font-text)', fontSize: '13px', display: 'inline-flex', alignItems: 'center', fontWeight: 500 }}>
            Source Code <span style={{ marginLeft: 5, fontSize: '11px' }}>&gt;</span>
          </a>
        </Box>
      </Box>
    </motion.div>
  );
};
