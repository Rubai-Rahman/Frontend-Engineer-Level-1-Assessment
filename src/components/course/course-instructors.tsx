import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Section } from '@/types/course.type';

interface InstructorValue {
  description: string;
  name: string;
  short_description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
}

interface InstructorsSectionProps {
  section: Section;
}

export default function InstructorsSection({
  section,
}: InstructorsSectionProps) {
  // Extract instructor data from section.values and cast to proper type
  const instructors = (section.values || []) as InstructorValue[];

  return (
    <div id="instructors" className="mb-7 xs:bg-[#EEF2F4] xs:pt-2">
      <div className="pt-4 pb-2 ">
        <h2 className="mb-4 text-xl text- font-semibold md:text-2xl text-foreground">
          {section.name}
        </h2>
        {instructors.map((instructor, index) => (
          <Card key={index} className="mb-4 last:mb-0">
            <CardContent className="flex items-center p-5">
              <div className="flex-shrink-0">
                <Avatar className="w-[73px] h-[73px]">
                  <AvatarImage
                    src={instructor.image}
                    alt={`Instructor ${instructor.name}`}
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground text-xl font-bold">
                    {instructor.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium text-foreground">
                  {instructor.has_instructor_page && instructor.slug ? (
                    <Link
                      href={`/skills/instructors/${instructor.slug}/`}
                      className="flex items-center hover:text-primary transition-colors duration-200 group"
                    >
                      {instructor.name}
                      <span className="ml-2 pb-[2px] group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRight className="w-3 h-3 text-muted-foreground" />
                      </span>
                    </Link>
                  ) : (
                    <span>{instructor.name}</span>
                  )}
                </h3>
                {instructor.description && (
                  <div
                    className="text-sm text-muted-foreground mt-1 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
