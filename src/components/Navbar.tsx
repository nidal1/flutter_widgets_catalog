'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import Container from './Container';
import { GlobeIcon, MoonIcon, SunIcon } from './icons';
import { Button } from './ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FolderGit2, GitBranchPlus, Github } from 'lucide-react';

export default function Navbar({ locale: currentLocale }: { locale: string }) {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    if (locale === currentLocale || pathname.includes(locale)) return;
    // The pathname from `usePathname` (from next-intl) does not include the locale.
    const newPath = `/${locale}`;
    router.replace(newPath);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur backdrop-filter border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt={t('title')} width={40} height={40} />
            <span className="text-xl font-semibold">{t('title')}</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button size="icon">
              <Link
                href="https://github.com/nidal1/flutter_widgets_catalog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderGit2 className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" onClick={toggleTheme}>
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon">
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

            <Button asChild>
              <Link
                href="https://www.codinwar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit codinwar
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
