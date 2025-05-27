'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/galleries', label: 'GALLERIES' },
  { href: '/reviews', label: 'REVIEWS' },
  { href: '/blog', label: 'BLOG' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Nav */}
      <div className={`hidden lg:flex items-center justify-between h-20 px-6 xl:px-16 2xl:px-32 transition-all duration-200 ${isScrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="TN Dirt Pros" width={140} height={44} className="object-contain" />
        </Link>
        <ul className="flex items-center gap-8 xl:gap-12">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white font-semibold text-base hover:text-red-500 transition-colors duration-200 ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'border-b-2 border-red-600 text-red-500' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="sms:+1234567890"
          className="ml-4 px-6 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
          style={{ boxShadow: 'none', filter: 'none', textShadow: 'none' }}
        >
          SEND US A TEXT
        </a>
      </div>

      {/* Mobile Nav Bar */}
      <div className="flex lg:hidden items-center justify-between h-16 px-6 sm:px-8 bg-transparent mt-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="TN Dirt Pros" width={110} height={36} className="object-contain" />
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-4 text-white hover:text-red-500 transition-colors duration-200 text-3xl"
          aria-label="Open menu"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          style={{ zIndex: 9999 }}
          role="dialog"
          aria-modal="true"
        >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-3 bg-transparent w-full" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/logo.svg" alt="TN Dirt Pros" width={110} height={36} className="object-contain" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-4 text-white hover:text-red-500 transition-colors duration-200 text-3xl"
              aria-label="Close menu"
              style={{ marginRight: 0 }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center space-y-4 w-full">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-white text-2xl font-bold py-2 rounded hover:bg-red-600/20 transition-colors w-full text-center
                  ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'bg-red-600 text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Contact Buttons at Bottom */}
          <div className="px-6 py-4 space-y-3 w-full">
            <a href="tel:+1234567890" className="w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-md text-center hover:bg-red-700 transition-colors">CALL NOW</a>
            <a href="sms:+1234567890" className="w-full py-3 border-2 border-red-600 text-white text-lg font-semibold rounded-md text-center hover:bg-red-600/10 transition-colors">SEND US A TEXT</a>
          </div>
        </div>
      )}
    </nav>
  );
} 