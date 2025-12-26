// Types for the portfolio data

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  profileImage: string;
  profileImageFallback: string;
  resumeFile: string;
  badges: Badge[];
  typingTexts: string[];
}

export interface Badge {
  icon: string;
  text: string;
  color: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  level?: number;
  proficiency: number;
  gradient?: string;
  technologies: string[];
  category: 'technical' | 'soft' | 'language';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageFallback: string;
  tags: string[];
  tagColors: Record<string, string>;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string;
  };
  date?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  icon: string;
  link: string;
  description: string;
  skills: string[];
  type: 'certificate' | 'badge';
  hasImage?: boolean;
  imageUrl?: string;
  credlyBadgeId?: string;
}

export interface CertificationsData {
  certificates: Certificate[];
  badges: Certificate[];
}

export interface NavLink {
  label: string;
  path: string;
  icon: string;
}

export interface FloatingTag {
  icon: string;
  label: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  variant: 'warm' | 'cool' | 'pink' | 'dark' | 'light';
}
