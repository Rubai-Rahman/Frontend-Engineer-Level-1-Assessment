import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './provider';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getLocale, getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://10minuteschool.com'),
  title: '10 Minute School - The Largest Online Classroom of Bangladesh',
  description:
    '10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.',
  keywords:
    'IELTS, English, Course, Munzereen Shahid, 10 Minute School, IELTS Preparation, English Test, Online Education, Bangladesh, SSC, HSC, Skills',
  category: 'education',
  authors: [{ name: '10 Minute School' }],
  alternates: {
    canonical: 'https://10minuteschool.com/',
    languages: {
      'en-US': 'https://10minuteschool.com/en/',
      'bn-BD': 'https://10minuteschool.com/bn/',
    },
  },
  openGraph: {
    title: '10 Minute School - The Largest Online Classroom of Bangladesh',
    description:
      '10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.',
    url: 'https://10minuteschool.com/',
    siteName: '10minuteschool',
    locale: 'bn_BD',
    type: 'website',
    images: [
      {
        url: 'https://cdn.10minuteschool.com/10ms-homepage-cover.png',
        width: 800,
        height: 600,
        alt: '10 Minute School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@10minuteschool',
    creator: '@10minuteschool',
    title: '10 Minute School - The Largest Online Classroom of Bangladesh',
    description:
      '10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.',
    images: ['https://cdn.10minuteschool.com/10ms-homepage-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png',
    shortcut:
      'https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png',
    apple:
      'https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png',
  },
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/10-minute-school/id1577061772',
      app_store_id: '1577061774',
    },
    android: {
      package: 'com.a10minuteschool.tenminuteschool',
      app_name: '10 Minute School: Learning App',
    },
    web: {
      url: 'https://10minuteschool.com',
      should_fallback: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://10minuteschool.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="oklch(63.031% 0.14875 156.798)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
