'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  style?: object;
}

export function AnimatedSection({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0,
  style = {}
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      style={style}
      ref={ref}
      className={cn(
        inView ? `animate-${animation}` : 'opacity-0',
        delay ? `animation-delay-${delay}` : '',
        className
      )}
    >
      {children}
    </div>
  );
}