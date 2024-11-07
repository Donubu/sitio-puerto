'use client';

import { useEffect, useRef } from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  videoUrl: string;
}

export function PageHeader({ title, description, videoUrl }: PageHeaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down video for better visual effect
    }
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 animate-fade-up">
            {title}
          </h1>
          <p className="text-lg text-gray-300 animate-fade-up animation-delay-200">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}