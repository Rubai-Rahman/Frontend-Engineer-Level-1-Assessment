'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const companyLinks = [
  'Career / Recruitment',
  'Join as a Teacher',
  'Join as an Affiliate',
  'Privacy Policy',
  'Refund Policy',
  'Terms & Conditions',
];

const otherLinks = [
  'Blog',
  'Book Store',
  'Free Notes & Guides',
  'Job Preparation Courses',
  'Verify Certificate',
  'Free Download',
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'TikTok' },
];

const Footer = () => {
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
          <p className="text-sm text-muted-foreground">
            Download Our Mobile App
          </p>
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
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-3 text-md text-muted-foreground">
            {companyLinks.map((text, i) => (
              <li key={i}>
                <Link href="#">{text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Others */}
        <div>
          <h4 className="font-semibold mb-3">Others</h4>
          <ul className="space-y-3 text-md text-muted-foreground">
            {otherLinks.map((text, i) => (
              <li key={i}>
                <Link href="#">{text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold">Keep up with us at</h4>
          <ul className="text-md text-muted-foreground space-y-3">
            <li>
              Call Us: <span className="text-primary font-semibold">16910</span>{' '}
              (24x7)
            </li>
            <li>
              WhatsApp:{' '}
              <span className="text-primary font-semibold">+8801896016252</span>{' '}
              (24x7)
            </li>
            <li>
              Outside Bangladesh:{' '}
              <span className="text-primary font-semibold">
                +880 9610916910
              </span>
            </li>
            <li>
              Email Us:{' '}
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
        2015 - 2025 Copyright © 10 Minute School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
