'use client';

import { useEffect, useState, useRef } from 'react';

export function useScrollParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        setOffset(scrollPosition * speed);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [speed]);

  return offset;
}