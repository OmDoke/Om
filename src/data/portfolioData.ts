// ── ALL PORTFOLIO CONTENT LIVES HERE ────────────────────────────────────────
// Import from this file in every component to keep content centralised.

export const PERSONAL = {
  name: 'Onkar Doke',
  nickname: 'Om',
  title: 'Full Stack Engineer: Java/Spring Boot, React, and RAG systems',
  tagline:
    'I build secure Spring Boot backends and ship React frontends and LLM pipelines on top. CDAC PG-DAC 2025 · React/TypeScript at HT Labs (OTTplay).',
  location: 'Pune, Maharashtra, India',
  phone: '',
  email: 'onkardoke9696@gmail.com',
  linkedin: 'https://linkedin.com/in/onkar-doke',
  telegram: 'https://t.me/omdoke',
  github: 'https://github.com/OmDoke',
  website: 'https://omportfolio-umber.vercel.app',
  photo: '/om_p.png',
};

export const STATS = [
  { num: '1.2+', label: 'Years production exp.' },
  { num: '33', label: 'Unit tests passed (SmartBank)' },
  { num: '22', label: 'REST endpoints built' },
  { num: '2025', label: 'CDAC Certified' },
];

// ── SKILL GROUPS (Categorized Matrix — No arbitrary percentages) ─────────────
export interface SkillGroup {
  category: string;
  badge: string;
  description: string;
  skills: { name: string; icon: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend Architecture',
    badge: 'Core Focus',
    description: 'RESTful microservices, stateful/stateless auth pipelines & ACID persistence',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot 3', icon: '🌿' },
      { name: 'Spring Security', icon: '🔐' },
      { name: 'JPA / Hibernate', icon: '🗄️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis (Caching)', icon: '⚡' },
      { name: 'JUnit 5 & Mockito', icon: '🧪' },
    ],
  },
  {
    category: 'Frontend Engineering',
    badge: 'Production Grade',
    description: 'Component architecture, typed contracts, responsive layouts & clean state',
    skills: [
      { name: 'React.js', icon: '⚛' },
      { name: 'TypeScript', icon: '𝕋𝕊' },
      { name: 'Redux Toolkit', icon: '🔄' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Context API', icon: '🧩' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Vite', icon: '⚡' },
    ],
  },
  {
    category: 'GenAI & RAG Systems',
    badge: 'Modern AI Stack',
    description: 'Document ingestion pipelines, semantic embeddings & conversational retrieval',
    skills: [
      { name: 'LangChain', icon: '🦜' },
      { name: 'FastAPI', icon: '🚀' },
      { name: 'Pinecone Vector DB', icon: '🌲' },
      { name: 'FAISS', icon: '🔍' },
      { name: 'Google Gemini API', icon: '✨' },
      { name: 'MMR Diversity Retrieval', icon: '🎯' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    category: 'DevOps & Tooling',
    badge: 'Infrastructure',
    description: 'Multi-stage containerization, automated pipelines & reverse proxying',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Docker Compose', icon: '📦' },
      { name: 'GitHub Actions CI/CD', icon: '🔄' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'Git & Linux', icon: '🐧' },
      { name: 'Maven', icon: '⚙️' },
    ],
  },
];

export const SKILLS = [
  { name: 'Java', icon: '☕', level: 85, color: '#f89820' },
  { name: 'Spring Boot', icon: '🌿', level: 85, color: '#6db33f' },
  { name: 'React.js', icon: '⚛', level: 88, color: '#61dafb' },
  { name: 'TypeScript', icon: '𝕋𝕊', level: 82, color: '#3178c6' },
  { name: 'PostgreSQL', icon: '🐘', level: 80, color: '#336791' },
  { name: 'Docker', icon: '🐳', level: 80, color: '#2496ed' },
];

// ── PROJECTS (Measured facts, direct repos, no invented claims) ───────────────
export interface ProjectItem {
  tag: string;
  title: string;
  role: string;
  problem: string;
  architecture: string[];
  metrics: string;
  stack: string[];
  color: string;
  demo?: string;
  repo?: string;
  isInternal?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    tag: 'FinTech · Spring Boot 3',
    title: 'SmartBank Core Banking Platform',
    role: 'Lead Full-Stack Engineer',
    problem: 'Traditional demo banking apps use insecure in-memory mock data without ACID transactions, session revocation, or rate limits.',
    architecture: [
      'Engineered 22 REST endpoints across Accounts, Transactions, Statements, and Admin controls with Spring Boot 3 & Java 17.',
      'Configured stateless Redis session tokens with BCrypt (cost 12), double-submit cookie CSRF, and an IP rate-limiting filter.',
      'Containerized into 4 Docker Compose services (Spring Boot, MySQL 8, Redis 7, React/Nginx) with automated GitHub Actions CI/CD.',
    ],
    metrics: 'Measured: 22 endpoints, 33 unit tests passed (81.4% TransactionService coverage via JaCoCo), 4 Docker services',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'MySQL', 'Redis', 'Docker Compose', 'React', 'TypeScript'],
    color: '#0ea5e9',
    repo: 'https://github.com/OmDoke/SmartBank',
  },
  {
    tag: 'GenAI · RAG Architecture',
    title: 'NeuroSearch AI Knowledge Retrieval',
    role: 'AI & Backend Developer',
    problem: 'Standard keyword document search lacks semantic understanding and standard LLM prompting suffers from severe hallucination over private data.',
    architecture: [
      'Built a FastAPI RAG service utilizing LangChain to parse and ingest PDF documents and web URLs via RecursiveCharacterTextSplitter (1000 chunk size, 200 overlap).',
      'Mapped text chunks into a 3072-dimensional vector space using models/gemini-embedding-001 stored in Pinecone Serverless (AWS us-east-1).',
      'Implemented Maximum Marginal Relevance (MMR) retrieval (top-k=8, fetch-k=30) with conversational history memory to eliminate context bias.',
    ],
    metrics: 'Measured: 3072-dim embeddings, Top-k 8 MMR retrieval, 1000/200 chunk strategy, HTTP 200 live deployment',
    stack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Gemini API', 'React', 'Vite'],
    color: '#6366f1',
    demo: 'https://neurosearch-ui.onrender.com',
    repo: 'https://github.com/OmDoke/NeuroSearch-AI',
  },
  {
    tag: 'Enterprise OTT · Production',
    title: 'OTTplay Editorial CMS (HT Labs)',
    role: 'React Developer Intern (Pune)',
    problem: 'Content editorial teams faced high code duplication and inconsistent state across complex multi-step OTT catalog publishing flows.',
    architecture: [
      'Maintained and extended core React.js modules for the daily internal publishing platform used by content operations.',
      'Architected reusable component abstractions with React Hooks, Context API, and Redux Toolkit, reducing frontend code duplication by ~40%.',
      'Integrated strict Role-Based Access Control (RBAC) via JWT authentication and connected RESTful API services across Agile sprint cycles.',
    ],
    metrics: 'Production tool at HT Labs Pune · ~40% code duplication reduction · Daily active internal editorial platform',
    stack: ['React.js', 'Redux Toolkit', 'TypeScript', 'Context API', 'JWT', 'REST API'],
    color: '#8b5cf6',
    isInternal: true,
  },
  {
    tag: 'AI Platform · Full-Stack',
    title: 'CareerOS Interview Copilot',
    role: 'Full-Stack Developer',
    problem: 'Generic coding interview preparation lacks personalization based on an applicant’s specific resume gaps and upcoming interview timeline.',
    architecture: [
      'Developed an adaptive interview roadmap platform that processes applicant target roles and tailors structured technical prep questions.',
      'Engineered typed React 19 UI with responsive dashboard views, modular state stores, and dynamic progress tracking.',
    ],
    metrics: 'Live repository with custom assessment workflows and client state management',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite'],
    color: '#10b981',
    repo: 'https://github.com/OmDoke/CareerOS',
  },
];

// ── EDUCATION (Dedicated Section) ───────────────────────────────────────────
export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  highlight: string;
  courses: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'Centre for Development of Advanced Computing (C-DAC)',
    location: 'Pune, Maharashtra',
    period: '2024 – 2025',
    highlight: 'CDAC Certified Full-Stack Developer (2025)',
    details: 'Intensive 6-month post-graduate engineering curriculum with hands-on labs in Advanced Java, Spring Boot, Microservices, MERN Stack, System Design, Algorithms, and Dockerized DevOps workflows.',
    courses: ['Advanced Java & Spring Boot', 'Data Structures & Algorithms', 'System Architecture & DB Design', 'DevOps & Containerization'],
  },
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Engineering',
    institution: "G.H. Raisoni Society's College of Engineering",
    location: 'Pune, Maharashtra',
    period: '2020 – 2024',
    highlight: 'CGPA 7.65 / 10 · First Class with Distinction',
    details: 'Four-year engineering degree covering core computer science fundamentals, relational database management systems, operating systems, and computer networks.',
    courses: ['Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
  },
];

// ── EXPERIENCE (Strictly Employment / Internships) ───────────────────────────
export const EXPERIENCE = [
  {
    date: 'Aug 2025 – Present',
    role: 'React Developer Intern',
    company: 'HT Labs (OTTplay), Pune',
    desc: 'Building and maintaining the OTTplay CMS — a production React.js internal platform used daily by editorial operations. Engineered reusable components using custom React Hooks, Context API, and Redux Toolkit, decreasing frontend code duplication by ~40%. Implemented role-based authorization with JWT, integrated microservice REST APIs, and shipped releases via GitHub Actions CI/CD.',
    tech: ['React.js', 'Redux Toolkit', 'Context API', 'TypeScript', 'JWT', 'REST API', 'GitHub Actions'],
  },
  {
    date: 'Jun 2023 – Nov 2023',
    role: 'Web Development Intern',
    company: 'Elite Softwares, Pune',
    desc: 'Developed responsive, cross-browser compatible web client interfaces using HTML5, CSS3, JavaScript (ES6+), and Bootstrap. Built structured form validation modules, integrated backend REST endpoints, and delivered 3 client deliverables on schedule in Agile sprints.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'REST APIs', 'Git'],
  },
];

// ── AI CHAT RESPONSES ─────────────────────────────────────────────────────────
export const AI_RESPONSES: Record<string, string> = {
  skills:
    "Onkar is a Full Stack Engineer specialized in Java/Spring Boot (3.x), React/TypeScript, and GenAI/RAG. He builds secure REST backends with Spring Security & PostgreSQL, responsive React frontends with Redux Toolkit, and RAG pipelines using LangChain, FastAPI & Vector DBs.",
  projects:
    "Onkar's verified projects include SmartBank (Spring Boot 3 + PostgreSQL + React + Docker banking platform with 22 REST endpoints and 33 unit tests), NeuroSearch AI (enterprise RAG with FastAPI, LangChain, Pinecone & MMR retrieval), and OTTplay CMS built at HT Labs Pune.",
  experience:
    "Onkar is currently interning at HT Labs (OTTplay) in Pune as a React Developer, maintaining the editorial CMS. He completed the rigorous PG-DAC (Advanced Computing) programme at C-DAC Pune in 2025 and holds a B.Tech in Computer Engineering.",
  contact:
    "You can reach Onkar at onkardoke9696@gmail.com, connect on LinkedIn at linkedin.com/in/onkar-doke, or view his GitHub repositories at github.com/OmDoke. He is based in Pune and open to Full-Time roles!",
  available:
    "Yes! Onkar is actively looking for Full-Stack, Java Backend, or Full-Stack AI roles in Pune (hybrid/on-site) or remote. CDAC-certified (2025) and ready to join immediately.",
  hire:
    "Onkar is open to full-time engineering positions. He brings production-grade experience from HT Labs Pune, verified Spring Boot microservice architectures, and hands-on GenAI pipeline expertise.",
  default:
    "I'm Onkar Doke's AI assistant. Ask me about his Java/Spring Boot backend work, React frontend experience at HT Labs, or his RAG systems like NeuroSearch AI!",
};
