import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';

// Icons
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import CyberBackground3D from '../components/CyberBackground3D';

// --- DATA ---
const experiences = [
  {
    role: 'Full Stack MERN Developer', company: 'HT Labs (OTTplay.com)', period: 'Aug 2025 – Present',
    description: [
      'Engineered RESTful APIs for content CRUD pipelines serving millions of users',
      'Built RBAC-secured admin dashboards with enterprise-grade authentication flows',
      'Collaborated across Agile sprints enforcing SOLID principles and clean architecture'
    ]
  },
  {
    role: 'Frontend Developer Intern', company: 'Elite Softwares', period: 'June – Nov 2023',
    description: [
      'Delivered 5+ responsive cross-platform web apps using HTML5/CSS3/JS/Bootstrap',
      'Contributed to QA cycles and reusable component library development'
    ]
  }
];

const projects = [
  {
    title: 'SmartBank', desc: 'Secure banking app with JWT/Spring Security RBAC, CI/CD pipeline via Maven',
    metrics: ['High Volume', 'Spring Sec'], tech: ['React', 'Spring Boot', 'MySQL', 'JWT'], link: 'https://github.com/OmDoke'
  },
  {
    title: 'Waste Management', desc: 'Microservices REST platform with real-time tracking & optimized SQL',
    metrics: ['Real-Time', 'Microservices'], tech: ['React', 'Spring Boot', 'MySQL'], link: 'https://github.com/OmDoke/Ecometa'
  },
  {
    title: 'Book Inventory System', desc: 'MERN-based inventory manager with full CRUD capabilities',
    metrics: ['Full Stack', 'CRUD'], tech: ['MERN', 'Node.js', 'React'], link: 'https://github.com/OmDoke/Book-Inventory-Management-System'
  },
  {
    title: 'Smart Video Surveillance', desc: 'Real-time OpenCV + GStreamer analysis system in C++',
    metrics: ['OpenCV', 'GStreamer'], tech: ['C++', 'AI'], link: 'https://github.com/OmDoke/SmartSurveillance'
  }
];

const skills = [
  'React.js', 'Node.js', 'TypeScript', 'Java', 'Spring Boot', 'Microservices', 'GraphQL', 'Next.js', 'MySQL', 'MongoDB', 'PostgreSQL', 'Redux', 'Jest', 'CI/CD', 'Docker'
];

// --- CYBER UI COMPONENTS ---
const NeonButton = ({ children, variant, href, icon }: { children: React.ReactNode, variant: 'solid' | 'outline', href?: string, icon?: React.ReactNode }) => (
  <Button
    component={motion.a}
    whileHover={{ scale: 1.05, boxShadow: variant === 'solid' ? '0 0 20px #00F5FF' : 'inset 0 0 10px #7B2FFF, 0 0 20px #7B2FFF' }}
    whileTap={{ scale: 0.95 }}
    href={href}
    download={href === '/om_resume.pdf'}
    target={href?.startsWith('http') ? '_blank' : '_self'}
    startIcon={icon}
    sx={{
      background: variant === 'solid' ? 'linear-gradient(90deg, #00F5FF, #7B2FFF)' : 'transparent',
      color: variant === 'solid' ? '#050A14' : '#00F5FF',
      border: variant === 'outline' ? '1px solid #7B2FFF' : 'none',
      fontFamily: "'Orbitron', sans-serif", fontWeight: 700, px: 4, py: 1.5,
      textTransform: 'uppercase', letterSpacing: '1px',
      clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)', // Cyberpunk cut edges
      boxShadow: variant === 'solid' ? '0 0 10px rgba(0,245,255,0.5)' : 'none',
      '&:hover': {}
    }}
  >
    {children}
  </Button>
);

const GlassProjectCard = ({ project }: { project: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ rotateY: 5, scale: 1.02, transition: { duration: 0.3 } }}
    style={{ perspective: 1000, height: '100%' }}
  >
    <Box sx={{
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0,245,255,0.15)',
      boxShadow: '0 0 30px rgba(0,245,255,0.08)',
      transformStyle: 'preserve-3d',
      p: 4, height: '100%', display: 'flex', flexDirection: 'column',
      '&:hover': {
        borderColor: '#00F5FF',
        boxShadow: '0 0 40px rgba(0,245,255,0.3)',
      }
    }}>
      <Typography variant="h5" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 2, textShadow: '0 0 10px #00F5FF' }}>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "'Sora', sans-serif", color: '#E8F4FD', flexGrow: 1, mb: 3 }}>
        {project.desc}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {project.tech.map((t: string) => (
          <Chip key={t} label={t} sx={{ bgcolor: 'rgba(123,47,255,0.2)', color: '#7B2FFF', border: '1px solid #7B2FFF', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }} />
        ))}
      </Box>
      <Button href={project.link} target="_blank" sx={{ color: '#00F5FF', fontFamily: "'Orbitron', sans-serif", '&:hover': { textShadow: '0 0 10px #00F5FF' } }}>
        View Repository →
      </Button>
    </Box>
  </motion.div>
);

const AnimatedStat = ({ num, label }: { num: string, label: string }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Box sx={{ textAlign: 'center', p: 3, border: '1px solid rgba(123,47,255,0.3)', background: 'rgba(5,10,20,0.5)', borderRadius: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#7B2FFF', textShadow: '0 0 20px #7B2FFF', mb: 1 }}>{num}</Typography>
      <Typography variant="body2" sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#3A4A5C', textTransform: 'uppercase' }}>{label}</Typography>
    </Box>
  </motion.div>
);

// --- MAIN PAGE ---
export default function LandingPage() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15);
      cursorY.set(e.clientY - 15);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <Box sx={{ bgcolor: '#050A14', minHeight: '100vh', color: '#E8F4FD', overflowX: 'hidden' }}>
      
      {/* Dynamic 3D Background rendering behind everything */}
      <CyberBackground3D />

      {/* Trailing Custom Cursor */}
      <motion.div
        style={{
          x: cursorXSpring, y: cursorYSpring,
          position: 'fixed', top: 0, left: 0, width: 30, height: 30, borderRadius: '50%',
          border: '2px solid #00F5FF', boxShadow: '0 0 15px #00F5FF', pointerEvents: 'none', zIndex: 9999
        }}
      />

      {/* Sticky Progress Navbar */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
        <motion.div style={{ height: '100%', background: 'linear-gradient(90deg, #00F5FF, #7B2FFF)', scaleX, transformOrigin: '0% 50%' }} />
      </Box>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', p: 2, background: 'rgba(5,10,20,0.6)', backdropFilter: 'blur(10px)', zIndex: 999, borderBottom: '1px solid rgba(0,245,255,0.1)' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', fontWeight: 900, fontSize: '1.5rem', textShadow: '0 0 10px #00F5FF' }}>O.D</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
             <a href="#about" style={{ color: '#E8F4FD', textDecoration: 'none', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem' }}>About</a>
             <a href="#experience" style={{ color: '#E8F4FD', textDecoration: 'none', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem' }}>Experience</a>
             <a href="#projects" style={{ color: '#E8F4FD', textDecoration: 'none', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem' }}>Projects</a>
          </Box>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        
        {/* HERO */}
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: 10 }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <LocationOnIcon sx={{ color: '#00F5FF' }} />
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#00F5FF' }}>Pune, India</Typography>
            </Box>
            <Typography variant="h1" sx={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: { xs: '3rem', md: '5rem', lg: '6rem' }, textShadow: '0 0 20px #00F5FF, 0 0 40px #00F5FF66', mb: 1 }}>
              Onkar Doke
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "'Sora', sans-serif", color: '#7B2FFF', mb: 4, fontWeight: 600, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
              Full Stack Engineer • MERN • Microservices • TypeScript
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#3A4A5C', mb: 6, maxWidth: '600px' }}>
              &gt; "Building production-grade systems that scale — from pixel to production."_
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <NeonButton variant="solid" href="#projects">View My Work</NeonButton>
              <NeonButton variant="outline" href="/om_resume.pdf" icon={<FileDownloadIcon />}>Download Resume</NeonButton>
              <NeonButton variant="outline" icon={<TelegramIcon />} href="https://t.me/omdoke96">Let's Connect</NeonButton>
            </Box>
          </motion.div>
        </Box>

        {/* ABOUT (Split Layout) */}
        <Box id="about" sx={{ py: 15 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 4 }}>System.Info()</Typography>
              <Typography sx={{ fontFamily: "'Sora', sans-serif", color: '#E8F4FD', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                I'm a CDAC-certified Full Stack Developer with 1+ year of hands-on experience building real-world products at OTTplay.com — one of India's leading OTT aggregator platforms. 
              </Typography>
              <Typography sx={{ fontFamily: "'Sora', sans-serif", color: '#E8F4FD', fontSize: '1.1rem', lineHeight: 1.8 }}>
                I specialize in React.js, Node.js, TypeScript, and Microservices architecture, and I thrive in Agile environments where clean code and fast delivery matter. Currently seeking global product engineering roles.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <AnimatedStat num="1+ YRS" label="Experience" />
                <AnimatedStat num="10+" label="Projects Built" />
                <AnimatedStat num="5+" label="Core Technologies" />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* EXPERIENCE (Vertical Timeline) */}
        <Box id="experience" sx={{ py: 15 }}>
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 8, textAlign: 'center' }}>Execution.Log()</Typography>
          <Box sx={{ position: 'relative', pl: { xs: 2, md: 0 } }}>
            {/* Timeline Line */}
            <Box sx={{ position: 'absolute', left: { xs: '20px', md: '50%' }, top: 0, bottom: 0, width: '2px', background: 'rgba(0,245,255,0.2)' }} />
            
            {experiences.map((exp, idx) => (
              <motion.div key={exp.company} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * idx }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }, justifyContent: 'space-between', alignItems: 'center', mb: 8, position: 'relative' }}>
                  
                  {/* Glowing Node on Timeline */}
                  <Box sx={{ position: 'absolute', left: { xs: '14px', md: '50%' }, transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: '#00F5FF', boxShadow: '0 0 15px #00F5FF', zIndex: 2, mt: { xs: 1, md: 0 } }} />
                  
                  <Box sx={{ width: { xs: '100%', md: '45%' }, pl: { xs: 4, md: 0 }, pr: { xs: 0, md: idx % 2 === 0 ? 4 : 0 }, textAlign: { xs: 'left', md: idx % 2 === 0 ? 'right' : 'left' } }}>
                    <Typography variant="h5" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#7B2FFF', mb: 1 }}>{exp.role}</Typography>
                    <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#E8F4FD', mb: 2 }}>{exp.company} | {exp.period}</Typography>
                    <ul style={{ paddingLeft: idx % 2 === 0 ? 0 : '1.5rem', listStyle: 'none', margin: 0, direction: idx % 2 === 0 ? 'rtl' : 'ltr' }}>
                      {exp.description.map((item, i) => (
                         <li key={i} style={{ color: '#3A4A5C', marginBottom: '10px', fontFamily: "'Sora', sans-serif", fontSize: '0.95rem' }}>
                            <span style={{ color: '#00F5FF', marginRight: '8px' }}>▹</span> {item}
                         </li>
                      ))}
                    </ul>
                  </Box>
                  <Box sx={{ width: { xs: '0%', md: '45%' } }} /> {/* Spacer */}
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* PROJECTS (3D Tilt Cards) */}
        <Box id="projects" sx={{ py: 15 }}>
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 8, textAlign: 'center' }}>Compile.Deploy()</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {projects.map(proj => (
              <Box key={proj.title}>
                <GlassProjectCard project={proj} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* SKILLS (Floating 3D Chips) */}
        <Box sx={{ py: 15 }}>
          <Typography variant="h2" sx={{ fontFamily: "'Orbitron', sans-serif", color: '#00F5FF', mb: 8, textAlign: 'center' }}>Tech.Stack()</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', perspective: 1000 }}>
            {skills.map((skill, i) => (
              <motion.div key={skill} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                 whileHover={{ rotateX: 20, rotateY: 20, scale: 1.1, zIndex: 10 }} style={{ transformStyle: 'preserve-3d' }}>
                 <Box sx={{ 
                    fontFamily: "'JetBrains Mono', monospace", px: 3, py: 1.5, background: 'rgba(123,47,255,0.1)', color: '#00F5FF',
                    border: '1px solid #7B2FFF', borderRadius: '4px', boxShadow: '0 0 10px rgba(123,47,255,0.2)'
                 }}>
                   {skill}
                 </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* FOOTER */}
        <Box sx={{ textAlign: 'center', py: 5, borderTop: '1px solid rgba(0,245,255,0.2)', mt: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 3 }}>
            <motion.a href="https://github.com/OmDoke" target="_blank" whileHover={{ scale: 1.2, textShadow: '0 0 10px #00F5FF' }} style={{ color: '#E8F4FD' }}><GitHubIcon fontSize="large" /></motion.a>
            <motion.a href="https://linkedin.com/in/onkar-doke" target="_blank" whileHover={{ scale: 1.2, textShadow: '0 0 10px #7B2FFF' }} style={{ color: '#E8F4FD' }}><LinkedInIcon fontSize="large" /></motion.a>
          </Box>
          <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", color: '#3A4A5C', fontSize: '0.8rem' }}>
            © 2026 Onkar Doke. Initialized & Compiled with Cyberpunk Precision.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
