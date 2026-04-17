import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Components
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ExperienceCard } from '../components/ExperienceCard';
import { ProjectCard } from '../components/ProjectCard';
import { SkillSection } from '../components/SkillSection';

// Data
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS } from '../constants/data';

export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Black) */}
      <Box id="about" sx={{ backgroundColor: 'var(--bg-dark)' }}>
        <Hero />
      </Box>

      {/* Impact Stats / Highlights (Light Gray) */}
      <Box sx={{ backgroundColor: 'var(--bg-light)', py: 15 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Typography variant="h2" className="sf-section" sx={{ color: 'var(--text-dark)', mb: 3 }}>
                    About.
                  </Typography>
                  <Typography sx={{ fontFamily: "var(--font-text)", fontSize: '21px', lineHeight: 1.47, color: 'var(--text-dark-secondary)', fontWeight: 400, mb: 4, letterSpacing: '-0.374px' }}>
                    {PERSONAL_INFO.summary}
                  </Typography>
                  <Typography sx={{ fontFamily: "var(--font-text)", fontSize: '17px', lineHeight: 1.47, color: 'var(--text-dark-tertiary)', maxWidth: '80%', letterSpacing: '-0.374px' }}>
                    Current focus: Architecting React.js CMS systems and scalable MERN pipelines. Expertise in high-scale CRUD, RBAC security, and Docker-based delivery.
                  </Typography>
               </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { label: 'Years Experience', val: '1+' },
                    { label: 'Code Refactoring', val: '~40%' },
                    { label: 'Successful Projects', val: '10+' }
                  ].map((stat) => (
                    <motion.div key={stat.label} whileHover={{ x: 10 }}>
                      <Box sx={{ borderLeft: '2px solid rgba(0,0,0,0.1)', pl: 4 }}>
                         <Typography variant="h3" sx={{ fontFamily: "var(--font-display)", color: 'var(--text-dark)', fontWeight: 600, fontSize: '40px', letterSpacing: '-0.28px' }}>{stat.val}</Typography>
                         <Typography variant="body2" sx={{ fontFamily: "var(--font-text)", color: 'var(--text-dark-tertiary)', fontSize: '14px', letterSpacing: '-0.224px', mt: 1 }}>{stat.label}</Typography>
                      </Box>
                    </motion.div>
                  ))}
               </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Experience Section (Black) */}
      <Box id="experience" sx={{ py: 15, backgroundColor: 'var(--bg-dark)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" className="sf-section" sx={{ color: 'var(--text-light)', mb: 12, textAlign: 'center' }}>
            Experience.
          </Typography>
          
          <Box sx={{ position: 'relative' }}>
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section (Light Gray) */}
      <Box id="projects" sx={{ py: 15, backgroundColor: 'var(--bg-light)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" className="sf-section" sx={{ color: 'var(--text-dark)', mb: 12, textAlign: 'center' }}>
            Projects.
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

      {/* Skill Grid (Black) */}
      <Box sx={{ py: 15, backgroundColor: 'var(--bg-dark)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" className="sf-section" sx={{ color: 'var(--text-light)', mb: 10, textAlign: 'center' }}>
            Tech Stack.
          </Typography>
          <SkillSection title="Core & Frontend" skills={SKILLS.frontend} color="#ffffff" theme="dark" />
          <SkillSection title="Backend & Logic" skills={SKILLS.backend} color="#ffffff" theme="dark" />
          <SkillSection title="Data & Systems" skills={SKILLS.database} color="#ffffff" theme="dark" />
          <SkillSection title="Cloud & Deployment" skills={SKILLS.cloud} color="#ffffff" theme="dark" />
        </Container>
      </Box>

      {/* Footer (Light Gray) */}
      <Box sx={{ py: 10, backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mb: 4 }}>
             {[
               { href: PERSONAL_INFO.github, label: 'GitHub' },
               { href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
               { href: PERSONAL_INFO.telegram, label: 'Telegram' }
             ].map((social) => (
               <motion.a 
                 key={social.label} 
                 href={social.href} 
                 target="_blank" 
                 whileHover={{ y: -5, color: 'var(--apple-link-blue)' }} 
                 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-text)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '-0.224px' }}
               >
                 {social.label}
               </motion.a>
             ))}
          </Box>
          <Typography sx={{ fontFamily: "var(--font-text)", color: 'var(--text-dark-tertiary)', fontSize: '12px', letterSpacing: '-0.12px' }}>
            © 2026 {PERSONAL_INFO.name}. minimalist ui design.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
