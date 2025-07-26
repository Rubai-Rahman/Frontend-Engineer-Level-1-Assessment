import { CourseData } from '@/lib/types';

export const mockCourseData: CourseData = {
  slug: 'ielts-course',
  id: 1,
  title: 'IELTS Course by Munzereen Shahid',
  description: `
    <p>Master the IELTS exam with comprehensive preparation designed to help you achieve your target score. This course covers all four essential skills: Reading, Writing, Listening, and Speaking.</p>
    <p>Our expert-led program provides you with proven strategies, practice materials, and personalized feedback to ensure your success in the IELTS examination.</p>
  `,
  media: [
    {
      id: 1,
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'IELTS Course Introduction',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    },
  ],
  checklist: [
    {
      id: 1,
      title: 'Lifetime Access to Course Materials',
      description: 'Access all course content anytime, anywhere',
    },
    {
      id: 2,
      title: '50+ Practice Tests',
      description: 'Comprehensive practice tests for all sections',
    },
    {
      id: 3,
      title: 'Speaking Practice Sessions',
      description: 'One-on-one speaking practice with feedback',
    },
    {
      id: 4,
      title: 'Writing Feedback',
      description: 'Detailed feedback on your writing tasks',
    },
    {
      id: 5,
      title: 'Certificate of Completion',
      description: 'Official certificate upon course completion',
    },
  ],
  seo: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description:
      'Master IELTS with expert guidance from Munzereen Shahid. Comprehensive course covering all four skills: Reading, Writing, Listening, and Speaking.',
    keywords:
      'IELTS, English, Course, Munzereen Shahid, 10 Minute School, IELTS Preparation',
    og_title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    og_description: 'Master IELTS with expert guidance from Munzereen Shahid.',
    og_image: 'https://10minuteschool.com/images/ielts-course-og.jpg',
  },
  cta_text: {
    primary: 'Enroll Now',
    secondary: 'Try Free Preview',
    price: '1000',
  },
  sections: [
    {
      id: 1,
      type: 'instructor',
      title: 'Meet Your Instructor',
      content: `
        <p><strong>Munzereen Shahid</strong> is a renowned IELTS expert with over 10 years of experience in helping students achieve their target scores.</p>
        <p>She has trained thousands of students and has an exceptional track record of success in IELTS preparation.</p>
      `,
      data: {
        instructors: [
          {
            name: 'Munzereen Shahid',
            title: 'IELTS Expert & Course Instructor',
            bio: 'Munzereen Shahid is a highly experienced IELTS trainer with a proven track record of helping students achieve band scores of 7+ consistently.',
            avatar: 'https://via.placeholder.com/150x150?text=MS',
            experience: '10+ years',
            expertise: [
              'IELTS Training',
              'English Language Teaching',
              'Test Preparation',
            ],
          },
        ],
      },
    },
    {
      id: 2,
      type: 'features',
      title: 'Course Structure',
      content: `
        <p>This comprehensive IELTS course is structured to provide systematic preparation for all four modules of the IELTS exam.</p>
      `,
      items: [
        {
          title: 'Reading Module',
          description:
            'Master reading comprehension with various question types',
          duration: '15 hours',
        },
        {
          title: 'Writing Module',
          description: 'Learn Task 1 and Task 2 writing strategies',
          duration: '12 hours',
        },
        {
          title: 'Listening Module',
          description: 'Improve listening skills with practice tests',
          duration: '10 hours',
        },
        {
          title: 'Speaking Module',
          description: 'Build confidence in speaking with mock interviews',
          duration: '8 hours',
        },
      ],
    },
    {
      id: 3,
      type: 'pointers',
      title: 'Learning Outcomes',
      content: `
        <p>By the end of this course, you will have mastered all the essential skills needed to excel in the IELTS examination.</p>
      `,
      items: [
        {
          title: 'Achieve your target band score (7+ guaranteed)',
          text: 'Achieve your target band score (7+ guaranteed)',
        },
        {
          title: 'Master all four IELTS skills comprehensively',
          text: 'Master all four IELTS skills comprehensively',
        },
        {
          title: 'Learn proven test-taking strategies and techniques',
          text: 'Learn proven test-taking strategies and techniques',
        },
        {
          title: 'Build confidence through extensive practice',
          text: 'Build confidence through extensive practice',
        },
        {
          title: 'Understand IELTS exam format and requirements',
          text: 'Understand IELTS exam format and requirements',
        },
        {
          title: 'Improve English language proficiency overall',
          text: 'Improve English language proficiency overall',
        },
      ],
    },
    {
      id: 4,
      type: 'about',
      title: 'About This Course',
      content: `
        <p>This IELTS preparation course is designed for students who want to achieve a high band score in the IELTS examination. The course covers all aspects of the test and provides comprehensive preparation materials.</p>
        <p>With expert instruction, practice materials, and personalized feedback, this course ensures you're fully prepared for success.</p>
      `,
      data: {
        duration: '45 hours',
        lessons: '120+ lessons',
        level: 'Beginner to Advanced',
        language: 'English & Bengali',
      },
    },
  ],
};
