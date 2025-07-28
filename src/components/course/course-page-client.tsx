'use client';

import { courseDataType } from '@/types/course.type';
import CourseHeader from './course-header';

interface CoursePageClientProps {
  courseData: courseDataType;
}

export function CoursePageClient({ courseData }: CoursePageClientProps) {
  console.log('courseData', courseData);
  console.log('Checklist items:', courseData?.checklist?.length);
  console.log('Media items:', courseData?.media?.length);
  console.log('Sections:', courseData?.sections?.length);

  return (
    <div className=" ">
      <CourseHeader course={courseData} />
    </div>
  );
}
