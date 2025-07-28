import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/types/course.type';
import { Info } from 'lucide-react';

interface CourseDetailItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface CourseDetailsProps {
  sections: Section[];
}

export function CourseDetailsSection({ sections }: CourseDetailsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
          <Info className="h-5 w-5 text-primary" />
          {sections[0]?.name || 'Course details'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sections.map((section) => (
          <div key={section.type}>
            {section.description && (
              <div
                className="prose prose-sm max-w-none mb-6 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            )}

            {/* Render about section values using shadcn accordion */}
            {section.values && section.values.length > 0 && (
              <Accordion type="multiple" className="w-full">
                {(section.values as CourseDetailItem[]).map(
                  (item: CourseDetailItem, index: number) => {
                    const itemId = item.id || `item-${index}`;

                    return (
                      <AccordionItem
                        key={itemId}
                        value={itemId}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          {item.title && (
                            <div
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                          )}
                        </AccordionTrigger>
                        <AccordionContent className="pt-0 text-base">
                          {item.description && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  }
                )}
              </Accordion>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
