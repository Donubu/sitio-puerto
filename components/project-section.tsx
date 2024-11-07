'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollParallax } from '@/hooks/use-scroll-parallax';

interface ProjectSectionProps {
  project: {
    title: string;
    description: string;
    video: string;
    image: string;
    href: string;
  };
  index: number;
}

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const offset = useScrollParallax(0.5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 min-h-screen flex items-center justify-center"
      style={{ zIndex: index }}
    >
      
      <div className="relative z-10 w-full px-6">
        <Link 
          href={project.href}
          className="group relative block overflow-hidden rounded-lg bg-black aspect-video max-w-[2000px] mx-auto"
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src={project.video} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 transform transition-transform duration-300 group-hover:scale-105">
              {project.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl transform transition-transform duration-300 group-hover:scale-105">
              {project.description}
            </p>
            <span className="mt-8 flex items-center gap-2 text-white text-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Ver más
              <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}