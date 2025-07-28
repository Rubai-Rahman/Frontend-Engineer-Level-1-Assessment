import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Gift } from 'lucide-react';

interface CourseFreeItemsProps {
  sections: Section[];
}

export function CourseFreeItems({ sections }: CourseFreeItemsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <Gift className="h-5 w-5 text-primary" />
          {sections[0]?.name || 'Free Items with Course'}
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

            {/* Render free items */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {section.values.map((item: any, index: number) => (
                  <div
                    key={item.id || index}
                    className="p-4 bg-white border border-green-200 rounded-lg shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8 flex-shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        )}
                        {item.value && (
                          <p className="text-sm text-primary font-medium mt-1">
                            Value: {item.value}
                          </p>
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
