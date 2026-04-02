export const PERSONAL_INFO = {
  name: 'Onkar Doke',
  role: 'Full Stack MERN Developer | CDAC 2025',
  location: 'Pune, India',
  email: 'onkardoke9696@gmail.com',
  github: 'https://github.com/OmDoke',
  linkedin: 'https://linkedin.com/in/onkar-doke',
  telegram: 'https://t.me/omdoke96',
  resumeUrl: '/om_resume.pdf',
  summary: 'Full Stack MERN Developer with 1+ year of experience building production-grade web applications. Reduced code duplication by ~40% via modular architecture and Redux Toolkit. Targeting high-impact roles in fintech and product startups.'
};

export const EXPERIENCE = [
  {
    role: 'React.js Developer Intern',
    company: 'HT Labs (OTTplay)',
    period: 'Aug 2025 – Present',
    impact: '40% Reduction in Code Duplication',
    description: [
      'Architected modular React component library using Hooks, Redux Toolkit, and Context API.',
      'Integrated 15+ REST API endpoints for paginated CRUD, real-time content status updates, and optimistic UI.',
      'Implemented JWT-based RBAC with protected routes and delivered every sprint feature via GitHub Actions CI/CD.',
      'Reviewed API contracts via Swagger and Postman to ensure seamless frontend-backend integration.'
    ],
    tech: ['React.js', 'Redux Toolkit', 'TypeScript', 'Node.js', 'REST API', 'GitHub Actions']
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Elite Softwares',
    period: 'June – Nov 2023',
    impact: 'End-to-End Client Delivery',
    description: [
      'Delivered 1 client project end-to-end — built fully responsive, cross-browser-compatible UI using ES6+ and Bootstrap.',
      'Consumed REST APIs for dynamic data rendering and collaborated on API contract definitions.',
      'Followed Agile sprint workflows with daily standups and Git version control.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Agile']
  }
];

export const PROJECTS = [
  {
    title: 'SmartBank',
    subtitle: 'Full Stack MERN Banking Platform',
    desc: 'End-to-end banking platform with Node.js/Express.js REST APIs and MongoDB aggregation for statements.',
    impact: 'AWS S3 Integration & zero-downtime CI/CD',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT', 'AWS S3', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/OmDoke'
  },
  {
    title: 'Waste Management',
    subtitle: 'Next.js Microservices Platform',
    desc: 'Geospatial-powered waste collector tracking with Next.js (SSR + SSG) and real-time Socket.io notifications.',
    impact: 'Real-time Geospatial Tracking',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Docker Compose', 'JWT', 'Socket.io'],
    github: 'https://github.com/OmDoke/Ecometa'
  }
];

export const SKILLS = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'REST API', 'MVC Architecture', 'Socket.io', 'C++', 'Java'],
  database: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'NoSQL Modelling'],
  cloud: ['AWS S3', 'JWT', 'OAuth 2.0', 'RBAC', 'Docker', 'GitHub Actions']
};
