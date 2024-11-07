'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fetchProjects } from '@/lib/api';

interface Project {
  id: string;
  title: string;
  excerpt: string;
  heroMedia: Array<{
    type: 'image' | 'video';
    url: string;
  }>;
  thumbnail: string;
  slug: string;
}

interface PortfolioCardProps {
  title: string;
  excerpt: string;
  heroMedia: Array<{
    type: 'image' | 'video';
    url: string;
  }>;
  thumbnail: string;
  slug: string;
}

function PortfolioCard({ title, excerpt, heroMedia, thumbnail, slug }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isHovered) {
      playPromiseRef.current = videoRef.current.play();
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            setIsVideoPlaying(true);
            if (videoRef.current) {
              const duration = videoRef.current.duration;
              progressIntervalRef.current = setInterval(() => {
                if (videoRef.current) {
                  const currentProgress = (videoRef.current.currentTime / duration) * 100;
                  setProgress(currentProgress);
                }
              }, 50);
            }
          })
          .catch(error => {
            if (error.name !== 'AbortError') {
              console.error('Error playing video:', error);
            }
          });
      }
    } else {
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              setIsVideoPlaying(false);
              setProgress(0);
              if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
              }
            }
          })
          .catch(() => {
            // Ignore AbortError as it's expected when quickly hovering in/out
          });
      } else if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsVideoPlaying(false);
        setProgress(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden rounded-lg aspect-video bg-gray-900 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Progress Bar */}
      <div className={`absolute top-4 right-4 w-32 h-0.5 bg-white/30 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="h-full bg-red-600/60 transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Thumbnail Image */}
      <Image
        src={thumbnail}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video */}
      {heroMedia[0].type === 'video' && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroMedia[0].url} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            {excerpt}
          </p>
        </div>
        <Link
          href={`/portfolio/${slug}`}
          className="self-end text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 delay-200"
        >
          Ver más
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

export function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explora nuestros casos de éxito más recientes
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 200}
            >
              <PortfolioCard
                title={project.title}
                excerpt={project.excerpt}
                heroMedia={project.heroMedia}
                thumbnail={project.thumbnail}
                slug={project.slug}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}