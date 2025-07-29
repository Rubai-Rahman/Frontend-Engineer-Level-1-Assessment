// app/products/[slug]/page.tsx
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
import ProductPage from './page-product';
import { Medium } from '@/types/course.type';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const { slug } = await params;
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
              courseData.media?.find(
                (m: Medium) => m.resource_type === 'og_image'
              )?.resource_value ?? '/default-og.jpg',
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
          courseData.media?.find((m: Medium) => m.resource_type === 'og_image')
            ?.resource_value ?? '/default-og.jpg',
        ],
      },
    };
  } catch {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: courseKeys.bySlug(slug, locale),
      queryFn: () => getCachedCourseData(slug, locale),
    });
  } catch (error) {
    console.error('Prefetch failed:', (error as Error).message);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage slug={slug} />
    </HydrationBoundary>
  );
}
