import { courseDataType } from '@/types/course.type';
import { Award, Clock, Star, Users } from 'lucide-react';
import VideoCarousel from './video-carousel';

interface CourseHeaderProps {
  course: courseDataType;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  const participantsInfo = course.checklist?.find((item) =>
    item?.text.includes('কোর্সটি করছেন')
  );
  const timeInfo = course.checklist?.find(
    (item) =>
      item.text.includes('সময় লাগবে') ||
      item.text.includes('ঘন্টা') ||
      item?.title?.includes('সময়')
  );
  const videoInfo = course.checklist?.find(
    (item) => item.text.includes('ভিডিও') || item?.title?.includes('ভিডিও')
  );

  return (
    <section className="bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-9 gap-8 items-start">
          {/* Left Column - Course Info */}
          <div className="col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 font-semibold">4.8</span>
                <span className="text-blue-200">(2,450+ রিভিউ)</span>
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {course.title}
            </h1>

            <div
              className="text-lg mb-6 text-blue-100 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <Users className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm text-blue-200">শিক্ষার্থী</div>
                <div className="font-bold">
                  {participantsInfo?.text ||
                    participantsInfo?.title ||
                    '৩৩,০০৭+'}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm text-blue-200">সময়</div>
                <div className="font-bold">
                  {timeInfo?.text || timeInfo?.title || '৫০ ঘন্টা'}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <Award className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm text-blue-200">ভিডিও</div>
                <div className="font-bold">
                  {videoInfo?.text ||
                    videoInfo?.title ||
                    `${
                      course.media?.filter((m) => m.resource_type === 'video')
                        .length || 0
                    }টি`}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <Award className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm text-blue-200">সার্টিফিকেট</div>
                <div className="font-bold">হ্যাঁ</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Carousel */}
          <div className="col-span-3">
            <VideoCarousel videos={course.media} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeader;
