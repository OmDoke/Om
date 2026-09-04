// ── ALL PORTFOLIO CONTENT LIVES HERE ────────────────────────────────────────
// Import from this file in every component to keep content centralised.

export const PERSONAL = {
  name: 'Onkar Doke',
  nickname: 'Om',
  title: 'Full-Stack Developer (MERN · Java)',
  tagline:
    'CDAC-certified Full-Stack Developer building production-grade web apps with the MERN stack, Java/Spring Boot, and a passion for clean, scalable, user-centric solutions.',
  location: 'Pune, Maharashtra, India',
  phone: '',
  email: 'onkardoke9696@gmail.com',
  linkedin: 'https://linkedin.com/in/onkar-doke',
  telegram: 'https://t.me/omdoke',
  github: 'https://github.com/onkardoke',
  website: 'https://omportfolio-umber.vercel.app',
  photo: '/om_p.png',
};

export const STATS = [
  { num: '1.2+', label: 'Years internship exp.' },
  { num: '4+', label: 'Projects shipped' },
  { num: '2', label: 'MERN · Java stacks' },
  { num: '2025', label: 'CDAC Certified' },
];

// ── SKILLS ────────────────────────────────────────────────────────────────────
// Covers both MERN Full-Stack and Java Full-Stack profiles
export const SKILLS = [
  // MERN Core
  { name: 'React.js', icon: '⚛', level: 88, color: '#61dafb' },
  { name: 'Node.js', icon: '⬢', level: 85, color: '#68a063' },
  { name: 'Express.js', icon: '🚂', level: 85, color: '#f1f5f9' },
  { name: 'MongoDB', icon: '🍃', level: 83, color: '#47a248' },
  // JavaScript ecosystem
  { name: 'JavaScript', icon: '𝕁𝕊', level: 88, color: '#f7df1e' },
  { name: 'TypeScript', icon: '𝕋𝕊', level: 78, color: '#3178c6' },
  { name: 'Redux', icon: '🔄', level: 80, color: '#764abc' },
  // Java stack
  { name: 'Java', icon: '☕', level: 80, color: '#f89820' },
  { name: 'Spring Boot', icon: '🌿', level: 75, color: '#6db33f' },
  // Database & Auth
  { name: 'SQL', icon: '🗄️', level: 80, color: '#f29111' },
  { name: 'PostgreSQL', icon: '🐘', level: 76, color: '#336791' },
  { name: 'JWT / OAuth', icon: '🔐', level: 82, color: '#ec4899' },
  // DevOps
  { name: 'Docker', icon: '🐳', level: 75, color: '#2496ed' },
];

// ── PROJECTS ─────────────────────────────────────────────────────────────────
// Real shipped projects (MERN focus) + portfolio highlights
export const PROJECTS = [
  {
    tag: 'MERN · FinTech',
    title: 'SmartBank',
    desc: 'Full-stack MERN banking platform with JWT/bcrypt auth, RBAC, MongoDB aggregation pipelines for statements, and a full Docker + GitHub Actions CI/CD pipeline deployed to Render.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'Docker'],
    color: '#06b6d4',
    demo: '#',
    repo: 'https://github.com/onkardoke',
  },
  {
    tag: 'MERN · Real-time',
    title: 'Waste Management App',
    desc: 'MERN platform with real-time collector tracking via Socket.io, geospatial MongoDB queries, JWT + RBAC (user/admin/collector), Docker Compose deployment, and GitHub Actions CI/CD.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
    color: '#10b981',
    demo: '#',
    repo: 'https://github.com/onkardoke',
  },
  {
    tag: 'OTT · CMS',
    title: 'OTTplay CMS',
    desc: 'Internal React CMS at HT Labs for managing OTT content and multi-step publishing workflows. Built reusable components with Redux Toolkit + Context API, cutting code duplication ~40%.',
    stack: ['React.js', 'Redux Toolkit', 'JWT', 'REST API', 'GitHub Actions'],
    color: '#8b5cf6',
    demo: '#',
    repo: 'https://github.com/onkardoke',
  },
  {
    tag: 'Java · Full-Stack',
    title: 'Java Backend Projects',
    desc: 'RESTful microservices and full-stack apps built with Java and Spring Boot — featuring MVC architecture, JPA/Hibernate, MySQL/PostgreSQL, and Spring Security.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'REST API'],
    color: '#f89820',
    demo: '#',
    repo: 'https://github.com/onkardoke',
  },
  {
    tag: 'AI · RAG',
    title: 'NeuroSearch AI',
    desc: 'Enterprise-grade Retrieval-Augmented Generation (RAG) system enabling intelligent Q&A over custom knowledge bases. Integrates LLMs with vector search to deliver accurate, context-aware answers from PDFs, websites, and structured datasets.',
    stack: ['Python', 'LangChain', 'FastAPI', 'Vector DB', 'LLM', 'JavaScript', 'CSS'],
    color: '#6366f1',
    demo: 'https://neurosearch-ui.onrender.com',
    repo: 'https://github.com/OmDoke/NeuroSearch-AI-Enterprise-Grade-RAG-Knowledge-Assistant',
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    date: 'Aug 2025 – Present',
    role: 'Intern',
    company: 'HT Labs (OTTplay), Pune',
    desc: 'Building and maintaining OTTplay CMS — a React.js internal platform for managing OTT content and publishing workflows. Architected reusable components with React Hooks, Context API, and Redux Toolkit (↓40% code duplication). Implemented RBAC with JWT, integrated RESTful APIs, and delivered features in Agile sprints via GitHub Actions CI/CD.',
    tech: ['React.js', 'Redux Toolkit', 'Context API', 'JWT', 'REST API', 'GitHub Actions'],
  },
  {
    date: 'Jun 2023 – Nov 2023',
    role: 'Intern',
    company: 'Elite Softwares, Pune',
    desc: 'Developed fully responsive, cross-browser-compatible web apps using HTML5, CSS3, JavaScript (ES6+), and Bootstrap. Built reusable UI components, JavaScript form validations, consumed REST APIs, and delivered 3+ client projects on schedule in Agile sprints.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST APIs', 'Git'],
  },
  {
    date: '2024 – 2025',
    role: 'PG-DAC (Advanced Computing)',
    company: 'C-DAC, Pune',
    desc: 'CDAC-certified (2025) in Full-Stack Development: React.js, Node.js, MongoDB, Spring Boot, System Design, Docker, and CI/CD. Intensive 6-month post-graduate programme at C-DAC Pune.',
    tech: ['MERN Stack', 'Spring Boot', 'System Design', 'Docker', 'CI/CD'],
  },
  {
    date: '2020 – 2024',
    role: 'B.Tech — Computer Engineering',
    company: "G.H. Raisoni Society's College of Engineering, Pune",
    desc: 'CGPA 7.65+ | No active backlogs. Focus on data structures, algorithms, software engineering, and web development. Built foundational skills in Java, DBMS, OS, and networking.',
    tech: ['Java', 'DSA', 'DBMS', 'OS', 'Networking', 'Web Dev'],
  },
];

// ── AI CHAT RESPONSES ─────────────────────────────────────────────────────────
export const AI_RESPONSES: Record<string, string> = {
  skills:
    "Onkar is a MERN-stack specialist — React.js (88%), Node.js and Express.js (85%), MongoDB (83%), JavaScript (88%), and Redux (80%). He also has solid Java and Spring Boot skills for Java backend or full-stack roles. Plus JWT authentication, Docker, TypeScript, and PostgreSQL!",
  projects:
    "Onkar's key projects include SmartBank — a full MERN banking platform with Docker and CI/CD — and a Waste Management App with real-time Socket.io tracking. He also built OTTplay CMS at HT Labs for managing OTT publishing workflows. On the Java side he has built Spring Boot REST microservices too!",
  experience:
    "Onkar has 1.2+ years of internship experience. Currently a React.js Developer Intern at HT Labs (OTTplay) in Pune, where he's building a production CMS used by editorial teams daily. He previously interned as a Frontend Developer at Elite Softwares and holds a CDAC certification from C-DAC Pune (2025).",
  contact:
    "You can reach Onkar at onkardoke9696@gmail.com, call or WhatsApp on +91-7745042879, connect on LinkedIn at linkedin.com/in/onkar-doke, or check his GitHub at github.com/onkardoke. He's based in Pune, Maharashtra!",
  available:
    "Yes! Onkar is actively looking for Full-Stack MERN, Java Full-Stack, or Java Backend roles — preferably hybrid or remote in SaaS or startup environments. CDAC-certified and ready to contribute from day one!",
  hire:
    "Absolutely! Onkar is open to full-time positions, contract work, and collaborations. He brings production-grade MERN experience from HT Labs, solid Java/Spring Boot knowledge, Docker and CI/CD skills, and a CDAC certification from 2025!",
  default:
    "I'm Onkar (Om) Doke's AI assistant! Ask me about his MERN stack skills, Java backend experience, real projects like SmartBank or OTTplay CMS, or his availability. What would you like to know?",
};
