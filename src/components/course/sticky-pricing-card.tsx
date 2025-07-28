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
      const originalCard = document.getElementById('variant');
      if (originalCard) {
        const rect = originalCard.getBoundingClientRect();
        // Show sticky card when original card is out of view (scrolled past)
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-[112px] right-4 z-50 w-full md:max-w-[330px] lg:max-w-[400px] bg-white shadow-lg rounded-lg border ${
        isVisible ? 'block' : 'hidden'
      } md:block`}
    >
      <div className="md:border">
        <div
          className="hidden p-1 md:block"
          id="trailer_sticky"
          style={{ display: 'none' }}
        >
          {/* Video carousel would go here if needed */}
        </div>

        <div className="hidden md:block">
          <PricingCard course={course} />
        </div>
      </div>

      <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row px-4 pb-4">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <span className="flex items-center justify-center ml-2 underline cursor-pointer text-primary">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <span className="ml-1">ফোন করুন (16910)</span>
        </span>
      </p>
    </section>
  );
}
