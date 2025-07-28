'use client';

import { courseDataType } from '@/types/course.type';
import CourseHero from './course-hero';
import CourseSidebar from './course-sidebar';
import InstructorsSection from './course-instructors';
import CourseFeaturesSection from './course-features';
import FreePDFSection from './courese-free-pdf';
import { CoursePointers } from './course-pointers';
import { CourseDetailsSection } from './course-details';
import ExclusiveFeaturesSection from './courese-exclusive-features-seciton';
import StickyPricingCard from './sticky-pricing-card';
import CourseStickyNavigation from './course-sticky-navigation';

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

  const instructorSection = sections.find((s) => s.type === 'instructors');
  console.log('instructior', instructorSection);
  const featuresSection = sections.find((s) => s.type === 'features');
  const groupJoinSection = sections.find(
    (s) => s.type === 'group_join_engagement'
  );
  const pointersSection = sections.find((s) => s.type === 'pointers');

  const aboutSection = sections.find((s) => s.type === 'about');
  const exclusiveFeaturesSection = sections.find(
    (s) => s.type === 'feature_explanations'
  );

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
      <main className="container px-6 mx-auto grid grid-cols-9 ">
        <section className=" md:col-span-6  px-8">
          {/* Sticky Navigation for desktop */}
          <div className="sticky top-[65px] z-20 hidden bg-white md:block">
            <div className="tenms-carousel relative light right">
              <div className="w-full overflow-hidden">
                <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden">
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
                <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
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
          {instructorSection && (
            <InstructorsSection section={instructorSection} />
          )}
          {featuresSection && (
            <CourseFeaturesSection section={featuresSection} />
          )}
          {groupJoinSection && <FreePDFSection section={groupJoinSection} />}
          {pointersSection && <CoursePointers sections={[pointersSection]} />}
          {aboutSection && <CourseDetailsSection sections={[aboutSection]} />}
          {exclusiveFeaturesSection && (
            <ExclusiveFeaturesSection section={exclusiveFeaturesSection} />
          )}
        </section>

        {/* Right Column - Sticky Pricing Card */}
        <div className="md:col-span-3">
          <StickyPricingCard course={courseData} />
        </div>
      </main>

      {/* Related Courses */}
      {/* <RelatedCoursesSection /> */}
    </div>
  );
}
