'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { useState, useRef } from 'react';

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { Loader2Icon } from 'lucide-react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Container from './Container';
import { categories, categoryMap, widgets } from '@/constants';
import { Badge } from './ui/badge';

const IFRAME_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>body { margin: 0; overflow: hidden; }</style>
  <script>
    // Create a promise that resolves when the Flutter engine is ready.
    window.flutterReady = new Promise(function (resolve) {
      window.addEventListener('flutter-initialized', resolve, { once: true });
    });
  </script>
</head>
<body>
  <div id="output"></div>
  <script src="https://storage.googleapis.com/dartpad/dart_sdk.js"></script>
  <script src="https://storage.googleapis.com/dartpad/flutter_web.js"></script>
</body>
</html>
`;

const WidgetGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCompiling, setIsCompiling] = useState(false);
  console.log('🚀 ~ WidgetGrid ~ isCompiling:', isCompiling);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
              <Card className="p-3 cursor-pointer transition-all hover:border-blue-500 dark:hover:border-blue-500">
                <CardHeader className="px-0 flex flex-row items-start justify-between gap-4">
                  <div className="flex flex-wrap flex-col gap-1.5">
                    <CardTitle className="flex flex-col flex-wrap gap-2">
                      {widget.name}
                      <Badge variant="outline" className="text-[10px]">
                        {widget.category}
                      </Badge>
                    </CardTitle>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={widget.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md hover:bg-accent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Official Documentation</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>
                <CardDescription>{widget.description}</CardDescription>
              </Card>
            </SheetTrigger>
            <SheetContent className="w-full max-w-full sm:max-w-full md:max-w-[90vw] lg:max-w-[80vw] p-0">
              <SheetHeader>
                <div className="flex items-center justify-between p-4 border-b">
                  <div>
                    <SheetTitle>{widget.name}</SheetTitle>
                    <SheetDescription>{widget.description}</SheetDescription>
                  </div>
                </div>
              </SheetHeader>
              <ResizablePanelGroup
                direction="horizontal"
                className="h-[calc(100vh-80px)]"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="h-full p-4">
                    <h3 className="font-semibold mb-2">Flutter Code</h3>
                    <pre className="bg-muted text-muted-foreground p-4 rounded-md overflow-auto h-[calc(100%-40px)]">
                      <code>
                        {widget.code || '// No code example available.'}
                      </code>
                    </pre>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="h-full p-4 flex flex-col">
                    <h3 className="font-semibold mb-2">Live Preview</h3>

                    <div className="w-full h-full border rounded-md relative overflow-hidden">
                      <iframe
                        src="/flutter_preview/index.html?example=scaffold"
                        className="w-full h-full border-none outline-none "
                      />
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </Container>
  );
};

export default WidgetGrid;
