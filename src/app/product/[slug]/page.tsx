'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { CoursePageClient } from '@/components/course/course-page-client';
import { useCourse } from '@/hooks/use-course';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorMessage } from '@/components/ui/error-message';
import { Locale } from '@/i18n/config';

export default function CoursePage() {
  const params = useParams();
  const locale = useLocale() as Locale;
  const slug = params.slug as string;

  const { data: courseData, isLoading, error } = useCourse(slug, locale);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to load course data"
          description="Please try refreshing the page or contact support if the problem persists."
        />
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Course not found"
          description="The requested course could not be found."
        />
      </div>
    );
  }

  return (
    <CoursePageClient initialData={courseData} slug={slug} locale={locale} />
  );
}
