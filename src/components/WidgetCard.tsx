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
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';

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
            <div className="flex flex-col h-full pt-4 px-4 gap-2">
              <h3 className="font-semibold mb-2 min-h-[36px]">Flutter Code</h3>
              <div className="max-h-full h-full">
                <CodeEditor
                  code={widget.code || '// No code example available.'}
                  theme={editorTheme}
                />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="h-full  pt-4 px-4 flex flex-col">
              <Tabs defaultValue="preview" className="h-full flex flex-col">
                <TabsList className="mb-2">
                  <TabsTrigger value="preview">Live Preview</TabsTrigger>
                  <TabsTrigger value="properties">Properties</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="flex-grow">
                  <CodePreview
                    widgetName={
                      widget.name !== 'FloatingActionButton (FAB)'
                        ? widget.name
                        : 'floatingactionbutton'
                    }
                  />
                </TabsContent>
                <TabsContent
                  value="properties"
                  className="flex-grow overflow-auto"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Default Value</TableHead>
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
                      No properties defined for this widget.
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

export default WidgetCard;
