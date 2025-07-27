'use client';

import { courseDataType } from '@/types/course.type';

interface CoursePageClientProps {
  courseData: courseDataType;
}

export function CoursePageClient({ courseData }: CoursePageClientProps) {
  console.log('courseData', courseData);
  console.log('Checklist items:', courseData?.checklist?.length);

  // Extract sections by type
  const instructorSections =
    courseData.sections?.filter(
      (s) => s.type === 'instructor' || s.type === 'instructors'
    ) || [];
  const featureSections =
    courseData.sections?.filter((s) => s.type === 'features') || [];
  const pointerSections =
    courseData.sections?.filter((s) => s.type === 'pointers') || [];
  const aboutSections =
    courseData.sections?.filter((s) => s.type === 'about') || [];
  const testimonialSections =
    courseData.sections?.filter((s) => s.type === 'testimonials') || [];
  const faqSections =
    courseData.sections?.filter((s) => s.type === 'faq') || [];
  const offerSections =
    courseData.sections?.filter((s) => s.type === 'offers') || [];
  const contentPreviewSections =
    courseData.sections?.filter((s) => s.type === 'content_preview') || [];
  const featureExplanationSections =
    courseData.sections?.filter((s) => s.type === 'feature_explanations') || [];
  const requirementSections =
    courseData.sections?.filter((s) => s.type === 'requirements') || [];
  const freeItemSections =
    courseData.sections?.filter((s) => s.type === 'free_items') || [];
  const certificateSections =
    courseData.sections?.filter((s) => s.type === 'certificate') || [];
  const bundleCertificateSections =
    courseData.sections?.filter((s) => s.type === 'bundle_certificate') || [];
  const groupEngagementSections =
    courseData.sections?.filter((s) => s.type === 'group_join_engagement') ||
    [];
  const howToPaySections =
    courseData.sections?.filter((s) => s.type === 'how_to_pay') || [];
  const bundleItemSections =
    courseData.sections?.filter((s) => s.type === 'bundle_items') || [];

  // Trailer video
  const media = courseData?.media || [];
  const trailerVideo = media.find(
    (m) => m.name === 'preview_gallery' && m.resource_type === 'video'
  );

  return <div>hello</div>;
}
