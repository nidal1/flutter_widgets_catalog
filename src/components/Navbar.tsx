'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useTheme } from '@/hooks/use-theme';
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
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    if (locale === currentLocale) return;
    // The pathname will include the current locale, e.g., /en/about or /ar/about
    // We need to replace the current locale with the new one.
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
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
