'use client';

import { useState } from 'react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import Container from './Container';
import { categories, categoryMap, widgets } from '@/constants';
import { Badge } from './ui/badge';

// Mock data for Flutter widgets

const WidgetGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

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

  return (
    <Container className="py-10">
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'secondary'}
            onClick={() => setActiveCategory(category)}
            className="flex items-center gap-2"
          >
            {category}
            <Badge
              variant={activeCategory === category ? 'secondary' : 'default'}
            >
              {categoryCounts[category] ?? 0}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Widget Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWidgets.map((widget) => (
          <Sheet key={widget.name}>
            <SheetTrigger asChild>
              <Card className="cursor-pointer transition-all hover:border-blue-500 dark:hover:border-blue-500">
                <CardHeader>
                  <CardTitle>{widget.name}</CardTitle>
                  <CardDescription>{widget.description}</CardDescription>
                </CardHeader>
              </Card>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-[70vw]">
              <SheetHeader>
                <SheetTitle>{widget.name}</SheetTitle>
                <SheetDescription>{widget.description}</SheetDescription>
              </SheetHeader>
              {/* This is where more details about the widget will go. */}
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </Container>
  );
};

export default WidgetGrid;
