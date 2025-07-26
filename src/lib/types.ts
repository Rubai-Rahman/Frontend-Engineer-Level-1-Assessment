// 10 Minute School API Types
export interface Medium {
  id: number;
  type: string;
  url: string;
  title?: string;
  thumbnail?: string;
}

export interface Checklist {
  id: number;
  title: string;
  description?: string;
  icon?: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
}

export interface CtaText {
  primary: string;
  secondary?: string;
  price?: string;
}

export interface Section {
  id: number;
  type: 'instructor' | 'features' | 'pointers' | 'about';
  title: string;
  content: string;
  data?: any;
  items?: any[];
}

export interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  experience?: string;
  expertise?: string[];
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

// Language type
export type Language = 'en' | 'bn';

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
