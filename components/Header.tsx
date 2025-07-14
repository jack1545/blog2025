'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-card-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border-color">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold gradient-text">
          欧壹
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // HOME
          </Link>
          <Link href="/blog" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // BLOG
          </Link>
          <Link href="/about" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // ABOUT
          </Link>
          <Link href="/contact" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // CONTACT
          </Link>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="font-mono text-xs bg-editor-bg border border-border-color rounded-full py-1.5 px-4 w-40 focus:w-48 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            />
            <i className="fa-solid fa-magnifying-glass text-xs text-text-secondary absolute right-3 top-1/2 -translate-y-1/2"></i>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/50 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={closeMobileMenu}
      >
        {/* Menu Drawer */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-64 bg-card-bg/80 backdrop-blur-lg border-l border-border-color shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col p-6 space-y-6 mt-16">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="font-mono text-lg text-text-primary hover:text-accent-blue transition-colors py-2"
            >
              // HOME
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="font-mono text-lg text-text-primary hover:text-accent-blue transition-colors py-2"
            >
              // BLOG
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="font-mono text-lg text-text-primary hover:text-accent-blue transition-colors py-2"
            >
              // ABOUT
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="font-mono text-lg text-text-primary hover:text-accent-blue transition-colors py-2"
            >
              // CONTACT
            </Link>
            <div className="relative mt-4">
              <input
                type="search"
                placeholder="Search..."
                className="font-mono text-sm bg-editor-bg border border-border-color rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              />
              <i className="fa-solid fa-magnifying-glass text-sm text-text-secondary absolute right-3 top-1/2 -translate-y-1/2"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 