import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Study Hub',
    description: 'A full-stack collaborative learning platform with real-time study rooms and AI-powered summarization.',
    tags: ['React', 'Node.js', 'Firebase', 'Gemini API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://picsum.photos/seed/study/800/600'
  },
  {
    id: '2',
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracker with interactive charts and portfolio management features.',
    tags: ['Next.js', 'Tailwind CSS', 'D3.js', 'CoinGecko API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://picsum.photos/seed/crypto/800/600'
  },
  {
    id: '3',
    title: 'Smart Attendance System',
    description: 'A facial recognition-based attendance system for college students using OpenCV and Python.',
    tags: ['Python', 'OpenCV', 'Flask', 'SQLite'],
    githubUrl: 'https://github.com',
    image: 'https://picsum.photos/seed/face/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', icon: 'Code2', category: 'Languages' },
  { name: 'TypeScript', icon: 'FileCode', category: 'Languages' },
  { name: 'Python', icon: 'Terminal', category: 'Languages' },
  { name: 'Java', icon: 'Coffee', category: 'Languages' },
  { name: 'React', icon: 'Atom', category: 'Frameworks' },
  { name: 'Node.js', icon: 'Server', category: 'Frameworks' },
  { name: 'Express', icon: 'Zap', category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: 'Palette', category: 'Frameworks' },
  { name: 'Git', icon: 'GitBranch', category: 'Tools' },
  { name: 'Docker', icon: 'Container', category: 'Tools' },
  { name: 'VS Code', icon: 'Monitor', category: 'Tools' },
  { name: 'PostgreSQL', icon: 'Database', category: 'Databases' },
  { name: 'MongoDB', icon: 'Database', category: 'Databases' },
  { name: 'Firebase', icon: 'Flame', category: 'Databases' }
];
