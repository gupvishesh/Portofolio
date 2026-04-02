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
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases';
}
