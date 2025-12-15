// Shared TypeScript types and interfaces

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  jobType?: string;
  description?: string;
  bullets?: string[];
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
  bullets?: string[];
  logo?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  publisher: string;
  pages?: string;
  year?: string;
  link?: string;
}

export interface Recognition {
  title: string;
  organization: string;
  year: string;
}

export interface TechStackItem {
  name: string;
  logo: string;
}

export interface SkillCategory {
  [category: string]: string[];
}
