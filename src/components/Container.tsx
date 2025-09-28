import { cn } from '@/lib/utils';
import React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={cn`mx-auto w-full max-w-[1200px] px-4 ${className}`}>
      {children}
    </div>
  );
}
