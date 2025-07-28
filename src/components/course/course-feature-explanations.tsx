import { CheckCircle } from 'lucide-react';
import { Section } from '@/types/course.type';

interface LearningPoint {
  id?: number;
  text: string;
}

interface LearningPointsSectionProps {
  section: Section;
}

export default function LearningPointsSection({
  section,
}: LearningPointsSectionProps) {
  const points = (section.values as LearningPoint[]) || [];

  return (
    <div
      id="pointers"
      className="mb-6 md:mb-10 relative bg-muted py-2 md:bg-background md:py-0"
    >
      <div className="pt-6 pb-6 bg-background md:pb-0 md:pt-0">
        <div>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl text-foreground">
            {section.name}
          </h2>
          <div className="rounded-md md:border border-border">
            <div className="pt-2 md:p-6">
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                {points.map((point: LearningPoint, index: number) => (
                  <li
                    key={point.id || index}
                    className="flex items-start gap-2 mb-2"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mr-1 mt-[2px] flex-shrink-0" />
                    <div className="flex-1 text-foreground">{point.text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
