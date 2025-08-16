'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Users, BookOpen, Award, Star } from 'lucide-react';

export default function StatsSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              আপনিও যোগ দিন আমাদের সাথে
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              লাখো শিক্ষার্থীর সাথে শিখুন এবং নিজের ক্যারিয়ার গড়ুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                আজই শুরু করুন
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                আরো জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
