'use client';

import { useState, useEffect } from 'react';
import { courseDataType } from '@/types/course.type';
import PricingCard from './pricing-card';

interface StickyPricingCardProps {
  course: courseDataType;
}

export default function StickyPricingCard({ course }: StickyPricingCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the FreePDFSection by its ID
      const freePdfSection = document.getElementById('free-pdf-section');
      if (freePdfSection) {
        const rect = freePdfSection.getBoundingClientRect();
        // Show sticky card when FreePDFSection reaches the top of the screen
        setIsVisible(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] 2xl:max-w-[475px] bg-card sticky top-30">
      <div className="sticky top-10 bg-card">
        <PricingCard course={course} />
      </div>
    </section>
  );
}
