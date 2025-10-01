'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import { GlobeIcon, MoonIcon, SearchIcon, SunIcon } from './icons';
import { Button } from './ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  const handleLanguageChange = (locale: string) => {
    // The pathname will include the current locale, so we need to remove it
    // before appending the new one.
    const newPath = `/${locale}${pathname.substring(3)}`;
    router.replace(newPath);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur backdrop-filter border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-lg">{t('title')}</div>
          <div className="flex items-center gap-4">
            <Button size="icon" className="size-8" onClick={toggleTheme}>
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" className="size-8">
                  <GlobeIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                  <span>{t('english')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('ar')}>
                  <span>{t('arabic')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}
