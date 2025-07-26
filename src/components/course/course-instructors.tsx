import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Users } from 'lucide-react';

interface CourseInstructorsProps {
  sections: Section[];
}

export function CourseInstructors({ sections }: CourseInstructorsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Instructors'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section) => (
          <div key={section.type}>
            {section.description && (
              <div
                className="prose prose-gray max-w-none mb-4"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            )}

            {/* Render instructor values */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-4">
                {section.values.map((instructor: unknown, index: number) => (
                  <div
                    key={instructor.slug || index}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    {instructor.image && (
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {instructor.name}
                      </h4>
                      {instructor.short_description && (
                        <p className="text-sm text-blue-600 mb-2">
                          {instructor.short_description}
                        </p>
                      )}
                      {instructor.description && (
                        <div
                          className="text-sm text-gray-600 prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: instructor.description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
