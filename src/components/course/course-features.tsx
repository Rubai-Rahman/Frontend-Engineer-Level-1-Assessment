import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Layout } from 'lucide-react';

interface CourseFeaturesProps {
  sections: Section[];
}

export function CourseFeatures({ sections }: CourseFeaturesProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'How the course is laid out'}
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

            {/* Render feature values */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-4">
                {section.values.map((item: unknown, index: number) => (
                  <div
                    key={item.id || index}
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg"
                  >
                    {item.icon && (
                      <div className="w-12 h-12 flex-shrink-0">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
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
