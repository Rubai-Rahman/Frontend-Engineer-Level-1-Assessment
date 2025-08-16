'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LandingPage from '@/components/main/landing-page';

export default function HomePage() {
  const router = useRouter();

  // Remove the automatic redirect to allow landing page to show
  // useEffect(() => {
  //   router.push('/product/ielts-course/');
  // }, [router]);

  return <LandingPage />;
}
