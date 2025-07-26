import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checklist } from '@/lib/types';
import { CheckSquare } from 'lucide-react';

interface CourseChecklistProps {
  checklist: Checklist[];
}

export function CourseChecklist({ checklist }: CourseChecklistProps) {
  if (!checklist || checklist.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-blue-600" />
          Course Facts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {checklist.map((item: any) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6 mt-0.5 flex-shrink-0"
                />
              )}
              <div>
                <p
                  className="font-medium text-gray-900"
                  style={{ color: item.color || 'inherit' }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
