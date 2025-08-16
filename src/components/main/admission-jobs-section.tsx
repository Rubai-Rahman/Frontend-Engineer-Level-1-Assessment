'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Video, Clock, BookOpen } from 'lucide-react';

interface Product {
  title: string;
  id: string;
  slug: string;
  modality: string;
  media: Array<{
    name: string;
    resource_type: string;
    resource_value: string;
  }>;
  price_type: string;
  price_details: {
    text: string;
  };
  instructor_text: string;
  checklist?: Array<{
    text: string;
    icon?: string;
  }>;
}

interface CourseCategory {
  id: string;
  name: string;
  products: Product[];
}

interface AdmissionJobsSectionProps {
  admissionCourses: CourseCategory[];
  jobsCourses: CourseCategory[];
}

export default function AdmissionJobsSection({
  admissionCourses,
  jobsCourses,
}: AdmissionJobsSectionProps) {
  const t = useTranslations('HomePage');

  const getProductThumbnail = (product: Product) => {
    const thumbnail = product.media.find(
      (m) => m.name === 'thumbnail' || m.name === 'sqr_img'
    );
    return thumbnail?.resource_value || '/placeholder-course.jpg';
  };

  const getModalityBadge = (modality: string) => {
    switch (modality) {
      case 'crash_course':
        return (
          <Badge variant="destructive" className="text-xs">
            লাইভ
          </Badge>
        );
      case 'recorded':
        return (
          <Badge variant="secondary" className="text-xs">
            রেকর্ডেড
          </Badge>
        );
      default:
        return null;
    }
  };

  const renderCourseSection = (
    title: string,
    subtitle: string,
    courses: CourseCategory[],
    bgColor: string,
    icon: React.ReactNode
  ) => {
    const allProducts = courses.flatMap((category) => category.products || []);

    if (allProducts.length === 0) return null;

    return (
      <div className={`py-16 ${bgColor}`}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                {icon}
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {title}
                </h2>
                <p className="text-lg text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {allProducts.slice(0, 8).map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <CardContent className="p-0">
                    {/* Course Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={getProductThumbnail(product)}
                        alt={product.title}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Modality Badge */}
                      <div className="absolute top-3 left-3">
                        {getModalityBadge(product.modality)}
                      </div>

                      {/* Price Badge */}
                      {product.price_type === 'free' ? (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-green-500 hover:bg-green-600 text-white">
                            ফ্রি
                          </Badge>
                        </div>
                      ) : null}
                    </div>

                    {/* Course Content */}
                    <div className="p-4">
                      {/* Course Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>

                      {/* Instructor */}
                      {product.instructor_text && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.instructor_text}
                        </p>
                      )}

                      {/* Course Stats */}
                      {product.checklist && product.checklist.length > 0 && (
                        <div className="space-y-1 mb-3">
                          {product.checklist.slice(0, 2).map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center text-xs text-muted-foreground"
                            >
                              {item.text.includes('কোর্সটি করছেন') && (
                                <Users className="w-3 h-3 mr-1" />
                              )}
                              {item.text.includes('ভিডিও') && (
                                <Video className="w-3 h-3 mr-1" />
                              )}
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div
                          className="text-lg font-bold text-primary"
                          dangerouslySetInnerHTML={{
                            __html: product.price_details.text,
                          }}
                        />
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              আরো কোর্স দেখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-background">
      {/* Admission Courses */}
      {renderCourseSection(
        'ভর্তি পরীক্ষার প্রস্তুতি',
        'বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় সফল হওয়ার জন্য সম্পূর্ণ প্রস্তুতি',
        admissionCourses,
        'bg-blue-50 dark:bg-blue-950/20',
        <BookOpen className="w-8 h-8 text-blue-600" />
      )}

      {/* Job Preparation Courses */}
      {renderCourseSection(
        'চাকরির প্রস্তুতি',
        'সরকারি ও বেসরকারি চাকরির জন্য সম্পূর্ণ প্রস্তুতি',
        jobsCourses,
        'bg-green-50 dark:bg-green-950/20',
        <Users className="w-8 h-8 text-green-600" />
      )}
    </section>
  );
}
