import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { Section } from '@/types/course.type';

interface ExclusiveFeature {
  id: string;
  title: string;
  checklist: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
}

interface ExclusiveFeaturesSectionProps {
  section: Section;
}

export default function ExclusiveFeaturesSection({
  section,
}: ExclusiveFeaturesSectionProps) {
  const features = (section.values as ExclusiveFeature[]) || [];

  if (features.length === 0) return null;

  return (
    <section id="feature_explanations">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground text-xl">
            <Star className="h-5 w-5 text-primary" />
            {section.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {section.description && (
            <div
              className="prose prose-sm max-w-none mb-6 text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          )}

          <div className="space-y-6">
            {features.map((feature: ExclusiveFeature, index: number) => (
              <Card
                key={feature.id || index}
                className="bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Content Section */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>

                      {feature.checklist && feature.checklist.length > 0 && (
                        <div className="space-y-2">
                          {feature.checklist.map(
                            (item: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <p className="text-sm text-foreground">
                                  {item}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    {/* Image Section */}
                    {feature.file_url && (
                      <div className="w-full">
                        <Image
                          src={feature.file_url}
                          alt={feature.title || 'Exclusive feature'}
                          width={300}
                          height={220}
                          className="w-full h-auto rounded-lg object-contain bg-background border"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
