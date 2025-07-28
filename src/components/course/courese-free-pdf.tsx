import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/types/course.type';

interface FreePDFItem {
  title: string;
  description: string;
  thumbnail?: string;
  top_left_icon_img?: string;
  title_color?: string;
  description_color?: string;
  background?: {
    image?: string;
  };
  cta?: {
    text: string;
    clicked_url: string;
  };
}

interface FreePDFSectionProps {
  section: Section;
}

export default function FreePDFSection({ section }: FreePDFSectionProps) {
  const items = (section.values as FreePDFItem[]) || [];

  if (items.length === 0) return null;

  return (
    <section className="py-8" id="free-pdf-section">
      <div className="space-y-8">
        {items.map((item: FreePDFItem, index: number) => (
          <Card key={index} className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div
                className="relative flex flex-col md:flex-row gap-4 p-6 md:p-8 min-h-[200px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
                    item.background?.image ||
                    '/placeholder.svg?height=200&width=800'
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="flex-1 z-10">
                  {item.top_left_icon_img && (
                    <div className="mb-4">
                      <Image
                        src={item.top_left_icon_img}
                        alt="Section icon"
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h2
                    className="text-xl md:text-2xl font-semibold mb-3"
                    style={{
                      color: item.title_color || 'white',
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    className="text-base md:text-lg leading-relaxed mb-6"
                    style={{
                      color: item.description_color || '#e5e7eb',
                    }}
                  >
                    {item.description}
                  </p>

                  {item.cta && (
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                      size="lg"
                    >
                      <a
                        href={item.cta.clicked_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        {item.cta.text}
                      </a>
                    </Button>
                  )}
                </div>

                <div className="flex-shrink-0 flex items-center justify-center md:w-1/3">
                  {item.thumbnail && (
                    <div className="relative w-full max-w-[200px] h-[150px] md:h-[200px]">
                      <Image
                        src={item.thumbnail}
                        alt={item.title || 'Free PDF preview'}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 200px, 300px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
