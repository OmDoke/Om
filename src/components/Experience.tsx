import React from 'react';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'React.js Developer Intern',
    company: 'HT Labs (OTTplay)',
    location: 'Pune, Maharashtra',
    period: 'Aug 2025 – Present',
    description: [
      'Contributing to OTTplay CMS, an internal React.js-based platform used to manage OTT content, pages, and media assets.',
      'Developing reusable and responsive UI components for content creation, media upload, listing pages, and publishing workflows.',
      'Implementing role-based access control (RBAC) and admin dashboards using React Router and Material-UI to ensure secure navigation and permissions.',
      'Integrating REST APIs for CRUD operations, content publishing, and dynamic data rendering while working in Agile sprints with cross-functional teams.'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Elite Softwares',
    location: 'Pune, Maharashtra',
    period: 'June 2023 – Nov 2023',
    description: [
      'Built responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap for client-based projects.',
      'Developed reusable UI components with a modular structure and ensured cross-browser compatibility through testing and debugging.'
    ]
  }
];

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box id="experience" sx={{ py: 10, maxWidth: '800px', mx: 'auto' }}>
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
          alignItems: 'center',
          '&::after': {
            content: '""',
            display: 'block',
            height: '1px',
            width: '100%',
            ml: 2,
            bgcolor: 'divider'
          }
        }}
      >
        <span style={{ color: theme.palette.primary.main, marginRight: '10px', fontSize: '2rem', fontFamily: '"Caveat", cursive' }}>01.</span>
        Professional Experience
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {experiences.map((exp, index) => (
          <Card 
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            sx={{ 
              bgcolor: 'background.paper', 
              borderRadius: 2,
              '&:hover': {
                transform: 'translateY(-5px)',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
              }
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {exp.role} <Typography component="span" sx={{ color: 'primary.main', fontSize: '1.25rem' }}>@ {exp.company}</Typography>
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mt: 1 }}>
                    {exp.location}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                  {exp.period}
                </Typography>
              </Box>
              
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    style={{ color: theme.palette.text.secondary, marginBottom: '10px', lineHeight: 1.6 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
