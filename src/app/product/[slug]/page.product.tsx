'use client';

import { useCourse } from '@/hooks/use-course';
import { CoursePageClient } from '@/components/course/course-page-client';
import { Locale } from '@/i18n/config';
import ProductPageSkeleton from '@/components/skeletons/product-page-skeleton';
import ApiError from '@/components/errors/api-error';

interface ProductPageProps {
  slug: string;
  locale: Locale;
}

export default function ProductPage({ slug, locale }: ProductPageProps) {
  const {
    data: courseData,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useCourse(slug, locale);

  // Loading state with skeleton
  if (isLoading) return <ProductPageSkeleton />;

  // Error state with retry option
  if (isError || !courseData) {
    return (
      <ApiError
        error={error}
        onRetry={refetch}
        isRetrying={isRefetching}
        showRetry={true}
        showHomeButton={true}
      />
    );
  }

  return (
    <CoursePageClient initialData={courseData} slug={slug} locale={locale} />
  );
}
