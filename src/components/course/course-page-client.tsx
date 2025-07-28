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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-9 gap-4 px-8 py-2 md:py-30 ">
          {/* Left Column - Course Info (CourseHero content) */}
          <div className="col-span-1 md:col-span-6 ">
            <CourseHero course={courseData} />
          </div>

          {/* Right Column - Sidebar (CourseSidebar) */}
          <div className="col-span-1 md:col-span-3">
            <CourseSidebar course={courseData} />
          </div>
        </div>
      </div>

      {/* Main Content below the hero/sidebar */}
      <main className="container mx-auto grid grid-cols-9 ">
        <section className=" md:col-span-6  px-6">
          {/* Sticky Navigation for desktop */}
          <CourseStickyNavigation
            sections={{
              instructorSection,
              featuresSection,
              groupJoinSection,
              pointersSection,
              aboutSection,
              exclusiveFeaturesSection,
            }}
          />

          <div id="overview-section" className="py-4">
            {/* Overview content can be added here if needed */}
          </div>
          {instructorSection && (
            <div id="instructors-section">
              <InstructorsSection section={instructorSection} />
            </div>
          )}
          {featuresSection && (
            <div id="features-section">
              <CourseFeaturesSection section={featuresSection} />
            </div>
          )}
          {groupJoinSection && (
            <div id="free-pdf-section">
              <FreePDFSection section={groupJoinSection} />
            </div>
          )}
          {pointersSection && (
            <div id="pointers-section">
              <CoursePointers sections={[pointersSection]} />
            </div>
          )}
          {aboutSection && (
            <div id="about-section">
              <CourseDetailsSection sections={[aboutSection]} />
            </div>
          )}
          {exclusiveFeaturesSection && (
            <div id="exclusive-section">
              <ExclusiveFeaturesSection section={exclusiveFeaturesSection} />
            </div>
          )}
        </section>

        {/* Right Column - Sticky Pricing Card */}
        <div className="md:col-span-3">
          <StickyPricingCard course={courseData} />
        </div>
      </main>
    </div>
  );
}
