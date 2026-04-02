import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import { PERSONAL_INFO } from '../constants/data';
import heroBg from '../assets/hero_cyber_bg.png';

const NeonButton = ({ children, variant, href, icon, pulse }: { children: React.ReactNode, variant: 'solid' | 'outline', href?: string, icon?: React.ReactNode, pulse?: boolean }) => (
  <Button
    component={motion.a}
    whileHover={{ scale: 1.05, boxShadow: variant === 'solid' ? '0 0 30px #00F5FF' : 'inset 0 0 15px #7B2FFF, 0 0 30px #7B2FFF' }}
    whileTap={{ scale: 0.95 }}
    animate={pulse ? { boxShadow: ['0 0 10px #00F5FF', '0 0 25px #00F5FF', '0 0 10px #00F5FF'] } : {}}
    transition={pulse ? { repeat: Infinity, duration: 2 } : {}}
    href={href}
    download={href === PERSONAL_INFO.resumeUrl}
    target={href?.startsWith('mailto') ? '_self' : (href?.startsWith('http') ? '_blank' : '_self')}
    startIcon={icon}
    sx={{
      background: variant === 'solid' ? 'linear-gradient(90deg, #00F5FF, #7B2FFF)' : 'transparent',
      color: variant === 'solid' ? '#050A14' : '#00F5FF',
      border: variant === 'outline' ? '2px solid #7B2FFF' : 'none',
      fontFamily: "'Orbitron', sans-serif", fontWeight: 800, px: 4, py: 1.5,
      textTransform: 'uppercase', letterSpacing: '1px',
      clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)',
      whiteSpace: 'nowrap'
    }}
  >
    {children}
  </Button>
);

export const Hero = () => {
  return (
    <Box sx={{ 
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
      backgroundColor: '#050A14', // Fallback color
      backgroundImage: `linear-gradient(to right, rgba(5,10,20,0.95), rgba(5,10,20,0.4)), url(${heroBg})`,
      backgroundSize: 'cover', backgroundPosition: 'center'
    }}>


      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
            <LocationOnIcon sx={{ color: '#00F5FF', filter: 'drop-shadow(0 0 5px #00F5FF)' }} />
            <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#00F5FF', fontWeight: 600 }}>{PERSONAL_INFO.location}</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: { xs: '3.5rem', md: '5.5rem', lg: '7rem' }, textShadow: '0 0 20px #00F5FF88, 0 0 40px #00F5FF44', mb: 2, lineHeight: 1 }}>
            {PERSONAL_INFO.name}
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: "'Sora', sans-serif", color: '#7B2FFF', mb: 4, fontWeight: 700, fontSize: { xs: '1.2rem', md: '2.5rem' }, letterSpacing: '-0.5px' }}>
            {PERSONAL_INFO.role}
          </Typography>
          <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#B0C4DE', mb: 6, maxWidth: '650px', fontSize: '1.1rem', lineHeight: 1.7 }}>
            &gt; "Engineering high-performance MERN solutions. 40% code duplication reduction at OTTplay CMS. Scale. Impact. Code."
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <NeonButton variant="solid" href={`mailto:${PERSONAL_INFO.email}`} icon={<EmailIcon />} pulse>Hire Me Now</NeonButton>
            <NeonButton variant="outline" href={PERSONAL_INFO.resumeUrl} icon={<FileDownloadIcon />}>Resume.pdf</NeonButton>
            <NeonButton variant="outline" href="#projects">View Projects</NeonButton>
          </Box>
        </motion.div>
      </Container>
      {/* Scroll indicator overlay */}
      <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }}>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: '2px', height: '60px', background: 'linear-gradient(180deg, #00F5FF, transparent)' }} />
      </Box>
    </Box>
  );
};
