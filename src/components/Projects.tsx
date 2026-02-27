import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'SmartBank – Full Stack Banking Application',
    date: 'Jan 2025',
    description: 'Designed and developed a full-stack banking and loan management system. Built secure REST APIs with Spring Data JPA and MySQL, implementing JWT authentication and Spring Security for role-based access control.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'Redux', 'JWT'],
    github: 'https://github.com/OmDoke', 
    external: 'https://github.com/OmDoke'
  },
  {
    title: 'Ecometa: A Waste Management Initiative',
    date: 'Recent',
    description: 'A web-based platform designed to promote sustainable waste management by connecting individuals and businesses with recyclers to function as an online marketplace where users can buy, sell, and recycle e-waste and scrap materials.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'Spring Data JPA'],
    github: 'https://github.com/OmDoke/Ecometa',
    external: 'https://github.com/OmDoke/Ecometa'
  },
  {
    title: 'Smart Video Surveillance System 🎥🛡️',
    date: 'Recent',
    description: 'A real-time video surveillance system enhancing security via intelligent video analysis. Highlights include GStreamer for efficient video streaming and OpenCV for advanced image processing and motion/object detection.',
    techStack: ['C++', 'GStreamer', 'OpenCV', 'Makefile'],
    github: 'https://github.com/OmDoke/SmartSurveillance',
    external: 'https://github.com/OmDoke/SmartSurveillance'
  },
  {
    title: 'DO',
    date: 'Recent',
    description: 'A basic to-do application for desktop built using Java, CSS, and Batchfile.',
    techStack: ['Java', 'CSS', 'Batchfile'],
    github: 'https://github.com/OmDoke/Do',
    external: 'https://github.com/OmDoke/Do'
  },
  {
    title: 'Student Management System',
    date: 'Recent',
    description: 'This is a console-based Student Management System developed in C++ with MySQL integration. It allows users to add, view, update, and delete student records from a database using a simple menu-driven interface. It demonstrates CRUD operations and real-time data manipulation via a MySQL database.',
    techStack: ['C++', 'MySQL'],
    github: 'https://github.com/OmDoke/StudentManagementSystem',
    external: 'https://github.com/OmDoke/StudentManagementSystem'
  }
];

const Projects: React.FC = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box id="projects" sx={{ py: 10, maxWidth: '1000px', mx: 'auto' }}>
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
          },
          '&::before': {
            content: '""',
            display: { xs: 'none', md: 'block' },
            height: '1px',
            width: '30%',
            mr: 2,
            bgcolor: 'divider'
          }
        }}
      >
        <span style={{ color: theme.palette.primary.main, marginRight: '10px', fontSize: '2rem', fontFamily: '"Caveat", cursive' }}>02.</span>
        Things I've Built
      </Typography>

      <Box sx={{ 
        mx: { xs: 0, md: -2 }, 
        pb: 6,
        '.slick-track': { display: 'flex', alignItems: 'stretch' },
        '.slick-slide': { height: 'auto', px: { xs: 0, md: 2 } },
        '.slick-slide > div': { height: '100%' },
        '.slick-dots': { bottom: '0px' },
        '.slick-dots li button:before': { color: 'text.secondary', opacity: 0.3, fontSize: '10px' },
        '.slick-dots li.slick-active button:before': { color: 'primary.main', opacity: 1 }
      }}>
        <Slider {...settings}>
        {projects.map((project, index) => (
          <Box key={index} sx={{ height: '100%', py: 2 }}>
            <Card 
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'background.paper',
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-7px)',
                  transition: 'all 0.3s ease',
                  '& .project-title': { color: 'primary.main' }
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <FolderOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Box>
                    <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} href={project.github} target="_blank">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} href={project.external} target="_blank">
                      <OpenInNewIcon />
                    </IconButton>
                  </Box>
                </Box>
                
                <Typography variant="h5" className="project-title" sx={{ fontWeight: 700, mb: 2, transition: 'color 0.3s' }}>
                  {project.title}
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                  {project.description}
                </Typography>
                
              </CardContent>
              <CardActions sx={{ p: 4, pt: 0 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.techStack.map(tech => (
                    <Typography key={tech} variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Projects;
