export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'AI/ML';
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlight?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: string;
}
