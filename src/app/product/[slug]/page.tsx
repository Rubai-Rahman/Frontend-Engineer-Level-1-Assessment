import { getLocale } from 'next-intl/server';
import { getCachedCourseData } from '@/lib/services/course.service';
import { courseKeys } from '@/hooks/use-course';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import ProductPage from './page.product';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const { slug } = params;

  try {
    const courseData = await getCachedCourseData(slug, locale);

    if (!courseData) {
      return {
        title: 'Course Not Found',
        description: 'The requested course could not be found.',
      };
    }

    return {
      title: courseData.seo?.title || courseData.title,
      description: courseData.seo?.description || courseData.description,
      keywords: courseData.seo?.keywords,
      openGraph: {
        title: courseData.seo?.title || courseData.title,
        description: courseData.seo?.description || courseData.description,
        url: `https://10minuteschool.com/product/${courseData.slug}`,
        type: 'website',
        images: [
          {
            url:
              courseData.media?.find((m) => m.type === 'og_image')?.url ||
              '/default-og.jpg',
            width: 1200,
            height: 630,
            alt: courseData.seo?.title || courseData.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: courseData.seo?.title || courseData.title,
        description: courseData.seo?.description || courseData.description,
        images: [
          courseData.media?.find((m) => m.type === 'og_image')?.url ||
            '/default-og.jpg',
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
}

export default async function Page({ params }: PageProps) {
  const locale = (await getLocale()) as Locale;
  const { slug } = await params;

  const queryClient = new QueryClient();

  // Prefetch data on server for hydration
  try {
    await queryClient.prefetchQuery({
      queryKey: courseKeys.bySlug(slug, locale),
      queryFn: () => getCachedCourseData(slug, locale),
    });
  } catch (error) {
    // Optional: log error or handle gracefully
    console.error('Prefetch failed', error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage params={{ slug, locale }} />
    </HydrationBoundary>
  );
}
