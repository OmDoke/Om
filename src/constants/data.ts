export const PERSONAL_INFO = {
  name: 'Onkar Doke',
  role: 'Full Stack Developer (MERN) | CDAC Certified 2025',
  location: 'Pune, India',
  email: 'onkardoke9696@gmail.com',
  github: 'https://github.com/OmDoke',
  linkedin: 'https://linkedin.com/in/onkar-doke',
  telegram: 'https://t.me/omdoke96',
  resumeUrl: '/om_resume.pdf',
  summary: 'CDAC-certified Full Stack developer (MERN + Java) with hands-on internship experience at OTTplay building a CMS actively used by editorial teams. I build production-ready systems — not just side projects — with a focus on clean architecture, real API integrations, and team-ready code.'
};

export const EXPERIENCE = [
  {
    role: 'React.js Developer Intern',
    company: 'HT Labs (OTTplay)',
    period: 'Aug 2025 – Present',
    impact: 'Approximately 40% Reduction in Code Duplication',
    description: [
      'OTTplay CMS is a content management system used daily by HT Media\'s editorial teams to publish and manage streaming content.',
      'Architected a modular React component library using Hooks, Redux Toolkit, and Context API — reducing code duplication by approximately 40% across the UI layer.',
      'Integrated 15+ REST API endpoints for paginated CRUD, real-time content status updates, and optimistic UI.',
      'Implemented JWT-based RBAC with protected routes and delivered every sprint feature via GitHub Actions CI/CD.',
      'Reviewed API contracts via Swagger and Postman, bridging frontend-backend integration and catching contract issues early.'
    ],
    tech: ['React.js', 'Redux Toolkit', 'TypeScript', 'Node.js', 'REST API', 'GitHub Actions']
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Elite Softwares',
    period: 'June – Nov 2023',
    impact: 'Client Projects Delivered',
    description: [
      'Contributed to 3+ client projects end-to-end — built fully responsive, cross-browser-compatible UIs using ES6+ and Bootstrap.',
      'Consumed REST APIs for dynamic data rendering, performed cross-browser testing, and collaborated on API contract definitions.',
      'Followed Agile sprint workflows with daily standups and Git version control.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST API', 'Agile']
  }
];

export const PROJECTS = [
  {
    title: 'SmartBank',
    subtitle: 'Full Stack MERN Banking Platform',
    desc: 'End-to-end banking platform with Node.js/Express.js REST APIs, MongoDB aggregation pipelines for statements, JWT authentication, and a React.js dashboard.',
    impact: 'Full-stack deployment with Docker & GitHub Actions CI/CD',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/OmDoke'
  },
  {
    title: 'Waste Management',
    subtitle: 'Node.js Microservices Platform',
    desc: 'Geospatial waste collector tracking platform built with Node.js/Express.js microservices, MySQL + MongoDB dual-DB setup, and real-time Socket.io notifications.',
    impact: 'Real-time Geospatial Tracking',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Docker Compose', 'JWT', 'Socket.io'],
    github: 'https://github.com/OmDoke/Ecometa'
  },
  {
    title: 'FastAPI LLM Gateway',
    subtitle: 'Python · FastAPI · OpenAI · Gemini · Docker',
    badge: 'Production-ready API',
    desc: 'A provider-agnostic REST gateway that wraps OpenAI and Google Gemini behind a unified interface — enforcing JSON schema on every response so downstream systems always receive predictable, typed data, not free-form text.',
    impact: 'Structured output enforcement with JSON schema validation, SSE streaming, and extensible provider pattern',
    // highlights: [
    //   'Structured output enforcement: JSON schema validation layer guarantees consistent response shape regardless of which LLM provider is selected.',
    //   'Streaming with SSE: Real-time token delivery via Server-Sent Events reduces perceived latency while keeping the backend fully non-blocking.',
    //   'Extensible provider pattern: New LLM providers plug in via a clean interface — adding a provider requires no changes to core routing logic.',
    //   'Observability built in: Health endpoint exposes active model and version — ready for uptime monitoring and deployment pipelines.'
    // ],
    tech: ['FastAPI', 'Python async', 'OpenAI API', 'Gemini API', 'SSE Streaming', 'JSON Schema', 'Docker', 'pytest'],
    github: 'https://github.com/OmDoke/FastAPI'
  },
  {
    title: 'NeuroSearch',
    subtitle: 'Python · LangChain · Vector Search · LLM · PDF',
    badge: 'AI / ML Engineering',
    desc: 'An enterprise-grade Retrieval-Augmented Generation system that lets teams query their own documents — PDFs, websites, structured data — using natural language. Answers are grounded in source material, not hallucinated from model weights.',
    impact: 'Context-aware Q&A with source citations — essential for enterprise use cases where trust and traceability matter',
    // highlights: [
    //   'RAG architecture: Combines vector similarity search with LLM inference — retrieves the most relevant document chunks before generating an answer.',
    //   'Multi-source ingestion: Handles PDFs, web pages, and structured datasets through a unified ingestion pipeline.',
    //   'Context-aware Q&A: Responses cite source context, making answers auditable for enterprise use cases.'
    // ],
    tech: ['LangChain', 'Vector DB', 'RAG', 'Python', 'PDF parsing', 'LLM', 'Embeddings'],
    github: 'https://github.com/OmDoke/NeuroSearch-AI-Enterprise-Grade-RAG-Knowledge-Assistant'
  },
  {
    title: 'Auto-Apply Pro',
    subtitle: 'Node.js · Puppeteer · React · Socket.IO · Groq LLaMA 3',
    badge: 'Agentic Systems',
    desc: 'A multi-agent automation system that applies to jobs on LinkedIn, Naukri, and Indeed autonomously — filling forms, resolving unknown questions with a 3-tier AI answer engine, and streaming live status to a React dashboard in real time.',
    impact: '3-tier AI answer engine (rules → fuzzy match → Groq LLaMA 3) with isolated agent processes and real-time streaming UI',
    // highlights: [
    //   '3-tier answer engine: Rule-based matching → fuzzy string similarity → Groq LLaMA 3 with resume context as fallback.',
    //   'Isolated agent processes: LinkedIn and Naukri agents run as isolated child processes — a crash in one does not cascade.',
    //   'Real-time streaming UI: Socket.IO pushes live agent logs to the React dashboard with zero polling.',
    //   'Resume-aware context: PDF resume parsed once and cached; injected as LLM context for accurate form answers.'
    // ],
    tech: ['Node.js', 'Puppeteer', 'React + TypeScript', 'Socket.IO', 'Groq LLaMA 3', 'LangChain', 'pdf-parse', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/OmDoke/auto-apply-pro'
  },
  {
    title: 'Book Inventory',
    subtitle: 'Node.js · React · MongoDB · Vercel Serverless · JWT',
    badge: 'Full-stack delivery',
    desc: 'A production-deployed inventory management system built for Vercel\'s serverless model — connection-cached MongoDB, JWT-secured admin routes, and a React + MUI frontend. Designed from the ground up for cold-start efficiency.',
    impact: 'Serverless-first architecture with connection caching, secure admin flows, and paginated API',
    // highlights: [
    //   'Serverless-first: MongoDB connection caching prevents cold-start connection storms — a common serverless pitfall.',
    //   'Secure admin flows: Bcrypt-hashed credentials, HttpOnly JWT cookies, and protected API routes.',
    //   'Paginated public API: Books endpoint returns paginated results — designed to stay fast as inventory grows.'
    // ],
    tech: ['Node.js', 'React + Vite', 'MongoDB + Mongoose', 'Vercel Serverless', 'JWT', 'Material UI', 'Axios'],
    github: 'https://github.com/OmDoke/Book-Inventory-Management-System'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Post Graduate Diploma in Advanced Computing',
    issuer: 'C-DAC Pune (CDAC)',
    year: '2025',
    detail: 'Government of India certified program covering full-stack Java, MERN, OS, DBMS, and Software Engineering.'
  }
];

export const EDUCATION = [
  {
    degree: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
    institution: 'C-DAC Pune',
    year: '2025'
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Savitribai Phule Pune University',
    year: '2023'
  }
];

export const SKILLS = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'REST API', 'MVC Architecture', 'Socket.io', 'Java', 'Spring Boot', 'C++'],
  database: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'NoSQL Modelling'],
  cloud: ['JWT', 'OAuth 2.0', 'RBAC', 'Docker', 'GitHub Actions', 'CI/CD']
};
