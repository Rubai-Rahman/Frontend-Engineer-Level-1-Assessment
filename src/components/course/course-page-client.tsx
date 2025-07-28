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
