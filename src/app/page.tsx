'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const router = useRouter();

  useEffect(() => {
    router.push('/product/ielts-course/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-2xl text-primary font-bold mb-4">{t('title')}</p>
        {/* Optional: Replace or define your loading spinner */}
        <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-muted-foreground">
          Redirecting to IELTS Course...
        </p>
      </div>
    </div>
  );
}
