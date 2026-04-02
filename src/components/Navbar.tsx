import { Box, Typography, Container } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(0,0,0,0.5)', zIndex: 1001 }}>
        <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #00F5FF, #7B2FFF)', scaleX, transformOrigin: '0% 50%' }} />
      </Box>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', p: 2, background: 'rgba(5,10,20,0.7)', backdropFilter: 'blur(15px)', zIndex: 1000, borderBottom: '1px solid rgba(0,245,255,0.1)' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', fontWeight: 900, fontSize: '1.5rem', textShadow: '0 0 10px #00F5FF' }}>O.D</Typography>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
             {['About', 'Experience', 'Projects'].map((item) => (
               <motion.a 
                 key={item}
                 href={`#${item.toLowerCase()}`} 
                 whileHover={{ color: '#00F5FF', textShadow: '0 0 10px #00F5FF' }}
                 style={{ color: '#E8F4FD', textDecoration: 'none', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem', fontWeight: 500 }}
               >
                 {item}
               </motion.a>
             ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};
