import { cache } from 'react';
import api from '@/lib/api';
import { CourseData } from '@/lib/types';
import { Locale } from '@/i18n/config';

export const courseService = {
  // Get course by slug
  getCourseBySlug: async (
    slug: string,
    locale: Locale = 'bn'
  ): Promise<CourseData> => {
    const response = await api.get(`/products/${slug}`, {
      params: { lang: locale },
    });
    return response.data.data;
  },
};

// Cached version for server-side usage to avoid duplicate API calls
export const getCachedCourseData = cache(
  async (slug: string, locale: Locale): Promise<CourseData> => {
    return await courseService.getCourseBySlug(slug, locale);
  }
);
