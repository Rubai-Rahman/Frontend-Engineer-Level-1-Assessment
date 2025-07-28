// 10 Minute School API Types
export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  id: number;
  title: string;
  description?: string;
  icon?: string;
  text: string;
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
  name: string;
  value: string;
  primary: string;
  secondary?: string;
  price?: string;
}

export interface Section {
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
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: unknown[];
  // Legacy properties for backward compatibility
  id?: number;
  title?: string;
  content?: string;
  data?: unknown;
  items?: unknown[];
}

export interface InstructorType {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: {
    description: string;
    name: string;
    short_description: string;
    image: string;
    slug: string;
    has_instructor_page: boolean;
  }[];
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
