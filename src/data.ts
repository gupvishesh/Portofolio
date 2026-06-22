import { Project, Skill, Achievement, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Voice Receptionist',
    description: 'A full speech-to-speech agentic pipeline for clinic automation using whisper.cpp (Metal GPU) for ASR, Google Gemini as the LLM, and Coqui XTTS v2 for neural TTS. Features a stateful FSM with 5-path intent routing, JointDeBERTa NLU, and Silero VAD — achieving <5ms latency on cached responses.',
    tags: ['Python', 'whisper.cpp', 'Google Gemini', 'Coqui XTTS', 'FastAPI', 'VAD'],
    githubUrl: 'https://github.com/agent-svs/MVP',
    image: 'https://picsum.photos/seed/voiceai/800/600'
  },
  {
    id: '2',
    title: 'CodeGenie',
    description: 'An AI-powered VS Code extension integrating a locally hosted DeepSeek-Instruct model via a custom Flask REST backend. Supports ghost text inline suggestions, session-scoped conversation history, and a Webview UI for freeform prompt-based code generation — all with language-aware prompt construction.',
    tags: ['VS Code API', 'TypeScript', 'DeepSeek', 'Flask', 'Python', 'Node.js'],
    githubUrl: 'https://github.com/gupvishesh/CodeGenie',
    image: 'https://picsum.photos/seed/codegenie/800/600'
  },
  {
    id: '3',
    title: 'DevRelease',
    description: 'A full-stack Release Management platform built with Java, Spring Boot, and React.js to track software lifecycle stages across multiple environments. Features stateless REST APIs with JWT auth, async notifications, a real-time analytics dashboard (MySQL 8 / JPA), and CI/CD via Docker.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/gupvishesh',
    liveUrl: 'https://believable-expression-production-1c68.up.railway.app',
    image: 'https://picsum.photos/seed/devrelease/800/600'
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'C/C++',       icon: 'Code2',       category: 'Languages' },
  { name: 'Python',      icon: 'Terminal',    category: 'Languages' },
  { name: 'Java',        icon: 'Coffee',      category: 'Languages' },
  { name: 'JavaScript',  icon: 'FileCode',    category: 'Languages' },
  { name: 'TypeScript',  icon: 'FileType',    category: 'Languages' },
  { name: 'HTML/CSS',    icon: 'Layout',      category: 'Languages' },
  { name: 'MySQL',       icon: 'Database',    category: 'Languages' },
  { name: 'MongoDB',     icon: 'Database',    category: 'Languages' },

  // Frameworks & Tools
  { name: 'React.js',    icon: 'Atom',        category: 'Frameworks' },
  { name: 'Next.js',     icon: 'Zap',         category: 'Frameworks' },
  { name: 'Node.js',     icon: 'Server',      category: 'Frameworks' },
  { name: 'Spring Boot', icon: 'Leaf',        category: 'Frameworks' },
  { name: 'FastAPI',     icon: 'Rocket',      category: 'Frameworks' },
  { name: 'LangChain',   icon: 'Link',        category: 'Frameworks' },
  { name: 'Express',     icon: 'Globe',       category: 'Frameworks' },

  // Infrastructure
  { name: 'Git/GitHub',  icon: 'GitBranch',   category: 'Tools' },
  { name: 'Docker',      icon: 'Container',   category: 'Tools' },
  { name: 'CI/CD',       icon: 'RefreshCw',   category: 'Tools' },
  { name: 'Redis',       icon: 'Flame',       category: 'Tools' },
  { name: 'Postman',     icon: 'Monitor',     category: 'Tools' },

  // AI/ML
  { name: 'LLM Integration',  icon: 'BrainCircuit', category: 'AI/ML' },
  { name: 'RAG',              icon: 'Search',        category: 'AI/ML' },
  { name: 'Agentic Workflows',icon: 'Network',       category: 'AI/ML' },
  { name: 'HuggingFace',      icon: 'Smile',         category: 'AI/ML' },
  { name: 'Transformer STT/TTS', icon: 'Mic',        category: 'AI/ML' },
  { name: 'whisper.cpp',      icon: 'AudioLines',    category: 'AI/ML' },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Flipkart GRiD 7.0',
    subtitle: 'National Semi-Finalist',
    description: 'Advanced to the National Semi-Finals out of 100,000+ participants nationwide — one of India\'s most competitive engineering hackathons — delivering a scalable backend solution under strict time and performance constraints.',
    icon: 'Trophy',
    highlight: '100,000+ Participants',
  },
  {
    title: 'LeetCode',
    subtitle: '500+ Problems Solved',
    description: 'Solved 500+ problems spanning dynamic programming, graphs, trees, and system-design-adjacent patterns; consistently ranked in the top tier in weekly contests.',
    icon: 'Code2',
    highlight: 'Top Tier Weekly',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Code in Place',
    issuer: 'Stanford University',
    description: 'Completed Stanford\'s Code in Place program — a rigorous course focused on programming fundamentals and problem solving using Python.',
    icon: 'GraduationCap',
  },
  {
    title: 'MERN Stack Workshop',
    issuer: 'BITS',
    description: 'Completed hands-on workshop covering MongoDB, Express.js, React, and Node.js full-stack development.',
    icon: 'Layers',
  },
];
