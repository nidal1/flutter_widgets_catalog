'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Button } from './ui/button';
import Container from './Container';
import { categories, categoryMap, widgets } from '@/constants';
import { Badge } from './ui/badge';
import WidgetCard from './WidgetCard';

const WidgetGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [editorTheme, setEditorTheme] = useState('light');
  const searchParams = useSearchParams();
  const t = useTranslations('Categories');
  const router = useRouter();

  useEffect(() => {
    // Set the initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setEditorTheme(isDarkMode ? 'vs-dark' : 'light');

    // Observe changes to the <html> element's class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isDark = (mutation.target as HTMLElement).classList.contains(
            'dark'
          );
          setEditorTheme(isDark ? 'vs-dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const categoryCounts = categories.reduce((acc, category) => {
    if (category === 'All') {
      acc[category] = widgets.length;
    } else {
      acc[category] = widgets.filter((widget) =>
        categoryMap[category]?.includes(widget.category)
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const filteredWidgets =
    activeCategory === 'All'
      ? widgets
      : widgets.filter((widget) =>
          categoryMap[activeCategory]?.includes(widget.category)
        );

  const openWidgetId = searchParams.get('widget');

  const handleSheetOpenChange = (isOpen: boolean, widgetId: string) => {
    if (isOpen) {
      router.push(`/?widget=${encodeURIComponent(widgetId)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <Container className="py-10">
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className="h-9 rounded-full px-4 text-sm transition-all duration-200 ease-in-out"
          >
            {t(category)}
            <Badge
              variant={activeCategory === category ? 'secondary' : 'default'}
              className="ml-2"
            >
              {categoryCounts[category] ?? 0}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Widget Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWidgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            editorTheme={editorTheme}
            isOpen={openWidgetId === widget.id}
            onOpenChange={(isOpen) => handleSheetOpenChange(isOpen, widget.id)}
          />
        ))}
      </div>
    </Container>
  );
};

export default WidgetGrid;
