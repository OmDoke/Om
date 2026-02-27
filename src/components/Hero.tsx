import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleTelegramConnect = () => {
    window.open('https://t.me/omdoke96?text=hi%20om', '_blank');
  };

  return (
    <Box 
      id="about"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ 
        minHeight: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Typography 
        component={motion.p} 
        variants={itemVariants}
        sx={{ color: 'primary.main', mb: 2, fontFamily: '"Caveat", cursive', fontSize: '2rem' }}
      >
        Hi, my name is
      </Typography>
      
      <Typography 
        variant="h1" 
        component={motion.h1} 
        variants={itemVariants}
        sx={{ 
          fontFamily: '"Caveat", cursive',
          fontSize: { xs: '4rem', sm: '5.5rem', md: '7.5rem' }, 
          fontWeight: 800,
          mb: 1
        }}
      >
        Onkar Doke.
      </Typography>
      
      <Typography 
        variant="h2" 
        component={motion.h2} 
        variants={itemVariants}
        sx={{ 
          fontFamily: '"Caveat", cursive',
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' }, 
          color: 'text.secondary',
          mb: 4
        }}
      >
        I build things for the web.
      </Typography>

      <Typography 
        component={motion.p} 
        variants={itemVariants}
        sx={{ 
          maxWidth: '600px', 
          color: 'text.secondary', 
          fontSize: '1.1rem',
          lineHeight: 1.6,
          mb: 5
        }}
      >
        I'm a Full Stack Java Developer with hands-on experience building web applications using Java, Spring Boot, React.js, and REST APIs. Experienced in creating responsive, reusable UI components and writing optimized backend services.
      </Typography>

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        component={motion.div} 
        variants={itemVariants}
      >
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          startIcon={<TelegramIcon />}
          onClick={handleTelegramConnect}
          sx={{ 
            color: 'background.default',
            fontWeight: 'bold',
            px: 4, 
            py: 1.5 
          }}
        >
          Connect on Telegram
        </Button>
        <Button 
          variant="outlined" 
          size="large"
          startIcon={<LinkedInIcon />}
          href="https://linkedin.com/in/onkar-doke"
          target="_blank"
          sx={{ 
            color: 'text.secondary',
            borderColor: 'divider',
            '&:hover': { borderColor: 'text.primary', backgroundColor: 'rgba(15, 23, 42, 0.02)' },
            px: 4, 
            py: 1.5 
          }}
        >
          LinkedIn Profile
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
