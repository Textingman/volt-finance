'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav
        className="nav-floating w-full max-w-5xl px-6 py-3 flex items-center justify-between"
        style={{
          opacity: scrolled ? 1 : 0.96,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 600,
              fontSize: '1.25rem',
              color: 'white',
              letterSpacing: '-0.01em',
            }}
          >
            Verdant Finance
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Product', href: '/product' },
            { label: 'For Employers', href: '/for-employers' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono-label px-4 py-2 rounded-full transition-all"
              style={{
                color: 'white',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/signup"
            className="hidden md:inline-flex font-mono-label px-4 py-2 rounded-full transition-all"
            style={{
              color: 'white',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              border: '1px solid rgba(255,255,255,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
          >
            Employee Onboarding
          </Link>
          <Link
            href="/talk-to-sales"
            className="hidden md:inline-flex btn-primary"
            style={{ fontSize: '0.65rem' }}
          >
            Talk to Sales
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-20 left-4 right-4 rounded-2xl p-6 md:hidden"
          style={{
            background: 'rgba(24, 37, 27, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[
            { label: 'Product', href: '/product' },
            { label: 'For Employers', href: '/for-employers' },
            { label: 'Talk to Sales', href: '/talk-to-sales' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block font-mono-label py-3 border-b"
              style={{
                color: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(255,255,255,0.08)',
                fontSize: '0.7rem',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signup"
            className="btn-primary mt-4 w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started →
          </Link>
        </div>
      )}
    </header>
  );
}
