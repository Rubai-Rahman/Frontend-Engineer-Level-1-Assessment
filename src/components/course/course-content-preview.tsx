import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Play, FileText } from 'lucide-react';

interface CourseContentPreviewProps {
  sections: Section[];
}

export function CourseContentPreview({ sections }: CourseContentPreviewProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Content Preview'}
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

            {/* Render content preview items */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-4">
                {section.values.map((item: any, index: number) => (
                  <div
                    key={item.id || index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.duration && (
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {item.duration}
                          </span>
                        )}
                      </div>
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
