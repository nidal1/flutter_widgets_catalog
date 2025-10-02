'use client';

import { useTranslations } from 'next-intl';
import * as React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { widgets } from '@/constants/index';
import { useRouter, usePathname } from 'next/navigation';

const SearchIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-gray-500"
  >
    <path d="m21 21-6-6" />
    <circle cx="10.5" cy="10.5" r="7.5" />
  </svg>
));
SearchIcon.displayName = 'SearchIcon';

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const handleSelect = React.useCallback(
    (widgetId: string) => {
      runCommand(() => {
        router.push(`${pathname}?widget=${encodeURIComponent(widgetId)}`);
      });
    },
    [runCommand, router, pathname]
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative mt-6 w-full max-w-md flex items-center justify-between gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-gray-500 shadow-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:ring-offset-gray-950"
      >
        <div className="flex items-center gap-2">
          <SearchIcon />
          <span>{t('Search.placeholder')}</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t('Search.placeholder')} />
        <CommandList>
          <CommandEmpty>{t('Search.noResults')}</CommandEmpty>
          <CommandGroup heading="Widgets">
            {widgets.map((widget) => (
              <CommandItem
                key={widget.id}
                value={t(`Widgets.${widget.id}.name`)}
                onSelect={() => handleSelect(widget.id)}
              >
                {t(`Widgets.${widget.id}.name`)}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
