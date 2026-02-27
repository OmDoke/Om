import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const educations = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'Centre for Development of Advanced Computing (C-DAC), Pune',
    period: '2024 – 2025'
  },
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'G.H. Raisoni Society’s College of Engineering and Management, Pune',
    period: '2020 – 2024'
  }
];

const Education: React.FC = () => {
  const theme = useTheme();

  return (
    <Box id="education" sx={{ py: 10, maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
      <Typography 
        variant="h4" 
        component={motion.h2} 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{ 
          fontWeight: 700, 
          fontFamily: '"Caveat", cursive',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          mb: 5, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ color: theme.palette.primary.main, marginRight: '10px', fontSize: '2rem', fontFamily: '"Caveat", cursive' }}>04.</span>
        Education & Contact
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 8, textAlign: 'left' }}>
        {educations.map((edu, index) => (
          <Card 
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            sx={{ 
              bgcolor: 'background.paper', 
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  {edu.institution}
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontFamily: 'monospace', mt: { xs: 2, sm: 0 } }}>
                {edu.period}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: 'text.primary', fontFamily: '"Caveat", cursive', fontSize: { xs: '3rem', md: '4rem' } }}>
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary', mb: 5 }}>
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
             <EmailIcon color="primary" /> <Typography>onkardoke9696@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
             <PhoneIcon color="primary" /> <Typography>+91-7745042879</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
             <LocationOnIcon color="primary" /> <Typography>Pune, India</Typography>
          </Box>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Education;
