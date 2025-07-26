import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/lib/types';
import { Award } from 'lucide-react';

interface CourseCertificateProps {
  sections: Section[];
}

export function CourseCertificate({ sections }: CourseCertificateProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-800">
          <Award className="h-5 w-5 text-yellow-600" />
          {sections[0]?.name || 'Course Certificate'}
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

            {/* Render certificate info */}
            {section.values && section.values.length > 0 && (
              <div className="space-y-4">
                {section.values.map((cert: any, index: number) => (
                  <div
                    key={cert.id || index}
                    className="p-4 bg-white border border-yellow-200 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      {cert.image && (
                        <img
                          src={cert.image}
                          alt="Certificate preview"
                          className="w-24 h-16 object-cover rounded border"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">
                          {cert.title || 'Certificate of Completion'}
                        </h4>
                        {cert.description && (
                          <p className="text-sm text-gray-600 mb-2">
                            {cert.description}
                          </p>
                        )}
                        {cert.requirements && (
                          <p className="text-xs text-gray-500">
                            Requirements: {cert.requirements}
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
