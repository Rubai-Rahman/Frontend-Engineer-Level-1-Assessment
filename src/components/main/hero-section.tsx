'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                বাংলাদেশের সবচেয়ে বড়{' '}
                <span className="text-primary">অনলাইন শিক্ষা</span> প্ল্যাটফর্ম
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                ১৭ মিলিয়নেরও বেশি শিক্ষার্থী আমাদের সাথে মানসম্মত শিক্ষা গ্রহণ
                করছে। আপনিও যোগ দিন আজই।
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold rounded-lg"
                >
                  ফ্রি কোর্স দেখুন
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-base font-semibold rounded-lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  ডেমো ভিডিও দেখুন
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    ১৭M+
                  </div>
                  <div className="text-sm text-gray-400">শিক্ষার্থী</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    ১০০০+
                  </div>
                  <div className="text-sm text-gray-400">কোর্স</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    ৫০০+
                  </div>
                  <div className="text-sm text-gray-400">শিক্ষক</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    ৯৮%
                  </div>
                  <div className="text-sm text-gray-400">সন্তুষ্টি</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* You can add a hero image here */}
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-300">Hero Video/Image</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
