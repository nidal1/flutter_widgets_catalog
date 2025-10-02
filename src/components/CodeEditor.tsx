'use client';

import Editor from '@monaco-editor/react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface CodeEditorProps {
  code: string;
  theme: string;
}

const CodeEditor = ({ code, theme }: CodeEditorProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="relative h-full rounded-md overflow-hidden border">
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 z-10 h-7 w-7"
        onClick={handleCopy}
      >
        {isCopied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
      <div dir="ltr" className="h-full w-full">
        <Editor
          height="100%"
          width="100%"
          language="dart"
          value={code}
          theme={theme}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
