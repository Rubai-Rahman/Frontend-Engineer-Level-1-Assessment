// 10 Minute School API Types
export interface Medium {
  id: number;
  type: string;
  url: string;
  title?: string;
  thumbnail?: string;
  name?: string;
  resource_type?: string;
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
  type:
    | 'instructor'
    | 'instructors'
    | 'features'
    | 'pointers'
    | 'about'
    | 'testimonials'
    | 'faq'
    | 'offers'
    | 'content_preview'
    | 'feature_explanations'
    | 'requirements'
    | 'free_items'
    | 'certificate'
    | 'bundle_certificate'
    | 'group_join_engagement'
    | 'how_to_pay'
    | 'bundle_items';
  title: string;
  content: string;
  data?: unknown;
  items?: unknown[];
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

export interface courseDataType {
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
