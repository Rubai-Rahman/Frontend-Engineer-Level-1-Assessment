'use client';

import { courseDataType } from '@/types/course.type';
import CourseHero from './course-hero';
import CourseSidebar from './course-sidebar';

interface CoursePageClientProps {
  courseData: courseDataType;
}

export function CoursePageClient({ courseData }: CoursePageClientProps) {
  console.log('courseData', courseData);
  console.log('Checklist items:', courseData?.checklist?.length);
  console.log('Media items:', courseData?.media?.length);
  console.log('Sections:', courseData?.sections?.length);
  // Get all sections
  const sections = courseData.sections || [];
  const offersSection = sections.find((s) => s.type === 'offers');
  const instructorSection = sections.find((s) => s.type === 'instructors');
  const featuresSection = sections.find((s) => s.type === 'features');
  const groupJoinSection = sections.find(
    (s) => s.type === 'group_join_engagement'
  );
  const pointersSection = sections.find((s) => s.type === 'pointers');
  const contentPreviewSection = sections.find(
    (s) => s.type === 'content_preview'
  );
  const aboutSection = sections.find((s) => s.type === 'about');
  const exclusiveFeaturesSection = sections.find(
    (s) => s.type === 'feature_explanations'
  );
  const freeItemsSection = sections.find((s) => s.type === 'free_items');
  const certificateSection = sections.find((s) => s.type === 'certificate');
  const bundleCertificateSection = sections.find(
    (s) => s.type === 'bundle_certificate'
  );
  const testimonialsSection = sections.find((s) => s.type === 'testimonials');
  const requirementsSection = sections.find((s) => s.type === 'requirements');
  const paymentSection = sections.find((s) => s.type === 'how_to_pay');
  const faqSection = sections.find((s) => s.type === 'faq');

  return (
    <div className="min-h-screen">
      <div
        id="skills-landing"
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-9 gap-4 px-6 py-30">
          {/* Left Column - Course Info (CourseHero content) */}
          <div className="md:col-span-6">
            <CourseHero course={courseData} />
          </div>

          {/* Right Column - Sidebar (CourseSidebar) */}
          <div className="md:col-span-3">
            <CourseSidebar course={courseData} />
          </div>
        </div>
      </div>

      {/* Main Content below the hero/sidebar */}
      <main className="container flex flex-col gap-4 md:flex-row md:gap-12 overflow-hidden">
        <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {/* Sticky Navigation for desktop */}
          <div className="bg-white md:block">
            <div className="tenms-carousel relative light right">
              <div className="w-full overflow-hidden">
                <div className="absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    fill="none"
                    viewBox="0 0 33 32"
                    className="xl:mr-[-40px]"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.5"
                      fillRule="evenodd"
                      d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    fill="none"
                    viewBox="0 0 33 32"
                    className="rotate-180 xl:ml-[-40px]"
                  >
                    <path
                      fill="#000"
                      fillOpacity="0.5"
                      fillRule="evenodd"
                      d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                <ul className="flex my-4 border-b flex-nowrap">
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Overview</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Course instructor</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>How the course is laid out</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>What you will learn</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Course details</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Exclusive Feature</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Free items</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>Students opinion</button>
                  </li>
                  <li className="text-nowrap p-2 text-base text-gray-600">
                    <button>FAQ</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-[140px] -mt-[140px]">
            {/* This offset is for the sticky nav */}

            {/* Course Sections - Placeholder content until components are implemented */}
            <div className="space-y-8">
              {offersSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {offersSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: offersSection.content }}
                  />
                </section>
              )}

              {instructorSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {instructorSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: instructorSection.content,
                    }}
                  />
                </section>
              )}

              {featuresSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {featuresSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: featuresSection.content,
                    }}
                  />
                </section>
              )}

              {groupJoinSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {groupJoinSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: groupJoinSection.content,
                    }}
                  />
                </section>
              )}

              {pointersSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {pointersSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pointersSection.content,
                    }}
                  />
                </section>
              )}

              {contentPreviewSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {contentPreviewSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contentPreviewSection.content,
                    }}
                  />
                </section>
              )}

              {aboutSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {aboutSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: aboutSection.content }}
                  />
                </section>
              )}

              {exclusiveFeaturesSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {exclusiveFeaturesSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: exclusiveFeaturesSection.content,
                    }}
                  />
                </section>
              )}

              {freeItemsSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {freeItemsSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: freeItemsSection.content,
                    }}
                  />
                </section>
              )}

              {certificateSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {certificateSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: certificateSection.content,
                    }}
                  />
                </section>
              )}

              {bundleCertificateSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {bundleCertificateSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: bundleCertificateSection.content,
                    }}
                  />
                </section>
              )}

              {testimonialsSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {testimonialsSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: testimonialsSection.content,
                    }}
                  />
                </section>
              )}

              {requirementsSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {requirementsSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: requirementsSection.content,
                    }}
                  />
                </section>
              )}

              {paymentSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {paymentSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: paymentSection.content }}
                  />
                </section>
              )}

              {faqSection && (
                <section className="p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {faqSection.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: faqSection.content }}
                  />
                </section>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Related Courses */}
      {/* <RelatedCoursesSection /> */}
    </div>
  );
}
