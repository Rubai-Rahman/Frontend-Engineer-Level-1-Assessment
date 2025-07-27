import { useQuery } from '@tanstack/react-query';
import { courseService } from '@/lib/services/course.service';
import { Locale } from '@/i18n/config';

// Query keys
export const courseKeys = {
  all: ['courses'] as const,
  ielts: (locale: Locale) => [...courseKeys.all, 'ielts', locale] as const,
  bySlug: (slug: string, locale: Locale) =>
    [...courseKeys.all, slug, locale] as const,
};

// Get IELTS course data
export function useIeltsCourse(locale: Locale = 'en') {
  return useQuery({
    queryKey: courseKeys.ielts(locale),
    queryFn: () => courseService.getIeltsCourse(locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Get course by slug
export function useCourse(slug: string, locale: Locale = 'en') {
  return useQuery({
    queryKey: courseKeys.bySlug(slug, locale),
    queryFn: () => courseService.getCourseBySlug(slug, locale),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
