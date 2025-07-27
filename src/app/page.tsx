'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-2xl text-primary font-bold mb-4">{t('title')}</p>
        {/* <LoadingSpinner size="lg" /> */}
        <p className="mt-4 text-gray-600">Redirecting to IELTS Course...</p>
      </div>
    </div>
  );
}
