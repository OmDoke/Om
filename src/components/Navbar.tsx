import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <Box 
      component="nav"
      sx={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        height: '48px',
        background: 'rgba(0, 0, 0, 0.8)', 
        backdropFilter: 'saturate(180%) blur(20px)', 
        zIndex: 1000, 
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

        <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 } }}>
          {['About', 'Experience', 'Projects'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              whileHover={{ color: '#ffffff', opacity: 1 }}
              style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                textDecoration: 'none', 
                fontFamily: "var(--font-text)", 
                fontSize: '12px', 
                fontWeight: 400,
                transition: 'color 0.2s ease',
                letterSpacing: '-0.12px'
              }}
            >
              {item}
            </motion.a>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
