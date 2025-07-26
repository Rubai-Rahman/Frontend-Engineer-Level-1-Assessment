import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { MessageSquare, Star } from 'lucide-react';

interface CourseTestimonialsProps {
  sections: Section[];
}

export function CourseTestimonials({ sections }: CourseTestimonialsProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          {sections[0]?.name || 'Student Testimonials'}
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

            {/* Render testimonials */}
            {section.values && section.values.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {section.values.map((testimonial: any, index: number) => (
                  <div
                    key={testimonial.id || index}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      {testimonial.profile_image && (
                        <img
                          src={testimonial.profile_image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        {testimonial.description && (
                          <p className="text-sm text-blue-600 font-medium">
                            {testimonial.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {testimonial.testimonial && (
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.testimonial}
                      </p>
                    )}

                    {/* Video thumbnail if available */}
                    {testimonial.video_url && testimonial.thumb && (
                      <div className="mt-3">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={testimonial.thumb}
                            alt="Video testimonial"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                              <Star className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
