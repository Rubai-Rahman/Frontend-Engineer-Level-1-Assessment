import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/types/course.type';
import { CheckCircle, Target } from 'lucide-react';

interface LearningPoint {
  id?: number;
  text: string;
  title?: string;
  description?: string;
}

interface CoursePointersProps {
  sections: Section[];
}

export function CoursePointers({ sections }: CoursePointersProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl">
          <Target className="h-5 w-5 text-primary" />
          {sections[0]?.name || 'What you will learn by doing the course'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section) => (
          <div key={section.type}>
            {section.description && (
              <div
                className="prose prose-sm max-w-none mb-4 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            )}

            {/* Render learning points from values */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-4">
                {(section.values as LearningPoint[]).map(
                  (item: LearningPoint, index: number) => (
                    <div
                      key={item.id || index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        {item.title && (
                          <h4 className="font-medium text-foreground mb-1">
                            {item.title}
                          </h4>
                        )}
                        <p className="text-foreground leading-relaxed">
                          {item.text}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
