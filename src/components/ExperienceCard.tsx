import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const ImpactBadge = ({ text }: { text: string }) => (
  <Box sx={{ 
    display: 'inline-flex', alignItems: 'center', px: 2, py: 0.5, mb: 2, 
    background: 'rgba(0, 245, 255, 0.1)', border: '1px solid #00F5FF', 
    borderRadius: '100px', boxShadow: '0 0 10px rgba(0,245,255,0.2)' 
  }}>
    <Typography sx={{ color: '#00F5FF', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.8rem' }}>
      ⚡ {text}
    </Typography>
  </Box>
);

export const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
      <Box sx={{ 
        display: 'flex', flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' }, 
        justifyContent: 'space-between', alignItems: 'flex-start', mb: 10, position: 'relative' 
      }}>
        {/* Glowing Node on Timeline */}
        <Box sx={{ 
          position: 'absolute', left: { xs: '20px', md: '50%' }, transform: 'translateX(-50%)', 
          width: 14, height: 14, borderRadius: '50%', background: '#00F5FF', 
          boxShadow: '0 0 20px #00F5FF, 0 0 40px #00F5FF44', zIndex: 10, mt: 1 
        }} />

        <Box sx={{ 
          width: { xs: '100%', md: '44%' }, pl: { xs: 6, md: 0 }, pr: { xs: 0, md: isEven ? 6 : 0 }, 
          textAlign: { xs: 'left', md: isEven ? 'right' : 'left' } 
        }}>
          <ImpactBadge text={exp.impact} />
          <Typography variant="h5" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#7B2FFF', mb: 1, fontWeight: 800 }}>{exp.role}</Typography>
          <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#B0C4DE', mb: 3, fontWeight: 500 }}>{exp.company} | {exp.period}</Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {exp.description.map((item: string, i: number) => (
              <Typography key={i} sx={{ color: '#F0F4F8', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.85 }}>
                {item}
              </Typography>
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3, justifyContent: { xs: 'flex-start', md: isEven ? 'flex-end' : 'flex-start' } }}>
            {exp.tech.map((t: string) => (
              <Chip 
                key={t} label={t} 
                sx={{ 
                  bgcolor: 'rgba(5, 10, 20, 0.4)', color: '#00F5FF', 
                  border: '1px solid rgba(0, 245, 255, 0.3)', 
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' 
                }} 
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: { xs: '0%', md: '44%' } }} />
      </Box>
    </motion.div>
  );
};
