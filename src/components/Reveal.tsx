'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    observer.observe(element);

    // iOS WebKit safety fallback: guarantee visibility even if observer delays or fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => {
      clearTimeout(timer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-3'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
