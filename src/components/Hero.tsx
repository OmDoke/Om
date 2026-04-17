import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants/data';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Hero = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#000000', 
      overflow: 'hidden'
    }}>
      <Container maxWidth="md" sx={{ zIndex: 2, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <LocationOnIcon sx={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }} />
            <Typography sx={{ fontFamily: "var(--font-text)", color: '#ffffff', fontSize: '14px', letterSpacing: '-0.224px' }}>
              {PERSONAL_INFO.location}
            </Typography>
          </Box>
          
          <Typography 
            variant="h1" 
            className="sf-hero"
            sx={{ 
              color: '#ffffff', 
              mb: 1,
              mx: 'auto'
            }}
          >
            {PERSONAL_INFO.name}
          </Typography>
          
          <Typography 
            variant="h3" 
            sx={{ 
              fontFamily: "var(--font-display)", 
              color: 'rgba(255,255,255,0.88)', 
              mb: 4, 
              fontWeight: 400, 
              fontSize: '28px', 
              letterSpacing: '0.196px',
              lineHeight: 1.14
            }}
          >
            {PERSONAL_INFO.role}
          </Typography>
          
          <Typography 
            sx={{ 
              fontFamily: "var(--font-text)", 
              color: 'rgba(255,255,255,0.6)', 
              mb: 6, 
              mx: 'auto',
              maxWidth: '650px', 
              fontSize: '21px', 
              lineHeight: 1.47,
              letterSpacing: '-0.374px'
            }}
          >
            CDAC-certified MERN developer who has shipped production code at OTTplay — a CMS used by HT Media's editorial teams every day. I build things that actually work in teams, not just in demos.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component="a"
              href={`mailto:${PERSONAL_INFO.email}`}
              sx={{
                backgroundColor: '#0071e3',
                color: '#ffffff',
                fontFamily: "var(--font-text)",
                fontSize: '17px',
                fontWeight: 400,
                borderRadius: '980px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#0077ed' }
              }}
            >
              Hire Me Now
            </Button>
            <Button
              component="a"
              href={PERSONAL_INFO.resumeUrl}
              download
              sx={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                fontFamily: "var(--font-text)",
                fontSize: '17px',
                fontWeight: 400,
                borderRadius: '980px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Resume.pdf
            </Button>
          </Box>
          
          <Box sx={{ mt: 3 }}>
             <a href="#projects" style={{ color: '#2997ff', textDecoration: 'none', fontFamily: 'var(--font-text)', fontSize: '17px', display: 'inline-flex', alignItems: 'center' }}>
               Learn more about projects <span style={{ marginLeft: 6, fontSize: '14px' }}>&gt;</span>
             </a>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
};
