'use client';

import { CourseTrailer } from '@/components/course/course-trailer';
import { CourseInstructors } from '@/components/course/course-instructors';
import { CourseFeatures } from '@/components/course/course-features';
import { CoursePointers } from '@/components/course/course-pointers';
import { CourseDetails } from '@/components/course/course-details';
import { CourseChecklist } from '@/components/course/course-checklist';
import { CourseCTA } from '@/components/course/course-cta';
import { CourseTestimonials } from '@/components/course/course-testimonials';
import { CourseFAQ } from '@/components/course/course-faq';
import { CourseOffers } from '@/components/course/course-offers';
import { CourseContentPreview } from '@/components/course/course-content-preview';
import { CourseFeatureExplanations } from '@/components/course/course-feature-explanations';
import { CourseRequirements } from '@/components/course/course-requirements';
import { CourseFreeItems } from '@/components/course/course-free-items';
import { CourseCertificate } from '@/components/course/course-certificate';
import { CourseGroupEngagement } from '@/components/course/course-group-engagement';
import { CourseHowToPay } from '@/components/course/course-how-to-pay';
import { CourseMediaGallery } from '@/components/course/course-media-gallery';

import { CourseData } from '@/lib/types';
import { Locale } from '@/i18n/config';

interface CoursePageClientProps {
  initialData: CourseData;
  slug: string;
  locale: Locale;
}

export function CoursePageClient({
  initialData,
  slug,
  locale,
}: CoursePageClientProps) {
  // Use the initialData passed from the server
  const currentData = initialData;

  // Debug: Log all available sections
  console.log(
    'All sections:',
    currentData?.sections?.map((s) => ({ type: s.type, name: s.name }))
  );
  console.log('Media items:', currentData?.media?.length);
  console.log('Checklist items:', currentData?.checklist?.length);

  // Extract sections by type (with safety checks)
  const instructorSections =
    currentData.sections?.filter((section) => section.type === 'instructors') ||
    [];
  const featureSections =
    currentData.sections?.filter((section) => section.type === 'features') ||
    [];
  const pointerSections =
    currentData.sections?.filter((section) => section.type === 'pointers') ||
    [];
  const aboutSections =
    currentData.sections?.filter((section) => section.type === 'about') || [];
  const testimonialSections =
    currentData.sections?.filter(
      (section) => section.type === 'testimonials'
    ) || [];
  const faqSections =
    currentData.sections?.filter((section) => section.type === 'faq') || [];
  const offerSections =
    currentData.sections?.filter((section) => section.type === 'offers') || [];
  const contentPreviewSections =
    currentData.sections?.filter(
      (section) => section.type === 'content_preview'
    ) || [];
  const featureExplanationSections =
    currentData.sections?.filter(
      (section) => section.type === 'feature_explanations'
    ) || [];
  const requirementSections =
    currentData.sections?.filter(
      (section) => section.type === 'requirements'
    ) || [];
  const freeItemSections =
    currentData.sections?.filter((section) => section.type === 'free_items') ||
    [];
  const certificateSections =
    currentData.sections?.filter((section) => section.type === 'certificate') ||
    [];
  const bundleCertificateSections =
    currentData.sections?.filter(
      (section) => section.type === 'bundle_certificate'
    ) || [];
  const groupEngagementSections =
    currentData.sections?.filter(
      (section) => section.type === 'group_join_engagement'
    ) || [];
  const howToPaySections =
    currentData.sections?.filter((section) => section.type === 'how_to_pay') ||
    [];
  const bundleItemSections =
    currentData.sections?.filter(
      (section) => section.type === 'bundle_items'
    ) || [];

  // Find trailer video (with safety check)
  const media = currentData?.media || [];
  const trailerVideo = media.find(
    (media) =>
      media.name === 'preview_gallery' && media.resource_type === 'video'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header with Language Switcher */}

      {/* Course Header - Optional as per wireframe */}
      {/* <CourseHeader
        title={currentData.title}
        description={currentData.description}
      /> */}

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Special Offers */}
        {offerSections.length > 0 && (
          <div className="mb-8 animate-bounce">
            <CourseOffers sections={offerSections} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Title Section */}
            <div className="bg-gradient-to-r from-white via-blue-50 to-purple-50 rounded-2xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-transparent rounded-full -ml-12 -mb-12"></div>
              <div className="relative">
                <div className="flex items-start mb-4">
                  <div className="w-2 h-16 bg-gradient-to-b from-green-500 via-blue-500 to-purple-600 rounded-full mr-6"></div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Premium Course
                      </span>
                      <div className="ml-3 flex items-center text-yellow-500">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600 ml-1">
                          4.9/5
                        </span>
                      </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                      {currentData?.title || 'Course Title'}
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Master your skills with expert guidance and comprehensive
                      materials
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Description Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Course Overview
                </h2>
              </div>
              <div
                className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html:
                    currentData?.description ||
                    '<p>Course description will be loaded...</p>',
                }}
              />
            </div>

            {/* Course Instructors */}
            {instructorSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-green-50 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <CourseInstructors sections={instructorSections} />
              </div>
            )}

            {/* How the course is laid out */}
            {featureSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <CourseFeatures sections={featureSections} />
              </div>
            )}

            {/* What you will learn by doing the course */}
            {pointerSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-purple-50 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <CoursePointers sections={pointerSections} />
              </div>
            )}

            {/* Content Preview */}
            {contentPreviewSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-indigo-50 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
                <CourseContentPreview sections={contentPreviewSections} />
              </div>
            )}

            {/* Course Details */}
            {aboutSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CourseDetails sections={aboutSections} />
              </div>
            )}

            {/* Feature Explanations */}
            {featureExplanationSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-teal-50 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
                <CourseFeatureExplanations
                  sections={featureExplanationSections}
                />
              </div>
            )}

            {/* Free Items */}
            {freeItemSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-emerald-50 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <CourseFreeItems sections={freeItemSections} />
              </div>
            )}

            {/* Certificate */}
            {certificateSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-yellow-50 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300">
                <CourseCertificate sections={certificateSections} />
              </div>
            )}

            {/* Group Engagement */}
            {groupEngagementSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-pink-50 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                <CourseGroupEngagement sections={groupEngagementSections} />
              </div>
            )}

            {/* Student Testimonials */}
            {testimonialSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-orange-50 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                <CourseTestimonials sections={testimonialSections} />
              </div>
            )}

            {/* Requirements */}
            {requirementSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-red-50 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300">
                <CourseRequirements sections={requirementSections} />
              </div>
            )}

            {/* How to Pay */}
            {howToPaySections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
                <CourseHowToPay sections={howToPaySections} />
              </div>
            )}

            {/* FAQ */}
            {faqSections.length > 0 && (
              <div className="bg-gradient-to-r from-white to-violet-50 rounded-2xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300">
                <CourseFAQ sections={faqSections} />
              </div>
            )}
          </div>

          {/* Right Column - Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Course Trailer */}
            {trailerVideo && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CourseTrailer video={trailerVideo} />
              </div>
            )}

            {/* Media Gallery */}
            {media.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CourseMediaGallery media={media} />
              </div>
            )}

            {/* Enhanced CTA Section */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 overflow-hidden sticky top-24">
              <CourseCTA
                ctaText={currentData?.cta_text}
                courseData={currentData}
              />
            </div>

            {/* Enhanced Check Lists */}
            {currentData?.checklist && currentData.checklist.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CourseChecklist checklist={currentData.checklist} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
