'use client';

import { useCourse } from '@/hooks/use-course';
import { CoursePageClient } from '@/components/course/course-page-client';
import { Locale } from '@/i18n/config';
import ProductPageSkeleton from '@/components/skeletons/product-page-skeleton';
import ApiError from '@/components/errors/api-error';
import { useLocale } from 'next-intl';

interface CourseProductPageProps {
  courseId: string;
}

export default function CourseProductPage({
  courseId,
}: CourseProductPageProps) {
  const locale = useLocale() as Locale;
  const {
    data: courseData,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useCourse(courseId, locale);

  if (isLoading) return <ProductPageSkeleton />;

  if (isError || !courseData) {
    return (
      <ApiError
        error={error}
        onRetry={refetch}
        isRetrying={isRefetching}
        showRetry
        showHomeButton
      />
    );
  }

  return <CoursePageClient courseData={courseData} />;
}
