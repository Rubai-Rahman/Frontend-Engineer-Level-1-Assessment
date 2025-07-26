import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Info } from 'lucide-react';

interface CourseDetailsProps {
  sections: Section[];
}

export function CourseDetails({ sections }: CourseDetailsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Course details'}
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

            {/* Render about section values */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-6">
                {section.values.map((item: unknown, index: number) => (
                  <div key={item.id || index} className="space-y-3">
                    {item.title && (
                      <div
                        className="text-lg font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    )}
                    {item.description && (
                      <div
                        className="prose prose-gray max-w-none"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
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
