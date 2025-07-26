import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Section } from '@/lib/types';
import { Users, Download } from 'lucide-react';

interface CourseGroupEngagementProps {
  sections: Section[];
}

export function CourseGroupEngagement({
  sections,
}: CourseGroupEngagementProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Join Our Community'}
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

            {/* Render engagement items */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-4">
                {section.values.map((item: any, index: number) => (
                  <div
                    key={item.id || index}
                    className="relative p-6 rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: item.background?.image
                        ? `url(${item.background.image})`
                        : undefined,
                      backgroundColor:
                        item.background?.primary_color || '#f3f4f6',
                    }}
                  >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                    <div className="relative z-10 flex items-start gap-4">
                      {item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg border-2 border-white"
                        />
                      )}

                      {item.top_left_icon_img && (
                        <img
                          src={item.top_left_icon_img}
                          alt="Icon"
                          className="absolute top-4 left-4 w-8 h-8 rounded"
                        />
                      )}

                      <div className="flex-1">
                        <h4
                          className="font-bold text-lg mb-2"
                          style={{ color: item.title_color || '#ffffff' }}
                        >
                          {item.title}
                        </h4>

                        <p
                          className="text-sm mb-4"
                          style={{ color: item.description_color || '#e5e7eb' }}
                        >
                          {item.description}
                        </p>

                        {item.cta && (
                          <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() =>
                              window.open(item.cta.clicked_url, '_blank')
                            }
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {item.cta.text}
                          </Button>
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
