import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { CreditCard } from 'lucide-react';

interface CourseHowToPayProps {
  sections: Section[];
}

export function CourseHowToPay({ sections }: CourseHowToPayProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'How to Pay'}
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

            {/* Render payment methods */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {section.values.map((method: any, index: number) => (
                  <div
                    key={method.id || index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      {method.icon && (
                        <img
                          src={method.icon}
                          alt={method.name}
                          className="w-8 h-8 flex-shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {method.name || method.title}
                        </h4>
                        {method.description && (
                          <p className="text-sm text-gray-600 mb-2">
                            {method.description}
                          </p>
                        )}
                        {method.steps && (
                          <ol className="text-xs text-gray-500 list-decimal list-inside space-y-1">
                            {method.steps.map((step: string, idx: number) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ol>
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
