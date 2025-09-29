'use client';

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
import { Badge } from './ui/badge';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';

interface WidgetCardProps {
  widget: {
    name: string;
    description: string;
    category: string;
    docUrl: string;
    code?: string;
  };
  editorTheme: string;
}

const WidgetCard = ({ widget, editorTheme }: WidgetCardProps) => {
  return (
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
              <div className="h-[calc(100%-40px)]">
                <CodeEditor
                  code={widget.code || '// No code example available.'}
                  theme={editorTheme}
                />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="h-full p-4 flex flex-col">
              <h3 className="font-semibold mb-2">Live Preview</h3>
              <CodePreview widgetName={widget.name} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SheetContent>
    </Sheet>
  );
};

export default WidgetCard;
