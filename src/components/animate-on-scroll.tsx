'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-from-bottom' | 'slide-in-from-left' | 'slide-in-from-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimateOnScroll({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  const animationClasses = {
    'fade-in': 'opacity-0',
    'slide-in-from-bottom': 'opacity-0 translate-y-8',
    'slide-in-from-left': 'opacity-0 -translate-x-8',
    'slide-in-from-right': 'opacity-0 translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        !isVisible && animationClasses[animation],
        isVisible && 'opacity-100 translate-y-0 translate-x-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
