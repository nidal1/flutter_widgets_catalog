'use client';

interface CodePreviewProps {
  widgetId: string;
}

const CodePreview = ({ widgetId }: CodePreviewProps) => {
  return (
    <div className="w-full h-full border rounded-md relative overflow-hidden">
      <iframe
        src={`/flutter_preview/build/web/index.html?example=${widgetId}`}
        className="w-full h-full border-none outline-none "
        title={`${widgetId} Preview`}
      />
    </div>
  );
};

export default CodePreview;
