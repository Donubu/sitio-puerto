'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Media {
  type: 'image' | 'video';
  url: string;
}

interface ProjectHeroProps {
  media: Media[];
}

export function ProjectHero({ media }: ProjectHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleMedia = () => {
    const items = [...media];
    while (items.length < 3) {
      items.push(...media);
    }

    if (isMobile) {
      return [items[currentIndex]];
    }

    const start = ((currentIndex - 1) + items.length) % items.length;
    return [
      items[(start - 1 + items.length) % items.length],
      items[start],
      items[(start + 1) % items.length]
    ];
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const MediaItem = ({ item, index }: { item: Media, index: number }) => {
    const isCenter = isMobile || index === 1;
    const isLeft = !isMobile && index === 0;

    const handleClick = () => {
      if (isAnimating) return;
      if (isLeft) {
        prevSlide();
      } else if (!isCenter) {
        nextSlide();
      }
    };

    return (
      <div
        onClick={!isCenter ? handleClick : undefined}
        className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
          isCenter 
            ? 'w-full md:w-[50%] z-20 min-h-[50vh] md:min-h-[70vh]' 
            : 'hidden md:block w-[25%] opacity-50 min-h-[50vh] cursor-pointer hover:opacity-70'
        }`}
        style={{
          transform: isCenter ? 'scale(1)' : 'scale(.95)',
        }}
      >
        {item.type === 'video' ? (
          <video
            src={item.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={item.url}
            alt=""
            fill
            className="object-cover"
          />
        )}
      </div>
    );
  };

  return (
    <div className="w-full mx-auto relative px-4 md:px-0">
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-4">
          {getVisibleMedia().map((item, index) => (
            <MediaItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-3 text-black/50 hover:text-black transition-colors duration-200 transform hover:scale-110"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-3 text-black/50 hover:text-black transition-colors duration-200 transform hover:scale-110"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {media.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-black w-8' : 'bg-black/50'
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}