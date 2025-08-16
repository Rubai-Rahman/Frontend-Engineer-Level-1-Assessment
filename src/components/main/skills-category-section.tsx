'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  slug: string;
  name: string;
  media: {
    bannar_img?: string;
    icon?: string;
    sqr_img?: string;
    thumbnail_img?: string;
  };
  product_count: number;
}

interface SkillsCategorySectionProps {
  categories: Category[];
}

export default function SkillsCategorySection({
  categories,
}: SkillsCategorySectionProps) {
  const t = useTranslations('HomePage');

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            দক্ষতা উন্নয়নের কোর্সসমূহ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
          </p>
        </div>

        {/* Categories Grid - Matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Category Banner Image */}
                  {category.media.bannar_img && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.media.bannar_img}
                        alt={category.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Overlay with category info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Category Icon */}
                      {category.media.icon && (
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Image
                              src={category.media.icon}
                              alt={category.name}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}

                      {/* Category Name and Count */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/80">
                          {category.product_count} টি কোর্স
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute bottom-4 right-4">
                        <ArrowRight className="w-5 h-5 text-white group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  )}

                  {/* Fallback for categories without banner */}
                  {!category.media.bannar_img && (
                    <div className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {category.media.icon ? (
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <Image
                                src={category.media.icon}
                                alt={category.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <div className="w-8 h-8 bg-primary/20 rounded" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.product_count} টি কোর্স
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            সব ক্যাটাগরি দেখুন
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
