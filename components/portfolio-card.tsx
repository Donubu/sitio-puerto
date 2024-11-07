'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  href: string;
}

export function PortfolioCard({ 
  title, 
  description, 
  videoUrl, 
  posterUrl,
  href 
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout>();
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      // Store the play promise
      playPromiseRef.current = videoRef.current.play();
      
      // Handle the play promise
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            // Video started playing successfully
            const duration = videoRef.current?.duration || 0;
            const updateInterval = 50; // Update every 50ms for smooth progress
            
            progressIntervalRef.current = setInterval(() => {
              if (videoRef.current) {
                const currentProgress = (videoRef.current.currentTime / duration) * 100;
                setProgress(currentProgress);
              }
            }, updateInterval);
          })
          .catch(error => {
            // Handle any errors
            if (error.name !== 'AbortError') {
              console.error('Video playback error:', error);
            }
          });
      }
    } else if (videoRef.current) {
      // Only pause if the play promise has resolved
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              setProgress(0);
            }
          })
          .catch(() => {
            // Ignore AbortError as it's expected when quickly hovering in/out
          });
      }
      
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
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
      className="relative overflow-hidden rounded-lg aspect-video bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Progress Bar */}
      <div className="absolute top-4 right-4 w-24 h-0.5 bg-white/10 z-20">
        <div 
          className="h-full bg-white/30 transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        poster={posterUrl}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm text-white/80">
            {description}
          </p>
        </div>

        <Link 
          href={href}
          className="self-end text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
        >
          Ver más
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}