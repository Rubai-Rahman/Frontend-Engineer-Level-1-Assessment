'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '../../../public/10mslogo-svg.svg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Chrono Click Logo"
              width={50}
              height={50}
              className="relative z-10 rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/courses"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/skills"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/admission"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Admission
            </Link>
            <Link
              href="/job-preparation"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Job Preparation
            </Link>
            <Link
              href="/live-class"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Live Class
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/skills"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/admission"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Admission
              </Link>
              <Link
                href="/job-preparation"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Job Preparation
              </Link>
              <Link
                href="/live-class"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Live Class
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 justify-start"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
