'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loading } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position of the menu when opened
      setTimeout(() => {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.scrollTop = 0;
      }, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/course-insider', label: 'Course Insider' },
    { href: '/creating-impact', label: 'Creating Impact' },
    { href: '/about', label: 'About Presolv360' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg' : 'bg-[#0A0A0A]'
    }`}>
      <nav className="max-w-7xl mx-auto py-2 px-5 md:px-20 lg:px-[82px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Presolv360 Logo"
              width={240}
              height={80}
              priority
              className='max-sm:w-[200px]'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[60px]">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`text-white hover:text-[#FBB04C] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#FBB04C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === item.href ? '!text-[#FBB04C] after:scale-x-100' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Button - Desktop */}
          {!loading && (
            user ? (
              <Link 
                href="/profile" 
                className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#090909] border border-[#007AFF] rounded-[32px] text-white uppercase text-base shadow-[inset_1px_-1px_4.5px_0px_rgba(255,255,255,0.1)] hover:bg-[#007AFF]/10 hover:text-[#FBB04C] hover:border-[#FBB04C] transition-all duration-300"
              >
                <span>My Profile</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ) : (
              <Link 
                href="/auth" 
                className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#090909] border border-[#007AFF] rounded-[32px] text-white uppercase text-base shadow-[inset_1px_-1px_4.5px_0px_rgba(255,255,255,0.1)] hover:bg-[#007AFF]/10 hover:text-[#FBB04C] hover:border-[#FBB04C] transition-all duration-300"
              >
                <span>login/register</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )
          )}

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-[#FBB04C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 z-50 bg-black transition-all duration-300 h-screen ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          {/* Close Button (visible on mobile drawer) */}
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-[#FBB04C] transition-colors z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <nav className="p-5 space-y-6 mt-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-xl ${
                  pathname === item.href ? 'text-[#FBB04C]' : 'text-white hover:text-[#FBB04C]'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Auth Button - Mobile */}
            {!loading && (
              user ? (
                <Link 
                  href="/profile" 
                  className="flex items-center gap-2 px-6 py-3 bg-[#090909] border border-[#007AFF] rounded-[32px] text-white uppercase text-base shadow-[inset_1px_-1px_4.5px_0px_rgba(255,255,255,0.1)] hover:bg-[#007AFF]/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {/* <span>My Profile</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> */}
                </Link>
              ) : (
                <Link 
                  href="/auth" 
                  className="flex items-center gap-2 px-6 py-3 bg-[#090909] border border-[#007AFF] rounded-[32px] text-white uppercase text-base shadow-[inset_1px_-1px_4.5px_0px_rgba(255,255,255,0.1)] hover:bg-[#007AFF]/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span>login/register</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )
            )}
          </nav>
        </div>
      </nav>
    </header>
  );
} 