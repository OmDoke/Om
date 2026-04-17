import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

export const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
      <Box sx={{ 
        backgroundColor: 'var(--card-dark)', 
        borderRadius: '12px', 
        p: 4, 
        mb: 4, 
        width: '100%',
        boxShadow: 'none'
      }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography sx={{ fontFamily: "var(--font-display)", color: '#ffffff', mb: 0.5, fontWeight: 600, fontSize: '24px', letterSpacing: '0.196px' }}>{exp.role}</Typography>
            <Typography sx={{ fontFamily: "var(--font-text)", color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '17px', letterSpacing: '-0.374px' }}>{exp.company}</Typography>
          </Box>
          <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 1, md: 0 } }}>
            <Typography sx={{ fontFamily: "var(--font-text)", color: '#ffffff', fontWeight: 600, fontSize: '14px', letterSpacing: '-0.224px' }}>{exp.period}</Typography>
            <Typography sx={{ fontFamily: "var(--font-text)", color: '#0071e3', fontSize: '12px', mt: 0.5 }}>{exp.impact}</Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
          {exp.description.map((item: string, i: number) => (
            <Typography key={i} sx={{ fontFamily: "var(--font-text)", color: 'rgba(255,255,255,0.88)', fontSize: '14px', lineHeight: 1.43, letterSpacing: '-0.224px' }}>
              {item}
            </Typography>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {exp.tech.map((t: string) => (
            <Chip 
              key={t} label={t} 
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.1)', 
                color: '#ffffff', 
                border: 'none', 
                fontFamily: "var(--font-text)", 
                fontSize: '12px',
                height: '24px'
              }} 
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};
