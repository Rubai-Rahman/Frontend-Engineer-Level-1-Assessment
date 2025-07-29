'use client';

import { useCourse } from '@/hooks/use-course';
import { CoursePageClient } from '@/components/course/course-page-client';
import { Locale } from '@/i18n/config';
import ProductPageSkeleton from '@/components/skeletons/product-page-skeleton';
import ApiError from '@/components/errors/api-error';
import { useLocale } from 'next-intl';

interface ProductPageProps {
  slug: string;
}

export default function ProductPage({ slug }: ProductPageProps) {
  const locale = useLocale() as Locale;
  const {
    data: courseData,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useCourse(slug, locale);

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
