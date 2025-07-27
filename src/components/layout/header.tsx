'use client';

import { lazy, Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Menu, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import logo from '../../../public/10mslogo-svg.svg';
import { navLinks } from '@/lib/constant';
import LocaleSwitcherToggle from '../main/locale-switcher';

const ProfileMenu = lazy(() => import('../profile/profile-menu'));

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const auth = false;
  if (!mounted) return null;

  return (
    <header className="bg-background text-foreground shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Search */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="10 Minute School Logo"
                width={100}
                height={100}
                priority
                className="dark:invert"
              />
            </Link>
            <div className="hidden md:flex items-center">
              <Input
                type="text"
                placeholder="Search courses, skills..."
                className="h-9 w-64 text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LocaleSwitcherToggle
              items={[
                { value: 'en', label: 'বাংলা' },
                { value: 'bn', label: 'English' },
              ]}
            />

            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            {auth ? (
              <Suspense
                fallback={
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                }
              >
                <ProfileMenu />
              </Suspense>
            ) : (
              <Button variant="default" size="lg" asChild>
                <Link href="/login">Log In</Link>
              </Button>
            )}
            {/* <Button variant="default" size="lg" className="rounded-sm">
              Login
            </Button> */}
          </div>

          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] sm:w-[300px] p-4">
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src={logo}
                  alt="10 Minute School Logo"
                  width={90}
                  height={90}
                  className="dark:invert"
                />
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col space-y-2 pt-6 border-t mt-6">
                <Button variant="outline" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" /> Dark Mode
                    </>
                  )}
                </Button>
                <LocaleSwitcherToggle
                  items={[
                    { value: 'en', label: 'Switch to বাংলা' },
                    { value: 'bn', label: 'Switch to English' },
                  ]}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
