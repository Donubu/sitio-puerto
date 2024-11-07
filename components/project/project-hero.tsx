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

  const getVisibleMedia = () => {
    const items = [...media];
    while (items.length < 3) {
      items.push(...media);
    }
    
    const start = ((currentIndex - 1) + items.length) % items.length;
    const visibleItems = [
      items[(start - 1 + items.length) % items.length],
      items[start],
      items[(start + 1) % items.length]
    ];
    
    return visibleItems;
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
    const isCenter = index === 1;

    return (
      <div
        className={`min-h-96 relative overflow-hidden rounded-lg transition-all duration-500 ${
          isCenter ? 'w-full md:w-[100%] z-20' : 'w-full md:w-full z-10 opacity-50'
        }`}
        style={{
          aspectRatio: '16/9',
          transform: isCenter ? 'scale(2)' : 'scale(.8)',
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
    <div className="w-full md:w-[100%] mx-auto relative px-4 md:px-0">
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {getVisibleMedia().map((item, index) => (
            <MediaItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}