import { Play } from 'lucide-react';
import YouTubePlayer from './youtube-player';
import { courseDataType } from '@/types/course.type';
import Image from 'next/image';

interface CourseHeroProps {
  course: courseDataType;
}

export default function CourseHero({ course }: CourseHeroProps) {
  const heroVideo = course.media?.find(
    (m) => m.resource_type === 'video' && m.name === 'preview_gallery'
  );

  return (
    <>
      {/* Mobile Video Carousel (hidden on md+) */}
      <div className="block mt-0 md:hidden">
        {heroVideo && (
          <YouTubePlayer
            videoId={heroVideo.resource_value}
            thumbnail={heroVideo.thumbnail_url}
            title={course.title}
          />
        )}
        {heroVideo && (
          <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
            {course.media
              .filter(
                (m) =>
                  m.resource_type === 'video' || m.resource_type === 'image'
              )
              .map((media, index) => (
                <div
                  key={index}
                  className="relative w-[55px] rounded cursor-pointer overflow-hidden"
                >
                  <img
                    src={
                      media.thumbnail_url ||
                      media.resource_value ||
                      `/placeholder.svg?height=50&width=86&query=video thumbnail`
                    }
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {media.resource_type === 'video' && (
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <Play className="w-4 h-4 text-white" fill="white" />
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Mobile Course Title/Description (hidden on md+)
      <div className="items-center block md:hidden">
        <h1 className="text-white mb-3 mt-3 text-sm font-semibold md:text-4xl">
          {course.title}
        </h1>
        <div
          className="mb-4 text-sm font-normal"
          dangerouslySetInnerHTML={{ __html: course.description || '' }}
        />
      </div> */}

      {/* Desktop Course Title/Description */}
      <h1 className="text-white mb-2 text-sm font-semibold md:text-4xl  md:block">
        {course.title}
      </h1>
      <div className="mb-2 block">
        <button className="flex flex-row flex-wrap gap-2 text-white hover:cursor-pointer">
          <Image
            className=""
            width={130}
            height={100}
            src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
            alt="Rating"
          />
          <span className="inline-block text-sm md:text-base">
            (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </span>
        </button>
      </div>
      <div className="block">
        <div
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: course.description || '' }}
        />
      </div>
    </>
  );
}
