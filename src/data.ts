import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CodeGenie',
    description: 'An intelligent VS Code extension that streamlines development by generating code, providing inline completions, and enhancing productivity using large language models.',
    tags: ['VS Code API', 'TypeScript', 'LLM', 'Node.js'],
    githubUrl: 'https://github.com/gupvishesh/CodeGenie',
    image: 'https://picsum.photos/seed/codegenie/800/600'
  },
  {
    id: '2',
    title: 'AI Voice Receptionist',
    description: 'A low-latency, end-to-end speech-to-speech AI system using transformer-based STT and neural TTS, enabling production-grade GPU deployment under strict real-time constraints.',
    tags: ['Python', 'Transformers', 'ONNX', 'VAD', 'TTS'],
    githubUrl: 'https://github.com/gupvishesh',
    image: 'https://picsum.photos/seed/voiceai/800/600'
  },
  {
    id: '3',
    title: 'BlogGenie',
    description: 'An AI-powered platform that generates content ideas, refines drafts, and maintains a consistent pipeline of engaging, high-quality blog posts for creators.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    githubUrl: 'https://github.com/gupvishesh',
    liveUrl: 'https://blog-genie-ps.vercel.app/blogGenie',
    image: 'https://picsum.photos/seed/bloggenie/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'C/C++', icon: 'Code2', category: 'Languages' },
  { name: 'Python', icon: 'Terminal', category: 'Languages' },
  { name: 'Java', icon: 'Coffee', category: 'Languages' },
  { name: 'JavaScript', icon: 'FileCode', category: 'Languages' },
  { name: 'React.js', icon: 'Atom', category: 'Frameworks' },
  { name: 'Next.js', icon: 'Zap', category: 'Frameworks' },
  { name: 'Node.js', icon: 'Server', category: 'Frameworks' },
  { name: 'Express', icon: 'Globe', category: 'Frameworks' },
  { name: 'Git/GitHub', icon: 'GitBranch', category: 'Tools' },
  { name: 'Docker', icon: 'Container', category: 'Tools' },
  { name: 'Postman', icon: 'Monitor', category: 'Tools' },
  { name: 'MySQL', icon: 'Database', category: 'Databases' },
  { name: 'MongoDB', icon: 'Database', category: 'Databases' },
  { name: 'Redis', icon: 'Flame', category: 'Databases' }
];
