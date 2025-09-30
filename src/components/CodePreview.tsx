'use client';

interface CodePreviewProps {
  widgetName: string;
}

const CodePreview = ({ widgetName }: CodePreviewProps) => {
  const exampleKey = widgetName.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <div className="w-full h-full border rounded-md relative overflow-hidden">
      <iframe
        src={`/flutter_preview/build/web/index.html?example=${exampleKey}`}
        className="w-full h-full border-none outline-none "
        title={`${widgetName} Preview`}
      />
    </div>
  );
};

export default CodePreview;
