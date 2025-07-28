/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import VideoCarousel from './video-carousel'; // Import VideoCarousel
import { courseDataType } from '@/types/course.type';

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
          <div className="sticky top-10 bg-card">
            <div className="w-full p-4 md:h-auto" id="variant">
              <div className="relative md:static">
                <div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between md:flex-col md:items-start">
                      <div className="md:mb-3">
                        <div className="inline-block text-2xl font-semibold">
                          ৳3850
                        </div>
                        <span className="infline-flex">
                          <del className="ml-2 text-base font-normal md:text-xl">
                            ৳5000
                          </del>
                          <div className="c-Tukmu inline-block">
                            <p className="card-price">1150 ৳ ছাড়</p>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2"></div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/80 w-full">
                    {course.cta_text.name || 'Enroll'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Checklist / What's included */}
            <div className="hidden md:block pb-6">
              <div className="grid py-2 md:p-4">
                <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                {course.checklist?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-3 leading-5"
                  >
                    <img
                      alt="icon"
                      data-original-src={
                        item.icon ||
                        '/placeholder.svg?height=20&width=20&query=checklist icon'
                      }
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: 'transparent' }}
                      src={
                        item.icon ||
                        '/placeholder.svg?height=20&width=20&query=checklist icon'
                      }
                    />
                    <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                      {item.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
          <Phone className="w-4 h-4" />{' '}
          <span className="ml-1">ফোন করুন (16910)</span>
        </span>
      </p>
    </section>
  );
}
