'use client';

import { useState, useEffect } from 'react';

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY + 20});
      setIsVisible(true);
      
      // Hide the dot after 2 seconds of no movement
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  {
    //mix-blend-difference 
  }
  return (
    <div
      className="fixed pointer-events-none z-[100] transition-opacity duration-300"
      style={{
        transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-5 h-5 bg-red-500 rounded-full" />
    </div>
  );
}