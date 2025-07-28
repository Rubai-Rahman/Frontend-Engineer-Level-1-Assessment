import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/types/course.type';

interface Feature {
  id?: number;
  title: string;
  subtitle?: string;
  icon?: string;
}

interface CourseFeaturesSectionProps {
  section: Section;
}

export default function CourseFeaturesSection({
  section,
}: CourseFeaturesSectionProps) {
  const features = (section.values as Feature[]) || [];

  return (
    <section id="features" className="w-full">
      <div className="flex flex-col gap-1">
        <CardHeader className="px-0">
          <CardTitle className="text-xl font-semibold leading-relaxed text-foreground">
            {section.name}
          </CardTitle>
        </CardHeader>

        <Card className="mb-16 bg-card border">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {features.map((feature: Feature, index: number) => (
                <div
                  key={feature.id || index}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    {feature.icon && (
                      <div className="w-9 h-9 flex items-center justify-center bg-primary/10 rounded-lg">
                        <Image
                          alt={feature.title || 'Feature icon'}
                          src={feature.icon || '/placeholder.svg'}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-medium leading-relaxed text-foreground">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
