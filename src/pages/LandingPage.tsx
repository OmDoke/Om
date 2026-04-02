import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Components
import CyberBackground3D from '../components/CyberBackground3D';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ExperienceCard } from '../components/ExperienceCard';
import { ProjectCard } from '../components/ProjectCard';
import { SkillSection } from '../components/SkillSection';

// Data
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS } from '../constants/data';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: '#01050A', minHeight: '100vh', color: '#E8F4FD', overflowX: 'hidden' }}>
      
      {/* 3D Visual Layer */}
      <Box sx={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 0, opacity: 0.3, pointerEvents: 'none' }}>
        <CyberBackground3D />
      </Box>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Impact Stats / Highlights */}
      <Container maxWidth="lg" sx={{ py: 10, position: 'relative', zIndex: 2 }}>
        <Box id="about" sx={{ py: 10 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 3, fontWeight: 900 }}>
                    System.Info()
                  </Typography>
                  <Typography sx={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', lineHeight: 1.8, color: '#F0F4F8', fontWeight: 300, mb: 4 }}>
                    {PERSONAL_INFO.summary}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Sora', sans-serif", fontSize: '1.1rem', lineHeight: 1.7, color: '#B0C4DE', maxWidth: '80%' }}>
                    Current focus: Architecting React.js CMS systems and scalable MERN pipelines. Expertise in high-scale CRUD, RBAC security, and Docker-based delivery.
                  </Typography>
               </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    { label: 'YRS Experience', val: '1+' },
                    { label: 'Code Refactoring', val: '~40%' },
                    { label: 'Successful Projects', val: '10+' }
                  ].map((stat) => (
                    <motion.div key={stat.label} whileHover={{ x: 10 }}>
                      <Box sx={{ borderLeft: '3px solid #7B2FFF', pl: 3 }}>
                         <Typography variant="h3" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#7B2FFF', fontWeight: 900, fontSize: '2.5rem' }}>{stat.val}</Typography>
                         <Typography variant="body2" sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#00F5FF', textTransform: 'uppercase', letterSpacing: '2px' }}>{stat.label}</Typography>
                      </Box>
                    </motion.div>
                  ))}
               </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: 15, position: 'relative', bgcolor: 'rgba(5, 10, 20, 0.3)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 12, textAlign: 'center', fontWeight: 900 }}>
            Execution.Log()
          </Typography>
          
          <Box sx={{ position: 'relative' }}>
            {/* Center Timeline Line */}
            <Box sx={{ position: 'absolute', left: { xs: '20px', md: '50%' }, top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, transparent, #00F5FF, transparent)', opacity: 0.2 }} />
            
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 15, position: 'relative' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 12, textAlign: 'center', fontWeight: 900 }}>
            Compile.Deploy()
          </Typography>
          <Grid container spacing={4}>
            {PROJECTS.map((proj) => (
              <Grid size={{ xs: 12, md: 6 }} key={proj.title}>
                <ProjectCard project={proj} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skill Grid */}
      <Box sx={{ py: 15, background: 'linear-gradient(180deg, transparent, rgba(123, 47, 255, 0.05))' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 10, textAlign: 'center', fontWeight: 900 }}>
            Tech.Stack()
          </Typography>
          <SkillSection title="Core & Frontend" skills={SKILLS.frontend} color="#00F5FF" />
          <SkillSection title="Backend & Logic" skills={SKILLS.backend} color="#7B2FFF" />
          <SkillSection title="Data & Systems" skills={SKILLS.database} color="#00F5FF" />
          <SkillSection title="Cloud & Deployment" skills={SKILLS.cloud} color="#7B2FFF" />
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 10, borderTop: '1px solid rgba(0, 245, 255, 0.1)', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mb: 4 }}>
             {[
               { icon: <GitHubIcon />, href: PERSONAL_INFO.github, label: 'GitHub' },
               { icon: <LinkedInIcon />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
               { icon: <TelegramIcon />, href: PERSONAL_INFO.telegram, label: 'Telegram' }
             ].map((social) => (
               <motion.a 
                 key={social.label} 
                 href={social.href} 
                 target="_blank" 
                 whileHover={{ y: -10, scale: 1.2, color: '#00F5FF' }} 
                 style={{ color: '#E8F4FD' }}
               >
                 {social.icon}
               </motion.a>
             ))}
          </Box>
          <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#3A4A5C', fontSize: '0.9rem' }}>
            © 2026 {PERSONAL_INFO.name}. Designed for high-impact production roles.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
