import { useQuery } from '@tanstack/react-query';
import { courseService } from '@/lib/services/course.service';
import { Language } from '@/lib/types';

// Query keys
export const courseKeys = {
  all: ['courses'] as const,
  ielts: (lang: Language) => [...courseKeys.all, 'ielts', lang] as const,
  bySlug: (slug: string, lang: Language) =>
    [...courseKeys.all, slug, lang] as const,
};

// Get IELTS course data
export function useIeltsCourse(lang: Language = 'en') {
  return useQuery({
    queryKey: courseKeys.ielts(lang),
    queryFn: () => courseService.getIeltsCourse(lang),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Get course by slug
export function useCourse(slug: string, lang: Language = 'en') {
  return useQuery({
    queryKey: courseKeys.bySlug(slug, lang),
    queryFn: () => courseService.getCourseBySlug(slug, lang),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
