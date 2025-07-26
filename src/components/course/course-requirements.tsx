import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { AlertCircle } from 'lucide-react';

interface CourseRequirementsProps {
  sections: Section[];
}

export function CourseRequirements({ sections }: CourseRequirementsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Requirements'}
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

            {/* Render requirements */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-3">
                {section.values.map((requirement: any, index: number) => (
                  <div
                    key={requirement.id || index}
                    className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  >
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {requirement.title || requirement.text}
                      </p>
                      {requirement.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {requirement.description}
                        </p>
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
