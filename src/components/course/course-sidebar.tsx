/* eslint-disable @next/next/no-img-element */
import { Phone } from 'lucide-react';
import VideoCarousel from './video-carousel'; // Import VideoCarousel
import { courseDataType } from '@/types/course.type';
import PricingCard from './pricing-card';

interface CourseSidebarProps {
  course: courseDataType;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  return (
    <section className="w-full md:max-w-[330px] lg:max-w-[400px] bg-card order-2 absolute ">
      <div className="">
        <div className="md:border">
          {/* Desktop Video Carousel */}
          <div className="hidden p-1 md:block" id="trailer_sticky">
            <VideoCarousel videos={course.media || []} />
          </div>

          {/* Pricing Card */}
          <div className="sticky top-10">
            <PricingCard course={course} />

            {/* Course Checklist / What's included */}
          </div>
        </div>
      </div>
      <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <span className="flex items-center justify-center ml-2 underline cursor-pointer text-primary">
          <Phone className="w-4 h-4" />{' '}
          <span className="ml-1">ফোন করুন (16910)</span>
        </span>
      </p>
    </section>
  );
}
