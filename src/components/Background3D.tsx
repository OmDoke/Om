import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background3D: React.FC = () => {
  const { scrollY } = useScroll();

  // Create intense parallax mapping based on scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);
  
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -90]);

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none',
      perspective: '1000px', // enables 3D CSS
      bgcolor: '#0e0e0e'
    }}>
      
      {/* Dense Cyber Grid overlaying the back depth */}
      <Box sx={{
        position: 'absolute',
        top: '-50%', left: '-50%', width: '200%', height: '200%',
        backgroundImage: `
          linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        transform: 'rotateX(60deg) translateY(-20%) scale(1.5)',
        transformOrigin: 'top center',
        zIndex: -1,
        opacity: 0.6
      }} component={motion.div} style={{ y: y1 }} />

      {/* 3D Geometric Nodes floating */}
      <motion.div style={{ y: y2, rotateX: rotate1, rotateY: rotate2, position: 'absolute', top: '20%', left: '15%' }}>
        <Box sx={{
          width: 150, height: 150,
          border: '1px solid rgba(188, 0, 255, 0.4)',
          boxShadow: '0 0 40px rgba(188, 0, 255, 0.2), inset 0 0 20px rgba(188, 0, 255, 0.2)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(45deg) rotateY(45deg)'
        }} />
      </motion.div>

      <motion.div style={{ y: y3, rotate: rotate1, position: 'absolute', top: '60%', right: '10%' }}>
        <Box sx={{
          width: 250, height: 250,
          border: '1px solid rgba(0, 242, 255, 0.3)',
          borderRadius: '50%',
          boxShadow: '0 0 60px rgba(0, 242, 255, 0.15), inset 0 0 30px rgba(0, 242, 255, 0.15)',
          transform: 'scaleY(0.5) rotateX(25deg)'
        }} />
      </motion.div>

      <motion.div style={{ y: y2, rotateZ: rotate2, position: 'absolute', top: '80%', left: '25%' }}>
        <Box sx={{
          width: 100, height: 100,
          border: '2px solid rgba(188, 0, 255, 0.5)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(75deg) rotateY(15deg)'
        }} />
      </motion.div>

      {/* Floating Light Orbs */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '20%', width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(0,242,255,0.06) 0%, rgba(14,14,14,0) 70%)',
        zIndex: 0
      }} component={motion.div} style={{ y: y1 }} />

      <Box sx={{
        position: 'absolute', bottom: '0%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(188,0,255,0.06) 0%, rgba(14,14,14,0) 70%)',
        zIndex: 0
      }} component={motion.div} style={{ y: y2 }} />

    </Box>
  );
};

export default Background3D;
