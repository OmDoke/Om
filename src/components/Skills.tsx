import React from 'react';
import { Box, Typography, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const skillsMapping = {
  'Languages': ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python', 'SQL', 'HTML5', 'CSS3'],
  'Java & Backend': ['Spring Boot', 'RESTful APIs', 'Microservices', 'Node.js'],
  'Frontend': ['React.js', 'Redux', 'React Hooks', 'React Router', 'Bootstrap', 'Tailwind CSS'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'JDBC', 'Query Optimization'],
  'Tools': ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'JIRA', 'Agile/Scrum', 'JWT', 'OAuth']
};

const Skills: React.FC = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Box id="skills" sx={{ py: 10, maxWidth: '800px', mx: 'auto' }}>
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
        <span style={{ color: theme.palette.primary.main, marginRight: '10px', fontSize: '2rem', fontFamily: '"Caveat", cursive' }}>03.</span>
        Technical Skills
      </Typography>

      <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {Object.entries(skillsMapping).map(([category, items]) => (
          <Box key={category} component={motion.div} variants={itemVariants} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}>
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {items.map(skill => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  sx={{ 
                    bgcolor: 'rgba(37, 99, 235, 0.1)', 
                    color: 'primary.main',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    fontWeight: 500,
                    px: 1,
                    '&:hover': {
                       bgcolor: 'rgba(37, 99, 235, 0.15)' 
                    }
                  }} 
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
