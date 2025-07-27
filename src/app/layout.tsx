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
  title: 'Complete IELTS Course by Munzereen Shahid - 10 Minute School',
  description:
    'Master IELTS with expert guidance from Munzereen Shahid. Comprehensive course covering all four skills: Reading, Writing, Listening, and Speaking.',
  keywords:
    'IELTS, English, Course, Munzereen Shahid, 10 Minute School, IELTS Preparation, English Test',
  authors: [{ name: '10 Minute School' }],
  openGraph: {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description:
      'Master IELTS with expert guidance from Munzereen Shahid. Comprehensive course covering all four skills.',
    url: '/product/ielts-course/',
    siteName: '10 Minute School',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IELTS Course by Munzereen Shahid',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description: 'Master IELTS with expert guidance from Munzereen Shahid.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <link
          rel="canonical"
          href="https://10minuteschool.com/product/ielts-course/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
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
