import api from '@/lib/api';
import { CourseData, Language } from '@/lib/types';

export const courseService = {
  // Get IELTS course data
  getIeltsCourse: async (lang: Language = 'en'): Promise<CourseData> => {
    const response = await api.get('/products/ielts-course', {
      params: { lang },
    });
    // API returns data in nested structure: { data: { data: CourseData } }
    return response.data.data;
  },

  // Get course by slug (for future extensibility)
  getCourseBySlug: async (
    slug: string,
    lang: Language = 'en'
  ): Promise<CourseData> => {
    const response = await api.get(`/products/${slug}`, {
      params: { lang },
    });
    // API returns data in nested structure: { data: { data: CourseData } }
    return response.data.data;
  },
};
