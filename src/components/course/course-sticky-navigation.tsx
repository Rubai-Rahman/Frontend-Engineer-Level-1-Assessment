'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '@/types/course.type';

interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
}

interface CourseStickyNavigationProps {
  sections: {
    instructorSection?: Section;
    featuresSection?: Section;
    groupJoinSection?: Section;
    pointersSection?: Section;
    aboutSection?: Section;
    exclusiveFeaturesSection?: Section;
  };
}

export default function CourseStickyNavigation({
  sections,
}: CourseStickyNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Define navigation items based on available sections
  const navigationItems: NavigationItem[] = useMemo(
    () => [
      { id: 'overview', label: 'Overview', sectionId: 'overview-section' },
      ...(sections.instructorSection
        ? [
            {
              id: 'instructors',
              label: 'Course instructor',
              sectionId: 'instructors-section',
            },
          ]
        : []),
      ...(sections.featuresSection
        ? [
            {
              id: 'features',
              label: 'How the course is laid out',
              sectionId: 'features-section',
            },
          ]
        : []),
      ...(sections.groupJoinSection
        ? [
            {
              id: 'free-pdf',
              label: 'Free items',
              sectionId: 'free-pdf-section',
            },
          ]
        : []),
      ...(sections.pointersSection
        ? [
            {
              id: 'pointers',
              label: 'What you will learn',
              sectionId: 'pointers-section',
            },
          ]
        : []),
      ...(sections.aboutSection
        ? [{ id: 'about', label: 'Course details', sectionId: 'about-section' }]
        : []),
      ...(sections.exclusiveFeaturesSection
        ? [
            {
              id: 'exclusive',
              label: 'Exclusive Feature',
              sectionId: 'exclusive-section',
            },
          ]
        : []),
    ],
    [sections]
  );

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle horizontal scroll
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  // Update scroll button states
  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  // Update scroll buttons on container scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleContainerScroll = () => updateScrollButtons();
    container.addEventListener('scroll', handleContainerScroll);

    // Initial check
    updateScrollButtons();

    return () => container.removeEventListener('scroll', handleContainerScroll);
  }, []);

  return (
    <div className="sticky top-[65px] z-20 hidden  md:block border-b">
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => handleScroll('left')}
          className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 bg-muted text-primary shadow-md rounded-full transition-opacity ${
            canScrollLeft
              ? 'opacity-100 cursor-pointer'
              : 'opacity-30 pointer-events-none'
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => handleScroll('right')}
          className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 bg-muted text-primary shadow-md rounded-full transition-opacity ${
            canScrollRight
              ? 'opacity-100 cursor-pointer'
              : 'opacity-30 pointer-events-none'
          }`}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Navigation container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <ul className="flex my-4 flex-nowrap min-w-max">
            {navigationItems.map((item) => (
              <li key={item.id} className="flex-shrink-0">
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    scrollToSection(item.sectionId);
                  }}
                  className={`text-nowrap px-4 py-2 text-base transition-colors relative ${
                    activeSection === item.id
                      ? 'text-primary font-medium'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
