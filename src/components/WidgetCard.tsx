'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ExternalLinkIcon } from 'lucide-react';
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
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from './ui/badge';
const CodeEditor = React.lazy(() => import('./CodeEditor'));
import CodePreview from './CodePreview';
import { useMediaQuery } from '@/hooks/use-media-query';
import React from 'react';

interface WidgetCardProps {
  widget: {
    name: string;
    description: string;
    category: string;
    docUrl: string;
    code?: string;
    properties?: {
      name: string;
      type: string;
      defaultValue: string;
    }[];
    id: string;
  };
  editorTheme: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WidgetCard = ({
  widget,
  editorTheme,
  isOpen,
  onOpenChange,
}: WidgetCardProps) => {
  const t = useTranslations(`Widgets.${widget.id}`);
  const tShared = useTranslations();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Sheet key={widget.name} open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Card className="group p-4 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-900/50 dark:hover:bg-gray-800/60">
          <CardHeader className="p-0 flex flex-row items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className="text-base font-semibold">
                  {t('name')}
                </CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px] font-normal">
                {t('category')}
              </Badge>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={widget.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tShared('WidgetCard.docsTooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardDescription className="mt-2 text-sm">
            {t('description')}
          </CardDescription>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-full max-w-full sm:max-w-full md:max-w-[90vw] lg:max-w-[80vw] p-0">
        <SheetHeader>
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <SheetTitle>{t('name')}</SheetTitle>
              <SheetDescription>{t('description')}</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <ResizablePanelGroup
          direction={isMobile ? 'vertical' : 'horizontal'}
          className="h-[calc(100vh-80px)]"
        >
          {!isMobile && (
            <>
              <ResizablePanel defaultSize={50}>
                <div className="flex flex-col h-full p-4 gap-2">
                  <h3 className="font-semibold mb-2">
                    {tShared('CodeEditor.title')}
                  </h3>
                  <div className="max-h-full h-full">
                    <React.Suspense fallback={<>Loading editor...</>}>
                      <CodeEditor // Added overflow-auto here
                        code={widget.code || '// No code example available.'}
                        theme={editorTheme}
                      />
                    </React.Suspense>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
            </>
          )}
          <ResizablePanel defaultSize={50}>
            <div className="h-full p-4 flex flex-col min-h-[528px]">
              <Tabs defaultValue="preview" className="h-full flex flex-col">
                <TabsList className="mb-2">
                  <TabsTrigger value="preview">
                    {tShared('CodePreview.title')}
                  </TabsTrigger>
                  {isMobile && (
                    <TabsTrigger value="code">
                      {tShared('CodeEditor.title')}
                    </TabsTrigger>
                  )}
                  <TabsTrigger value="properties">
                    {tShared('WidgetProperties.title')}
                  </TabsTrigger>
                </TabsList>
                {isMobile && (
                  <TabsContent value="code" className="flex-grow">
                    <div className="max-h-full h-full">
                      <React.Suspense fallback={<>Loading editor...</>}>
                        <CodeEditor // Added overflow-auto here
                          code={widget.code || '// No code example available.'}
                          theme={editorTheme}
                        />
                      </React.Suspense>
                    </div>
                  </TabsContent>
                )}
                <TabsContent value="preview" className="flex-grow">
                  <CodePreview widgetId={widget.id} />
                </TabsContent>
                <TabsContent
                  value="properties"
                  className="flex-grow overflow-auto"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          {tShared('WidgetProperties.property')}
                        </TableHead>
                        <TableHead>
                          {tShared('WidgetProperties.type')}
                        </TableHead>
                        <TableHead>
                          {tShared('WidgetProperties.defaultValue')}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {widget.properties?.map((prop) => (
                        <TableRow key={prop.name}>
                          <TableCell className="font-mono">
                            {prop.name}
                          </TableCell>
                          <TableCell className="font-mono text-blue-500">
                            {prop.type}
                          </TableCell>
                          <TableCell className="font-mono text-green-500">
                            {prop.defaultValue}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {(!widget.properties || widget.properties.length === 0) && (
                    <p className="text-center text-muted-foreground mt-4">
                      {tShared('WidgetProperties.noProperties')}
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(WidgetCard);
