'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import LangSwitcher from '@/components/LangSwitcher';
import Btn from '@/shared/Btn';

interface NavLink {
  id: number;
  href: string;
  txt: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('NavBar');
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-transparent hover:border-gray-200 hover:bg-gray-50 dark:hover:border-white/10 dark:hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <HiX
          className={`w-6 h-6 absolute transition-all duration-300 ease-in-out
    ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}`}
        />

        <HiMenu
          className={`w-6 h-6 absolute transition-all duration-300 ease-in-out
    ${open ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
        />
      </button>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-16 left-3 right-3 z-50 transition-all duration-300 ease-out ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-100 dark:border-white/10 shadow-xl shadow-black/5 p-2">
          {links.map((link, i) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                className={`
                  group flex items-center justify-between
                  px-3 py-2.5 rounded-xl
                  text-[15px] font-medium
                  transition-all duration-200
                  ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}
                  ${
                    isActive
                      ? 'bg-primary/8 text-primary dark:bg-primary/15'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                  }
                `}
              >
                <span>{t(link.txt)}</span>
                <HiArrowUpRight
                  className={`
                    w-3.5 h-3.5 opacity-0 -translate-x-1
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-150
                    ${isActive ? 'opacity-100 translate-x-0 text-primary' : 'text-gray-400'}
                  `}
                />
              </Link>
            );
          })}

          <div className="flex flex-wrap gap-2 items-center justify-between mt-1 pt-2 px-1 border-t border-gray-100 dark:border-white/8">
            <LangSwitcher />
            <Btn txt={t('Login') || 'Login'} href="/login" />
          </div>
        </div>
      </div>
    </div>
  );
}
