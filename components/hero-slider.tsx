'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    video: 'https://static.puer.to/videos/1.mp4',
    title: 'Creatividad sin límites',
    subtitle: 'Transformamos ideas en experiencias memorables',
    cta: {
      primary: { text: 'Iniciar Proyecto', href: '/contacto' },
    }
  },
  {
    video: 'https://static.puer.to/videos/2.mp4',
    title: 'Marketing Digital',
    subtitle: 'Conectamos tu marca con tu audiencia',
    cta: {
      primary: { text: 'Consulta Gratis', href: '/contacto' },
    }
  },
  {
    video: 'https://static.puer.to/videos/3.mp4',
    title: 'Estrategia & Innovación',
    subtitle: 'Resultados medibles y escalables',
    cta: {
      primary: { text: 'Empezar Ahora', href: '/contacto' }
    }
  },
];

const SLIDE_DURATION = 8000; // 8 seconds per slide

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>();

  const animate = () => {
    const elapsedTime = Date.now() - startTimeRef.current;
    const newProgress = (elapsedTime / SLIDE_DURATION) * 100;

    if (newProgress <= 100) {
      setProgress(newProgress);
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [currentSlide]);

  const nextSlide = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="fixed inset-0 w-full h-screen">
      <div 
        className="relative h-full w-full flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 h-full w-full flex-shrink-0"
            style={{ left: `${index * 100}%` }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8 max-w-4xl px-6">
                <h2 className="text-5xl md:text-7xl font-bold text-white animate-fade-up">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 animate-fade-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
                  <Button 
                    asChild
                    size="lg"
                    className="animated-button min-w-[200px]"
                  >
                    <Link href={slide.cta.primary.href}>
                      <span>{slide.cta.primary.text} <ArrowRight className="ml-2 h-5 w-5 inline-block" /></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-8 right-8 w-24 h-0.5 bg-white/10 z-20">
        <div 
          className="h-full bg-white/30 transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}