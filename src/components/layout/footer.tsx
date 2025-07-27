'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const companyLinks = [
  { key: 'career', href: '#' },
  { key: 'joinTeacher', href: '#' },
  { key: 'joinAffiliate', href: '#' },
  { key: 'privacy', href: '#' },
  { key: 'refund', href: '#' },
  { key: 'terms', href: '#' },
];

const otherLinks = [
  { key: 'blog', href: '#' },
  { key: 'bookStore', href: '#' },
  { key: 'freeNotes', href: '#' },
  { key: 'jobPrep', href: '#' },
  { key: 'verifyCert', href: '#' },
  { key: 'freeDownload', href: '#' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'TikTok' },
];

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-background text-foreground border-t py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and App Links */}
        <div className="space-y-4">
          <Image
            src="/10mslogo-svg.svg"
            alt="10 Minute School"
            width={120}
            height={40}
            className="dark:invert"
          />
          <p className="text-sm text-muted-foreground">{t('downloadApp')}</p>
          <div className="flex space-x-3">
            <Image
              src="/google-play-icon.jpg"
              alt="Get it on Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/ios-store-icon.jpg"
              alt="Download on the App Store"
              width={120}
              height={40}
            />
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="font-semibold mb-3">{t('company')}</h4>
          <ul className="space-y-3 text-md text-muted-foreground">
            {companyLinks.map(({ key, href }) => (
              <li key={key}>
                <Link href={href}>{t(`companyLinks.${key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Others */}
        <div>
          <h4 className="font-semibold mb-3">{t('others')}</h4>
          <ul className="space-y-3 text-md text-muted-foreground">
            {otherLinks.map(({ key, href }) => (
              <li key={key}>
                <Link href={href}>{t(`otherLinks.${key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold">{t('contact')}</h4>
          <ul className="text-md text-muted-foreground space-y-3">
            <li>
              {t('callUs')}{' '}
              <span className="text-primary font-semibold">16910</span> (24x7)
            </li>
            <li>
              {t('whatsapp')}{' '}
              <span className="text-primary font-semibold">+8801896016252</span>{' '}
              (24x7)
            </li>
            <li>
              {t('outsideBangladesh')}{' '}
              <span className="text-primary font-semibold">
                +880 9610916910
              </span>
            </li>
            <li>
              {t('emailUs')}{' '}
              <Link
                href="mailto:support@10minuteschool.com"
                className="text-primary"
              >
                support@10minuteschool.com
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-3 pt-2 *:bg-foreground *:text-background *:p-3  *:rounded-sm">
            {socialLinks.map(({ icon: Icon, label }, i) => (
              <Link href="#" key={i} aria-label={label}>
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        {t('copyright')}
      </div>
    </footer>
  );
};

export default Footer;
