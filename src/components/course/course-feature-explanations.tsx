import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Star, CheckCircle } from 'lucide-react';

interface CourseFeatureExplanationsProps {
  sections: Section[];
}

export function CourseFeatureExplanations({
  sections,
}: CourseFeatureExplanationsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Course Exclusive Features'}
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

            {/* Render feature explanations */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {section.values.map((feature: any, index: number) => (
                  <div
                    key={feature.id || index}
                    className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex items-start gap-4">
                      {feature.file_url && (
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={feature.file_url}
                            alt={feature.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {feature.title}
                        </h4>

                        {/* Render checklist items */}
                        {feature.checklist && feature.checklist.length > 0 && (
                          <div className="space-y-2">
                            {feature.checklist.map(
                              (item: string, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">
                                    {item}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        )}

                        {/* Video thumbnail if available */}
                        {feature.video_thumbnail && (
                          <div className="mt-3">
                            <img
                              src={feature.video_thumbnail}
                              alt="Feature preview"
                              className="w-full h-24 object-cover rounded"
                            />
                          </div>
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
